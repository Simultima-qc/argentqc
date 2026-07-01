import creditImpotMaintienDomicile2026 from "@/data/blog/entries/credit-impot-maintien-domicile-2026";
import allocationLogementQuebec2026 from "@/data/blog/entries/allocation-logement-quebec-2026";
import fractionnementRevenuRetraite2026 from "@/data/blog/entries/fractionnement-revenu-retraite-2026";
import bouclierFiscalQuebec2026 from "@/data/blog/entries/bouclier-fiscal-quebec-2026";
import reeeSubventionEpargneEtudes2026 from "@/data/blog/entries/reee-subvention-epargne-etudes-2026";
import rrqRenteRetraite2026 from "@/data/blog/entries/rrq-rente-retraite-2026";
import creditTpsTvhCanada2026 from "@/data/blog/entries/credit-tps-tvh-canada-2026";
import rqapCongeParentalQuebec2026 from "@/data/blog/entries/rqap-conge-parental-quebec-2026";
import assuranceEmploiGuideComplet2026 from "@/data/blog/entries/assurance-emploi-guide-complet-2026";
import celiappPremierAcheteurQuebec2026 from "@/data/blog/entries/celiapp-premier-acheteur-quebec-2026";
import allocationFamilleQuebecCalcul2026 from "@/data/blog/entries/allocation-famille-quebec-calcul-2026";
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
  creditImpotMaintienDomicile2026,
  allocationLogementQuebec2026,
  fractionnementRevenuRetraite2026,
  bouclierFiscalQuebec2026,
  reeeSubventionEpargneEtudes2026,
  rrqRenteRetraite2026,
  creditTpsTvhCanada2026,
  rqapCongeParentalQuebec2026,
  assuranceEmploiGuideComplet2026,
  celiappPremierAcheteurQuebec2026,
  allocationFamilleQuebecCalcul2026,
  supplementRevenuGaranti2026,
  creditSolidariteGuideComplet2026,
  aideSocialeQuebec2026,
  securiteVieillesseQuebec2026,
  rapReerPremierAcheteurQuebec2026,
  fraisGardeEnfantsQuebec2026,
  renoclimat2026GuideComplet,
];

export const blogArticlesBySlug = new Map(blogArticles.map((article) => [article.slug, article]));

