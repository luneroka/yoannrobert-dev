import type { Project } from "../types";

import { budgetConstructionExcel } from "./budgetConstructionExcel";
import { budgetConstruction } from "./budgetConstruction";
import { staffpicks } from "./staffpicks";

export const projects = [
  budgetConstruction,
  budgetConstructionExcel,
  staffpicks,
] satisfies Project[];
