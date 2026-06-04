export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { system, user } = req.body;
  if (!system || !user) return res.status(400).json({ error: 'Paramètres manquants' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API manquante' });

  const tools = [{ type: 'web_search_20250305', name: 'web_search' }];
  let messages = [{ role: 'user', content: user }];

  try {
    for (let attempt = 0; attempt < 8; attempt++) {
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
          system: system + ' Important: after searching, always respond with the final JSON object.',
          tools,
          messages,
        }),
      });

      if (!r.ok) {
        const errText = await r.text();
        return res.status(502).json({ error: `Erreur API (${r.status}): ${errText}` });
      }

      const data = await r.json();
      const stopReason = data.stop_reason;
      const content = data.content || [];

      if (stopReason === 'end_turn') {
        const textBlock = content.find(b => b.type === 'text');
        const raw = textBlock ? textBlock.text : '';
        const match = raw.replace(/```json|```/g, '').trim().match(/\{[\s\S]*\}/);
        if (!match) {
          return res.status(200).json({
            resultats: [{ titre: 'Réponse reçue', badge: 'Actualité', resume: raw }]
          });
        }
        try {
          return res.status(200).json(JSON.parse(match[0]));
        } catch {
          return res.status(200).json({
            resultats: [{ titre: 'Réponse reçue', badge: 'Actualité', resume: raw }]
          });
        }
      }

      if (stopReason === 'tool_use') {
        messages.push({ role: 'assistant', content });
        const toolResults = content
          .filter(b => b.type === 'tool_use')
          .map(b => ({ type: 'tool_result', tool_use_id: b.id, content: 'Search completed.' }));
        messages.push({ role: 'user', content: toolResults });
        continue;
      }

      return res.status(500).json({ error: `Stop inattendu: ${stopReason}` });
    }
    return res.status(500).json({ error: 'Trop de tours sans résultat.' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
