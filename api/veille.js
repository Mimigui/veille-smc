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
    actu: { titre: "Roland Berger franchit 1 milliard d'euros de CA en 2025", date: "Mai 2026", source: "Consultor", lien: "https://www.consultor.fr/articles", resume: "Roland Berger repasse la barre du milliard d'euros de chiffre d'affaires en 2025, seuil symbolique atteint pour la seconde fois après 2023. Le cabinet continue de recruter des talents senior, notamment Eight Advisory qui recrute une associée Life Sciences chez Roland Berger." },
    processus: {
      etapes: ["1. Candidature en ligne (CV + lettre de motivation en français ou anglais)", "2. Entretien RH : parcours, motivation, culture Roland Berger", "3. Premier entretien : case study industrie/stratégie + questions de fit", "4. Deuxième entretien : case study plus complexe + entretien avec partner", "5. Décision sous 2-3 semaines"],
      timing: "4 à 6 semaines",
      tests: "Pas de test PST formalisé. Les case studies sont souvent sectoriels (industrie, énergie, automobile — secteurs forts de Roland Berger).",
      conseils: "Roland Berger valorise les profils avec une dimension internationale et une culture européenne. Connaître les secteurs phares du cabinet (industrie, energie, santé) est un plus. Culture plus collaborative que McKinsey.",
      salaire_junior: "58 000 – 68 000 € brut/an (Junior Consultant)"
    }
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
