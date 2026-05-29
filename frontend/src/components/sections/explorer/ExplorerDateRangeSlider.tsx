import {
  formatMonthSerial,
  getRangePercent,
  type ProjectDateBounds,
} from "./helpers/explorerFilters";

type ExplorerDateRangeSliderProps = {
  allLabel: string;
  dateFromLabel: string;
  dateToLabel: string;
  allActive: boolean;
  locale: string;
  title: string;
  bounds: ProjectDateBounds;
  dateFrom: number;
  dateTo: number;
  onReset: () => void;
  onUpdateDateFrom: (value: number) => void;
  onUpdateDateTo: (value: number) => void;
};

const inactiveClass =
  "border-border bg-background text-muted-foreground hover:border-primary/35 hover:text-primary";
const activeClass = "border-primary/40 bg-primary/10 text-primary";

const ExplorerDateRangeSlider = ({
  allLabel,
  dateFromLabel,
  dateToLabel,
  allActive,
  locale,
  title,
  bounds,
  dateFrom,
  dateTo,
  onReset,
  onUpdateDateFrom,
  onUpdateDateTo,
}: ExplorerDateRangeSliderProps) => {
  const dateFromPercent = getRangePercent(dateFrom, bounds.min, bounds.max);
  const dateToPercent = getRangePercent(dateTo, bounds.min, bounds.max);

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-body text-[0.68rem] font-bold uppercase tracking-wide text-muted-foreground">
          {title}
        </h3>
        <button
          type="button"
          onClick={onReset}
          aria-pressed={allActive}
          className={`inline-flex min-h-7 cursor-pointer items-center rounded-full border px-2.5 py-1 font-body text-xs font-semibold transition-smooth ${
            allActive ? activeClass : inactiveClass
          }`}
        >
          {allLabel}
        </button>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between gap-3 font-body text-xs font-semibold text-foreground">
          <span>{formatMonthSerial(dateFrom, locale)}</span>
          <span>{formatMonthSerial(dateTo, locale)}</span>
        </div>

        <div className="relative h-7">
          <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-primary/10" />
          <div
            className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-primary"
            style={{
              left: `${dateFromPercent}%`,
              right: `${100 - dateToPercent}%`,
            }}
          />
          <input
            type="range"
            min={bounds.min}
            max={bounds.max}
            value={dateFrom}
            onChange={(event) => onUpdateDateFrom(Number(event.target.value))}
            className="date-range-input absolute inset-x-0 top-1/2 z-20 h-7 w-full -translate-y-1/2"
            aria-label={dateFromLabel}
          />
          <input
            type="range"
            min={bounds.min}
            max={bounds.max}
            value={dateTo}
            onChange={(event) => onUpdateDateTo(Number(event.target.value))}
            className="date-range-input absolute inset-x-0 top-1/2 z-30 h-7 w-full -translate-y-1/2"
            aria-label={dateToLabel}
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorerDateRangeSlider;
