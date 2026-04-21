import supplementRevenuGaranti2026 from "@/data/blog/entries/supplement-revenu-garanti-2026";
import creditSolidariteGuideComplet2026 from "@/data/blog/entries/credit-solidarite-guide-complet-2026";
import aideSocialeQuebec2026 from "@/data/blog/entries/aide-sociale-quebec-2026";
import securiteVieillesseQuebec2026 from "@/data/blog/entries/securite-vieillesse-quebec-2026";
import rapReerPremierAcheteurQuebec2026 from "@/data/blog/entries/rap-reer-premier-acheteur-quebec-2026";
import fraisGardeEnfantsQuebec2026 from "@/data/blog/entries/frais-garde-enfants-quebec-2026";
import renoclimat2026GuideComplet from "@/data/blog/entries/renoclimat-2026-guide-complet";
import type { BlogArticle } from "@/data/blog/types";

export type { Article, BlogArticle } from "@/data/blog/types";

export const blogArticles: BlogArticle[] = [
  supplementRevenuGaranti2026,
  creditSolidariteGuideComplet2026,
  aideSocialeQuebec2026,
  securiteVieillesseQuebec2026,
  rapReerPremierAcheteurQuebec2026,
  fraisGardeEnfantsQuebec2026,
  renoclimat2026GuideComplet,
];

export const blogArticlesBySlug = new Map(blogArticles.map((article) => [article.slug, article]));

