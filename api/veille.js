export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const { mode, user } = req.body;
  if (!user) return res.status(400).json({ error: 'Paramètres manquants' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API manquante' });

  const sources = mode === 'cabinets'
    ? 'Consultor (consultor.fr), LinkedIn, Financial Times, Les Echos, sites officiels des cabinets'
    : 'sites officiels des écoles, LinkedIn, Financial Times (ft.com), Les Echos (lesechos.fr)';

  // Étape 1 : recherche web
  const searchPrompt = `Fais une recherche web sur: ${user}. Sources prioritaires: ${sources}. Langues: FR, EN, IT, DE, ES.`;

  try {
    const r1 = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1000,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: [{ role: 'user', content: searchPrompt }],
      }),
    });

    if (!r1.ok) {
      const txt = await r1.text();
      return res.status(502).json({ error: `Erreur API (${r1.status}): ${txt}` });
    }

    const d1 = await r1.json();
    const rawText = (d1.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n');

    // Étape 2 : formater en JSON
    const r2 = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 800,
        system: 'Tu es un formateur JSON. Tu reçois des informations de veille et tu les formates en JSON. Tu réponds UNIQUEMENT avec le JSON demandé, sans texte avant ni après, sans markdown, sans backticks.',
        messages: [{
          role: 'user',
          content: `Formate ces informations de veille en JSON. Chaque actualité distincte devient un élément. Badge = "Programme" pour les écoles, "Recrutement" pour le recrutement, "Actualité" sinon. Résumés en français.\n\nFormat strict:\n{"resultats":[{"nom":"nom court","badge":"Programme","titre":"titre actu","date":"mois année","source":"nom source","resume":"2 phrases en français"}]}\n\nInformations:\n${rawText.slice(0, 3000)}`
        }],
      }),
    });

    if (!r2.ok) {
      const txt = await r2.text();
      return res.status(502).json({ error: `Erreur formatage (${r2.status}): ${txt}` });
    }

    const d2 = await r2.json();
    const jsonText = (d2.content?.find(b => b.type === 'text')?.text || '').replace(/```json|```/g, '').trim();
    const match = jsonText.match(/\{[\s\S]*"resultats"[\s\S]*\}/);

    if (match) {
      try {
        return res.status(200).json(JSON.parse(match[0]));
      } catch {}
    }

    return res.status(200).json({
      resultats: [{ nom: '', badge: 'Actualité', titre: 'Résultats de veille', date: '2025', source: '', resume: rawText.slice(0, 400) }]
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
