import assert from "node:assert/strict";
import fs from "node:fs";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function loadSchemaModule() {
  const filePath = join(rootDir, "src", "data", "finance-2026", "schema.ts");
  const { outputText } = ts.transpileModule(readFileSync(filePath, "utf8"), {
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: filePath,
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(outputText, { exports: compiledModule.exports, module: compiledModule, Math, Number, Date }, { filename: filePath });
  return compiledModule.exports;
}

const { defineVersionedDataset } = loadSchemaModule();

function baseMeta(overrides = {}) {
  return {
    year: 2026,
    lastUpdated: "2026-08-31",
    status: "official",
    sourceNote: "test",
    reviewCadence: "quarterly",
    nextReviewAt: "2026-11-30",
    criticality: "critical",
    ...overrides,
  };
}

test("defineVersionedDataset accepts a well-formed meta object (real RRQ-shaped example)", () => {
  const result = defineVersionedDataset("test-dataset", baseMeta(), { value: 1 });
  assert.equal(result.dataset, "test-dataset");
  assert.equal(result.values.value, 1);
});

test("defineVersionedDataset throws on malformed lastUpdated", () => {
  assert.throws(() => defineVersionedDataset("x", baseMeta({ lastUpdated: "31-08-2026" }), {}), /lastUpdated/);
});

// Independent review of PR #29 (P1): Date.parse silently rolls "2026-02-31"
// over to 2026-03-03 instead of failing, so a naive regex + Date.parse
// check would let this through despite being calendar-impossible.
test("defineVersionedDataset throws on a calendar-impossible lastUpdated (e.g. February 31st)", () => {
  assert.throws(() => defineVersionedDataset("x", baseMeta({ lastUpdated: "2026-02-31" }), {}), /lastUpdated/);
});

test("defineVersionedDataset throws on a calendar-impossible nextReviewAt (e.g. April 31st)", () => {
  assert.throws(() => defineVersionedDataset("x", baseMeta({ nextReviewAt: "2026-04-31" }), {}), /nextReviewAt/);
});

test("defineVersionedDataset throws on malformed nextReviewAt", () => {
  assert.throws(() => defineVersionedDataset("x", baseMeta({ nextReviewAt: "soon" }), {}), /nextReviewAt/);
});

test("defineVersionedDataset throws when nextReviewAt is not after lastUpdated", () => {
  assert.throws(() => defineVersionedDataset("x", baseMeta({ nextReviewAt: "2026-08-31" }), {}), /strictly after/);
  assert.throws(() => defineVersionedDataset("x", baseMeta({ nextReviewAt: "2026-08-01" }), {}), /strictly after/);
});

test("defineVersionedDataset throws when the review interval is inconsistent with reviewCadence", () => {
  assert.throws(
    () => defineVersionedDataset("x", baseMeta({ reviewCadence: "monthly", nextReviewAt: "2027-01-15" }), {}),
    /inconsistent with reviewCadence/
  );
});

test("defineVersionedDataset accepts a manual reviewCadence with any forward-looking nextReviewAt", () => {
  const result = defineVersionedDataset("x", baseMeta({ reviewCadence: "manual", nextReviewAt: "2026-09-05" }), {});
  assert.equal(result.dataset, "x");
});

test("defineVersionedDataset throws on an invalid criticality value", () => {
  assert.throws(() => defineVersionedDataset("x", baseMeta({ criticality: "urgent" }), {}), /criticality/);
});

test("defineVersionedDataset throws on a malformed staleException", () => {
  assert.throws(
    () => defineVersionedDataset("x", baseMeta({ staleException: { until: "not-a-date", reason: "ok" } }), {}),
    /staleException.until/
  );
  assert.throws(
    () => defineVersionedDataset("x", baseMeta({ staleException: { until: "2027-01-01", reason: "" } }), {}),
    /staleException.reason/
  );
});

test("defineVersionedDataset accepts a well-formed staleException", () => {
  const result = defineVersionedDataset(
    "x",
    baseMeta({ staleException: { until: "2027-01-01", reason: "Awaiting official publication." } }),
    {}
  );
  assert.equal(result.meta.staleException.reason, "Awaiting official publication.");
});

test("every finance-2026 dataset module in the repository passes defineVersionedDataset's real validation", () => {
  const financeDir = join(rootDir, "src", "data", "finance-2026");
  const files = fs
    .readdirSync(financeDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ts") && entry.name !== "schema.ts" && entry.name !== "index.ts");

  for (const file of files) {
    const filePath = join(financeDir, file.name);
    const { outputText } = ts.transpileModule(fs.readFileSync(filePath, "utf8"), {
      compilerOptions: { esModuleInterop: true, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
      fileName: filePath,
    });
    const compiledModule = { exports: {} };
    assert.doesNotThrow(() => {
      vm.runInNewContext(
        outputText,
        {
          exports: compiledModule.exports,
          module: compiledModule,
          require: (request) => {
            if (request === "@/data/finance-2026/schema") return { defineVersionedDataset, assertUniqueIds: () => {} };
            if (request === "@/data/programmes.json") return JSON.parse(fs.readFileSync(join(rootDir, "src", "data", "programmes.json"), "utf8"));
            throw new Error(`Unexpected import in ${file.name}: ${request}`);
          },
          Math,
          Number,
          Date,
        },
        { filename: filePath }
      );
    }, `${file.name} should construct its dataset(s) without throwing`);
  }
});
