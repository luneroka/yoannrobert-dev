import type { Project } from "../types";

export const portfolioRevamp = {
  id: "yoannrobert-portfolio-revamp",

  title: {
    en: "Web & Analytics Portfolio Revamp",
    fr: "Refonte Portfolio Web & Analytics",
  },

  company: "Solo",
  role: {
    en: "Personal Full-Stack Product Project",
    fr: "Projet Produit Full-Stack Personnel",
  },

  track: ["dev", "data"],
  industry: "technology",
  productType: "web-app",

  technologies: ["typescript", "react", "tailwindcss", "git"],
  skills: ["ux-ui-design", "product-discovery", "communication", "process-optimization"],

  metrics: {
    hoursInvested: 60,
    context: {
      label: {
        en: "Filter dimensions",
        fr: "Dimensions de filtre",
      },
      value: 7,
      unit: {
        en: "",
        fr: "",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Interactive portfolio structured as a business intelligence-style dashboard instead of a classic static profile page",
      fr: "Portfolio interactif structuré comme un dashboard de type business intelligence plutôt qu'une page profil statique classique",
    },
    {
      en: "Typed project data model supporting localized content, filters, metrics, screenshots, project details and technical storytelling",
      fr: "Modèle de données projet supportant contenu localisé, filtres, métriques, captures, détails projet et storytelling technique",
    },
    {
      en: "Bilingual content architecture separating reusable UI copy from project-specific localized data",
      fr: "Architecture de contenu bilingue séparant les libellés UI réutilisables des données projet traduits",
    },
    {
      en: "Project explorer experience with recruiter-friendly filtering by track, industry, product type, technologies and skills",
      fr: "Expérience d'exploration des projets avec filtres adaptés au recrutement par axe, secteur, type de produit, technologies et compétences",
    },
    {
      en: "Hybrid positioning system designed to present both full-stack development projects and data-oriented professional experience",
      fr: "Système de positionnement hybride conçu pour présenter à la fois des projets full-stack et une expérience professionnelle orientée data",
    },
    {
      en: "Reusable content structure built to scale with future projects, experience entries, metrics and language expansion",
      fr: "Structure de contenu réutilisable pensée pour évoluer avec de futurs projets, expériences, métriques et langues supplémentaires",
    },
  ],

  summary: {
    en: "Personal portfolio redesigned as an interactive analytics dashboard to present a hybrid Full-Stack and Data profile through structured project data, filters, metrics and bilingual content.",
    fr: "Portfolio personnel repensé sous forme de dashboard analytique interactif pour présenter mon profil hybride Full-Stack et Data à travers des données projet structurées, des filtres et des métriques variées.",
  },

  problem: {
    en: "A classic developer portfolio was not enough to communicate a profile combining software development, operational data analysis and business-oriented systems thinking. The challenge was to make the portfolio itself demonstrate those strengths instead of only describing them.",
    fr: "Un portfolio développeur classique ne suffisait pas à communiquer un profil combinant développement logiciel, analyse de données opérationnelles et vision système orientée métier. L'enjeu était de faire démontrer ces forces par le portfolio lui-même, plutôt que de simplement les décrire.",
  },

  solution: {
    en: "Built a React and TypeScript portfolio around a structured data model, localized project content, dashboard-inspired sections, recruiter-oriented filters and reusable components that make projects, skills and impact easier to explore.",
    fr: "Construction d'un portfolio React et TypeScript autour d'un modèle de données structuré, de contenus projet bilinguals, de sections inspirées des dashboards, de filtres orientés recruteurs et de composants réutilisables facilitant l'exploration des projets, compétences et impacts.",
  },

  impact: [
    {
      en: "Turned the portfolio from a static presentation into a product-like interface that demonstrates frontend architecture, content modeling and analytical thinking at the same time.",
      fr: "Transformation du portfolio d'une présentation statique en interface produit démontrant simultanément architecture frontend, modélisation de contenu et raisonnement analytique.",
    },
    {
      en: "Created a scalable bilingual content system where UI copy and project data can evolve independently while remaining type-safe.",
      fr: "Création d'un système de contenu bilingue scalable où les textes d'interface et les données projet peuvent évoluer indépendamment tout en restant structurés.",
    },
    {
      en: "Improved recruiter readability by making the Full-Stack and Data positioning explicit through tracks, filters, metrics and project evidence.",
      fr: "Amélioration de la lisibilité recruteur en rendant le positionnement Full-Stack et Data explicite via des axes, filtres, métriques et preuves projet.",
    },
    {
      en: "Built a foundation ready to host future project case studies, professional experience, analytics metrics and more advanced dashboard interactions.",
      fr: "Mise en place d'une base prête à accueillir de futurs projets, expériences professionnelles, métriques analytiques et interactions dashboard plus avancées.",
    },
  ],

  screenshots: [],

  links: {
    github: "https://github.com/luneroka/yoannrobert-dev",
  },

  period: {
    en: "May 2026",
    fr: "Mai 2026",
  },

  featured: true,
} satisfies Project;
