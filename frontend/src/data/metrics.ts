import type { Metric } from "./types";

const budgetConstructionItemId = "budget-construction";

export const metrics = [
  {
    id: "budget-construction-hours",
    itemId: budgetConstructionItemId,
    label: {
      en: "Build time invested",
      fr: "Temps de construction investi",
    },
    value: 120,
    unit: "hours",
    category: "time",
    display: {
      en: "120 h",
      fr: "120 h",
    },
    confidence: "estimated",
  },
  {
    id: "budget-construction-scope",
    itemId: budgetConstructionItemId,
    label: {
      en: "Budget items modeled",
      fr: "Postes budgétaires modélisés",
    },
    value: 149,
    unit: "items",
    category: "scope",
    display: {
      en: "149 items",
      fr: "149 postes",
    },
    confidence: "estimated",
  },
] satisfies Metric[];
