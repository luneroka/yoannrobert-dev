import type { ElementType } from "react";

/*
|--------------------------------------------------------------------------
| Core Entity Types
|--------------------------------------------------------------------------
*/

export type Locale = "en" | "fr";

export type LocalizedString = Record<Locale, string>;

export type Track = "dev" | "data";

export type Industry = "logistics" | "retail" | "construction" | "technology";

export type ProductType = "saas" | "internal-tool" | "web-app" | "analysis";

export type Company = "Amazon" | "Lidl" | "Solo";

export type TechnologyId =
  | "javascript"
  | "typescript"
  | "react"
  | "tailwindcss"
  | "nodejs"
  | "nextjs"
  | "python"
  | "fastapi"
  | "flask"
  | "mongodb"
  | "postgresql"
  | "sql"
  | "excel"
  | "vba"
  | "power-query"
  | "tableau"
  | "power-bi"
  | "git"
  | "docker"
  | "minitab";

export type SkillId =
  | "data-analysis"
  | "data-modeling"
  | "etl"
  | "dashboarding"
  | "kpi-design"
  | "reporting"
  | "api-design"
  | "backend-architecture"
  | "database-modeling"
  | "process-optimization"
  | "communication"
  | "frontend-architecture"
  | "ux-ui-design"
  | "product-discovery"
  | "stakeholder-management"
  | "project-management";

export type TechnologyCategory = "frontend" | "backend" | "data" | "database" | "tooling";

export type SkillCategory = "data" | "backend" | "frontend" | "business-analysis" | "operations";

/*
|--------------------------------------------------------------------------
| Metrics
|--------------------------------------------------------------------------
*/

export interface ContextMetric {
  label: LocalizedString;
  value: number;
  unit?: LocalizedString;
}

export interface ProjectMetrics {
  hoursInvested: number;
  context: ContextMetric;
}

export type ProjectScreenshot = {
  src: string;
  alt: {
    en: string;
    fr: string;
  };
  caption?: {
    en: string;
    fr: string;
  };
};

/*
|--------------------------------------------------------------------------
| Shared Interfaces
|--------------------------------------------------------------------------
*/

export interface Technology {
  id: TechnologyId;
  label: LocalizedString;
  icon: ElementType<{ className?: string }>;
  category: TechnologyCategory;
  featured?: boolean;
  showAsFilter?: boolean;
}

export interface Skill {
  id: SkillId;
  label: LocalizedString;
  category: SkillCategory;
  featured?: boolean;
  showAsFilter?: boolean;
}

export interface Project {
  id: string;

  title: LocalizedString;
  company?: Company;
  role?: LocalizedString | null;

  track: Track[];
  industry: Industry;
  productType: ProductType;

  technologies: TechnologyId[];
  skills: SkillId[];

  metrics: ProjectMetrics;
  systemsBuilt: LocalizedString[];

  summary: LocalizedString;
  problem?: LocalizedString;
  solution?: LocalizedString;

  impact: LocalizedString[];
  screenshots?: ProjectScreenshot[];
  links?: {
    github: string;
    demo?: string;
  };

  period: LocalizedString;

  featured?: boolean;
}

/*
|--------------------------------------------------------------------------
| Explorer Filtering
|--------------------------------------------------------------------------
*/

export interface ExplorerFilters {
  tracks?: Track[];
  industries?: Industry[];
  productTypes?: ProductType[];

  companies?: Company[];

  technologies: TechnologyId[];
  skills: SkillId[];

  featuredOnly?: boolean;
}
