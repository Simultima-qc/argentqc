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
    { url: `${base}/blog/frais-garde-enfants-quebec-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/rap-reer-premier-acheteur-quebec-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/securite-vieillesse-quebec-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/subventions-maison-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/aide-financiere-sport-enfant-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cout-vie-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/aide-lunettes-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/subvention-sport-enfant-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/credit-impot-frais-medicaux-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/subvention-thermopompe-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/subvention-isolation-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reno-climat-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/borne-recharge-quebec`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    // Section Déménagement
    { url: `${base}/demenagement`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/demenagement/cout`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/demenagement/checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/demenagement/montreal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Section Budget
    { url: `${base}/budget`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/budget/calculateur`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Section Assurances (Phase 2)
    { url: `${base}/assurances`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/assurances/auto`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/assurances/habitation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/assurances/comparateur`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Section Retraite (Phase 2)
    { url: `${base}/retraite`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/retraite/reer`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/retraite/celi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/retraite/rrq`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Section Internet (Phase 3)
    { url: `${base}/internet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/internet/comparateur`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Section Impôts (Phase 3)
    { url: `${base}/impots`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impots/dates`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impots/remboursement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impots/logiciels`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
