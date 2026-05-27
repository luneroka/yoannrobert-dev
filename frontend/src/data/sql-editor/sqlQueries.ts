/*
|--------------------------------------------------------------------------
| Fake SQL Editor presets
|--------------------------------------------------------------------------
*/

import type { ProjectFilters } from "@/lib/queryProjects";

function formatSqlList(values: string[]) {
  return values.map((value) => `'${value}'`).join(", ");
}

export function buildProjectsSqlQuery(filters: ProjectFilters = {}) {
  const conditions: string[] = [];

  if (filters.type && filters.type !== "all") {
    conditions.push(`type = '${filters.type}'`);
  }

  if (filters.domain && filters.domain !== "all") {
    conditions.push(`domain = '${filters.domain}'`);
  }

  if (filters.company && filters.company !== "all") {
    conditions.push(`company = '${filters.company}'`);
  }

  if (filters.skills && filters.skills.length > 0) {
    conditions.push(`skills IN (${formatSqlList(filters.skills)})`);
  }

  if (filters.technologies && filters.technologies.length > 0) {
    conditions.push(`technologies IN (${formatSqlList(filters.technologies)})`);
  }

  if (conditions.length === 0) {
    return "SELECT * FROM projects;";
  }

  return `SELECT * FROM projects WHERE ${conditions.join(" AND ")};`;
}

export const defaultProjectsSqlQuery = buildProjectsSqlQuery();
