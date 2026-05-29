import { useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { BarChart3, BriefcaseBusiness, ChevronDown, Code2, ServerCog } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import { getSkillsExpertiseCards, type SkillsExpertiseCardData } from "@/lib/skills";
import { getProjectById, type EnrichedProject } from "@/lib/queryProjects";

import ProjectDetailsModal from "./explorer/ProjectDetailsModal";

const cardIcons = {
  frontend: Code2,
  backend: ServerCog,
  data: BarChart3,
  domain: BriefcaseBusiness,
} satisfies Record<SkillsExpertiseCardData["id"], typeof Code2>;

const cardGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type TagListProps = {
  items: string[];
  emptyLabel: string;
  accent?: boolean;
};

function TagList({ items, emptyLabel, accent = false }: TagListProps) {
  if (items.length === 0) {
    return <p className="font-body text-sm leading-6 text-muted-foreground">{emptyLabel}</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full border px-3 py-1 font-body text-xs font-bold leading-5 ${
            accent
              ? "border-accent/30 bg-accent/10 text-accent"
              : "border-primary/20 bg-primary/10 text-primary"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

type CardSectionProps = {
  title: string;
  children: React.ReactNode;
};

function CardSection({ title, children }: CardSectionProps) {
  return (
    <div>
      <h4 className="font-body text-xs font-black uppercase tracking-normal text-muted-foreground">
        {title}
      </h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

type ProjectBadgeGridProps = {
  projects: SkillsExpertiseCardData["projects"];
  emptyLabel: string;
  onProjectSelect: (project: EnrichedProject) => void;
};

function ProjectBadgeGrid({ projects, emptyLabel, onProjectSelect }: ProjectBadgeGridProps) {
  if (projects.length === 0) {
    return <p className="font-body text-sm leading-6 text-muted-foreground">{emptyLabel}</p>;
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          onClick={() => {
            const fullProject = getProjectById(project.id);

            if (fullProject) {
              onProjectSelect(fullProject);
            }
          }}
          className="min-h-10 cursor-pointer rounded-lg border border-border bg-background px-3 py-2 text-left font-body text-xs font-bold leading-5 text-foreground transition-smooth hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {project.title}
        </button>
      ))}
    </div>
  );
}

export default function SkillsExpertise() {
  const { copy, locale } = useLanguage();
  const cards = getSkillsExpertiseCards(projects, locale);
  const [selectedProject, setSelectedProject] = useState<EnrichedProject | null>(null);
  const [expandedCardIds, setExpandedCardIds] = useState<SkillsExpertiseCardData["id"][]>([]);
  const [pendingScrollCardId, setPendingScrollCardId] =
    useState<SkillsExpertiseCardData["id"] | null>(null);
  const cardRefs = useRef<Record<SkillsExpertiseCardData["id"], HTMLElement | null>>({
    frontend: null,
    backend: null,
    data: null,
    domain: null,
  });

  function toggleCard(cardId: SkillsExpertiseCardData["id"]) {
    setExpandedCardIds((currentCardIds) =>
      currentCardIds.includes(cardId)
        ? currentCardIds.filter((currentCardId) => currentCardId !== cardId)
        : [...currentCardIds, cardId],
    );
    setPendingScrollCardId(expandedCardIds.includes(cardId) ? null : cardId);
  }

  function scrollExpandedCardIntoView(cardId: SkillsExpertiseCardData["id"]) {
    const cardElement = cardRefs.current[cardId];

    if (!cardElement) {
      return;
    }

    const rect = cardElement.getBoundingClientRect();
    const topOffset = 96;
    const bottomOffset = 24;
    const isOutsideView = rect.top < topOffset || rect.bottom > window.innerHeight - bottomOffset;

    if (!isOutsideView) {
      return;
    }

    cardElement.scrollIntoView({
      behavior: "smooth",
      block: rect.height > window.innerHeight - topOffset ? "start" : "nearest",
    });
  }

  return (
    <>
      <section id="skills" className="relative px-4 py-24 sm:py-28">
        <div className="container relative mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {copy.skillsExpertise.title}
            </h2>
            <p className="mt-4 font-body text-base leading-7 text-muted-foreground sm:text-lg">
              {copy.skillsExpertise.intro}
            </p>
          </div>

          <motion.div
            className="grid items-start gap-5 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={cardGridVariants}
          >
            {cards.map((card) => {
              const Icon = cardIcons[card.id];
              const cardCopy = copy.skillsExpertise.cards[card.id];
              const isDomainCard = card.id === "domain";
              const isExpanded = expandedCardIds.includes(card.id);
              const contentId = `skills-${card.id}-content`;

              return (
                <motion.article
                  key={card.id}
                  ref={(element) => {
                    cardRefs.current[card.id] = element;
                  }}
                  className="scroll-mt-24 flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft"
                  variants={skillCardVariants}
                >
                  <button
                    type="button"
                    className="group flex w-full cursor-pointer items-start gap-4 p-5 text-left transition-smooth hover:bg-muted/40 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring sm:p-6"
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    onClick={() => toggleCard(card.id)}
                  >
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                        isDomainCard ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-xl font-bold leading-tight text-foreground">
                        {cardCopy.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">
                        {cardCopy.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-primary ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <CardSection title={copy.skillsExpertise.labels.capabilities}>
                      <ul className="grid gap-2">
                        {cardCopy.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex gap-2 font-body text-sm leading-6 text-foreground/85"
                          >
                            <span
                              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                                isDomainCard ? "bg-accent" : "bg-primary"
                              }`}
                              aria-hidden="true"
                            />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </CardSection>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded ? (
                      <motion.div
                        id={contentId}
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
                        onAnimationComplete={() => {
                          if (pendingScrollCardId !== card.id) {
                            return;
                          }

                          window.requestAnimationFrame(() => {
                            scrollExpandedCardIntoView(card.id);
                            setPendingScrollCardId(null);
                          });
                        }}
                      >
                        <div className="grid flex-1 gap-6 border-t border-border/70 px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
                          {isDomainCard ? (
                            <>
                              <CardSection title={copy.skillsExpertise.labels.industries}>
                                <TagList
                                  items={card.industries}
                                  emptyLabel={copy.skillsExpertise.emptyState}
                                  accent
                                />
                              </CardSection>
                              <CardSection title={copy.skillsExpertise.labels.projectTypes}>
                                <TagList
                                  items={card.productTypes}
                                  emptyLabel={copy.skillsExpertise.emptyState}
                                  accent
                                />
                              </CardSection>
                            </>
                          ) : (
                            <>
                              <CardSection title={copy.skillsExpertise.labels.coreTools}>
                                <TagList
                                  items={card.tools}
                                  emptyLabel={copy.skillsExpertise.emptyState}
                                />
                              </CardSection>
                              <CardSection title={copy.skillsExpertise.labels.featuredProjects}>
                                <ProjectBadgeGrid
                                  projects={card.projects}
                                  emptyLabel={copy.skillsExpertise.emptyState}
                                  onProjectSelect={setSelectedProject}
                                />
                              </CardSection>
                            </>
                          )}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {selectedProject ? (
        <ProjectDetailsModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </>
  );
}
