import type { ExplorerFilters, Project } from "@/data/types";

export function filterProfileItems(items: Project[], filters: ExplorerFilters): Project[] {
  return items.filter((item) => {
    const matchesTracks =
      filters.tracks && filters.tracks.length > 0
        ? filters.tracks.some((track) => item.track.includes(track))
        : true;

    const matchesDomains =
      filters.domains && filters.domains.length > 0
        ? filters.domains.some((domain) => item.domains.includes(domain))
        : true;

    const matchesCompanies =
      filters.companies && filters.companies.length > 0
        ? item.company
          ? filters.companies.includes(item.company)
          : false
        : true;

    const matchesSkills =
      filters.skills.length > 0
        ? filters.skills.some((skill) => item.skills.includes(skill))
        : true;

    const matchesFeatured = filters.featuredOnly ? item.featured === true : true;

    return matchesTracks && matchesDomains && matchesCompanies && matchesSkills && matchesFeatured;
  });
}
