export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const { mode, user } = req.body;
  if (!user) return res.status(400).json({ error: 'Paramètres manquants' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API manquante' });

  const sources = mode === 'cabinets'
    ? 'Consultor, LinkedIn, Financial Times, Les Echos, sites officiels des cabinets'
    : 'sites officiels des écoles, LinkedIn, Financial Times, Les Echos';

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1000,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        system: `Tu es un agent de veille. Après ta recherche, tu dois répondre UNIQUEMENT avec un objet JSON valide, sans aucun texte avant ou après. Format obligatoire:
{"resultats":[{"nom":"nom court","badge":"Programme","titre":"titre factuel","date":"mois année","source":"source","resume":"1-2 phrases en français"}]}
- badge = "Programme" pour accréditations/classements/curriculum, "Recrutement" pour emploi/stages, "Actualité" pour le reste
- Sources prioritaires: ${sources}
- Langues de recherche: FR, EN, IT, DE, ES
- Résumés toujours en français
- NE PAS écrire de texte introductif. Commencer directement par {`,
        messages: [{ role: 'user', content: user }],
      }),
    });

    if (!r.ok) throw new Error(`API ${r.status}: ${await r.text()}`);

    const data = await r.json();
    const content = data.content || [];
    const stop = data.stop_reason;

    // Si l'agent veut faire une recherche, continuer la boucle une fois
    if (stop === 'tool_use') {
      const msgs = [
        { role: 'user', content: user },
        { role: 'assistant', content },
        { role: 'user', content: content.filter(b => b.type === 'tool_use').map(b => ({ type: 'tool_result', tool_use_id: b.id, content: 'OK' })) }
      ];

      const r2 = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({
          model: 'claude-haiku-4-5',
          max_tokens: 800,
          tools: [{ type: 'web_search_20250305', name: 'web_search' }],
          system: `Réponds UNIQUEMENT avec ce JSON (commence par {, finis par }), sans texte avant ni après:
{"resultats":[{"nom":"nom","badge":"Programme","titre":"titre","date":"mois année","source":"source","resume":"résumé en français"}]}`,
          messages: msgs,
        }),
      });
      if (r2.ok) {
        const d2 = await r2.json();
        const t2 = (d2.content?.find(b => b.type === 'text')?.text || '').replace(/```json|```/g, '').trim();
        const m2 = t2.match(/\{[\s\S]*"resultats"[\s\S]*\}/);
        if (m2) {
          try {
            const p = JSON.parse(m2[0]);
            if (p.resultats?.length) return res.status(200).json(p);
          } catch {}
        }
        // Fallback formatage
        return await formatFallback(apiKey, t2, res);
      }
    }

    const text = content.find(b => b.type === 'text')?.text || '';
    const clean = text.replace(/```json|```/g, '').trim();
    const match = clean.match(/\{[\s\S]*"resultats"[\s\S]*\}/);
    if (match) {
      try {
        const p = JSON.parse(match[0]);
        if (p.resultats?.length) return res.status(200).json(p);
      } catch {}
    }

    return await formatFallback(apiKey, text, res);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function formatFallback(apiKey, text, res) {
  if (!text || text.length < 20) {
    return res.status(200).json({ resultats: [{ nom: '', badge: 'Actualité', titre: 'Aucun résultat', date: '2025', source: '', resume: 'Aucune information trouvée.' }] });
  }
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 600,
        messages: [{ role: 'user', content: `Extrais les faits de ce texte et retourne UNIQUEMENT ce JSON (rien d'autre):\n{"resultats":[{"nom":"nom","badge":"Programme","titre":"titre","date":"date","source":"source","resume":"résumé en français"}]}\n\nTexte:\n${text.slice(0, 2000)}` }],
      }),
    });
    if (r.ok) {
      const d = await r.json();
      const t = (d.content?.find(b => b.type === 'text')?.text || '').replace(/```json|```/g, '').trim();
      const m = t.match(/\{[\s\S]*"resultats"[\s\S]*\}/);
      if (m) {
        const p = JSON.parse(m[0]);
        if (p.resultats?.length) return res.status(200).json(p);
      }
    }
  } catch {}
  return res.status(200).json({ resultats: [{ nom: '', badge: 'Actualité', titre: 'Résultat de veille', date: '2025', source: '', resume: text.slice(0, 300) }] });
}
