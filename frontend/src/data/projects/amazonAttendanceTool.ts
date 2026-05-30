import type { Project } from "../types";

export const amazonAttendanceTool = {
  id: "amazon-attendance-tool",

  title: {
    en: "Attendance Monitoring & Reporting Tool",
    fr: "Outil de suivi et reporting de l'absentéisme",
  },

  company: "Amazon",
  role: {
    en: "Operations Manager / Project Owner",
    fr: "Operations Manager / Resp. Projet",
  },

  track: ["data"],
  industry: "logistics",
  productType: "internal-tool",

  technologies: ["excel", "vba"],
  skills: [
    "data-analysis",
    "dashboarding",
    "project-management",
    "process-optimization",
    "stakeholder-management",
    "communication",
  ],

  metrics: {
    hoursInvested: 160,
    context: {
      label: {
        en: "Unplanned absence reduction",
        fr: "Réduction de l'absence non planifiée",
      },
      value: 23,
      unit: {
        en: "%",
        fr: "%",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Data import and transformation workflow converting raw HR exports into a standardized reporting dataset",
      fr: "Workflow d'import et de transformation des exports RH bruts vers un jeu de données standardisé pour le reporting",
    },
    {
      en: "Standardized attendance reporting template used across shifts",
      fr: "Modèle de reporting absentéisme standardisé utilisé sur plusieurs shifts",
    },
    {
      en: "Excel-based reporting tool automated with formulas and macros",
      fr: "Outil de reporting Excel automatisé avec formules et macros",
    },
    {
      en: "Daily attendance metric view for Operations, HR and Senior Leadership",
      fr: "Vue quotidienne des métriques d'absentéisme pour les équipes Operations, RH et Senior Leadership",
    },
    {
      en: "Shift-level trend tracking across Inbound and Outbound teams",
      fr: "Suivi des tendances par shift sur les équipes Inbound et Outbound",
    },
    {
      en: "Training and handover process for HR users and operations managers",
      fr: "Processus de formation et de passation pour les utilisateurs RH et managers opérationnels",
    },
  ],

  summary: {
    en: "Internal Excel/VBA reporting tool built at Amazon to standardize attendance reporting, improve daily visibility on unplanned absence and help Operations, HR and Senior Leadership act faster on workforce trends.",
    fr: "Outil interne de reporting Excel/VBA conçu chez Amazon pour standardiser le suivi de l'absentéisme, améliorer la visibilité quotidienne sur les absences non planifiées et aider les équipes Operations, RH et Senior Leadership à réagir plus rapidement aux tendances terrain.",
  },

  problem: {
    en: "Attendance reports were manually prepared with inconsistent formats and missing metrics, making it difficult for leaders to compare shifts, identify absence trends and include reliable attendance data in daily production planning.",
    fr: "Les rapports d'absentéisme étaient préparés manuellement avec des formats hétérogènes et des métriques manquantes, ce qui rendait difficile la comparaison entre shifts, l'identification des tendances et l'intégration de données fiables dans le plan de production quotidien.",
  },

  solution: {
    en: "Designed a standardized attendance data model, built a workflow to transform raw HR exports into a clean reporting dataset, then automated KPI generation and report production using Excel formulas and VBA macros.",
    fr: "Conception d'un modèle de données standardisé pour l'absentéisme, création d'un workflow de transformation des exports RH bruts vers un jeu de données exploitable, puis automatisation de la génération des KPI et des rapports à l'aide de formules Excel et de macros VBA.",
  },

  impact: [
    {
      en: "Standardized attendance reporting across all shifts, covering both Inbound and Outbound operations.",
      fr: "Standardisation du reporting absentéisme sur l'ensemble des shifts, couvrant les opérations Inbound et Outbound.",
    },
    {
      en: "Reduced unplanned absence from 5.2% to 4% within five weeks of implementation.",
      fr: "Réduction de l'absence non planifiée de 5,2 % à 4 % dans les cinq semaines suivant le déploiement.",
    },
    {
      en: "Reduced missed critical attendance follow-up conversations from three per week to one per month.",
      fr: "Réduction des conversations critiques de suivi d'absentéisme manquées, de trois par semaine à une par mois.",
    },
    {
      en: "Improved daily visibility for Area Managers, Senior Operations Managers and HR teams on absence trends by shift.",
      fr: "Amélioration de la visibilité quotidienne des Area Managers, Senior Operations Managers et équipes RH sur les tendances d'absentéisme par shift.",
    },
    {
      en: "Secured adoption by training HR users with different Excel proficiency levels and transferring ownership of the reporting process.",
      fr: "Adoption facilitée grâce à la formation d'utilisateurs RH ayant différents niveaux Excel et au transfert de responsabilité du processus de reporting.",
    },
  ],

  period: {
    en: "2023",
    fr: "2023",
  },

  featured: true,
} satisfies Project;
