import type { MetadataRoute } from "next";

export const siteUrl = "https://argentqc.ca";

export interface SeoPageDefinition {
  path: string;
  title: string;
  description: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
  includeInHomeHub?: boolean;
}

export const blogIndexDefinition: SeoPageDefinition = {
  path: "/blog",
  title: "Blogue",
  description: "Guides pratiques sur les aides gouvernementales au Quebec.",
  changeFrequency: "weekly",
  priority: 0.7,
  includeInHomeHub: true,
};

export const seoPageDefinitions: SeoPageDefinition[] = [
  { path: "/", title: "Accueil", description: "Questionnaire et guides pour trouver vos aides financieres au Quebec.", changeFrequency: "weekly", priority: 1 },
  { path: "/questionnaire", title: "Questionnaire aides financieres", description: "Questionnaire rapide pour estimer les programmes accessibles selon votre situation.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/aide-famille-quebec", title: "Aide famille Quebec", description: "Guide des aides familiales au Quebec.", changeFrequency: "monthly", priority: 0.8, includeInHomeHub: true },
  { path: "/allocation-enfant-quebec", title: "Allocation enfant Quebec", description: "Guide sur l'allocation famille et les prestations pour enfants au Quebec.", changeFrequency: "monthly", priority: 0.8, includeInHomeHub: true },
  { path: "/credit-impot-quebec", title: "Credits d'impot Quebec", description: "Credits d'impot et aides fiscales a connaitre au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/subvention-renovation-quebec", title: "Subvention renovation Quebec", description: "Aides a la renovation et subventions maison au Quebec.", changeFrequency: "monthly", priority: 0.8, includeInHomeHub: true },
  { path: "/vehicule-electrique-quebec", title: "Vehicule electrique Quebec", description: "Subventions et credits pour vehicules electriques au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/credit-solidarite-quebec", title: "Credit solidarite Quebec", description: "Guide du credit d'impot pour la solidarite.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/allocation-logement-quebec", title: "Allocation logement Quebec", description: "Guide de l'allocation logement et autres aides au logement.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/subventions-maison-quebec", title: "Subventions maison Quebec : montants, aides et estimation", description: "Estimer les subventions maison disponibles au Quebec et maximiser les montants pour vos travaux.", changeFrequency: "monthly", priority: 0.95, includeInHomeHub: true },
  { path: "/aide-financiere-sport-enfant-quebec", title: "Aide sport enfant Quebec", description: "Aides financieres pour les activites sportives des enfants.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/cout-vie-quebec", title: "Cout de la vie Quebec", description: "Guides et reperes sur le cout de la vie au Quebec.", changeFrequency: "monthly", priority: 0.9, includeInHomeHub: true },
  { path: "/aide-lunettes-quebec", title: "Aide lunettes Quebec", description: "Aides et credits pour lunettes et soins visuels.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/subvention-sport-enfant-quebec", title: "Subvention sport enfant Quebec", description: "Guide des subventions sportives pour enfants.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/credit-impot-frais-medicaux-quebec", title: "Credit frais medicaux Quebec", description: "Credit d'impot pour frais medicaux et soins admissibles.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/subvention-thermopompe-quebec", title: "Subvention thermopompe Quebec", description: "Subventions pour thermopompes et travaux energetiques.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/subvention-isolation-quebec", title: "Subvention isolation Quebec : montants, admissibilite et estimation", description: "Estimer les aides possibles pour l'isolation au Quebec et verifier comment maximiser le montant selon les travaux.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/reno-climat-quebec", title: "Renoclimat Quebec : montants, admissibilite et estimation", description: "Estimer le potentiel de Renoclimat et les aides connexes pour un projet de renovation energetique au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/chauffez-vert-quebec", title: "Chauffez vert Quebec", description: "Programme Chauffez vert et subventions de conversion.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/borne-recharge-quebec", title: "Borne recharge Quebec", description: "Aides pour bornes de recharge au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", title: "Contact", description: "Page contact d'ArgentQC.ca.", changeFrequency: "yearly", priority: 0.4 },
  { path: "/demenagement", title: "Demenagement Quebec", description: "Theme demenagement, couts et checklist.", changeFrequency: "monthly", priority: 0.9, includeInHomeHub: true },
  { path: "/demenagement/cout", title: "Cout demenagement Quebec", description: "Estimer les couts d'un demenagement au Quebec.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/demenagement/checklist", title: "Checklist demenagement Quebec", description: "Checklist de demenagement et rappels utiles.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/demenagement/montreal", title: "Demenager a Montreal", description: "Guide pratique pour un demenagement a Montreal.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/budget", title: "Budget Quebec", description: "Theme budget, calculateurs et cout de la vie.", changeFrequency: "monthly", priority: 0.9, includeInHomeHub: true },
  { path: "/budget/calculateur", title: "Calculateur budget Quebec", description: "Calculateur budget et cout de la vie.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/assurances", title: "Assurances Quebec", description: "Theme assurances auto, habitation et vie.", changeFrequency: "monthly", priority: 0.9, includeInHomeHub: true },
  { path: "/assurances/auto", title: "Assurance auto Quebec", description: "Guide assurance auto au Quebec.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/assurances/habitation", title: "Assurance habitation Quebec", description: "Guide assurance habitation et comparaison.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/assurances/comparateur", title: "Comparateur assurances Quebec", description: "Comparateur assurance auto et habitation.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/assurances/vie", title: "Assurance vie Quebec", description: "Guide assurance vie et besoins de couverture.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/retraite", title: "Retraite Quebec", description: "Theme retraite, REER, CELI, RRQ et CELIAPP.", changeFrequency: "monthly", priority: 0.9, includeInHomeHub: true },
  { path: "/retraite/reer", title: "REER Quebec", description: "Guide REER et retraite au Quebec.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/retraite/celi", title: "CELI Quebec", description: "Guide CELI, plafond et strategie.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/retraite/rrq", title: "RRQ Quebec", description: "Guide RRQ, montants et admissibilite.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/retraite/celiapp", title: "CELIAPP Quebec", description: "Guide CELIAPP pour premier achat immobilier.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/transfert-reer", title: "Transfert REER Quebec", description: "Guide pratique pour transferer un REER sans retrait imposable.", changeFrequency: "monthly", priority: 0.9, includeInHomeHub: true },
  { path: "/internet", title: "Internet Quebec", description: "Theme internet et comparateur de forfaits.", changeFrequency: "monthly", priority: 0.8, includeInHomeHub: true },
  { path: "/internet/comparateur", title: "Comparateur internet Quebec", description: "Comparer les fournisseurs internet au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/impots", title: "Impots Quebec", description: "Theme impots, dates, remboursements et logiciels.", changeFrequency: "monthly", priority: 0.8, includeInHomeHub: true },
  { path: "/impots/dates", title: "Dates impots Quebec", description: "Dates importantes pour la declaration de revenus.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/impots/remboursement", title: "Remboursement impot Quebec", description: "Comprendre le remboursement d'impot et les delais.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/impots/logiciels", title: "Logiciels impot Quebec", description: "Comparer les logiciels d'impot utiles au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/aides-financieres", title: "Aides financieres Quebec", description: "Guide des aides financieres disponibles au Quebec.", changeFrequency: "monthly", priority: 0.85 },
  { path: "/depenses", title: "Reduire ses depenses Quebec", description: "Strategies pour reduire ses depenses au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/strategies", title: "Strategies fiscales Quebec", description: "Strategies fiscales et optimisation financiere au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/scenarios", title: "Scenarios finances personnelles Quebec", description: "Scenarios concrets de finances personnelles au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/scenarios/famille-2-enfants", title: "Scenario famille 2 enfants Quebec", description: "Simulation financiere pour une famille avec 2 enfants au Quebec.", changeFrequency: "monthly", priority: 0.75 },
  { path: "/scenarios/celibataire-locataire", title: "Scenario celibataire locataire Quebec", description: "Simulation financiere pour un celibataire locataire au Quebec.", changeFrequency: "monthly", priority: 0.75 },
  { path: "/scenarios/couple-sans-enfant", title: "Scenario couple sans enfant Quebec", description: "Simulation financiere pour un couple sans enfant au Quebec.", changeFrequency: "monthly", priority: 0.75 },
  { path: "/scenarios/proprietaire-hypotheque", title: "Scenario proprietaire hypotheque Quebec", description: "Simulation financiere pour un proprietaire avec hypotheque au Quebec.", changeFrequency: "monthly", priority: 0.75 },
  { path: "/scenarios/pre-retraite", title: "Scenario pre-retraite Quebec", description: "Simulation financiere pour un profil pre-retraite au Quebec.", changeFrequency: "monthly", priority: 0.75 },
  { path: "/strategies/reer-vs-celi", title: "REER vs CELI Quebec", description: "REER ou CELI : lequel choisir selon son revenu au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/strategies/fractionnement-revenu", title: "Fractionnement revenu couple Quebec", description: "Guide du fractionnement du revenu en couple au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/strategies/decaissement-retraite", title: "Decaissement retraite Quebec", description: "Ordre de decaissement optimal a la retraite au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/depenses/internet", title: "Reduire facture internet Quebec", description: "Comparer et reduire sa facture internet au Quebec.", changeFrequency: "monthly", priority: 0.75 },
  { path: "/depenses/assurances", title: "Reduire assurances Quebec", description: "Comparer et reduire ses assurances auto et habitation au Quebec.", changeFrequency: "monthly", priority: 0.75 },
  { path: "/aides-financieres/famille", title: "Aides financieres famille Quebec", description: "Toutes les aides financieres pour les familles quebecoises en 2026.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/aides-financieres/logement", title: "Aides logement Quebec", description: "Allocation-logement, credit solidarite et aides au logement au Quebec.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/prets-bourses-etudiants", title: "Prets et bourses etudiants Quebec 2026", description: "Guide complet des prets et bourses etudiants au Quebec : AFE, Bourse Perspective, REEP, remise en region.", changeFrequency: "monthly", priority: 0.85, includeInHomeHub: true },
];

export const homeHubPageDefinitions = [
  ...seoPageDefinitions.filter((page) => page.includeInHomeHub && page.path !== "/"),
  blogIndexDefinition,
];
