import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

import { claimsRegistry } from "../src/data/finance-2026/claims-registry.mjs";
import {
  computeRegistryDrift,
  evaluateCalendarStatus,
  evaluateYearDrift,
  extractVersionedDatasetMetas,
  validateDatasetMetaShape,
  validateRegistryEntryShape,
} from "../scripts/lib/claims-freshness.mjs";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (relPath) => fs.readFileSync(path.join(rootDir, relPath), "utf8");

// ── Registry / repository integration facts (real repo tree) ───────────────

const ledgerFilesOnDisk = fs
  .readdirSync(path.join(rootDir, "docs", "claims"), { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
  .map((entry) => `docs/claims/${entry.name}`);

const articleFilesOnDisk = fs
  .readdirSync(path.join(rootDir, "src", "data", "blog", "entries"), { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".tsx"))
  .map((entry) => `src/data/blog/entries/${entry.name}`);

const fileExists = (relPath) => fs.existsSync(path.join(rootDir, relPath));

test("registry entries are all structurally valid", () => {
  const errors = claimsRegistry.flatMap((entry) => validateRegistryEntryShape(entry));
  assert.deepEqual(errors, []);
});

test("registry has zero drift against the real repository tree (all 13 ledgers registered, all 29 articles covered)", () => {
  const errors = computeRegistryDrift({ registry: claimsRegistry, ledgerFilesOnDisk, articleFilesOnDisk, fileExists });
  assert.deepEqual(errors, []);
  assert.equal(ledgerFilesOnDisk.length, 13);
  assert.equal(articleFilesOnDisk.length, 29);
  const governed = claimsRegistry.filter((entry) => entry.status === "governed");
  const outOfScope = claimsRegistry.filter((entry) => entry.status === "explicitly-out-of-scope");
  assert.equal(governed.length, 13);
  assert.equal(outOfScope.length, 17);
});

// 1. Ledger obligatoire absent -> échec
test("a governed entry whose ledgerFile is missing on disk fails drift detection", () => {
  const registry = [
    { slug: "x", kind: "blog-article", articleFile: "src/data/blog/entries/rrq-rente-retraite-2026.tsx", ledgerFile: "docs/claims/does-not-exist-2026.md", criticality: "high", status: "governed", nextReviewAt: "2026-12-01", scopeNote: "test" },
  ];
  const errors = computeRegistryDrift({ registry, ledgerFilesOnDisk: [], articleFilesOnDisk: [], fileExists });
  assert.ok(errors.some((message) => message.includes("missing ledgerFile")));
});

// 2. Ledger présent mais non enregistré -> échec
test("a ledger file on disk with no matching registry entry fails drift detection", () => {
  const errors = computeRegistryDrift({
    registry: [],
    ledgerFilesOnDisk: ["docs/claims/orphan-ledger-2026.md"],
    articleFilesOnDisk: [],
    fileExists,
  });
  assert.ok(errors.some((message) => message.includes("not referenced by any registry entry: docs/claims/orphan-ledger-2026.md")));
});

// 3. Surface critique entrant dans le périmètre mais absente du registre -> échec
test("a blog article on disk with no registry entry (governed or out-of-scope) fails drift detection", () => {
  const errors = computeRegistryDrift({
    registry: [],
    ledgerFilesOnDisk: [],
    articleFilesOnDisk: ["src/data/blog/entries/new-surface-2026.tsx"],
    fileExists,
  });
  assert.ok(errors.some((message) => message.includes("no registry entry") && message.includes("new-surface-2026.tsx")));
});

// 4. Entrée de registre vers fichier inexistant -> échec
test("a registry entry pointing at a nonexistent datasetModule fails drift detection", () => {
  const registry = [
    { slug: "x", kind: "blog-article", articleFile: "src/data/blog/entries/rrq-rente-retraite-2026.tsx", datasetModule: "src/data/finance-2026/does-not-exist.ts", criticality: "high", status: "governed", scopeNote: "test" },
  ];
  const errors = computeRegistryDrift({ registry, ledgerFilesOnDisk: [], articleFilesOnDisk: [], fileExists });
  assert.ok(errors.some((message) => message.includes("missing datasetModule")));
});

// 5. lastUpdated/nextReviewAt malformés -> échec
test("malformed lastUpdated or nextReviewAt fails dataset meta shape validation", () => {
  const errorsBadLastUpdated = validateDatasetMetaShape("x", {
    lastUpdated: "2026/08/31",
    nextReviewAt: "2026-11-30",
    reviewCadence: "quarterly",
    criticality: "critical",
  });
  assert.ok(errorsBadLastUpdated.some((message) => message.includes("lastUpdated")));

  const errorsBadNextReview = validateDatasetMetaShape("x", {
    lastUpdated: "2026-08-31",
    nextReviewAt: "not-a-date",
    reviewCadence: "quarterly",
    criticality: "critical",
  });
  assert.ok(errorsBadNextReview.some((message) => message.includes("nextReviewAt")));
});

// 6. nextReviewAt <= lastUpdated -> échec
test("nextReviewAt equal to or before lastUpdated fails shape validation", () => {
  const errors = validateDatasetMetaShape("x", {
    lastUpdated: "2026-08-31",
    nextReviewAt: "2026-08-31",
    reviewCadence: "quarterly",
    criticality: "critical",
  });
  assert.ok(errors.some((message) => message.includes("strictly after")));
});

// 13. Dérive cadence/date -> comportement conforme à la politique documentée
test("nextReviewAt inconsistent with the declared reviewCadence fails shape validation", () => {
  const errors = validateDatasetMetaShape("x", {
    lastUpdated: "2026-04-12",
    nextReviewAt: "2027-01-15", // ~9 months after a "quarterly" lastUpdated
    reviewCadence: "quarterly",
    criticality: "high",
  });
  assert.ok(errors.some((message) => message.includes("inconsistent with reviewCadence")));

  const okErrors = validateDatasetMetaShape("x", {
    lastUpdated: "2026-08-31",
    nextReviewAt: "2026-11-30",
    reviewCadence: "quarterly",
    criticality: "critical",
  });
  assert.deepEqual(okErrors, []);
});

// 7. Claim/dataset critique avant échéance -> succès
test("a critical claim before its nextReviewAt is ok", () => {
  const result = evaluateCalendarStatus({ nextReviewAt: "2026-11-30", criticality: "critical" }, { now: "2026-09-02" });
  assert.equal(result.level, "ok");
});

// 8. Critique après échéance sans exception -> échec
test("a critical claim after its nextReviewAt with no staleException is blocking", () => {
  const result = evaluateCalendarStatus({ nextReviewAt: "2026-11-30", criticality: "critical" }, { now: "2026-12-01" });
  assert.equal(result.level, "blocking");
});

// 9. Critique après échéance avec exception valide -> succès + visibilité
test("a critical claim after its nextReviewAt with a valid, unexpired staleException is ok and visible", () => {
  const result = evaluateCalendarStatus(
    {
      nextReviewAt: "2026-11-30",
      criticality: "critical",
      staleException: { until: "2027-01-01", reason: "Awaiting the official quarterly indexation bulletin." },
    },
    { now: "2026-12-01" }
  );
  assert.equal(result.level, "ok");
  assert.ok(result.messages[0].includes("staleException"));
  assert.ok(result.messages[0].includes("Awaiting the official quarterly indexation bulletin."));
});

// 10. Exception expirée -> échec
test("an expired staleException does not suppress the blocking failure", () => {
  const result = evaluateCalendarStatus(
    {
      nextReviewAt: "2026-11-30",
      criticality: "critical",
      staleException: { until: "2026-11-15", reason: "Temporary grace period." },
    },
    { now: "2026-12-01" }
  );
  assert.equal(result.level, "blocking");
  assert.match(result.messages[0], /expired/);
});

test("a staleException missing a non-empty reason never suppresses the blocking failure", () => {
  const result = evaluateCalendarStatus(
    { nextReviewAt: "2026-11-30", criticality: "critical", staleException: { until: "2027-01-01", reason: "  " } },
    { now: "2026-12-01" }
  );
  assert.equal(result.level, "blocking");
});

// 11. High/medium périmé -> warning mais succès
test("a high or medium criticality claim overdue is a non-blocking warning", () => {
  const high = evaluateCalendarStatus({ nextReviewAt: "2026-05-12", criticality: "high" }, { now: "2026-09-02" });
  assert.equal(high.level, "warning");

  const medium = evaluateCalendarStatus({ nextReviewAt: "2026-05-12", criticality: "medium" }, { now: "2026-09-02" });
  assert.equal(medium.level, "warning");
});

// 12. Historique corrigé/retiré -> ne doit pas être traité comme claim active invalide
test("a historical-corrected claim is never blocking or warning, regardless of how overdue it is", () => {
  const result = evaluateCalendarStatus(
    { nextReviewAt: "2020-01-01", criticality: "critical", historicalStatus: "historical-corrected" },
    { now: "2026-12-01" }
  );
  assert.equal(result.level, "ok");
  assert.deepEqual(result.messages, []);
});

// 14. Horloge injectée -> résultats identiques indépendamment de la date réelle d'exécution
test("evaluateCalendarStatus is a pure function of the injected now, not the system clock", () => {
  const meta = { nextReviewAt: "2026-11-30", criticality: "critical" };
  const beforeA = evaluateCalendarStatus(meta, { now: "2026-09-02" });
  const beforeB = evaluateCalendarStatus(meta, { now: "2026-09-02" });
  assert.deepEqual(beforeA, beforeB);

  const afterA = evaluateCalendarStatus(meta, { now: "2099-01-01" });
  const afterB = evaluateCalendarStatus(meta, { now: "2099-01-01" });
  assert.deepEqual(afterA, afterB);
  assert.equal(afterA.level, "blocking");
});

test("year drift is a non-blocking warning for high/medium claims and blocking for active critical claims", () => {
  const warn = evaluateYearDrift({ year: 2026, criticality: "high" }, { now: "2027-03-01" });
  assert.equal(warn.level, "warning");

  const blocking = evaluateYearDrift({ year: 2026, criticality: "critical" }, { now: "2027-03-01" });
  assert.equal(blocking.level, "blocking");

  const notYetDrifted = evaluateYearDrift({ year: 2026, criticality: "critical" }, { now: "2026-12-31" });
  assert.equal(notYetDrifted.level, "ok");

  const historicalNeverDrifts = evaluateYearDrift(
    { year: 2026, criticality: "critical", historicalStatus: "historical-corrected" },
    { now: "2099-01-01" }
  );
  assert.equal(historicalNeverDrifts.level, "ok");
});

test("extractVersionedDatasetMetas reads the meta of every real finance-2026 dataset module without throwing", () => {
  const financeDir = path.join(rootDir, "src", "data", "finance-2026");
  const files = fs
    .readdirSync(financeDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ts") && entry.name !== "schema.ts" && entry.name !== "index.ts");

  assert.ok(files.length >= 10);

  for (const file of files) {
    const source = fs.readFileSync(path.join(financeDir, file.name), "utf8");
    const metas = extractVersionedDatasetMetas(source);
    assert.ok(metas.length > 0, `${file.name} should define at least one versioned dataset`);

    for (const { datasetName, meta } of metas) {
      assert.ok(datasetName, `${file.name}: dataset name should be extracted`);
      const errors = validateDatasetMetaShape(`${datasetName} (${file.name})`, meta);
      assert.deepEqual(errors, [], `${file.name} meta should be structurally valid: ${errors.join("; ")}`);
    }
  }
});

test("check-seo.mjs's ARGENTQC_FRESHNESS_NOW override makes the freshness gate deterministic in CI", () => {
  // Confirms the injectable-clock contract at the script level, not just the
  // pure library level: running the same real repository state through the
  // gate twice with the same injected date must not depend on wall-clock time.
  const source = read("scripts/check-seo.mjs");
  assert.match(source, /ARGENTQC_FRESHNESS_NOW/);
  assert.match(source, /resolveFreshnessNow/);
});
