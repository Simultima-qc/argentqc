export type DataStatus = "official" | "estimate" | "editorial";

export type DataCriticality = "critical" | "high" | "medium";

export interface StaleException {
  until: string;
  reason: string;
}

export interface DataSourceMeta {
  year: 2026;
  lastUpdated: string;
  status: DataStatus;
  sourceNote: string;
  reviewCadence: "manual" | "monthly" | "quarterly";
  nextReviewAt: string;
  criticality: DataCriticality;
  staleException?: StaleException;
}

export interface VersionedDataset<T> {
  dataset: string;
  meta: DataSourceMeta;
  values: T;
}

const CRITICALITY_VALUES: DataCriticality[] = ["critical", "high", "medium"];

// Documented tolerance windows between lastUpdated and nextReviewAt for each
// reviewCadence. "manual" has no interval expectation: a manually curated
// dataset can legitimately declare any forward-looking nextReviewAt.
const CADENCE_TOLERANCE_DAYS: Record<string, { min: number; max: number } | null> = {
  monthly: { min: 20, max: 45 },
  quarterly: { min: 75, max: 110 },
  manual: null,
};

export function isIsoDate(value: unknown): value is string {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

function daysBetween(fromIso: string, toIso: string): number {
  const from = Date.parse(`${fromIso}T00:00:00Z`);
  const to = Date.parse(`${toIso}T00:00:00Z`);
  return Math.round((to - from) / (24 * 60 * 60 * 1000));
}

export function validateDataSourceMeta(dataset: string, meta: DataSourceMeta): void {
  if (meta.year !== 2026) {
    throw new Error(`${dataset}: only 2026 datasets are supported here.`);
  }

  if (!isIsoDate(meta.lastUpdated)) {
    throw new Error(`${dataset}: lastUpdated must use YYYY-MM-DD.`);
  }

  if (!isIsoDate(meta.nextReviewAt)) {
    throw new Error(`${dataset}: nextReviewAt must use YYYY-MM-DD.`);
  }

  if (daysBetween(meta.lastUpdated, meta.nextReviewAt) <= 0) {
    throw new Error(`${dataset}: nextReviewAt must be strictly after lastUpdated.`);
  }

  if (!CRITICALITY_VALUES.includes(meta.criticality)) {
    throw new Error(`${dataset}: criticality must be one of ${CRITICALITY_VALUES.join(", ")}.`);
  }

  const tolerance = CADENCE_TOLERANCE_DAYS[meta.reviewCadence];
  if (tolerance) {
    const gap = daysBetween(meta.lastUpdated, meta.nextReviewAt);
    if (gap < tolerance.min || gap > tolerance.max) {
      throw new Error(
        `${dataset}: nextReviewAt is ${gap} day(s) after lastUpdated, which is inconsistent with reviewCadence "${meta.reviewCadence}" (expected ${tolerance.min}-${tolerance.max} days).`
      );
    }
  }

  if (meta.staleException !== undefined) {
    if (!isIsoDate(meta.staleException.until)) {
      throw new Error(`${dataset}: staleException.until must use YYYY-MM-DD.`);
    }
    if (!meta.staleException.reason || meta.staleException.reason.trim().length === 0) {
      throw new Error(`${dataset}: staleException.reason must be a non-empty explanation.`);
    }
  }
}

export function defineVersionedDataset<T>(
  dataset: string,
  meta: DataSourceMeta,
  values: T
): VersionedDataset<T> {
  validateDataSourceMeta(dataset, meta);

  return {
    dataset,
    meta,
    values,
  };
}

export function assertUniqueIds(dataset: string, ids: string[]): void {
  const seen = new Set<string>();

  for (const id of ids) {
    if (seen.has(id)) {
      throw new Error(`${dataset}: duplicate id "${id}".`);
    }

    seen.add(id);
  }
}
