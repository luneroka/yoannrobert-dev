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
  | 'typescript'
  | 'react'
  | 'python'
  | 'fastapi'
  | 'postgresql'
  | 'sql'
  | 'power-bi'
  | 'docker';

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
