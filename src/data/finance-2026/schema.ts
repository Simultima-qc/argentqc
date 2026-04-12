export type DataStatus = "official" | "estimate" | "editorial";

export interface DataSourceMeta {
  year: 2026;
  lastUpdated: string;
  status: DataStatus;
  sourceNote: string;
  reviewCadence: "manual" | "monthly" | "quarterly";
}

export interface VersionedDataset<T> {
  dataset: string;
  meta: DataSourceMeta;
  values: T;
}

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export function defineVersionedDataset<T>(
  dataset: string,
  meta: DataSourceMeta,
  values: T
): VersionedDataset<T> {
  if (meta.year !== 2026) {
    throw new Error(`${dataset}: only 2026 datasets are supported here.`);
  }

  if (!isIsoDate(meta.lastUpdated)) {
    throw new Error(`${dataset}: lastUpdated must use YYYY-MM-DD.`);
  }

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
