import type { Project } from "../types";

export const amazonPickingPerformance = {
  id: "amazon-picking-performance",

  title: {
    en: "Picking Performance Optimization Study",
    fr: "Étude d'optimisation de la performance Picking",
  },

  company: "Amazon",
  role: {
    en: "Area Manager / Project Owner",
    fr: "Area Manager / Resp. Project",
  },

  track: ["data"],
  industry: "logistics",
  productType: "analysis",

  technologies: ["excel", "minitab"],
  skills: [
    "data-analysis",
    "reporting",
    "process-optimization",
    "stakeholder-management",
    "communication",
  ],

  metrics: {
    hoursInvested: 240,
    context: {
      label: {
        en: "Observed productivity increase",
        fr: "Hausse de productivité observée",
      },
      value: 2.95,
      unit: {
        en: "p.p.",
        fr: "p.p.",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Controlled field test comparing two operational procedures",
      fr: "Test terrain contrôlé comparant deux procédures opérationnelles",
    },
    {
      en: "Weekly data collection process across individual picking rotations",
      fr: "Processus de collecte hebdomadaire des données sur les rotations individuelles de picking",
    },
    {
      en: "Statistical analysis framework using Minitab, normality checks and one-sample t-tests",
      fr: "Cadre d'analyse statistique basé sur Minitab, des tests de normalité et des tests t à un échantillon",
    },
    {
      en: "Performance segmentation by associate category to identify where the process created value",
      fr: "Segmentation de la performance par catégorie d'associés afin d'identifier où la procédure créait de la valeur",
    },
    {
      en: "Operational recommendation balancing statistical evidence, business impact and deployment risk",
      fr: "Recommandation opérationnelle combinant preuves statistiques, impact métier et risque de déploiement",
    },
  ],

  summary: {
    en: "Designed and analyzed a field experiment to evaluate whether a new picking procedure could improve productivity, using statistical testing and population segmentation to turn operational observations into an evidence-based recommendation.",
    fr: "Conception et analyse d'une expérimentation terrain visant à évaluer l'impact d'une nouvelle procédure de picking sur la productivité, avec tests statistiques et segmentation des populations pour transformer des observations opérationnelles en recommandation fondée sur les données.",
  },

  problem: {
    en: "A proposed picking procedure appeared to improve productivity and reduce associate fatigue, but the operational team needed evidence to determine whether the observed gains were statistically meaningful and safe to recommend at scale.",
    fr: "Une nouvelle procédure de picking semblait améliorer la productivité et réduire la fatigue des opérateurs, mais l'équipe opérationnelle avait besoin d'éléments factuels pour déterminer si les gains observés étaient statistiquement significatifs et suffisamment sûrs pour être recommandés à plus grande échelle.",
  },

  solution: {
    en: "Built a test protocol, collected productivity data across 106 observations, validated the distribution with Minitab normality checks, ran one-sample t-tests at different confidence levels, segmented results by performance groups, and translated the findings into a practical deployment recommendation.",
    fr: "Création d'un protocole de test, collecte de données de productivité sur 106 observations, validation de la distribution via des tests de normalité sous Minitab, réalisation de tests t à un échantillon à différents niveaux de confiance, segmentation des résultats par groupes de performance et traduction des conclusions en recommandation de déploiement opérationnel.",
  },

  impact: [
    {
      en: "Measured a +2.95 percentage point increase in global productivity during the test period.",
      fr: "Mesure d'une hausse de productivité globale de +2,95 points de pourcentage pendant la période de test.",
    },
    {
      en: "Identified that the procedure created stronger value for underperforming associates than for top performers.",
      fr: "Identification d'un impact positif plus fort de la procédure sur les opérateurs en difficulté que sur les meilleurs performeurs.",
    },
    {
      en: "Used statistical testing to avoid overclaiming results at a 95% confidence level while still informing a low-risk operational recommendation.",
      fr: "Utilisation de tests statistiques pour éviter de surinterpréter les résultats au seuil de confiance de 95 %, tout en formulant une recommandation opérationnelle à faible risque.",
    },
    {
      en: "Recommended the procedure as optional guidance rather than a mandatory standard to preserve high-performer autonomy.",
      fr: "Recommandation de la procédure comme bonne pratique optionnelle plutôt que comme standard obligatoire afin de préserver l'autonomie des meilleurs performeurs.",
    },
  ],

  period: {
    en: "2023",
    fr: "2023",
  },

  featured: true,
} satisfies Project;
