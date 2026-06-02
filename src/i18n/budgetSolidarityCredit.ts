import type { Programme } from "@/types";
import type { Locale } from "@/i18n/routing";

export interface BudgetSolidarityCreditDictionary {
  routeKey: "budgetSolidarityCredit";
  metadata: { title: string; description: string };
  keyword: string;
  title: string;
  subtitle: string;
  intro: string;
  totalLabel: string;
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

const fr: BudgetSolidarityCreditDictionary = {
  routeKey: "budgetSolidarityCredit",
  metadata: {
    title: "Credit d'impot solidarite Quebec 2026 : montant, seuils et paiement",
    description:
      "Voyez comment fonctionne le credit d'impot solidarite au Quebec en 2026 : admissibilite, seuils, montants possibles et paiements.",
  },
  keyword: "Credit de solidarite Quebec 2026",
  title: "Credit de solidarite Quebec 2026",
  subtitle: "Admissibilite, seuils de revenu, montants possibles, paiements et etapes pour le recevoir.",
  intro:
    "Reponse rapide : le credit d'impot pour solidarite Quebec 2026 est calcule par Revenu Quebec a partir de votre declaration provinciale. Le montant depend de votre revenu familial, de votre situation de logement, de votre situation familiale et des composantes applicables. Verifiez les seuils officiels avant de conclure que vous n'y avez pas droit.",
  totalLabel: "Potentiel total estime",
  availableProgramsLabel: "programmes disponibles",
  programsTitle: "Programmes lies",
  faqsTitle: "Questions frequentes",
  relatedTitle: "Pages reliees",
  ctaTitle: "Verifier tout le potentiel budgetaire",
  ctaText: "Le questionnaire croise logement, credits, famille et revenu pour sortir une estimation plus complete que le seul raisonnement fiscal.",
  ctaLabel: "Commencer le questionnaire",
  ctaHint: "Gratuit · 2 minutes · estimation personnalisee",
  disclaimer:
    "ArgentQC.ca est un outil informatif non affilie au gouvernement. Les montants affiches sont des estimations et l'admissibilite finale doit etre confirmee sur les sources officielles.",
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
        "C'est un credit d'impot remboursable de Revenu Quebec destine aux menages a revenu faible ou modeste. Il peut inclure une composante TVQ, une composante logement et, dans certains cas, une composante village nordique.",
    },
    {
      question: "Quels sont les seuils du credit solidarite?",
      answer:
        "Les seuils varient selon le revenu familial, la situation conjugale, le nombre d'enfants et les composantes applicables. Consultez Revenu Quebec pour les seuils exacts de l'annee visee.",
    },
    {
      question: "Comment recevoir le credit de solidarite?",
      answer:
        "Vous devez produire votre declaration de revenus du Quebec et remplir les renseignements demandes, notamment ceux lies a votre logement lorsque requis. Revenu Quebec calcule ensuite le credit selon votre situation.",
    },
    {
      question: "Quand les paiements sont-ils verses?",
      answer:
        "La frequence des paiements depend du montant accorde et des regles de Revenu Quebec. Verifiez votre avis de determination ou votre dossier Revenu Quebec pour les dates applicables.",
    },
    {
      question: "Peut-on le cumuler avec le credit TPS federal?",
      answer:
        "Oui. Le credit de solidarite et le credit TPS/TVH sont distincts et peuvent tous les deux s'appliquer au meme menage.",
    },
  ],
  programmes: [
    {
      id: "credit-loyer-qc",
      nom: "Credit d'impot pour solidarite",
      organisme: "Revenu Quebec",
      niveau: "provincial",
      categorie: "credits_impot",
      montant_min: 150,
      montant_max: 2000,
      montant_affiche: "150 $ a 2 000 $",
      description:
        "Credit remboursable qui regroupe plusieurs composantes, dont une composante habitation, et qui peut etre verse mensuellement ou annuellement selon le montant.",
      conditions: [
        "Resider au Quebec au 31 decembre",
        "Produire une declaration de revenus du Quebec",
        "Respecter les seuils de revenu applicables",
      ],
      lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
      criteres: { provinces: ["QC"], revenu_max: 60000 },
    },
    {
      id: "credit-tps-fed",
      nom: "Credit pour la TPS/TVH",
      organisme: "Gouvernement du Canada",
      niveau: "federal",
      categorie: "credits_impot",
      montant_min: 100,
      montant_max: 700,
      montant_affiche: "Jusqu'a 700 $ par annee",
      description:
        "Paiements trimestriels non imposables pour aider les personnes et familles a revenus faibles ou modestes a compenser une partie de la TPS/TVH.",
      conditions: [
        "Resider au Canada",
        "Produire une declaration de revenus",
        "Avoir 19 ans ou plus, ou avoir un conjoint ou un enfant",
      ],
      lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-taxe-produits-services-taxe-vente-harmonisee-tps-tvh.html",
      criteres: { revenu_max: 50000 },
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
    title: "Quebec Solidarity Tax Credit 2026 | ArgentQC.ca",
    description:
      "Practical guide to Quebec's solidarity tax credit: 2026 amounts, eligibility, TP-1 filing steps, and related support programs.",
  },
  keyword: "Quebec solidarity tax credit 2026",
  title: "Quebec solidarity tax credit in 2026",
  subtitle: "Amounts, eligibility, and how to claim this refundable Revenu Quebec credit.",
  intro:
    "The solidarity tax credit is one of the broadest Quebec supports for lower- and modest-income households. It often works alongside other budget supports, including the federal GST/HST credit and the housing allowance.",
  totalLabel: "Estimated total potential",
  availableProgramsLabel: "available programs",
  programsTitle: "Related programs",
  faqsTitle: "Frequently asked questions",
  relatedTitle: "Related pages",
  ctaTitle: "Check the full budget-support picture",
  ctaText: "The questionnaire connects housing, tax credits, family profile, and income to produce a more complete estimate.",
  ctaLabel: "Start the questionnaire",
  ctaHint: "Free · 2 minutes · personalized estimate",
  disclaimer:
    "ArgentQC.ca is an informational tool and is not affiliated with the government. Amounts shown are estimates only and final eligibility must be confirmed on official sources.",
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
        "It is a refundable tax credit paid by Revenu Quebec. It takes into account factors such as housing status and household income.",
    },
    {
      question: "How much can I receive in 2026?",
      answer:
        "The amount depends on family income, household composition, and housing situation. A single adult may receive a few hundred dollars, while a family with children can receive much more.",
    },
    {
      question: "Do I need to apply?",
      answer:
        "The key step is filing the Quebec tax return and completing the relevant information, including the required schedule within the TP-1 filing process.",
    },
    {
      question: "Can it be combined with the federal GST credit?",
      answer:
        "Yes. The solidarity tax credit and the GST/HST credit are separate supports and can both apply to the same household.",
    },
  ],
  programmes: [
    {
      id: "credit-loyer-qc",
      nom: "Quebec solidarity tax credit",
      organisme: "Revenu Quebec",
      niveau: "provincial",
      categorie: "credits_impot",
      montant_min: 150,
      montant_max: 2000,
      montant_affiche: "150 CAD to 2,000 CAD",
      description:
        "Refundable credit that includes multiple components, including a housing-related component, and may be paid monthly or annually depending on the amount.",
      conditions: [
        "Live in Quebec on December 31",
        "File a Quebec tax return",
        "Meet the applicable income thresholds",
      ],
      lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
      criteres: { provinces: ["QC"], revenu_max: 60000 },
    },
    {
      id: "credit-tps-fed",
      nom: "GST/HST credit",
      organisme: "Government of Canada",
      niveau: "federal",
      categorie: "credits_impot",
      montant_min: 100,
      montant_max: 700,
      montant_affiche: "Up to 700 CAD per year",
      description:
        "Quarterly tax-free payments designed to offset part of the GST/HST burden for lower- and modest-income households.",
      conditions: [
        "Live in Canada",
        "File a tax return",
        "Be at least 19, or have a spouse or child",
      ],
      lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-taxe-produits-services-taxe-vente-harmonisee-tps-tvh.html",
      criteres: { revenu_max: 50000 },
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
