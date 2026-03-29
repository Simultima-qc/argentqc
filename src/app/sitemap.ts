import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://argentqc.ca";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/questionnaire`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/aide-famille-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/allocation-enfant-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/credit-impot-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/subvention-renovation-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/vehicule-electrique-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/credit-solidarite-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/allocation-logement-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/renoclimat-2026-guide-complet`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
