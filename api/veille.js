export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const { mode, user } = req.body;
  if (!user) return res.status(400).json({ error: 'Paramètres manquants' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API manquante' });

  const sources = mode === 'cabinets'
    ? 'Consultor, LinkedIn, Financial Times, Les Echos, sites officiels des cabinets'
    : 'sites officiels des écoles, LinkedIn, Financial Times, Les Echos';

  const systemPrompt = `Tu es un agent de veille pour la directrice du MSc SMC de SKEMA.
Fais une recherche web sur: ${user}
Sources: ${sources}. Langues: FR, EN, IT, DE, ES. Résumés en français.
Réponds UNIQUEMENT avec ce JSON valide (pas de texte avant/après, pas de markdown):
{"resultats":[{"nom":"nom","badge":"Programme","titre":"titre","date":"mois 2024 ou 2025","source":"source","resume":"2 phrases"}]}`;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1000,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        system: systemPrompt,
        messages: [{ role: 'user', content: user }],
      }),
    });

    if (!r.ok) {
      const txt = await r.text();
      return res.status(502).json({ error: `Erreur API (${r.status}): ${txt}` });
    }

    const data = await r.json();
    const content = data.content || [];

    // Collecter tous les textes et résultats de recherche
    const texts = content.filter(b => b.type === 'text').map(b => b.text).join('\n');
    const searchResults = content.filter(b => b.type === 'tool_result').map(b => b.content).join('\n');

    // Chercher JSON dans la réponse
    const allText = texts + searchResults;
    const match = allText.replace(/```json|```/g, '').match(/\{[\s\S]*"resultats"[\s\S]*\}/);
    if (match) {
      try {
        return res.status(200).json(JSON.parse(match[0]));
      } catch {}
    }

    // Si pas de JSON mais du texte, faire un second appel pour formatter
    if (texts.length > 30) {
      const r2 = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5',
          max_tokens: 800,
          messages: [{
            role: 'user',
            content: `Formate ces informations en JSON strict. Réponds UNIQUEMENT avec le JSON, rien d'autre:\n{"resultats":[{"nom":"...","badge":"Programme ou Actualité ou Recrutement","titre":"...","date":"...","source":"...","resume":"..."}]}\n\nInfos:\n${texts.slice(0, 2000)}`
          }],
        }),
      });
      if (r2.ok) {
        const d2 = await r2.json();
        const t2 = (d2.content?.find(b => b.type === 'text')?.text || '').replace(/```json|```/g, '').trim();
        const m2 = t2.match(/\{[\s\S]*"resultats"[\s\S]*\}/);
        if (m2) {
          try { return res.status(200).json(JSON.parse(m2[0])); } catch {}
        }
      }
    }

    return res.status(200).json({
      resultats: [{ nom: '', badge: 'Actualité', titre: 'Résultat', date: '2025', source: '', resume: texts.slice(0, 300) || 'Aucun résultat trouvé.' }]
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
