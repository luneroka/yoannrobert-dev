import type { Project } from "../types";

import staffpicksMobile from "@/assets/projects/staffpicks/staffpicks_mobile.png";
import staffpicksQuiz from "@/assets/projects/staffpicks/staffpicks_quiz.png";
import staffpicksBranding from "@/assets/projects/staffpicks/staffpicks_branding.png";
import staffpicksStats from "@/assets/projects/staffpicks/staffpicks_stats.png";

export const staffpicks = {
  id: "staffpicks",

  title: {
    en: "StaffPicks",
    fr: "StaffPicks",
  },

  company: "Solo",
  role: {
    en: "Freelance",
    fr: "Freelance",
  },

  track: ["dev"],
  domains: ["retail", "saas"],

  skills: ["typescript", "react", "nodejs", "nextjs", "postgresql", "mongodb", "docker"],

  metrics: {
    hoursInvested: 400,
    context: {
      type: "users_impacted",
      label: {
        en: "Unique visitors",
        fr: "Visiteurs uniques",
      },
      value: 372,
      unit: {
        en: "",
        fr: "",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Librarian recommendation management interface",
      fr: "Interface de gestion des recommandations libraires",
    },
    {
      en: "In-store QR code and tablet browsing experience for customers",
      fr: "Expérience client en magasin via QR codes et tablettes interactives",
    },
    {
      en: "Personalized recommendation quiz and matching algorithm co-designed with professional librarians",
      fr: "Quiz de recommandations personnalisé et algorithme de matching co-conçus avec des libraires professionnels",
    },
    {
      en: "Role-based authentication and administration flow",
      fr: "Workflow d'authentification et d'administration par rôles",
    },
    {
      en: "Analytics dashboard enabling store managers to track recommendation performance and customer engagement",
      fr: "Dashboard analytique permettant aux responsables magasin de suivre les performances des recommandations et l'engagement client",
    },
  ],

  technologies: ["React", "NodeJS", "NextJS", "MongoDB", "Docker"],

  summary: {
    en: "B2B2C platform designed to bring librarian recommendations into a modern in-store digital experience.",
    fr: "Plateforme B2B2C conçue pour transformer les recommandations libraires en expérience numérique moderne en magasin.",
  },

  problem: {
    en: "Book recommendations created by librarians in physical stores often lack visibility, discoverability and measurable customer engagement.",
    fr: "Les recommandations littéraires proposées en magasin manquent souvent de visibilité, de découvrabilité et de suivi de l'engagement client.",
  },

  solution: {
    en: "Designed and developed a platform allowing bookstores to expose curated selections through QR codes, tablets and personalized recommendation flows.",
    fr: "Conception et développement d'une plateforme permettant aux librairies de valoriser leurs sélections via QR codes, tablettes et parcours de recommandations personnalisés.",
  },

  impact: [
    {
      en: "Reached 372 unique visitors and generated more than 3,500 engagement events during the pilot phase.",
      fr: "372 visiteurs uniques atteints et plus de 3 500 événements d'engagement générés durant la phase pilote.",
    },
    {
      en: "Achieved an 85% quiz completion rate across 633 recommendation quizzes started.",
      fr: "Taux de complétion de 85% sur 633 quiz de recommandations démarrés.",
    },
    {
      en: "Generated 177 purchase-intent interactions and maintained a 4.2/5 customer satisfaction score.",
      fr: "177 interactions d'intention d'achat générées avec une satisfaction client maintenue à 4.2/5.",
    },
  ],

  screenshots: [
    {
      src: staffpicksMobile,
      alt: {
        en: "Mobile browsing experience used by customers in-store",
        fr: "Expérience mobile utilisée par les clients en magasin",
      },
    },
    {
      src: staffpicksQuiz,
      alt: {
        en: "Personalized recommendation quiz used to match customers with relevant books",
        fr: "Quiz de recommandations personnalisé permettant de proposer des livres adaptés aux clients",
      },
    },
    {
      src: staffpicksBranding,
      alt: {
        en: "Brand customization interface for store administrators",
        fr: "Interface de personnalisation visuelle destinée aux administrateurs magasin",
      },
    },
    {
      src: staffpicksStats,
      alt: {
        en: "Analytics dashboard displaying store activity and customer engagement metrics",
        fr: "Dashboard analytique affichant les indicateurs d'activité magasin et d'engagement client",
      },
    },
  ],

  period: {
    en: "August 2025 — February 2026",
    fr: "Août 2025 — Février 2026",
  },

  featured: true,
} satisfies Project;
