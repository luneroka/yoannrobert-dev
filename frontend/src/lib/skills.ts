import { industryLabels, productTypeLabels } from "@/data/labels";
import { skills } from "@/data/skills";
import { technologies } from "@/data/technologies";
import type {
  Industry,
  Locale,
  LocalizedString,
  ProductType,
  Project,
  SkillId,
  TechnologyId,
} from "@/data/types";
import { translate } from "@/i18n/translate";

export type SkillsExpertiseCardId = "frontend" | "backend" | "data" | "domain";

export type SkillsExpertiseProjectProof = {
  id: Project["id"];
  title: string;
};

export type SkillsExpertiseCardData = {
  id: SkillsExpertiseCardId;
  tools: string[];
  projects: SkillsExpertiseProjectProof[];
  industries: string[];
  productTypes: string[];
  projectCount: number;
};

const maxTools = 6;
const maxProjects = 8;
const technologyLabelById = new Map(
  technologies.map((technology) => [technology.id, technology.label]),
);
const skillLabelById = new Map(skills.map((skill) => [skill.id, skill.label]));

const frontendTechnologies: TechnologyId[] = [
  "typescript",
  "javascript",
  "react",
  "nextjs",
  "tailwindcss",
];
const frontendSkills: SkillId[] = ["frontend-architecture", "ux-ui-design"];

const backendTechnologies: TechnologyId[] = [
  "python",
  "fastapi",
  "flask",
  "nodejs",
  "postgresql",
  "mongodb",
  "sql",
  "docker",
];
const backendSkills: SkillId[] = ["api-design", "backend-architecture", "database-modeling"];

const dataTechnologies: TechnologyId[] = [
  "sql",
  "postgresql",
  "python",
  "excel",
  "vba",
  "power-query",
  "tableau",
  "power-bi",
];
const dataSkills: SkillId[] = ["data-analysis", "data-modeling", "etl", "dashboarding"];

function dedupe<T>(values: readonly T[]): T[] {
  return [...new Set(values)];
}

function projectUsesAny(
  project: Project,
  technologyIds: readonly TechnologyId[],
  skillIds: readonly SkillId[],
) {
  return (
    project.technologies.some((technologyId) => technologyIds.includes(technologyId)) ||
    project.skills.some((skillId) => skillIds.includes(skillId))
  );
}

function getProjectMatchScore(
  project: Project,
  technologyIds: readonly TechnologyId[],
  skillIds: readonly SkillId[],
) {
  const technologyScore = project.technologies.filter((technologyId) =>
    technologyIds.includes(technologyId),
  ).length;
  const skillScore = project.skills.filter((skillId) => skillIds.includes(skillId)).length;

  return technologyScore + skillScore;
}

function getMatchingProjects(
  projects: readonly Project[],
  predicate: (project: Project) => boolean,
  getScore?: (project: Project) => number,
): Project[] {
  return projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => predicate(project))
    .sort((itemA, itemB) => {
      const scoreDifference = (getScore?.(itemB.project) ?? 0) - (getScore?.(itemA.project) ?? 0);

      if (scoreDifference !== 0) {
        return scoreDifference;
      }

      if (itemA.project.featured !== itemB.project.featured) {
        return itemA.project.featured ? -1 : 1;
      }

      const hoursDifference =
        itemB.project.metrics.hoursInvested - itemA.project.metrics.hoursInvested;

      return hoursDifference || itemA.index - itemB.index;
    })
    .map(({ project }) => project);
}

function getTechnologyLabels(
  projects: readonly Project[],
  preferredTechnologies: readonly TechnologyId[],
  locale: Locale,
) {
  const usedTechnologies = new Set(projects.flatMap((project) => project.technologies));

  return preferredTechnologies
    .filter((technologyId) => usedTechnologies.has(technologyId))
    .map((technologyId) => translate(technologyLabelById.get(technologyId), locale, technologyId))
    .slice(0, maxTools);
}

function getProjectProof(projects: readonly Project[], locale: Locale) {
  return projects.slice(0, maxProjects).map((project) => ({
    id: project.id,
    title: translate(project.title, locale, project.id),
  }));
}

function getTranslatedUniqueValues<T extends Industry | ProductType>(
  projects: readonly Project[],
  getValue: (project: Project) => T,
  labels: Record<T, LocalizedString>,
  locale: Locale,
) {
  return dedupe(projects.map(getValue)).map((value) => translate(labels[value], locale, value));
}

function createCapabilityCard(
  id: Exclude<SkillsExpertiseCardId, "domain">,
  projects: readonly Project[],
  locale: Locale,
  technologyIds: readonly TechnologyId[],
  skillIds: readonly SkillId[],
): SkillsExpertiseCardData {
  const matchingProjects = getMatchingProjects(
    projects,
    (project) => projectUsesAny(project, technologyIds, skillIds),
    (project) => getProjectMatchScore(project, technologyIds, skillIds),
  );
  const tools = getTechnologyLabels(matchingProjects, technologyIds, locale);

  const fallbackTools =
    tools.length > 0
      ? tools
      : skillIds
          .filter((skillId) =>
            matchingProjects.some((project) => project.skills.includes(skillId)),
          )
          .map((skillId) => translate(skillLabelById.get(skillId), locale, skillId))
          .slice(0, maxTools);

  return {
    id,
    tools: fallbackTools,
    projects: getProjectProof(matchingProjects, locale),
    industries: [],
    productTypes: [],
    projectCount: matchingProjects.length,
  };
}

export function getSkillsExpertiseCards(
  projects: readonly Project[],
  locale: Locale,
): SkillsExpertiseCardData[] {
  const safeProjects = projects ?? [];

  return [
    createCapabilityCard(
      "frontend",
      safeProjects,
      locale,
      frontendTechnologies,
      frontendSkills,
    ),
    createCapabilityCard("backend", safeProjects, locale, backendTechnologies, backendSkills),
    createCapabilityCard("data", safeProjects, locale, dataTechnologies, dataSkills),
    {
      id: "domain",
      tools: [],
      projects: getProjectProof(safeProjects, locale),
      industries: getTranslatedUniqueValues(safeProjects, (project) => project.industry, industryLabels, locale),
      productTypes: getTranslatedUniqueValues(
        safeProjects,
        (project) => project.productType,
        productTypeLabels,
        locale,
      ),
      projectCount: safeProjects.length,
    },
  ];
}
