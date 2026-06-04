export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { system, user } = req.body;

  if (!system || !user) {
    return res.status(400).json({ error: 'Paramètres manquants' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Clé API manquante côté serveur' });
  }

  const tools = [{ type: 'web_search_20250305', name: 'web_search' }];
  let messages = [{ role: 'user', content: user }];

  try {
    // Boucle outil : on relance jusqu'à obtenir end_turn (max 5 tours)
    for (let attempt = 0; attempt < 5; attempt++) {
      const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1500,
          system,
          tools,
          messages,
        }),
      });

      if (!anthropicRes.ok) {
        const errText = await anthropicRes.text();
        return res.status(502).json({ error: `Erreur API Anthropic (${anthropicRes.status}) : ${errText}` });
      }

      const data = await anthropicRes.json();
      const stopReason = data.stop_reason;
      const content = data.content || [];

      if (stopReason === 'end_turn') {
        // Extraire le texte final
        const textBlock = content.find(b => b.type === 'text');
        const raw = textBlock ? textBlock.text : '';

        // Parser le JSON
        const match = raw.replace(/```json|```/g, '').trim().match(/\{[\s\S]*\}/);
        if (!match) {
          return res.status(200).json({ resultats: [{ titre: 'Réponse reçue', badge: 'Actualité', resume: raw }] });
        }
        try {
          const parsed = JSON.parse(match[0]);
          return res.status(200).json(parsed);
        } catch (e) {
          return res.status(200).json({ resultats: [{ titre: 'Réponse reçue', badge: 'Actualité', resume: raw }] });
        }
      }

      if (stopReason === 'tool_use') {
        // Continuer la boucle avec les résultats d'outils
        messages.push({ role: 'assistant', content });
        const toolResults = content
          .filter(b => b.type === 'tool_use')
          .map(b => ({ type: 'tool_result', tool_use_id: b.id, content: 'Search executed successfully.' }));
        messages.push({ role: 'user', content: toolResults });
        continue;
      }

      // Stop reason inattendu
      return res.status(500).json({ error: `Stop reason inattendu : ${stopReason}` });
    }

    return res.status(500).json({ error: 'Trop de tours sans résultat final.' });

  } catch (err) {
    return res.status(500).json({ error: `Erreur serveur : ${err.message}` });
  }
}
