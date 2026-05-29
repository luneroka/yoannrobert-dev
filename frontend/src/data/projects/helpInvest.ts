import type { Project } from "../types";

import helpInvestIndex from "@/assets/projects/help-invest/help-invest-index.png";
import helpInvestDashboard from "@/assets/projects/help-invest/help-invest-dashboard.png";

export const helpInvest = {
  id: "help-invest",

  title: {
    en: "Help-Invest",
    fr: "Help-Invest",
  },

  company: "Solo",

  role: {
    en: "Personal Full-Stack Project",
    fr: "Projet Full-Stack Personnel",
  },

  track: ["dev"],

  industry: "technology",

  productType: "web-app",

  technologies: ["javascript", "react", "python", "flask", "postgresql", "docker", "git"],

  skills: [
    "api-design",
    "backend-architecture",
    "database-modeling",
    "frontend-architecture",
    "ux-ui-design",
  ],

  metrics: {
    hoursInvested: 360,
    context: {
      type: "other",
      label: {
        en: "Certfificate obtained",
        fr: "Certification obtenue",
      },
      value: 1,
      unit: {
        en: "",
        fr: "",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Personal investment portfolio management platform",
      fr: "Plateforme de gestion de portefeuille d'investissement personnel",
    },
    {
      en: "Interactive dashboard with portfolio allocation visualizations",
      fr: "Dashboard interactif avec visualisations de répartition du portefeuille",
    },
    {
      en: "Investment and encrypted transaction tracking system",
      fr: "Système de suivi des investissements et transactions encryptées",
    },
    {
      en: "Risk profile management workflow",
      fr: "Workflow de gestion du profil de risque utilisateur",
    },
    {
      en: "Secure authentication and account management system",
      fr: "Système sécurisé d'authentification et de gestion de compte",
    },
    {
      en: "REST API powered by Flask and PostgreSQL",
      fr: "API REST développée avec Flask et PostgreSQL",
    },
    {
      en: "Containerized development environment using Docker Compose",
      fr: "Environnement de développement conteneurisé avec Docker Compose",
    },
    {
      en: "Responsive portfolio monitoring experience",
      fr: "Expérience responsive de suivi de portefeuille",
    },
  ],

  summary: {
    en: "Full-stack investment portfolio visualization platform allowing users to track assets, transactions and portfolio allocation through interactive dashboards.",
    fr: "Plateforme full-stack de visualisation de portefeuille d'investissement permettant de suivre actifs, transactions et répartition du portefeuille via des dashboards interactifs.",
  },

  problem: {
    en: "Individual investors often rely on spreadsheets and fragmented tools to monitor their investments, making portfolio tracking and allocation analysis difficult.",
    fr: "Les investisseurs particuliers s'appuient souvent sur des tableurs et des outils dispersés pour suivre leurs investissements, rendant l'analyse du portefeuille complexe.",
  },

  solution: {
    en: "Designed and developed a full-stack application combining portfolio management, transaction tracking, risk profiling and interactive visual analytics in a single platform.",
    fr: "Conception et développement d'une application full-stack combinant gestion de portefeuille, suivi des transactions, profil de risque et analyse visuelle interactive dans une seule plateforme.",
  },

  impact: [
    {
      en: "Built a complete portfolio management workflow covering investments, transactions and asset allocation tracking.",
      fr: "Création d'un workflow complet de gestion de portefeuille couvrant investissements, transactions et suivi de répartition des actifs.",
    },
    {
      en: "Developed interactive dashboards and charts to visualize portfolio composition across savings, real estate and stock market assets.",
      fr: "Développement de dashboards et graphiques interactifs permettant de visualiser la composition du portefeuille entre épargne, immobilier et marché actions.",
    },
    {
      en: "Implemented secure authentication using Firebase alongside a Flask and PostgreSQL backend architecture.",
      fr: "Mise en place d'une authentification sécurisée via Firebase associée à une architecture backend Flask et PostgreSQL.",
    },
    {
      en: "Containerized the entire application with Docker and Docker Compose to streamline development and deployment workflows.",
      fr: "Conteneurisation complète de l'application avec Docker et Docker Compose afin de simplifier les workflows de développement et de déploiement.",
    },
    {
      en: "Completed and presented as the final project for Harvard's CS50 program.",
      fr: "Réalisé et présenté comme projet final du programme CS50 de Harvard.",
    },
  ],

  screenshots: [
    {
      src: helpInvestIndex,
      alt: {
        en: "Homepage presenting the Help-Invest platform",
        fr: "Page d'accueil présentant la plateforme Help-Invest",
      },
    },
    {
      src: helpInvestDashboard,
      alt: {
        en: "Investment dashboard displaying portfolio allocation and analytics",
        fr: "Dashboard d'investissement affichant la répartition du portefeuille et les analyses",
      },
    },
  ],

  period: {
    en: "November 2024 - December 2024",
    fr: "Novembre 2024 - Décembre 2024",
  },

  featured: true,
} satisfies Project;
