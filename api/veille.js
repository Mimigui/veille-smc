export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const { mode, user } = req.body;
  if (!user) return res.status(400).json({ error: 'Paramètres manquants' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API manquante' });

  const sources = mode === 'cabinets'
    ? 'sites officiels des cabinets, Consultor (consultor.fr), LinkedIn, Financial Times, Les Echos'
    : 'sites officiels des écoles, LinkedIn, Financial Times (ft.com), Les Echos (lesechos.fr)';

  const systemPrompt = `Tu es un agent de veille pour la directrice du MSc SMC de SKEMA Business School.
Fais une recherche web sur la demande. Sources à privilégier: ${sources}.
Langues: français, anglais, italien, allemand, espagnol. Résumés toujours en français.
Après la recherche, réponds STRICTEMENT avec ce JSON et rien d'autre:
{"resultats":[{"nom":"nom court","badge":"Programme","titre":"titre actu","date":"mois année","source":"nom source","resume":"2 phrases en français"}]}
Pas de texte avant, pas de texte après, pas de markdown, pas de backticks. Uniquement le JSON.`;

  const tools = [{ type: 'web_search_20250305', name: 'web_search' }];
  let messages = [{ role: 'user', content: user }];

  try {
    for (let i = 0; i < 10; i++) {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5',
          max_tokens: 2000,
          system: systemPrompt,
          tools,
          messages,
        }),
      });

      if (!r.ok) {
        const txt = await r.text();
        return res.status(502).json({ error: `Erreur API (${r.status}): ${txt}` });
      }

      const data = await r.json();
      const { stop_reason, content = [] } = data;

      if (stop_reason === 'tool_use') {
        messages.push({ role: 'assistant', content });
        const results = content
          .filter(b => b.type === 'tool_use')
          .map(b => ({ type: 'tool_result', tool_use_id: b.id, content: 'Search done.' }));
        messages.push({ role: 'user', content: results });
        continue;
      }

      if (stop_reason === 'end_turn') {
        const textBlock = content.find(b => b.type === 'text');
        const raw = (textBlock?.text || '').replace(/```json|```/g, '').trim();

        // Tenter parse JSON direct
        try {
          const parsed = JSON.parse(raw);
          if (parsed.resultats) return res.status(200).json(parsed);
        } catch {}

        // Chercher un objet JSON dans le texte
        const match = raw.match(/\{[\s\S]*"resultats"[\s\S]*\}/);
        if (match) {
          try {
            const parsed = JSON.parse(match[0]);
            if (parsed.resultats) return res.status(200).json(parsed);
          } catch {}
        }

        // Si l'agent a du texte mais pas de JSON, lui demander de formater
        if (raw.length > 50) {
          messages.push({ role: 'assistant', content });
          messages.push({
            role: 'user',
            content: 'Maintenant formate ces informations en JSON strict: {"resultats":[{"nom":"...","badge":"...","titre":"...","date":"...","source":"...","resume":"..."}]}. Uniquement le JSON, rien d\'autre.'
          });
          continue;
        }

        return res.status(200).json({
          resultats: [{ nom: '', badge: 'Actualité', titre: 'Résultat de veille', date: '2025', source: '', resume: raw.slice(0, 400) }]
        });
      }

      return res.status(500).json({ error: `Stop inattendu: ${stop_reason}` });
    }
    return res.status(500).json({ error: 'Pas de résultat après plusieurs tentatives.' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
