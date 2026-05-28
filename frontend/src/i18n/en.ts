export const en = {
  hero: {
    eyebrow: "FULL-STACK DEVELOPER | DATA ANALYTICS",
    name: "Yoann Robert",
    title: "Building data-driven tools with modern web technologies.",
    subtitle:
      "Former operations professional transitioning into software engineering and data, building practical systems focused on real-world business workflows.",
    ctaPrimary: "Explore projects",
    ctaSecondary: "Contact me",
    linkedinLabel: "Visit Yoann Robert on LinkedIn",
    githubLabel: "Visit Yoann Robert on GitHub",
    highlightCards: [
      {
        value: "7+",
        label: "Years in operational environments",
      },
      {
        value: "3",
        label: "Business domains explored",
      },
      {
        value: "SQL + Python",
        label: "Core analytics stack",
      },
      {
        value: "React + FastAPI",
        label: "Full-stack architecture",
      },
    ],
  },

  nav: {
    home: "Home",
    explorer: "Explorer",
    "case-studies": "Case Studies",
    skills: "Skills",
    contact: "Contact",
  },

  explorer: {
    eyebrow: "PROJECT EXPLORER",
    title: "Interactive Projects Explorer",
    subtitle: "Explore my projects, skills and experience like a dataset.",
    description:
      "A static dashboard view of the systems I have built, the tools behind them, and the business context they were designed for.",
    emptyState: "No profile item matches your filters.",
    filters: {
      title: "Filters",
      status: "Click to refine",
      all: "All",
      date: "Date",
      dateFrom: "Start date",
      dateTo: "End date",
      type: "Type",
      domain: "Domain",
      company: "Company",
      skills: "Skills",
    },
    query: {
      label: "SQL preview",
      statement: "SELECT * FROM projects WHERE focus IN ('Dev', 'Data');",
    },
    kpis: {
      hoursInvested: "Hours Invested",
      systemsBuilt: "Systems Built",
      technologiesUsed: "Technologies Used",
      contextMetric: "Context Metric",
    },
    charts: {
      impactOverview: "Projects by hours invested",
      skillCoverage: "Skill coverage",
      timeline: "Latest projects",
    },
  },

  filters: {
    type: "Type",
    tracks: "Tracks",
    domains: "Domains",
    companies: "Companies",
    skills: "Skills",
    featuredOnly: "Featured only",
    reset: "Reset filters",
  },

  sections: {
    problem: "Problem",
    solution: "Solution",
    impact: "Impact",
    metrics: "Metrics",
    skills: "Skills",
  },

  footer: {
    name: "Yoann Robert",
    copyright: "All rights reserved.",
    linkedinLabel: "Visit Yoann Robert on LinkedIn",
    githubLabel: "Visit Yoann Robert on GitHub",
  },
} as const;
