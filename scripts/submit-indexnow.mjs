const DEFAULT_SITE_URL = "https://argentqc.ca";
const DEFAULT_INDEXNOW_KEY = "a2e95286-725b-4921-b810-d7b4611e0c67";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS_PER_REQUEST = 10000;

const siteUrl = normalizeSiteUrl(process.env.SITE_URL || DEFAULT_SITE_URL);
const indexNowKey = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
const keyLocation = process.env.INDEXNOW_KEY_LOCATION || `${siteUrl.origin}/${indexNowKey}.txt`;
const sitemapUrl = process.env.SITEMAP_URL || `${siteUrl.origin}/sitemap.xml`;
const dryRun = process.argv.includes("--dry-run");

if (!/^[A-Za-z0-9-]{8,128}$/.test(indexNowKey)) {
  throw new Error("INDEXNOW_KEY must be 8 to 128 characters and contain only letters, numbers, or hyphens.");
}

const sitemapXml = await fetchText(sitemapUrl);
const urls = extractSitemapUrls(sitemapXml)
  .map((url) => new URL(url))
  .filter((url) => url.hostname === siteUrl.hostname)
  .map((url) => url.href);

const uniqueUrls = [...new Set(urls)];

if (uniqueUrls.length === 0) {
  throw new Error(`No URLs from ${sitemapUrl} matched host ${siteUrl.hostname}.`);
}

console.log(`IndexNow: ${dryRun ? "dry run for" : "submitting"} ${uniqueUrls.length} URL(s) from ${sitemapUrl}`);

for (let index = 0; index < uniqueUrls.length; index += MAX_URLS_PER_REQUEST) {
  const urlList = uniqueUrls.slice(index, index + MAX_URLS_PER_REQUEST);
  const payload = {
    host: siteUrl.hostname,
    key: indexNowKey,
    keyLocation,
    urlList,
  };

  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    continue;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`IndexNow submission failed with ${response.status}: ${body}`);
  }

  console.log(`IndexNow: submitted batch ${Math.floor(index / MAX_URLS_PER_REQUEST) + 1} (${urlList.length} URL(s))`);
}

function normalizeSiteUrl(value) {
  const url = new URL(value);
  url.pathname = "";
  url.search = "";
  url.hash = "";
  return url;
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { Accept: "application/xml,text/xml,text/plain,*/*" } });

  if (!response.ok) {
    throw new Error(`Unable to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => decodeXml(match[1].trim()));
}

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}
