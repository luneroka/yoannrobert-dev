import type {
  Company,
  Industry,
  LocalizedString,
  ProductType,
  Track,
} from "./types";

export const trackLabels = {
  dev: { en: "Dev", fr: "Dev" },
  data: { en: "Data", fr: "Data" },
} satisfies Record<Track, LocalizedString>;

export const industryLabels = {
  logistics: { en: "Logistics", fr: "Logistique" },
  retail: { en: "Retail", fr: "Retail" },
  construction: { en: "Construction", fr: "Construction" },
  technology: { en: "Technology", fr: "Technologie" },
} satisfies Record<Industry, LocalizedString>;

export const productTypeLabels = {
  saas: { en: "SaaS", fr: "SaaS" },
  "internal-tool": { en: "Internal tool", fr: "Outil interne" },
  "web-app": { en: "Web app", fr: "Application web" },
  analysis: { en: "Data Analysis", fr: "Analyse Data" },
} satisfies Record<ProductType, LocalizedString>;

export const companyLabels = {
  Amazon: { en: "Amazon", fr: "Amazon" },
  Lidl: { en: "Lidl", fr: "Lidl" },
  Solo: { en: "Solo projects", fr: "Projets solo" },
} satisfies Record<Company, LocalizedString>;
