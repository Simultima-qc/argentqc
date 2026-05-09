import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const appDir = path.join(rootDir, "src", "app");
const srcDir = path.join(rootDir, "src");
const scriptsDir = path.join(rootDir, "scripts");
const articleEntriesDir = path.join(rootDir, "src", "data", "blog", "entries");
const seoPagesFile = path.join(rootDir, "src", "data", "seo-pages.ts");
const routingFile = path.join(rootDir, "src", "i18n", "routing.ts");
const i18nDir = path.join(rootDir, "src", "i18n");
const contentFile = path.join(rootDir, "src", "i18n", "content.ts");
const hubsFile = path.join(rootDir, "src", "i18n", "hubs.ts");
const subguidesFile = path.join(rootDir, "src", "i18n", "subguides.ts");
const questionnaireFile = path.join(rootDir, "src", "components", "Questionnaire.tsx");
const localizedQuestionnaireFile = path.join(rootDir, "src", "components", "LocalizedQuestionnaire.tsx");
const resultatsPageFile = path.join(appDir, "resultats", "page.tsx");
const localizedResultatsPageFile = path.join(appDir, "[locale]", "resultats", "page.tsx");
const matchingFile = path.join(rootDir, "src", "lib", "matching.ts");
const questionnaireUrlFile = path.join(rootDir, "src", "lib", "questionnaire-url.ts");
const typesFile = path.join(rootDir, "src", "types", "index.ts");
const dynamicBlogRouteFile = path.join(appDir, "blog", "[slug]", "page.tsx");

const errors = [];

function report(message, details = []) {
  errors.push({ message, details });
}

function finish() {
  if (errors.length === 0) {
    return;
  }

  console.error(`SEO check failed with ${errors.length} issue${errors.length > 1 ? "s" : ""}:`);
  for (const { message, details } of errors) {
    console.error(`\n${message}`);
    for (const detail of details) {
      console.error(`- ${detail}`);
    }
  }
  process.exit(1);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function relative(filePath) {
  return path.relative(rootDir, filePath).replace(/\\/g, "/");
}

function unique(values) {
  return [...new Set(values)];
}

function sorted(values) {
  return [...values].sort((a, b) => a.localeCompare(b));
}

function diffSets(expected, actual, label) {
  const missing = sorted(expected.filter((value) => !actual.includes(value))).map((value) => `missing ${label}: ${value}`);
  const extra = sorted(actual.filter((value) => !expected.includes(value))).map((value) => `unexpected ${label}: ${value}`);
  return [...missing, ...extra];
}

function extractMatches(filePath, regex, label) {
  const source = read(filePath);
  const matches = [...source.matchAll(regex)].flatMap((match) => match.slice(1).filter(Boolean));

  if (matches.length === 0) {
    report(`Unable to read ${label}`, [`Expected at least one match in ${relative(filePath)}`]);
  }

  return matches;
}

function findMatching(source, openIndex, openChar = "{", closeChar = "}") {
  let depth = 0;
  let quote = null;
  let escaped = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let index = openIndex; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (inLineComment) {
      if (char === "\n") inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && next === "/") {
        inBlockComment = false;
        index += 1;
      }
      continue;
    }

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "/" && next === "/") {
      inLineComment = true;
      index += 1;
      continue;
    }

    if (char === "/" && next === "*") {
      inBlockComment = true;
      index += 1;
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === openChar) depth += 1;
    if (char === closeChar) depth -= 1;
    if (depth === 0) return index;
  }

  return -1;
}

function extractBlockAfter(source, marker, openChar = "{", closeChar = "}") {
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) return null;
  const openIndex = source.indexOf(openChar, markerIndex);
  if (openIndex === -1) return null;
  const closeIndex = findMatching(source, openIndex, openChar, closeChar);
  if (closeIndex === -1) return null;
  return source.slice(openIndex, closeIndex + 1);
}

function skipWhitespaceAndComments(source, index) {
  let current = index;
  while (current < source.length) {
    if (/\s/.test(source[current])) {
      current += 1;
      continue;
    }

    if (source[current] === "/" && source[current + 1] === "/") {
      current = source.indexOf("\n", current + 2);
      if (current === -1) return source.length;
      continue;
    }

    if (source[current] === "/" && source[current + 1] === "*") {
      const end = source.indexOf("*/", current + 2);
      current = end === -1 ? source.length : end + 2;
      continue;
    }

    break;
  }
  return current;
}

function readObjectKey(source, index) {
  const char = source[index];
  if (char === "\"" || char === "'") {
    let current = index + 1;
    let escaped = false;
    let key = "";
    while (current < source.length) {
      const currentChar = source[current];
      if (escaped) {
        key += currentChar;
        escaped = false;
      } else if (currentChar === "\\") {
        escaped = true;
      } else if (currentChar === char) {
        return { key, nextIndex: current + 1 };
      } else {
        key += currentChar;
      }
      current += 1;
    }
    return null;
  }

  const match = source.slice(index).match(/^([A-Za-z_$][\w$-]*)/);
  if (!match) return null;
  return { key: match[1], nextIndex: index + match[1].length };
}

function skipValue(source, index) {
  let current = index;
  let depth = 0;
  let quote = null;
  let escaped = false;

  while (current < source.length) {
    const char = source[current];
    const next = source[current + 1];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      current += 1;
      continue;
    }

    if (char === "/" && next === "/") {
      const end = source.indexOf("\n", current + 2);
      current = end === -1 ? source.length : end + 1;
      continue;
    }

    if (char === "/" && next === "*") {
      const end = source.indexOf("*/", current + 2);
      current = end === -1 ? source.length : end + 2;
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      current += 1;
      continue;
    }

    if (char === "{" || char === "[" || char === "(") depth += 1;
    if (char === "}" || char === "]" || char === ")") {
      if (depth === 0) return current;
      depth -= 1;
    }

    if (depth === 0 && char === ",") return current + 1;
    current += 1;
  }

  return current;
}

function collectObjectKeyPaths(source, openIndex = 0, prefix = [], paths = new Set()) {
  let current = openIndex + 1;

  while (current < source.length) {
    current = skipWhitespaceAndComments(source, current);
    if (source[current] === "}") return current + 1;
    if (source[current] === ",") {
      current += 1;
      continue;
    }

    const keyResult = readObjectKey(source, current);
    if (!keyResult) {
      current += 1;
      continue;
    }

    current = skipWhitespaceAndComments(source, keyResult.nextIndex);
    if (source[current] !== ":") {
      current += 1;
      continue;
    }

    const nextPrefix = [...prefix, keyResult.key];
    paths.add(nextPrefix.join("."));
    current = skipWhitespaceAndComments(source, current + 1);

    if (source[current] === "{") {
      current = collectObjectKeyPaths(source, current, nextPrefix, paths);
    } else {
      current = skipValue(source, current);
    }
  }

  return current;
}

function objectKeyPathsFromConst(source, constName) {
  const block = extractBlockAfter(source, `const ${constName}`);
  if (!block) {
    report(`Unable to read ${constName} dictionary`, [`Expected a const named ${constName}`]);
    return [];
  }

  const paths = new Set();
  collectObjectKeyPaths(block, 0, [], paths);
  return sorted([...paths]);
}

function extractStringArray(source, constName) {
  const match = source.match(new RegExp(`export const ${constName} = \\[([\\s\\S]*?)\\] as const`));
  if (!match) {
    report(`Unable to read ${constName}`, [`Expected exported const array in ${constName}`]);
    return [];
  }

  return [...match[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]);
}

function extractConstNames(source) {
  return [...source.matchAll(/\bconst\s+([A-Za-z_$][\w$]*)\b/g)].map((match) => match[1]);
}

function walkPages(currentDir, pageFiles) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const entryPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith("_")) {
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

function walkTextFiles(currentDir, files) {
  const textExtensions = new Set([".js", ".mjs", ".ts", ".tsx", ".json", ".md"]);

  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const entryPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walkTextFiles(entryPath, files);
      continue;
    }

    if (entry.isFile() && textExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }
}

function lineNumberForIndex(source, index) {
  let line = 1;
  for (let current = 0; current < index; current += 1) {
    if (source[current] === "\n") line += 1;
  }
  return line;
}

function routePathForPageFile(filePath) {
  const relativeDir = path.relative(appDir, path.dirname(filePath)).replace(/\\/g, "/");
  return relativeDir === "" ? "/" : `/${relativeDir}`;
}

function routeFileForSeoPath(routePath) {
  if (routePath === "/") return path.join(appDir, "page.tsx");
  return path.join(appDir, ...routePath.slice(1).split("/"), "page.tsx");
}

function checkBlogAndSeoRoutes() {
  const articleEntryFiles = fs.readdirSync(articleEntriesDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".tsx"))
    .map((entry) => entry.name)
    .sort();

  const articleSlugs = articleEntryFiles.map((fileName) => fileName.replace(/\.tsx$/, ""));
  const seoPaths = extractMatches(seoPagesFile, /path:\s*"([^"]+)"/g, "SEO page paths");
  const duplicateSeoPaths = seoPaths.filter((route, index) => seoPaths.indexOf(route) !== index);
  const malformedSeoPaths = seoPaths.filter((route) => !route.startsWith("/") || (route.length > 1 && route.endsWith("/")));

  if (!fs.existsSync(dynamicBlogRouteFile)) {
    report("Dynamic blog route is missing", ["Create src/app/blog/[slug]/page.tsx"]);
  }

  if (duplicateSeoPaths.length > 0) {
    report("Duplicate SEO route paths detected", unique(duplicateSeoPaths));
  }

  if (malformedSeoPaths.length > 0) {
    report("SEO route paths must start with / and avoid trailing slashes", malformedSeoPaths);
  }

  const duplicateArticleSlugs = articleSlugs.filter((slug, index) => articleSlugs.indexOf(slug) !== index);
  if (duplicateArticleSlugs.length > 0) {
    report("Duplicate article slugs detected", duplicateArticleSlugs);
  }

  for (const fileName of articleEntryFiles) {
    const filePath = path.join(articleEntriesDir, fileName);
    const declaredSlugs = extractMatches(filePath, /const slug = "([^"]+)"|slug:\s*"([^"]+)"/g, `blog slug in ${fileName}`);
    const expectedSlug = fileName.replace(/\.tsx$/, "");

    if (!declaredSlugs.includes(expectedSlug)) {
      report("Blog entry slug does not match its filename", [`${fileName} should declare slug ${expectedSlug}`]);
    }
  }

  const seoRoutes = seoPaths.sort();
  const missingStaticRouteFiles = seoRoutes.filter((routePath) => {
    return !fs.existsSync(routeFileForSeoPath(routePath));
  });

  if (missingStaticRouteFiles.length > 0) {
    report("SEO registry references missing route files", missingStaticRouteFiles);
  }

  return { seoRoutes, articleSlugs };
}

function checkMetadataExports() {
  const pageFiles = [];
  walkPages(appDir, pageFiles);

  const metadataExceptions = new Map([
    ["/resultats", "Noindex questionnaire result page; metadata is still preferred when present."],
  ]);

  const missingMetadata = pageFiles
    .map((filePath) => {
      const routePath = routePathForPageFile(filePath);
      const source = read(filePath);
      const hasMetadata =
        source.includes("export const metadata") ||
        source.includes("export async function generateMetadata") ||
        source.includes("export function generateMetadata");
      return { routePath, hasMetadata };
    })
    .filter(({ routePath, hasMetadata }) => !metadataExceptions.has(routePath) && !hasMetadata)
    .map(({ routePath }) => routePath);

  if (missingMetadata.length > 0) {
    report("Public pages missing exported metadata", missingMetadata);
  }
}

function checkLocalizedRoutes() {
  const routingSource = read(routingFile);
  const hubSource = read(hubsFile);
  const subguideSource = read(subguidesFile);

  const routeKeyUnion = unique([...routingSource.matchAll(/\|\s*"([^"]+)"/g)].map((match) => match[1]));
  const routeSegmentsBlock = extractBlockAfter(routingSource, "const routeSegments");
  const routeSegmentMatches = routeSegmentsBlock
    ? [...routeSegmentsBlock.matchAll(/\b([A-Za-z]\w*):\s*{\s*fr:\s*"([^"]*)",\s*en:\s*"([^"]*)"\s*}/g)]
    : [];
  const routeSegments = routeSegmentMatches.map((match) => ({
    key: match[1],
    fr: match[2],
    en: match[3],
  }));
  const routeSegmentKeys = routeSegments.map((route) => route.key);

  const keyDiffs = diffSets(routeKeyUnion, routeSegmentKeys, "route key");
  if (keyDiffs.length > 0) {
    report("RouteKey union and routeSegments diverge", keyDiffs);
  }

  if (!routeSegmentsBlock) {
    report("Unable to read routeSegments", [`Expected const routeSegments in ${relative(routingFile)}`]);
  }

  for (const locale of ["fr", "en"]) {
    const duplicateSegments = routeSegments
      .map((route) => route[locale])
      .filter((segment, index, segments) => segment !== "" && segments.indexOf(segment) !== index);

    if (duplicateSegments.length > 0) {
      report(`Duplicate localized ${locale.toUpperCase()} route segments`, unique(duplicateSegments));
    }
  }

  const hubRouteKeys = extractStringArray(hubSource, "localizedHubRouteKeys");
  const subguideRouteKeys = extractStringArray(subguideSource, "localizedSubguideRouteKeys");
  const contentRouteKeys = new Set(["home", "questionnaire", "results", ...hubRouteKeys, ...subguideRouteKeys]);
  const missingContentRouteKeys = routeSegmentKeys.filter((key) => !contentRouteKeys.has(key));

  if (missingContentRouteKeys.length > 0) {
    report("Localized route keys are not covered by a page registry", missingContentRouteKeys);
  }

  const invalidHubRoutes = routeSegments
    .filter((route) => hubRouteKeys.includes(route.key))
    .flatMap((route) =>
      ["fr", "en"]
        .filter((locale) => route[locale].split("/").filter(Boolean).length !== 1)
        .map((locale) => `${route.key}.${locale} should be a one-segment hub route`)
    );

  const invalidSubguideRoutes = routeSegments
    .filter((route) => subguideRouteKeys.includes(route.key))
    .flatMap((route) =>
      ["fr", "en"]
        .filter((locale) => route[locale].split("/").filter(Boolean).length !== 2)
        .map((locale) => `${route.key}.${locale} should be a two-segment subguide route`)
    );

  if (invalidHubRoutes.length > 0 || invalidSubguideRoutes.length > 0) {
    report("Localized routes do not match their expected page shape", [...invalidHubRoutes, ...invalidSubguideRoutes]);
  }

  const missingLocalizedPageFiles = routeSegments
    .filter((route) => route.key !== "home")
    .filter((route) => {
      const depth = route.fr.split("/").filter(Boolean).length;
      const expectedFile = depth === 1
        ? path.join(appDir, "[locale]", "[section]", "page.tsx")
        : path.join(appDir, "[locale]", "[section]", "[page]", "page.tsx");
      return !fs.existsSync(expectedFile);
    })
    .map((route) => route.key);

  if (missingLocalizedPageFiles.length > 0) {
    report("Localized route keys do not have a matching App Router page shape", unique(missingLocalizedPageFiles));
  }
}

function checkDictionaryPair(filePath, frConstName, enConstName, label) {
  const source = read(filePath);
  const frPaths = objectKeyPathsFromConst(source, frConstName);
  const enPaths = objectKeyPathsFromConst(source, enConstName);
  const shapeDiffs = diffSets(frPaths, enPaths, "dictionary path");

  if (shapeDiffs.length > 0) {
    report(`FR/EN dictionaries diverge in ${label}`, shapeDiffs);
  }
}

function checkI18nDictionaryPairs() {
  const i18nFiles = fs.readdirSync(i18nDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ts"))
    .map((entry) => path.join(i18nDir, entry.name));

  for (const filePath of i18nFiles) {
    const source = read(filePath);
    const constNames = extractConstNames(source);

    if (constNames.includes("fr") || constNames.includes("en")) {
      if (!constNames.includes("fr") || !constNames.includes("en")) {
        report("Locale dictionary pair is incomplete", [`${relative(filePath)} should define both const fr and const en`]);
      } else {
        checkDictionaryPair(filePath, "fr", "en", `${relative(filePath)}:fr/en`);
      }
    }

    for (const frConstName of constNames.filter((name) => /^fr[A-Z]/.test(name))) {
      const enConstName = `en${frConstName.slice(2)}`;
      if (!constNames.includes(enConstName)) {
        report("Locale dictionary pair is incomplete", [`${relative(filePath)} should define ${enConstName} for ${frConstName}`]);
        continue;
      }

      checkDictionaryPair(filePath, frConstName, enConstName, `${relative(filePath)}:${frConstName}/${enConstName}`);
    }
  }
}

function checkDictionaryShapes() {
  const contentSource = read(contentFile);
  for (const locale of ["fr", "en"]) {
    const dictionaryBlock = extractBlockAfter(contentSource, `const ${locale}`);
    const questionnaireBlock = dictionaryBlock ? extractBlockAfter(dictionaryBlock, "questionnaire:") : null;
    const stepIds = questionnaireBlock ? unique([...questionnaireBlock.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1])) : [];
    const expectedStepIds = getQuestionnaireFields().filter((field) => field !== "province");
    const diffs = diffSets(expectedStepIds, stepIds, `${locale} questionnaire step id`);

    if (diffs.length > 0) {
      report(`${locale.toUpperCase()} questionnaire dictionary steps do not match ReponseQuestionnaire`, diffs);
    }
  }

  checkI18nDictionaryPairs();
}

function getQuestionnaireFields() {
  const typesSource = read(typesFile);
  const block = extractBlockAfter(typesSource, "export interface ReponseQuestionnaire");
  if (!block) {
    report("Unable to read ReponseQuestionnaire fields", [`Expected interface in ${relative(typesFile)}`]);
    return [];
  }

  return [...block.matchAll(/^\s{2}([A-Za-z_]\w*)[?:]?:/gm)].map((match) => match[1]);
}

function objectKeysFromConst(filePath, constName) {
  const source = read(filePath);
  const block = extractBlockAfter(source, `const ${constName}`);
  if (!block) {
    report(`Unable to read ${constName}`, [`Expected const in ${relative(filePath)}`]);
    return [];
  }

  return [...block.matchAll(/^\s{2}([A-Za-z_]\w*):/gm)].map((match) => match[1]);
}

function reponseKeysFromPage(filePath) {
  const source = read(filePath);
  if (source.includes("parseQuestionnaireAnswers(")) {
    return reponseKeysFromParser();
  }

  const marker = "const reponses: ReponseQuestionnaire";
  const block = extractBlockAfter(source, marker);
  if (!block) {
    report("Unable to read ReponseQuestionnaire construction", [`Expected ${marker} in ${relative(filePath)}`]);
    return [];
  }

  return [...block.matchAll(/^\s{4}([A-Za-z_]\w*):/gm)].map((match) => match[1]);
}

function reponseKeysFromParser() {
  const source = read(questionnaireUrlFile);
  const block = extractBlockAfter(source, "export function parseQuestionnaireAnswers");
  if (!block) {
    report("Unable to read parseQuestionnaireAnswers", [`Expected parser in ${relative(questionnaireUrlFile)}`]);
    return [];
  }

  return [...block.matchAll(/^\s{4}([A-Za-z_]\w*):/gm)].map((match) => match[1]);
}

function getProgrammeCriteriaFields() {
  const typesSource = read(typesFile);
  const criteriaBlock = extractBlockAfter(typesSource, "criteres:");
  if (!criteriaBlock) {
    report("Unable to read Programme criteria fields", [`Expected criteres object in ${relative(typesFile)}`]);
    return [];
  }

  return [...criteriaBlock.matchAll(/^\s{4}([A-Za-z_]\w*)\??:/gm)].map((match) => match[1]);
}

function getCriteriaQuestionnaireField(criteriaField) {
  const fieldMap = {
    proprietaire: "statut_logement",
    locataire: "statut_logement",
    provinces: "province",
    revenu_max: "revenu",
    revenu_min: "revenu",
    age_min: "age",
    age_max: "age",
  };

  return fieldMap[criteriaField] ?? criteriaField;
}

function getProgrammeDataCriteriaFields() {
  const financeDir = path.join(rootDir, "src", "data", "finance-2026");
  const source = fs.readdirSync(financeDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ts"))
    .map((entry) => read(path.join(financeDir, entry.name)))
    .join("\n");

  const fields = new Set();
  let current = 0;

  while (current < source.length) {
    const markerIndex = source.indexOf("criteres:", current);
    if (markerIndex === -1) break;

    const openIndex = source.indexOf("{", markerIndex);
    if (openIndex === -1) break;

    const closeIndex = findMatching(source, openIndex);
    if (closeIndex === -1) break;

    const block = source.slice(openIndex, closeIndex + 1);
    for (const match of block.matchAll(/^\s{4,}([A-Za-z_]\w*)\s*:/gm)) {
      fields.add(match[1]);
    }

    current = closeIndex + 1;
  }

  return sorted([...fields]);
}

function checkQuestionnairePropagation() {
  const fields = getQuestionnaireFields();
  const stepFields = fields.filter((field) => field !== "province");
  const questionnaireSource = read(questionnaireFile);
  const matchingSource = read(matchingFile);
  const programmeCriteriaFields = getProgrammeCriteriaFields();
  const programmeDataCriteriaFields = getProgrammeDataCriteriaFields();
  const questionnaireFieldsForCriteria = unique(programmeCriteriaFields.map(getCriteriaQuestionnaireField));
  const unknownCriteriaFields = questionnaireFieldsForCriteria.filter((field) => !fields.includes(field));
  const untypedProgrammeCriteria = programmeDataCriteriaFields.filter((field) => !programmeCriteriaFields.includes(field));

  if (unknownCriteriaFields.length > 0) {
    report(
      "Programme criteria are not represented in ReponseQuestionnaire",
      unknownCriteriaFields.map((field) => `${field} is needed by a programme criterion`)
    );
  }

  if (untypedProgrammeCriteria.length > 0) {
    report("Programme data uses criteria fields missing from Programme type", untypedProgrammeCriteria);
  }

  const defaultDiffs = [
    ...diffSets(fields, objectKeysFromConst(questionnaireFile, "DEFAUTS"), "Questionnaire default field"),
    ...diffSets(fields, objectKeysFromConst(localizedQuestionnaireFile, "DEFAULT_ANSWERS"), "LocalizedQuestionnaire default field"),
  ];

  if (defaultDiffs.length > 0) {
    report("Questionnaire defaults do not cover ReponseQuestionnaire", defaultDiffs);
  }

  const questionnaireStepIds = unique([...questionnaireSource.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]));
  const stepDiffs = diffSets(stepFields, questionnaireStepIds, "Questionnaire step id");
  if (stepDiffs.length > 0) {
    report("Questionnaire steps do not cover ReponseQuestionnaire fields", stepDiffs);
  }

  const resultDiffs = [
    ...diffSets(fields, reponseKeysFromPage(resultatsPageFile), "resultats field"),
    ...diffSets(fields, reponseKeysFromPage(localizedResultatsPageFile), "localized resultats field"),
  ];

  if (resultDiffs.length > 0) {
    report("Results pages do not rebuild all ReponseQuestionnaire fields", resultDiffs);
  }

  const matchingExpectations = questionnaireFieldsForCriteria.map((field) => [field, `reponses.${field}`]);
  const missingMatchingFields = matchingExpectations
    .filter(([field, token]) => fields.includes(field) && !matchingSource.includes(token))
    .map(([field, token]) => `${field} is not referenced through ${token}`);

  if (missingMatchingFields.length > 0) {
    report("Matching logic does not consume questionnaire fields used by programme criteria", missingMatchingFields);
  }

}

function checkEncoding() {
  const files = [];
  walkTextFiles(srcDir, files);
  walkTextFiles(scriptsDir, files);

  const latinCapitalAWithTilde = String.fromCharCode(0x00c3);
  const latinCapitalAWithCircumflex = String.fromCharCode(0x00c2);
  const latinSmallAWithCircumflex = String.fromCharCode(0x00e2);
  const replacementCharacter = String.fromCharCode(0xfffd);
  const emojiLeadMojibake = `${String.fromCharCode(0x00f0)}${String.fromCharCode(0x0178)}`;
  const variationSelectorMojibake = `${String.fromCharCode(0x00ef)}${String.fromCharCode(0xb8)}`;
  const mojibakePattern = new RegExp(
    [
      `${latinCapitalAWithTilde}.`,
      `${latinCapitalAWithCircumflex}[\\s·]`,
      `\\b${latinSmallAWithCircumflex}(?:€|€“|€”|†)`,
      `${emojiLeadMojibake}`,
      `${variationSelectorMojibake}`,
      `${replacementCharacter}`,
    ].join("|"),
    "g"
  );
  const suspicious = [];

  for (const filePath of files) {
    const source = read(filePath);
    const matches = [...source.matchAll(mojibakePattern)];
    if (matches.length === 0) continue;

    const lineStarts = [0];
    for (let index = 0; index < source.length; index += 1) {
      if (source[index] === "\n") lineStarts.push(index + 1);
    }

    const lineForIndex = (index) => {
      let low = 0;
      let high = lineStarts.length - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (lineStarts[mid] <= index) low = mid + 1;
        else high = mid - 1;
      }
      return high + 1;
    };

    const lines = unique(matches.slice(0, 5).map((match) => lineForIndex(match.index)));
    suspicious.push(`${relative(filePath)}:${lines.join(",")}`);
  }

  if (suspicious.length > 0) {
    report("Suspicious French accent encoding sequences detected", suspicious);
  }
}

function checkPublicFooterPrivacyLinks() {
  const files = [];
  walkTextFiles(srcDir, files);

  const footerIssues = [];

  for (const filePath of files.filter((file) => file.endsWith(".tsx"))) {
    if (relative(filePath) === "src/components/SiteFooter.tsx") continue;

    const source = read(filePath);
    const footerBlocks = [...source.matchAll(/<footer\b[\s\S]*?<\/footer>/g)];

    for (const footerBlock of footerBlocks) {
      if (!footerBlock[0].includes("/politique-confidentialite")) {
        footerIssues.push(`${relative(filePath)}:${lineNumberForIndex(source, footerBlock.index)}`);
      }
    }
  }

  if (footerIssues.length > 0) {
    report("Public footers must link to /politique-confidentialite", footerIssues);
  }
}

function checkInternalAnchorLinks() {
  const files = [];
  walkTextFiles(srcDir, files);

  const anchorIssues = [];
  const anchorHrefPattern = /<a\b[^>]*\bhref\s*=\s*(?:"([^"]+)"|'([^']+)'|{\s*["']([^"']+)["']\s*})/g;

  for (const filePath of files.filter((file) => file.endsWith(".tsx"))) {
    const source = read(filePath);

    for (const match of source.matchAll(anchorHrefPattern)) {
      const href = match[1] ?? match[2] ?? match[3];
      if (href.startsWith("/") && !href.startsWith("//")) {
        anchorIssues.push(`${relative(filePath)}:${lineNumberForIndex(source, match.index)} uses <a href="${href}">`);
      }
    }
  }

  if (anchorIssues.length > 0) {
    report("Internal route links must use next/link instead of <a>", anchorIssues);
  }
}

const { seoRoutes, articleSlugs } = checkBlogAndSeoRoutes();
checkMetadataExports();
checkLocalizedRoutes();
checkDictionaryShapes();
checkQuestionnairePropagation();
checkEncoding();
checkPublicFooterPrivacyLinks();
checkInternalAnchorLinks();
finish();

console.log(`SEO check passed for ${seoRoutes.length} static routes, ${articleSlugs.length} blog articles, localized routes, dictionaries, questionnaire propagation, text encoding, footer links, and internal link usage.`);
