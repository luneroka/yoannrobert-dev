import type { Project } from "../types";

import dashboardScreenshot from "@/assets/projects/budget-construction-excel/dashboard.png";
import fournisseursScreenshot from "@/assets/projects/budget-construction-excel/fournisseurs.png";
import inputScreenshot from "@/assets/projects/budget-construction-excel/input_form_full.png";
import rechercheScreenshot from "@/assets/projects/budget-construction-excel/recherche.png";

export const budgetConstructionExcel = {
  id: "budget-construction-excel",

  title: {
    en: "Construction Budget Tool",
    fr: "Budget Construction (Excel)",
  },

  company: "Solo",
  role: {
    en: "Freelance",
    fr: "Freelance",
  },

  track: ["data"],
  industry: "construction",
  productType: "internal-tool",

  technologies: ["excel", "vba", "power-query"],
  skills: ["data-analysis", "data-modeling", "dashboarding", "process-optimization"],

  metrics: {
    hoursInvested: 80,
    context: {
      label: {
        en: "Performance Gained",
        fr: "Gain de Performance",
      },
      value: 50,
      unit: {
        en: "%",
        fr: "%",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Structured Excel budget workbook",
      fr: "Classeur Excel structuré pour le suivi budgétaire",
    },
    {
      en: "Power Query import and consolidation flow",
      fr: "Flux d'import et de consolidation Power Query",
    },
    {
      en: "VBA reporting automation",
      fr: "Automatisation du reporting en VBA",
    },
    {
      en: "File import system with Google Apps Script",
      fr: "Système d'import de fichiers Drive avec Google Apps Script",
    },
    {
      en: "Cash flow and remaining-cost tracking views",
      fr: "Vues de suivi de trésorerie et des coûts restants",
    },
  ],

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

  screenshots: [
    {
      src: dashboardScreenshot,
      alt: {
        en: "Construction budget platform dashboard",
        fr: "Tableau de bord de la plateforme de suivi budgétaire",
      },
    },
    {
      src: inputScreenshot,
      alt: {
        en: "Automated input form allowing user to record transactions",
        fr: "Formulaire de saisie automatisé pour enregistrer les transactions",
      },
    },
    {
      src: fournisseursScreenshot,
      alt: {
        en: "Supplier table with VBA modal for adding new ones",
        fr: "Table de gestion des fournisseurs avec ajout simplifié via modal VBA",
      },
    },
    {
      src: rechercheScreenshot,
      alt: {
        en: "Search sheet with filters and transaction deletion capability",
        fr: "Feuille de recherche de transactions avec filtres et fonction de suppression",
      },
    },
  ],

  links: {
    github: "https://github.com/luneroka/budget_construction_excel",
  },

  period: {
    en: "January 2026 — May 2026",
    fr: "Janvier 2026 — Mai 2026",
  },

  featured: true,
} satisfies Project;
