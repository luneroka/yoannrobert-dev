import { useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { useLanguage } from "@/context/LanguageContext";
import { trackLabels } from "@/data/labels";
import type { TechnologyId, Track } from "@/data/types";
import { translate } from "@/i18n/translate";
import type { EnrichedProject } from "@/lib/queryProjects";

import ProjectDetailsModal from "./ProjectDetailsModal";

type ChartPanelProps = {
  title: string;
  children: ReactNode;
  compact?: boolean;
  wide?: boolean;
};

type ExplorerChartsProps = {
  projects: EnrichedProject[];
};

type ImpactTooltip = {
  title: string;
  top: number;
  left: number;
};

const impactBarMinOpacity = 0.35;
const trackOrder: Track[] = ["dev", "data"];

function getPercentage(value: number, total: number) {
  if (total === 0) {
    return 0;
  }

  return Math.round((value / total) * 100);
}

function getImpactBarColor(index: number, totalBars: number) {
  if (totalBars <= 1) {
    return "hsl(var(--primary))";
  }

  const progress = index / (totalBars - 1);
  const opacity = 1 - progress * (1 - impactBarMinOpacity);

  return `hsl(var(--primary) / ${opacity.toFixed(2)})`;
}

function getTechnologyGroupsByTrack(projects: EnrichedProject[]) {
  const technologyTrackCounts = projects.reduce(
    (counts, project) => {
      project.technologies.forEach((technology) => {
        const trackCounts = counts.get(technology) ?? { dev: 0, data: 0 };

        project.track.forEach((track) => {
          trackCounts[track] += 1;
        });

        counts.set(technology, trackCounts);
      });

      return counts;
    },
    new Map<TechnologyId, Record<Track, number>>(),
  );
  const technologyGroups: Record<Track, Set<TechnologyId>> = {
    dev: new Set<TechnologyId>(),
    data: new Set<TechnologyId>(),
  };

  technologyTrackCounts.forEach((trackCounts, technology) => {
    const assignedTrack = trackOrder.reduce((currentTrack, nextTrack) =>
      trackCounts[nextTrack] > trackCounts[currentTrack] ? nextTrack : currentTrack,
    );

    technologyGroups[assignedTrack].add(technology);
  });

  return (Object.entries(technologyGroups) as Array<[Track, Set<TechnologyId>]>)
    .map(([track, technologySet]) => ({
      track,
      technologies: Array.from(technologySet).sort(),
    }))
    .filter((group) => group.technologies.length > 0);
}

function ChartPanel({ title, children, compact = false, wide = false }: ChartPanelProps) {
  return (
    <div className={`${wide ? "lg:col-span-2" : ""}`}>
      <div className={compact ? "mb-2" : "mb-5"}>
        <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      </div>

      {children}
    </div>
  );
}

function getDonutGradient(technologyGroups: ReturnType<typeof getTechnologyGroupsByTrack>) {
  const totalTechnologies = technologyGroups.reduce(
    (sum, group) => sum + group.technologies.length,
    0,
  );

  if (totalTechnologies === 0) {
    return "conic-gradient(hsl(var(--muted)) 0deg 360deg)";
  }

  let currentDegrees = 0;
  const segments = technologyGroups.map((group) => {
    const segmentDegrees = (group.technologies.length / totalTechnologies) * 360;
    const startDegrees = currentDegrees;
    const endDegrees = currentDegrees + segmentDegrees;
    const color = group.track === "data" ? "hsl(var(--accent))" : "hsl(var(--primary))";
    currentDegrees = endDegrees;

    return `${color} ${startDegrees}deg ${endDegrees}deg`;
  });

  return `conic-gradient(${segments.join(", ")})`;
}

const ExplorerCharts = ({ projects }: ExplorerChartsProps) => {
  const { copy, locale } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<EnrichedProject | null>(null);
  const [impactTooltip, setImpactTooltip] = useState<ImpactTooltip | null>(null);
  const chartTitles = copy.explorer.charts;
  const maxHours = Math.max(...projects.map((project) => project.metrics.hoursInvested), 1);
  const technologyGroups = useMemo(() => getTechnologyGroupsByTrack(projects), [projects]);
  const totalTrackedTechnologies = technologyGroups.reduce(
    (sum, group) => sum + group.technologies.length,
    0,
  );
  const technologyDonutGradient = getDonutGradient(technologyGroups);
  const sortedProjectsByHours = projects.toSorted(
    (projectA, projectB) => projectB.metrics.hoursInvested - projectA.metrics.hoursInvested,
  );
  const latestTimelineProjects = projects.slice(0, 2);

  function showImpactTooltip(projectTitle: string, element: HTMLElement) {
    const rect = element.getBoundingClientRect();

    setImpactTooltip({
      title: projectTitle,
      top: Math.min(Math.max(rect.top + rect.height / 2, 28), window.innerHeight - 28),
      left: rect.left + 46,
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartPanel title={chartTitles.impactOverview} compact>
          <div className="flex h-64 items-center overflow-visible">
            <div
              className="flex max-h-full w-full flex-col overflow-x-visible overflow-y-auto"
              onScroll={() => setImpactTooltip(null)}
            >
              {sortedProjectsByHours.map((project, index) => {
                const width = getPercentage(project.metrics.hoursInvested, maxHours);
                const barColor = getImpactBarColor(index, sortedProjectsByHours.length);
                const projectTitle = translate(project.title, locale);

                return (
                  <button
                    type="button"
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative grid h-7 w-full shrink-0 cursor-pointer grid-cols-[38px_minmax(0,1fr)] items-center gap-2 text-left outline-none transition-smooth focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring"
                    aria-label={projectTitle}
                    onMouseEnter={(event) => showImpactTooltip(projectTitle, event.currentTarget)}
                    onMouseLeave={() => setImpactTooltip(null)}
                    onFocus={(event) => showImpactTooltip(projectTitle, event.currentTarget)}
                    onBlur={() => setImpactTooltip(null)}
                  >
                    <span className="text-left font-body text-xs font-bold text-primary">
                      {project.metrics.hoursInvested}h
                    </span>
                    <div className="h-3 rounded-full bg-primary/10">
                      <div
                        className="h-full min-w-2 rounded-full"
                        style={{ width: `${width}%`, backgroundColor: barColor }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </ChartPanel>

        <ChartPanel title={chartTitles.technologiesCovered} compact>
          <div className="flex h-64 items-center gap-6 rounded-md p-4">
            <div
              className="relative h-40 w-40 shrink-0 rounded-full"
              style={{ background: technologyDonutGradient }}
              aria-label={chartTitles.technologiesCovered}
            >
              <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-card text-center">
                <span className="font-heading text-3xl font-bold leading-none text-foreground">
                  {totalTrackedTechnologies}
                </span>
                <span className="mt-1 font-body text-xs font-bold text-muted-foreground">
                  {copy.explorer.filters.technologies}
                </span>
              </div>
            </div>

            <div className="min-w-0 flex-1 space-y-3">
              {technologyGroups.map((group) => {
                const value = getPercentage(group.technologies.length, totalTrackedTechnologies);

                return (
                  <div
                    key={group.track}
                    className="flex items-center justify-between gap-3 rounded-md bg-muted px-3 py-2"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <span
                        className={`h-3 w-3 shrink-0 rounded-full ${
                          group.track === "data" ? "bg-accent" : "bg-primary"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="truncate font-body text-sm font-bold text-foreground">
                        {translate(trackLabels[group.track], locale)}
                      </span>
                    </div>
                    <span className="shrink-0 font-body text-xs font-bold text-primary">
                      {value}%
                    </span>
                  </div>
                );
              })}

              {technologyGroups.length === 0 ? (
                <div className="rounded-md bg-muted px-3 py-2">
                  <span className="font-body text-sm font-semibold text-muted-foreground">0%</span>
                </div>
              ) : null}
            </div>
          </div>
        </ChartPanel>

        <ChartPanel title={chartTitles.timeline} wide>
          <div className="relative">
            <div
              className="absolute inset-x-4 top-1/2 hidden h-px bg-border sm:block"
              aria-hidden="true"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {latestTimelineProjects.map((project, index) => (
                <button
                  type="button"
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="relative cursor-pointer rounded-lg border border-border bg-card p-4 text-left transition-smooth hover:border-primary/40 hover:shadow-soft focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span
                    className={`absolute -top-1 left-4 h-2 w-12 rounded-full ${
                      index === 0 ? "bg-primary" : "bg-accent"
                    }`}
                    aria-hidden="true"
                  />
                  <p className="font-body text-sm font-bold text-foreground">
                    {translate(project.title, locale)}
                  </p>
                  <p className="mt-2 font-body text-xs font-semibold text-muted-foreground">
                    {translate(project.period, locale)}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    {project.track.map((track) => (
                      <span
                        key={track}
                        className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-body text-xs font-bold text-primary"
                      >
                        {translate(trackLabels[track], locale)}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ChartPanel>

        {selectedProject ? (
          <ProjectDetailsModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </div>
      {impactTooltip
        ? createPortal(
            <div
              className="pointer-events-none fixed z-60 ml-3 w-max max-w-64 -translate-y-1/2 rounded-md border border-border bg-popover px-3 py-2 font-body text-xs font-semibold leading-4 text-popover-foreground shadow-medium"
              style={{ left: impactTooltip.left, top: impactTooltip.top }}
            >
              {impactTooltip.title}
              <span
                className="absolute right-full top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rotate-45 border-b border-l border-border bg-popover"
                aria-hidden="true"
              />
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

export default ExplorerCharts;
