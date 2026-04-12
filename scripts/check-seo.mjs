import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const appDir = path.join(rootDir, "src", "app");
const articleEntriesDir = path.join(rootDir, "src", "data", "blog", "entries");
const seoPagesFile = path.join(rootDir, "src", "data", "seo-pages.ts");
const dynamicBlogRouteFile = path.join(appDir, "blog", "[slug]", "page.tsx");

function fail(message, details = []) {
  console.error(`SEO check failed: ${message}`);
  for (const detail of details) {
    console.error(`- ${detail}`);
  }
  process.exit(1);
}

function extractMatches(filePath, regex, label) {
  const source = fs.readFileSync(filePath, "utf8");
  const matches = [...source.matchAll(regex)].flatMap((match) => match.slice(1).filter(Boolean));

  if (matches.length === 0) {
    fail(`unable to read ${label}`, [`Expected at least one match in ${path.relative(rootDir, filePath)}`]);
  }

  return matches;
}

function walkPages(currentDir, pageFiles) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const entryPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith("_") || entry.name.startsWith("[")) {
        continue;
      }

      walkPages(entryPath, pageFiles);
      continue;
    }

    if (entry.name === "page.tsx") {
      pageFiles.push(entryPath);
    }
  }
}

const articleEntryFiles = fs.readdirSync(articleEntriesDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".tsx"))
  .map((entry) => entry.name)
  .sort();

const articleSlugs = articleEntryFiles.map((fileName) => fileName.replace(/\.tsx$/, ""));
const seoPaths = extractMatches(seoPagesFile, /path:\s*"([^"]+)"/g, "SEO page paths");

if (!fs.existsSync(dynamicBlogRouteFile)) {
  fail("dynamic blog route is missing", ["Create src/app/blog/[slug]/page.tsx"]);
}

const duplicateArticleSlugs = articleSlugs.filter((slug, index) => articleSlugs.indexOf(slug) !== index);
if (duplicateArticleSlugs.length > 0) {
  fail("duplicate article slugs detected", duplicateArticleSlugs);
}

for (const fileName of articleEntryFiles) {
  const filePath = path.join(articleEntriesDir, fileName);
  const declaredSlugs = extractMatches(filePath, /const slug = "([^"]+)"|slug:\s*"([^"]+)"/g, `blog slug in ${fileName}`);
  const expectedSlug = fileName.replace(/\.tsx$/, "");

  if (!declaredSlugs.includes(expectedSlug)) {
    fail("blog entry slug does not match its filename", [`${fileName} should declare slug ${expectedSlug}`]);
  }
}

const seoRoutes = seoPaths.filter((route) => route !== "/" && route !== "/blog").sort();
const missingStaticRouteFiles = seoRoutes.filter((routePath) => {
  const routeFile = path.join(appDir, ...routePath.slice(1).split("/"), "page.tsx");
  return !fs.existsSync(routeFile);
});

if (missingStaticRouteFiles.length > 0) {
  fail("SEO registry references missing route files", missingStaticRouteFiles);
}

const pageFiles = [];
walkPages(appDir, pageFiles);

const ignoredRoutes = new Set(["/blog", "/resultats"]);
const missingMetadata = pageFiles
  .map((filePath) => {
    const relativeDir = path.relative(appDir, path.dirname(filePath)).replace(/\\/g, "/");
    const routePath = relativeDir === "" ? "/" : `/${relativeDir}`;
    const source = fs.readFileSync(filePath, "utf8");
    const hasMetadata = source.includes("export const metadata") || source.includes("export async function generateMetadata");
    return { routePath, hasMetadata };
  })
  .filter(({ routePath, hasMetadata }) => !ignoredRoutes.has(routePath) && !hasMetadata)
  .map(({ routePath }) => routePath);

if (missingMetadata.length > 0) {
  fail("public pages missing exported metadata", missingMetadata);
}

console.log(`SEO check passed for ${seoRoutes.length} static routes and ${articleSlugs.length} blog articles.`);

