import type { MetadataRoute } from "next";
import articles from "@/data/articles";
import { blogIndexDefinition, seoPageDefinitions, siteUrl } from "@/data/seo-pages";
import { getAlternateLinks, getLocalizedUrl } from "@/i18n/routing";
import { localizedHubRouteKeys } from "@/i18n/hubs";
import { localizedSubguideRouteKeys } from "@/i18n/subguides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedEntries = (["home", "questionnaire"] as const).map((routeKey) => ({
    url: getLocalizedUrl("fr", routeKey, siteUrl),
    lastModified: now,
    changeFrequency: routeKey === "home" ? ("weekly" as const) : ("monthly" as const),
    priority: routeKey === "home" ? 1 : 0.9,
    alternates: {
      languages: getAlternateLinks(routeKey, siteUrl),
    },
  }));

  const localizedHubEntries = localizedHubRouteKeys.map((routeKey) => ({
    url: getLocalizedUrl("fr", routeKey, siteUrl),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    alternates: {
      languages: getAlternateLinks(routeKey, siteUrl),
    },
  }));

  const localizedSubguideEntries = localizedSubguideRouteKeys.map((routeKey) => ({
    url: getLocalizedUrl("fr", routeKey, siteUrl),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: getAlternateLinks(routeKey, siteUrl),
    },
  }));

  const staticEntries = [...seoPageDefinitions.filter((page) => !["/", "/questionnaire"].includes(page.path)), blogIndexDefinition].map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const articleEntries = articles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legalEntries = ["/politique-confidentialite", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...localizedEntries, ...localizedHubEntries, ...localizedSubguideEntries, ...staticEntries, ...articleEntries, ...legalEntries];
}
