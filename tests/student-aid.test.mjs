import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function loadOrientationModule() {
  const filePath = join(rootDir, "src", "lib", "student-aid-orientation.ts");
  const source = readFileSync(filePath, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: filePath,
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(outputText, { exports: compiledModule.exports, module: compiledModule }, { filename: filePath });
  return compiledModule.exports;
}

const { buildStudentAidOrientation } = loadOrientationModule();

test("student aid orientation routes without calculating entitlement", () => {
  const fullTime = buildStudentAidOrientation({
    studyStatus: "temps-plein",
    meetsQuebecResidencyCriterion: true,
    hasRrspFunds: false,
    perspectiveAnswer: "unknown",
  });
  assert.deepEqual(JSON.parse(JSON.stringify(fullTime)), {
    afeRoute: "full-time",
    residency: "declared-criterion",
    llp: "not-selected",
    perspective: "verify",
  });

  const partTime = buildStudentAidOrientation({
    studyStatus: "temps-partiel",
    meetsQuebecResidencyCriterion: false,
    hasRrspFunds: true,
    perspectiveAnswer: "yes",
  });
  assert.equal(partTime.afeRoute, "part-time");
  assert.equal(partTime.residency, "verify");
  assert.equal(partTime.llp, "verify");
  assert.equal(partTime.perspective, "verify-continuity");
  assert.equal("amount" in partTime, false);
  assert.equal("eligibility" in partTime, false);
});

test("student aid surfaces do not reintroduce audited fabricated values", () => {
  const files = [
    "src/components/PretsBoursesClient.tsx",
    "src/components/LocalizedPretsBoursesPage.tsx",
    "src/data/finance-2026/prets-bourses-2026.ts",
    "src/i18n/prets-bourses.ts",
    "src/data/blog/entries/aide-financiere-etudes-quebec-2026.tsx",
    "src/data/programmes.json",
  ];
  const content = files.map((file) => readFileSync(join(rootDir, file), "utf8")).join("\n");

  for (const forbidden of [
    /17[\s\u00a0]?000\s*\$/,
    /17[\s\u00a0]?500\s*\$/,
    /10 ans \(17 ans/i,
    /10 years \(17 years/i,
    /revenus sous le seuil de la Bourse Perspective/i,
    /income below the Bourse Perspective threshold/i,
    /emploi dans le domaine/i,
    /working in (?:their|the) field/i,
  ]) {
    assert.doesNotMatch(content, forbidden);
  }
});

test("audited questionnaire entries are preselection-only and not summed", () => {
  const programmes = JSON.parse(readFileSync(join(rootDir, "src", "data", "programmes.json"), "utf8"));
  const ids = [
    "aides-etudiants-afe-qc",
    "bourses-perspective-qc",
    "credit-frais-scolarite-qc",
    "reep-etudes-canada",
    "remise-dettes-afe-qc",
  ];

  for (const id of ids) {
    const programme = programmes.find((entry) => entry.id === id);
    assert.ok(programme, `${id} must exist`);
    assert.equal(programme.preselection_only, true, `${id} must remain a pre-filter lead`);
    assert.equal(programme.montant_sommable, false, `${id} must not inflate the questionnaire total`);
  }
});
