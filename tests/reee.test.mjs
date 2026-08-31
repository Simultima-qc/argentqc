import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(join(rootDir, file), "utf8");
const article = read("src/data/blog/entries/reee-subvention-epargne-etudes-2026.tsx");

test("REEE article keeps the audited 2026 grant thresholds and conditions", () => {
  for (const expected of [
    "58 523 $ ou moins",
    "117 045 $",
    "54 345 $",
    "54 346 $ à 108 680 $",
    "5 000 $ dans une année",
    "1 000 $ de SCEE de base",
    "À 16 ou 17 ans",
    "quatre années antérieures",
    "Première année admissible",
    "moins de 21 ans",
  ]) {
    assert.match(article, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const staleOrMisleading of [
    /55 867/,
    /111 733/,
    /Tous les Canadiens/,
    /s['’]ajoute automatiquement/i,
    /si admissible lors de la naissance/i,
    /prestation maximale ou réduite de l['’]Allocation canadienne/i,
  ]) {
    assert.doesNotMatch(article, staleOrMisleading);
  }
});

test("REEE article removes the unsupported scenario and provider recommendations", () => {
  for (const removed of [
    /208 \$\/mois/,
    /~84 000 \$/,
    /Combien vaut un REEE sur 18 ans/i,
    /Universitas/i,
    /Heritage/i,
    /Recommandé pour la majorité/i,
    /Peu recommandé/i,
  ]) {
    assert.doesNotMatch(article, removed);
  }
});

test("REEE withdrawals and questionnaire CTA stay bounded", () => {
  for (const expected of [
    /paiements d&apos;aide aux études \(PAE\)/i,
    /8 000 \$ pendant les 13 premières semaines/i,
    /4 000 \$ par période de 13 semaines/i,
    /12 % pour un résident du Québec/i,
    /Il ne calcule pas[^.]*SCEE[^.]*IQEE[^.]*BEC/i,
    /href="\/fr\/questionnaire"/,
  ]) {
    assert.match(article, expected);
  }

  assert.doesNotMatch(article, /portrait complet/i);
});

test("REEE ledger is enforced and records current source-backed claims", () => {
  const ledger = read("docs/claims/reee-subvention-epargne-etudes-2026.md");
  const seoCheck = read("scripts/check-seo.mjs");

  assert.match(seoCheck, /"reee-subvention-epargne-etudes-2026"/);
  assert.match(ledger, /claim \| source officielle \| date de vérification \| statut \| prochaine vérification \| action/);
  assert.match(ledger, /2026-08-31/);
  assert.match(ledger, /année civile 2026/);
  assert.match(ledger, /année de prestation 2026-2027/);
  assert.match(ledger, /année d'imposition 2026/);
  assert.match(ledger, /8 000 \$/);
  assert.match(ledger, /12 % pour un résident du Québec/);
  assert.doesNotMatch(ledger, /non vérifiable|approximation/i);
});

test("REEE canonical and official source links remain present", () => {
  assert.match(article, /canonical: "https:\/\/argentqc\.ca\/blog\/reee-subvention-epargne-etudes-2026"/);
  assert.match(article, /canada\.ca\/fr\/services\/prestations\/education\/epargne-etudes\/estimation-montants\.html/);
  assert.match(article, /revenuquebec\.ca\/fr\/citoyens\/credits-dimpot\/incitatif-quebecois-a-lepargne-etudes\/determination-du-montant/);
});
