import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

import {
  findUnregisteredIndexableRoutes,
  isDynamicRoutePath,
  isNoindexPage,
  isPermanentRedirectPage,
} from "../scripts/lib/route-registry.mjs";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "src", "app");
const seoPagesFile = path.join(rootDir, "src", "data", "seo-pages.ts");
const read = (filePath) => fs.readFileSync(filePath, "utf8");
const relative = (filePath) => path.relative(rootDir, filePath).replace(/\\/g, "/");

// ── Unit rules (fixtures, no filesystem) ────────────────────────────────

test("isDynamicRoutePath flags bracketed App Router segments", () => {
  assert.equal(isDynamicRoutePath("/blog/[slug]"), true);
  assert.equal(isDynamicRoutePath("/[locale]/[section]"), true);
  assert.equal(isDynamicRoutePath("/retraite/reer-vs-celi"), false);
});

test("isPermanentRedirectPage detects a legacy redirect stub", () => {
  const redirectSource = `
    export default function LegacyPage() {
      permanentRedirect("/retraite/reer-vs-celi");
    }
  `;
  assert.equal(isPermanentRedirectPage(redirectSource), true);
  assert.equal(isPermanentRedirectPage("export default function Page() { return null; }"), false);
});

test("isNoindexPage detects an explicit robots noindex export", () => {
  const noindexSource = `
    export const metadata = {
      title: "Résultats",
      robots: { index: false, follow: false },
    };
  `;
  assert.equal(isNoindexPage(noindexSource), true);
  assert.equal(isNoindexPage('export const metadata = { title: "Page" };'), false);
});

// ── findUnregisteredIndexableRoutes (fixture pages) ─────────────────────

test("a fixture static indexable route absent from the registry triggers the guard", () => {
  const pages = [
    { routePath: "/nouvelle-page-fictive", source: 'export const metadata = { title: "x" };' },
  ];

  const orphans = findUnregisteredIndexableRoutes({ pages, registeredPaths: [] });
  assert.deepEqual(orphans, ["/nouvelle-page-fictive"]);
});

test("a registered route never triggers the guard", () => {
  const pages = [
    { routePath: "/retraite/reer-vs-celi", source: 'export const metadata = { title: "x" };' },
  ];

  const orphans = findUnregisteredIndexableRoutes({ pages, registeredPaths: ["/retraite/reer-vs-celi"] });
  assert.deepEqual(orphans, []);
});

test("legitimate exceptions produce no false positive: dynamic, redirect, noindex, explicit allowlist", () => {
  const pages = [
    { routePath: "/blog/[slug]", source: 'export const metadata = { title: "x" };' },
    { routePath: "/strategies/reer-vs-celi", source: 'permanentRedirect("/retraite/reer-vs-celi");' },
    { routePath: "/resultats", source: 'export const metadata = { robots: { index: false, follow: false } };' },
    { routePath: "/politique-confidentialite", source: 'export const metadata = { title: "x" };' },
  ];

  const orphans = findUnregisteredIndexableRoutes({
    pages,
    registeredPaths: [],
    legitimateExceptions: ["/politique-confidentialite"],
  });
  assert.deepEqual(orphans, []);
});

test("a fictive orphan is reported alongside legitimate exceptions in the same batch (no exception swallows an unrelated orphan)", () => {
  const pages = [
    { routePath: "/blog/[slug]", source: 'export const metadata = { title: "x" };' },
    { routePath: "/strategies/reer-vs-celi", source: 'permanentRedirect("/retraite/reer-vs-celi");' },
    { routePath: "/orpheline-fictive", source: 'export const metadata = { title: "x" };' },
  ];

  const orphans = findUnregisteredIndexableRoutes({ pages, registeredPaths: [], legitimateExceptions: [] });
  assert.deepEqual(orphans, ["/orpheline-fictive"]);
});

// ── Integration facts (real repo tree) ──────────────────────────────────

function walkPageFiles(currentDir, files) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const entryPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith("_")) continue;
      walkPageFiles(entryPath, files);
      continue;
    }

    if (entry.name === "page.tsx") files.push(entryPath);
  }
}

function routePathForPageFile(filePath) {
  const relativeDir = path.relative(appDir, path.dirname(filePath)).replace(/\\/g, "/");
  return relativeDir === "" ? "/" : `/${relativeDir}`;
}

test("the real src/app tree has zero unregistered indexable routes (issue #39 inverse SEO registry gate)", () => {
  const pageFiles = [];
  walkPageFiles(appDir, pageFiles);

  const seoPagesSource = read(seoPagesFile);
  const seoRoutes = [...seoPagesSource.matchAll(/path:\s*"([^"]+)"/g)].map((match) => match[1]);
  assert.ok(seoRoutes.length > 0, "expected at least one registered SEO path");

  const pages = pageFiles.map((filePath) => ({
    routePath: routePathForPageFile(filePath),
    source: read(filePath),
  }));

  const orphans = findUnregisteredIndexableRoutes({
    pages,
    registeredPaths: [...seoRoutes, "/blog"],
    legitimateExceptions: ["/politique-confidentialite"],
  });

  assert.deepEqual(orphans, []);
});

test("/strategies/reer-vs-celi is no longer an orphan: it permanently redirects to the canonical page", () => {
  const legacyFile = path.join(appDir, "strategies", "reer-vs-celi", "page.tsx");
  const source = read(legacyFile);
  assert.equal(isPermanentRedirectPage(source), true, `${relative(legacyFile)} should call permanentRedirect(...)`);
  assert.match(source, /permanentRedirect\("\/retraite\/reer-vs-celi"\)/);
});

test("the canonical REER vs CELI destination stays a real, registered, self-canonical page", () => {
  const canonicalFile = path.join(appDir, "retraite", "reer-vs-celi", "page.tsx");
  const source = read(canonicalFile);

  assert.equal(isPermanentRedirectPage(source), false, "the canonical page must not itself redirect");
  assert.match(source, /alternates:\s*{\s*canonical:\s*"https:\/\/argentqc\.ca\/retraite\/reer-vs-celi"/);

  const seoPagesSource = read(seoPagesFile);
  assert.match(seoPagesSource, /path:\s*"\/retraite\/reer-vs-celi"/);
});

test("no remaining internal link points at the retired /strategies/reer-vs-celi route", () => {
  const srcDir = path.join(rootDir, "src");
  const offenders = [];

  function walkTsx(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const entryPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walkTsx(entryPath);
        continue;
      }
      if (!entry.name.endsWith(".tsx") && !entry.name.endsWith(".ts")) continue;
      if (entryPath === path.join(appDir, "strategies", "reer-vs-celi", "page.tsx")) continue;

      const source = read(entryPath);
      if (source.includes("/strategies/reer-vs-celi")) offenders.push(relative(entryPath));
    }
  }

  walkTsx(srcDir);
  assert.deepEqual(offenders, []);
});
