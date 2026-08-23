import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

function loadJsonLdModule() {
  const source = readFileSync(new URL("../src/utils/jsonLd.ts", import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });

  const compiledModule = { exports: {} };
  vm.runInNewContext(outputText, {
    exports: compiledModule.exports,
    module: compiledModule,
  });
  return compiledModule.exports;
}

const { serializeJsonLd } = loadJsonLdModule();

test("serializeJsonLd neutralise une fermeture de balise script", () => {
  const serialized = serializeJsonLd({ text: "</script><script>alert('xss')</script>" });

  assert.equal(serialized.includes("<"), false);
  assert.match(serialized, /\\u003c\/script>/);
  assert.deepEqual(JSON.parse(serialized), {
    text: "</script><script>alert('xss')</script>",
  });
});

test("serializeJsonLd conserve les caractères Unicode et les valeurs structurées", () => {
  const document = {
    "@type": "FAQPage",
    mainEntity: [{ name: "Crédit d’impôt — Québec", acceptedAnswer: null }],
  };

  assert.deepEqual(JSON.parse(serializeJsonLd(document)), document);
});
