import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

function loadQuestionnaireUrlModule() {
  const source = readFileSync(new URL("../src/lib/questionnaire-url.ts", import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });

  const module = { exports: {} };
  const context = {
    exports: module.exports,
    module,
    URLSearchParams,
  };

  vm.runInNewContext(outputText, context);
  return module.exports;
}

const {
  buildResultsUrl,
  parseQuestionnaireAnswers,
  serializeQuestionnaireAnswers,
} = loadQuestionnaireUrlModule();

function plain(value) {
  return JSON.parse(JSON.stringify(value));
}

const completeAnswers = {
  province: "QC",
  statut_logement: "locataire",
  situation_familiale: "famille",
  enfants: true,
  revenu: "30000-50000",
  vehicule_elec: "prevu",
  renovation: true,
  retraite: true,
  age: "46-65",
  etudiant: false,
};

test("parseQuestionnaireAnswers accepts a complete valid query", () => {
  assert.deepEqual(
    plain(parseQuestionnaireAnswers(Object.fromEntries(serializeQuestionnaireAnswers(completeAnswers).entries()))),
    completeAnswers
  );
});

test("parseQuestionnaireAnswers falls back on missing and invalid values", () => {
  assert.deepEqual(
    plain(parseQuestionnaireAnswers({
      province: "ON",
      statut_logement: "invalid",
      situation_familiale: "famille",
      enfants: "maybe",
      revenu: "999999+",
      vehicule_elec: "non",
      renovation: "false",
      retraite: "true",
      age: "999",
      etudiant: undefined,
    })),
    {
      province: "QC",
      statut_logement: "proprietaire",
      situation_familiale: "famille",
      enfants: false,
      revenu: "50000-75000",
      vehicule_elec: "non",
      renovation: false,
      retraite: true,
      age: "31-45",
      etudiant: false,
    }
  );
});

test("parseQuestionnaireAnswers uses the first value for repeated query params", () => {
  assert.equal(
    parseQuestionnaireAnswers({
      province: ["QC", "ON"],
      statut_logement: ["locataire", "proprietaire"],
    }).statut_logement,
    "locataire"
  );
});

test("serializeQuestionnaireAnswers preserves every questionnaire field", () => {
  const params = serializeQuestionnaireAnswers(completeAnswers);

  assert.deepEqual([...params.keys()], [
    "province",
    "statut_logement",
    "situation_familiale",
    "enfants",
    "revenu",
    "vehicule_elec",
    "renovation",
    "retraite",
    "age",
    "etudiant",
  ]);
});

test("serialize and parse round trip without losing values", () => {
  const params = serializeQuestionnaireAnswers(completeAnswers);
  const query = Object.fromEntries(params.entries());

  assert.deepEqual(plain(parseQuestionnaireAnswers(query)), completeAnswers);
});

test("buildResultsUrl appends serialized answers to the requested path", () => {
  const url = buildResultsUrl("/fr/resultats", completeAnswers);

  assert.match(url, /^\/fr\/resultats\?/);
  assert.match(url, /statut_logement=locataire/);
  assert.match(url, /renovation=true/);
});
