import type {
  Company,
  Domain,
  LocalizedString,
  MetricCategory,
  MetricConfidence,
  MetricUnit,
  ProfileItemType,
  SkillId,
  Track,
} from './types';

export const typeLabels = {
  project: { en: 'Project', fr: 'Projet' },
  experience: { en: 'Experience', fr: 'Expérience' },
} satisfies Record<ProfileItemType, LocalizedString>;

export const trackLabels = {
  dev: { en: 'Development', fr: 'Développement' },
  data: { en: 'Data', fr: 'Data' },
  fullstack: { en: 'Full-stack', fr: 'Full-stack' },
  analytics: { en: 'Analytics', fr: 'Analytics' },
} satisfies Record<Track, LocalizedString>;

export const domainLabels = {
  logistics: { en: 'Logistics', fr: 'Logistique' },
  retail: { en: 'Retail', fr: 'Retail' },
  construction: { en: 'Construction', fr: 'Construction' },
  saas: { en: 'SaaS', fr: 'SaaS' },
  'internal-tools': { en: 'Internal tools', fr: 'Outils internes' },
} satisfies Record<Domain, LocalizedString>;

export const companyLabels = {
  Amazon: { en: 'Amazon', fr: 'Amazon' },
  Lidl: { en: 'Lidl', fr: 'Lidl' },
  Solo: { en: 'Solo projects', fr: 'Projets solo' },
} satisfies Record<Company, LocalizedString>;

export const skillLabels = {
  typescript: { en: 'TypeScript', fr: 'TypeScript' },
  react: { en: 'React', fr: 'React' },
  python: { en: 'Python', fr: 'Python' },
  fastapi: { en: 'FastAPI', fr: 'FastAPI' },
  postgresql: { en: 'PostgreSQL', fr: 'PostgreSQL' },
  sql: { en: 'SQL', fr: 'SQL' },
  'power-bi': { en: 'Power BI', fr: 'Power BI' },
  docker: { en: 'Docker', fr: 'Docker' },
} satisfies Record<SkillId, LocalizedString>;

export const metricUnitLabels = {
  hours: { en: 'hours', fr: 'heures' },
  '€': { en: '€', fr: '€' },
  '%': { en: '%', fr: '%' },
  x: { en: 'x', fr: 'x' },
  items: { en: 'items', fr: 'éléments' },
  projects: { en: 'projects', fr: 'projets' },
} satisfies Record<MetricUnit, LocalizedString>;

export const metricCategoryLabels = {
  time: { en: 'Time', fr: 'Temps' },
  budget: { en: 'Budget', fr: 'Budget' },
  performance: { en: 'Performance', fr: 'Performance' },
  scope: { en: 'Scope', fr: 'Périmètre' },
  impact: { en: 'Impact', fr: 'Impact' },
} satisfies Record<MetricCategory, LocalizedString>;

export const metricConfidenceLabels = {
  measured: { en: 'Measured', fr: 'Mesuré' },
  estimated: { en: 'Estimated', fr: 'Estimé' },
  qualitative: { en: 'Qualitative', fr: 'Qualitatif' },
} satisfies Record<MetricConfidence, LocalizedString>;
