import type { Locale } from "@/i18n/routing";

export interface HomeDictionary {
  metadata: {
    title: string;
    description: string;
  };
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  ctaMeta: string;
  trustBadges: string[];
  examplesLabel: string;
  examples: Array<{
    profile: string;
    amount: string;
    description: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  stepsTitle: string;
  steps: Array<{
    number: string;
    title: string;
    text: string;
  }>;
  secondaryCta: string;
  topicsTitle: string;
  topicsDescription: string;
  footerDisclaimer: string;
}

export interface QuestionnaireDictionary {
  metadata: {
    title: string;
    description: string;
  };
  progressLabel: string;
  previousQuestion: string;
  answersNotSaved: string;
  yes: string;
  no: string;
  steps: Array<
    | {
        id: "statut_logement" | "situation_familiale" | "revenu" | "vehicule_elec" | "age";
        question: string;
        type: "choix";
        options: Array<{ value: string; label: string }>;
      }
    | {
        id: "enfants" | "renovation" | "retraite";
        question: string;
        type: "oui_non";
      }
  >;
}

export interface ResultsDictionary {
  metadata: {
    title: string;
    description: string;
  };
  restart: string;
  summaryLabel: string;
  programmesFound: {
    singular: string;
    plural: string;
  };
  emptyState: {
    title: string;
    description: string;
    cta: string;
  };
  eligibleLabel: string;
  adsLabel: string;
  conditionsTitle: string;
  applyCta: string;
  recalculateText: string;
  recalculateCta: string;
  estimateDisclaimer: string;
  footerDisclaimer: string;
  categoryLabels: Record<string, string>;
  levelLabels: Record<string, { label: string; className: string }>;
}

export interface SiteDictionary {
  brand: string;
  languageSwitcherLabel: string;
  home: HomeDictionary;
  questionnaire: QuestionnaireDictionary;
  results: ResultsDictionary;
}

const fr: SiteDictionary = {
  brand: "ArgentQC.ca",
  languageSwitcherLabel: "Changer de langue",
  home: {
    metadata: {
      title: "ArgentQC.ca | Trouvez les aides et crédits d'impôt au Québec",
      description:
        "Questionnaire gratuit et guides pratiques pour repérer les aides financières, subventions et crédits d'impôt qui peuvent s'appliquer à votre situation au Québec.",
    },
    badge: "100 % gratuit · aucune inscription",
    title: "Découvrez les aides et crédits que vous pourriez réclamer au Québec",
    description:
      "Répondez à quelques questions et obtenez une première estimation claire des programmes gouvernementaux qui peuvent correspondre à votre situation.",
    primaryCta: "Trouver mes aides",
    ctaMeta: "Gratuit · 2 minutes · estimation personnalisee",
    trustBadges: [
      "Aucune donnée sauvegardée",
      "Programmes officiels et vérifiables",
    ],
    examplesLabel: "Exemples de profils",
    examples: [
      {
        profile: "Famille avec 2 enfants",
        amount: "9 800 $",
        description: "ACE, Allocation famille et crédit pour la solidarité",
      },
      {
        profile: "Propriétaire qui rénove",
        amount: "16 700 $",
        description: "RenoClimat, LogisVert et crédits fédéraux",
      },
      {
        profile: "Aîné admissible",
        amount: "14 000 $",
        description: "SV, SRG et maintien à domicile",
      },
    ],
    stats: [
      { value: "16", label: "programmes couverts" },
      { value: "20k$", label: "potentiel maximal moyen" },
      { value: "2 min", label: "pour vos résultats" },
    ],
    stepsTitle: "Comment ça fonctionne",
    steps: [
      {
        number: "1",
        title: "Vous répondez au questionnaire",
        text: "Logement, revenu, famille, retraite et projets de rénovation.",
      },
      {
        number: "2",
        title: "On filtre les programmes",
        text: "La logique met en correspondance vos réponses avec les critères de 2026.",
      },
      {
        number: "3",
        title: "Vous obtenez une base actionnable",
        text: "Montants estimés, conditions d'admissibilité et liens officiels.",
      },
    ],
    secondaryCta: "Commencer le questionnaire",
    topicsTitle: "Explorer par thème",
    topicsDescription:
      "Consultez directement nos principaux thèmes pour comparer les options, comprendre les programmes et trouver les pages les plus utiles.",
    footerDisclaimer:
      "Outil informatif non affilié au gouvernement. Les montants affichés sont des estimations à valider sur les sites officiels.",
  },
  questionnaire: {
    metadata: {
      title: "Questionnaire | ArgentQC.ca",
      description:
        "Repondez a 8 questions pour estimer les aides gouvernementales et credits d'impot qui peuvent s'appliquer a votre situation.",
    },
    progressLabel: "Question",
    previousQuestion: "Question precedente",
    answersNotSaved: "Vos reponses ne sont pas enregistrees",
    yes: "Oui",
    no: "Non",
    steps: [
      {
        id: "statut_logement",
        question: "Etes-vous proprietaire ou locataire ?",
        type: "choix",
        options: [
          { value: "proprietaire", label: "Proprietaire" },
          { value: "locataire", label: "Locataire" },
        ],
      },
      {
        id: "situation_familiale",
        question: "Quelle est votre situation familiale ?",
        type: "choix",
        options: [
          { value: "seul", label: "Seul(e)" },
          { value: "couple", label: "En couple" },
          { value: "famille", label: "Famille avec enfants" },
        ],
      },
      {
        id: "enfants",
        question: "Avez-vous des enfants de moins de 18 ans a charge ?",
        type: "oui_non",
      },
      {
        id: "revenu",
        question: "Quel est votre revenu familial annuel brut ?",
        type: "choix",
        options: [
          { value: "0-30000", label: "Moins de 30 000 $" },
          { value: "30000-50000", label: "30 000 $ a 50 000 $" },
          { value: "50000-75000", label: "50 000 $ a 75 000 $" },
          { value: "75000-100000", label: "75 000 $ a 100 000 $" },
          { value: "100000+", label: "Plus de 100 000 $" },
        ],
      },
      {
        id: "vehicule_elec",
        question: "Avez-vous ou prevoyez-vous un vehicule electrique ?",
        type: "choix",
        options: [
          { value: "oui", label: "Oui, j'en ai deja un" },
          { value: "prevu", label: "Oui, j'en prevois un" },
          { value: "non", label: "Non" },
        ],
      },
      {
        id: "renovation",
        question: "Prevoyez-vous des travaux de renovation ou d'amelioration energetique ?",
        type: "oui_non",
      },
      {
        id: "retraite",
        question: "Etes-vous a la retraite ou age de 65 ans et plus ?",
        type: "oui_non",
      },
      {
        id: "age",
        question: "Dans quelle tranche d'age vous situez-vous ?",
        type: "choix",
        options: [
          { value: "18-30", label: "18 a 30 ans" },
          { value: "31-45", label: "31 a 45 ans" },
          { value: "46-65", label: "46 a 65 ans" },
          { value: "65+", label: "65 ans et plus" },
        ],
      },
    ],
  },
  results: {
    metadata: {
      title: "Vos resultats | ArgentQC.ca",
      description:
        "Consultez votre liste initiale de programmes gouvernementaux potentiellement admissibles selon vos reponses.",
    },
    restart: "Recommencer",
    summaryLabel: "Vous pourriez recuperer jusqu'a",
    programmesFound: {
      singular: "programme trouve",
      plural: "programmes trouves",
    },
    emptyState: {
      title: "Aucun programme trouve",
      description:
        "Selon vos reponses actuelles, nous n'avons pas trouve de programme correspondant dans ce perimetre.",
      cta: "Refaire le questionnaire",
    },
    eligibleLabel: "Vos programmes admissibles",
    adsLabel: "Publicite",
    conditionsTitle: "Conditions",
    applyCta: "Voir la page officielle",
    recalculateText: "Votre situation a change ? Recalculez vos aides.",
    recalculateCta: "Refaire le questionnaire",
    estimateDisclaimer:
      "Les montants affiches sont des estimations a titre informatif. L'admissibilite finale depend des criteres officiels de chaque programme.",
    footerDisclaimer: "Outil informatif non affilie au gouvernement.",
    categoryLabels: {
      renovation: "Renovation",
      energie: "Energie",
      famille: "Famille",
      transport: "Transport",
      logement: "Logement",
      credits_impot: "Credits d'impot",
      sante: "Sante et aines",
      agriculture: "Agriculture",
    },
    levelLabels: {
      federal: { label: "Federal", className: "bg-red-100 text-red-700" },
      provincial: { label: "Provincial", className: "bg-blue-100 text-blue-700" },
      municipal: { label: "Municipal", className: "bg-green-100 text-green-700" },
    },
  },
};

const en: SiteDictionary = {
  brand: "ArgentQC.ca",
  languageSwitcherLabel: "Change language",
  home: {
    metadata: {
      title: "ArgentQC.ca | Find Quebec benefits and tax credits",
      description:
        "Take a free questionnaire to spot Quebec and federal benefits, grants, and tax credits that may apply to your household.",
    },
    badge: "Free to use · no sign-up required",
    title: "Find the Quebec and federal money you may be leaving unclaimed",
    description:
      "Answer a short questionnaire and get a practical first-pass estimate of the government programs that may fit your situation.",
    primaryCta: "Start the questionnaire",
    ctaMeta: "Free · about 2 minutes · personalized estimate",
    trustBadges: [
      "No account or saved answers",
      "Official programs with source links",
      "Built on a bilingual SEO-ready structure",
    ],
    examplesLabel: "Example profiles",
    examples: [
      {
        profile: "Family with 2 children",
        amount: "$9,800",
        description: "CCB, Quebec family allowance, and solidarity tax credit",
      },
      {
        profile: "Homeowner planning upgrades",
        amount: "$16,700",
        description: "RenoClimat, LogisVert, and federal home credits",
      },
      {
        profile: "Eligible senior",
        amount: "$14,000",
        description: "OAS, GIS, and home support tax assistance",
      },
    ],
    stats: [
      { value: "16", label: "programs covered" },
      { value: "$20k", label: "average top-end potential" },
      { value: "2 min", label: "to see results" },
    ],
    stepsTitle: "How it works",
    steps: [
      {
        number: "1",
        title: "You answer the questionnaire",
        text: "Housing, income, family, retirement, and renovation plans.",
      },
      {
        number: "2",
        title: "We filter the programs",
        text: "The matching logic compares your answers against 2026 eligibility rules.",
      },
      {
        number: "3",
        title: "You get an action-oriented shortlist",
        text: "Estimated amounts, eligibility conditions, and official source links.",
      },
    ],
    secondaryCta: "Run the questionnaire",
    topicsTitle: "Browse by topic",
    topicsDescription:
      "Go straight to the main topics to compare options, understand the programs, and find the most useful guides faster.",
    footerDisclaimer:
      "Informational tool only and not affiliated with the government. Amounts are estimates and should be confirmed on official websites.",
  },
  questionnaire: {
    metadata: {
      title: "Questionnaire | ArgentQC.ca",
      description:
        "Answer 8 questions to estimate which government benefits and tax credits may apply to your situation.",
    },
    progressLabel: "Question",
    previousQuestion: "Previous question",
    answersNotSaved: "Your answers are not stored",
    yes: "Yes",
    no: "No",
    steps: [
      {
        id: "statut_logement",
        question: "Are you a homeowner or a renter?",
        type: "choix",
        options: [
          { value: "proprietaire", label: "Homeowner" },
          { value: "locataire", label: "Renter" },
        ],
      },
      {
        id: "situation_familiale",
        question: "What best describes your household?",
        type: "choix",
        options: [
          { value: "seul", label: "Single" },
          { value: "couple", label: "Couple" },
          { value: "famille", label: "Family with children" },
        ],
      },
      {
        id: "enfants",
        question: "Do you have children under 18 living with you?",
        type: "oui_non",
      },
      {
        id: "revenu",
        question: "What is your gross annual household income?",
        type: "choix",
        options: [
          { value: "0-30000", label: "Under $30,000" },
          { value: "30000-50000", label: "$30,000 to $50,000" },
          { value: "50000-75000", label: "$50,000 to $75,000" },
          { value: "75000-100000", label: "$75,000 to $100,000" },
          { value: "100000+", label: "Over $100,000" },
        ],
      },
      {
        id: "vehicule_elec",
        question: "Do you own or plan to buy an electric vehicle?",
        type: "choix",
        options: [
          { value: "oui", label: "Yes, I already have one" },
          { value: "prevu", label: "Yes, I plan to get one" },
          { value: "non", label: "No" },
        ],
      },
      {
        id: "renovation",
        question: "Are you planning renovation or energy-efficiency work?",
        type: "oui_non",
      },
      {
        id: "retraite",
        question: "Are you retired or aged 65 and over?",
        type: "oui_non",
      },
      {
        id: "age",
        question: "Which age range are you in?",
        type: "choix",
        options: [
          { value: "18-30", label: "18 to 30" },
          { value: "31-45", label: "31 to 45" },
          { value: "46-65", label: "46 to 65" },
          { value: "65+", label: "65 and over" },
        ],
      },
    ],
  },
  results: {
    metadata: {
      title: "Your results | ArgentQC.ca",
      description:
        "Review your initial shortlist of government programs that may match your answers.",
    },
    restart: "Start over",
    summaryLabel: "You may be able to claim up to",
    programmesFound: {
      singular: "program found",
      plural: "programs found",
    },
    emptyState: {
      title: "No matching program found",
      description:
        "Based on your current answers, this first-pass matching did not find a program within the current scope.",
      cta: "Retake the questionnaire",
    },
    eligibleLabel: "Programs you may qualify for",
    adsLabel: "Advertisement",
    conditionsTitle: "Eligibility notes",
    applyCta: "Open official page",
    recalculateText: "Has your situation changed? Run the estimate again.",
    recalculateCta: "Retake the questionnaire",
    estimateDisclaimer:
      "Displayed amounts are estimates only. Final eligibility depends on each program's official requirements.",
    footerDisclaimer: "Informational tool only and not affiliated with the government.",
    categoryLabels: {
      renovation: "Home upgrades",
      energie: "Energy",
      famille: "Family",
      transport: "Transportation",
      logement: "Housing",
      credits_impot: "Tax credits",
      sante: "Health and seniors",
      agriculture: "Agriculture",
    },
    levelLabels: {
      federal: { label: "Federal", className: "bg-red-100 text-red-700" },
      provincial: { label: "Quebec", className: "bg-blue-100 text-blue-700" },
      municipal: { label: "Municipal", className: "bg-green-100 text-green-700" },
    },
  },
};

const dictionaries: Record<Locale, SiteDictionary> = {
  fr,
  en,
};

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale];
}
