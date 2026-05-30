export const fr = {
  hero: {
    eyebrow: "DÉVELOPPEUR FULL-STACK | DATA ANALYST",
    name: "Yoann Robert",
    title: "Création d’outils pilotés par la donnée avec les technologies web modernes.",
    subtitle:
      "Ancien professionnel des opérations en transition vers le développement logiciel et la data, avec une approche centrée sur les usages métiers réels.",
    ctaPrimary: "Explorer les projets",
    ctaSecondary: "Contactez-moi",
    linkedinLabel: "Voir le profil LinkedIn de Yoann Robert",
    githubLabel: "Voir le profil GitHub de Yoann Robert",
    highlightCards: [
      {
        value: "7+",
        label: "Années en environnements opérationnels",
      },
      {
        value: "3",
        label: "Industries explorées",
      },
      {
        value: "SQL + Python",
        label: "Stack analytique principale",
      },
      {
        value: "React + FastAPI",
        label: "Architecture full-stack",
      },
    ],
  },

  nav: {
    home: "Accueil",
    explorer: "Explorateur",
    skills: "Compétences",
    contact: "Contact",
  },

  contact: {
    title: "Contactez-moi",
    phrase: "Ouvert aux opportunités en développement web et data.",
    emailLabel: "Envoyer un email à Yoann Robert",
    linkedinLabel: "Voir le profil LinkedIn de Yoann Robert",
    githubLabel: "Voir le profil GitHub de Yoann Robert",
  },

  explorer: {
    eyebrow: "EXPLORATEUR DE PROJETS",
    title: "Explorateur de projets interactif",
    subtitle:
      "Explorez mes projets comme un tableau de bord analytique : filtrez, comparez et mettez en évidence les expériences les plus pertinentes.",
    emptyState: "Aucun élément ne correspond aux filtres.",
    filters: {
      title: "Filtres",
      status: "Cliquez pour affiner",
      all: "Tout",
      date: "Date",
      dateFrom: "Date de début",
      dateTo: "Date de fin",
      type: "Type",
      industry: "Secteur",
      productType: "Type de produit",
      company: "Entreprise",
      technologies: "Technologies",
      skills: "Compétences",
    },
    query: {
      label: "Aperçu SQL",
      generatedHint: "Généré depuis les filtres",
      readOnlyLabel: "Requête SQL en lecture seule générée depuis les filtres actifs",
      statement: "SELECT * FROM projects WHERE focus IN ('Dev', 'Data');",
    },
    kpis: {
      hoursInvested: "Heures investies",
      systemsBuilt: "Systèmes conçus",
      skillsDemonstrated: "Compétences démontrées",
      skillsDemonstratedHelper: "Compétences uniques démontrées dans les projets sélectionnés",
      contextMetric: "Métrique contexte",
    },
    charts: {
      impactOverview: "Projets par heures investies",
      technologiesCovered: "Technologies couvertes",
      timeline: "Derniers projets",
    },
  },

  skillsExpertise: {
    title: "Compétences & expertise",
    intro:
      "Une synthèse des compétences démontrées à travers mes projets, entre développement full-stack, analyse de données et logique produit orientée métier.",
    labels: {
      capabilities: "Capacités",
      coreTools: "Outils clés",
      featuredProjects: "Projets associés",
      industries: "Secteurs",
      projectTypes: "Types de projets",
    },
    projectCountLabel: "projets cartographiés",
    emptyState: "Aucune donnée projet associée pour le moment.",
    cards: {
      frontend: {
        title: "Développement Frontend",
        description:
          "Créer des interfaces responsive, propres et maintenables pour des produits orientés utilisateurs.",
        capabilities: [
          "Architecture de composants React",
          "Types et interfaces TypeScript",
          "Layouts de dashboards responsive",
          "Filtrage et interactions côté client",
          "Interfaces conçues pour le multilingue",
        ],
      },
      backend: {
        title: "Ingénierie Backend",
        description:
          "Concevoir des APIs, des modèles relationnels et une logique métier pour des applications structurées.",
        capabilities: [
          "Conception d'API REST",
          "Modélisation relationnelle",
          "Modélisation de workflows métier",
          "Usage de PostgreSQL et SQLAlchemy",
          "Environnements de développement Docker",
        ],
      },
      data: {
        title: "Data & Analytics",
        description:
          "Transformer des données opérationnelles en tableaux de bord, KPIs et outils d’aide à la décision.",
        capabilities: [
          "Analyse basée sur SQL",
          "Suivi de KPIs et reporting",
          "Dashboarding Power BI & Tableau",
          "Modélisation de données",
          "Analyse de performance opérationnelle",
        ],
      },
      domain: {
        title: "Expertise métier",
        description:
          "Appliquer la technique à des contextes business, types de projets et environnements opérationnels concrets.",
        capabilities: [
          "Compréhension des processus métier",
          "Workflows opérationnels",
          "Outils internes",
          "Logique SaaS et produit",
          "Aide à la décision pilotée par la donnée",
        ],
      },
    },
  },

  filters: {
    type: "Type",
    tracks: "Axes",
    industries: "Secteurs",
    productTypes: "Types de produit",
    companies: "Entreprises",
    technologies: "Technologies",
    skills: "Compétences",
    featuredOnly: "Mis en avant uniquement",
    reset: "Réinitialiser les filtres",
  },

  sections: {
    problem: "Problème",
    solution: "Solution",
    impact: "Impact",
    metrics: "Métriques",
    skills: "Compétences",
  },

  footer: {
    name: "Yoann Robert",
    copyright: "Tous droits réservés.",
    linkedinLabel: "Voir le profil LinkedIn de Yoann Robert",
    githubLabel: "Voir le profil GitHub de Yoann Robert",
  },
} as const;
