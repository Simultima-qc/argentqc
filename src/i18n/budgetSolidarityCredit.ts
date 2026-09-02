import type { Programme } from "@/types";
import type { Locale } from "@/i18n/routing";
import { solidarityCredit2026 } from "@/data/finance-2026/solidarity-credit-2026";

export interface BudgetSolidarityCreditDictionary {
  routeKey: "budgetSolidarityCredit";
  metadata: { title: string; description: string };
  keyword: string;
  title: string;
  subtitle: string;
  intro: string;
  totalLabel: string;
  totalNote: string;
  availableProgramsLabel: string;
  programsTitle: string;
  faqsTitle: string;
  relatedTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHint: string;
  disclaimer: string;
  footerText: string;
  footerContact: string;
  levelLabels: Record<Programme["niveau"], string>;
  officialLabel: string;
  relatedLinks: Array<{ href: string; title: string }>;
  faqs: Array<{ question: string; answer: string }>;
  programmes: Programme[];
}

const { tvq, housing, northernVillage } = solidarityCredit2026.components;
const { threshold, rateTwoOrMoreComponents, rateOneComponent } = solidarityCredit2026.reduction;

const fr: BudgetSolidarityCreditDictionary = {
  routeKey: "budgetSolidarityCredit",
  metadata: {
    title: "Credit d'impot solidarite Quebec 2026-2027 : composantes, seuils et versement",
    description:
      "Comprendre le credit d'impot pour solidarite au Quebec pour juillet 2026 a juin 2027 : composantes, seuil de reduction et frequence de versement determinee par Revenu Quebec.",
  },
  keyword: "Credit de solidarite Quebec 2026",
  title: "Credit de solidarite Quebec 2026-2027",
  subtitle: "Composantes, seuil de reduction, demande et frequence de versement de ce credit remboursable de Revenu Quebec.",
  intro:
    "Reponse rapide : le credit d'impot pour solidarite est calcule par Revenu Quebec a partir de votre declaration de revenus 2025 et de votre situation au 31 decembre 2025. Il combine jusqu'a trois composantes (TVQ, logement, village nordique) selon votre situation reelle. ArgentQC.ca ne calcule pas de montant exact : le questionnaire presente ce credit comme une piste a verifier aupres de Revenu Quebec.",
  totalLabel: "Potentiel affiche",
  totalNote:
    "Ce montant ne comprend pas le credit de solidarite : Revenu Quebec determine le montant, les composantes applicables et la frequence de versement selon votre dossier complet.",
  availableProgramsLabel: "programmes disponibles",
  programsTitle: "Programmes lies",
  faqsTitle: "Questions frequentes",
  relatedTitle: "Pages reliees",
  ctaTitle: "Verifier tout le potentiel budgetaire",
  ctaText: "Le questionnaire croise logement, credits, famille et revenu pour reperer les pistes pertinentes; les montants sensibles restent a confirmer aupres des organismes officiels.",
  ctaLabel: "Commencer le questionnaire",
  ctaHint: "Gratuit · 2 minutes · pistes a verifier",
  disclaimer:
    "ArgentQC.ca est un outil informatif non affilie au gouvernement. Les montants affiches sont des maximums de composantes, pas un droit garanti, et l'admissibilite finale doit etre confirmee sur les sources officielles.",
  footerText: "Outil informatif non affilie au gouvernement.",
  footerContact: "Contactez-nous",
  levelLabels: {
    federal: "Federal",
    provincial: "Provincial",
    municipal: "Municipal",
  },
  officialLabel: "Faire une demande",
  relatedLinks: [
    { href: "/fr/budget/allocation-logement", title: "Allocation logement" },
    { href: "/aide-sociale-quebec", title: "Aide sociale Quebec 2026" },
    { href: "/supplement-revenu-garanti-2026", title: "Supplement de revenu garanti 2026" },
    { href: "/fr/budget", title: "Thème budget" },
    { href: "/fr/questionnaire", title: "Questionnaire aides" },
  ],
  faqs: [
    {
      question: "C'est quoi le credit d'impot pour solidarite?",
      answer:
        "C'est un credit d'impot remboursable de Revenu Quebec destine aux menages a revenu faible ou modeste. Il combine jusqu'a trois composantes selon votre situation : TVQ, logement et, pour les residents des 14 villages nordiques du Nunavik, village nordique.",
    },
    {
      question: "Quels sont les composantes et les seuils du credit de solidarite?",
      answer:
        `Pour juillet 2026 a juin 2027 : composante TVQ ${tvq.base} $ par adulte (${tvq.spouse} $ de plus pour le conjoint, ${tvq.additionalLivingAlone} $ de plus si vous vivez seul); composante logement ${housing.couple} $ pour un couple, ${housing.singleOrSingleParent} $ pour une personne vivant seule ou une famille monoparentale, ${housing.perChild} $ par enfant; composante village nordique ${northernVillage.perAdult} $ par adulte et ${northernVillage.perChild} $ par enfant. Le credit diminue de ${Math.round(rateTwoOrMoreComponents * 100)} % de l'exces de revenu familial net au-dela de ${threshold.toLocaleString("fr-CA")} $ lorsque deux composantes ou plus s'appliquent, ou de ${Math.round(rateOneComponent * 100)} % lorsqu'une seule s'applique. Il n'existe aucun montant maximal universel : le total depend de votre menage.`,
    },
    {
      question: "Comment recevoir le credit de solidarite?",
      answer:
        "Vous devez produire votre declaration de revenus du Quebec 2025 et, pour les composantes logement et village nordique, remplir l'annexe D (releve 31 pour les locataires, compte de taxes municipales pour les proprietaires). Sans annexe D, seule la composante TVQ de base (et celle du conjoint, le cas echeant) peut etre versee. L'inscription au depot direct est generalement requise.",
    },
    {
      question: "Quand les paiements sont-ils verses?",
      answer:
        "La frequence n'est pas un choix : Revenu Quebec la determine selon le montant annuel accorde. 240 $ ou moins donne un seul versement en juillet 2026; de 241 $ a 799 $ donne des versements trimestriels en juillet et octobre 2026 puis en janvier et avril 2027; 800 $ ou plus donne des versements mensuels de juillet 2026 a juin 2027.",
    },
    {
      question: "ArgentQC peut-il calculer mon montant exact?",
      answer:
        "Non. Le questionnaire presente ce credit comme une piste a verifier : il ne collecte pas le revenu exact du conjoint, la situation de logement partage, le statut de l'annexe D ni l'admissibilite au volet village nordique. Utilisez l'outil officiel de Revenu Quebec ou votre avis de determination pour le montant exact.",
    },
    {
      question: "Peut-on le cumuler avec l'ACEBE federale?",
      answer:
        "Oui. Le credit de solidarite et l'ACEBE sont distincts et peuvent tous les deux s'appliquer au meme menage. L'ARC doit confirmer le montant de l'ACEBE.",
    },
  ],
  programmes: [
    {
      id: "credit-loyer-qc",
      nom: "Credit d'impot pour solidarite",
      organisme: "Revenu Quebec",
      niveau: "provincial",
      categorie: "credits_impot",
      montant_min: 0,
      montant_max: 0,
      montant_affiche: "Montant determine par Revenu Quebec — a verifier",
      montant_sommable: false,
      preselection_only: true,
      description:
        "Credit remboursable qui combine jusqu'a trois composantes (TVQ, logement, village nordique) selon la declaration 2025 et l'annexe D. Le montant et la frequence de versement sont determines par Revenu Quebec, pas choisis par le menage.",
      conditions: [
        "Resider au Quebec au 31 decembre 2025",
        "Produire la declaration de revenus 2025 et l'annexe D si le logement ou le village nordique s'appliquent",
        "Faire verifier le montant et la frequence par Revenu Quebec",
      ],
      lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
      criteres: { provinces: ["QC"] },
    },
    {
      id: "credit-tps-fed",
      nom: "Allocation canadienne pour l'epicerie et les besoins essentiels (ACEBE)",
      organisme: "Gouvernement du Canada",
      niveau: "federal",
      categorie: "credits_impot",
      montant_min: 0,
      montant_max: 0,
      montant_affiche: "Montant calcule par l'ARC - a verifier",
      montant_sommable: false,
      preselection_only: true,
      description:
        "Prestation trimestrielle non imposable qui remplace le credit pour la TPS/TVH depuis juillet 2026. Le montant depend du revenu familial net rajuste de 2025 et de la composition familiale.",
      conditions: [
        "Resider au Canada",
        "Produire une declaration de revenus",
        "Avoir 19 ans ou plus, ou avoir un conjoint ou un enfant",
        "Faire verifier le montant par l'ARC",
      ],
      lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-epicerie-besoins-essentiels.html",
      criteres: {},
    },
    {
      id: "allocation-logement-qc",
      nom: "Allocation-logement (Quebec)",
      organisme: "Societe d'habitation du Quebec (SHQ)",
      niveau: "provincial",
      categorie: "logement",
      montant_min: 100,
      montant_max: 2040,
      montant_affiche: "Jusqu'a 170 $ par mois",
      description:
        "Aide mensuelle pour les locataires a faible revenu qui consacrent une trop grande part de leurs revenus au loyer.",
      conditions: [
        "Etre locataire au Quebec",
        "Avoir 50 ans ou plus, ou avoir un enfant a charge",
        "Respecter les seuils de revenu applicables",
      ],
      lien_officiel: "https://www.habitation.gouv.qc.ca/programme/programme/allocation-logement",
      criteres: { locataire: true, provinces: ["QC"], revenu_max: 35000 },
    },
  ],
};

const en: BudgetSolidarityCreditDictionary = {
  routeKey: "budgetSolidarityCredit",
  metadata: {
    title: "Quebec Solidarity Tax Credit 2026-2027 | ArgentQC.ca",
    description:
      "Practical guide to Quebec's solidarity tax credit for July 2026 to June 2027: components, reduction threshold, and the payment frequency set by Revenu Quebec.",
  },
  keyword: "Quebec solidarity tax credit 2026",
  title: "Quebec solidarity tax credit, 2026-2027",
  subtitle: "Components, reduction threshold, how to apply, and the payment frequency for this refundable Revenu Quebec credit.",
  intro:
    "The solidarity tax credit is calculated by Revenu Quebec from your 2025 tax return and your situation as of December 31, 2025. It combines up to three components (sales tax, housing, northern village) depending on your actual household. ArgentQC.ca does not calculate an exact amount: the questionnaire treats this credit as a lead to verify with Revenu Quebec.",
  totalLabel: "Displayed potential",
  totalNote:
    "This amount does not include the solidarity tax credit: Revenu Quebec determines the amount, the applicable components, and the payment frequency from your full file.",
  availableProgramsLabel: "available programs",
  programsTitle: "Related programs",
  faqsTitle: "Frequently asked questions",
  relatedTitle: "Related pages",
  ctaTitle: "Check the full budget-support picture",
  ctaText: "The questionnaire connects housing, tax credits, family profile, and income to surface relevant leads; sensitive amounts still need to be confirmed with the official agencies.",
  ctaLabel: "Start the questionnaire",
  ctaHint: "Free · 2 minutes · leads to verify",
  disclaimer:
    "ArgentQC.ca is an informational tool and is not affiliated with the government. Amounts shown are component maximums, not a guaranteed entitlement, and final eligibility must be confirmed on official sources.",
  footerText: "Informational tool not affiliated with the government.",
  footerContact: "Contact us",
  levelLabels: {
    federal: "Federal",
    provincial: "Provincial",
    municipal: "Municipal",
  },
  officialLabel: "Apply on official site",
  relatedLinks: [
    { href: "/en/budget/housing-allowance", title: "Housing allowance" },
    { href: "/en/budget", title: "Budget topic" },
    { href: "/en/questionnaire", title: "Benefits questionnaire" },
  ],
  faqs: [
    {
      question: "What is the solidarity tax credit?",
      answer:
        "It is a refundable tax credit paid by Revenu Quebec. It combines up to three components depending on your situation: sales tax, housing, and, for residents of the 14 northern villages of Nunavik, a northern village component.",
    },
    {
      question: "What are the components and thresholds for 2026-2027?",
      answer:
        `For July 2026 to June 2027: sales tax component $${tvq.base} per adult ($${tvq.spouse} more for a spouse, $${tvq.additionalLivingAlone} more if you live alone); housing component $${housing.couple} for a couple, $${housing.singleOrSingleParent} for someone living alone or a single-parent family, $${housing.perChild} per child; northern village component $${northernVillage.perAdult} per adult and $${northernVillage.perChild} per child. The credit is reduced by ${Math.round(rateTwoOrMoreComponents * 100)}% of net family income above $${threshold.toLocaleString("en-CA")} when two or more components apply, or ${Math.round(rateOneComponent * 100)}% when only one applies. There is no universal maximum amount: the total depends on your household.`,
    },
    {
      question: "Do I need to apply?",
      answer:
        "You must file your 2025 Quebec tax return, and for the housing and northern village components, complete Schedule D (a Relevé 31 for renters, a municipal tax bill for owners). Without Schedule D, only the base sales tax component (and the spouse's, if applicable) can be paid. Direct deposit enrollment is generally required.",
    },
    {
      question: "When are the payments made?",
      answer:
        "The frequency is not a choice: Revenu Quebec sets it based on the annual amount granted. $240 or less means a single payment in July 2026; $241 to $799 means quarterly payments in July and October 2026, then January and April 2027; $800 or more means monthly payments from July 2026 to June 2027.",
    },
    {
      question: "Can ArgentQC calculate my exact amount?",
      answer:
        "No. The questionnaire treats this credit as a lead to verify: it does not collect a spouse's exact income, shared housing status, Schedule D status, or eligibility for the northern village component. Use Revenu Quebec's official tool or your notice of determination for the exact amount.",
    },
    {
      question: "Can it be combined with the federal CGEB?",
      answer:
        "Yes. The solidarity tax credit and the CGEB are separate supports and can both apply to the same household. The CRA must confirm the CGEB amount.",
    },
  ],
  programmes: [
    {
      id: "credit-loyer-qc",
      nom: "Quebec solidarity tax credit",
      organisme: "Revenu Quebec",
      niveau: "provincial",
      categorie: "credits_impot",
      montant_min: 0,
      montant_max: 0,
      montant_affiche: "Amount determined by Revenu Quebec — verify",
      montant_sommable: false,
      preselection_only: true,
      description:
        "Refundable credit that combines up to three components (sales tax, housing, northern village) based on the 2025 tax return and Schedule D. The amount and payment frequency are set by Revenu Quebec, not chosen by the household.",
      conditions: [
        "Live in Quebec on December 31, 2025",
        "File your 2025 tax return, plus Schedule D if the housing or northern village component applies",
        "Have Revenu Quebec verify the amount and payment frequency",
      ],
      lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
      criteres: { provinces: ["QC"] },
    },
    {
      id: "credit-tps-fed",
      nom: "Canada Groceries and Essentials Benefit (CGEB)",
      organisme: "Government of Canada",
      niveau: "federal",
      categorie: "credits_impot",
      montant_min: 0,
      montant_max: 0,
      montant_affiche: "Amount calculated by the CRA - verify",
      montant_sommable: false,
      preselection_only: true,
      description:
        "Quarterly tax-free benefit that replaced the GST/HST credit in July 2026. The amount depends on 2025 adjusted family net income and family composition.",
      conditions: [
        "Live in Canada",
        "File a tax return",
        "Be at least 19, or have a spouse or child",
        "Have the CRA verify the amount",
      ],
      lien_officiel: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-groceries-essentials-benefit.html",
      criteres: {},
    },
    {
      id: "allocation-logement-qc",
      nom: "Quebec housing allowance",
      organisme: "Societe d'habitation du Quebec (SHQ)",
      niveau: "provincial",
      categorie: "logement",
      montant_min: 100,
      montant_max: 2040,
      montant_affiche: "Up to 170 CAD per month",
      description:
        "Monthly support for lower-income renters who spend too much of their income on housing.",
      conditions: [
        "Be a renter in Quebec",
        "Be age 50+ or have a dependent child",
        "Meet the applicable income thresholds",
      ],
      lien_officiel: "https://www.habitation.gouv.qc.ca/programme/programme/allocation-logement",
      criteres: { locataire: true, provinces: ["QC"], revenu_max: 35000 },
    },
  ],
};

export function getBudgetSolidarityCreditDictionary(locale: Locale) {
  return locale === "fr" ? fr : en;
}
