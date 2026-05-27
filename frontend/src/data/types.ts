import type { ElementType } from 'react';

/*
|--------------------------------------------------------------------------
| Core Entity Types
|--------------------------------------------------------------------------
*/

export type Locale = 'en' | 'fr';

export type LocalizedString = Record<Locale, string>;

export type ProfileItemType = 'project' | 'experience';

export type Track = 'dev' | 'data' | 'fullstack' | 'analytics';

export type Domain =
  | 'logistics'
  | 'retail'
  | 'construction'
  | 'saas'
  | 'internal-tools';

export type Company = 'Amazon' | 'Lidl' | 'Solo';

export type SkillId =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'tailwindcss'
  | 'nodejs'
  | 'nextjs'
  | 'python'
  | 'fastapi'
  | 'flask'
  | 'mongodb'
  | 'postgresql'
  | 'sql'
  | 'excel'
  | 'vba'
  | 'power-query'
  | 'tableau'
  | 'power-bi'
  | 'git'
  | 'docker';

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'data'
  | 'database'
  | 'tooling';

export type SkillLevel = 'comfortable' | 'working' | 'learning';

/*
|--------------------------------------------------------------------------
| Metrics
|--------------------------------------------------------------------------
*/

export type MetricUnit = 'hours' | '€' | '%' | 'x' | 'items' | 'projects';

export type MetricCategory =
  | 'time'
  | 'budget'
  | 'performance'
  | 'scope'
  | 'impact';

export type MetricConfidence = 'measured' | 'estimated' | 'qualitative';

/*
|--------------------------------------------------------------------------
| Shared Interfaces
|--------------------------------------------------------------------------
*/

export interface Skill {
  id: SkillId;
  label: LocalizedString;
  icon: ElementType<{ className?: string }>;
  category: SkillCategory;
  level: SkillLevel;
  featured?: boolean;
  showAsFilter?: boolean;
}

export interface Metric {
  id: string;
  itemId: string;

  label: LocalizedString;
  value: number;

  unit: MetricUnit;
  category: MetricCategory;

  display: LocalizedString;
  confidence: MetricConfidence;
}

export interface ProfileItem {
  id: string;
  type: ProfileItemType;

  title: LocalizedString;
  company?: Company;

  track: Track[];
  domains: Domain[];

  skills: SkillId[];
  metricIds: string[];

  summary: LocalizedString;
  problem?: LocalizedString;
  solution?: LocalizedString;

  impact: LocalizedString[];

  period: LocalizedString;

  featured?: boolean;
}

/*
|--------------------------------------------------------------------------
| Explorer Filtering
|--------------------------------------------------------------------------
*/

export interface ExplorerFilters {
  type?: ProfileItemType;

  tracks?: Track[];
  domains?: Domain[];

  companies?: Company[];

  skills: SkillId[];

  featuredOnly?: boolean;
}
