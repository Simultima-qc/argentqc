import type { Locale } from "@/i18n/routing";

export interface HomeDictionary {
  metadata: {
    title: string;
    description: string;
  };
  badge: string;
  title: string;
  description: string;
  proofLine: string;
  primaryCta: string;
  ctaMeta: string;
  stickyCta: string;
  lossTitle: string;
  lossItems: string[];
  lossConclusion: string;
  lossCta: string;
  examplesTitle: string;
  examplesSubtitle: string;
  examplesRecoveredLabel: string;
  examplesCta: string;
  examplesCtaBlockTitle: string;
  examplesCtaBlockSubtext: string;
  examples: Array<{
    profile: string;
    revenue: string;
    amount: string;
    description: string;
  }>;
  positioningTitle: string;
  positioningText: string;
  pilaresTitle: string;
  pilaresSubtitle: string;
  pilaresExploreLabel: string;
  piliers: Array<{ label: string; desc: string }>;
  scenariosTitle: string;
  scenariosSubtitle: string;
  scenariosCta: string;
  scenarios: Array<{ emoji: string; profil: string; detail: string; gain: string }>;
  toolBadge: string;
  toolTitle: string;
  toolDescription: string;
  toolBenefits: string[];
  toolCta: string;
  stepsTitle: string;
  steps: Array<{
    number: string;
    title: string;
    text: string;
  }>;
  topicsTitle: string;
  topicsDescription: string;
  topicsLabels: string[];
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
        id: "enfants" | "renovation" | "retraite" | "etudiant";
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
  profileLabel: string;
  actionPlanTitle: string;
  guidesTitle: string;
  profileChips: {
    owner: string;
    renter: string;
    single: string;
    couple: string;
    family: string;
    renovation: string;
    ev: string;
    retirement: string;
  };
  revenueLabels: Record<string, string>;
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
    badge: "100 % gratuit — aucune inscription",
    title: "Récupérez jusqu'à plusieurs milliers de dollars au Québec",
    description:
      "Crédits, impôts, dépenses et stratégies : découvrez exactement quoi faire avec votre argent selon votre situation.",
    proofLine: "En moyenne, nos utilisateurs identifient entre 1 000 $ et 5 000 $ par année.",
    primaryCta: "Voir combien je peux récupérer",
    ctaMeta: "2 minutes · estimation personnalisée · aucune donnée conservée",
    stickyCta: "Calculer mes aides →",
    lossTitle: "Ce que vous perdez en ce moment",
    lossItems: [
      "Crédits et aides non réclamés",
      "Mauvaises décisions REER vs CELI",
      "Dépenses trop élevées (internet, assurances, etc.)",
    ],
    lossConclusion: "La majorité des Québécois laissent de l'argent sur la table sans le savoir.",
    lossCta: "Voir ce que je peux récupérer",
    examplesTitle: "Exemples réels de montants récupérés",
    examplesSubtitle: "Des résultats concrets pour des profils réels",
    examplesRecoveredLabel: "récupérés",
    examplesCta: "Voir des exemples similaires à ma situation",
    examplesCtaBlockTitle: "Ces montants sont possibles selon votre situation",
    examplesCtaBlockSubtext: "Découvrez ce que vous pouvez récupérer en 2 minutes",
    examples: [
      {
        profile: "Famille avec 2 enfants",
        revenue: "revenu ~90 000 $",
        amount: "9 800 $",
        description: "Allocation famille, ACE, crédit solidarité, optimisation REER",
      },
      {
        profile: "Propriétaire qui rénove",
        revenue: "subventions disponibles",
        amount: "16 700 $",
        description: "Rénoclimat, thermopompe, isolation, crédit écorénov",
      },
      {
        profile: "Aîné admissible",
        revenue: "65 ans et plus",
        amount: "14 000 $",
        description: "Programmes et soutien disponibles selon votre situation",
      },
    ],
    positioningTitle: "Plus qu'un site d'information",
    positioningText:
      "Les sites gouvernementaux vous expliquent les programmes. Ici, vous voyez concrètement ce que ça donne dans votre situation et quoi faire.",
    pilaresTitle: "Optimisez votre argent, pas juste vos crédits",
    pilaresSubtitle: "Cinq domaines pour agir concrètement sur votre situation financière",
    pilaresExploreLabel: "Explorer →",
    piliers: [
      { label: "Aides financières", desc: "Trouvez les crédits et subventions que vous pouvez réellement obtenir" },
      { label: "Impôts", desc: "Réduisez ce que vous payez et optimisez vos déclarations" },
      { label: "Épargne & retraite", desc: "REER, CELI, décaissement : prenez les bonnes décisions" },
      { label: "Dépenses", desc: "Internet, assurances et autres : réduisez vos coûts récurrents" },
      { label: "Stratégies financières", desc: "Priorisez les bonnes actions selon votre situation" },
    ],
    scenariosTitle: "Voyez exactement quoi faire selon votre situation",
    scenariosSubtitle: "Cliquez sur le profil qui vous ressemble le plus",
    scenariosCta: "Voir mon scénario",
    scenarios: [
      { emoji: "👨‍👩‍👧‍👦", profil: "Famille avec 2 enfants", detail: "90 000 $", gain: "+ 3 200 $/an" },
      { emoji: "👤", profil: "Célibataire locataire", detail: "50 000 $", gain: "+ 4 681 $/an" },
      { emoji: "👫", profil: "Couple sans enfant", detail: "120 000 $", gain: "+ 1 220 $/an" },
      { emoji: "🏠", profil: "Propriétaire avec hypothèque", detail: "projet de rénovation", gain: "+ 15 000 $ en subventions" },
      { emoji: "🧓", profil: "Pré-retraite", detail: "55 ans", gain: "6 000 $ optimisés" },
    ],
    toolBadge: "Outil gratuit",
    toolTitle: "Obtenez un plan personnalisé en 2 minutes",
    toolDescription: "Répondez à quelques questions et obtenez :",
    toolBenefits: [
      "une estimation des montants récupérables",
      "des actions concrètes à prioriser",
      "des recommandations adaptées à votre situation",
    ],
    toolCta: "Lancer mon diagnostic",
    stepsTitle: "Comment ça fonctionne",
    steps: [
      {
        number: "1",
        title: "Vous répondez à quelques questions",
        text: "Logement, revenu, famille, retraite et projets de rénovation.",
      },
      {
        number: "2",
        title: "Nous analysons votre situation",
        text: "La logique met en correspondance vos réponses avec les critères de 2026.",
      },
      {
        number: "3",
        title: "Vous obtenez des résultats concrets et actionnables",
        text: "Montants estimés, actions à prioriser et liens officiels.",
      },
    ],
    topicsTitle: "Explorer par thème",
    topicsDescription:
      "Consultez directement nos principaux thèmes pour comparer les options, comprendre les programmes et trouver les pages les plus utiles.",
    topicsLabels: ["Budget", "Impôts", "Retraite", "Assurances", "Internet", "Déménagement"],
    footerDisclaimer:
      "Outil informatif non affilié au gouvernement. Les montants sont des estimations à valider selon votre situation.",
  },
  questionnaire: {
    metadata: {
      title: "Questionnaire | ArgentQC.ca",
      description:
        "Répondez à 9 questions pour estimer les aides gouvernementales et crédits d'impôt qui peuvent s'appliquer à votre situation.",
    },
    progressLabel: "Question",
    previousQuestion: "Question précédente",
    answersNotSaved: "Vos réponses ne sont pas enregistrées",
    yes: "Oui",
    no: "Non",
    steps: [
      {
        id: "statut_logement",
        question: "Êtes-vous propriétaire ou locataire ?",
        type: "choix",
        options: [
          { value: "proprietaire", label: "Propriétaire" },
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
        question: "Avez-vous des enfants de moins de 18 ans à charge ?",
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
        question: "Avez-vous ou prévoyez-vous un véhicule électrique ?",
        type: "choix",
        options: [
          { value: "oui", label: "Oui, j'en ai déjà un" },
          { value: "prevu", label: "Oui, j'en prévois un" },
          { value: "non", label: "Non" },
        ],
      },
      {
        id: "renovation",
        question: "Prévoyez-vous des travaux de rénovation ou d'amélioration énergétique ?",
        type: "oui_non",
      },
      {
        id: "retraite",
        question: "Êtes-vous à la retraite ou âgé de 65 ans et plus ?",
        type: "oui_non",
      },
      {
        id: "age",
        question: "Dans quelle tranche d'âge vous situez-vous ?",
        type: "choix",
        options: [
          { value: "18-30", label: "18 à 30 ans" },
          { value: "31-45", label: "31 à 45 ans" },
          { value: "46-65", label: "46 à 65 ans" },
          { value: "65+", label: "65 ans et plus" },
        ],
      },
      {
        id: "etudiant",
        question: "Êtes-vous actuellement aux études (CÉGEP, université, DEP, formation professionnelle) ?",
        type: "oui_non",
      },
    ],
  },
  results: {
    metadata: {
      title: "Vos résultats | ArgentQC.ca",
      description:
        "Consultez votre liste initiale de programmes gouvernementaux potentiellement admissibles selon vos réponses.",
    },
    restart: "Recommencer",
    summaryLabel: "Vous pourriez récupérer jusqu'à",
    programmesFound: {
      singular: "programme trouvé",
      plural: "programmes trouvés",
    },
    emptyState: {
      title: "Aucun programme trouvé",
      description:
        "Selon vos réponses actuelles, nous n'avons pas trouvé de programme correspondant dans ce périmètre.",
      cta: "Refaire le questionnaire",
    },
    eligibleLabel: "Vos programmes admissibles",
    adsLabel: "Publicite",
    conditionsTitle: "Conditions",
    applyCta: "Voir la page officielle",
    recalculateText: "Votre situation a changé ? Recalculez vos aides.",
    recalculateCta: "Refaire le questionnaire",
    estimateDisclaimer:
      "Les montants affichés sont des estimations à titre informatif. L'admissibilité finale dépend des critères officiels de chaque programme.",
    footerDisclaimer: "Outil informatif non affilié au gouvernement.",
    categoryLabels: {
      renovation: "Rénovation",
      energie: "Énergie",
      famille: "Famille",
      transport: "Transport",
      logement: "Logement",
      credits_impot: "Crédits d'impôt",
      sante: "Santé et aînés",
      agriculture: "Agriculture",
    },
    levelLabels: {
      federal: { label: "Federal", className: "bg-red-100 text-red-700" },
      provincial: { label: "Provincial", className: "bg-blue-100 text-blue-700" },
      municipal: { label: "Municipal", className: "bg-green-100 text-green-700" },
    },
    profileLabel: "Votre profil",
    actionPlanTitle: "Par où commencer",
    guidesTitle: "Guides utiles selon votre profil",
    profileChips: {
      owner: "🏠 Propriétaire",
      renter: "🔑 Locataire",
      single: "🧑 Seul(e)",
      couple: "👫 Couple",
      family: "👨‍👩‍👧 Famille",
      renovation: "🔨 Rénovation",
      ev: "⚡ VÉ",
      retirement: "🏖️ Retraite",
    },
    revenueLabels: {
      "0-30000": "< 30 k$",
      "30000-50000": "30–50 k$",
      "50000-75000": "50–75 k$",
      "75000-100000": "75–100 k$",
      "100000+": "> 100 k$",
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
    badge: "100% free — no sign-up required",
    title: "Recover thousands of dollars you may be leaving on the table in Quebec",
    description:
      "Credits, taxes, expenses and strategies: find out exactly what to do with your money based on your situation.",
    proofLine: "On average, our users identify between $1,000 and $5,000 per year.",
    primaryCta: "See how much I can recover",
    ctaMeta: "2 minutes · personalized estimate · no data stored",
    stickyCta: "Calculate my benefits →",
    lossTitle: "What you're losing right now",
    lossItems: [
      "Unclaimed credits and benefits",
      "Wrong decisions between RRSP vs TFSA",
      "Overpaying on internet, insurance, and more",
    ],
    lossConclusion: "Most Quebecers leave money on the table without knowing it.",
    lossCta: "See what I can recover",
    examplesTitle: "Real examples of recovered amounts",
    examplesSubtitle: "Concrete results for real profiles",
    examplesRecoveredLabel: "recovered",
    examplesCta: "See examples similar to my situation",
    examplesCtaBlockTitle: "These amounts are possible based on your situation",
    examplesCtaBlockSubtext: "Find out what you can recover in 2 minutes",
    examples: [
      {
        profile: "Family with 2 children",
        revenue: "~$90,000 income",
        amount: "$9,800",
        description: "Family allowance, CCB, solidarity tax credit, RRSP optimization",
      },
      {
        profile: "Homeowner renovating",
        revenue: "available grants",
        amount: "$16,700",
        description: "RenoClimat, heat pump, insulation, EcoRénov credit",
      },
      {
        profile: "Eligible senior",
        revenue: "65 and over",
        amount: "$14,000",
        description: "Programs and support available based on your situation",
      },
    ],
    positioningTitle: "More than an information website",
    positioningText:
      "Government websites explain the programs. Here, you see concretely what it means for your situation and what to do.",
    pilaresTitle: "Optimize your money, not just your credits",
    pilaresSubtitle: "Five areas to take concrete action on your financial situation",
    pilaresExploreLabel: "Explore →",
    piliers: [
      { label: "Benefits", desc: "Find the credits and grants you can actually receive" },
      { label: "Taxes", desc: "Reduce what you pay and optimize your returns" },
      { label: "Savings & retirement", desc: "RRSP, TFSA, withdrawals: make the right decisions" },
      { label: "Expenses", desc: "Internet, insurance and more: cut your recurring costs" },
      { label: "Financial strategies", desc: "Prioritize the right moves for your situation" },
    ],
    scenariosTitle: "See exactly what to do based on your situation",
    scenariosSubtitle: "Click on the profile that best matches yours",
    scenariosCta: "See my scenario",
    scenarios: [
      { emoji: "👨‍👩‍👧‍👦", profil: "Family with 2 kids", detail: "$90,000", gain: "+ $3,200/yr" },
      { emoji: "👤", profil: "Single renter", detail: "$50,000", gain: "+ $4,681/yr" },
      { emoji: "👫", profil: "Couple, no kids", detail: "$120,000", gain: "+ $1,220/yr" },
      { emoji: "🏠", profil: "Homeowner with mortgage", detail: "renovation project", gain: "+ $15,000 in grants" },
      { emoji: "🧓", profil: "Pre-retirement", detail: "55 years old", gain: "$6,000 optimized" },
    ],
    toolBadge: "Free tool",
    toolTitle: "Get a personalized plan in 2 minutes",
    toolDescription: "Answer a few questions and get:",
    toolBenefits: [
      "an estimate of recoverable amounts",
      "concrete actions to prioritize",
      "recommendations tailored to your situation",
    ],
    toolCta: "Start my diagnosis",
    stepsTitle: "How it works",
    steps: [
      {
        number: "1",
        title: "You answer a few questions",
        text: "Housing, income, family, retirement, and renovation plans.",
      },
      {
        number: "2",
        title: "We analyze your situation",
        text: "The logic matches your answers against 2026 eligibility rules.",
      },
      {
        number: "3",
        title: "You get concrete, actionable results",
        text: "Estimated amounts, actions to prioritize, and official source links.",
      },
    ],
    topicsTitle: "Browse by topic",
    topicsDescription:
      "Go straight to the main topics to compare options, understand the programs, and find the most useful guides faster.",
    topicsLabels: ["Budget", "Taxes", "Retirement", "Insurance", "Internet", "Moving"],
    footerDisclaimer:
      "Informational tool only, not affiliated with the government. Amounts are estimates to be validated based on your situation.",
  },
  questionnaire: {
    metadata: {
      title: "Questionnaire | ArgentQC.ca",
      description:
        "Answer 9 questions to estimate which government benefits and tax credits may apply to your situation.",
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
      {
        id: "etudiant",
        question: "Are you currently a student in CEGEP, university, vocational training, or a professional program?",
        type: "oui_non",
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
    profileLabel: "Your profile",
    actionPlanTitle: "Where to start",
    guidesTitle: "Relevant guides for your profile",
    profileChips: {
      owner: "🏠 Owner",
      renter: "🔑 Renter",
      single: "🧑 Single",
      couple: "👫 Couple",
      family: "👨‍👩‍👧 Family",
      renovation: "🔨 Renovation",
      ev: "⚡ EV",
      retirement: "🏖️ Retirement",
    },
    revenueLabels: {
      "0-30000": "< $30k",
      "30000-50000": "$30–50k",
      "50000-75000": "$50–75k",
      "75000-100000": "$75–100k",
      "100000+": "> $100k",
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
