import { Database } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

type ExplorerQueryBarProps = {
  query: string;
};

const ExplorerQueryBar = ({ query }: ExplorerQueryBarProps) => {
  const { copy } = useLanguage();

  return (
    <div className="border-b border-border bg-secondary/25 px-4 py-3 sm:px-6">
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Database className="h-4 w-4" aria-hidden="true" />
        </span>

        <p className="shrink-0 font-body text-xs font-bold uppercase tracking-wide text-muted-foreground">
          {copy.explorer.query.label}
        </p>

        <div className="group relative min-w-0 sm:flex-1">
          <code
            aria-label={copy.explorer.query.readOnlyLabel}
            aria-describedby="explorer-query-tooltip"
            className="block min-w-0 cursor-text select-text overflow-x-auto rounded-md border border-border bg-muted px-3 py-2 font-mono text-xs leading-5 text-muted-foreground shadow-inner"
            tabIndex={0}
          >
            {query}
          </code>
          <span
            id="explorer-query-tooltip"
            role="tooltip"
            className="pointer-events-none absolute left-2 top-full z-10 mt-2 max-w-64 rounded-md border border-border bg-popover px-2.5 py-1.5 font-body text-xs leading-4 text-popover-foreground opacity-0 shadow-soft transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
          >
            {copy.explorer.query.generatedHint}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExplorerQueryBar;
