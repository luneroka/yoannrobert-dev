import type { Project } from "../types";

export const amazonLaborCost = {
  id: "amazon-cost-reduction",

  title: {
    en: "Labour Cost Analytics & Optimization",
    fr: "Analyse et optimisation des coûts de main-d'œuvre",
  },

  company: "Amazon",
  role: {
    en: "Area Manager / Project Contributor",
    fr: "Area Manager / Contributeur Projet",
  },

  track: ["data"],
  industry: "logistics",
  productType: "analysis",

  technologies: ["python", "excel", "power-query", "vba"],
  skills: [
    "data-analysis",
    "kpi-design",
    "reporting",
    "process-optimization",
    "stakeholder-management",
    "project-management",
    "communication",
  ],

  metrics: {
    hoursInvested: 480,
    context: {
      label: {
        en: "Cost savings delivered",
        fr: "Économies réalisées",
      },
      value: 3.2,
      unit: {
        en: "M€",
        fr: "M€",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Workforce utilization and overtime tracking KPI",
      fr: "Indicateur de suivi de l'utilisation des effectifs et des heures supplémentaires",
    },
    {
      en: "Python data extraction pipeline feeding Excel Power Query datasets",
      fr: "Pipeline d'extraction de données Python alimentant les jeux de données Power Query Excel",
    },
    {
      en: "Automated weekly reporting workflow for UK fulfilment centers",
      fr: "Workflow automatisé de reporting hebdomadaire pour les centres logistiques UK",
    },
    {
      en: "Operational performance review framework for site-level optimization opportunities",
      fr: "Cadre de revue de performance opérationnelle pour identifier les opportunités d'optimisation par site",
    },
    {
      en: "Project methodology and governance documentation",
      fr: "Documentation de la méthodologie et de la gouvernance du projet",
    },
  ],

  summary: {
    en: "Designed and operationalized a network-wide analytics framework to identify workforce optimization opportunities and reduce labour costs across approximately 30 fulfilment centers in Amazon's UK & Ireland network.",
    fr: "Conception et déploiement d'un dispositif analytique sur environ 30 centres logistiques du réseau Amazon UK & Irlande afin d'identifier des opportunités d'optimisation des effectifs et de réduire les coûts de main‑d'œuvre.",
  },

  problem: {
    en: "Rising labour costs and operational inefficiencies required rapid identification of optimization opportunities while maintaining operational performance and service levels.",
    fr: "L'augmentation des coûts de main-d'œuvre et certaines inefficacités opérationnelles nécessitaient l'identification rapide d'opportunités d'optimisation tout en maintenant la performance et le niveau de service.",
  },

  solution: {
    en: "Mapped the initiative within Asana, collaborated with Finance and Operations stakeholders to define the methodology, built a new workforce utilization KPI, developed a Python script to extract site-level hours and performance data, fed the data into Excel Power Query transformations, automated weekly reporting, and facilitated recurring performance reviews with senior operations leaders across the UK & Ireland network.",
    fr: "Structuration du projet dans Asana, collaboration avec les équipes Finance et Operations pour définir la méthodologie, création d'un nouvel indicateur de suivi de l'utilisation des effectifs, développement d'un script Python pour extraire les données de performance et d'heures par site, alimentation des transformations Power Query dans Excel, automatisation du reporting hebdomadaire et animation de revues de performance régulières avec les responsables opérationnels du réseau.",
  },

  impact: [
    {
      en: "Contributed to a network-wide optimization initiative that generated €3.2M in savings within three months.",
      fr: "Contribution à une initiative d'optimisation à l'échelle du réseau ayant généré 3,2 M€ d'économies en trois mois.",
    },
    {
      en: "Created and transferred ownership of a new network-wide metric still used after project handover.",
      fr: "Création puis transfert de responsabilité d'un nouvel indicateur déployé à l'échelle du réseau.",
    },
    {
      en: "Established weekly operational reviews with sites senior leaders.",
      fr: "Mise en place de revues opérationnelles hebdomadaires avec les responsables de sites.",
    },
    {
      en: "Provided visibility into overtime cost drivers and site-level optimization opportunities.",
      fr: "Amélioration de la visibilité sur les facteurs de coûts liés aux heures supplémentaires et les opportunités d'optimisation par site.",
    },
  ],

  period: {
    en: "2023",
    fr: "2023",
  },

  featured: true,
} satisfies Project;
