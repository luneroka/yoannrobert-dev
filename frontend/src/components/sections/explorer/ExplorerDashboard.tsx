import { useState } from "react";
import { motion, type Variants } from "framer-motion";

import ExplorerCharts from "./ExplorerCharts";
import ExplorerFilters from "./ExplorerFilters";
import ExplorerKpiCards from "./ExplorerKpiCards";
import ExplorerQueryBar from "./ExplorerQueryBar";

import { getExplorerMetricSummary, type ExplorerMetricSummary } from "@/data/metrics";
import { buildProjectsSqlQuery } from "@/data/sql-editor/sqlQueries";
import { useLanguage } from "@/context/LanguageContext";
import {
  queryProjects,
  type EnrichedProject,
  type ProjectFilters,
} from "@/lib/queryProjects";

const dashboardVariants: Variants = {
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

type ExplorerMainProps = {
  projects: EnrichedProject[];
  metrics: ExplorerMetricSummary;
};

function ExplorerMain({ projects, metrics }: ExplorerMainProps) {
  const { copy } = useLanguage();

  return (
    <div className="min-w-0 space-y-6 p-4 sm:p-6">
      <ExplorerKpiCards metrics={metrics} />
      {projects.length > 0 ? (
        <ExplorerCharts projects={projects} />
      ) : (
        <div className="rounded-lg border border-border bg-background p-8 text-center shadow-soft">
          <p className="font-body text-sm font-semibold text-muted-foreground">
            {copy.explorer.emptyState}
          </p>
        </div>
      )}
    </div>
  );
}

const ExplorerDashboard = () => {
  const [filters, setFilters] = useState<ProjectFilters>({});
  const allProjects = queryProjects({}, "date-desc");
  const projects = queryProjects(filters, "date-desc");
  const metrics = getExplorerMetricSummary(projects);
  const sqlQuery = buildProjectsSqlQuery(filters);

  return (
    <motion.div
      className="grid overflow-visible rounded-lg border border-border bg-card/90 shadow-soft backdrop-blur lg:grid-cols-[220px_minmax(0,1fr)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={dashboardVariants}
    >
      <ExplorerFilters projects={allProjects} filters={filters} onFiltersChange={setFilters} />
      <div className="min-w-0">
        <ExplorerQueryBar query={sqlQuery} />
        <ExplorerMain projects={projects} metrics={metrics} />
      </div>
    </motion.div>
  );
};

export default ExplorerDashboard;
