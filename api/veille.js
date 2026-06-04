export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const { system, user, mode } = req.body;
  if (!user) return res.status(400).json({ error: 'Paramètres manquants' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API manquante' });

  const sourcesPrograms = `Sources prioritaires: sites officiels des écoles (hec.edu, essec.edu, escp.eu, edhec.edu, em-lyon.com, hhl.de, unisg.ch, ie.edu, wbs.ac.uk, unibocconi.it), Financial Times (ft.com), Les Echos (lesechos.fr), LinkedIn.`;

  const sourcesCabinets = `Sources prioritaires: sites officiels des cabinets (mckinsey.com, bcg.com, bain.com, deloitte.com, rolandberger.com, oliverwyman.com, kearney.com, ey.com, accenture.com, siapartners.com), Consultor (consultor.fr), LinkedIn, Financial Times (ft.com), Les Echos (lesechos.fr).`;

  const langNote = `Cherche dans ces langues: français, anglais, italien, allemand, espagnol.`;

  const jsonFormat = `Réponds UNIQUEMENT avec ce JSON valide, sans texte avant ni après, sans markdown:
{"resultats":[{"nom":"nom court","badge":"Programme ou Actualité ou Recrutement ou Tendance RH","titre":"titre actu","date":"mois/année","source":"nom source","resume":"2 phrases max en français"}]}`;

  let systemPrompt = '';
  if (mode === 'programmes') {
    systemPrompt = `Tu es un agent de veille pour la directrice du MSc SMC de SKEMA. ${sourcesPrograms} ${langNote} ${jsonFormat}`;
  } else if (mode === 'cabinets') {
    systemPrompt = `Tu es un agent de veille conseil pour la directrice du MSc SMC de SKEMA. ${sourcesCabinets} ${langNote} ${jsonFormat}`;
  } else {
    systemPrompt = `Tu es un agent de veille pour la directrice du MSc SMC de SKEMA. ${sourcesPrograms} ${sourcesCabinets} ${langNote} ${jsonFormat}`;
  }

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
          max_tokens: 1500,
          system: systemPrompt,
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
        const raw = textBlock ? textBlock.text.replace(/```json|```/g, '').trim() : '';
        const match = raw.match(/\{[\s\S]*\}/);
        if (match) {
          try {
            return res.status(200).json(JSON.parse(match[0]));
          } catch {}
        }
        return res.status(200).json({
          resultats: [{ nom: '', badge: 'Actualité', titre: 'Résultats de veille', date: '2025', source: '', resume: raw.slice(0, 500) }]
        });
      }

      if (stopReason === 'tool_use') {
        messages.push({ role: 'assistant', content });
        const toolResults = content
          .filter(b => b.type === 'tool_use')
          .map(b => ({ type: 'tool_result', tool_use_id: b.id, content: 'OK' }));
        messages.push({ role: 'user', content: toolResults });
        continue;
      }

      return res.status(500).json({ error: `Stop inattendu: ${stopReason}` });
    }
    return res.status(500).json({ error: 'Pas de résultat.' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
