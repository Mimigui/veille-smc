export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const { mode, user } = req.body;
  if (!user) return res.status(400).json({ error: 'Paramètres manquants' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API manquante' });

  const sources = mode === 'cabinets'
    ? 'Consultor, LinkedIn, Financial Times, Les Echos, sites officiels des cabinets'
    : 'sites officiels des écoles, LinkedIn, Financial Times, Les Echos';

  const call = async (body) => {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`API ${r.status}: ${await r.text()}`);
    return r.json();
  };

  try {
    // Étape 1 : recherche web
    const d1 = await call({
      model: 'claude-haiku-4-5',
      max_tokens: 800,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{ role: 'user', content: `Recherche actualités 2024-2025 sur: ${user}. Sources: ${sources}. Langues: FR EN IT DE ES. Donne les faits bruts.` }],
    });

    const rawText = (d1.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\n')
      .slice(0, 2500);

    if (!rawText || rawText.length < 20) {
      return res.status(200).json({ resultats: [{ nom: '', badge: 'Actualité', titre: 'Aucun résultat', date: '2025', source: '', resume: 'Aucune information trouvée.' }] });
    }

    // Étape 2 : formatage JSON strict
    const d2 = await call({
      model: 'claude-haiku-4-5',
      max_tokens: 600,
      messages: [{
        role: 'user',
        content: `À partir de ce texte, extrais les actualités distinctes et retourne UNIQUEMENT ce JSON (pas d'autre texte) :
{"resultats":[{"nom":"nom court du programme ou cabinet","badge":"Programme","titre":"titre bref","date":"mois année","source":"nom source","resume":"1-2 phrases en français"}]}

Badge = "Programme" pour écoles/masters, "Recrutement" pour recrutement/emploi, "Actualité" pour reste.
Texte source :
${rawText}`
      }],
    });

    const raw2 = (d2.content?.find(b => b.type === 'text')?.text || '')
      .replace(/```json|```/g, '').trim();

    const match = raw2.match(/\{[\s\S]*"resultats"[\s\S]*\}/);
    if (match) {
      try {
        const parsed = JSON.parse(match[0]);
        if (parsed.resultats?.length) return res.status(200).json(parsed);
      } catch {}
    }

    // Fallback : afficher le texte brut découpé en paragraphes
    const lines = rawText.split('\n').filter(l => l.trim().length > 40).slice(0, 5);
    return res.status(200).json({
      resultats: lines.map((l, i) => ({
        nom: '', badge: 'Actualité', titre: `Résultat ${i + 1}`, date: '2025', source: '', resume: l.slice(0, 200)
      }))
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
