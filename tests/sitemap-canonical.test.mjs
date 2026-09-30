import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { getArticleSitemapUrl } from "../src/lib/sitemap-canonical.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entriesDir = path.join(repoRoot, "src", "data", "blog", "entries");
const siteUrl = "https://argentqc.ca";

function extractArticleIdentity(source, fileName) {
  const slugMatch =
    source.match(/const slug = ["']([^"']+)["']/) ??
    source.match(/slug:\s*["']([^"']+)["']/);
  const canonicalMatch = source.match(/canonical:\s*["'`]([^"'`]+)["'`]/);

  assert.ok(slugMatch, `${fileName} must declare a slug`);

  return {
    slug: slugMatch[1],
    canonical: canonicalMatch?.[1]?.replaceAll("${slug}", slugMatch[1]) ?? null,
  };
}

test("non-canonical /blog variants are excluded while canonical blog articles remain", () => {
  const affected = [];

  for (const fileName of fs.readdirSync(entriesDir).filter((name) => name.endsWith(".tsx"))) {
    const source = fs.readFileSync(path.join(entriesDir, fileName), "utf8");
    const { slug, canonical } = extractArticleIdentity(source, fileName);
    const blogUrl = new URL(`/blog/${slug}`, siteUrl).toString();
    const resolved = getArticleSitemapUrl({ slug, canonical, siteUrl });

    if (canonical && new URL(canonical, siteUrl).toString() !== blogUrl) {
      affected.push({ slug, canonical: new URL(canonical, siteUrl).toString() });
      assert.equal(resolved, null, `${slug} must not publish its non-canonical /blog URL`);
    } else {
      assert.equal(resolved, blogUrl, `${slug} must remain in the sitemap`);
    }
  }

  assert.ok(
    affected.some(
      ({ slug, canonical }) =>
        slug === "supplement-revenu-garanti-2026" &&
        canonical === "https://argentqc.ca/supplement-revenu-garanti-2026",
    ),
    "SRG must be detected as a non-canonical /blog variant",
  );

  assert.ok(
    affected.some(
      ({ slug, canonical }) =>
        slug === "aide-sociale-quebec-2026" &&
        canonical === "https://argentqc.ca/aide-sociale-quebec",
    ),
    "Aide sociale must be detected as a non-canonical /blog variant",
  );
});

test("relative and descriptor canonicals are normalized against the site URL", () => {
  assert.equal(
    getArticleSitemapUrl({
      slug: "example",
      canonical: "/blog/example",
      siteUrl,
    }),
    "https://argentqc.ca/blog/example",
  );

  assert.equal(
    getArticleSitemapUrl({
      slug: "example",
      canonical: { url: "/different" },
      siteUrl,
    }),
    null,
  );
});
