export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });
  const { mode, user, submode } = req.body;
  if (!user) return res.status(400).json({ error: 'Paramètres manquants' });
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API manquante' });

  const call = async (body) => {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`API ${r.status}: ${await r.text()}`);
    return r.json();
  };

  const extractJSON = (text) => {
    const clean = (text || '').replace(/```json|```/g, '').trim();
    const match = clean.match(/\{[\s\S]*"resultats"[\s\S]*\}/);
    if (match) { try { return JSON.parse(match[0]); } catch {} }
    return null;
  };

  const runWithTools = async (system, userMsg) => {
    const d1 = await call({
      model: 'claude-haiku-4-5', max_tokens: 1200,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      system, messages: [{ role: 'user', content: userMsg }],
    });
    const c1 = d1.content || [];
    if (d1.stop_reason === 'tool_use') {
      const msgs = [
        { role: 'user', content: userMsg },
        { role: 'assistant', content: c1 },
        { role: 'user', content: c1.filter(b => b.type === 'tool_use').map(b => ({ type: 'tool_result', tool_use_id: b.id, content: 'OK' })) }
      ];
      const d2 = await call({ model: 'claude-haiku-4-5', max_tokens: 1000, system, tools: [{ type: 'web_search_20250305', name: 'web_search' }], messages: msgs });
      return d2.content?.find(b => b.type === 'text')?.text || '';
    }
    return c1.find(b => b.type === 'text')?.text || '';
  };

  try {
    // STRUCTURE DU PROGRAMME (timeline)
    if (submode === 'structure') {
      const system = `Tu es un expert des programmes de Master en stratégie et conseil. Visite les URLs officielles fournies et extrais la structure du programme en semestres/trimestres.
Réponds UNIQUEMENT avec ce JSON valide (rien avant, rien après):
{"resultats":[{"nom":"nom court programme","badge":"Programme","titre":"Structure — nom programme","source":"url officielle","lien":"url","resume":"1 phrase de description","structure":[{"periode":"Semestre 1 / Term 1 / etc","contenu":"description des modules et activités de cette période"}]}]}`;
      const text = await runWithTools(system, `Extrais la structure timeline de ces programmes depuis leurs URLs officielles: ${user}`);
      const parsed = extractJSON(text);
      if (parsed?.resultats?.length) return res.status(200).json(parsed);
      // Fallback formatage
      const df = await call({ model: 'claude-haiku-4-5', max_tokens: 800,
        messages: [{ role: 'user', content: `Formate en JSON (rien d'autre):\n{"resultats":[{"nom":"","badge":"Programme","titre":"Structure — nom","source":"","lien":"","resume":"","structure":[{"periode":"Semestre 1","contenu":"..."}]}]}\n\nInfos:\n${text.slice(0,2500)}` }]
      });
      const tf = df.content?.find(b => b.type === 'text')?.text || '';
      const pf = extractJSON(tf);
      if (pf?.resultats?.length) return res.status(200).json(pf);
      return res.status(200).json({ resultats: [{ nom: '', badge: 'Programme', titre: 'Structure du programme', source: '', resume: text.slice(0, 400) }] });
    }

    // CONTENU DES COURS
    if (submode === 'cours') {
      const system = `Tu es un expert des programmes de Master en stratégie et conseil. Visite les URLs officielles et extrais les cours par catégorie.
Réponds UNIQUEMENT avec ce JSON valide (rien avant, rien après):
{"resultats":[{"nom":"nom court programme","badge":"Programme","titre":"Cours — nom programme","source":"url","lien":"url","resume":"1 phrase","cours":{"Stratégie":["cours1","cours2"],"Conseil":["cours1","cours2"],"Quantitatif":["cours1"],"International":["cours1"],"Autre":["cours1"]}}]}`;
      const text = await runWithTools(system, `Extrais la liste des cours de ces programmes depuis leurs URLs officielles: ${user}`);
      const parsed = extractJSON(text);
      if (parsed?.resultats?.length) return res.status(200).json(parsed);
      const df = await call({ model: 'claude-haiku-4-5', max_tokens: 800,
        messages: [{ role: 'user', content: `Formate en JSON (rien d'autre):\n{"resultats":[{"nom":"","badge":"Programme","titre":"Cours — nom","source":"","lien":"","resume":"","cours":{"Stratégie":[],"Conseil":[],"Autre":[]}}]}\n\nInfos:\n${text.slice(0,2500)}` }]
      });
      const tf = df.content?.find(b => b.type === 'text')?.text || '';
      const pf = extractJSON(tf);
      if (pf?.resultats?.length) return res.status(200).json(pf);
      return res.status(200).json({ resultats: [{ nom: '', badge: 'Programme', titre: 'Contenu des cours', source: '', resume: text.slice(0, 400) }] });
    }

    // PROCESSUS RECRUTEMENT
    if (submode === 'processus') {
      const system = `Expert recrutement cabinets de conseil. Décris le processus détaillé pour chaque cabinet.
Réponds UNIQUEMENT avec ce JSON valide:
{"resultats":[{"nom":"cabinet","badge":"Recrutement","titre":"Processus — cabinet","date":"2024-2025","source":"site officiel","lien":"https://careers.cabinet.com","resume":"résumé","processus":{"etapes":["1. CV/Lettre","2. Test","3. Entretien","4. Final"],"timing":"3-6 semaines","tests":"PST, case studies","conseils":"conseil clé"}}]}`;
      const text = await runWithTools(system, `Processus de recrutement détaillé pour: ${user}`);
      const parsed = extractJSON(text);
      if (parsed?.resultats?.length) return res.status(200).json(parsed);
      const df = await call({ model: 'claude-haiku-4-5', max_tokens: 800,
        messages: [{ role: 'user', content: `Formate en JSON (rien d'autre):\n{"resultats":[{"nom":"","badge":"Recrutement","titre":"Processus","date":"2025","source":"","lien":"","resume":"","processus":{"etapes":[],"timing":"","tests":"","conseils":""}}]}\n\nInfos:\n${text.slice(0,2500)}` }]
      });
      const tf = df.content?.find(b => b.type === 'text')?.text || '';
      const pf = extractJSON(tf);
      if (pf?.resultats?.length) return res.status(200).json(pf);
      return res.status(200).json({ resultats: [{ nom: '', badge: 'Recrutement', titre: 'Processus de recrutement', date: '2025', source: '', resume: text.slice(0, 400) }] });
    }

    // MODE NORMAL
    const sources = mode === 'cabinets'
      ? 'Consultor, LinkedIn, Financial Times, Les Echos, sites officiels des cabinets'
      : 'sites officiels des programmes (URLs fournies), LinkedIn, Financial Times, Les Echos';
    const jsonFormat = mode === 'cabinets'
      ? `{"resultats":[{"nom":"cabinet","badge":"Actualité","titre":"titre","date":"mois année","source":"source","lien":"https://url","resume":"1-2 phrases en français"}]}`
      : `{"resultats":[{"nom":"programme","badge":"Programme","titre":"titre","date":"mois année","source":"source","resume":"1-2 phrases en français"}]}`;
    const system = `Agent de veille MSc SMC SKEMA. Sources: ${sources}. Langues: FR EN IT DE ES. Résumés en français.${mode === 'cabinets' ? ' Inclure URL de chaque article dans "lien".' : ''}
Réponds UNIQUEMENT avec ce JSON (commence par {): ${jsonFormat}`;
    const text = await runWithTools(system, user);
    const parsed = extractJSON(text);
    if (parsed?.resultats?.length) return res.status(200).json(parsed);
    const df = await call({ model: 'claude-haiku-4-5', max_tokens: 600,
      messages: [{ role: 'user', content: `Formate en JSON strict (rien d'autre): ${jsonFormat}\n\nInfos:\n${text.slice(0,2000)}` }]
    });
    const tf = df.content?.find(b => b.type === 'text')?.text || '';
    const pf = extractJSON(tf);
    if (pf?.resultats?.length) return res.status(200).json(pf);
    return res.status(200).json({ resultats: [{ nom: '', badge: 'Actualité', titre: 'Résultat', date: '2025', source: '', resume: text.slice(0, 300) }] });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
