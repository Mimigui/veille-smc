
// Base de données cabinets — processus recrutement et veille
const CABINETS = {
  "McKinsey": {
    nom: "McKinsey & Company",
    lien_carrieres: "https://www.mckinsey.com/careers",
    resume: "Cabinet #1 mondial en volume d'activité. Très présent en France (Paris 8e). Recrute principalement via les grandes écoles françaises (HEC, Polytechnique, ESSEC, ESCP).",
    actu: { titre: "McKinsey #1 mondial mais BCG en forte progression", date: "Mai 2026", source: "Consultor", lien: "https://www.consultor.fr", resume: "McKinsey occupe toujours la première place sur le marché du conseil en stratégie en volume d'activité, mais l'écart se réduit avec BCG qui pourrait le rattraper. En parallèle, McKinsey demande à sa branche chinoise de ne pas s'impliquer dans des projets GenAI." },
    processus: {
      etapes: ["1. Candidature en ligne (CV + lettre de motivation)", "2. Test PST (Problem Solving Test) — 26 questions en 60 min", "3. Premier entretien : 2 case studies + fit questions", "4. Deuxième entretien : 2 case studies avancés + entretien partner", "5. Décision finale (sous 2-3 semaines)"],
      timing: "4 à 8 semaines au total",
      tests: "PST (Problem Solving Test) : test de raisonnement analytique sur données. Depuis 2022, McKinsey utilise aussi le Imbellus game dans certains pays.",
      conseils: "Préparer intensivement les case studies (minimum 50 cas). McKinsey valorise la rigueur analytique et la capacité à structurer rapidement un problème complexe.",
      salaire_junior: "65 000 – 75 000 € brut/an (Business Analyst)"
    }
  },
  "BCG": {
    nom: "Boston Consulting Group",
    lien_carrieres: "https://www.bcg.com/careers",
    resume: "2e cabinet mondial, en forte croissance en France. BCG a recruté 2x plus que McKinsey et 3x plus que Bain en France (2020-2022). Culture analytique et défense du raisonnement sous pression.",
    actu: { titre: "BCG : croissance soutenue malgré le marché tendu", date: "Mai 2026", source: "Consultor", lien: "https://www.consultor.fr", resume: "BCG résiste mieux que ses concurrents dans un marché du conseil en stagnation (-2% à +1% en 2025 selon Syntec). Le cabinet maintient ses recrutements juniors quand d'autres gèlent. Roland Berger a repassé la barre du milliard d'euros de CA en 2025." },
    processus: {
      etapes: ["1. Candidature en ligne (CV + cover letter)", "2. Test en ligne : BCG Online Case (simulation de mission)", "3. Premier tour : 2 entretiens case study + questions comportementales", "4. Deuxième tour : 2 entretiens avancés avec seniors/partners", "5. Offre (décision sous 1-2 semaines après le 2e tour)"],
      timing: "3 à 6 semaines",
      tests: "BCG Online Case : simulation d'une vraie mission de conseil (analyse de données, recommandations). Plus représentatif qu'un test papier.",
      conseils: "BCG valorise la rigueur analytique et la capacité à défendre un raisonnement sous pression. Préparer des cas avec un partenaire est indispensable. Mettre en avant des accomplissements chiffrés dans le CV.",
      salaire_junior: "65 000 – 75 000 € brut/an (Consultant)"
    }
  },
  "Bain": {
    nom: "Bain & Company",
    lien_carrieres: "https://www.bain.com/careers",
    resume: "3e cabinet MBB, culture très axée sur le travail d'équipe et les résultats concrets. Bain Paris reçoit ~3 000 CV/an, retient 1 400 pour entretiens, embauche 80 personnes.",
    actu: { titre: "Bain ouvre un bureau à Montréal, Matthieu Vigneron nommé leader", date: "Automne 2025", source: "Consultor", lien: "https://www.consultor.fr", resume: "Matthieu Vigneron, Partner français de Bain depuis 20 ans, dirige le nouveau bureau de Montréal ouvert à l'automne 2025. Par ailleurs, Bain a décidé de ne plus mener aucune mission en Afrique du Sud, 7 ans après un scandale sous la présidence Zuma." },
    processus: {
      etapes: ["1. Candidature en ligne — CV évalué sur 4 critères : résolution de problème, impact personnel, leadership, esprit entrepreneurial", "2. Test analytique (30 min) : compétences calculatoires et analytiques", "3. Premier entretien : case study + entretien fit avec un opérationnel", "4. Deuxième entretien : case study avancé + entretien partner", "5. Décision finale"],
      timing: "4 à 8 semaines",
      tests: "Test calculatoire propre à Bain (30 min) + case studies. Bain est le seul MBB à commencer par un test calculatoire avant les entretiens.",
      conseils: "Bain cherche des profils avec un réel esprit d'équipe et une orientation résultats. 70% des candidatures éliminées dès le screening CV. Le même CV qui passe chez McKinsey ne passe pas mécaniquement chez Bain.",
      salaire_junior: "62 000 – 72 000 € brut/an (Associate Consultant)"
    }
  },
  "Deloitte": {
    nom: "Deloitte Consulting",
    lien_carrieres: "https://www2.deloitte.com/fr/fr/careers.html",
    resume: "Plus grand cabinet de conseil et d'audit au monde (Big Four). Deloitte Strategy & Operations recrute des profils business/stratégie, tandis que Monitor Deloitte se positionne sur la stratégie pure.",
    actu: { titre: "Deloitte restructure ses activités conseil en France", date: "2025", source: "Consultor / presse", lien: "https://www.consultor.fr", resume: "Comme les autres Big Four, Deloitte fait face à une pression sur ses marges conseil. Le cabinet mise sur l'IA et la transformation digitale comme relais de croissance pour compenser le ralentissement des missions traditionnelles." },
    processus: {
      etapes: ["1. Candidature en ligne sur deloitte.com/careers", "2. Tests en ligne : raisonnement logique, verbal, numérique (30-45 min)", "3. Entretien RH : motivation, parcours, compétences comportementales", "4. Entretien technique : case study ou étude de cas sectorielle", "5. Assessment center (pour certains postes) ou entretien final avec manager"],
      timing: "3 à 8 semaines",
      tests: "Tests psychométriques SHL ou Korn Ferry (raisonnement logique, numérique, verbal) + case study moins structuré que MBB.",
      conseils: "Moins sélectif que les MBB sur les case studies, mais fort accent sur la motivation sectorielle et la connaissance du cabinet. Mentionner les spécialités de Deloitte (IA, ESG, transformation).",
      salaire_junior: "45 000 – 55 000 € brut/an (Consultant)"
    }
  },
  "Roland Berger": {
    nom: "Roland Berger",
    lien_carrieres: "https://www.rolandberger.com/fr/Careers/",
    resume: "Seul grand cabinet de conseil en stratégie d'origine européenne (allemand). Très présent en France, Allemagne, Italie. A repassé la barre du milliard d'euros de CA en 2025.",
    actu: { titre: "Roland Berger franchit 1 milliard d'euros de CA en 2025", date: "Mai 2026", source: "Consultor", lien: "https://www.consultor.fr", resume: "Roland Berger repasse la barre du milliard d'euros de chiffre d'affaires en 2025, seuil symbolique atteint pour la seconde fois après 2023. Eight Advisory recrute également une associée Life Sciences chez Roland Berger, signe de sa forte attractivité senior." },
    processus: {
      etapes: ["1. Candidature en ligne (CV + lettre de motivation FR ou EN)", "2. Entretien RH : parcours, motivation, culture Roland Berger", "3. Premier entretien : case study industrie/stratégie + fit questions", "4. Deuxième entretien : case study complexe + entretien partner", "5. Décision sous 2-3 semaines"],
      timing: "4 à 6 semaines",
      tests: "Pas de test PST formalisé. Case studies souvent sectoriels (industrie, énergie, automobile).",
      conseils: "Roland Berger valorise les profils internationaux et la culture européenne. Connaître les secteurs phares (industrie, énergie, santé) est un plus. Culture collaborative.",
      salaire_junior: "58 000 – 68 000 € brut/an (Junior Consultant)"
    }
  },
  "Oliver Wyman": {
    nom: "Oliver Wyman",
    lien_carrieres: "https://www.oliverwyman.com/careers.html",
    resume: "Top 6 mondial, filiale de Marsh McLennan. 250 consultants à Paris, 46 partners. Spécialité forte en Financial Services. Croissance à 2 chiffres ces 10 dernières années. Lance un pôle IA-Data & Analytics en France en 2026.",
    actu: { titre: "Oliver Wyman lance son pôle IA-Data en France et recrute chez BCG et Kearney", date: "Avril 2026", source: "Consultor", lien: "https://www.consultor.fr/articles/lex-directeur-e-commerce-et-innovation-de-carrefour-de-retour-chez-oliver-wyman-pour-prendre-la-tete-des-offres-ia", resume: "Jessyn Katchera (ex-BCG, ex-Carrefour) rejoint Oliver Wyman pour lancer son pôle Data & Analytics en France. Le cabinet recrute aussi Pierre-Alexandre Koch (ex-Kearney) pour renforcer son pôle Consommation-Télécom-Technologie, illustrant la dynamique forte du bureau de Paris." },
    processus: {
      etapes: ["1. Candidature en ligne — distinguer GMC (généraliste) et FS (Financial Services)", "2. Test quantitatif type GMAT (1h, 3 parties de 20 min : numérique, raisonnement déductif, inductif)", "3. Premier tour : entretien de groupe ou demi-journée d'assessment", "4. Deuxième tour : 2 entretiens individuels de 45 min (case study + fit)", "5. Troisième tour : 2 entretiens avec seniors/partners"],
      timing: "4 à 8 semaines",
      tests: "Test quantitatif type GMAT (mauvaises réponses pénalisantes). Distinguer les filières GMC et Financial Services dès la candidature.",
      conseils: "Cibler la practice Financial Services si profil finance/banque. Culture analytique très forte. Mentionner les secteurs de spécialité d'OW dans la lettre de motivation.",
      salaire_junior: "58 000 – 68 000 € brut/an"
    }
  },
  "Kearney": {
    nom: "Kearney",
    lien_carrieres: "https://www.kearney.com/careers",
    resume: "Top 6 mondial, reconnu pour sa stratégie opérationnelle et ses missions PMO. Fort en Grande Distribution et Luxe (Pernod-Ricard, Chanel, LVMH). Le partnership parisien est affaibli par des départs récents vers OW et d'autres cabinets.",
    actu: { titre: "Kearney : vague de départs du partnership parisien vers la concurrence", date: "Février-Avril 2026", source: "Consultor", lien: "https://www.consultor.fr", resume: "Kearney Paris connaît une vague de départs au niveau partnership : Charles-Étienne Bost rejoint Oliver Wyman, Pierre-Alexandre Koch (patron grande conso en Europe) également. Consultor parle de 'dégringolade du partnership à Paris', fragilisant le bureau français." },
    processus: {
      etapes: ["1. Candidature en ligne (CV + lettre de motivation)", "2. Entretien RH : motivation, fit culturel Kearney", "3. Premier entretien : case study stratégie ou opérations + fit questions", "4. Deuxième entretien : case study avancé + entretien senior", "5. Décision finale (2-3 semaines après le dernier entretien)"],
      timing: "4 à 6 semaines",
      tests: "Pas de test standardisé type PST. Case studies souvent orientés opérations et secteurs industriels.",
      conseils: "Kearney valorise la stratégie opérationnelle. Mettre en avant des expériences de mise en œuvre concrète, pas seulement d'analyse. Connaître les secteurs retail, luxe, défense.",
      salaire_junior: "56 000 – 65 000 € brut/an"
    }
  },
  "EY-Parthenon": {
    nom: "EY-Parthenon",
    lien_carrieres: "https://www.ey.com/fr_fr/careers",
    resume: "Branche stratégie d'EY (Big Four). Positionné sur la stratégie, les transactions et la transformation. Recrute des profils business et finance, avec passerelles possibles vers EY Advisory.",
    actu: { titre: "EY-Parthenon : focus sur l'IA et les transactions Life Sciences en 2025", date: "2025", source: "EY France", lien: "https://www.ey.com/fr_fr/careers/how-we-hire", resume: "EY-Parthenon publie ses tendances 2025 sur les transactions Life Sciences et la transformation publique. Le cabinet continue de recruter des jeunes diplômés et des profils expérimentés, avec un accent sur les compétences IA (EY.ai)." },
    processus: {
      etapes: ["1. Candidature en ligne sur ey.com/careers", "2. Tests en ligne : raisonnement logique, numérique, verbal (SHL)", "3. Entretien RH vidéo : motivation EY-Parthenon, parcours", "4. Entretien technique : case study stratégie ou transactions + fit", "5. Assessment center ou entretien final avec manager/partner"],
      timing: "3 à 6 semaines",
      tests: "Tests psychométriques SHL standards + case study moins intense que MBB. Focus sur les secteurs transactions (M&A, due diligence).",
      conseils: "EY-Parthenon est une bonne entrée dans la stratégie pour des profils moins ciblés MBB. Mettre en avant l'intérêt pour les transactions et la transformation. La passerelle EY Advisory permet de diversifier.",
      salaire_junior: "44 000 – 52 000 € brut/an (Consultant)"
    }
  },
  "Accenture Strategy": {
    nom: "Accenture Strategy",
    lien_carrieres: "https://www.accenture.com/fr-fr/careers",
    resume: "Branche stratégie d'Accenture (120 000 consultants mondiaux). Positionné sur la stratégie digitale, l'IA et la transformation des grandes entreprises. Fort accent sur la technologie.",
    actu: { titre: "Accenture mise sur l'IA générative pour ses missions stratégie en France", date: "2025", source: "Accenture France", lien: "https://www.accenture.com/fr-fr/careers", resume: "Accenture Strategy accélère sur l'IA générative et les services d'automatisation. Le cabinet recrute des profils alliant compétences stratégiques et techniques, dans un contexte où les entreprises cherchent à intégrer l'IA dans leur modèle opérationnel." },
    processus: {
      etapes: ["1. Candidature en ligne sur accenture.com/careers", "2. Tests en ligne : raisonnement logique et numérique + test de personnalité", "3. Entretien vidéo en différé (questions enregistrées)", "4. Entretien avec consultant/manager : case study + questions comportementales", "5. Entretien final avec senior manager ou MD"],
      timing: "3 à 6 semaines",
      tests: "Tests cognitifs en ligne + case study moins formel que MBB. Forte dimension technologique dans les cas proposés.",
      conseils: "Accenture Strategy valorise les profils tech-savvy. Mettre en avant des projets numériques ou IA. Moins de culture case study pur que MBB, plus d'orientation transformation.",
      salaire_junior: "42 000 – 52 000 € brut/an (Analyst)"
    }
  },
  "Sia Partners": {
    nom: "Sia Partners",
    lien_carrieres: "https://www.sia-partners.com/fr/carrieres",
    resume: "Cabinet de conseil français fondé en 1999. 3 500 consultants dans 20 pays. Positionné sur la transformation digitale, l'IA et le management. Fort ancrage France avec clientèle grands groupes.",
    actu: { titre: "Sia Partners accélère sur l'IA et les missions ESG en 2025", date: "2025", source: "Sia Partners", lien: "https://www.sia-partners.com/fr", resume: "Sia Partners renforce son positionnement IA et ESG en 2025, avec des recrutements ciblés en data science et développement durable. Le cabinet mise sur sa spécificité 'conseil augmenté par l'IA' pour se différencier des grands cabinets généralistes." },
    processus: {
      etapes: ["1. Candidature en ligne sur sia-partners.com/carrieres", "2. Entretien RH téléphonique : parcours, motivations, disponibilité", "3. Entretien technique : case study ou étude de cas sectorielle + questions comportementales", "4. Entretien avec manager ou senior : approfondissement technique et fit", "5. Décision (2-3 semaines)"],
      timing: "3 à 5 semaines",
      tests: "Pas de test standardisé. Case study moins formel que MBB. Forte dimension sectorielle (banque, assurance, énergie).",
      conseils: "Sia Partners est accessible à des profils d'écoles de commerce moins ciblées par les MBB. Mettre en avant l'intérêt pour la transformation digitale et l'IA. Bon tremplin pour une première expérience en conseil.",
      salaire_junior: "40 000 – 48 000 € brut/an (Consultant Junior)"
    }
  },
  "Strategy&": {
    nom: "Strategy& (PwC)",
    lien_carrieres: "https://www.pwc.fr/fr/carrieres.html",
    resume: "Branche stratégie de PwC, née de l'acquisition de Booz & Company en 2014. ~3 800 consultants mondiaux. Positionnée entre MBB et Big Four : missions stratégie pure avec support de PwC (transactions, fiscalité, digital).",
    actu: { titre: "Strategy& PwC : focus sur la transformation IA et les deals en 2025-2026", date: "2025-2026", source: "PwC France", lien: "https://www.pwc.fr/fr/carrieres.html", resume: "Strategy& accélère sur les missions de transformation liées à l'IA générative et les transactions complexes. Le cabinet tire parti de l'écosystème PwC (deals, fiscalité, audit) pour proposer des offres intégrées stratégie+exécution que les MBB ne peuvent pas égaler." },
    processus: {
      etapes: ["1. Candidature en ligne sur pwc.fr/carrieres", "2. Tests en ligne : raisonnement logique et numérique (SHL ou Korn Ferry)", "3. Entretien RH : motivation Strategy& vs PwC Advisory, parcours", "4. Premier entretien technique : case study stratégie + fit questions", "5. Entretien final avec senior manager/partner Strategy&"],
      timing: "3 à 6 semaines",
      tests: "Tests psychométriques SHL + case study stratégie (moins intense que MBB mais plus rigoureux que Big Four généraliste).",
      conseils: "Bien distinguer Strategy& (stratégie pure) de PwC Advisory (conseil généraliste). Mettre en avant l'intérêt pour l'intégration stratégie-exécution. Bon pont entre monde MBB et Big Four.",
      salaire_junior: "46 000 – 55 000 € brut/an (Consultant)"
    }
  },
  "Monitor Deloitte": {
    nom: "Monitor Deloitte",
    lien_carrieres: "https://www2.deloitte.com/fr/fr/careers.html",
    resume: "Branche stratégie de Deloitte (anciennement Monitor Group, acquis en 2013). Positionnée sur la stratégie corporate, la croissance et l'innovation. Souvent citée comme la plus proche des MBB parmi les Big Four strategy arms.",
    actu: { titre: "Monitor Deloitte : missions croissance et innovation en forte demande en 2025", date: "2025", source: "Deloitte France", lien: "https://www2.deloitte.com/fr/fr/pages/strategy-operations/topics/monitor-deloitte.html", resume: "Monitor Deloitte connaît une forte demande sur les missions de stratégie de croissance et d'innovation, portées par les entreprises cherchant à se réinventer dans un contexte d'incertitude économique. Le cabinet bénéficie du réseau Deloitte pour des missions intégrées." },
    processus: {
      etapes: ["1. Candidature en ligne sur deloitte.com/fr/careers", "2. Tests en ligne : raisonnement logique, numérique, verbal", "3. Entretien RH vidéo ou téléphonique : motivation Monitor vs Deloitte, parcours", "4. Entretien technique : case study stratégie conduit par le candidat (candidate-led)", "5. Entretien final avec manager/partner Monitor Deloitte"],
      timing: "3 à 6 semaines",
      tests: "Tests psychométriques standards + case study candidate-led (le candidat structure lui-même l'approche sans guidage, contrairement aux MBB).",
      conseils: "Monitor Deloitte utilise des case studies candidate-led : structurer l'approche soi-même est indispensable. Rejoindre Monitor Deloitte est plus proche de BCG que de Deloitte généraliste en termes de missions.",
      salaire_junior: "46 000 – 55 000 € brut/an (Analyst)"
    }
  },
  "IBM": {
    nom: "IBM Consulting (Strategy)",
    lien_carrieres: "https://www.ibm.com/fr-fr/employment/",
    resume: "Branche conseil d'IBM, 3e cabinet mondial par le CA (~21 Md$ en 2024). Positionné sur la transformation digitale, l'IA (Watson), le cloud et la stratégie technologique. Différent des cabinets de stratégie pure : fort accent sur l'implémentation.",
    actu: { titre: "IBM Consulting mise sur l'IA générative comme moteur de croissance en 2025", date: "2025", source: "IBM France", lien: "https://www.ibm.com/fr-fr/employment/", resume: "IBM Consulting fait de l'IA générative sa principale offre de croissance en 2025. Le cabinet positionne ses consultants comme des experts de l'intégration IA dans les opérations des grandes entreprises, se différenciant des cabinets de stratégie pure par une approche tech-first." },
    processus: {
      etapes: ["1. Candidature en ligne sur ibm.com/employment", "2. Tests en ligne : raisonnement cognitif + évaluation situationnelle", "3. Entretien RH vidéo : compétences comportementales (STAR method)", "4. Entretien technique : cas business ou technique selon profil", "5. Assessment final ou entretien avec manager senior"],
      timing: "4 à 8 semaines",
      tests: "Tests cognitifs IBM + évaluation situationnelle. Entretiens très orientés compétences comportementales (méthode STAR). Moins de case study pur que MBB.",
      conseils: "IBM Consulting convient aux profils alliant compétences business et technologiques. Mettre en avant les projets IA/data/cloud. Bon choix pour une carrière à l'intersection stratégie et tech.",
      salaire_junior: "42 000 – 52 000 € brut/an (Consultant)"
    }
  },
  "TNP Consultants": {
    nom: "TNP Consultants",
    lien_carrieres: "https://www.tnpconsultants.com/postuler/",
    resume: "Cabinet de conseil français indépendant fondé en 2007. ~800 consultants. 3 pôles : TNP Strategy, TNP Trust (réglementaire/risques), TNP Digital (IA, cloud). Clients : banque, assurance, énergie, transport. Classé 4 étoiles sur consultancy.eu en France.",
    actu: { titre: "TNP Consultants déploie l'IA sur 100 robots de processus et renforce son offre cloud", date: "2025", source: "TNP / France Num", lien: "https://www.tnpconsultants.com", resume: "TNP Consultants a mis en place un centre d'excellence Smart Automation avec ~100 robots sur deux ans pour ses clients, et déploie une gouvernance data avec 40 use cases analytiques. Le cabinet recrute des consultants spécialisés IA et cloud, avec un focus sur les secteurs banque, assurance et énergie." },
    processus: {
      etapes: ["1. Candidature en ligne sur tnpconsultants.com/postuler ou via cooptation", "2. Entretien RH téléphonique : parcours, motivations, disponibilité", "3. Plusieurs entretiens FIT avec des personnes de grades différents (processus long, 2-8 mois selon les retours Glassdoor)", "4. Étude de cas sectorielle (banque, assurance, digital)", "5. Décision finale — retours parfois lents selon les candidats"],
      timing: "3 semaines à 8 mois (variable selon les équipes)",
      tests: "Étude de cas sectorielle. Pas de test standardisé type PST.",
      conseils: "TNP est plus accessible que les MBB mais recrute des profils sérieux en transformation. Relancer régulièrement après les entretiens (les retours peuvent être lents). Bon tremplin pour le conseil en transformation opérationnelle et digitale.",
      salaire_junior: "38 000 – 46 000 € brut/an (Consultant Junior)"
    }
  },
  "Porsche Consulting": {
    nom: "Porsche Consulting",
    lien_carrieres: "https://www.porsche-consulting.com/france/fr/carriere/",
    resume: "Filiale conseil du Groupe Porsche AG. Spécialisée en stratégie opérationnelle, excellence industrielle et transformation. Bureau Paris actif avec recrutements juniors/stagiaires en pré-embauche. Anglais obligatoire.",
    actu: { titre: "Porsche Consulting Paris : recrutements juniors en logique de pré-embauche", date: "2025", source: "Porsche Consulting France", lien: "https://www.porsche-consulting.com/france/fr/carriere/faq", resume: "Porsche Consulting Paris recrute principalement via des stages en logique de pré-embauche CDI. Le processus inclut 3 à 5 entretiens avec études de cas et test d'anglais. Le cabinet se différencie par son ADN industriel et automobile, avec des missions en excellence opérationnelle et transformation." },
    processus: {
      etapes: ["1. Candidature CV + lettre de motivation (email : carriere@porsche-consulting.com)", "2. Sélection sur dossier — profils grandes écoles/universités ciblés", "3. Entretiens 1 à 3 : échange profil + étude de cas (distanciel ou présentiel)", "4. Entretiens 4 à 5 avec membres seniors de l'équipe conseil", "5. Test de maîtrise de l'anglais intégré dans les entretiens — décision finale"],
      timing: "3 à 5 semaines",
      tests: "Études de cas à chaque entretien + test d'anglais. Pas de PST. Les cas sont souvent orientés opérations/industrie automobile.",
      conseils: "Porsche Consulting valorise l'excellence opérationnelle et l'ADN industriel. Mettre en avant tout intérêt pour l'automobile, le manufacturing ou la transformation. La plupart des stages débouchent sur un CDI.",
      salaire_junior: "42 000 – 50 000 € brut/an (Consultant Junior)"
    }
  }
};


// Comparaison recrutement par pays
const PAYS_COMPARAISON = {
  "France": {
    marche: "Marché très concentré sur Paris (8e). Recrutement dominé par les grandes écoles (HEC, ESCP, ESSEC, X, Centrale). 70%+ des juniors MBB viennent de 7 écoles.",
    specificites: ["Grandes écoles >>> universités pour les MBB", "Recrutement junior (bac+5) dominant (70% des embauches MBB)", "Case study en français possible chez Roland Berger et cabinets français", "Salaires légèrement inférieurs à Londres ou New York", "Forte culture du stage long (6 mois) comme voie d'entrée"],
    top_ecoles: ["HEC Paris", "ESCP", "ESSEC", "École Polytechnique", "CentraleSupélec", "Sciences Po", "emlyon"],
    salaire_junior: "62 000 – 75 000 € (MBB) / 40 000 – 55 000 € (Big Four stratégie)",
    tendance: "Marché tendu en 2024-2025 : recrutements en baisse de 20% vs 33% en 2023. Sélectivité accrue. BCG résiste mieux que McKinsey et Bain."
  },
  "Allemagne": {
    marche: "Marché distribué entre Munich, Francfort, Berlin, Hambourg. Roland Berger y est dominant (siège). McKinsey et BCG très actifs. Fort dans l'industrie et l'automobile.",
    specificites: ["Grandes universités (LMU Munich, WHU, Mannheim) très valorisées", "Recrutement mixte : juniors ET Quereinsteiger (reconversions)", "Fort accent sur les secteurs industriels (auto, chimie, mécanique)", "Processus souvent en anglais même pour les postes basés en Allemagne", "Kultur : culture de rigueur analytique forte"],
    top_ecoles: ["WHU Koblenz", "LMU Munich", "Mannheim", "HHL Leipzig", "Frankfurt School", "ESMT Berlin"],
    salaire_junior: "55 000 – 70 000 € (MBB) / 42 000 – 52 000 € (Tier 2)",
    tendance: "Marché dynamique malgré la récession industrielle 2024. Roland Berger et McKinsey en forte activité sur la transformation de l'industrie automobile vers l'électrique."
  },
  "Royaume-Uni": {
    marche: "Londres = hub mondial du conseil. Recrutement très compétitif, international. Oxford, Cambridge, LSE dominent. Salaires les plus élevés d'Europe.",
    specificites: ["Oxbridge + LSE + Imperial = voie royale vers MBB", "Recrutement très international : 40%+ de non-britanniques dans les promotions juniors", "MBA route bien établie (London Business School, INSEAD)", "Processus entièrement en anglais", "Culture du networking via consulting clubs"],
    top_ecoles: ["Oxford", "Cambridge", "LSE", "Imperial College", "London Business School (MBA)", "Warwick"],
    salaire_junior: "55 000 – 80 000 £ (MBB) / 40 000 – 55 000 £ (Tier 2)",
    tendance: "Recrutement solide post-Brexit. Londres reste le marché le plus actif d'Europe pour le conseil en stratégie. Forte demande sur les profils IA et data."
  },
  "Italie": {
    marche: "Milan = hub principal (Bocconi domine). Rome secondaire. Marché plus petit qu'en France ou Allemagne mais très actif dans les secteurs luxe, mode, agroalimentaire et infrastructure.",
    specificites: ["Bocconi University = école quasi-exclusive pour accéder aux MBB en Italie", "Fort accent sur les secteurs luxe/mode (LVMH, Gucci, Prada) et F&B", "Processus souvent bilingue (italien + anglais)", "Stage de fin d'études = voie principale d'entrée", "Réseaux alumni très importants"],
    top_ecoles: ["Università Bocconi", "Politecnico di Milano", "LUISS Roma", "Ca' Foscari Venezia"],
    salaire_junior: "45 000 – 60 000 € (MBB) / 32 000 – 45 000 € (Tier 2)",
    tendance: "Marché en croissance, porté par les transformations dans le luxe et l'énergie. McKinsey et BCG Milan recrutent activement des profils Bocconi."
  },
  "Espagne": {
    marche: "Madrid + Barcelone. IE Business School = porte d'entrée principale. Marché en forte croissance, porté par le tourisme, l'énergie et les infrastructures.",
    specificites: ["IE Business School = école de référence pour les MBB en Espagne", "ESADE (Barcelone) également très bien placée", "Fort accent sur l'Amérique Latine : un passage en Espagne ouvre souvent des portes en LatAm", "Bilinguisme espagnol/anglais valorisé", "Marchés sectoriels forts : énergie, tourisme, real estate"],
    top_ecoles: ["IE Business School", "ESADE", "IESE", "Universidad Complutense", "Universidad Autónoma de Madrid"],
    salaire_junior: "42 000 – 58 000 € (MBB) / 32 000 – 45 000 € (Tier 2)",
    tendance: "Marché en croissance. Les cabinets MBB et Tier 2 renforcent leurs équipes à Madrid et Barcelone, notamment sur les projets énergie/transition et tourisme."
  },
  "Suisse": {
    marche: "Zurich + Genève. Marché très international, dominé par les cabinets MBB et les Big Four. Fort dans la finance, pharma et luxe. Salaires les plus élevés d'Europe continentale.",
    specificites: ["St. Gallen HSG = école de référence absolue (#1 FT 14 ans de suite)", "INSEAD MBA = voie royale pour les seniors", "Trilinguisme valorisé (FR/DE/EN)", "Forte demande dans pharma (Novartis, Roche) et finance", "Permis de travail nécessaire pour non-UE"],
    top_ecoles: ["University of St. Gallen (HSG)", "EPFL", "ETH Zurich", "IMD Lausanne", "University of Zurich"],
    salaire_junior: "75 000 – 100 000 CHF (MBB) / 60 000 – 75 000 CHF (Tier 2)",
    tendance: "Marché très actif malgré la cherté. McKinsey et BCG Zurich recrutent activement. Fort accent sur les profils pharma/biotech et finance depuis 2024."
  },
  "Pays-Bas / Scandinavie": {
    marche: "Amsterdam (hub Pays-Bas) + Stockholm/Copenhagen/Oslo. Marchés ouverts et internationaux. Fort en tech, énergie et durabilité. Anglais universel.",
    specificites: ["Anglais suffisant, pas besoin de néerlandais/langue locale", "Culture très flat hierarchy : moins de hiérarchie qu'en France", "Fort accent ESG et durabilité dans les missions", "Recrutement très ouvert aux profils non-locaux", "RSM Rotterdam et Copenhagen BS très bien placées"],
    top_ecoles: ["RSM Erasmus Rotterdam", "Copenhagen Business School", "BI Norwegian Business School", "Stockholm School of Economics", "University of Amsterdam"],
    salaire_junior: "55 000 – 70 000 € (MBB) / 42 000 – 55 000 € (Tier 2)",
    tendance: "Marchés en croissance, portés par la transition énergétique (Shell, Equinor) et la tech (ASML, Spotify). BCG Amsterdam et McKinsey Stockholm très actifs en 2025."
  },
  "Moyen-Orient": {
    marche: "Dubai (DIFC) + Abu Dhabi (ADGM) = hubs régionaux. Marchés en forte croissance portés par les fonds souverains (Mubadala, ADIA, PIF Saudi). Pas d'impôt sur le revenu.",
    specificites: ["Salaires nets très élevés (pas d'impôt)", "Visa de travail sponsorisé par l'employeur", "Anglais = langue de travail universelle", "Forts secteurs : infrastructure, immobilier, énergie, Vision 2030 Arabie Saoudite", "Recrutement souvent via transfert interne depuis bureau européen"],
    top_ecoles: ["INSEAD (Abu Dhabi campus)", "London Business School", "HEC Paris", "IE Business School", "American University of Beirut"],
    salaire_junior: "150 000 – 200 000 AED/an net (MBB) ≈ 38 000 – 50 000 €",
    tendance: "Boom du conseil lié aux Vision 2030 (Arabie Saoudite) et aux grands projets UAE. McKinsey, BCG et Roland Berger ont massivement renforcé leurs équipes Dubai/Riyad en 2024-2025."
  },
  "Asie": {
    marche: "Singapour + Hong Kong = hubs régionaux Asie-Pacifique. Singapour en forte croissance post-COVID, Hong Kong en stabilisation après les turbulences politiques. Marchés très compétitifs et internationaux.",
    specificites: ["Anglais = langue de travail, mandarin = atout majeur", "Visa Employment Pass à Singapour (conditions strictes)", "Fort dans finance, tech, consumer goods et healthcare", "Recrutement souvent MBA ou transfert interne", "NUS et NTU très valorisées localement, INSEAD Asia campus fort"],
    top_ecoles: ["INSEAD (Singapore campus)", "NUS Business School", "HKUST Business School", "NTU Singapore", "Chinese University of Hong Kong"],
    salaire_junior: "6 000 – 9 000 SGD/mois (MBB Singapour) ≈ 55 000 – 80 000 €/an",
    tendance: "Singapour = destination #1 en Asie-Pacifique pour le conseil en stratégie. McKinsey, BCG et Bain y ont leurs sièges régionaux AP. Hong Kong se stabilise après plusieurs années difficiles."
  }
};

// Base de données des 10 programmes concurrents
const PROGRAMMES = {
  "Bocconi": {
    nom: "Bocconi University",
    titre_complet: "MSc International Management — Concentration in Consulting",
    lien: "https://www.unibocconi.it/en/programs/master-science/international-management/concentration-consulting",
    duree: "2 ans",
    langue: "Anglais",
    credits: "120 ECTS",
    resume: "Le MSc International Management de Bocconi avec concentration Consulting forme des managers internationaux capables d'exercer dans les grands cabinets de conseil. Programme réputé pour son ancrage dans la recherche et ses liens avec le monde professionnel.",
    structure: [
      { periode: "Année 1 — Semestre 1", contenu: "Fondamentaux du management international : Corporate Strategy, Financial Accounting, Marketing Management, Organizational Behavior, Quantitative Methods for Management" },
      { periode: "Année 1 — Semestre 2", contenu: "Approfondissement stratégique : Business Strategy, Management Consulting (introduction), International Business, Corporate Finance, Business Law" },
      { periode: "Année 2 — Concentration Consulting", contenu: "Cours spécialisés conseil : Advanced Strategy Consulting, Operations & Supply Chain, Digital Transformation, Project Management, Consulting Lab (cas réels avec cabinets partenaires)" },
      { periode: "Année 2 — Semestre 2", contenu: "Électifs avancés + Thèse de master ou projet consulting. Stage obligatoire (3-6 mois) en cabinet ou entreprise internationale." }
    ],
    cours: {
      "Stratégie": ["Corporate Strategy", "Business Strategy", "Competitive Dynamics", "Strategic Management", "International Business Strategy"],
      "Conseil": ["Management Consulting", "Advanced Strategy Consulting", "Consulting Lab", "Client Management", "Problem Solving & Structuring"],
      "Finance": ["Financial Accounting", "Corporate Finance", "Managerial Accounting"],
      "Quantitatif": ["Quantitative Methods for Management", "Data Analysis", "Operations Research"],
      "International": ["International Business", "Global Strategy", "Cross-cultural Management"],
      "Digital": ["Digital Transformation", "Business Analytics", "Technology & Innovation"]
    }
  },
  "EDHEC": {
    nom: "EDHEC Business School",
    titre_complet: "MSc in Strategy, Organisation and Consulting",
    lien: "https://www.edhec.edu/en/programmes/masters-degree/business-degrees/msc-in-strategy-organisation-and-consulting",
    duree: "2 ans",
    langue: "Anglais/Français",
    credits: "120 ECTS",
    resume: "Le MSc Strategy, Organisation and Consulting d'EDHEC prépare aux métiers du conseil en stratégie et transformation organisationnelle. Fort accent sur les compétences analytiques et la résolution de problèmes complexes.",
    structure: [
      { periode: "Année 1 — Semestre 1 (Lille/Nice)", contenu: "Socle commun : Strategic Analysis, Corporate Finance, Marketing Strategy, Organizational Theory, Research Methods, Business Ethics" },
      { periode: "Année 1 — Semestre 2", contenu: "Spécialisation : Strategy Consulting Tools, Change Management, Business Model Innovation, Data-Driven Decision Making, Consulting Project (mission réelle)" },
      { periode: "Année 2 — Semestre 1 (option international)", contenu: "Électifs avancés + possibilité de semestre à l'étranger dans université partenaire. Cours : Advanced Corporate Strategy, M&A, Digital Strategy, Sustainability" },
      { periode: "Année 2 — Semestre 2", contenu: "Stage long (6 mois minimum) en cabinet de conseil ou direction stratégique. Mémoire de recherche appliquée." }
    ],
    cours: {
      "Stratégie": ["Strategic Analysis", "Corporate Strategy", "Business Model Innovation", "Competitive Intelligence", "Advanced Corporate Strategy", "M&A Strategy"],
      "Conseil": ["Strategy Consulting Tools", "Consulting Project", "Change Management", "Transformation Organisationnelle", "Client Engagement"],
      "Finance": ["Corporate Finance", "Financial Modeling", "Valuation"],
      "Quantitatif": ["Data-Driven Decision Making", "Research Methods", "Business Analytics"],
      "International": ["Global Strategy", "International Management", "Cross-cultural Management"],
      "Digital": ["Digital Strategy", "Digital Transformation", "Innovation Management"]
    }
  },
  "emlyon": {
    nom: "emlyon Business School",
    titre_complet: "MSc in Strategy and Consulting",
    lien: "https://en.em-lyon.com/program/msc-in-strategy-consulting/curriculum",
    duree: "2 ans",
    langue: "Anglais",
    credits: "120 ECTS",
    resume: "Le MSc Strategy and Consulting d'emlyon forme des consultants capables de piloter des missions de transformation stratégique. Programme orienté pratique avec de nombreux cas réels et partenariats avec des cabinets de conseil.",
    structure: [
      { periode: "Année 1 — Semestre 1 (Lyon)", contenu: "Fondamentaux : Business Strategy, Corporate Finance, Marketing Management, Leadership & Organizations, Consulting Fundamentals, Business Communication" },
      { periode: "Année 1 — Semestre 2", contenu: "Outils du consultant : Strategic Diagnosis, Financial Analysis for Consultants, Operations Management, Change Management, Live Case Study (mission terrain)" },
      { periode: "Année 2 — Semestre 1 (option abroad)", contenu: "Approfondissement : Advanced Strategy, Digital Transformation Consulting, M&A & Restructuring, Sustainability Consulting, Électives internationales" },
      { periode: "Année 2 — Semestre 2", contenu: "Stage en cabinet (6 mois) + Capstone Project : mission de conseil complète pour une organisation réelle." }
    ],
    cours: {
      "Stratégie": ["Business Strategy", "Advanced Strategy", "Strategic Diagnosis", "Corporate Development", "Competitive Analysis"],
      "Conseil": ["Consulting Fundamentals", "Live Case Study", "Change Management", "M&A & Restructuring", "Sustainability Consulting"],
      "Finance": ["Corporate Finance", "Financial Analysis for Consultants", "Valuation & Financial Modeling"],
      "Quantitatif": ["Data Analytics", "Operations Management", "Quantitative Methods"],
      "International": ["International Strategy", "Global Markets", "Cross-cultural Management"],
      "Digital": ["Digital Transformation Consulting", "Platform Strategy", "Tech & Innovation"]
    }
  },
  "ESCP": {
    nom: "ESCP Business School",
    titre_complet: "MSc Stratégie, Conseil et Organisation",
    lien: "https://escp.eu/programmes/specialised-masters-MSc/MSc-strategie-conseil-organisation",
    duree: "18 mois",
    langue: "Français/Anglais",
    credits: "90 ECTS",
    resume: "Le MSc Stratégie Conseil et Organisation d'ESCP est un programme intensif multi-campus (Paris, Berlin, Madrid) formant des consultants en stratégie et transformation. Forte réputation auprès des cabinets MBB.",
    structure: [
      { periode: "Phase 1 — Tronc commun (6 mois, Paris)", contenu: "Fondamentaux stratégiques : Analyse Stratégique, Finance d'Entreprise, Marketing Stratégique, Théorie des Organisations, Méthodes Quantitatives, Éthique des Affaires" },
      { periode: "Phase 2 — Spécialisation conseil (6 mois, multi-campus)", contenu: "Outils du conseil : Stratégie d'Entreprise Avancée, Fusions-Acquisitions, Restructuration, Conduite du Changement, Consulting Lab (missions réelles avec cabinets partenaires), Design Thinking" },
      { periode: "Phase 3 — Stage et projet de fin d'études (6 mois)", contenu: "Stage obligatoire en cabinet de conseil ou direction stratégique (France ou international) + Mémoire de recherche ou projet consulting." }
    ],
    cours: {
      "Stratégie": ["Analyse Stratégique", "Stratégie d'Entreprise Avancée", "Stratégie Internationale", "Innovation Stratégique", "Business Model Design"],
      "Conseil": ["Consulting Lab", "Conduite du Changement", "Fusions-Acquisitions", "Restructuration", "Gestion de Projet", "Présentation & Communication Client"],
      "Finance": ["Finance d'Entreprise", "Évaluation Financière", "Comptabilité Managériale"],
      "Quantitatif": ["Méthodes Quantitatives", "Data Analytics", "Recherche Opérationnelle"],
      "International": ["Stratégie Internationale", "Management Interculturel", "Marchés Émergents"],
      "Digital": ["Transformation Digitale", "Stratégie Numérique", "Innovation & Technologies"]
    }
  },
  "ESSEC SMIB": {
    nom: "ESSEC Business School",
    titre_complet: "MSc in Strategy, Management and International Business (SMIB)",
    lien: "https://www.essec.edu/en/program/master-strategy-management-international-business/",
    duree: "2 ans",
    langue: "Anglais",
    credits: "120 ECTS",
    resume: "Le SMIB d'ESSEC est classé parmi les meilleurs MSc Strategy en Europe (#3 QS World Rankings 2025). Programme très international formant des stratèges capables d'évoluer en cabinet de conseil ou en direction stratégique d'entreprise.",
    structure: [
      { periode: "Année 1 — Semestre 1 (Cergy)", contenu: "Fondamentaux : Corporate Strategy, International Business, Financial Management, Organizational Behavior, Business Research Methods, Leadership Development" },
      { periode: "Année 1 — Semestre 2 (option Singapour/Rabat)", contenu: "Spécialisation internationale : Global Strategy, Emerging Markets Strategy, Strategic Finance, Digital Business Models, Consulting Workshop" },
      { periode: "Année 2 — Semestre 1 (parcours conseil ou corporate)", contenu: "Cours avancés : Advanced Corporate Strategy, M&A, Private Equity, Sustainability & ESG Strategy, Business Transformation, Électifs spécialisés" },
      { periode: "Année 2 — Semestre 2", contenu: "Stage long (6 mois) en cabinet de conseil international ou multinationale + Thèse professionnelle ou projet de recherche." }
    ],
    cours: {
      "Stratégie": ["Corporate Strategy", "Global Strategy", "Advanced Corporate Strategy", "Competitive Dynamics", "Business Model Innovation", "Emerging Markets Strategy"],
      "Conseil": ["Consulting Workshop", "Business Transformation", "Change Management", "Strategic Diagnosis", "Client Presentations"],
      "Finance": ["Financial Management", "Strategic Finance", "M&A", "Private Equity", "Valuation"],
      "Quantitatif": ["Business Research Methods", "Data Analytics", "Econometrics for Business"],
      "International": ["International Business", "Emerging Markets", "Cross-cultural Management", "Global Supply Chain"],
      "Digital": ["Digital Business Models", "Digital Transformation", "Platform Economy", "AI & Business"]
    }
  },
  "HEC Paris": {
    nom: "HEC Paris",
    titre_complet: "Master in Strategic Management",
    lien: "https://www.hec.edu/en/master-s-programs/master-strategic-management",
    duree: "2 ans",
    langue: "Anglais",
    credits: "120 ECTS",
    resume: "Le Master in Strategic Management d'HEC Paris est l'un des programmes les plus sélectifs et reconnus en Europe. Il forme des stratèges de haut niveau destinés aux grands cabinets de conseil (MBB) et aux directions stratégiques des grandes entreprises.",
    structure: [
      { periode: "Année 1 — Semestre 1", contenu: "Fondamentaux académiques et professionnels : Corporate Strategy, Microeconomics for Strategy, Competitive Analysis, Accounting & Financial Analysis, Leadership & Management, Business Communication" },
      { periode: "Année 1 — Semestre 2", contenu: "Approfondissement stratégique : Business Policy, Corporate Finance, Marketing Strategy, Organization Design, Consulting Methods, HEC Business Game (simulation stratégique)" },
      { periode: "Année 2 — Semestre 1 (électifs + international)", contenu: "Parcours personnalisé : M&A, Venture Capital, Digital Strategy, Family Business Strategy, Public Strategy, Innovation Management, option semestre international" },
      { periode: "Année 2 — Semestre 2", contenu: "Stage obligatoire (6 mois) en cabinet de conseil ou entreprise du CAC40 + Mémoire de recherche supervisé par un professeur HEC." }
    ],
    cours: {
      "Stratégie": ["Corporate Strategy", "Business Policy", "Competitive Analysis", "Strategic Leadership", "M&A Strategy", "Innovation Management", "Family Business Strategy"],
      "Conseil": ["Consulting Methods", "HEC Business Game", "Case Study Methodology", "Strategic Diagnosis", "Restructuring"],
      "Finance": ["Accounting & Financial Analysis", "Corporate Finance", "M&A", "Venture Capital", "Private Equity"],
      "Quantitatif": ["Microeconomics for Strategy", "Econometrics", "Data Analytics for Strategy"],
      "International": ["Global Strategy", "International Political Economy", "Cross-cultural Leadership"],
      "Digital": ["Digital Strategy", "Platform Business Models", "Tech & Innovation Management"]
    }
  },
  "HHL Leipzig": {
    nom: "HHL Leipzig Graduate School of Management",
    titre_complet: "MSc in Management and Business Consulting",
    lien: "https://www.hhl.de/programs/full-time-master-in-management-consulting/",
    duree: "18 mois",
    langue: "Anglais",
    credits: "90 ECTS",
    resume: "Le MSc Management and Business Consulting de HHL Leipzig est spécialement conçu pour former des consultants opérationnels. Programme intensif avec forte composante pratique, nombreux projets avec des entreprises réelles et accès privilégié au marché du conseil allemand.",
    structure: [
      { periode: "Semestre 1 (Leipzig)", contenu: "Fondamentaux du conseil : Strategic Management, Financial Accounting & Reporting, Marketing Management, Organizational Behavior, Consulting Methodology, Business Communication & Presentations" },
      { periode: "Semestre 2", contenu: "Outils opérationnels : Corporate Finance & Valuation, Operations & Supply Chain, Data Analytics, Change Management, Consulting Project I (mission réelle en entreprise, 6-8 semaines)" },
      { periode: "Semestre 3 (option international)", contenu: "Spécialisation : Advanced Strategy, Digital Transformation, M&A Advisory, Sustainability Consulting, Consulting Project II (mission avancée), option semestre partenaire international" },
      { periode: "Stage & Thesis (3-4 mois)", contenu: "Stage en cabinet de conseil (Allemagne ou international) + Master Thesis sur problématique managériale réelle." }
    ],
    cours: {
      "Stratégie": ["Strategic Management", "Advanced Strategy", "Competitive Intelligence", "Corporate Development", "Industry Analysis"],
      "Conseil": ["Consulting Methodology", "Consulting Project I & II", "Change Management", "M&A Advisory", "Business Communication & Presentations"],
      "Finance": ["Financial Accounting & Reporting", "Corporate Finance & Valuation", "Managerial Accounting"],
      "Quantitatif": ["Data Analytics", "Operations & Supply Chain", "Quantitative Methods"],
      "International": ["International Management", "Global Strategy", "European Business Environment"],
      "Digital": ["Digital Transformation", "Platform Strategy", "Technology Management"]
    }
  },
  "IE Business School": {
    nom: "IE Business School",
    titre_complet: "Master in Management and Strategy",
    lien: "https://www.ie.edu/business-school/programs/masters/master-in-management-and-strategy/",
    duree: "2 ans",
    langue: "Anglais/Espagnol",
    credits: "120 ECTS",
    resume: "Le Master in Management and Strategy d'IE Business School (Madrid) forme des leaders capables de concevoir et déployer des stratégies dans des environnements complexes et internationaux. Programme reconnu pour son approche innovante et son fort réseau alumni en Espagne et Amérique Latine.",
    structure: [
      { periode: "Année 1 — Term 1 (Madrid)", contenu: "Fondamentaux : Business Strategy, Financial Management, Marketing Strategy, Organizational Design, Quantitative Analysis, Business Ethics & Sustainability" },
      { periode: "Année 1 — Term 2", contenu: "Approfondissement : Corporate Strategy, Entrepreneurship & Innovation, Operations Management, Strategic Leadership, Consulting Workshop, IE Venture Day" },
      { periode: "Année 2 — Term 3 (option international)", contenu: "Spécialisation : Advanced Corporate Strategy, Digital Strategy, Family Business, Private Equity, Global Strategy, option semestre dans université partenaire (MIT, NUS, etc.)" },
      { periode: "Année 2 — Term 4 + Stage", contenu: "Projets de conseil réels + Stage obligatoire (4-6 mois) + Master Project final présenté devant jury professionnel." }
    ],
    cours: {
      "Stratégie": ["Business Strategy", "Corporate Strategy", "Advanced Corporate Strategy", "Competitive Dynamics", "Global Strategy", "Family Business Strategy"],
      "Conseil": ["Consulting Workshop", "Strategic Problem Solving", "Change Management", "Client Management", "Master Project"],
      "Finance": ["Financial Management", "Corporate Finance", "Private Equity", "Valuation"],
      "Quantitatif": ["Quantitative Analysis", "Data Analytics", "Operations Management"],
      "International": ["Global Strategy", "International Political Economy", "Emerging Markets"],
      "Digital": ["Digital Strategy", "Platform & Ecosystem Management", "Innovation Management", "Tech Entrepreneurship"]
    }
  },
  "St. Gallen HSG": {
    nom: "University of St. Gallen (HSG)",
    titre_complet: "Master in Strategy and International Management (SIM)",
    lien: "https://www.unisg.ch/en/studying/programmes/master/strategy-and-international-management-sim/",
    duree: "18 mois",
    langue: "Anglais",
    credits: "90 ECTS",
    resume: "Le SIM de St. Gallen est régulièrement classé parmi les meilleurs Masters en Management en Europe. Programme rigoureux alliant excellence académique et orientation professionnelle, avec un accès privilégié aux grandes entreprises et cabinets de conseil suisses et européens.",
    structure: [
      { periode: "Semestre 1 (St. Gallen)", contenu: "Fondamentaux stratégiques : Strategic Management, International Business, Corporate Finance, Organizational Theory, Research Methods in Strategy, Leadership & Ethics" },
      { periode: "Semestre 2", contenu: "Spécialisation : Advanced Corporate Strategy, International Management, Strategy Implementation, Mergers & Acquisitions, Consulting Practicum (projet terrain avec entreprise)" },
      { periode: "Semestre 3 (option abroad ou St. Gallen)", contenu: "Électifs avancés : Digital Strategy, Entrepreneurial Strategy, Sustainability & ESG, Family Business Governance, Political Risk Analysis, Competitive Dynamics" },
      { periode: "Master Thesis (semestre 4)", contenu: "Mémoire de master sur problématique stratégique réelle, souvent en partenariat avec une entreprise. Option consultancy project en lieu du mémoire." }
    ],
    cours: {
      "Stratégie": ["Strategic Management", "Advanced Corporate Strategy", "Strategy Implementation", "Competitive Dynamics", "Entrepreneurial Strategy", "Digital Strategy"],
      "Conseil": ["Consulting Practicum", "Strategic Problem Solving", "M&A Advisory", "Restructuring", "Business Transformation"],
      "Finance": ["Corporate Finance", "Mergers & Acquisitions", "Financial Statement Analysis", "Private Equity"],
      "Quantitatif": ["Research Methods in Strategy", "Econometrics", "Data Analytics for Managers"],
      "International": ["International Business", "International Management", "Political Risk Analysis", "Global Value Chains"],
      "Digital": ["Digital Strategy", "Platform Economy", "Technology & Business Model Innovation"]
    }
  },
  "Warwick": {
    nom: "Warwick Business School",
    titre_complet: "MSc Business with Consulting",
    lien: "https://www.wbs.ac.uk/courses/masters/business-consulting/",
    duree: "1 an",
    langue: "Anglais",
    credits: "180 credits (UK system)",
    resume: "Le MSc Business with Consulting de Warwick Business School est un programme intensif d'un an combinant rigueur académique britannique et forte orientation pratique vers le conseil. Très bien positionné pour l'accès aux cabinets de conseil au Royaume-Uni et en Europe.",
    structure: [
      { periode: "Term 1 (octobre — décembre)", contenu: "Fondamentaux : Strategic Management, Financial Analysis, Marketing, Organisational Behaviour, Business Research Skills, Consulting in Practice (introduction)" },
      { periode: "Term 2 (janvier — mars)", contenu: "Spécialisation conseil : Advanced Strategy, Operations & Process Improvement, Change Management, Data Analytics for Business, Consulting Field Project I (mission en entreprise réelle)" },
      { periode: "Term 3 (avril — juin)", contenu: "Approfondissement : Digital Business Transformation, Innovation Management, Responsible Business, Consulting Field Project II (mission avancée), préparation dissertation" },
      { periode: "Été (juillet — septembre)", contenu: "Dissertation de master (15,000 mots) sur sujet stratégique ou consulting, ou Business Consulting Project en partenariat avec une organisation." }
    ],
    cours: {
      "Stratégie": ["Strategic Management", "Advanced Strategy", "Competitive Strategy", "Corporate Strategy", "Innovation Management"],
      "Conseil": ["Consulting in Practice", "Consulting Field Project I & II", "Change Management", "Process Improvement", "Client Communication"],
      "Finance": ["Financial Analysis", "Managerial Finance", "Financial Modelling"],
      "Quantitatif": ["Business Research Skills", "Data Analytics for Business", "Operations Research"],
      "International": ["International Strategy", "Global Business Environment", "Responsible Business"],
      "Digital": ["Digital Business Transformation", "Technology Strategy", "Platform Management"]
    }
  }
};

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

  // Trouver le programme dans la base de données
  const findProg = (name) => {
    for (const [key, val] of Object.entries(PROGRAMMES)) {
      if (name.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(name.toLowerCase().split(' ')[0])) {
        return { key, ...val };
      }
    }
    return null;
  };

  try {
    // STRUCTURE DU PROGRAMME
    if (submode === 'structure') {
      const progNames = user.split(' | ').map(p => p.replace(/\s*\([^\)]+\)/, '').trim());
      const results = progNames.slice(0, 5).map(name => {
        const prog = findProg(name);
        if (prog) {
          return {
            nom: prog.nom,
            badge: "Programme",
            titre: `Structure — ${prog.titre_complet}`,
            source: "Site officiel",
            lien: prog.lien,
            resume: `${prog.duree} | ${prog.langue} | ${prog.credits} — ${prog.resume}`,
            structure: prog.structure
          };
        }
        return { nom: name, badge: "Programme", titre: `Structure — ${name}`, source: "", lien: "", resume: "Données non disponibles", structure: [] };
      });
      return res.status(200).json({ resultats: results });
    }

    // CONTENU DES COURS
    if (submode === 'cours') {
      const progNames = user.split(' | ').map(p => p.replace(/\s*\([^\)]+\)/, '').trim());
      const results = progNames.slice(0, 5).map(name => {
        const prog = findProg(name);
        if (prog) {
          return {
            nom: prog.nom,
            badge: "Programme",
            titre: `Cours — ${prog.titre_complet}`,
            source: "Site officiel",
            lien: prog.lien,
            resume: prog.resume,
            cours: prog.cours
          };
        }
        return { nom: name, badge: "Programme", titre: `Cours — ${name}`, source: "", lien: "", resume: "Données non disponibles", cours: {} };
      });
      return res.status(200).json({ resultats: results });
    }

    // COMPARAISON PAR PAYS
    if (submode === 'pays') {
      return res.status(200).json({ pays: PAYS_COMPARAISON });
    }

    // PROCESSUS RECRUTEMENT
    if (submode === 'processus') {
      const cabinets = user.replace('Processus de recrutement détaillé pour: ', '').replace(/\. .+$/, '').split(', ');
      // Utiliser la base de données locale en priorité
      const localResults = cabinets.slice(0,5).map(cab => {
        for (const [key, val] of Object.entries(CABINETS)) {
          if (cab.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(cab.toLowerCase().split(' ')[0])) {
            return {
              nom: val.nom, badge: "Recrutement", titre: "Processus de recrutement — " + val.nom,
              date: "2024-2025", source: "Consultor / sites officiels", lien: val.lien_carrieres,
              resume: val.resume, processus: val.processus
            };
          }
        }
        return null;
      }).filter(Boolean);
      if (localResults.length > 0) return res.status(200).json({ resultats: localResults });
      const d = await call({
        model: 'claude-haiku-4-5-20251001', max_tokens: 1500,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        system: `Expert recrutement cabinets conseil. Pour chaque cabinet, donne le processus exact. Réponds UNIQUEMENT en JSON: {"resultats":[{"nom":"cabinet","badge":"Recrutement","titre":"Processus — cabinet","date":"2024-2025","source":"site officiel","lien":"url careers","resume":"résumé français","processus":{"etapes":["1. étape","2. étape","3. étape","4. étape"],"timing":"X semaines","tests":"types tests","conseils":"conseil clé"}}]}`,
        messages: [{ role: 'user', content: `Processus recrutement détaillé pour: ${cabinets.join(', ')}` }],
      });
      const c = d.content || [];
      if (d.stop_reason === 'tool_use') {
        const msgs = [
          { role: 'user', content: `Processus recrutement pour: ${cabinets.join(', ')}` },
          { role: 'assistant', content: c },
          { role: 'user', content: c.filter(b => b.type === 'tool_use').map(b => ({ type: 'tool_result', tool_use_id: b.id, content: 'OK' })) }
        ];
        const d2 = await call({ model: 'claude-haiku-4-5-20251001', max_tokens: 1200, system: `Réponds UNIQUEMENT en JSON: {"resultats":[{"nom":"","badge":"Recrutement","titre":"","date":"2025","source":"","lien":"","resume":"","processus":{"etapes":[],"timing":"","tests":"","conseils":""}}]}`, messages: msgs });
        const t2 = d2.content?.find(b => b.type === 'text')?.text || '';
        const p2 = extractJSON(t2);
        if (p2?.resultats?.length) return res.status(200).json(p2);
      }
      const t = c.find(b => b.type === 'text')?.text || '';
      const p = extractJSON(t);
      if (p?.resultats?.length) return res.status(200).json(p);
      return res.status(200).json({ resultats: [{ nom: cabinets[0], badge: 'Recrutement', titre: 'Processus de recrutement', date: '2025', source: '', resume: t.slice(0, 300) }] });
    }

    // MODE NORMAL (veille actualités)
    // Pour les cabinets, utiliser la DB locale en priorité
    if (mode === 'cabinets') {
      const selectedCabs = user.split(' | ').map(s => s.replace(/Veille .+ sur: /, '').split(',').map(c => c.trim())).flat().filter(Boolean);
      const localNews = [];
      for (const cab of selectedCabs) {
        for (const [key, val] of Object.entries(CABINETS)) {
          if (cab.toLowerCase().includes(key.toLowerCase())) {
            localNews.push({ nom: val.nom, badge: "Actualité", titre: val.actu.titre, date: val.actu.date, source: val.actu.source, lien: val.actu.lien, resume: val.actu.resume });
            break;
          }
        }
      }
      if (localNews.length > 0) return res.status(200).json({ resultats: localNews });
    }
    const sources = mode === 'cabinets'
      ? 'Consultor (consultor.fr), LinkedIn, Financial Times, Les Echos, sites officiels des cabinets'
      : 'LinkedIn, Financial Times, Les Echos, sites officiels des programmes';
    const jsonFormat = mode === 'cabinets'
      ? `{"resultats":[{"nom":"cabinet","badge":"Actualité","titre":"titre précis","date":"mois année","source":"nom source","lien":"https://url","resume":"1-2 phrases français"}]}`
      : `{"resultats":[{"nom":"programme","badge":"Programme","titre":"titre précis","date":"mois année","source":"nom source","resume":"1-2 phrases français"}]}`;
    const shortFormat = mode === 'cabinets' ? '{"resultats":[{"nom":"","badge":"Actualité","titre":"","date":"","source":"","lien":"","resume":""}]}' : '{"resultats":[{"nom":"","badge":"Programme","titre":"","date":"","source":"","resume":""}]}';
    const system = `Veille SMC. Sources: ${sources}. Langue: FR. JSON: ${shortFormat}`;

    // Appel unique avec web search
    const d1 = await call({ model: 'claude-haiku-4-5-20251001', max_tokens: 500, tools: [{ type: 'web_search_20250305', name: 'web_search' }], system, messages: [{ role: 'user', content: user }] });
    const c1 = d1.content || [];
    
    if (d1.stop_reason === 'tool_use') {
      const msgs2 = [
        { role: 'user', content: user },
        { role: 'assistant', content: c1 },
        { role: 'user', content: c1.filter(b => b.type === 'tool_use').map(b => ({ type: 'tool_result', tool_use_id: b.id, content: 'OK' })) }
      ];
      const d2 = await call({ model: 'claude-haiku-4-5-20251001', max_tokens: 600, system, messages: msgs2 });
      const t2 = d2.content?.find(b => b.type === 'text')?.text || '';
      const p2 = extractJSON(t2);
      if (p2?.resultats?.length) return res.status(200).json(p2);
      // Dernier recours : formater sans web search
      const d3 = await call({ model: 'claude-haiku-4-5-20251001', max_tokens: 500, messages: [{ role: 'user', content: `JSON strict uniquement (commence par {): ${jsonFormat}\n\nInfos: ${t2.slice(0,1000)}` }] });
      const t3 = d3.content?.find(b => b.type === 'text')?.text || '';
      const p3 = extractJSON(t3);
      if (p3?.resultats?.length) return res.status(200).json(p3);
      return res.status(200).json({ resultats: [{ nom: '', badge: 'Actualité', titre: 'Résultat', date: '2025', source: '', resume: t2.slice(0, 300) }] });
    }

    const t1 = c1.find(b => b.type === 'text')?.text || '';
    const p1 = extractJSON(t1);
    if (p1?.resultats?.length) return res.status(200).json(p1);
    return res.status(200).json({ resultats: [{ nom: '', badge: 'Actualité', titre: 'Résultat', date: '2025', source: '', resume: t1.slice(0, 300) }] });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}