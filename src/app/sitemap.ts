import type { MetadataRoute } from "next";
import articles from "@/data/articles";
import { blogIndexDefinition, seoPageDefinitions, siteUrl } from "@/data/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = [...seoPageDefinitions, blogIndexDefinition].map((page) => ({
    url: page.path === "/" ? siteUrl : `${siteUrl}${page.path}`,
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

  return [...staticEntries, ...articleEntries];
}
