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
        label: "Business industries explored",
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
    skills: "Skills",
    contact: "Contact",
  },

  contact: {
    title: "Let's connect",
    phrase: "Open to web developer and data opportunities.",
    emailLabel: "Email Yoann Robert",
    linkedinLabel: "Visit Yoann Robert on LinkedIn",
    githubLabel: "Visit Yoann Robert on GitHub",
  },

  explorer: {
    eyebrow: "PROJECT EXPLORER",
    title: "Interactive Projects Explorer",
    subtitle:
      "Explore projects like an analytics dashboard: filter, compare, and highlight the experiences most relevant to your interests.",
    emptyState: "No profile item matches your filters.",
    filters: {
      title: "Filters",
      status: "Click to refine",
      helpLabel: "How to use filters",
      helpTooltip:
        "Filter projects to explore different technologies, skills, and domains.\nThe dashboard updates automatically.\nClick any project to view more details.",
      all: "All",
      date: "Date",
      dateFrom: "Start date",
      dateTo: "End date",
      type: "Type",
      industry: "Industry",
      productType: "Product type",
      company: "Company",
      technologies: "Technologies",
      skills: "Skills",
    },
    query: {
      label: "SQL preview",
      generatedHint: "Generated from filters",
      readOnlyLabel: "Read-only SQL query generated from the active filters",
      statement: "SELECT * FROM projects WHERE focus IN ('Dev', 'Data');",
    },
    kpis: {
      hoursInvested: "Hours Invested",
      systemsBuilt: "Systems Built",
      skillsDemonstrated: "Skills demonstrated",
      skillsDemonstratedHelper: "Unique skills demonstrated across selected projects",
      contextMetric: "Context Metric",
    },
    charts: {
      impactOverview: "Projects by hours invested",
      technologiesCovered: "Technologies covered",
      timeline: "Latest projects",
    },
  },

  skillsExpertise: {
    title: "Skills & Expertise",
    intro:
      "A compact view of the capabilities demonstrated across my projects, combining full-stack development, data analysis, and business-oriented product thinking.",
    labels: {
      capabilities: "Capabilities",
      coreTools: "Core tools",
      featuredProjects: "Featured projects",
      industries: "Industries",
      projectTypes: "Project types",
    },
    projectCountLabel: "projects mapped",
    emptyState: "No matching project data yet.",
    cards: {
      frontend: {
        title: "Frontend Development",
        description:
          "Building responsive, typed, and maintainable user interfaces for data-driven products.",
        capabilities: [
          "React component architecture",
          "Type-safe UI with TypeScript",
          "Responsive dashboard layouts",
          "Client-side filtering and interactions",
          "Localization-ready interfaces",
        ],
      },
      backend: {
        title: "Backend Engineering",
        description:
          "Designing APIs, relational data models, and business logic for structured applications.",
        capabilities: [
          "REST API design",
          "Relational data modeling",
          "Business workflow modeling",
          "PostgreSQL and SQLAlchemy usage",
          "Docker-based development environments",
        ],
      },
      data: {
        title: "Data & Analytics",
        description:
          "Transforming operational data into dashboards, KPIs, and decision-support tools.",
        capabilities: [
          "SQL-based analysis",
          "KPI tracking and reporting",
          "Power BI & Tableau dashboarding",
          "Data modeling",
          "Operational performance analysis",
        ],
      },
      domain: {
        title: "Domain Expertise",
        description:
          "Applying technical work to concrete business contexts, project types, and operational environments.",
        capabilities: [
          "Business process understanding",
          "Operational workflows",
          "Internal tools",
          "SaaS/product thinking",
          "Data-driven decision support",
        ],
      },
    },
  },

  filters: {
    type: "Type",
    tracks: "Tracks",
    industries: "Industries",
    productTypes: "Product types",
    companies: "Companies",
    technologies: "Technologies",
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
