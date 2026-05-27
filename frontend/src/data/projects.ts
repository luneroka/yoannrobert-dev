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
      en: "May 2026 — ongoing",
      fr: "Mai 2026 — en cours",
    },

    featured: true,
  },
  {
    id: "budget-construction-excel",

    title: {
      en: "Construction Budget Tool",
      fr: "Outil de suivi budgétaire pour construction immobilière",
    },

    company: "Solo",
    role: {
      en: "Freelance",
      fr: "Freelance",
    },

    track: ["data"],
    domains: ["construction", "internal-tools"],

    skills: ["excel", "vba", "power-query"],

    metricIds: ["budget-construction-excel-hours", "budget-construction-excel-scope"],

    summary: {
      en: "Excel-based budget tracking system built to manage construction costs, quotes, invoices and cash flow during a real house-building project.",
      fr: "Système de suivi budgétaire sous Excel conçu pour gérer coûts de construction, devis, factures et trésorerie lors d'un véritable projet de construction immobilière.",
    },

    problem: {
      en: "Managing construction expenses across dozens of categories and suppliers quickly became difficult with manual tracking and fragmented spreadsheets.",
      fr: "Le suivi des dépenses de construction réparties sur des dizaines de catégories et fournisseurs est rapidement devenu difficile avec un suivi manuel et des tableurs fragmentés.",
    },

    solution: {
      en: "Designed an advanced Excel system using structured tables, formulas, Power Query and VBA automation to centralize budgeting, reporting and expense monitoring.",
      fr: "Conception d'un système Excel avancé utilisant tables structurées, formules, Power Query et automatisations VBA pour centraliser budget, reporting et suivi des dépenses.",
    },

    impact: [
      {
        en: "Provided a real-world functional prototype later used as the foundation for the web application architecture.",
        fr: "Création d'un prototype fonctionnel réel ayant servi de base à l'architecture de l'application web.",
      },

      {
        en: "Improved visibility over projected budget, signed quotes, paid invoices and remaining construction costs.",
        fr: "Amélioration de la visibilité sur le budget prévisionnel, les devis signés, les factures payées et les coûts restants.",
      },

      {
        en: "Automated reporting and reduced manual reconciliation work across multiple budget sources.",
        fr: "Automatisation du reporting et réduction du travail manuel de rapprochement entre plusieurs sources budgétaires.",
      },
    ],

    period: {
      en: "January 2026 — May 2026",
      fr: "Janvier 2026 — Mai 2026",
    },

    featured: true,
  },
] satisfies Project[];
