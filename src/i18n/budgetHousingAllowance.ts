import type { Programme } from "@/types";
import type { Locale } from "@/i18n/routing";

export interface BudgetHousingAllowanceDictionary {
  routeKey: "budgetHousingAllowance";
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

const fr: BudgetHousingAllowanceDictionary = {
  routeKey: "budgetHousingAllowance",
  metadata: {
    title: "Allocation logement Quebec 2026 : montant, admissibilite et demande",
    description:
      "Decouvrez l'allocation logement au Quebec en 2026 : qui peut y avoir droit, montants possibles, criteres d'admissibilite et etapes pour faire une demande.",
  },
  keyword: "Allocation logement Quebec 2026",
  title: "Allocation logement Quebec 2026",
  subtitle: "Montants possibles, criteres d'admissibilite, demande et documents a preparer pour verifier votre droit.",
  intro:
    "Reponse rapide : l'allocation logement Quebec 2026 vise les menages a faible revenu pour qui le cout du logement pese lourd dans le budget. L'admissibilite depend du revenu, du loyer, de la composition du menage et de certaines conditions liees a l'age ou aux enfants a charge. Verifiez le montant exact sur le site officiel avant de deposer votre demande.",
  totalLabel: "Potentiel total estime",
  availableProgramsLabel: "programmes disponibles",
  programsTitle: "Programmes disponibles",
  faqsTitle: "Questions frequentes",
  relatedTitle: "Pages reliees",
  ctaTitle: "Voir toutes les aides liees au budget",
  ctaText: "Le questionnaire permet de croiser logement, revenu, famille et autres leviers budgetaires en quelques minutes.",
  ctaLabel: "Commencer le questionnaire",
  ctaHint: "Gratuit · 2 minutes · estimation personnalisee",
  disclaimer:
    "ArgentQC.ca est un outil informatif non affilie au gouvernement. Les montants restent des estimations et l'admissibilite finale doit etre verifiee sur les sources officielles.",
  footerText: "Outil informatif non affilie au gouvernement.",
  footerContact: "Contactez-nous",
  levelLabels: {
    federal: "Federal",
    provincial: "Provincial",
    municipal: "Municipal",
  },
  officialLabel: "Faire une demande",
  relatedLinks: [
    { href: "/fr/budget/credit-solidarite", title: "Credit de solidarite Quebec" },
    { href: "/aide-sociale-quebec", title: "Aide sociale Quebec 2026" },
    { href: "/fr/budget", title: "Thème budget" },
    { href: "/fr/questionnaire", title: "Questionnaire aides" },
  ],
  faqs: [
    {
      question: "Qui a droit a l'allocation logement en 2026?",
      answer:
        "Le programme vise des menages quebecois a faible revenu qui consacrent une part importante de leurs revenus au logement. L'admissibilite depend notamment de l'age, de la situation familiale, du revenu, du loyer et du type de logement.",
    },
    {
      question: "Quel est le montant de l'allocation logement?",
      answer:
        "Le montant peut varier selon le revenu, le loyer et la composition du menage. Verifiez toujours le montant exact et les seuils en vigueur sur le site officiel de la Societe d'habitation du Quebec.",
    },
    {
      question: "Comment faire une demande?",
      answer:
        "La demande se fait aupres de la Societe d'habitation du Quebec ou selon les consignes du programme. Preparez vos preuves de revenu, votre bail ou preuve de loyer et tout document demande.",
    },
    {
      question: "L'allocation logement est-elle imposable?",
      answer:
        "Son traitement peut dependre de votre situation. Conservez vos avis et consultez les instructions officielles ou un professionnel au besoin.",
    },
    {
      question: "Peut-on cumuler avec le credit de solidarite?",
      answer:
        "Oui. L'allocation logement et le credit d'impot pour solidarite sont deux programmes distincts qui peuvent etre pertinents pour un menage locataire a revenu faible ou modeste.",
    },
  ],
  programmes: [
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
        "Aide mensuelle pour les locataires a faible revenu qui consacrent une part trop importante de leur revenu au loyer.",
      conditions: [
        "Etre locataire au Quebec",
        "Avoir 50 ans ou plus, ou avoir un enfant a charge",
        "Respecter les seuils de revenu applicables",
      ],
      lien_officiel: "https://www.habitation.gouv.qc.ca/programme/programme/allocation-logement",
      criteres: { locataire: true, provinces: ["QC"], revenu_max: 35000 },
    },
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
        "Credit d'impot remboursable pour les menages a revenus faibles ou modestes, incluant une composante habitation.",
      conditions: [
        "Resider au Quebec au 31 decembre",
        "Produire une declaration de revenus",
        "Respecter les seuils de revenu du programme",
      ],
      lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
      criteres: { provinces: ["QC"], revenu_max: 60000 },
    },
    {
      id: "aide-solidarite-qc",
      nom: "Aide sociale",
      organisme: "Gouvernement du Quebec",
      niveau: "provincial",
      categorie: "logement",
      montant_min: 700,
      montant_max: 12000,
      montant_affiche: "Jusqu'a 12 000 $ par annee",
      description:
        "Aide de dernier recours pour les personnes sans emploi et sans autres ressources suffisantes.",
      conditions: [
        "Resider au Quebec",
        "Avoir peu ou pas de revenus et d'actifs",
        "Etre dans une situation de besoin financier",
      ],
      lien_officiel: "https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale",
      criteres: { provinces: ["QC"], revenu_max: 15000 },
    },
  ],
};

const en: BudgetHousingAllowanceDictionary = {
  routeKey: "budgetHousingAllowance",
  metadata: {
    title: "Quebec Housing Allowance 2026 | ArgentQC.ca",
    description:
      "Practical guide to Quebec's housing allowance: 2026 amounts, eligibility, SHQ application steps, and related support programs.",
  },
  keyword: "Quebec housing allowance 2026",
  title: "Quebec housing allowance in 2026",
  subtitle: "Monthly support for lower-income renters, with up to 170 CAD per month depending on the household profile.",
  intro:
    "Quebec's housing allowance is often overlooked even though it can materially improve a renter's monthly budget. It can also stack with other support, including the Quebec solidarity tax credit.",
  totalLabel: "Estimated total potential",
  availableProgramsLabel: "available programs",
  programsTitle: "Available programs",
  faqsTitle: "Frequently asked questions",
  relatedTitle: "Related pages",
  ctaTitle: "See all budget-related support",
  ctaText: "The questionnaire helps connect housing, income, family profile, and other budget levers in a few minutes.",
  ctaLabel: "Start the questionnaire",
  ctaHint: "Free · 2 minutes · personalized estimate",
  disclaimer:
    "ArgentQC.ca is an informational tool and is not affiliated with the government. Amounts are estimates only and final eligibility must be confirmed on official sources.",
  footerText: "Informational tool not affiliated with the government.",
  footerContact: "Contact us",
  levelLabels: {
    federal: "Federal",
    provincial: "Provincial",
    municipal: "Municipal",
  },
  officialLabel: "Apply on official site",
  relatedLinks: [
    { href: "/credit-solidarite-quebec", title: "Quebec solidarity tax credit" },
    { href: "/en/budget", title: "Budget topic" },
    { href: "/en/questionnaire", title: "Benefits questionnaire" },
  ],
  faqs: [
    {
      question: "Who can receive Quebec's housing allowance?",
      answer:
        "It mainly targets lower-income renters who spend a high share of their income on rent. In practice, the household usually needs to include someone age 50 or older or a dependent child, and income thresholds apply.",
    },
    {
      question: "What is the amount in 2026?",
      answer:
        "The maximum amount shown here is 170 CAD per month, or up to 2,040 CAD per year. The actual amount depends on household income and rent.",
    },
    {
      question: "Where do I apply?",
      answer:
        "Applications are handled through the Societe d'habitation du Quebec. In practice, you need to provide rent information and household income details.",
    },
    {
      question: "Can it be combined with the solidarity tax credit?",
      answer:
        "Yes. The housing allowance and the solidarity tax credit are separate programs and may both apply depending on the household situation.",
    },
  ],
  programmes: [
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
        "Meet the applicable household income thresholds",
      ],
      lien_officiel: "https://www.habitation.gouv.qc.ca/programme/programme/allocation-logement",
      criteres: { locataire: true, provinces: ["QC"], revenu_max: 35000 },
    },
    {
      id: "credit-loyer-qc",
      nom: "Solidarity tax credit",
      organisme: "Revenu Quebec",
      niveau: "provincial",
      categorie: "credits_impot",
      montant_min: 150,
      montant_max: 2000,
      montant_affiche: "150 CAD to 2,000 CAD",
      description:
        "Refundable tax credit for lower- and modest-income households, including a housing-related component.",
      conditions: [
        "Live in Quebec on December 31",
        "File a tax return",
        "Meet the program income thresholds",
      ],
      lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
      criteres: { provinces: ["QC"], revenu_max: 60000 },
    },
    {
      id: "aide-solidarite-qc",
      nom: "Social assistance",
      organisme: "Government of Quebec",
      niveau: "provincial",
      categorie: "logement",
      montant_min: 700,
      montant_max: 12000,
      montant_affiche: "Up to 12,000 CAD per year",
      description:
        "Last-resort support for people with little or no work income and limited financial resources.",
      conditions: [
        "Live in Quebec",
        "Have little or no income and assets",
        "Be in a situation of financial need",
      ],
      lien_officiel: "https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale",
      criteres: { provinces: ["QC"], revenu_max: 15000 },
    },
  ],
};

export function getBudgetHousingAllowanceDictionary(locale: Locale) {
  return locale === "fr" ? fr : en;
}
