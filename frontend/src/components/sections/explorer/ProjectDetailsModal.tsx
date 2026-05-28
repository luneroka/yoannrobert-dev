import { useEffect, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  Activity,
  Boxes,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Cpu,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { companyLabels, trackLabels } from "@/data/labels";
import { skills } from "@/data/skills";
import { technologies } from "@/data/technologies";
import type { Locale, LocalizedString } from "@/data/types";
import { translate, translateIndustry, translateProductType } from "@/i18n/translate";
import type { EnrichedProject } from "@/lib/queryProjects";

type ProjectDetailsModalProps = {
  project: EnrichedProject;
  onClose: () => void;
};

type DetailStatProps = {
  label: string;
  value: string;
  icon: typeof Clock3;
  accent?: boolean;
};

const modalCopy = {
  en: {
    close: "Close project details",
    closeButton: "Close",
    previousImage: "Previous image",
    nextImage: "Next image",
    imageCounter: "Image",
    overview: "Overview",
    gallery: "Gallery",
    details: "Details",
    company: "Company",
    role: "Role",
    period: "Period",
    domain: "Domain",
    metrics: "Metrics",
    skillsUsed: "Skills used",
    hours: "Hours",
    systems: "Systems",
    technologies: "Technologies",
    problem: "Problem",
    solution: "Solution",
    impact: "Impact",
    systemsBuilt: "Systems built",
    noImages: "No screenshots available for this project yet.",
  },
  fr: {
    close: "Fermer les détails du projet",
    closeButton: "Fermer",
    previousImage: "Image précédente",
    nextImage: "Image suivante",
    imageCounter: "Image",
    overview: "Vue d'ensemble",
    gallery: "Galerie",
    details: "Détails",
    company: "Entreprise",
    role: "Rôle",
    period: "Période",
    domain: "Domaine",
    metrics: "Métriques",
    skillsUsed: "Compétences utilisées",
    hours: "Heures",
    systems: "Systèmes",
    technologies: "Technologies",
    problem: "Problème",
    solution: "Solution",
    impact: "Impact",
    systemsBuilt: "Systèmes conçus",
    noImages: "Aucune capture disponible pour ce projet pour le moment.",
  },
} satisfies Record<Locale, Record<string, string>>;

const skillLabelById = new Map(skills.map((skill) => [skill.id, skill.label]));
const technologyById = new Map(technologies.map((technology) => [technology.id, technology]));

function formatNumber(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale).format(value);
}

function formatContextMetric(project: EnrichedProject, locale: Locale) {
  const unit = project.metrics.context.unit ? translate(project.metrics.context.unit, locale) : "";
  const value = formatNumber(project.metrics.context.value, locale);

  return `${value}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;
}

function getLocalizedList(values: LocalizedString[], locale: Locale) {
  return values.map((value) => translate(value, locale));
}

function DetailStat({ label, value, icon: Icon, accent = false }: DetailStatProps) {
  return (
    <div
      className={`rounded-md border p-2.5 ${
        accent ? "border-accent/35 bg-transparent" : "border-border bg-background"
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span
          className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
            accent ? "bg-transparent text-accent" : "bg-primary/10 text-primary"
          }`}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="font-body text-[11px] font-bold uppercase tracking-normal text-muted-foreground">
            {label}
          </p>
          <p
            className={`mt-0.5 wrap-break-words font-body text-sm font-bold leading-5 ${
              accent ? "text-accent" : "text-foreground"
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="font-heading text-base font-bold text-foreground">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

const ProjectDetailsModal = ({ project, onClose }: ProjectDetailsModalProps) => {
  const { locale } = useLanguage();
  const copy = modalCopy[locale];
  const titleId = useId();
  const screenshots = project.screenshots ?? [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeScreenshot = screenshots[activeImageIndex];
  const hasMultipleImages = screenshots.length > 1;

  const title = translate(project.title, locale);
  const summary = translate(project.summary, locale);
  const systemsBuilt = useMemo(
    () => getLocalizedList(project.systemsBuilt, locale),
    [locale, project.systemsBuilt],
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  function showPreviousImage() {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1,
    );
  }

  function showNextImage() {
    setActiveImageIndex((currentIndex) =>
      currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1,
    );
  }

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-foreground/30 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-5"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="flex h-[calc(100dvh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border/70 bg-background text-foreground shadow-large sm:h-auto sm:max-h-[calc(100dvh-2rem)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="shrink-0 border-b border-border/70 bg-background px-4 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2
                id={titleId}
                className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl"
              >
                {title}
              </h2>
              <p className="mt-3 max-w-3xl font-body text-sm leading-6 text-muted-foreground">
                {summary}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap justify-end gap-2">
              {project.track.map((track) => (
                <span
                  key={track}
                  className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-body text-xs font-bold text-primary"
                >
                  {translate(trackLabels[track], locale)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <DetailStat
                label={copy.period}
                value={translate(project.period, locale)}
                icon={CalendarDays}
              />
              <DetailStat
                label={copy.company}
                value={project.company ? translate(companyLabels[project.company], locale) : "-"}
                icon={Building2}
              />
              <DetailStat
                label={copy.role}
                value={project.role ? translate(project.role, locale) : "-"}
                icon={Building2}
              />
            </div>

            {activeScreenshot ? (
              <Section title={copy.gallery}>
                <div className="overflow-hidden rounded-md bg-muted">
                  <div className="relative aspect-video bg-muted">
                    <img
                      src={activeScreenshot.src}
                      alt={translate(activeScreenshot.alt, locale)}
                      className="h-full w-full object-contain"
                    />

                    {hasMultipleImages ? (
                      <>
                        <button
                          type="button"
                          onClick={showPreviousImage}
                          className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft transition-smooth hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring"
                          aria-label={copy.previousImage}
                          title={copy.previousImage}
                        >
                          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={showNextImage}
                          className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-soft transition-smooth hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring"
                          aria-label={copy.nextImage}
                          title={copy.nextImage}
                        >
                          <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-border/70 bg-card px-4 py-3">
                    <p className="min-w-0 font-body text-xs font-semibold text-muted-foreground">
                      {activeScreenshot.caption
                        ? translate(activeScreenshot.caption, locale)
                        : translate(activeScreenshot.alt, locale)}
                    </p>
                    <p className="shrink-0 font-body text-xs font-bold text-primary">
                      {copy.imageCounter} {activeImageIndex + 1}/{screenshots.length}
                    </p>
                  </div>

                  {hasMultipleImages ? (
                    <div className="flex items-center justify-center gap-2 border-t border-border/70 bg-card px-4 py-3">
                      {screenshots.map((screenshot, index) => (
                        <button
                          key={`${screenshot.src}-${index}`}
                          type="button"
                          onClick={() => setActiveImageIndex(index)}
                          className={`h-2.5 rounded-full transition-smooth ${
                            index === activeImageIndex
                              ? "w-8 bg-primary"
                              : "w-2.5 bg-muted-foreground/30 hover:bg-primary/50"
                          }`}
                          aria-label={`${copy.imageCounter} ${index + 1}`}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              </Section>
            ) : null}

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
              <div className="space-y-6">
                <Section title={copy.overview}>
                  <div className="space-y-4">
                    {project.problem ? (
                      <div>
                        <p className="font-body text-xs font-bold uppercase tracking-normal text-primary">
                          {copy.problem}
                        </p>
                        <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">
                          {translate(project.problem, locale)}
                        </p>
                      </div>
                    ) : null}

                    {project.solution ? (
                      <div>
                        <p className="font-body text-xs font-bold uppercase tracking-normal text-primary">
                          {copy.solution}
                        </p>
                        <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">
                          {translate(project.solution, locale)}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </Section>

                <Section title={copy.impact}>
                  <ul className="space-y-3">
                    {project.impact.map((impactItem) => (
                      <li
                        key={translate(impactItem, locale)}
                        className="rounded-md border border-border bg-background p-3 font-body text-sm leading-6 text-muted-foreground"
                      >
                        {translate(impactItem, locale)}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section title={copy.systemsBuilt}>
                  <ul className="space-y-2">
                    {systemsBuilt.map((system) => (
                      <li
                        key={system}
                        className="rounded-md bg-muted px-3 py-2 font-body text-sm leading-5 text-muted-foreground"
                      >
                        {system}
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>

              <aside className="space-y-6">
                <Section title={copy.domain}>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-border bg-background px-3 py-1.5 font-body text-xs font-bold text-muted-foreground">
                      {translateIndustry(project.industry, locale)}
                    </span>
                    <span className="rounded-full border border-border bg-background px-3 py-1.5 font-body text-xs font-bold text-muted-foreground">
                      {translateProductType(project.productType, locale)}
                    </span>
                  </div>
                </Section>

                <Section title={copy.metrics}>
                  <div className="grid grid-cols-1 gap-3">
                    <DetailStat
                      label={copy.hours}
                      value={`${formatNumber(project.metrics.hoursInvested, locale)}h`}
                      icon={Clock3}
                      accent
                    />
                    <DetailStat
                      label={copy.systems}
                      value={formatNumber(project.systemsBuiltCount, locale)}
                      icon={Boxes}
                      accent
                    />
                    <DetailStat
                      label={copy.skillsUsed}
                      value={formatNumber(project.skills.length, locale)}
                      icon={Cpu}
                      accent
                    />
                    <DetailStat
                      label={translate(project.metrics.context.label, locale)}
                      value={formatContextMetric(project, locale)}
                      icon={Activity}
                      accent
                    />
                  </div>
                </Section>

                <Section title={copy.skillsUsed}>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1.5 font-body text-xs font-bold text-muted-foreground"
                      >
                        {translate(skillLabelById.get(skill), locale, skill)}
                      </span>
                    ))}
                  </div>
                </Section>

                <Section title={copy.technologies}>
                  <div className="grid grid-cols-3 gap-3">
                    {project.technologies.map((technology) => {
                      const technologyItem = technologyById.get(technology);
                      const TechnologyIcon = technologyItem?.icon ?? Cpu;
                      const technologyLabel = translate(
                        technologyItem?.label,
                        locale,
                        technology,
                      );

                      return (
                        <div
                          key={technology}
                          className="rounded-md bg-muted p-3 text-center"
                          title={technologyLabel}
                        >
                          <TechnologyIcon
                            className="mx-auto h-6 w-6 text-primary"
                            aria-hidden="true"
                          />
                          <p className="mt-2 truncate font-body text-[11px] font-bold text-muted-foreground">
                            {technologyLabel}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </Section>
              </aside>
            </div>
          </div>
        </div>

        <div className="shrink-0 border-t border-border/70 bg-background px-4 py-3 sm:px-6">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-primary/25 bg-primary px-4 font-body text-sm font-bold text-primary-foreground transition-smooth hover:bg-primary-dark focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {copy.closeButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default ProjectDetailsModal;
