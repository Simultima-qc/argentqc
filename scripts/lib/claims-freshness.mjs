// Pure, dependency-free freshness/coverage policy helpers for the financial
// claims governance gate (issue #28, following the read-only audit #27).
//
// Everything here is plain, side-effect-free JavaScript on purpose: it is
// imported directly both by scripts/check-seo.mjs (the production gate,
// which must run on plain Node with no build step) and by the unit test
// suite (tests/claims-freshness.test.mjs), so that "the code under test" and
// "the code that actually runs in CI/build" are exactly the same functions.
// The current date is always received as a parameter ("now"), never read
// from the system clock in here, so every calendar-dependent rule is
// deterministic and testable regardless of when the test suite runs.

export const CRITICALITY_VALUES = ["critical", "high", "medium"];
export const GOVERNANCE_STATUSES = ["governed", "explicitly-out-of-scope"];

// Documented tolerance windows (in days) between lastUpdated and
// nextReviewAt for each reviewCadence. Mirrors
// src/data/finance-2026/schema.ts so the gate and the dataset constructor
// enforce the same structural rule; "manual" has no interval expectation.
export const CADENCE_TOLERANCE_DAYS = {
  monthly: { min: 20, max: 45 },
  quarterly: { min: 75, max: 110 },
  manual: null,
};

export function isIsoDate(value) {
  if (typeof value !== "string") return false;

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12) return false;

  // Date.parse/new Date silently roll over an impossible day-of-month (e.g.
  // "2026-02-31" becomes 2026-03-03) instead of failing, so a naive regex +
  // Date.parse check would let a calendar-invalid date through. Round-trip
  // the parsed components against a UTC date to reject that case.
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

// Whole days from `fromIso` to `toIso` (positive when `toIso` is later).
export function daysBetween(fromIso, toIso) {
  const from = Date.parse(`${fromIso}T00:00:00Z`);
  const to = Date.parse(`${toIso}T00:00:00Z`);
  return Math.round((to - from) / (24 * 60 * 60 * 1000));
}

function nonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Always-blocking, calendar-independent structural checks on a dataset's
 * freshness fields (lastUpdated, nextReviewAt, reviewCadence, criticality,
 * staleException). Mirrors the checks schema.ts performs at import time, so
 * the same defect is caught early and legibly by `npm run check:seo` before
 * a much slower `next build` would otherwise throw during module evaluation.
 */
export function validateDatasetMetaShape(label, meta) {
  const errors = [];

  if (!isIsoDate(meta.lastUpdated)) {
    errors.push(`${label}: lastUpdated is missing or malformed (expected YYYY-MM-DD, got ${JSON.stringify(meta.lastUpdated)}).`);
  }

  if (!isIsoDate(meta.nextReviewAt)) {
    errors.push(`${label}: nextReviewAt is missing or malformed (expected YYYY-MM-DD, got ${JSON.stringify(meta.nextReviewAt)}).`);
  }

  if (isIsoDate(meta.lastUpdated) && isIsoDate(meta.nextReviewAt)) {
    const gap = daysBetween(meta.lastUpdated, meta.nextReviewAt);
    if (gap <= 0) {
      errors.push(`${label}: nextReviewAt (${meta.nextReviewAt}) must be strictly after lastUpdated (${meta.lastUpdated}).`);
    } else {
      const tolerance = CADENCE_TOLERANCE_DAYS[meta.reviewCadence];
      if (meta.reviewCadence !== undefined && tolerance === undefined) {
        errors.push(`${label}: unknown reviewCadence "${meta.reviewCadence}".`);
      } else if (tolerance && (gap < tolerance.min || gap > tolerance.max)) {
        errors.push(
          `${label}: nextReviewAt is ${gap} day(s) after lastUpdated, inconsistent with reviewCadence "${meta.reviewCadence}" (expected ${tolerance.min}-${tolerance.max} days).`
        );
      }
    }
  }

  if (!CRITICALITY_VALUES.includes(meta.criticality)) {
    errors.push(`${label}: criticality must be one of ${CRITICALITY_VALUES.join(", ")} (got ${JSON.stringify(meta.criticality)}).`);
  }

  if (meta.staleException !== undefined) {
    if (!isIsoDate(meta.staleException.until)) {
      errors.push(`${label}: staleException.until is missing or malformed.`);
    }
    if (!nonEmptyString(meta.staleException.reason)) {
      errors.push(`${label}: staleException.reason must be a non-empty explanation.`);
    }
  }

  return errors;
}

/**
 * Calendar-dependent evaluation of a single freshness-governed claim.
 * `now` is always injected (ISO date string) — never read from the system
 * clock — so results are fully deterministic in tests.
 *
 * Returns { level: "ok" | "warning" | "blocking", messages: string[] }.
 */
export function evaluateCalendarStatus(meta, { now }) {
  if (meta.historicalStatus === "historical-corrected") {
    return { level: "ok", messages: [] };
  }

  if (!isIsoDate(meta.nextReviewAt)) {
    return { level: "blocking", messages: [`nextReviewAt is missing or malformed: ${JSON.stringify(meta.nextReviewAt)}.`] };
  }

  const overdue = daysBetween(meta.nextReviewAt, now) > 0;
  if (!overdue) {
    return { level: "ok", messages: [] };
  }

  if (meta.criticality !== "critical") {
    return {
      level: "warning",
      messages: [
        `nextReviewAt (${meta.nextReviewAt}) is overdue for a "${meta.criticality}" criticality claim — non-blocking warning, no automatic revalidation performed.`,
      ],
    };
  }

  if (meta.staleException) {
    const exceptionShapeValid = isIsoDate(meta.staleException.until) && nonEmptyString(meta.staleException.reason);
    const exceptionStillActive = exceptionShapeValid && daysBetween(meta.staleException.until, now) <= 0;

    if (exceptionStillActive) {
      return {
        level: "ok",
        messages: [
          `critical claim overdue (nextReviewAt: ${meta.nextReviewAt}) but covered by an active staleException until ${meta.staleException.until}: "${meta.staleException.reason}".`,
        ],
      };
    }

    return {
      level: "blocking",
      messages: [
        exceptionShapeValid
          ? `critical claim overdue and its staleException expired on ${meta.staleException.until}.`
          : `critical claim overdue and its staleException is malformed (missing until/reason).`,
      ],
    };
  }

  return {
    level: "blocking",
    messages: [`critical claim overdue (nextReviewAt: ${meta.nextReviewAt}) with no staleException.`],
  };
}

/**
 * Non-blocking-unless-critical check that the dataset's declared `year`
 * has not fallen behind the current calendar year.
 */
export function evaluateYearDrift(meta, { now }) {
  if (meta.historicalStatus === "historical-corrected" || typeof meta.year !== "number") {
    return { level: "ok", messages: [] };
  }

  const nowYear = Number(String(now).slice(0, 4));
  if (!Number.isFinite(nowYear) || nowYear <= meta.year) {
    return { level: "ok", messages: [] };
  }

  if (meta.criticality === "critical") {
    return {
      level: "blocking",
      messages: [`dataset year ${meta.year} is behind the current year ${nowYear} for a critical, active claim.`],
    };
  }

  return {
    level: "warning",
    messages: [`dataset year ${meta.year} is behind the current year ${nowYear}.`],
  };
}

/** Structural (calendar-independent) validation of one registry entry. */
export function validateRegistryEntryShape(entry) {
  const errors = [];
  const label = `registry entry "${entry.slug ?? "(missing slug)"}"`;

  if (!nonEmptyString(entry.slug)) errors.push("registry entry is missing a non-empty slug.");
  if (!CRITICALITY_VALUES.includes(entry.criticality)) {
    errors.push(`${label}: invalid criticality ${JSON.stringify(entry.criticality)}.`);
  }
  if (!GOVERNANCE_STATUSES.includes(entry.status)) {
    errors.push(`${label}: invalid status ${JSON.stringify(entry.status)}.`);
  }
  if (!nonEmptyString(entry.scopeNote)) {
    errors.push(`${label}: scopeNote must be a non-empty, concrete justification.`);
  }

  if (entry.status === "governed") {
    if (!entry.ledgerFile && entry.kind !== "static-surface") {
      errors.push(`${label}: governed entries must reference a ledgerFile.`);
    }
    if (!entry.datasetModule) {
      if (!isIsoDate(entry.nextReviewAt)) {
        errors.push(`${label}: governed without a datasetModule must declare its own valid nextReviewAt.`);
      }
    }
  }

  if (entry.staleException !== undefined) {
    if (!isIsoDate(entry.staleException.until)) errors.push(`${label}: staleException.until is malformed.`);
    if (!nonEmptyString(entry.staleException.reason)) errors.push(`${label}: staleException.reason must be non-empty.`);
  }

  return errors;
}

/**
 * Registry <-> filesystem drift detection. All filesystem facts are passed
 * in (not read here) so this stays pure and testable with synthetic data:
 * - ledgerFilesOnDisk / articleFilesOnDisk: arrays of repo-relative paths
 *   actually present under docs/claims and src/data/blog/entries.
 * - fileExists: predicate for an individual repo-relative path (used to
 *   check that every entry's own ledgerFile/articleFile/datasetModule
 *   actually exists).
 */
export function computeRegistryDrift({ registry, ledgerFilesOnDisk, articleFilesOnDisk, fileExists }) {
  const errors = [];
  const seenSlugs = new Set();

  for (const entry of registry) {
    if (seenSlugs.has(entry.slug)) {
      errors.push(`duplicate registry slug: ${entry.slug}`);
    }
    seenSlugs.add(entry.slug);

    for (const field of ["ledgerFile", "articleFile", "datasetModule"]) {
      const value = entry[field];
      if (value && !fileExists(value)) {
        errors.push(`registry entry "${entry.slug}" references a missing ${field}: ${value}`);
      }
    }
  }

  const registeredLedgerFiles = new Set(registry.map((entry) => entry.ledgerFile).filter(Boolean));
  for (const ledgerFile of ledgerFilesOnDisk) {
    if (!registeredLedgerFiles.has(ledgerFile)) {
      errors.push(`ledger file exists on disk but is not referenced by any registry entry: ${ledgerFile}`);
    }
  }

  const registeredArticleFiles = new Set(registry.map((entry) => entry.articleFile).filter(Boolean));
  for (const articleFile of articleFilesOnDisk) {
    if (!registeredArticleFiles.has(articleFile)) {
      errors.push(
        `blog article exists on disk but has no registry entry (governed or explicitly-out-of-scope): ${articleFile}`
      );
    }
  }

  return errors;
}

/**
 * Detects a silent divergence between a governed registry entry's declared
 * `criticality` and the `criticality` actually declared by the
 * finance-2026 dataset module it points to. Without this check, an
 * accidental `critical` -> `medium` edit inside a dataset module would
 * silently downgrade an overdue claim from blocking to a non-blocking
 * warning while the registry still claims "critical" — a structural drift
 * the registry is supposed to catch, not a calendar-dependent one, so it is
 * always-blocking regardless of `now`.
 *
 * `datasetCriticalityByModule` maps a repo-relative datasetModule path to
 * the criticality actually parsed from that module (pass only entries for
 * modules that exist and parsed successfully; missing/malformed modules are
 * already reported by computeRegistryDrift / validateDatasetMetaShape).
 */
export function computeCriticalityDrift({ registry, datasetCriticalityByModule }) {
  const errors = [];

  for (const entry of registry) {
    if (entry.status !== "governed" || !entry.datasetModule) continue;

    const datasetCriticality = datasetCriticalityByModule[entry.datasetModule];
    if (datasetCriticality === undefined) continue;

    if (datasetCriticality !== entry.criticality) {
      errors.push(
        `registry entry "${entry.slug}" declares criticality "${entry.criticality}" but its datasetModule (${entry.datasetModule}) declares "${datasetCriticality}" — they must match.`
      );
    }
  }

  return errors;
}

// ── Extraction of defineVersionedDataset(...) meta blocks from raw .ts source ──
// check-seo.mjs never compiles TypeScript (see claims-registry.mjs's header
// comment for why); this mirrors that constraint for finance-2026 dataset
// modules by locating each `defineVersionedDataset("name", { ...meta }, ...)`
// call textually and extracting its flat meta fields with targeted regexes,
// consistent with the rest of scripts/check-seo.mjs's existing approach
// (see e.g. checkChildcareCreditGuardrails).

function findMatchingBrace(source, openIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = openIndex; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  return -1;
}

function extractField(metaBlock, field) {
  const match = metaBlock.match(new RegExp(`\\b${field}:\\s*"([^"]*)"`));
  return match ? match[1] : undefined;
}

function extractStaleException(metaBlock) {
  const markerIndex = metaBlock.indexOf("staleException:");
  if (markerIndex === -1) return undefined;

  const openIndex = metaBlock.indexOf("{", markerIndex);
  if (openIndex === -1) return undefined;

  const closeIndex = findMatchingBrace(metaBlock, openIndex);
  if (closeIndex === -1) return undefined;

  const block = metaBlock.slice(openIndex, closeIndex + 1);
  return {
    until: extractField(block, "until"),
    reason: extractField(block, "reason"),
  };
}

/**
 * Extracts every `defineVersionedDataset("dataset-name", { ... }, ...)` call
 * in `source` and returns [{ datasetName, meta }] with meta's flat fields
 * (lastUpdated, status, reviewCadence, nextReviewAt, criticality, year as a
 * number when present, staleException) parsed out. Malformed/missing fields
 * come back as `undefined` so validateDatasetMetaShape can report them.
 */
export function extractVersionedDatasetMetas(source) {
  const results = [];
  const marker = "defineVersionedDataset(";
  let searchFrom = 0;

  while (true) {
    const callIndex = source.indexOf(marker, searchFrom);
    if (callIndex === -1) break;

    const afterMarker = source.slice(callIndex + marker.length);
    const nameMatch = afterMarker.match(/^\s*"([^"]+)"/);
    const datasetName = nameMatch ? nameMatch[1] : undefined;

    const openIndex = source.indexOf("{", callIndex + marker.length);
    if (openIndex === -1) break;
    const closeIndex = findMatchingBrace(source, openIndex);
    if (closeIndex === -1) break;

    const metaBlock = source.slice(openIndex, closeIndex + 1);
    const yearMatch = metaBlock.match(/\byear:\s*(\d{4})/);

    results.push({
      datasetName,
      meta: {
        year: yearMatch ? Number(yearMatch[1]) : undefined,
        lastUpdated: extractField(metaBlock, "lastUpdated"),
        status: extractField(metaBlock, "status"),
        reviewCadence: extractField(metaBlock, "reviewCadence"),
        nextReviewAt: extractField(metaBlock, "nextReviewAt"),
        criticality: extractField(metaBlock, "criticality"),
        staleException: extractStaleException(metaBlock),
      },
    });

    searchFrom = closeIndex + 1;
  }

  return results;
}
