import type { Project } from "./types";

export const projects = [
  {
    id: "budget-construction",

    title: {
      en: "Construction Budget Platform",
      fr: "Plateforme de suivi budgétaire pour construction immobilière",
    },

    company: "Solo",
    role: {
      en: "Freelance",
      fr: "Freelance",
    },

    track: ["dev"],
    domains: ["construction", "internal-tools"],

    skills: ["python", "fastapi", "postgresql", "sql", "docker"],

    metricIds: ["budget-construction-hours", "budget-construction-scope"],

    summary: {
      en: "Full-stack web application to track quotes, invoices, DIY estimates and actual construction expenses.",
      fr: "Application web full-stack pour suivre devis, factures, estimations DIY et dépenses réelles de construction ou rénovation immobilière.",
    },

    problem: {
      en: "The original Excel-based process became hard to maintain as the project logic grew.",
      fr: "Le processus initial sous Excel devenait difficile à maintenir avec la complexité croissante du projet.",
    },

    solution: {
      en: "Designed a FastAPI backend with PostgreSQL, structured around project items, transactions and budget candidates.",
      fr: "Conception d'un backend FastAPI avec PostgreSQL, structuré autour des postes projet, transactions et budgets.",
    },

    impact: [
      {
        en: "Turned a complex spreadsheet workflow into a scalable web architecture.",
        fr: "Transformation d'un workflow Excel complexe en architecture web évolutive.",
      },

      {
        en: "Clarified the distinction between planned budget, quotes, DIY estimates and actual invoices.",
        fr: "Clarification entre budget prévu, devis, estimations DIY et factures réelles.",
      },
    ],

    period: {
      en: "2026 — ongoing",
      fr: "2026 — en cours",
    },

    featured: true,
  },
] satisfies Project[];
