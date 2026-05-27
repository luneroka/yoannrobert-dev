/*
|--------------------------------------------------------------------------
| compose/filter/enrich projects
|--------------------------------------------------------------------------
*/

import { projects } from "@/data/projects";
import type { Company, Domain, Project, SkillId, Track } from "@/data/types";

type SingleFilterValue<T extends string> = T | "all";

export type ProjectFilters = {
  type?: SingleFilterValue<Track>;
  tracks?: Track[];
  domain?: SingleFilterValue<Domain>;
  domains?: Domain[];
  company?: SingleFilterValue<Company>;
  companies?: Company[];
  skills?: SkillId[];
  technologies?: string[];
  featuredOnly?: boolean;
};

export type ProjectSortKey = "date-desc" | "date-asc" | "hours-desc" | "systems-desc";

export type EnrichedProject = Project & {
  systemsBuiltCount: number;
  technologiesCount: number;
};

function matchesSingleValueFilter<T extends string>(
  values: readonly T[],
  selectedValue: SingleFilterValue<T> | undefined,
) {
  if (!selectedValue || selectedValue === "all") {
    return true;
  }

  return values.includes(selectedValue);
}

function matchesMultiValueFilter<T extends string>(
  values: readonly T[],
  selectedValues: readonly T[] | undefined,
) {
  if (!selectedValues || selectedValues.length === 0) {
    return true;
  }

  return selectedValues.some((selectedValue) => values.includes(selectedValue));
}

function getCompanyValues(project: Project): Company[] {
  return project.company ? [project.company] : [];
}

export function getProjects(): Project[] {
  return projects;
}

export function enrichProject(project: Project): EnrichedProject {
  return {
    ...project,
    systemsBuiltCount: project.systemsBuilt.length,
    technologiesCount: project.technologies.length,
  };
}

export function enrichProjects(projectsToEnrich: Project[]): EnrichedProject[] {
  return projectsToEnrich.map(enrichProject);
}

export function filterProjects(
  projectsToFilter: Project[],
  filters: ProjectFilters = {},
): Project[] {
  return projectsToFilter.filter((project) => {
    return (
      matchesSingleValueFilter(project.track, filters.type) &&
      matchesMultiValueFilter(project.track, filters.tracks) &&
      matchesSingleValueFilter(project.domains, filters.domain) &&
      matchesMultiValueFilter(project.domains, filters.domains) &&
      matchesSingleValueFilter(getCompanyValues(project), filters.company) &&
      matchesMultiValueFilter(getCompanyValues(project), filters.companies) &&
      matchesMultiValueFilter(project.skills, filters.skills) &&
      matchesMultiValueFilter(project.technologies, filters.technologies) &&
      (filters.featuredOnly ? project.featured === true : true)
    );
  });
}

export function sortProjects(
  projectsToSort: Project[],
  sortKey: ProjectSortKey = "date-desc",
): Project[] {
  return [...projectsToSort].sort((projectA, projectB) => {
    if (sortKey === "hours-desc") {
      return projectB.metrics.hoursInvested - projectA.metrics.hoursInvested;
    }

    if (sortKey === "systems-desc") {
      return projectB.systemsBuilt.length - projectA.systemsBuilt.length;
    }

    const dateA = projectA.period.en;
    const dateB = projectB.period.en;

    if (sortKey === "date-asc") {
      return dateA.localeCompare(dateB);
    }

    return dateB.localeCompare(dateA);
  });
}

export function queryProjects(
  filters: ProjectFilters = {},
  sortKey: ProjectSortKey = "date-desc",
): EnrichedProject[] {
  const filteredProjects = filterProjects(getProjects(), filters);
  const sortedProjects = sortProjects(filteredProjects, sortKey);

  return enrichProjects(sortedProjects);
}

export function getProjectById(projectId: Project["id"]): EnrichedProject | undefined {
  const project = projects.find((project) => project.id === projectId);

  return project ? enrichProject(project) : undefined;
}
