import { useLanguage } from "@/context/LanguageContext";
import { companyLabels, trackLabels } from "@/data/labels";
import { skills } from "@/data/skills";
import { technologies } from "@/data/technologies";
import type {
  Company,
  Industry,
  ProductType,
  Project,
  SkillId,
  TechnologyId,
  Track,
} from "@/data/types";
import { translate, translateIndustry, translateProductType } from "@/i18n/translate";
import type { ProjectFilters } from "@/lib/queryProjects";

import ExplorerDateRangeSlider from "./ExplorerDateRangeSlider";
import ExplorerFilterGroup from "./ExplorerFilterGroup";
import ExplorerSkillsDropdown from "./ExplorerSkillsDropdown";
import {
  getDateBounds,
  getUniqueValues,
  hasActiveFilters,
  isSelected,
  resetDateFilter,
  toggleAllValues,
  toggleArrayValue,
  updateArrayFilter,
  updateDateFilter,
} from "./helpers/explorerFilters";

const technologyLabelById = new Map(
  technologies.map((technology) => [technology.id, technology.label]),
);
const skillLabelById = new Map(skills.map((skill) => [skill.id, skill.label]));

type ExplorerFiltersProps = {
  projects: Project[];
  filters: ProjectFilters;
  onFiltersChange: (filters: ProjectFilters) => void;
};

const ExplorerFilters = ({
  projects,
  filters: activeFilters,
  onFiltersChange,
}: ExplorerFiltersProps) => {
  const { copy, locale } = useLanguage();

  const trackOptions = getUniqueValues(projects.flatMap((project) => project.track));
  const industryOptions = getUniqueValues(projects.map((project) => project.industry));
  const productTypeOptions = getUniqueValues(projects.map((project) => project.productType));
  const companyOptions = getUniqueValues(
    projects.flatMap((project) => (project.company ? [project.company] : [])),
  );
  const technologyOptions = getUniqueValues(projects.flatMap((project) => project.technologies));
  const skillOptions = getUniqueValues(projects.flatMap((project) => project.skills));
  const dateBounds = getDateBounds(projects);
  const dateFrom = activeFilters.dateFrom ?? dateBounds?.min;
  const dateTo = activeFilters.dateTo ?? dateBounds?.max;
  const allDatesActive =
    dateBounds !== null &&
    activeFilters.dateFrom === dateBounds.min &&
    activeFilters.dateTo === dateBounds.max;
  const explorerFiltersCopy = copy.explorer.filters;

  function toggleTrack(track: Track) {
    onFiltersChange(
      updateArrayFilter(activeFilters, "tracks", toggleArrayValue(activeFilters.tracks, track)),
    );
  }

  function toggleAllTracks() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "tracks",
        toggleAllValues(activeFilters.tracks, trackOptions),
      ),
    );
  }

  function toggleIndustry(industry: Industry) {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "industries",
        toggleArrayValue(activeFilters.industries, industry),
      ),
    );
  }

  function toggleAllIndustries() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "industries",
        toggleAllValues(activeFilters.industries, industryOptions),
      ),
    );
  }

  function toggleProductType(productType: ProductType) {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "productTypes",
        toggleArrayValue(activeFilters.productTypes, productType),
      ),
    );
  }

  function toggleAllProductTypes() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "productTypes",
        toggleAllValues(activeFilters.productTypes, productTypeOptions),
      ),
    );
  }

  function toggleCompany(company: Company) {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "companies",
        toggleArrayValue(activeFilters.companies, company),
      ),
    );
  }

  function toggleAllCompanies() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "companies",
        toggleAllValues(activeFilters.companies, companyOptions),
      ),
    );
  }

  function toggleTechnology(technology: TechnologyId) {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "technologies",
        toggleArrayValue(activeFilters.technologies, technology),
      ),
    );
  }

  function toggleAllTechnologies() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "technologies",
        toggleAllValues(activeFilters.technologies, technologyOptions),
      ),
    );
  }

  function toggleSkill(skill: SkillId) {
    onFiltersChange(
      updateArrayFilter(activeFilters, "skills", toggleArrayValue(activeFilters.skills, skill)),
    );
  }

  function toggleAllSkills() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "skills",
        toggleAllValues(activeFilters.skills, skillOptions),
      ),
    );
  }

  function updateDateFrom(value: number) {
    if (!dateBounds || dateTo === undefined) {
      return;
    }

    onFiltersChange(updateDateFilter(activeFilters, Math.min(value, dateTo), dateTo));
  }

  function updateDateTo(value: number) {
    if (!dateBounds || dateFrom === undefined) {
      return;
    }

    onFiltersChange(updateDateFilter(activeFilters, dateFrom, Math.max(value, dateFrom)));
  }

  function toggleAllDates() {
    if (!dateBounds) {
      return;
    }

    onFiltersChange(
      allDatesActive
        ? resetDateFilter(activeFilters)
        : updateDateFilter(activeFilters, dateBounds.min, dateBounds.max),
    );
  }

  return (
    <aside className="border-b border-border bg-secondary/30 p-4 lg:border-b-0 lg:border-r">
      <div className="mb-5">
        <p className="font-heading text-base font-bold text-foreground">
          {explorerFiltersCopy.title}
        </p>
        <p className="mt-1 font-body text-xs text-muted-foreground">
          {explorerFiltersCopy.status}
        </p>
      </div>

      <div className="space-y-5">
        {dateBounds && dateFrom !== undefined && dateTo !== undefined ? (
          <ExplorerDateRangeSlider
            allLabel={explorerFiltersCopy.all}
            dateFromLabel={explorerFiltersCopy.dateFrom}
            dateToLabel={explorerFiltersCopy.dateTo}
            allActive={allDatesActive}
            locale={locale}
            title={explorerFiltersCopy.date}
            bounds={dateBounds}
            dateFrom={dateFrom}
            dateTo={dateTo}
            onReset={toggleAllDates}
            onUpdateDateFrom={updateDateFrom}
            onUpdateDateTo={updateDateTo}
          />
        ) : null}

        <ExplorerFilterGroup
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.type}
          allActive={trackOptions.every((track) => activeFilters.tracks?.includes(track))}
          onToggleAll={toggleAllTracks}
          items={trackOptions.map((track) => ({
            value: track,
            label: translate(trackLabels[track], locale),
            active: isSelected(activeFilters.tracks, track),
          }))}
          onToggle={toggleTrack}
        />
        <ExplorerFilterGroup
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.industry}
          allActive={industryOptions.every((industry) =>
            activeFilters.industries?.includes(industry),
          )}
          onToggleAll={toggleAllIndustries}
          items={industryOptions.map((industry) => ({
            value: industry,
            label: translateIndustry(industry, locale),
            active: isSelected(activeFilters.industries, industry),
          }))}
          onToggle={toggleIndustry}
        />
        <ExplorerFilterGroup
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.productType}
          allActive={productTypeOptions.every((productType) =>
            activeFilters.productTypes?.includes(productType),
          )}
          onToggleAll={toggleAllProductTypes}
          items={productTypeOptions.map((productType) => ({
            value: productType,
            label: translateProductType(productType, locale),
            active: isSelected(activeFilters.productTypes, productType),
          }))}
          onToggle={toggleProductType}
        />
        <ExplorerFilterGroup
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.company}
          allActive={companyOptions.every((company) => activeFilters.companies?.includes(company))}
          onToggleAll={toggleAllCompanies}
          items={companyOptions.map((company) => ({
            value: company,
            label: translate(companyLabels[company], locale),
            active: isSelected(activeFilters.companies, company),
          }))}
          onToggle={toggleCompany}
        />
        <ExplorerSkillsDropdown
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.technologies}
          allActive={technologyOptions.every((technology) =>
            activeFilters.technologies?.includes(technology),
          )}
          onToggleAll={toggleAllTechnologies}
          items={technologyOptions.map((technology) => ({
            value: technology,
            label: translate(technologyLabelById.get(technology), locale, technology),
            active: isSelected(activeFilters.technologies, technology),
          }))}
          onToggle={toggleTechnology}
        />
        <ExplorerSkillsDropdown
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.skills}
          allActive={skillOptions.every((skill) => activeFilters.skills?.includes(skill))}
          onToggleAll={toggleAllSkills}
          items={skillOptions.map((skill) => ({
            value: skill,
            label: translate(skillLabelById.get(skill), locale, skill),
            active: isSelected(activeFilters.skills, skill),
          }))}
          onToggle={toggleSkill}
        />

        {hasActiveFilters(activeFilters) ? (
          <button
            type="button"
            onClick={() => onFiltersChange({})}
            className="w-full cursor-pointer rounded-md border border-border bg-background px-3 py-2 font-body text-xs font-bold text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
          >
            {copy.filters.reset}
          </button>
        ) : null}
      </div>
    </aside>
  );
};

export default ExplorerFilters;
