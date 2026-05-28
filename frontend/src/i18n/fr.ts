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
        value: "+7",
        label: "Années en environnements opérationnels",
      },
      {
        value: "3",
        label: "Domaines d'application explorés",
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
    "case-studies": "Cas d'étude",
    skills: "Compétences",
    contact: "Contact",
  },

  explorer: {
    eyebrow: "EXPLORATEUR DE PROJETS",
    title: "Explorateur de projets interactif",
    subtitle: "Explorez mes projets, compétences et expériences comme un jeu de données.",
    description:
      "Une vue tableau de bord statique des systèmes construits, des outils utilisés et du contexte métier auquel ils répondent.",
    emptyState: "Aucun élément ne correspond aux filtres.",
    filters: {
      title: "Filtres",
      status: "Cliquez pour affiner",
      all: "Tout",
      date: "Date",
      dateFrom: "Date de début",
      dateTo: "Date de fin",
      type: "Type",
      domain: "Domaine",
      company: "Entreprise",
      skills: "Compétences",
    },
    query: {
      label: "Aperçu SQL",
      statement: "SELECT * FROM projects WHERE focus IN ('Dev', 'Data');",
    },
    kpis: {
      hoursInvested: "Heures investies",
      systemsBuilt: "Systèmes conçus",
      technologiesUsed: "Techno utilisées",
      contextMetric: "Métrique contexte",
    },
    charts: {
      impactOverview: "Projets par heures investies",
      skillCoverage: "Couverture des compétences",
      timeline: "Derniers projets",
    },
  },

  filters: {
    type: "Type",
    tracks: "Axes",
    domains: "Domaines",
    companies: "Entreprises",
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
