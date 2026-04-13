import type { Locale, RouteKey } from "@/i18n/routing";

type SubguideRouteKey = Extract<RouteKey, "budgetCalculator" | "budgetCostOfLiving" | "budgetHousingAllowance" | "budgetSolidarityCredit" | "taxesDeadlines" | "taxesSoftware" | "taxesRefund" | "internetComparator" | "retirementFhsa" | "retirementRrq" | "retirementRrsp" | "retirementRrspTransfer" | "retirementTfsa" | "insuranceAuto" | "insuranceComparator" | "insuranceHome" | "insuranceLife" | "movingChecklist" | "movingCost" | "movingMontreal">;

export interface StaticSubguideDictionary {
  routeKey: Extract<SubguideRouteKey, "taxesDeadlines" | "taxesRefund">;
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  intro: string;
  tableTitle: string;
  tableHeaders: [string, string, string];
  faqsTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  totalLabel: string;
  cardsLabel: string;
  timelineLabel: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface TaxSoftwareDictionary {
  routeKey: Extract<SubguideRouteKey, "taxesSoftware">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumb: [string, string, string];
  tableTitle: string;
  tableHeaders: [string, string, string, string, string];
  softwareRows: Array<{
    name: string;
    badge: string;
    emoji: string;
    quebec: string;
    federal: string;
    efile: string;
    profile: string;
    strengths: string;
    limits: string;
    color: string;
    textColor: string;
  }>;
  profileTitle: string;
  profileCards: Array<{ profile: string; recommendation: string; detail: string; emoji: string }>;
  clinicsTitle: string;
  clinics: string[];
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaLinks: Array<{ title: string; description: string; href: string; emoji: string }>;
  footerText: string;
  footerContact: string;
}

export interface BudgetCalculatorDictionary {
  routeKey: Extract<SubguideRouteKey, "budgetCalculator">;
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumb: [string, string, string];
  privacyTitle: string;
  privacyText: string;
  incomeLabel: string;
  incomePlaceholder: string;
  expensesTitle: string;
  totalExpensesLabel: string;
  calculateLabel: string;
  resultsTitle: string;
  revenueCard: string;
  expensesCard: string;
  balanceCard: string;
  balancedTitle: string;
  balancedGood: string;
  balancedTight: string;
  deficitTitle: string;
  deficitText: string;
  chartTitle: string;
  detailsTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  resetLabel: string;
  relatedBudgetTitle: string;
  relatedBudgetText: string;
  relatedMovingTitle: string;
  relatedMovingText: string;
  footerText: string;
  footerContact: string;
  emptyValue: string;
  lineItems: Array<{ key: string; label: string; emoji: string; placeholder: string; color: string }>;
}

export interface BudgetCostOfLivingDictionary {
  routeKey: Extract<SubguideRouteKey, "budgetCostOfLiving">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel: string;
  ctaNote: string;
  profilesTitle: string;
  profiles: Array<{ profile: string; income: string; expenses: string; support: string; emoji: string }>;
  expensesTitle: string;
  expenses: Array<{
    category: string;
    emoji: string;
    solo: string;
    family: string;
    note: string;
    supports: Array<{ label: string; href: string }>;
  }>;
  relatedTitle: string;
  relatedLinks: Array<{ title: string; description: string; href: string; emoji: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  closingTitle: string;
  closingText: string;
  closingCta: string;
  closingNote: string;
  footerText: string;
  footerContact: string;
}

export interface InternetComparatorDictionary {
  routeKey: Extract<SubguideRouteKey, "internetComparator">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  filterTitle: string;
  budgetLabel: string;
  anyBudgetLabel: string;
  speedLabel: string;
  connectionLabel: string;
  contractOnlyLabel: string;
  sortLabel: string;
  resultCountLabel: string;
  bestResultLabel: string;
  bestPriceLabel: string;
  bestSpeedLabel: string;
  noContractLabel: string;
  pricePerMonthLabel: string;
  downloadLabel: string;
  uploadLabel: string;
  contractLabel: string;
  noContractValue: string;
  modemIncludedLabel: string;
  modemNotIncludedLabel: string;
  viewOfferLabel: string;
  introSectionsTitle: string;
  introParagraphs: string[];
  relatedTitle: string;
  relatedLinks: Array<{ title: string; description: string; href: string; emoji: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  footerText: string;
  footerContact: string;
}

export interface RetirementRrqDictionary {
  routeKey: Extract<SubguideRouteKey, "retirementRrq">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  ageCardsTitle: string;
  ageStartLabel: string;
  averageLabel: string;
  maximumLabel: string;
  comparisonTitle: string;
  comparisonHeaders: [string, string, string];
  contributionTitle: string;
  salaryLabel: string;
  employeeContributionLabel: string;
  totalContributionLabel: string;
  faqsTitle: string;
}

export interface RetirementFhsaDictionary {
  routeKey: Extract<SubguideRouteKey, "retirementFhsa">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumb: [string, string, string];
  introTitle: string;
  introParagraphs: string[];
  highlights: string[];
  annualCapLabel: string;
  lifetimeCapLabel: string;
  annualCapValue: string;
  lifetimeCapValue: string;
  annualCapNote: string;
  lifetimeCapNote: string;
  rulesTitle: string;
  rules: Array<{ title: string; value: string; detail: string; emoji: string }>;
  strategyTitle: string;
  strategyIntro: string;
  strategyRows: Array<{ label: string; value: string }>;
  strategyTotalLabel: string;
  strategyTotalValue: string;
  strategyLinkLabel: string;
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonHeaders: [string, string, string, string];
  comparisonRows: Array<{ criteria: string; fhsa: string; tfsa: string; rrsp: string }>;
  calculatorTitle: string;
  calculatorIntro: string;
  calculator: {
    annualContributionLabel: string;
    annualContributionMin: string;
    annualContributionMax: string;
    estimatedReturnLabel: string;
    estimatedReturnLow: string;
    estimatedReturnHigh: string;
    estimatedReturnHelp: string;
    contributionYearsLabel: string;
    contributionYearsMin: string;
    contributionYearsMax: string;
    resultsLabel: string;
    totalContributedLabel: string;
    withGrowthLabel: string;
    growthGeneratedLabel: string;
    taxSavingsLabel: string;
    capReachedLabel: string;
    readyToBuyLabel: string;
    capReachedValue: string;
    estimateNote: string;
  };
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaLinks: Array<{ title: string; description: string; href: string; emoji: string }>;
  footerText: string;
  footerContact: string;
}

export interface RetirementRrspDictionary {
  routeKey: Extract<SubguideRouteKey, "retirementRrsp">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  basicsTitle: string;
  basicsPoints: Array<{ title: string; text: string }>;
  capTitle: string;
  capValue: string;
  capText: string;
  refundTableTitle: string;
  refundTableHeaders: [string, string, string, string];
  comparisonTitle: string;
  comparisonHeaders: [string, string, string];
  specialUsesTitle: string;
  specialUses: Array<{ title: string; points: string[] }>;
  mistakesTitle: string;
  mistakes: Array<{ title: string; text: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface RetirementTfsaDictionary {
  routeKey: Extract<SubguideRouteKey, "retirementTfsa">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  basicsTitle: string;
  basicsBullets: string[];
  capTitle: string;
  capValue: string;
  capText: string;
  rightsTitle: string;
  rightsHeaders: [string, string, string];
  placementsTitle: string;
  placements: Array<{ title: string; text: string; risk: string }>;
  usesTitle: string;
  uses: Array<{ title: string; horizon: string; text: string }>;
  mistakesTitle: string;
  mistakes: Array<{ title: string; text: string; alert?: boolean }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface InsuranceAutoDictionary {
  routeKey: Extract<SubguideRouteKey, "insuranceAuto">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  regimeTitle: string;
  regimeHeaders: [string, string, string, string];
  coveragesTitle: string;
  coverages: Array<{ name: string; text: string; mandatory?: boolean }>;
  factorsTitle: string;
  factors: Array<{ title: string; impact: string; text: string }>;
  pricingTitle: string;
  pricingHeaders: [string, string, string, string];
  pricingRows: Array<{ profile: string; montreal: string; suburb: string; regions: string }>;
  tipsTitle: string;
  tips: Array<{ title: string; text: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface InsuranceComparatorDictionary {
  routeKey: Extract<SubguideRouteKey, "insuranceComparator">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumb: [string, string, string];
  compareTypeLabel: string;
  compareOptions: { home: string; auto: string };
  profileHomeTitle: string;
  profileAutoTitle: string;
  homeFields: {
    housing: string;
    status: string;
    region: string;
    contents: string;
  };
  autoFields: {
    age: string;
    vehicle: string;
    region: string;
    usage: string;
  };
  selectPlaceholder: string;
  homeOptions: {
    housing: Array<{ value: string; label: string }>;
    status: Array<{ value: string; label: string }>;
    region: Array<{ value: string; label: string }>;
    contents: Array<{ value: string; label: string }>;
  };
  autoOptions: {
    age: Array<{ value: string; label: string }>;
    vehicle: Array<{ value: string; label: string }>;
    region: Array<{ value: string; label: string }>;
    usage: Array<{ value: string; label: string }>;
  };
  resultsTitle: string;
  bestEstimateLabel: string;
  estimateBadge: string;
  monthlySuffix: string;
  realQuoteLabel: string;
  estimateDisclaimer: string;
  emptyState: string;
  detailedGuidesTitle: string;
  detailedGuides: Array<{ title: string; description: string; href: string; emoji: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  footerText: string;
  footerContact: string;
}

export interface InsuranceHomeDictionary {
  routeKey: Extract<SubguideRouteKey, "insuranceHome">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  comparisonTitle: string;
  comparisonHeaders: [string, string, string];
  comparisonRows: Array<{ aspect: string; renter: string; owner: string }>;
  coverageTitle: string;
  coverageRows: Array<{ risk: string; covered: boolean; note: string }>;
  pricingTitle: string;
  pricingHeaders: [string, string, string, string];
  pricingRows: Array<{ housing: string; insuredValue: string; monthlyPremium: string; note: string }>;
  inventoryTitle: string;
  inventoryIntro: string;
  inventoryRows: Array<{ category: string; examples: string; range: string }>;
  inventoryTip: string;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface InsuranceLifeDictionary {
  routeKey: Extract<SubguideRouteKey, "insuranceLife">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  whyTitle: string;
  whyPoints: string[];
  comparisonTitle: string;
  comparisonHeaders: [string, string, string];
  comparisonRows: Array<{ criteria: string; term: string; permanent: string }>;
  needsTitle: string;
  needsIntro: string;
  needsRows: Array<{ profile: string; target: string; note: string }>;
  providersTitle: string;
  providers: Array<{ name: string; type: string; note: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface MovingChecklistDictionary {
  routeKey: Extract<SubguideRouteKey, "movingChecklist">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  progressLabel: string;
  completedLabel: string;
  privacyNote: string;
  resetLabel: string;
  resourcesTitle: string;
  sectionCounterLabel: string;
  ctaCostTitle: string;
  ctaCostText: string;
  ctaInsuranceTitle: string;
  ctaInsuranceText: string;
  sections: Array<{
    title: string;
    emoji: string;
    tasks: Array<{ id: string; text: string; note?: string }>;
  }>;
  resources: Array<{ name: string; description: string; href: string; emoji: string }>;
}

export interface MovingCostDictionary {
  routeKey: Extract<SubguideRouteKey, "movingCost">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  tableTitle: string;
  tableHeaders: [string, string, string, string];
  tableRows: Array<{ housing: string; diy: string; professional: string; duration: string }>;
  comparisonTitle: string;
  comparisonCards: Array<{ title: string; prosTitle: string; pros: string[]; consTitle: string; cons: string[] }>;
  hiddenCostsTitle: string;
  hiddenCosts: Array<{ item: string; range: string; note: string }>;
  savingsTitle: string;
  savings: Array<{ title: string; text: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaChecklistTitle: string;
  ctaChecklistText: string;
  ctaInsuranceTitle: string;
  ctaInsuranceText: string;
}

export interface MovingMontrealDictionary {
  routeKey: Extract<SubguideRouteKey, "movingMontreal">;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  intro: string;
  alertTitle: string;
  alertText: string;
  rentsTitle: string;
  rentsHeaders: [string, string, string, string];
  rentsRows: Array<{ district: string; studio: string; fourHalf: string; fiveHalf: string; note: string }>;
  profilesTitle: string;
  profiles: Array<{ profile: string; districts: string; reason: string }>;
  localTipsTitle: string;
  localTips: Array<{ title: string; text: string }>;
  resourcesTitle: string;
  resources: Array<{ name: string; description: string; href: string }>;
  faqsTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaChecklistTitle: string;
  ctaChecklistText: string;
  ctaCostTitle: string;
  ctaCostText: string;
}

export const localizedSubguideRouteKeys = ["budgetCalculator", "budgetCostOfLiving", "budgetHousingAllowance", "budgetSolidarityCredit", "taxesDeadlines", "taxesSoftware", "taxesRefund", "internetComparator", "retirementFhsa", "retirementRrq", "retirementRrsp", "retirementRrspTransfer", "retirementTfsa", "insuranceAuto", "insuranceComparator", "insuranceHome", "insuranceLife", "movingChecklist", "movingCost", "movingMontreal"] as const;

const frStaticSubguides: Record<Extract<SubguideRouteKey, "taxesDeadlines" | "taxesRefund">, StaticSubguideDictionary> = {
  taxesDeadlines: {
    routeKey: "taxesDeadlines",
    metadata: {
      title: "Date limite impots Quebec 2026 | ArgentQC.ca",
      description:
        "Dates limites pour produire vos impots au Quebec en 2026, avec les penalites de retard et les points a surveiller entre l'ARC et Revenu Quebec.",
    },
    eyebrow: "Guide impots Quebec 2026",
    title: "Dates limites d'impot au Quebec en 2026",
    intro:
      "Une vue simple des echeances qui comptent vraiment pour produire et payer sans confusion entre le federal et le provincial.",
    tableTitle: "Tableau des dates limites 2026",
    tableHeaders: ["Situation", "ARC (federal)", "Revenu Quebec"],
    cardsLabel: "Penalites",
    timelineLabel: "Calendrier utile",
    faqsTitle: "Questions frequentes",
    ctaTitle: "Verifier aussi les programmes auxquels vous pourriez avoir droit",
    ctaText:
      "Les echeances fiscales ne disent pas tout. Le questionnaire ajoute la couche credits, allocations et aides publiques a votre situation.",
    ctaLabel: "Trouver mes aides",
    totalLabel: "Total",
    faqs: [
      {
        question: "La date limite du 30 avril s'applique-t-elle aussi au Quebec ?",
        answer:
          "Oui. Pour la plupart des salaries, le 30 avril 2026 reste la date limite de production et de paiement pour les deux declarations.",
      },
      {
        question: "Le 15 juin laisse-t-il plus de temps pour payer ?",
        answer:
          "Non. L'extension au 15 juin vise surtout la production pour les travailleurs autonomes. Le solde, lui, reste generalement exigible au printemps.",
      },
      {
        question: "Si j'attends un remboursement, est-ce grave de produire plus tard ?",
        answer:
          "Vous n'aurez pas la meme pression qu'un solde a payer, mais vous retardez votre remboursement et certains calculs de credits relies a votre declaration.",
      },
    ],
  },
  taxesRefund: {
    routeKey: "taxesRefund",
    metadata: {
      title: "Remboursement d'impot Quebec 2026 | ArgentQC.ca",
      description:
        "Delais de remboursement, suivi du dossier fiscal et credits souvent oublies pour mieux comprendre votre retour d'impot au Quebec en 2026.",
    },
    eyebrow: "Guide impots Quebec 2026",
    title: "Remboursement d'impot au Quebec en 2026",
    intro:
      "Une base claire pour comprendre les delais de remboursement, suivre votre dossier et reperer les credits qui changent vraiment le montant final.",
    tableTitle: "Delais moyens de remboursement",
    tableHeaders: ["Methode", "ARC (federal)", "Revenu Quebec"],
    cardsLabel: "Causes frequentes de retard",
    timelineLabel: "Credits souvent oublies",
    faqsTitle: "Questions frequentes",
    ctaTitle: "Croiser remboursement et admissibilite",
    ctaText:
      "Le remboursement d'impot ne dit pas tout. Le questionnaire aide aussi a reperer d'autres programmes qui peuvent ameliorer votre tresorerie.",
    ctaLabel: "Trouver mes aides",
    totalLabel: "Total",
    faqs: [
      {
        question: "Comment verifier si mon remboursement a ete emis ?",
        answer:
          "Le plus simple reste Mon dossier ARC et Mon dossier Revenu Quebec. Vous y voyez l'etat du traitement, la date d'emission et les ajustements eventuels.",
      },
      {
        question: "Le depot direct peut-il encore etre active apres la production ?",
        answer:
          "Oui, tant que le remboursement n'a pas encore ete emis. Mieux vaut toutefois mettre l'information bancaire a jour avant de produire.",
      },
      {
        question: "Pourquoi mon remboursement peut-il etre plus bas que prevu ?",
        answer:
          "Un feuillet manquant, un credit refuse, une dette gouvernementale compensee ou une correction apres verification peuvent reduire le montant final.",
      },
    ],
  },
};

const enStaticSubguides: Record<Extract<SubguideRouteKey, "taxesDeadlines" | "taxesRefund">, StaticSubguideDictionary> = {
  taxesDeadlines: {
    routeKey: "taxesDeadlines",
    metadata: {
      title: "Quebec tax deadlines for 2026 | ArgentQC.ca",
      description:
        "Key Quebec tax filing deadlines for 2026, including late-filing penalties and the difference between CRA and Revenu Quebec timelines.",
    },
    eyebrow: "Quebec taxes guide 2026",
    title: "Quebec tax deadlines in 2026",
    intro:
      "A clear snapshot of the dates that matter most when you need to file and pay without mixing up federal and provincial timelines.",
    tableTitle: "2026 filing deadline table",
    tableHeaders: ["Situation", "CRA (federal)", "Revenu Quebec"],
    cardsLabel: "Late penalties",
    timelineLabel: "Useful calendar",
    faqsTitle: "Frequently asked questions",
    ctaTitle: "Also check which programs may apply to your situation",
    ctaText:
      "Tax deadlines are only part of the picture. The questionnaire adds refundable credits, benefits, and public support programs.",
    ctaLabel: "Find my programs",
    totalLabel: "Total",
    faqs: [
      {
        question: "Does the April 30 deadline also apply in Quebec?",
        answer:
          "Yes. For most employees, April 30, 2026 remains the key filing and payment deadline for both the federal and Quebec returns.",
      },
      {
        question: "Does the June 15 extension also extend the payment deadline?",
        answer:
          "No. The June 15 extension mainly applies to filing for self-employed taxpayers. Amounts owing are still generally due earlier in the spring.",
      },
      {
        question: "If I am expecting a refund, is it still important to file on time?",
        answer:
          "Yes. You may avoid late penalties, but you delay your refund and can also delay benefit calculations tied to your return.",
      },
    ],
  },
  taxesRefund: {
    routeKey: "taxesRefund",
    metadata: {
      title: "Quebec tax refund timing in 2026 | ArgentQC.ca",
      description:
        "Average Quebec tax refund timelines, status tracking, and commonly missed credits that can materially change your refund in 2026.",
    },
    eyebrow: "Quebec taxes guide 2026",
    title: "Quebec tax refunds in 2026",
    intro:
      "A practical overview of refund timing, refund tracking, and the credits that most often change the final amount.",
    tableTitle: "Average refund timelines",
    tableHeaders: ["Method", "CRA (federal)", "Revenu Quebec"],
    cardsLabel: "Common delay drivers",
    timelineLabel: "Frequently missed credits",
    faqsTitle: "Frequently asked questions",
    ctaTitle: "Cross-check your refund with other available programs",
    ctaText:
      "A tax refund is only one part of the picture. The questionnaire can also reveal benefits and support programs that improve cash flow.",
    ctaLabel: "Find my programs",
    totalLabel: "Total",
    faqs: [
      {
        question: "How can I confirm that my refund was issued?",
        answer:
          "The most reliable way is through CRA My Account and Revenu Quebec's online account, where you can see processing status, issue date, and adjustments.",
      },
      {
        question: "Can I still set up direct deposit after filing?",
        answer:
          "Yes, as long as the refund has not already been issued. Still, it is better to update banking details before you file.",
      },
      {
        question: "Why is my refund lower than expected?",
        answer:
          "A missing slip, a denied credit, a government set-off, or a later reassessment can all lower the final refund amount.",
      },
    ],
  },
};

const frInsuranceComparator: InsuranceComparatorDictionary = {
  routeKey: "insuranceComparator",
  metadata: {
    title: "Comparateur assurance Quebec 2026 | ArgentQC.ca",
    description:
      "Comparer les estimations d'assurance habitation et auto au Quebec selon votre profil, avec reperes de prix, assureurs courants et liens vers de vraies soumissions.",
  },
  eyebrow: "Outil assurances Quebec 2026",
  title: "Comparateur assurance au Quebec",
  intro:
    "Un estimateur editorial pour cadrer les ordres de grandeur auto et habitation avant de demander des soumissions reelles aux assureurs les plus pertinents.",
  breadcrumb: ["Accueil", "Assurances", "Comparateur"],
  compareTypeLabel: "Quel type d'assurance voulez-vous comparer ?",
  compareOptions: { home: "Assurance habitation", auto: "Assurance auto" },
  profileHomeTitle: "Votre profil habitation",
  profileAutoTitle: "Votre profil auto",
  homeFields: {
    housing: "Type de logement",
    status: "Vous etes",
    region: "Region",
    contents: "Valeur des biens a assurer",
  },
  autoFields: {
    age: "Age du conducteur principal",
    vehicle: "Type de vehicule",
    region: "Region",
    usage: "Usage du vehicule",
  },
  selectPlaceholder: "Selectionner",
  homeOptions: {
    housing: [
      { value: "appartement", label: "Appartement" },
      { value: "maison", label: "Maison" },
      { value: "condo", label: "Condo" },
    ],
    status: [
      { value: "locataire", label: "Locataire" },
      { value: "proprietaire", label: "Proprietaire" },
    ],
    region: [
      { value: "montreal", label: "Montreal" },
      { value: "quebec", label: "Quebec (ville)" },
      { value: "laval", label: "Laval" },
      { value: "rive_sud", label: "Rive-Sud" },
      { value: "region", label: "Region (autre)" },
    ],
    contents: [
      { value: "bas", label: "< 20 000 $" },
      { value: "moyen", label: "20 000 a 40 000 $" },
      { value: "eleve", label: "40 000 a 60 000 $" },
      { value: "tres_eleve", label: "60 000 $+" },
    ],
  },
  autoOptions: {
    age: [
      { value: "jeune", label: "16 a 24 ans" },
      { value: "jeune_adulte", label: "25 a 34 ans" },
      { value: "adulte", label: "35 a 54 ans" },
      { value: "senior", label: "55 ans+" },
    ],
    vehicle: [
      { value: "berline", label: "Berline" },
      { value: "vus_compact", label: "VUS compact" },
      { value: "vus_grand", label: "VUS grand" },
      { value: "camionnette", label: "Camionnette" },
      { value: "electrique", label: "Electrique" },
    ],
    region: [
      { value: "montreal", label: "Montreal" },
      { value: "quebec", label: "Quebec (ville)" },
      { value: "laval", label: "Laval" },
      { value: "rive_sud", label: "Rive-Sud" },
      { value: "region", label: "Region (autre)" },
    ],
    usage: [
      { value: "faible", label: "Personnel (< 15 000 km/an)" },
      { value: "moyen", label: "Travail-domicile (15 000 a 25 000 km)" },
      { value: "eleve", label: "Kilometrage eleve (25 000 km+)" },
    ],
  },
  resultsTitle: "Estimations par assureur",
  bestEstimateLabel: "Meilleure estimation",
  estimateBadge: "Estimation",
  monthlySuffix: "/mois",
  realQuoteLabel: "Obtenir une soumission reelle",
  estimateDisclaimer:
    "Ces estimations sont indicatives et basees sur des moyennes editoriales du marche quebecois 2026. Les prix reels varient selon le dossier, l'historique et les protections choisies.",
  emptyState: "Remplissez tous les champs ci-dessus pour voir les estimations.",
  detailedGuidesTitle: "Guides detailles",
  detailedGuides: [
    { title: "Assurance auto", description: "Comprendre le regime Quebec, les couvertures et les prix.", href: "/fr/assurances/auto", emoji: "A1" },
    { title: "Assurance habitation", description: "Comparer locataire, condo et proprietaire.", href: "/fr/assurances/habitation", emoji: "A2" },
    { title: "Assurance vie", description: "Voir quand elle devient vraiment utile.", href: "/fr/assurances/vie", emoji: "A3" },
    { title: "Thème assurances", description: "Revenir à la vue d'ensemble du sujet.", href: "/fr/assurances", emoji: "A4" },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    {
      question: "Comment fonctionne ce comparateur ?",
      answer:
        "C'est un estimateur editorial a partir de profils types et de multiplicateurs regionaux. Il donne un ordre de grandeur, pas une tarification en temps reel.",
    },
    {
      question: "Le moins cher est-il toujours le meilleur choix ?",
      answer:
        "Non. Une prime plus basse peut cacher une franchise plus elevee, des exclusions plus dures ou un service moins adapte au dossier.",
    },
    {
      question: "Courtier ou assureur direct ?",
      answer:
        "Le direct peut aller vite sur un profil simple. Le courtier devient souvent utile quand il faut comparer plusieurs assureurs ou gerer un dossier moins standard.",
    },
  ],
  footerText: "Outil informatif non affilie aux assureurs cites. Verifiez toujours les conditions et tarifs directement aupres des assureurs.",
  footerContact: "Contactez-nous",
};

const enInsuranceComparator: InsuranceComparatorDictionary = {
  routeKey: "insuranceComparator",
  metadata: {
    title: "Quebec insurance comparator 2026 | ArgentQC.ca",
    description:
      "Compare home and auto insurance estimates in Quebec by profile, with market price ranges, major carriers, and links to real quote flows.",
  },
  eyebrow: "Quebec insurance tool 2026",
  title: "Insurance comparator for Quebec",
  intro:
    "An editorial estimator for framing home and auto insurance ranges before you request real quotes from the most relevant insurers.",
  breadcrumb: ["Home", "Insurance", "Comparator"],
  compareTypeLabel: "Which type of insurance do you want to compare?",
  compareOptions: { home: "Home insurance", auto: "Auto insurance" },
  profileHomeTitle: "Your home profile",
  profileAutoTitle: "Your auto profile",
  homeFields: {
    housing: "Housing type",
    status: "You are",
    region: "Region",
    contents: "Value of insured contents",
  },
  autoFields: {
    age: "Main driver age",
    vehicle: "Vehicle type",
    region: "Region",
    usage: "Vehicle usage",
  },
  selectPlaceholder: "Select",
  homeOptions: {
    housing: [
      { value: "appartement", label: "Apartment" },
      { value: "maison", label: "House" },
      { value: "condo", label: "Condo" },
    ],
    status: [
      { value: "locataire", label: "Renter" },
      { value: "proprietaire", label: "Owner" },
    ],
    region: [
      { value: "montreal", label: "Montreal" },
      { value: "quebec", label: "Quebec City" },
      { value: "laval", label: "Laval" },
      { value: "rive_sud", label: "South Shore" },
      { value: "region", label: "Region (other)" },
    ],
    contents: [
      { value: "bas", label: "< CAD 20,000" },
      { value: "moyen", label: "CAD 20,000 to 40,000" },
      { value: "eleve", label: "CAD 40,000 to 60,000" },
      { value: "tres_eleve", label: "CAD 60,000+" },
    ],
  },
  autoOptions: {
    age: [
      { value: "jeune", label: "16 to 24" },
      { value: "jeune_adulte", label: "25 to 34" },
      { value: "adulte", label: "35 to 54" },
      { value: "senior", label: "55+" },
    ],
    vehicle: [
      { value: "berline", label: "Sedan" },
      { value: "vus_compact", label: "Compact SUV" },
      { value: "vus_grand", label: "Large SUV" },
      { value: "camionnette", label: "Pickup truck" },
      { value: "electrique", label: "Electric vehicle" },
    ],
    region: [
      { value: "montreal", label: "Montreal" },
      { value: "quebec", label: "Quebec City" },
      { value: "laval", label: "Laval" },
      { value: "rive_sud", label: "South Shore" },
      { value: "region", label: "Region (other)" },
    ],
    usage: [
      { value: "faible", label: "Personal (< 15,000 km/year)" },
      { value: "moyen", label: "Commute (15,000 to 25,000 km)" },
      { value: "eleve", label: "High mileage (25,000 km+)" },
    ],
  },
  resultsTitle: "Estimated ranges by insurer",
  bestEstimateLabel: "Best estimate",
  estimateBadge: "Estimate",
  monthlySuffix: "/month",
  realQuoteLabel: "Get a real quote",
  estimateDisclaimer:
    "These estimates are indicative and based on 2026 Quebec editorial market averages. Real pricing varies with your file, claims history, and selected coverage.",
  emptyState: "Complete every field above to see the estimated ranges.",
  detailedGuidesTitle: "Detailed guides",
  detailedGuides: [
    { title: "Auto insurance", description: "Review the Quebec framework, coverages, and pricing logic.", href: "/en/insurance/auto", emoji: "A1" },
    { title: "Home insurance", description: "Compare renter, condo, and owner protection.", href: "/en/insurance/home", emoji: "A2" },
    { title: "Life insurance", description: "See when life coverage materially matters.", href: "/en/insurance/life", emoji: "A3" },
    { title: "Insurance topic", description: "Go back to the broader insurance overview.", href: "/en/insurance", emoji: "A4" },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    {
      question: "How does this comparator work?",
      answer:
        "It is an editorial estimator based on typical profiles and regional multipliers. It provides a range, not a live underwriting price.",
    },
    {
      question: "Is the cheapest option always the best choice?",
      answer:
        "No. A lower premium can come with higher deductibles, tighter exclusions, or a weaker fit for your claims profile.",
    },
    {
      question: "Broker or direct insurer?",
      answer:
        "Direct can be faster on a simple profile. A broker often becomes more useful when the case is less standard or when you want broader comparison.",
    },
  ],
  footerText: "Informational tool only. We are not affiliated with the insurers listed here. Verify terms and pricing directly with the insurers.",
  footerContact: "Contact us",
};

const frBudgetCostOfLiving: BudgetCostOfLivingDictionary = {
  routeKey: "budgetCostOfLiving",
  metadata: {
    title: "Cout de la vie au Quebec 2026 | ArgentQC.ca",
    description:
      "Repere du cout de la vie au Quebec en 2026: logement, epicerie, transport, sante, famille et leviers concrets pour reduire le budget mensuel.",
  },
  eyebrow: "Reference budget Quebec 2026",
  title: "Cout de la vie au Quebec en 2026",
  intro:
    "Un point de repere simple sur les grands postes qui font bouger un budget au Quebec, avec les ecarts entre personne seule et famille et les leviers qui reduisent vraiment la facture.",
  ctaLabel: "Trouver mes aides",
  ctaNote: "Gratuit · 2 minutes · estimation personnalisee",
  profilesTitle: "Budget selon votre profil",
  profiles: [
    { profile: "Personne seule a Montreal", income: "45 000 $", expenses: "2 800 $ / mois", support: "~1 200 $ / an", emoji: "P1" },
    { profile: "Couple sans enfant", income: "80 000 $", expenses: "4 200 $ / mois", support: "~800 $ / an", emoji: "P2" },
    { profile: "Famille avec 2 enfants", income: "70 000 $", expenses: "5 500 $ / mois", support: "~12 000 $ / an", emoji: "P3" },
    { profile: "Aine seul", income: "22 000 $", expenses: "2 000 $ / mois", support: "~14 000 $ / an", emoji: "P4" },
  ],
  expensesTitle: "Postes de depense a surveiller",
  expenses: [
    {
      category: "Logement",
      emoji: "B1",
      solo: "900 $ a 1 800 $",
      family: "1 400 $ a 2 500 $",
      note: "Montreal reste le point haut; Quebec et plusieurs regions peuvent etre 20 a 30 % moins cheres.",
      supports: [
        { label: "Questionnaire aides", href: "/fr/questionnaire" },
        { label: "Guide budget", href: "/fr/budget" },
      ],
    },
    {
      category: "Epicerie",
      emoji: "B2",
      solo: "350 $ a 500 $",
      family: "800 $ a 1 200 $",
      note: "Le budget alimentaire reste tres sensible a la taille du foyer et a la part de repas cuisines a domicile.",
      supports: [
        { label: "Questionnaire aides", href: "/fr/questionnaire" },
        { label: "Calculateur budget", href: "/fr/budget/calculateur" },
      ],
    },
    {
      category: "Enfants et garde",
      emoji: "B3",
      solo: "-",
      family: "200 $ a 1 500 $",
      note: "Le cout varie surtout selon le type de garde. Les places subventionnees changent fortement l'equation.",
      supports: [
        { label: "Questionnaire aides", href: "/fr/questionnaire" },
        { label: "Guide budget", href: "/fr/budget" },
      ],
    },
    {
      category: "Transport",
      emoji: "B4",
      solo: "150 $ a 800 $",
      family: "300 $ a 1 200 $",
      note: "Le saut se fait surtout entre transport collectif et voiture. Assurance, essence et entretien restent determinants.",
      supports: [
        { label: "Comparateur assurances", href: "/fr/assurances/comparateur" },
        { label: "Comparateur internet", href: "/fr/internet/comparateur" },
      ],
    },
    {
      category: "Sante",
      emoji: "B5",
      solo: "100 $ a 400 $",
      family: "200 $ a 800 $",
      note: "Medicaments, dentaire, lunettes et physio sortent vite du budget s'il n'y a pas de couverture collective.",
      supports: [
        { label: "Questionnaire aides", href: "/fr/questionnaire" },
        { label: "Comparateur assurances", href: "/fr/assurances/comparateur" },
      ],
    },
  ],
  relatedTitle: "Guides lies au cout de la vie",
  relatedLinks: [
    { title: "Calculateur budget", description: "Mettre vos postes de depense dans un budget mensuel concret.", href: "/fr/budget/calculateur", emoji: "L1" },
    { title: "Questionnaire aides", description: "Identifier credits, allocations et programmes selon votre profil.", href: "/fr/questionnaire", emoji: "L2" },
    { title: "Comparateur internet", description: "Revoir un poste telecom souvent surpaye.", href: "/fr/internet/comparateur", emoji: "L3" },
    { title: "Comparateur assurances", description: "Comparer les fourchettes auto et habitation.", href: "/fr/assurances/comparateur", emoji: "L4" },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "Combien coute la vie au Quebec pour une personne seule ?", answer: "Dans une grande ville comme Montreal, un budget realiste tourne souvent entre 2 500 $ et 3 500 $ par mois selon le logement et le transport." },
    { question: "Elever des enfants est-il beaucoup moins cher au Quebec ?", answer: "Le Quebec est plus favorable que plusieurs provinces grace aux services subventionnes et a certaines aides, mais le budget reste sensible a la garde, au logement et aux activites." },
    { question: "Le Quebec est-il moins cher que l'Ontario ?", answer: "Souvent oui sur le logement, la garde et certains services publics, mais pas necessairement sur tous les postes ou dans tous les quartiers." },
    { question: "Quelle est la meilleure facon de reduire le cout de la vie ?", answer: "Commencer par logement, transport, telecoms et aides publiques. Ce sont les quatre leviers qui changent le plus vite le reste du budget." },
  ],
  closingTitle: "Reduire le cout de la vie des maintenant",
  closingText: "Le plus utile est d'identifier vos postes lourds puis de croiser cela avec les aides et arbitrages concrets disponibles.",
  closingCta: "Commencer le questionnaire",
  closingNote: "Gratuit · 2 minutes · estimation personnalisee",
  footerText: "Montants indicatifs bases sur des reperes editoriaux 2026 et des ordres de grandeur utiles au Quebec.",
  footerContact: "Contactez-nous",
};

const enBudgetCostOfLiving: BudgetCostOfLivingDictionary = {
  routeKey: "budgetCostOfLiving",
  metadata: {
    title: "Cost of living in Quebec 2026 | ArgentQC.ca",
    description:
      "Quebec cost of living guide for 2026: housing, groceries, transport, health, family costs, and practical ways to lower a monthly budget.",
  },
  eyebrow: "Quebec budget reference 2026",
  title: "Cost of living in Quebec in 2026",
  intro:
    "A practical benchmark for the spending categories that shape a budget in Quebec, with ranges for solo households and families and the levers that matter most.",
  ctaLabel: "Find my programs",
  ctaNote: "Free · 2 minutes · personalized estimate",
  profilesTitle: "Budget by profile",
  profiles: [
    { profile: "Single adult in Montreal", income: "CAD 45,000", expenses: "CAD 2,800 / month", support: "~CAD 1,200 / year", emoji: "P1" },
    { profile: "Couple without children", income: "CAD 80,000", expenses: "CAD 4,200 / month", support: "~CAD 800 / year", emoji: "P2" },
    { profile: "Family with 2 children", income: "CAD 70,000", expenses: "CAD 5,500 / month", support: "~CAD 12,000 / year", emoji: "P3" },
    { profile: "Single senior", income: "CAD 22,000", expenses: "CAD 2,000 / month", support: "~CAD 14,000 / year", emoji: "P4" },
  ],
  expensesTitle: "Main spending categories to watch",
  expenses: [
    {
      category: "Housing",
      emoji: "B1",
      solo: "CAD 900 to 1,800",
      family: "CAD 1,400 to 2,500",
      note: "Montreal is usually the high point; Quebec City and many regions can be 20 to 30% cheaper.",
      supports: [
        { label: "Benefits questionnaire", href: "/en/questionnaire" },
        { label: "Budget topic", href: "/en/budget" },
      ],
    },
    {
      category: "Groceries",
      emoji: "B2",
      solo: "CAD 350 to 500",
      family: "CAD 800 to 1,200",
      note: "Food spend moves mainly with household size and how much cooking happens at home.",
      supports: [
        { label: "Benefits questionnaire", href: "/en/questionnaire" },
        { label: "Budget calculator", href: "/en/budget/calculator" },
      ],
    },
    {
      category: "Children and childcare",
      emoji: "B3",
      solo: "-",
      family: "CAD 200 to 1,500",
      note: "The range depends heavily on the type of childcare. Subsidized spaces change the math significantly.",
      supports: [
        { label: "Benefits questionnaire", href: "/en/questionnaire" },
        { label: "Budget topic", href: "/en/budget" },
      ],
    },
    {
      category: "Transportation",
      emoji: "B4",
      solo: "CAD 150 to 800",
      family: "CAD 300 to 1,200",
      note: "The biggest jump is usually between transit and car ownership. Insurance, fuel, and maintenance remain key drivers.",
      supports: [
        { label: "Insurance comparator", href: "/en/insurance/comparator" },
        { label: "Internet comparator", href: "/en/internet/comparator" },
      ],
    },
    {
      category: "Health",
      emoji: "B5",
      solo: "CAD 100 to 400",
      family: "CAD 200 to 800",
      note: "Medication, dental, glasses, and physio can quickly add up without employer coverage.",
      supports: [
        { label: "Benefits questionnaire", href: "/en/questionnaire" },
        { label: "Insurance comparator", href: "/en/insurance/comparator" },
      ],
    },
  ],
  relatedTitle: "Guides linked to cost of living",
  relatedLinks: [
    { title: "Budget calculator", description: "Turn your cost lines into a practical monthly budget.", href: "/en/budget/calculator", emoji: "L1" },
    { title: "Benefits questionnaire", description: "Identify credits, benefits, and support programs by profile.", href: "/en/questionnaire", emoji: "L2" },
    { title: "Internet comparator", description: "Review a telecom line that is often overpriced.", href: "/en/internet/comparator", emoji: "L3" },
    { title: "Insurance comparator", description: "Compare home and auto insurance ranges.", href: "/en/insurance/comparator", emoji: "L4" },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "How much does it cost to live in Quebec as a single adult?", answer: "In a city like Montreal, a realistic monthly budget often lands around CAD 2,500 to 3,500 depending on housing and transport choices." },
    { question: "Is raising children much cheaper in Quebec?", answer: "Quebec is often more supportive than many provinces because of subsidized services and benefits, but the budget still depends heavily on childcare, housing, and activities." },
    { question: "Is Quebec cheaper than Ontario?", answer: "Often yes on housing, childcare, and some public-service costs, but not across every category or neighbourhood." },
    { question: "What is the best way to reduce cost of living pressure?", answer: "Start with housing, transport, telecoms, and public benefits. Those four levers usually change the rest of the budget fastest." },
  ],
  closingTitle: "Reduce your cost of living now",
  closingText: "The practical move is to identify the heaviest spending lines first, then match them with the support programs and tradeoffs available to you.",
  closingCta: "Start the questionnaire",
  closingNote: "Free · 2 minutes · personalized estimate",
  footerText: "Indicative amounts based on 2026 editorial benchmarks and useful Quebec-specific ranges.",
  footerContact: "Contact us",
};

const frRetirementFhsa: RetirementFhsaDictionary = {
  routeKey: "retirementFhsa",
  metadata: {
    title: "CELIAPP Quebec 2026 | ArgentQC.ca",
    description:
      "Guide CELIAPP 2026 pour le Quebec: plafond annuel de 8 000 $, plafond a vie de 40 000 $, combinaison avec le RAP, comparatif avec CELI et REER, et calculateur d'epargne.",
  },
  eyebrow: "Guide retraite et premier achat 2026",
  title: "CELIAPP au Quebec",
  intro: "Le CELIAPP est l'outil le plus puissant pour preparer un premier achat immobilier quand vous avez encore quelques annees devant vous.",
  breadcrumb: ["Accueil", "Retraite", "CELIAPP"],
  introTitle: "C'est quoi le CELIAPP, concretement ?",
  introParagraphs: [
    "Le Compte d'epargne libre d'impot pour l'achat d'une premiere propriete combine les avantages du REER et du CELI dans un seul vehicule.",
    "Les cotisations sont deductibles d'impot, la croissance reste a l'abri de l'impot et les retraits admissibles pour un premier achat se font sans impot ni remboursement.",
    "Pour un premier acheteur au Quebec, chaque annee sans CELIAPP peut representer une annee de deduction fiscale et de rendement perdue.",
  ],
  highlights: [
    "Cotisations deductibles d'impot avec remboursement potentiel des la prochaine declaration.",
    "Croissance des placements entierement a l'abri de l'impot tant que l'argent reste dans le compte.",
    "Retrait admissible libre d'impot pour une premiere propriete, sans remboursement obligatoire.",
    "Combinable avec le RAP pour maximiser la mise de fonds d'un couple.",
    "Transfert possible vers REER ou FERR si vous n'achetez finalement pas.",
  ],
  annualCapLabel: "Plafond annuel",
  lifetimeCapLabel: "Plafond a vie",
  annualCapValue: "8 000 $",
  lifetimeCapValue: "40 000 $",
  annualCapNote: "par annee civile",
  lifetimeCapNote: "par personne",
  rulesTitle: "Regles essentielles du CELIAPP",
  rules: [
    { title: "Plafond annuel de cotisation", value: "8 000 $", detail: "Vous pouvez cotiser jusqu'a 8 000 $ par annee civile dans votre CELIAPP.", emoji: "01" },
    { title: "Plafond a vie", value: "40 000 $", detail: "Le total des cotisations ne peut jamais depasser 40 000 $ par personne.", emoji: "02" },
    { title: "Age minimum", value: "18 ans", detail: "Il faut avoir au moins 18 ans et resider au Canada pour ouvrir le compte.", emoji: "03" },
    { title: "Condition premier acheteur", value: "4 ans", detail: "Vous ne devez pas avoir ete proprietaire d'une residence principale au cours des 4 dernieres annees civiles.", emoji: "04" },
    { title: "Delai minimal avant retrait", value: "1 an", detail: "Le compte doit generalement exister depuis au moins un an avant un retrait admissible.", emoji: "05" },
    { title: "Duree maximale du compte", value: "15 ans", detail: "Le compte doit etre ferme au plus tard 15 ans apres son ouverture ou a 71 ans.", emoji: "06" },
  ],
  strategyTitle: "Strategie CELIAPP + RAP",
  strategyIntro: "Le CELIAPP et le RAP peuvent etre utilises ensemble pour renforcer la mise de fonds sans impot immediat.",
  strategyRows: [
    { label: "CELIAPP (par personne)", value: "40 000 $" },
    { label: "RAP - retrait REER (par personne)", value: "35 000 $" },
  ],
  strategyTotalLabel: "Couple - total combine",
  strategyTotalValue: "150 000 $",
  strategyLinkLabel: "Voir aussi le guide REER",
  comparisonTitle: "CELIAPP vs CELI vs REER",
  comparisonIntro: "Le CELIAPP reprend des avantages des deux autres comptes, mais seulement pour un premier achat admissible.",
  comparisonHeaders: ["Critere", "CELIAPP", "CELI", "REER"],
  comparisonRows: [
    { criteria: "Cotisation deductible d'impot ?", fhsa: "Oui", tfsa: "Non", rrsp: "Oui" },
    { criteria: "Croissance libre d'impot ?", fhsa: "Oui", tfsa: "Oui", rrsp: "Oui" },
    { criteria: "Retrait libre d'impot ?", fhsa: "Si achat admissible", tfsa: "Toujours", rrsp: "Non" },
    { criteria: "Plafond annuel", fhsa: "8 000 $", tfsa: "7 000 $ (2026)", rrsp: "18% du revenu (max 32 490 $)" },
    { criteria: "Plafond a vie", fhsa: "40 000 $", tfsa: "Aucun", rrsp: "Aucun" },
    { criteria: "Droits recuperees apres retrait ?", fhsa: "Non", tfsa: "L'annee suivante", rrsp: "Non" },
    { criteria: "Ideal pour", fhsa: "Premier achat maison", tfsa: "Epargne flexible", rrsp: "Retraite et deduction fiscale" },
  ],
  calculatorTitle: "Calculateur CELIAPP",
  calculatorIntro: "Estimez l'epargne accumulee et l'economie d'impot potentielle selon votre rythme de cotisation.",
  calculator: {
    annualContributionLabel: "Cotisation annuelle",
    annualContributionMin: "500 $",
    annualContributionMax: "8 000 $ (max)",
    estimatedReturnLabel: "Taux de rendement estime",
    estimatedReturnLow: "0 %",
    estimatedReturnHigh: "10 %",
    estimatedReturnHelp: "Repere indicatif: CPG autour de 4 %, portefeuille indiciel diversifie souvent autour de 6 a 7 % sur longue periode.",
    contributionYearsLabel: "Nombre d'annees de cotisation",
    contributionYearsMin: "1 an",
    contributionYearsMax: "5 ans (plafond a vie)",
    resultsLabel: "Resultats estimes",
    totalContributedLabel: "Total cotise",
    withGrowthLabel: "Avec rendement",
    growthGeneratedLabel: "Rendement genere",
    taxSavingsLabel: "Economie d'impot",
    capReachedLabel: "Plafond a vie atteint",
    readyToBuyLabel: "Pret a acheter en",
    capReachedValue: "40 000 $ cotises",
    estimateNote: "Estimation indicative basee sur un taux marginal moyen de 37 % au Quebec. Votre taux reel depend de votre revenu, et les cotisations inutilisees ne se reportent pas comme au CELI.",
  },
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "Qui peut ouvrir un CELIAPP ?", answer: "Un resident canadien de 18 ans ou plus qui n'a pas ete proprietaire de sa residence principale au cours des 4 dernieres annees civiles." },
    { question: "Peut-on combiner CELIAPP et RAP ?", answer: "Oui. C'est souvent la strategie la plus puissante pour augmenter la mise de fonds sur un premier achat." },
    { question: "Que se passe-t-il si on n'achete pas ?", answer: "Le solde peut etre transfere vers un REER ou un FERR sans impot immediat, sous certaines conditions et avant la fermeture du compte." },
    { question: "Quelles institutions offrent le CELIAPP ?", answer: "La plupart des grandes banques et plusieurs courtiers en ligne le proposent, avec des frais et choix de placements variables." },
  ],
  ctaLinks: [
    { title: "Guide REER", description: "Voir le RAP et la logique de deduction fiscale.", href: "/fr/retraite/reer", emoji: "R1" },
    { title: "Guide CELI", description: "Comprendre quand utiliser le CELI en parallele.", href: "/fr/retraite/celi", emoji: "R2" },
    { title: "Thème retraite", description: "Revenir à la vue d'ensemble retraite.", href: "/fr/retraite", emoji: "R3" },
  ],
  footerText: "Outil informatif. Une planification personnalisee peut exiger un conseiller financier ou fiscal selon votre situation.",
  footerContact: "Contactez-nous",
};

const enRetirementFhsa: RetirementFhsaDictionary = {
  routeKey: "retirementFhsa",
  metadata: {
    title: "FHSA in Quebec 2026 | ArgentQC.ca",
    description:
      "Quebec FHSA guide for 2026: CAD 8,000 annual room, CAD 40,000 lifetime room, combining with the Home Buyers' Plan, FHSA vs TFSA vs RRSP, and a savings calculator.",
  },
  eyebrow: "Retirement and first-home guide 2026",
  title: "FHSA in Quebec",
  intro: "The FHSA is usually the strongest first-home savings vehicle when you still have a few years before buying.",
  breadcrumb: ["Home", "Retirement", "FHSA"],
  introTitle: "What is the FHSA in practical terms?",
  introParagraphs: [
    "The First Home Savings Account combines key RRSP and TFSA advantages in one account built for a first home purchase.",
    "Contributions are tax-deductible, growth stays sheltered from tax, and qualifying withdrawals for a first home are tax-free with no repayment.",
    "For a first-time buyer in Quebec, every year without an FHSA can mean one less year of deductions and compound growth.",
  ],
  highlights: [
    "Tax-deductible contributions that can generate an income tax refund.",
    "Investment growth stays sheltered from tax inside the account.",
    "Qualifying withdrawals for a first home are tax-free and do not need to be repaid.",
    "Can be combined with the Home Buyers' Plan to strengthen a down payment.",
    "Can be transferred to an RRSP or RRIF if you do not end up buying.",
  ],
  annualCapLabel: "Annual room",
  lifetimeCapLabel: "Lifetime room",
  annualCapValue: "CAD 8,000",
  lifetimeCapValue: "CAD 40,000",
  annualCapNote: "per calendar year",
  lifetimeCapNote: "per person",
  rulesTitle: "Core FHSA rules",
  rules: [
    { title: "Annual contribution room", value: "CAD 8,000", detail: "You can contribute up to CAD 8,000 per calendar year to the FHSA.", emoji: "01" },
    { title: "Lifetime room", value: "CAD 40,000", detail: "Total contributions can never exceed CAD 40,000 per person.", emoji: "02" },
    { title: "Minimum age", value: "18", detail: "You must be at least 18 and a Canadian resident to open the account.", emoji: "03" },
    { title: "First-home condition", value: "4 years", detail: "You must not have owned a principal residence during the last 4 calendar years.", emoji: "04" },
    { title: "Minimum delay before withdrawal", value: "1 year", detail: "The account generally needs to have been open for at least one year before a qualifying withdrawal.", emoji: "05" },
    { title: "Maximum account duration", value: "15 years", detail: "The account must be closed no later than 15 years after opening or at age 71.", emoji: "06" },
  ],
  strategyTitle: "FHSA + Home Buyers' Plan strategy",
  strategyIntro: "The FHSA and the Home Buyers' Plan can be used together to build a stronger down payment without immediate tax.",
  strategyRows: [
    { label: "FHSA (per person)", value: "CAD 40,000" },
    { label: "Home Buyers' Plan RRSP withdrawal (per person)", value: "CAD 35,000" },
  ],
  strategyTotalLabel: "Couple - combined total",
  strategyTotalValue: "CAD 150,000",
  strategyLinkLabel: "See the RRSP guide",
  comparisonTitle: "FHSA vs TFSA vs RRSP",
  comparisonIntro: "The FHSA combines benefits of both other accounts, but only for a qualifying first-home purchase.",
  comparisonHeaders: ["Criteria", "FHSA", "TFSA", "RRSP"],
  comparisonRows: [
    { criteria: "Tax-deductible contribution?", fhsa: "Yes", tfsa: "No", rrsp: "Yes" },
    { criteria: "Tax-free growth?", fhsa: "Yes", tfsa: "Yes", rrsp: "Yes" },
    { criteria: "Tax-free withdrawal?", fhsa: "For a qualifying purchase", tfsa: "Always", rrsp: "No" },
    { criteria: "Annual room", fhsa: "CAD 8,000", tfsa: "CAD 7,000 (2026)", rrsp: "18% of income (max CAD 32,490)" },
    { criteria: "Lifetime room", fhsa: "CAD 40,000", tfsa: "None", rrsp: "None" },
    { criteria: "Room restored after withdrawal?", fhsa: "No", tfsa: "The following year", rrsp: "No" },
    { criteria: "Best use", fhsa: "First home purchase", tfsa: "Flexible savings", rrsp: "Retirement and deduction" },
  ],
  calculatorTitle: "FHSA calculator",
  calculatorIntro: "Estimate accumulated savings and potential tax savings based on how much you plan to contribute.",
  calculator: {
    annualContributionLabel: "Annual contribution",
    annualContributionMin: "CAD 500",
    annualContributionMax: "CAD 8,000 (max)",
    estimatedReturnLabel: "Estimated rate of return",
    estimatedReturnLow: "0%",
    estimatedReturnHigh: "10%",
    estimatedReturnHelp: "Rough benchmark: GICs around 4%, diversified index portfolios often around 6 to 7% over long periods.",
    contributionYearsLabel: "Number of contribution years",
    contributionYearsMin: "1 year",
    contributionYearsMax: "5 years (lifetime room)",
    resultsLabel: "Estimated results",
    totalContributedLabel: "Total contributed",
    withGrowthLabel: "With growth",
    growthGeneratedLabel: "Growth generated",
    taxSavingsLabel: "Tax savings",
    capReachedLabel: "Lifetime cap reached",
    readyToBuyLabel: "Ready to buy in",
    capReachedValue: "CAD 40,000 contributed",
    estimateNote: "Indicative estimate using an average 37% marginal tax rate in Quebec. Your actual rate depends on income, and unused FHSA room does not behave like TFSA room.",
  },
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "Who can open an FHSA?", answer: "A Canadian resident aged 18 or older who has not owned a principal residence during the last 4 calendar years." },
    { question: "Can you combine the FHSA and the Home Buyers' Plan?", answer: "Yes. It is often the strongest way to build a larger down payment for a first home." },
    { question: "What if you do not buy a home?", answer: "The balance can generally be transferred to an RRSP or RRIF without immediate tax before the account deadline." },
    { question: "Which institutions offer the FHSA?", answer: "Most major banks and several online brokerages offer it, with varying fees and investment menus." },
  ],
  ctaLinks: [
    { title: "RRSP guide", description: "Review the Home Buyers' Plan and deduction logic.", href: "/en/retirement/rrsp", emoji: "R1" },
    { title: "TFSA guide", description: "See when the TFSA still matters alongside the FHSA.", href: "/en/retirement/tfsa", emoji: "R2" },
    { title: "Retirement topic", description: "Back to the broader retirement overview.", href: "/en/retirement", emoji: "R3" },
  ],
  footerText: "Informational tool only. Personalized planning may require a financial or tax advisor depending on your situation.",
  footerContact: "Contact us",
};

const frTaxSoftware: TaxSoftwareDictionary = {
  routeKey: "taxesSoftware",
  metadata: {
    title: "Logiciels d'impots Quebec 2026 | ArgentQC.ca",
    description:
      "Comparer les meilleurs logiciels d'impots pour le Quebec en 2026: options gratuites ou payantes, compatibilite ARC et Revenu Quebec, et choix selon votre profil fiscal.",
  },
  eyebrow: "Guide impots Quebec 2026",
  title: "Quel logiciel d'impots choisir au Quebec ?",
  intro:
    "Une base claire pour comparer les logiciels les plus utiles au Quebec selon la simplicite du dossier, le prix reel et la compatibilite avec les declarations federales et provinciales.",
  breadcrumb: ["Accueil", "Impots", "Logiciels"],
  tableTitle: "Comparatif rapide des logiciels",
  tableHeaders: ["Logiciel", "Gratuit", "Quebec", "Federal", "Transmission"],
  softwareRows: [
    {
      name: "Wealthsimple Tax",
      badge: "Don libre",
      emoji: "WS",
      quebec: "Oui",
      federal: "Oui",
      efile: "NETFILE + ImpotNet",
      profile: "Salaires simples a intermediaires, placements, cryptos",
      strengths: "Interface la plus fluide, importation des feuillets, bon support des placements.",
      limits: "Moins adapte aux cas tres complexes ou a forte logique d'entreprise.",
      color: "#DBEAFE",
      textColor: "#1D4ED8",
    },
    {
      name: "H&R Block",
      badge: "Gratuit sur cas simples",
      emoji: "HR",
      quebec: "Oui",
      federal: "Oui",
      efile: "NETFILE + ImpotNet",
      profile: "Premiere production, salaries, retraites",
      strengths: "Parcours tres guide, vocabulaire plus accessible, rassurant pour debuter.",
      limits: "Certaines situations exigent vite une version payante.",
      color: "#D1FAE5",
      textColor: "#065F46",
    },
    {
      name: "TurboTax",
      badge: "Gratuit sur cas simples",
      emoji: "TT",
      quebec: "Oui",
      federal: "Oui",
      efile: "NETFILE + ImpotNet",
      profile: "Revenus d'emploi simples",
      strengths: "Produit connu, bon accompagnement, importation facile des feuillets.",
      limits: "Montee en prix rapide des que le dossier devient moins standard.",
      color: "#FEF3C7",
      textColor: "#92400E",
    },
    {
      name: "UFile",
      badge: "Gratuit sous conditions",
      emoji: "UF",
      quebec: "Oui",
      federal: "Oui",
      efile: "NETFILE + ImpotNet",
      profile: "Etudiants, faibles revenus, revenus plus mixtes",
      strengths: "Bon compromis pour revenus modestes, location ou travail autonome leger.",
      limits: "Payant plus vite si le revenu ou la complexite montent.",
      color: "#EDE9FE",
      textColor: "#5B21B6",
    },
  ],
  profileTitle: "Quel logiciel selon votre profil",
  profileCards: [
    {
      profile: "Salarie avec T4 et RL-1 seulement",
      recommendation: "Wealthsimple Tax ou H&R Block",
      detail: "Pour un dossier simple, le point cle reste la facilite d'utilisation plus que la puissance fiscale.",
      emoji: "01",
    },
    {
      profile: "Etudiant ou revenu modeste",
      recommendation: "UFile ou clinique benevole",
      detail: "Le cout doit rester proche de zero. Les situations standards peuvent aussi passer par une clinique gratuite.",
      emoji: "02",
    },
    {
      profile: "Travailleur autonome",
      recommendation: "UFile ou version payante plus complete",
      detail: "Des formulaires comme le T2125 changent vite la donne. Il faut verifier la couverture exacte avant de commencer.",
      emoji: "03",
    },
    {
      profile: "Placements, dividendes ou cryptos",
      recommendation: "Wealthsimple Tax",
      detail: "Le produit reste l'un des plus confortables pour les feuillets de courtage et les cas de placement courants.",
      emoji: "04",
    },
    {
      profile: "Dossier tres complexe",
      recommendation: "Fiscaliste ou comptable",
      detail: "Au-dela d'un certain niveau de complexite, l'erreur coute plus cher que l'honoraire.",
      emoji: "05",
    },
  ],
  clinicsTitle: "Clinique d'impots gratuite: quand elle vaut mieux qu'un logiciel",
  clinics: [
    "Le PCBMI aide gratuitement sur les declarations simples dans de nombreuses bibliotheques et centres communautaires.",
    "C'est souvent le meilleur point d'entree si votre revenu est modeste et que vous ne voulez pas apprendre un logiciel juste pour une declaration standard.",
    "Les benevoles peuvent produire a la fois la declaration federale et la TP-1 du Quebec quand votre situation est admissible.",
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    {
      question: "Un logiciel gratuit peut-il produire la declaration Quebec ?",
      answer:
        "Oui, a condition qu'il soit homologue pour l'ARC et Revenu Quebec. Les outils ci-dessus gerent les deux couches dans le meme flux.",
    },
    {
      question: "NETFILE et ImpotNet, quelle difference ?",
      answer:
        "NETFILE concerne la declaration federale transmise a l'ARC. ImpotNet est l'equivalent pour la declaration TP-1 envoyee a Revenu Quebec.",
    },
    {
      question: "Faut-il toujours garder le meme logiciel d'une annee a l'autre ?",
      answer:
        "Pas forcement. Rester sur le meme produit simplifie l'historique, mais il faut revoir le prix, la couverture et la facilite d'usage quand votre situation change.",
    },
  ],
  ctaTitle: "Continuer sur le thème fiscal",
  ctaLinks: [
    { title: "Dates limites", description: "Verifier les echeances et penalites 2026.", href: "/fr/impots/dates", emoji: "D1" },
    { title: "Remboursement", description: "Comprendre delais et causes de retard.", href: "/fr/impots/remboursement", emoji: "D2" },
    { title: "Thème impôts", description: "Revenir à la vue d'ensemble fiscale.", href: "/fr/impots", emoji: "D3" },
  ],
  footerText:
    "Contenu informatif non affilie aux logiciels cites. Verifiez toujours les tarifs, restrictions et certifications directement chez l'editeur.",
  footerContact: "Contactez-nous",
};

const enTaxSoftware: TaxSoftwareDictionary = {
  routeKey: "taxesSoftware",
  metadata: {
    title: "Quebec tax software guide 2026 | ArgentQC.ca",
    description:
      "Compare the main tax software options for Quebec in 2026: free versus paid approaches, CRA and Revenu Quebec compatibility, and which tool fits which tax profile.",
  },
  eyebrow: "Quebec taxes guide 2026",
  title: "Which tax software should you choose in Quebec?",
  intro:
    "A practical comparison of the tax software options that matter most in Quebec, based on filing complexity, real cost, and compatibility with both federal and provincial returns.",
  breadcrumb: ["Home", "Taxes", "Software"],
  tableTitle: "Quick software comparison",
  tableHeaders: ["Software", "Free", "Quebec", "Federal", "E-file"],
  softwareRows: [
    {
      name: "Wealthsimple Tax",
      badge: "Pay-what-you-want",
      emoji: "WS",
      quebec: "Yes",
      federal: "Yes",
      efile: "NETFILE + ImpotNet",
      profile: "Simple to intermediate employment income, investments, crypto",
      strengths: "Best overall UX, slip import, strong fit for common investing cases.",
      limits: "Less comfortable once the return becomes deeply business-oriented or unusually complex.",
      color: "#DBEAFE",
      textColor: "#1D4ED8",
    },
    {
      name: "H&R Block",
      badge: "Free on simple cases",
      emoji: "HR",
      quebec: "Yes",
      federal: "Yes",
      efile: "NETFILE + ImpotNet",
      profile: "First-time filers, employees, retirees",
      strengths: "Highly guided flow and simpler language for less confident filers.",
      limits: "Upsells to paid tiers relatively quickly once the return gets less standard.",
      color: "#D1FAE5",
      textColor: "#065F46",
    },
    {
      name: "TurboTax",
      badge: "Free on simple cases",
      emoji: "TT",
      quebec: "Yes",
      federal: "Yes",
      efile: "NETFILE + ImpotNet",
      profile: "Straightforward employment-only returns",
      strengths: "Very well-known product with solid onboarding and easy slip import.",
      limits: "Pricing rises quickly once the file moves beyond a basic return.",
      color: "#FEF3C7",
      textColor: "#92400E",
    },
    {
      name: "UFile",
      badge: "Free in limited cases",
      emoji: "UF",
      quebec: "Yes",
      federal: "Yes",
      efile: "NETFILE + ImpotNet",
      profile: "Students, modest income, somewhat broader tax situations",
      strengths: "Good value for modest-income filers and some lighter self-employment or rental cases.",
      limits: "Moves into paid use faster as income or complexity increases.",
      color: "#EDE9FE",
      textColor: "#5B21B6",
    },
  ],
  profileTitle: "Which software fits which profile",
  profileCards: [
    {
      profile: "Employee with only T4 and RL-1 slips",
      recommendation: "Wealthsimple Tax or H&R Block",
      detail: "On a simple return, ease of use matters more than advanced tax depth.",
      emoji: "01",
    },
    {
      profile: "Student or modest income",
      recommendation: "UFile or a volunteer tax clinic",
      detail: "Total filing cost should stay close to zero, and clinics can handle many standard returns.",
      emoji: "02",
    },
    {
      profile: "Self-employed",
      recommendation: "UFile or a fuller paid version",
      detail: "Forms such as T2125 change the equation quickly. Coverage needs to be checked before you start.",
      emoji: "03",
    },
    {
      profile: "Investments, dividends, or crypto",
      recommendation: "Wealthsimple Tax",
      detail: "It remains one of the smoother tools for brokerage slips and common investing cases.",
      emoji: "04",
    },
    {
      profile: "Very complex file",
      recommendation: "Tax preparer or accountant",
      detail: "Past a certain complexity level, the cost of a filing error is usually higher than the professional fee.",
      emoji: "05",
    },
  ],
  clinicsTitle: "When a free tax clinic is better than software",
  clinics: [
    "The Community Volunteer Income Tax Program can handle many simple returns for free through libraries and community organizations.",
    "It is often the best starting point when income is modest and you do not want to learn a software workflow for a standard return.",
    "Eligible files can be prepared for both the federal return and Quebec's TP-1 return at the same time.",
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    {
      question: "Can free software also file the Quebec return?",
      answer:
        "Yes, as long as the tool is approved for both CRA and Revenu Quebec filing. The products above handle both layers in one workflow.",
    },
    {
      question: "What is the difference between NETFILE and ImpotNet?",
      answer:
        "NETFILE is for the federal return sent to CRA. ImpotNet is the Quebec equivalent for the TP-1 return sent to Revenu Quebec.",
    },
    {
      question: "Should I keep using the same software every year?",
      answer:
        "Not automatically. Staying with one product helps with continuity, but pricing, feature coverage, and usability should be reviewed when your tax profile changes.",
    },
  ],
  ctaTitle: "Keep going inside the tax topic",
  ctaLinks: [
    { title: "Deadlines", description: "Review key filing dates and penalties.", href: "/en/taxes/deadlines", emoji: "D1" },
    { title: "Refund timing", description: "Understand timing and common delays.", href: "/en/taxes/refund", emoji: "D2" },
    { title: "Tax topic", description: "Back to the broader Quebec tax overview.", href: "/en/taxes", emoji: "D3" },
  ],
  footerText:
    "Informational content only. We are not affiliated with the software listed here. Check pricing, limits, and certifications directly with each provider.",
  footerContact: "Contact us",
};

const frBudgetCalculator: BudgetCalculatorDictionary = {
  routeKey: "budgetCalculator",
  metadata: {
    title: "Calculateur budget mensuel Quebec 2026 | ArgentQC.ca",
    description:
      "Calculez votre budget mensuel au Quebec avec vos revenus nets, votre loyer, votre epicerie, votre transport et vos autres depenses.",
  },
  eyebrow: "Outil budget Quebec 2026",
  title: "Calculateur de budget mensuel au Quebec",
  intro:
    "Entrez vos revenus et vos depenses pour obtenir un bilan mensuel simple, un graphique de repartition et quelques signaux utiles.",
  breadcrumb: ["Accueil", "Budget", "Calculateur"],
  privacyTitle: "Confidentialite",
  privacyText: "Aucune donnee n'est envoyee a nos serveurs. Le calcul se fait entierement dans votre navigateur.",
  incomeLabel: "Revenu mensuel net (apres impots)",
  incomePlaceholder: "ex. 3500",
  expensesTitle: "Depenses mensuelles",
  totalExpensesLabel: "Total depenses",
  calculateLabel: "Calculer mon bilan",
  resultsTitle: "Votre bilan mensuel",
  revenueCard: "Revenus",
  expensesCard: "Depenses",
  balanceCard: "Solde",
  balancedTitle: "Budget equilibre.",
  balancedGood: "Excellent. Vous gardez une vraie marge pour epargner davantage.",
  balancedTight: "Le budget tient, mais quelques arbitrages peuvent encore augmenter votre epargne.",
  deficitTitle: "Budget deficitaire.",
  deficitText: "Vos depenses depassent vos revenus mensuels. Identifiez les postes a reduire et verifiez les aides publiques disponibles.",
  chartTitle: "Repartition de vos depenses",
  detailsTitle: "Detail par poste",
  ctaTitle: "Des aides gouvernementales pourraient alleger votre budget",
  ctaText: "Credits d'impot, allocations et subventions: trouvez ce qui peut soulager vos finances en quelques minutes.",
  ctaLabel: "Trouver mes aides",
  resetLabel: "Recommencer le calcul",
  relatedBudgetTitle: "Thème budget Québec",
  relatedBudgetText: "Replacer ce calculateur dans une vue plus large du cout de la vie et des arbitrages budgetaires.",
  relatedMovingTitle: "Thème déménagement",
  relatedMovingText: "Utile si vous voulez integrer un projet de demenagement dans votre budget global.",
  footerText: "Outil informatif. Aucune donnee personnelle n'est conservee.",
  footerContact: "Contactez-nous",
  emptyValue: "—",
  lineItems: [
    { label: "Loyer ou hypotheque", key: "loyer", emoji: "🏠", placeholder: "ex. 1200", color: "#3B82F6" },
    { label: "Epicerie", key: "epicerie", emoji: "🛒", placeholder: "ex. 400", color: "#10B981" },
    { label: "Transport", key: "transport", emoji: "🚗", placeholder: "ex. 300", color: "#F59E0B" },
    { label: "Restaurants et sorties", key: "restos", emoji: "🍽️", placeholder: "ex. 200", color: "#EC4899" },
    { label: "Internet et mobile", key: "internet", emoji: "📱", placeholder: "ex. 120", color: "#8B5CF6" },
    { label: "Electricite", key: "electricite", emoji: "⚡", placeholder: "ex. 80", color: "#F97316" },
    { label: "Assurances", key: "assurances", emoji: "🛡️", placeholder: "ex. 150", color: "#06B6D4" },
    { label: "Loisirs et abonnements", key: "loisirs", emoji: "🎬", placeholder: "ex. 100", color: "#84CC16" },
    { label: "Sante", key: "sante", emoji: "💊", placeholder: "ex. 80", color: "#EF4444" },
    { label: "Dettes et remboursements", key: "dettes", emoji: "💳", placeholder: "ex. 200", color: "#6B7280" },
    { label: "Epargne et investissements", key: "epargne", emoji: "💰", placeholder: "ex. 150", color: "#059669" },
    { label: "Autres depenses", key: "autres", emoji: "📦", placeholder: "ex. 100", color: "#A78BFA" },
  ],
};

const enBudgetCalculator: BudgetCalculatorDictionary = {
  routeKey: "budgetCalculator",
  metadata: {
    title: "Monthly budget calculator for Quebec 2026 | ArgentQC.ca",
    description:
      "Estimate your monthly Quebec budget using net income, rent, groceries, transportation, debt payments, and other recurring costs.",
  },
  eyebrow: "Quebec budget tool 2026",
  title: "Monthly budget calculator for Quebec",
  intro:
    "Enter your income and spending to get a simple monthly balance, a spending breakdown chart, and a few practical signals.",
  breadcrumb: ["Home", "Budget", "Calculator"],
  privacyTitle: "Privacy",
  privacyText: "No data is sent to our servers. Everything is calculated locally in your browser.",
  incomeLabel: "Monthly net income (after tax)",
  incomePlaceholder: "e.g. 3500",
  expensesTitle: "Monthly expenses",
  totalExpensesLabel: "Total expenses",
  calculateLabel: "Calculate my balance",
  resultsTitle: "Your monthly snapshot",
  revenueCard: "Income",
  expensesCard: "Expenses",
  balanceCard: "Balance",
  balancedTitle: "Balanced budget.",
  balancedGood: "Excellent. You still have meaningful room to save more.",
  balancedTight: "The budget works, but a few tradeoffs could still improve your savings rate.",
  deficitTitle: "Budget deficit.",
  deficitText: "Your monthly expenses are higher than your income. Review the biggest lines first and check whether any public programs could help.",
  chartTitle: "Spending breakdown",
  detailsTitle: "Line-by-line detail",
  ctaTitle: "Public programs may improve your monthly budget",
  ctaText: "Refundable credits, benefits, and grants can change the picture faster than a minor expense cut.",
  ctaLabel: "Find my programs",
  resetLabel: "Start over",
  relatedBudgetTitle: "Quebec budget topic",
  relatedBudgetText: "Place this calculator inside a broader view of cost of living and budget tradeoffs.",
  relatedMovingTitle: "Moving topic",
  relatedMovingText: "Helpful if you want to fold a move into your overall monthly planning.",
  footerText: "Informational tool. No personal data is stored.",
  footerContact: "Contact us",
  emptyValue: "—",
  lineItems: [
    { label: "Rent or mortgage", key: "loyer", emoji: "🏠", placeholder: "e.g. 1200", color: "#3B82F6" },
    { label: "Groceries", key: "epicerie", emoji: "🛒", placeholder: "e.g. 400", color: "#10B981" },
    { label: "Transportation", key: "transport", emoji: "🚗", placeholder: "e.g. 300", color: "#F59E0B" },
    { label: "Dining and going out", key: "restos", emoji: "🍽️", placeholder: "e.g. 200", color: "#EC4899" },
    { label: "Internet and mobile", key: "internet", emoji: "📱", placeholder: "e.g. 120", color: "#8B5CF6" },
    { label: "Electricity", key: "electricite", emoji: "⚡", placeholder: "e.g. 80", color: "#F97316" },
    { label: "Insurance", key: "assurances", emoji: "🛡️", placeholder: "e.g. 150", color: "#06B6D4" },
    { label: "Leisure and subscriptions", key: "loisirs", emoji: "🎬", placeholder: "e.g. 100", color: "#84CC16" },
    { label: "Health", key: "sante", emoji: "💊", placeholder: "e.g. 80", color: "#EF4444" },
    { label: "Debt payments", key: "dettes", emoji: "💳", placeholder: "e.g. 200", color: "#6B7280" },
    { label: "Savings and investing", key: "epargne", emoji: "💰", placeholder: "e.g. 150", color: "#059669" },
    { label: "Other expenses", key: "autres", emoji: "📦", placeholder: "e.g. 100", color: "#A78BFA" },
  ],
};

const frInternetComparator: InternetComparatorDictionary = {
  routeKey: "internetComparator",
  metadata: {
    title: "Comparateur internet Quebec 2026 | ArgentQC.ca",
    description:
      "Comparez les forfaits internet au Quebec selon votre budget, votre vitesse minimale et votre besoin de flexibilite.",
  },
  eyebrow: "Comparateur internet Quebec 2026",
  title: "Comparateur internet au Quebec",
  intro: "Un comparateur simple pour filtrer les offres selon budget, vitesse, type de connexion et engagement.",
  filterTitle: "Filtrer les forfaits",
  budgetLabel: "Budget max par mois",
  anyBudgetLabel: "Peu importe",
  speedLabel: "Vitesse minimale",
  connectionLabel: "Type de connexion",
  contractOnlyLabel: "Sans engagement uniquement",
  sortLabel: "Trier par",
  resultCountLabel: "forfaits trouves",
  bestResultLabel: "Meilleur resultat",
  bestPriceLabel: "Meilleur prix",
  bestSpeedLabel: "Meilleure vitesse",
  noContractLabel: "Sans engagement",
  pricePerMonthLabel: "/mois",
  downloadLabel: "Download",
  uploadLabel: "Upload",
  contractLabel: "Contrat",
  noContractValue: "Aucun",
  modemIncludedLabel: "Modem inclus",
  modemNotIncludedLabel: "Modem non inclus",
  viewOfferLabel: "Voir l'offre",
  introSectionsTitle: "Le marche internet au Quebec en 2026",
  introParagraphs: [
    "Le marche internet au Quebec reste tire par Videotron et Bell, mais des joueurs comme Fizz, Oxio et TekSavvy maintiennent une pression utile sur les prix.",
    "Pour beaucoup de foyers, 100 a 200 Mbps suffisent largement. Le vrai arbitrage se joue souvent sur l'upload, la souplesse de sortie et le cout total avec modem.",
    "En demenagement, anticipez l'installation plusieurs semaines d'avance pour eviter une coupure de service inutile.",
  ],
  relatedTitle: "Guides connexes",
  relatedLinks: [
    { title: "Thème internet Québec", description: "Replacer le comparateur dans une vue plus large des offres et des critères de choix.", href: "/fr/internet", emoji: "🌐" },
    { title: "Thème déménagement", description: "Utile pour gérer la transition, la résiliation et les délais d'installation.", href: "/fr/demenagement", emoji: "📦" },
    { title: "Calculateur budget", description: "Integrer le cout de votre forfait dans le budget global du foyer.", href: "/fr/budget/calculateur", emoji: "🧮" },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "La fibre vaut-elle toujours le surcout ?", answer: "Pas toujours. Elle devient surtout utile pour le teletravail intensif, les foyers multi-usages et les besoins d'upload eleves." },
    { question: "Les promotions suffisent-elles pour comparer ?", answer: "Non. Le bon reflexe est de regarder le prix complet apres promotion, le modem et les conditions de sortie." },
    { question: "Faut-il absolument eviter les contrats ?", answer: "Pas necessairement. Un contrat peut etre acceptable si le prix complet reste competitif et que votre horizon est stable." },
  ],
  footerText: "Outil informatif non affilie aux fournisseurs internet ou au gouvernement.",
  footerContact: "Contactez-nous",
};

const enInternetComparator: InternetComparatorDictionary = {
  routeKey: "internetComparator",
  metadata: {
    title: "Quebec internet comparator 2026 | ArgentQC.ca",
    description:
      "Compare Quebec internet plans by budget, minimum speed, connection type, and contract flexibility.",
  },
  eyebrow: "Quebec internet comparator 2026",
  title: "Internet comparator for Quebec",
  intro: "A simple comparator to filter plans by budget, speed, connection type, and contract flexibility.",
  filterTitle: "Filter plans",
  budgetLabel: "Maximum monthly budget",
  anyBudgetLabel: "Any budget",
  speedLabel: "Minimum speed",
  connectionLabel: "Connection type",
  contractOnlyLabel: "No contract only",
  sortLabel: "Sort by",
  resultCountLabel: "plans found",
  bestResultLabel: "Best result",
  bestPriceLabel: "Best price",
  bestSpeedLabel: "Top speed",
  noContractLabel: "No contract",
  pricePerMonthLabel: "/month",
  downloadLabel: "Download",
  uploadLabel: "Upload",
  contractLabel: "Contract",
  noContractValue: "None",
  modemIncludedLabel: "Modem included",
  modemNotIncludedLabel: "Modem not included",
  viewOfferLabel: "View offer",
  introSectionsTitle: "The Quebec internet market in 2026",
  introParagraphs: [
    "Quebec's internet market is still led by Videotron and Bell, but alternative providers such as Fizz, Oxio, and TekSavvy keep pricing pressure alive.",
    "For many households, 100 to 200 Mbps is already enough. The real tradeoff often comes down to upload speed, switching flexibility, and full cost including modem fees.",
    "If you are moving, book installation a few weeks early to avoid an unnecessary service gap.",
  ],
  relatedTitle: "Related guides",
  relatedLinks: [
    { title: "Quebec internet topic", description: "Put the comparator inside a broader view of providers and selection criteria.", href: "/en/internet", emoji: "🌐" },
    { title: "Moving topic", description: "Helpful for service transfer timing, cancellation, and installation planning.", href: "/en/moving", emoji: "📦" },
    { title: "Budget calculator", description: "Fold your internet bill into the household budget view.", href: "/en/budget/calculator", emoji: "🧮" },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "Is fibre always worth the premium?", answer: "Not always. It becomes more valuable for heavy remote work, simultaneous usage, and high upload needs." },
    { question: "Are promotions enough to compare plans?", answer: "No. The better benchmark is the full post-promo price plus modem and exit conditions." },
    { question: "Should I always avoid contracts?", answer: "Not necessarily. A contract can still make sense when the full price is competitive and your situation is stable." },
  ],
  footerText: "Informational tool not affiliated with internet providers or government agencies.",
  footerContact: "Contact us",
};

const frRetirementRrq: RetirementRrqDictionary = {
  routeKey: "retirementRrq",
  metadata: {
    title: "RRQ Quebec 2026 | ArgentQC.ca",
    description:
      "Comprendre la RRQ en 2026: montants selon l'age, difference avec le RPC, cotisations et grands reperes pour estimer votre rente.",
  },
  eyebrow: "Guide retraite Quebec 2026",
  title: "RRQ : comprendre votre rente de retraite au Quebec",
  intro: "Une vue simple sur les montants, l'age de prise, les cotisations et la logique Quebec par rapport au reste du Canada.",
  ageCardsTitle: "Montants de la RRQ selon l'age choisi",
  ageStartLabel: "Debut a",
  averageLabel: "Montant moyen",
  maximumLabel: "Maximum",
  comparisonTitle: "RRQ vs RPC",
  comparisonHeaders: ["Aspect", "RRQ (Quebec)", "RPC (Canada)"],
  contributionTitle: "Cotisations et ordre de grandeur",
  salaryLabel: "Salaire",
  employeeContributionLabel: "Cotisation employe",
  totalContributionLabel: "Total avec employeur",
  faqsTitle: "Questions frequentes",
};

const enRetirementRrq: RetirementRrqDictionary = {
  routeKey: "retirementRrq",
  metadata: {
    title: "QPP guide for Quebec 2026 | ArgentQC.ca",
    description:
      "Understand the Quebec Pension Plan in 2026: benefit levels by age, QPP vs CPP, contribution logic, and the main planning tradeoffs.",
  },
  eyebrow: "Quebec retirement guide 2026",
  title: "QPP: understanding your Quebec retirement pension",
  intro: "A practical overview of benefit levels, claiming age, contributions, and how the Quebec system compares with the rest of Canada.",
  ageCardsTitle: "QPP benefit levels by claiming age",
  ageStartLabel: "Start at",
  averageLabel: "Average amount",
  maximumLabel: "Maximum",
  comparisonTitle: "QPP vs CPP",
  comparisonHeaders: ["Aspect", "QPP (Quebec)", "CPP (Canada)"],
  contributionTitle: "Contributions and rough benefit levels",
  salaryLabel: "Salary",
  employeeContributionLabel: "Employee contribution",
  totalContributionLabel: "Total with employer",
  faqsTitle: "Frequently asked questions",
};

const frRetirementRrsp: RetirementRrspDictionary = {
  routeKey: "retirementRrsp",
  metadata: {
    title: "REER Quebec 2026 | ArgentQC.ca",
    description:
      "Comprendre le REER en 2026: plafond de cotisation, economie d'impot, comparaison REER vs CELI et erreurs frequentes a eviter.",
  },
  eyebrow: "Guide retraite Quebec 2026",
  title: "REER : le guide simple pour les Quebecois",
  intro: "Une base claire sur le plafond 2026, le remboursement fiscal, les cas d'usage et les erreurs les plus couteuses.",
  basicsTitle: "Le REER, concretement",
  basicsPoints: [
    { title: "Deduction immediate", text: "Chaque dollar cotise reduit le revenu imposable de l'annee." },
    { title: "Croissance a l'abri de l'impot", text: "Les rendements s'accumulent sans etre imposes tant que l'argent reste dans le REER." },
    { title: "Retraits imposables", text: "L'avantage repose sur l'idee de cotiser a un taux eleve puis de retirer a un taux plus bas." },
  ],
  capTitle: "Plafond REER 2026",
  capValue: "32 490 $",
  capText: "Ou 18% du revenu gagne en 2025, selon le moins eleve des deux. Vos droits personnels figurent sur votre avis de cotisation ARC.",
  refundTableTitle: "Combien pouvez-vous recuperer en impots ?",
  refundTableHeaders: ["Revenu imposable", "Taux marginal QC", "Cotisation ex.", "Remboursement"],
  comparisonTitle: "REER vs CELI",
  comparisonHeaders: ["Critere", "REER", "CELI"],
  specialUsesTitle: "Autres usages du REER",
  specialUses: [
    { title: "RAP", points: ["Jusqu'a 35 000 $ par personne", "Utilisable pour un premier achat admissible", "Remboursement sur 15 ans"] },
    { title: "LLP", points: ["Jusqu'a 10 000 $ par an", "Maximum 20 000 $ au total", "Remboursement sur 10 ans"] },
  ],
  mistakesTitle: "Erreurs frequentes",
  mistakes: [
    { title: "Cotiser au mauvais moment fiscal", text: "Le REER est souvent plus puissant quand le taux marginal est plus eleve." },
    { title: "Retirer hors strategie", text: "Un retrait hors RAP ou LLP est imposable et fait perdre le droit correspondant." },
    { title: "Confondre contenant et placement", text: "Le REER n'est qu'une enveloppe. Ce que vous y deten ez compte autant que l'avantage fiscal." },
    { title: "Oublier la decumulation", text: "La conversion en FERR et les retraits futurs doivent etre penses des la phase d'accumulation." },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "Quel est le plafond REER 2026 ?", answer: "Le maximum general 2026 est de 32 490 $, sous reserve de votre espace personnel et du 18% de revenu gagne." },
    { question: "REER ou CELI en premier ?", answer: "Souvent, le REER est plus interessant quand votre taux marginal actuel est deja eleve. Le CELI garde l'avantage de la flexibilite." },
    { question: "Le RAP reste-t-il pertinent ?", answer: "Oui, surtout lorsqu'il s'integre a une strategie plus large avec CELIAPP et mise de fonds." },
  ],
};

const enRetirementRrsp: RetirementRrspDictionary = {
  routeKey: "retirementRrsp",
  metadata: {
    title: "RRSP guide for Quebec 2026 | ArgentQC.ca",
    description:
      "Understand RRSP contribution limits, tax savings, RRSP vs TFSA logic, and common mistakes for Quebec households in 2026.",
  },
  eyebrow: "Quebec retirement guide 2026",
  title: "RRSP: a practical guide for Quebec households",
  intro: "A clear starting point on the 2026 limit, tax refund logic, common use cases, and the mistakes that cost the most.",
  basicsTitle: "What an RRSP does",
  basicsPoints: [
    { title: "Immediate deduction", text: "Every dollar contributed reduces taxable income for the year." },
    { title: "Tax-sheltered growth", text: "Investment gains compound without current taxation while assets remain inside the plan." },
    { title: "Taxable withdrawals later", text: "The logic works best when you contribute at a higher tax rate and withdraw later at a lower one." },
  ],
  capTitle: "2026 RRSP limit",
  capValue: "32,490 CAD",
  capText: "Or 18% of 2025 earned income, whichever is lower. Your personal room appears on your CRA notice of assessment.",
  refundTableTitle: "How much tax could you get back?",
  refundTableHeaders: ["Taxable income", "Quebec marginal rate", "Example contribution", "Estimated refund"],
  comparisonTitle: "RRSP vs TFSA",
  comparisonHeaders: ["Criterion", "RRSP", "TFSA"],
  specialUsesTitle: "Other RRSP uses",
  specialUses: [
    { title: "Home Buyers' Plan", points: ["Up to 35,000 CAD per person", "Useful for an eligible first home purchase", "Repayment over 15 years"] },
    { title: "Lifelong Learning Plan", points: ["Up to 10,000 CAD per year", "20,000 CAD lifetime maximum", "Repayment over 10 years"] },
  ],
  mistakesTitle: "Common mistakes",
  mistakes: [
    { title: "Contributing at the wrong tax moment", text: "An RRSP usually becomes more powerful when your marginal tax rate is already meaningful." },
    { title: "Withdrawing without a plan", text: "Withdrawals outside structured programs are taxable and usually erode the long-term benefit." },
    { title: "Ignoring the underlying investments", text: "An RRSP is only a wrapper. Asset choice matters as much as the tax shelter." },
    { title: "Forgetting the withdrawal phase", text: "RRIF conversion and later withdrawal planning should be considered long before retirement." },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "What is the 2026 RRSP limit?", answer: "The general 2026 maximum is 32,490 CAD, subject to your personal room and the 18% earned-income rule." },
    { question: "RRSP or TFSA first?", answer: "The RRSP is often stronger when your current tax rate is already high, while the TFSA remains more flexible." },
    { question: "Is the Home Buyers' Plan still useful?", answer: "Yes, especially when combined with a broader first-home strategy that also includes the FHSA." },
  ],
};

const frRetirementTfsa: RetirementTfsaDictionary = {
  routeKey: "retirementTfsa",
  metadata: {
    title: "CELI Quebec 2026 | ArgentQC.ca",
    description:
      "Comprendre le CELI en 2026: droits cumulatifs, placements possibles, usages strategiques et erreurs classiques a eviter.",
  },
  eyebrow: "Guide retraite Quebec 2026",
  title: "CELI : comprendre l'outil le plus flexible",
  intro: "Une base claire sur les droits 2026, les usages pratiques, les placements possibles et les erreurs qui coutent cher.",
  basicsTitle: "Ce que le CELI permet",
  basicsBullets: [
    "Croissance des placements a l'abri de l'impot",
    "Retraits sans impot, pour n'importe quelle raison",
    "Les retraits ne comptent pas comme revenu imposable",
    "Les droits utilises reviennent l'annee suivante apres retrait",
    "Aucun age limite de cotisation",
  ],
  capTitle: "Plafond CELI 2026",
  capValue: "7 000 $",
  capText: "Les droits cumulatifs depuis 2009 atteignent 109 000 $ pour une personne admissible depuis le debut sans cotisations anterieures.",
  rightsTitle: "Droits cumulatifs depuis 2009",
  rightsHeaders: ["Annee", "Plafond annuel", "Cumul total"],
  placementsTitle: "Placements possibles dans un CELI",
  placements: [
    { title: "Compte d'epargne ou CPG", text: "Utile pour l'urgence et les objectifs de court terme.", risk: "Faible" },
    { title: "FNB d'indices", text: "Souvent l'option la plus efficace pour le long terme avec peu de frais.", risk: "Moyen a eleve" },
    { title: "Actions individuelles", text: "Plus de potentiel, mais aussi plus de volatilite et d'exigence.", risk: "Eleve" },
    { title: "Obligations", text: "Une option plus stable que les actions pour certains profils.", risk: "Faible a moyen" },
  ],
  usesTitle: "Comment utiliser le CELI selon l'objectif",
  uses: [
    { title: "Fonds d'urgence", horizon: "Court terme", text: "Le CELI est tres pratique pour une reserve liquide et non imposable au retrait." },
    { title: "Projet a moyen terme", horizon: "Moyen terme", text: "Voiture, renovations, voyage ou mise de fonds peuvent y etre planifies avec souplesse." },
    { title: "Retraite complementaire", horizon: "Long terme", text: "Les retraits du CELI ne reduisent pas la SV ni le SRG, ce qui en fait un excellent complement retraite." },
  ],
  mistakesTitle: "Erreurs classiques",
  mistakes: [
    { title: "Surcotiser", text: "L'ARC impose 1% par mois sur le montant excedentaire.", alert: true },
    { title: "Retirer puis recotiser trop vite", text: "Les droits recuperes reviennent seulement l'annee civile suivante." },
    { title: "Tout laisser en cash", text: "Le CELI est une enveloppe. Le vrai potentiel depend du placement choisi." },
    { title: "Sous-estimer les droits accumules", text: "Beaucoup de foyers disposent d'un espace inutilise important depuis 2009." },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "Quel est le plafond CELI 2026 ?", answer: "Le nouveau plafond annuel 2026 est de 7 000 $, avec un cumul total de 109 000 $ pour un adulte admissible depuis 2009." },
    { question: "Les droits non utilises expirent-ils ?", answer: "Non. Ils s'accumulent indefiniment tant que vous demeurez admissible." },
    { question: "CELI ou REER pour la retraite ?", answer: "Le CELI gagne en flexibilite, surtout si vous voulez eviter des retraits imposables plus tard. Le REER devient souvent plus puissant a taux d'impot eleve." },
  ],
};

const enRetirementTfsa: RetirementTfsaDictionary = {
  routeKey: "retirementTfsa",
  metadata: {
    title: "TFSA guide for Quebec 2026 | ArgentQC.ca",
    description:
      "Understand TFSA contribution room, eligible investments, common mistakes, and when the TFSA is more useful than the RRSP in 2026.",
  },
  eyebrow: "Quebec retirement guide 2026",
  title: "TFSA: the most flexible savings wrapper",
  intro: "A practical overview of 2026 room, use cases, eligible investments, and the mistakes that create the most friction.",
  basicsTitle: "What the TFSA does",
  basicsBullets: [
    "Investment growth compounds tax-free",
    "Withdrawals are tax-free and can be used for any purpose",
    "Withdrawals do not count as taxable income",
    "Contribution room comes back the following calendar year after withdrawal",
    "There is no age limit for contributing",
  ],
  capTitle: "2026 TFSA limit",
  capValue: "7,000 CAD",
  capText: "Cumulative room since 2009 reaches 109,000 CAD for someone eligible since the beginning who has never contributed.",
  rightsTitle: "Cumulative contribution room since 2009",
  rightsHeaders: ["Year", "Annual limit", "Running total"],
  placementsTitle: "What can sit inside a TFSA",
  placements: [
    { title: "Savings account or GIC", text: "Useful for emergency funds and short-term goals.", risk: "Low" },
    { title: "Index ETFs", text: "Often the cleanest long-term option because of low cost and broad diversification.", risk: "Medium to high" },
    { title: "Individual stocks", text: "More upside potential, but also more volatility and decision risk.", risk: "High" },
    { title: "Bonds", text: "A steadier option than equities for some households.", risk: "Low to medium" },
  ],
  usesTitle: "How to use a TFSA by goal",
  uses: [
    { title: "Emergency fund", horizon: "Short term", text: "A TFSA works well for liquid reserves that remain tax-free when withdrawn." },
    { title: "Medium-term project", horizon: "Medium term", text: "Useful for a car, renovations, travel, or a future down payment when flexibility matters." },
    { title: "Retirement top-up", horizon: "Long term", text: "TFSA withdrawals do not reduce OAS or GIS, which makes the account especially useful in retirement planning." },
  ],
  mistakesTitle: "Common mistakes",
  mistakes: [
    { title: "Overcontributing", text: "CRA can charge 1% per month on the excess amount.", alert: true },
    { title: "Withdrawing and recontributing too soon", text: "The room only comes back in the following calendar year." },
    { title: "Leaving everything in cash", text: "The TFSA is only a wrapper, so growth still depends on the underlying investment choice." },
    { title: "Ignoring built-up room", text: "Many households still hold a large amount of unused room from past years." },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "What is the 2026 TFSA limit?", answer: "The new annual 2026 TFSA limit is 7,000 CAD, and the cumulative total reaches 109,000 CAD for someone eligible since 2009." },
    { question: "Does unused room expire?", answer: "No. Unused TFSA room carries forward indefinitely while you remain eligible." },
    { question: "TFSA or RRSP for retirement?", answer: "The TFSA is more flexible and avoids taxable withdrawals later, while the RRSP often becomes more attractive once your current tax rate is already high." },
  ],
};

const frInsuranceAuto: InsuranceAutoDictionary = {
  routeKey: "insuranceAuto",
  metadata: {
    title: "Assurance auto Quebec 2026 | ArgentQC.ca",
    description:
      "Comprendre l'assurance auto au Quebec en 2026: regime SAAQ + assureur prive, couvertures utiles, prix moyens et leviers pour reduire la prime.",
  },
  eyebrow: "Guide assurances Quebec 2026",
  title: "Assurance auto au Quebec",
  intro: "Une base claire sur le regime particulier du Quebec, les garanties utiles, les facteurs de prix et les strategies les plus efficaces pour economiser.",
  regimeTitle: "Le regime Quebec : SAAQ + assureur prive",
  regimeHeaders: ["Volet", "Gestionnaire", "Ce qui est couvert", "Paye via"],
  coveragesTitle: "Les couvertures les plus utiles",
  coverages: [
    { name: "Responsabilite civile", text: "Couvre les dommages materiels causes a autrui. Le minimum legal est faible; beaucoup de conducteurs choisissent 1 M$ ou plus.", mandatory: true },
    { name: "Collision", text: "Protège votre vehicule lors d'une collision ou d'un impact avec un objet." },
    { name: "Risques speciaux", text: "Vol, vandalisme, incendie, bris de vitre, grele ou autres dommages hors collision." },
    { name: "Tous risques", text: "Combine collision et risques speciaux. Souvent pertinent pour un vehicule recent ou de valeur." },
  ],
  factorsTitle: "Ce qui fait varier la prime",
  factors: [
    { title: "Region", impact: "Eleve", text: "Montreal reste plus chere a cause du vol et de la densite de circulation. Les regions sont souvent nettement moins couteuses." },
    { title: "Age et experience", impact: "Tres eleve", text: "Les jeunes conducteurs paient beaucoup plus cher; l'experience et l'absence de sinistres comptent enormement." },
    { title: "Dossier de conduite", impact: "Tres eleve", text: "Reclamations et infractions peuvent peser pendant plusieurs annees sur le tarif." },
    { title: "Vehicule et usage", impact: "Eleve", text: "Le modele, le risque de vol, le kilometrage et l'usage personnel ou professionnel changent beaucoup le prix." },
  ],
  pricingTitle: "Ordres de grandeur 2026",
  pricingHeaders: ["Profil", "Montreal", "Laval / Longueuil", "Regions"],
  pricingRows: [
    { profile: "Jeune conducteur", montreal: "2 800 a 4 500 $", suburb: "2 200 a 3 500 $", regions: "1 800 a 2 800 $" },
    { profile: "Conducteur 25-39 ans", montreal: "1 400 a 2 200 $", suburb: "1 100 a 1 700 $", regions: "900 a 1 400 $" },
    { profile: "Conducteur 40-59 ans", montreal: "1 100 a 1 700 $", suburb: "850 a 1 350 $", regions: "700 a 1 100 $" },
  ],
  tipsTitle: "Leviers concrets pour payer moins",
  tips: [
    { title: "Magasiner a chaque renouvellement", text: "Les ecarts entre assureurs peuvent etre tres importants a couverture comparable." },
    { title: "Regrouper auto + habitation", text: "Le regroupement reste l'un des rabais les plus simples a obtenir." },
    { title: "Ajuster la franchise", text: "Une franchise plus elevee reduit souvent la prime, si vous avez l'epargne necessaire en cas de sinistre." },
    { title: "Revoir les protections inutiles", text: "Sur un vieux vehicule, certaines garanties coutent parfois plus qu'elles ne valent reellement." },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "La SAAQ couvre-t-elle tout ?", answer: "Non. Elle couvre surtout les dommages corporels. Les dommages materiels relevent d'un assureur prive selon vos garanties." },
    { question: "Pourquoi Montreal est-elle plus chere ?", answer: "Le vol, la circulation plus dense et la frequence des sinistres y tirent les primes vers le haut." },
    { question: "Un usage Uber ou livraison est-il couvert ?", answer: "Pas automatiquement. Un usage commercial doit etre declare, sinon une reclamation peut etre refusee." },
  ],
};

const enInsuranceAuto: InsuranceAutoDictionary = {
  routeKey: "insuranceAuto",
  metadata: {
    title: "Quebec car insurance guide 2026 | ArgentQC.ca",
    description:
      "Understand Quebec car insurance in 2026: the SAAQ/private split, useful coverages, pricing drivers, and practical ways to lower premiums.",
  },
  eyebrow: "Quebec insurance guide 2026",
  title: "Car insurance in Quebec",
  intro: "A practical overview of Quebec's unique setup, the coverages that matter, the main pricing factors, and the most useful savings levers.",
  regimeTitle: "The Quebec model: SAAQ + private insurer",
  regimeHeaders: ["Layer", "Managed by", "What it covers", "Paid through"],
  coveragesTitle: "The most useful coverages",
  coverages: [
    { name: "Civil liability", text: "Covers property damage caused to others. The legal minimum is low, so many drivers choose 1M CAD or more.", mandatory: true },
    { name: "Collision", text: "Protects your own vehicle after a collision or impact with an object." },
    { name: "Comprehensive / special perils", text: "Theft, vandalism, fire, broken glass, hail, and other non-collision damage." },
    { name: "All-risk package", text: "Combines collision and comprehensive. Often useful for a newer or higher-value vehicle." },
  ],
  factorsTitle: "What drives the premium",
  factors: [
    { title: "Region", impact: "High", text: "Montreal remains more expensive because of theft and traffic density, while regional areas are often materially cheaper." },
    { title: "Age and experience", impact: "Very high", text: "Young drivers pay much more; years of safe driving matter a lot." },
    { title: "Driving record", impact: "Very high", text: "Claims and infractions can affect pricing for several years." },
    { title: "Vehicle and usage", impact: "High", text: "Model risk, theft profile, annual mileage, and personal vs business use all move the premium." },
  ],
  pricingTitle: "Typical 2026 price ranges",
  pricingHeaders: ["Profile", "Montreal", "Laval / South Shore", "Regions"],
  pricingRows: [
    { profile: "Young driver", montreal: "2,800 to 4,500 CAD", suburb: "2,200 to 3,500 CAD", regions: "1,800 to 2,800 CAD" },
    { profile: "Driver aged 25-39", montreal: "1,400 to 2,200 CAD", suburb: "1,100 to 1,700 CAD", regions: "900 to 1,400 CAD" },
    { profile: "Driver aged 40-59", montreal: "1,100 to 1,700 CAD", suburb: "850 to 1,350 CAD", regions: "700 to 1,100 CAD" },
  ],
  tipsTitle: "Practical ways to pay less",
  tips: [
    { title: "Shop the renewal every year", text: "Price gaps between insurers can be large even when coverage is similar." },
    { title: "Bundle auto and home", text: "Bundling remains one of the easiest discounts to unlock." },
    { title: "Adjust the deductible", text: "A higher deductible often lowers the premium if you can absorb it from savings." },
    { title: "Trim unnecessary protections", text: "On an older car, some coverages can cost more than the realistic value they protect." },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "Does the SAAQ cover everything?", answer: "No. It mainly covers bodily injury. Property damage is handled by a private insurer based on your policy." },
    { question: "Why is Montreal more expensive?", answer: "Vehicle theft, traffic density, and claim frequency all push premiums higher there." },
    { question: "Is Uber or delivery use covered automatically?", answer: "Not by default. Commercial use must be declared or a claim may be denied." },
  ],
};

const frInsuranceHome: InsuranceHomeDictionary = {
  routeKey: "insuranceHome",
  metadata: {
    title: "Assurance habitation Quebec 2026 | ArgentQC.ca",
    description:
      "Guide assurance habitation Quebec 2026: locataire ou proprietaire, couvertures utiles, exclusions frequentes, prix moyens et methode simple pour estimer vos biens.",
  },
  eyebrow: "Guide assurances Quebec 2026",
  title: "Assurance habitation au Quebec",
  intro:
    "Une base claire pour comprendre la logique locataire vs proprietaire, ce qui est couvert, les exclusions importantes et les ordres de grandeur de prime.",
  comparisonTitle: "Locataire ou proprietaire : ce qui change vraiment",
  comparisonHeaders: ["Aspect", "Locataire", "Proprietaire"],
  comparisonRows: [
    { aspect: "Ce qui est assure", renter: "Vos biens + responsabilite civile", owner: "Le batiment, vos biens et la responsabilite civile" },
    { aspect: "Pourquoi la police compte", renter: "Protege vos effets personnels et votre responsabilite", owner: "Protege aussi la valeur de reconstruction" },
    { aspect: "Fourchette de prix", renter: "25 a 55 $ / mois", owner: "90 a 220 $ / mois selon le logement" },
    { aspect: "Qui peut l'exiger", renter: "Souvent le proprietaire ou le bail", owner: "Souvent le preteur hypothecaire" },
  ],
  coverageTitle: "Ce qui est souvent couvert, et ce qui ne l'est pas",
  coverageRows: [
    { risk: "Incendie et fumee", covered: true, note: "Protection de base presente dans la plupart des contrats standards." },
    { risk: "Vol et vandalisme", covered: true, note: "Couvert en general, avec franchises et plafonds distincts pour certains biens de valeur." },
    { risk: "Responsabilite civile", covered: true, note: "Essentielle si vous causez des dommages a un voisin ou a un visiteur." },
    { risk: "Degats d'eau soudains", covered: true, note: "Souvent couverts, mais les details varient beaucoup pour refoulement et infiltration." },
    { risk: "Inondation de cours d'eau", covered: false, note: "Souvent exclue du contrat de base; une protection additionnelle peut etre necessaire." },
    { risk: "Usure normale et mauvais entretien", covered: false, note: "Les assureurs couvrent un sinistre, pas la deterioration progressive." },
    { risk: "Tremblement de terre", covered: false, note: "Habituellement en option seulement, selon la region et l'assureur." },
  ],
  pricingTitle: "Ordres de grandeur 2026 au Quebec",
  pricingHeaders: ["Profil", "Valeur assuree", "Prime mensuelle", "Note"],
  pricingRows: [
    { housing: "Appartement locatif 3 1/2", insuredValue: "15 000 a 25 000 $", monthlyPremium: "20 a 35 $", note: "Profil simple avec peu de biens et peu de risques particuliers." },
    { housing: "Appartement locatif 4 1/2 ou 5 1/2", insuredValue: "25 000 a 50 000 $", monthlyPremium: "30 a 55 $", note: "Le cas le plus courant pour un locataire urbain." },
    { housing: "Condo proprietaire occupant", insuredValue: "Unite + biens", monthlyPremium: "60 a 120 $", note: "La police du syndicat ne remplace pas la protection individuelle." },
    { housing: "Maison unifamiliale", insuredValue: "Batiment + biens", monthlyPremium: "100 a 220 $", note: "Le cout depend beaucoup de la valeur de reconstruction et du secteur." },
  ],
  inventoryTitle: "Comment estimer correctement vos biens",
  inventoryIntro:
    "Beaucoup de foyers sous-estiment la valeur de remplacement de leurs biens. Le plus simple est de raisonner par grandes categories et de chiffrer le remplacement a neuf.",
  inventoryRows: [
    { category: "Electroniques", examples: "Portable, tele, tablette, console, appareil photo", range: "2 000 a 8 000 $" },
    { category: "Vetements et chaussures", examples: "Manteaux, bottes, tenues de travail, sport et accessoires", range: "3 000 a 10 000 $" },
    { category: "Mobilier", examples: "Canape, lit, matelas, bureau, table, chaises", range: "5 000 a 20 000 $" },
    { category: "Electromenagers", examples: "Laveuse, secheuse, frigo ou cuisiniere si vous les possedez", range: "2 000 a 6 000 $" },
    { category: "Loisirs et objets de valeur", examples: "Velo, skis, instruments, bijoux, montres", range: "1 000 a 10 000 $+" },
  ],
  inventoryTip:
    "Prenez des photos ou une video de chaque piece et conservez la preuve dans le nuage. En cas de sinistre, cela facilite beaucoup la reclamation.",
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "L'assurance habitation est-elle obligatoire pour un locataire ?", answer: "Pas par la loi, mais elle est souvent exigee au bail et reste essentielle pour vos biens et votre responsabilite civile." },
    { question: "Pourquoi l'assurance du proprietaire ne suffit-elle pas ?", answer: "Parce qu'elle protege surtout l'immeuble. Vos meubles, vetements et appareils ne sont pas couverts par la police du proprietaire." },
    { question: "Valeur de remplacement ou valeur actuelle ?", answer: "La valeur de remplacement est souvent preferable, car elle couvre le cout d'achat d'un equivalent neuf plutot qu'une valeur amortie." },
  ],
};

const enInsuranceHome: InsuranceHomeDictionary = {
  routeKey: "insuranceHome",
  metadata: {
    title: "Quebec home insurance guide 2026 | ArgentQC.ca",
    description:
      "Quebec home insurance in 2026: renter vs owner logic, useful coverages, common exclusions, typical pricing, and a practical way to value your contents.",
  },
  eyebrow: "Quebec insurance guide 2026",
  title: "Home insurance in Quebec",
  intro:
    "A practical foundation for understanding renter versus owner coverage, key exclusions, and the pricing ranges that matter in Quebec.",
  comparisonTitle: "Renter versus owner: what actually changes",
  comparisonHeaders: ["Aspect", "Renter", "Owner"],
  comparisonRows: [
    { aspect: "What is insured", renter: "Your contents and liability", owner: "The building, your contents, and liability" },
    { aspect: "Why the policy matters", renter: "Protects personal property and liability risk", owner: "Also protects reconstruction exposure" },
    { aspect: "Typical pricing", renter: "25 to 55 CAD / month", owner: "90 to 220 CAD / month depending on home type" },
    { aspect: "Who may require it", renter: "Often the landlord or lease terms", owner: "Often the mortgage lender" },
  ],
  coverageTitle: "What is often covered, and what is not",
  coverageRows: [
    { risk: "Fire and smoke", covered: true, note: "Usually part of the standard base coverage." },
    { risk: "Theft and vandalism", covered: true, note: "Commonly covered, though deductibles and sub-limits can apply to valuables." },
    { risk: "Personal liability", covered: true, note: "Essential if you damage a neighbour's unit or a visitor is injured." },
    { risk: "Sudden water damage", covered: true, note: "Often covered, but sewer backup and infiltration wording should be reviewed closely." },
    { risk: "Overland flood / river overflow", covered: false, note: "Often excluded from the base policy unless an endorsement is added." },
    { risk: "Wear and tear / poor maintenance", covered: false, note: "Insurance covers a loss event, not gradual deterioration." },
    { risk: "Earthquake", covered: false, note: "Usually optional, depending on insurer and location." },
  ],
  pricingTitle: "Typical 2026 Quebec price ranges",
  pricingHeaders: ["Profile", "Insured value", "Monthly premium", "Notes"],
  pricingRows: [
    { housing: "Rental apartment 3 1/2", insuredValue: "15,000 to 25,000 CAD", monthlyPremium: "20 to 35 CAD", note: "Simple profile with limited contents and lower exposure." },
    { housing: "Rental apartment 4 1/2 or 5 1/2", insuredValue: "25,000 to 50,000 CAD", monthlyPremium: "30 to 55 CAD", note: "A common urban renter scenario." },
    { housing: "Owner-occupied condo", insuredValue: "Unit + contents", monthlyPremium: "60 to 120 CAD", note: "The condo corporation policy does not replace your personal policy." },
    { housing: "Detached house", insuredValue: "Building + contents", monthlyPremium: "100 to 220 CAD", note: "Pricing depends heavily on reconstruction cost and location." },
  ],
  inventoryTitle: "How to value your contents properly",
  inventoryIntro:
    "Many households underestimate replacement value. The easiest method is to inventory large categories and estimate what it would cost to replace them new.",
  inventoryRows: [
    { category: "Electronics", examples: "Laptop, TV, tablet, console, camera", range: "2,000 to 8,000 CAD" },
    { category: "Clothing and footwear", examples: "Coats, boots, workwear, sportswear, accessories", range: "3,000 to 10,000 CAD" },
    { category: "Furniture", examples: "Sofa, bed, mattress, desk, dining set", range: "5,000 to 20,000 CAD" },
    { category: "Appliances", examples: "Washer, dryer, fridge, stove if you own them", range: "2,000 to 6,000 CAD" },
    { category: "Leisure and valuables", examples: "Bike, skis, instruments, jewellery, watches", range: "1,000 to 10,000+ CAD" },
  ],
  inventoryTip:
    "Take photos or a short video of each room and store the proof in the cloud. It makes a claim much easier if a loss occurs.",
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "Is home insurance mandatory for renters?", answer: "Not by law, but it is often required by the lease and remains essential for contents and liability exposure." },
    { question: "Why is the landlord's policy not enough?", answer: "Because it primarily protects the building. Your own contents are generally not covered by the landlord's insurance." },
    { question: "Replacement cost or actual cash value?", answer: "Replacement cost is often the stronger choice because it reimburses the cost of a comparable new item rather than a depreciated value." },
  ],
};

const frInsuranceLife: InsuranceLifeDictionary = {
  routeKey: "insuranceLife",
  metadata: {
    title: "Assurance vie Quebec 2026 | ArgentQC.ca",
    description:
      "Guide assurance vie Quebec 2026: temporaire ou permanente, niveau de couverture, assureurs presents au Quebec et reperes pour choisir sans surpayer.",
  },
  eyebrow: "Guide assurances Quebec 2026",
  title: "Assurance vie au Quebec",
  intro:
    "Une base claire pour distinguer temporaire et permanente, estimer un ordre de grandeur de couverture et comprendre dans quels cas l'assurance vie devient vraiment utile.",
  whyTitle: "Quand l'assurance vie devient pertinente",
  whyPoints: [
    "Quand un conjoint, des enfants ou des proches dependent de votre revenu.",
    "Quand une hypothèque ou des dettes importantes resteraient a payer apres un deces.",
    "Quand vous voulez proteger un niveau de vie familial pendant les annees les plus fragiles.",
    "Quand vous cherchez a couvrir des besoins successoraux plus permanents.",
  ],
  comparisonTitle: "Temporaire ou permanente",
  comparisonHeaders: ["Critere", "Temporaire", "Permanente"],
  comparisonRows: [
    { criteria: "Duree", term: "10, 20 ou 30 ans en general", permanent: "Toute la vie" },
    { criteria: "Prix de depart", term: "Plus abordable", permanent: "Beaucoup plus eleve" },
    { criteria: "Valeur accumulee", term: "Aucune", permanent: "Peut inclure une valeur de rachat" },
    { criteria: "Usage type", term: "Hypotheque, enfants, dettes", permanent: "Succession, patrimoine, besoin garanti a vie" },
    { criteria: "Choix par defaut", term: "Le plus logique pour beaucoup de familles", permanent: "Plus niche, a justifier par un objectif precis" },
  ],
  needsTitle: "Ordres de grandeur de couverture",
  needsIntro:
    "Une regle simple consiste a combiner revenu a remplacer, dettes a effacer et besoins specifiques des enfants ou du conjoint. Ces repères restent indicatifs.",
  needsRows: [
    { profile: "Couple sans enfant avec hypothèque", target: "300 000 a 700 000 $", note: "Souvent surtout pour proteger le logement et la transition du conjoint." },
    { profile: "Jeune famille avec 1-2 enfants", target: "750 000 a 1 500 000 $", note: "Le besoin grimpe vite quand deux revenus sont indispensables au foyer." },
    { profile: "Famille avec revenus eleves ou grosses dettes", target: "1 500 000 $ et +", note: "Le bon montant depend du train de vie, des dettes et de l'horizon a couvrir." },
  ],
  providersTitle: "Assureurs souvent rencontres au Quebec",
  providers: [
    { name: "iA Groupe financier", type: "Temporaire et permanente", note: "Tres present au Quebec avec une offre large et un bon maillage de conseillers." },
    { name: "Beneva", type: "Temporaire et permanente", note: "Marque forte au Quebec, souvent visible pour les foyers deja exposes a l'univers mutualiste." },
    { name: "Desjardins Assurances", type: "Temporaire et permanente", note: "Souvent considere par les membres Desjardins qui veulent centraliser plusieurs produits." },
    { name: "Canada Vie / Sun Life", type: "Large gamme nationale", note: "Approche utile pour comparer hors ecosysteme strictement quebecois." },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "Temporaire ou permanente pour une famille classique ?", answer: "Dans la plupart des cas, la temporaire suffit largement pour couvrir les annees ou le risque financier est le plus eleve." },
    { question: "Quel montant choisir ?", answer: "Le bon montant depend du revenu a remplacer, des dettes, de l'age des enfants et de l'autonomie financiere du conjoint survivant." },
    { question: "Quand faut-il souscrire ?", answer: "Le plus tot quand le besoin existe reellement, car l'age et la sante influencent directement le prix et l'assurabilite." },
  ],
};

const enInsuranceLife: InsuranceLifeDictionary = {
  routeKey: "insuranceLife",
  metadata: {
    title: "Quebec life insurance guide 2026 | ArgentQC.ca",
    description:
      "Quebec life insurance in 2026: term vs permanent, coverage sizing, major insurers active in Quebec, and practical selection rules to avoid overbuying.",
  },
  eyebrow: "Quebec insurance guide 2026",
  title: "Life insurance in Quebec",
  intro:
    "A practical overview of term versus permanent insurance, coverage sizing logic, and the situations where life insurance materially matters.",
  whyTitle: "When life insurance actually matters",
  whyPoints: [
    "When a spouse, children, or other dependants rely on your income.",
    "When a mortgage or major debts would remain after death.",
    "When you need to protect household stability during the most financially exposed years.",
    "When you have a permanent estate-planning objective rather than only a temporary risk.",
  ],
  comparisonTitle: "Term versus permanent insurance",
  comparisonHeaders: ["Criteria", "Term", "Permanent"],
  comparisonRows: [
    { criteria: "Duration", term: "Typically 10, 20, or 30 years", permanent: "For life" },
    { criteria: "Starting cost", term: "More affordable", permanent: "Much higher" },
    { criteria: "Cash value", term: "None", permanent: "May build cash value" },
    { criteria: "Typical use", term: "Mortgage, children, major debts", permanent: "Estate, wealth transfer, lifelong guaranteed need" },
    { criteria: "Default choice", term: "Usually the logical option for many families", permanent: "More niche and should be tied to a clear objective" },
  ],
  needsTitle: "Typical coverage ranges",
  needsIntro:
    "A simple framework combines income replacement, debts to clear, and specific family needs. These ranges are directional rather than a substitute for underwriting advice.",
  needsRows: [
    { profile: "Couple without children and with a mortgage", target: "300,000 to 700,000 CAD", note: "Often enough to protect the home and a transition period for the surviving spouse." },
    { profile: "Young family with 1-2 children", target: "750,000 to 1,500,000 CAD", note: "Needs rise quickly when both incomes are structurally necessary." },
    { profile: "Higher-income household or heavy debt load", target: "1,500,000 CAD and more", note: "The right amount depends on lifestyle, liabilities, and time horizon." },
  ],
  providersTitle: "Insurers often seen in Quebec",
  providers: [
    { name: "iA Financial Group", type: "Term and permanent", note: "Very established in Quebec with a broad advisor network." },
    { name: "Beneva", type: "Term and permanent", note: "Strong Quebec presence and frequently considered by households already in that ecosystem." },
    { name: "Desjardins Insurance", type: "Term and permanent", note: "Often evaluated by members looking to keep multiple financial products together." },
    { name: "Canada Life / Sun Life", type: "Broad national lineup", note: "Useful comparison points outside a purely Quebec-centric shortlist." },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "Term or permanent for a typical family?", answer: "For most families, term insurance is enough because it covers the years when financial exposure is highest." },
    { question: "How much coverage should I buy?", answer: "The right amount depends on income replacement needs, debts, the age of children, and the surviving spouse's financial autonomy." },
    { question: "When should I apply?", answer: "As soon as the need is real, because age and health directly influence both price and insurability." },
  ],
};

const frMovingChecklist: MovingChecklistDictionary = {
  routeKey: "movingChecklist",
  metadata: {
    title: "Checklist demenagement Quebec 2026 | ArgentQC.ca",
    description:
      "Checklist demenagement Quebec de 8 semaines avant au jour J, avec progression interactive et liens directs vers les organismes a aviser.",
  },
  eyebrow: "Outil interactif · Demenagement Quebec",
  title: "Checklist demenagement Quebec",
  intro:
    "Une checklist pratique pour suivre les taches importantes avant, pendant et apres un demenagement au Quebec. La progression reste en memoire dans l'onglet.",
  progressLabel: "Progression",
  completedLabel: "Checklist complete",
  privacyNote: "La progression est sauvegardee dans cet onglet et sera perdue si vous le fermez.",
  resetLabel: "Remettre la checklist a zero",
  resourcesTitle: "Organismes a aviser",
  sectionCounterLabel: "taches",
  ctaCostTitle: "Combien coute un demenagement ?",
  ctaCostText: "Estimer les frais reels et les leviers pour economiser.",
  ctaInsuranceTitle: "Assurance habitation Quebec",
  ctaInsuranceText: "Verifier la couverture du nouveau logement avant l'arrivee.",
  sections: [
    {
      title: "8 semaines avant",
      emoji: "Plan",
      tasks: [
        { id: "8-1", text: "Donner l'avis requis au proprietaire ou confirmer la date de depart.", note: "Verifier les delais applicables au bail et conserver une trace ecrite." },
        { id: "8-2", text: "Lancer la recherche de logement ou confirmer le nouveau bail." },
        { id: "8-3", text: "Comparer plusieurs soumissions de demenageurs ou de location de camion." },
        { id: "8-4", text: "Commencer a trier, vendre, donner ou recycler ce qui ne suivra pas." },
      ],
    },
    {
      title: "4 semaines avant",
      emoji: "Boxes",
      tasks: [
        { id: "4-1", text: "Reserver le demenageur, le camion ou l'equipement necessaire." },
        { id: "4-2", text: "Commencer les boites pour les objets non essentiels." },
        { id: "4-3", text: "Lancer la reexpedition du courrier avec Postes Canada." },
        { id: "4-4", text: "Contacter l'assureur habitation pour le nouveau logement." },
        { id: "4-5", text: "Informer employeur, ecole ou garderie du changement d'adresse." },
      ],
    },
    {
      title: "2 semaines avant",
      emoji: "Admin",
      tasks: [
        { id: "2-1", text: "Mettre a jour l'adresse a la SAAQ." },
        { id: "2-2", text: "Mettre a jour l'adresse a Revenu Quebec et a l'ARC." },
        { id: "2-3", text: "Mettre a jour banques, cartes, RAMQ et autres dossiers importants." },
        { id: "2-4", text: "Programmer Hydro-Quebec, internet et les autres services." },
      ],
    },
    {
      title: "1 semaine avant",
      emoji: "Final",
      tasks: [
        { id: "1-1", text: "Confirmer l'heure, l'adresse et les conditions avec les demenageurs." },
        { id: "1-2", text: "Preparer une boite de survie pour 24 a 48 heures." },
        { id: "1-3", text: "Vider congelateur, demonter les meubles et regrouper les documents importants." },
      ],
    },
    {
      title: "Jour J",
      emoji: "Move",
      tasks: [
        { id: "j-1", text: "Photographier l'ancien logement avant de le quitter." },
        { id: "j-2", text: "Relever les compteurs et verifier l'etat des lieux." },
        { id: "j-3", text: "Inspecter le nouveau logement a l'arrivee et noter les dommages existants." },
        { id: "j-4", text: "Verifier que tous les meubles et cartons sont arrives." },
      ],
    },
    {
      title: "Apres le demenagement",
      emoji: "Done",
      tasks: [
        { id: "a-1", text: "Verifier detecteurs de fumee, serrures et elements de securite." },
        { id: "a-2", text: "Conserver les recus de demenagement et les confirmations administratives." },
        { id: "a-3", text: "Confirmer que le courrier et les services sont bien rediriges." },
      ],
    },
  ],
  resources: [
    { name: "Postes Canada", description: "Reexpedition du courrier", href: "https://www.canadapost-postescanada.ca/cpc/fr/particuliers/postez-et-recevez/gerer-votre-courrier/reacheminement.page", emoji: "Mail" },
    { name: "SAAQ", description: "Changement d'adresse permis et immatriculation", href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/", emoji: "Car" },
    { name: "Revenu Quebec", description: "Mettre a jour l'adresse fiscale provinciale", href: "https://www.revenuquebec.ca/fr/services-en-ligne/", emoji: "Tax" },
    { name: "ARC", description: "Mettre a jour l'adresse fiscale federale", href: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-electroniques-particuliers/dossier-particuliers.html", emoji: "CRA" },
    { name: "RAMQ", description: "Mettre a jour le dossier sante", href: "https://www.ramq.gouv.qc.ca/fr/citoyens/informations-importantes", emoji: "Health" },
    { name: "Hydro-Quebec", description: "Fermer l'ancien compte et ouvrir le nouveau", href: "https://www.hydroquebec.com/residentiel/demenagement.html", emoji: "Power" },
  ],
};

const enMovingChecklist: MovingChecklistDictionary = {
  routeKey: "movingChecklist",
  metadata: {
    title: "Quebec moving checklist 2026 | ArgentQC.ca",
    description:
      "Quebec moving checklist from eight weeks before to moving day, with interactive progress tracking and direct links to the main organizations to notify.",
  },
  eyebrow: "Interactive tool · Moving in Quebec",
  title: "Quebec moving checklist",
  intro:
    "A practical checklist to track the most important tasks before, during, and after a move in Quebec. Progress is stored in the current tab.",
  progressLabel: "Progress",
  completedLabel: "Checklist complete",
  privacyNote: "Progress is stored in this tab and will be lost if you close it.",
  resetLabel: "Reset checklist",
  resourcesTitle: "Organizations to notify",
  sectionCounterLabel: "tasks",
  ctaCostTitle: "How much does a move cost?",
  ctaCostText: "Estimate the real cost and the best ways to reduce it.",
  ctaInsuranceTitle: "Quebec home insurance",
  ctaInsuranceText: "Review the new home's coverage before move-in.",
  sections: [
    {
      title: "8 weeks before",
      emoji: "Plan",
      tasks: [
        { id: "8-1", text: "Give the required notice to the landlord or confirm the move-out date.", note: "Check the applicable lease rules and keep written proof." },
        { id: "8-2", text: "Start the housing search or confirm the new lease." },
        { id: "8-3", text: "Compare several moving company or truck rental quotes." },
        { id: "8-4", text: "Start sorting, selling, donating, or recycling what will not move with you." },
      ],
    },
    {
      title: "4 weeks before",
      emoji: "Boxes",
      tasks: [
        { id: "4-1", text: "Book the mover, truck, or required moving equipment." },
        { id: "4-2", text: "Start packing non-essential items." },
        { id: "4-3", text: "Set up mail forwarding with Canada Post." },
        { id: "4-4", text: "Contact the home insurer for the new address." },
        { id: "4-5", text: "Notify employer, school, or daycare of the address change." },
      ],
    },
    {
      title: "2 weeks before",
      emoji: "Admin",
      tasks: [
        { id: "2-1", text: "Update your address with the SAAQ." },
        { id: "2-2", text: "Update your address with Revenu Quebec and the CRA." },
        { id: "2-3", text: "Update banks, cards, RAMQ, and other critical files." },
        { id: "2-4", text: "Schedule Hydro-Quebec, internet, and the other utilities." },
      ],
    },
    {
      title: "1 week before",
      emoji: "Final",
      tasks: [
        { id: "1-1", text: "Confirm time, address, and constraints with the movers." },
        { id: "1-2", text: "Prepare a 24 to 48-hour essentials box." },
        { id: "1-3", text: "Empty the freezer, disassemble furniture, and group important documents." },
      ],
    },
    {
      title: "Moving day",
      emoji: "Move",
      tasks: [
        { id: "j-1", text: "Photograph the old home before leaving." },
        { id: "j-2", text: "Record utility meters and confirm move-out condition." },
        { id: "j-3", text: "Inspect the new home on arrival and note existing damage." },
        { id: "j-4", text: "Confirm that all furniture and boxes have arrived." },
      ],
    },
    {
      title: "After the move",
      emoji: "Done",
      tasks: [
        { id: "a-1", text: "Check smoke detectors, locks, and safety basics." },
        { id: "a-2", text: "Keep moving receipts and administrative confirmations." },
        { id: "a-3", text: "Confirm that mail forwarding and services are working properly." },
      ],
    },
  ],
  resources: [
    { name: "Canada Post", description: "Mail forwarding", href: "https://www.canadapost-postescanada.ca/cpc/en/personal/receiving/manage-mail/mail-forwarding.page", emoji: "Mail" },
    { name: "SAAQ", description: "Address change for licence and registration", href: "https://saaq.gouv.qc.ca/en/online-services/change-address/", emoji: "Car" },
    { name: "Revenu Quebec", description: "Update provincial tax address", href: "https://www.revenuquebec.ca/en/online-services/", emoji: "Tax" },
    { name: "CRA", description: "Update federal tax address", href: "https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html", emoji: "CRA" },
    { name: "RAMQ", description: "Update health insurance record", href: "https://www.ramq.gouv.qc.ca/en/citizens/health-insurance", emoji: "Health" },
    { name: "Hydro-Quebec", description: "Close the old account and open the new one", href: "https://www.hydroquebec.com/residential/moving.html", emoji: "Power" },
  ],
};

const frMovingCost: MovingCostDictionary = {
  routeKey: "movingCost",
  metadata: {
    title: "Cout demenagement Quebec 2026 | ArgentQC.ca",
    description:
      "Prix d'un demenagement au Quebec en 2026: camion vs demenageurs, fourchettes par type de logement, couts oublies et leviers concrets pour economiser.",
  },
  eyebrow: "Guide demenagement Quebec 2026",
  title: "Combien coute un demenagement au Quebec ?",
  intro:
    "Une base simple pour estimer un demenagement local au Quebec, comparer autonomie et professionnels, et reperer les couts qui derapent le plus souvent.",
  tableTitle: "Ordres de grandeur par type de logement",
  tableHeaders: ["Logement", "Camion / DIY", "Demenageurs", "Duree typique"],
  tableRows: [
    { housing: "Studio ou 3 1/2", diy: "150 a 350 $", professional: "400 a 800 $", duration: "2 a 4 h" },
    { housing: "4 1/2", diy: "250 a 500 $", professional: "700 a 1 400 $", duration: "4 a 6 h" },
    { housing: "5 1/2", diy: "400 a 700 $", professional: "1 100 a 2 000 $", duration: "6 a 10 h" },
    { housing: "Maison ou 6 1/2+", diy: "600 a 1 000 $", professional: "1 800 a 3 500 $", duration: "8 a 14 h" },
  ],
  comparisonTitle: "Camion ou demenageurs professionnels",
  comparisonCards: [
    {
      title: "Location de camion",
      prosTitle: "Avantages",
      pros: ["Moins cher sur les petits volumes", "Plus flexible sur l'horaire", "Peut suffire pour un studio ou un 3 1/2 bien organise"],
      consTitle: "Inconvenients",
      cons: ["Demande de l'aide physique", "Plus de risque de blessure ou de casse", "Pas la meme couverture qu'un pro"],
    },
    {
      title: "Demenageurs professionnels",
      prosTitle: "Avantages",
      pros: ["Gain de temps net", "Mieux adapte aux gros meubles", "Plus rassurant pour les charges lourdes et les escaliers"],
      consTitle: "Inconvenients",
      cons: ["Cout plus eleve", "Disponibilite plus tendue autour du 1er juillet", "Qualite tres variable selon la compagnie"],
    },
  ],
  hiddenCostsTitle: "Couts oublies les plus frequents",
  hiddenCosts: [
    { item: "Materiaux d'emballage", range: "50 a 200 $", note: "Boites, ruban, papier bulle et protections diverses." },
    { item: "Stationnement ou permis", range: "0 a 200 $", note: "Peut etre requis selon la ville ou le quartier." },
    { item: "Nettoyage", range: "100 a 400 $", note: "Souvent oublie dans le budget total du depart." },
    { item: "Garde-meubles", range: "100 a 400 $ / mois", note: "Peut faire mal si les dates ne s'alignent pas." },
    { item: "Premier mois d'assurance habitation", range: "50 a 150 $", note: "A activer avant l'entree dans le logement." },
  ],
  savingsTitle: "Leviers concrets pour payer moins",
  savings: [
    { title: "Eviter le 1er juillet", text: "Les prix explosent autour de cette date. Quelques semaines d'ecart peuvent changer fortement la facture." },
    { title: "Comparer plusieurs soumissions", text: "Comparer au moins trois offres reste l'un des meilleurs moyens d'eviter un mauvais prix." },
    { title: "Desencombrer avant", text: "Moins vous deplacez d'affaires, moins vous payez en temps, main-d'oeuvre et volume." },
    { title: "Recuperer des boites gratuites", text: "SAQ, epiceries et plateformes locales restent une source simple d'economies." },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "Quel est le prix moyen d'un demenagement ?", answer: "Pour un 4 1/2 local, on tourne souvent autour de 700 a 1 400 $ avec des pros, moins si vous faites une partie du travail vous-meme." },
    { question: "Camion ou professionnels ?", answer: "Pour un petit logement et un bon reseau d'aide, le camion peut etre rationnel. Pour un volume plus lourd ou fragile, les pros gagnent vite en valeur." },
    { question: "Les frais peuvent-ils etre deductibles ?", answer: "Oui dans certains cas lies a un emploi ou a des etudes, sous conditions federales precises. Il faut garder les recus." },
  ],
  ctaChecklistTitle: "Checklist demenagement",
  ctaChecklistText: "Suivre les etapes a ne pas manquer avant et apres le jour J.",
  ctaInsuranceTitle: "Assurance habitation",
  ctaInsuranceText: "Verifier la protection du nouveau logement avant d'entrer.",
};

const enMovingCost: MovingCostDictionary = {
  routeKey: "movingCost",
  metadata: {
    title: "Quebec moving cost guide 2026 | ArgentQC.ca",
    description:
      "Quebec moving costs in 2026: truck rental vs movers, price ranges by home size, commonly missed costs, and practical ways to keep the total under control.",
  },
  eyebrow: "Quebec moving guide 2026",
  title: "How much does a move cost in Quebec?",
  intro:
    "A practical baseline for estimating a local move in Quebec, comparing DIY versus movers, and identifying the cost lines that most often run over budget.",
  tableTitle: "Typical price ranges by home size",
  tableHeaders: ["Home", "Truck / DIY", "Professional movers", "Typical duration"],
  tableRows: [
    { housing: "Studio or 3 1/2", diy: "150 to 350 CAD", professional: "400 to 800 CAD", duration: "2 to 4 h" },
    { housing: "4 1/2", diy: "250 to 500 CAD", professional: "700 to 1,400 CAD", duration: "4 to 6 h" },
    { housing: "5 1/2", diy: "400 to 700 CAD", professional: "1,100 to 2,000 CAD", duration: "6 to 10 h" },
    { housing: "House or 6 1/2+", diy: "600 to 1,000 CAD", professional: "1,800 to 3,500 CAD", duration: "8 to 14 h" },
  ],
  comparisonTitle: "Truck rental versus professional movers",
  comparisonCards: [
    {
      title: "Truck rental",
      prosTitle: "Pros",
      pros: ["Cheaper on small volumes", "More flexible scheduling", "Can make sense for a well-organized studio or 3 1/2"],
      consTitle: "Cons",
      cons: ["Needs physical help", "Higher injury and damage risk", "Not the same protection level as a mover"],
    },
    {
      title: "Professional movers",
      prosTitle: "Pros",
      pros: ["Major time savings", "Better fit for bulky furniture", "More practical for heavy loads and stairs"],
      consTitle: "Cons",
      cons: ["Higher price", "Tighter availability around July 1", "Quality varies significantly between companies"],
    },
  ],
  hiddenCostsTitle: "Most commonly missed costs",
  hiddenCosts: [
    { item: "Packing materials", range: "50 to 200 CAD", note: "Boxes, tape, bubble wrap, and protective material." },
    { item: "Parking or permits", range: "0 to 200 CAD", note: "May be required depending on the city or neighbourhood." },
    { item: "Cleaning", range: "100 to 400 CAD", note: "Often left out of the total move-out budget." },
    { item: "Storage", range: "100 to 400 CAD / month", note: "Can add up quickly when dates do not align." },
    { item: "First month of home insurance", range: "50 to 150 CAD", note: "Should be in place before move-in." },
  ],
  savingsTitle: "Practical ways to reduce the total",
  savings: [
    { title: "Avoid July 1", text: "Prices spike around that date. A small shift in timing can materially change the total." },
    { title: "Compare several quotes", text: "Getting at least three quotes remains one of the best ways to avoid overpaying." },
    { title: "Declutter before the move", text: "The less you move, the less you pay in time, labour, and truck volume." },
    { title: "Find free boxes", text: "Liquor stores, groceries, and local marketplaces are still an easy source of savings." },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "What is a typical moving price?", answer: "For a local 4 1/2, a professional move often lands around 700 to 1,400 CAD, less if you handle part of the work yourself." },
    { question: "Truck or movers?", answer: "For a small apartment and a reliable help network, a truck can be rational. For heavier or fragile volumes, movers quickly earn their cost." },
    { question: "Can moving costs be deductible?", answer: "Yes in some employment or education cases under federal rules. Receipts need to be kept." },
  ],
  ctaChecklistTitle: "Moving checklist",
  ctaChecklistText: "Track the key tasks before and after moving day.",
  ctaInsuranceTitle: "Home insurance",
  ctaInsuranceText: "Review protection for the new home before move-in.",
};

const frMovingMontreal: MovingMontrealDictionary = {
  routeKey: "movingMontreal",
  metadata: {
    title: "Demenager a Montreal 2026 | ArgentQC.ca",
    description:
      "Guide pour demenager a Montreal en 2026: loyers par quartier, realite du 1er juillet, permis de stationnement, ressources locales et choix de quartier selon votre profil.",
  },
  eyebrow: "Guide local · Montreal 2026",
  title: "Demenager a Montreal",
  intro:
    "Une base pratique pour comprendre la realite du marche locatif montrealais, les contraintes du 1er juillet et les quartiers qui collent le mieux a votre situation.",
  alertTitle: "Le 1er juillet a Montreal",
  alertText:
    "Montreal concentre une grande partie des demenagements du 1er juillet au Quebec. Les camions se reservent tres tot, les prix montent fortement et la logistique se complique vite. Si vous pouvez bouger quelques jours avant ou apres, le gain est reel.",
  rentsTitle: "Loyers moyens par quartier",
  rentsHeaders: ["Quartier", "3 1/2", "4 1/2", "5 1/2"],
  rentsRows: [
    { district: "Plateau-Mont-Royal", studio: "1 100 a 1 500 $", fourHalf: "1 400 a 2 000 $", fiveHalf: "1 800 a 2 800 $", note: "Tres demande, peu de disponibilites." },
    { district: "Rosemont", studio: "1 000 a 1 400 $", fourHalf: "1 300 a 1 850 $", fiveHalf: "1 700 a 2 500 $", note: "Tres apprecie des familles et actifs." },
    { district: "Verdun", studio: "900 a 1 200 $", fourHalf: "1 150 a 1 600 $", fiveHalf: "1 450 a 2 100 $", note: "Encore accessible mais en hausse." },
    { district: "Hochelaga", studio: "800 a 1 100 $", fourHalf: "1 000 a 1 400 $", fiveHalf: "1 250 a 1 750 $", note: "Reste l'une des zones centrales les plus abordables." },
  ],
  profilesTitle: "Quel quartier selon votre profil",
  profiles: [
    { profile: "Famille avec enfants", districts: "Rosemont, Villeray, Verdun, Saint-Laurent", reason: "Bon compromis entre services, parcs et espace." },
    { profile: "Etudiant", districts: "Cote-des-Neiges, NDG, Plateau, Hochelaga", reason: "Proximite des campus et meilleure accessibilite en transport." },
    { profile: "Budget serre", districts: "Hochelaga, Saint-Michel, Cote-des-Neiges", reason: "Encore des loyers plus bas que dans les quartiers les plus tendus." },
    { profile: "Sans voiture", districts: "Plateau, Rosemont, Verdun", reason: "Meilleur quotidien a pied, a velo ou en transport collectif." },
  ],
  localTipsTitle: "Points a surveiller avant de signer",
  localTips: [
    { title: "Verifier le registre des loyers", text: "A Montreal, l'historique du logement peut eviter une hausse abusive avant la signature." },
    { title: "Regarder le stationnement", text: "Certaines rues exigent une vignette residentielle ou rendent le camion difficile a positionner." },
    { title: "Reserver ascenseur et acces", text: "Dans les immeubles, cette contrainte peut bloquer une journee si elle est geree trop tard." },
    { title: "Mesurer l'acces transport", text: "Metro, bus et REM changent fortement le budget transport apres l'emmenagement." },
  ],
  resourcesTitle: "Ressources utiles a Montreal",
  resources: [
    { name: "Ville de Montreal", description: "Permis temporaire de stationnement pour demenagement", href: "https://montreal.ca/sujets/permis-de-stationnement-pour-demenagement" },
    { name: "STM", description: "Verifier l'accessibilite metro et bus du quartier", href: "https://www.stm.info/fr/infos/reseaux/metro" },
    { name: "TAL", description: "Consulter le registre des loyers", href: "https://www.tal.gouv.qc.ca/fr/registre-des-loyers" },
    { name: "SAAQ", description: "Mettre a jour l'adresse apres le demenagement", href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/" },
  ],
  faqsTitle: "Questions frequentes",
  faqs: [
    { question: "Quelle est la meilleure periode pour demenager a Montreal ?", answer: "Mi-aout a fin septembre reste souvent plus simple et moins cher que la fenetre du 1er juillet." },
    { question: "Faut-il un permis de stationnement ?", answer: "Oui si vous voulez reserver de l'espace sur rue pour le camion dans certains secteurs." },
    { question: "Quel quartier reste le plus abordable ?", answer: "Hochelaga, Saint-Michel et certaines parties de Cote-des-Neiges restent parmi les options les plus accessibles." },
  ],
  ctaChecklistTitle: "Checklist demenagement",
  ctaChecklistText: "Suivre les etapes avant et apres le jour J.",
  ctaCostTitle: "Cout du demenagement",
  ctaCostText: "Comparer camion, pros et couts oublies.",
};

const enMovingMontreal: MovingMontrealDictionary = {
  routeKey: "movingMontreal",
  metadata: {
    title: "Moving to Montreal in 2026 | ArgentQC.ca",
    description:
      "Montreal moving guide for 2026: rents by district, July 1 pressure, parking permits, local resources, and how to choose the right neighbourhood for your profile.",
  },
  eyebrow: "Local guide · Montreal 2026",
  title: "Moving to Montreal",
  intro:
    "A practical overview of Montreal's rental reality, July 1 constraints, and the neighbourhood tradeoffs that matter most before you sign.",
  alertTitle: "July 1 in Montreal",
  alertText:
    "Montreal concentrates a large share of Quebec's July 1 moves. Trucks get booked early, prices rise sharply, and logistics become much harder. If you can move a few days earlier or later, the gain is material.",
  rentsTitle: "Typical rents by district",
  rentsHeaders: ["District", "3 1/2", "4 1/2", "5 1/2"],
  rentsRows: [
    { district: "Plateau-Mont-Royal", studio: "1,100 to 1,500 CAD", fourHalf: "1,400 to 2,000 CAD", fiveHalf: "1,800 to 2,800 CAD", note: "Very high demand, limited availability." },
    { district: "Rosemont", studio: "1,000 to 1,400 CAD", fourHalf: "1,300 to 1,850 CAD", fiveHalf: "1,700 to 2,500 CAD", note: "Popular with families and active households." },
    { district: "Verdun", studio: "900 to 1,200 CAD", fourHalf: "1,150 to 1,600 CAD", fiveHalf: "1,450 to 2,100 CAD", note: "Still relatively accessible but rising fast." },
    { district: "Hochelaga", studio: "800 to 1,100 CAD", fourHalf: "1,000 to 1,400 CAD", fiveHalf: "1,250 to 1,750 CAD", note: "Still one of the more affordable central areas." },
  ],
  profilesTitle: "Which district fits which profile",
  profiles: [
    { profile: "Family with children", districts: "Rosemont, Villeray, Verdun, Saint-Laurent", reason: "Better balance of services, parks, and space." },
    { profile: "Student", districts: "Cote-des-Neiges, NDG, Plateau, Hochelaga", reason: "Closer to campuses and easier transit access." },
    { profile: "Tighter budget", districts: "Hochelaga, Saint-Michel, Cote-des-Neiges", reason: "Still lower-rent options than the most pressured districts." },
    { profile: "No car", districts: "Plateau, Rosemont, Verdun", reason: "Better daily life by foot, bike, or transit." },
  ],
  localTipsTitle: "What to check before signing",
  localTips: [
    { title: "Check rent history", text: "In Montreal, rent history can help you avoid an abusive increase before signing." },
    { title: "Look at parking rules", text: "Some streets require resident permits or make truck access difficult." },
    { title: "Reserve elevators and access", text: "In larger buildings, this can block the entire move if handled too late." },
    { title: "Measure transit access", text: "Metro, bus, and REM access can materially change the transport budget after the move." },
  ],
  resourcesTitle: "Useful Montreal resources",
  resources: [
    { name: "City of Montreal", description: "Temporary parking permit for moving day", href: "https://montreal.ca/en/topics/parking-permits-moving" },
    { name: "STM", description: "Review metro and bus access for the area", href: "https://www.stm.info/en/info/networks/metro" },
    { name: "TAL", description: "Review the rent register", href: "https://www.tal.gouv.qc.ca/en/the-register-of-rents" },
    { name: "SAAQ", description: "Update the address after moving", href: "https://saaq.gouv.qc.ca/en/online-services/change-address/" },
  ],
  faqsTitle: "Frequently asked questions",
  faqs: [
    { question: "When is the best time to move in Montreal?", answer: "Mid-August to late September is often easier and cheaper than the July 1 peak." },
    { question: "Do I need a parking permit?", answer: "Yes if you want to reserve street space for the truck in some areas." },
    { question: "Which district is still the most affordable?", answer: "Hochelaga, Saint-Michel, and parts of Cote-des-Neiges remain among the more accessible options." },
  ],
  ctaChecklistTitle: "Moving checklist",
  ctaChecklistText: "Track the key steps before and after moving day.",
  ctaCostTitle: "Moving cost guide",
  ctaCostText: "Compare truck rental, movers, and hidden costs.",
};

export function getStaticSubguideDictionary(locale: Locale, routeKey: Extract<SubguideRouteKey, "taxesDeadlines" | "taxesRefund">) {
  return (locale === "fr" ? frStaticSubguides : enStaticSubguides)[routeKey];
}

export function getTaxSoftwareDictionary(locale: Locale) {
  return locale === "fr" ? frTaxSoftware : enTaxSoftware;
}

export function getInsuranceComparatorDictionary(locale: Locale) {
  return locale === "fr" ? frInsuranceComparator : enInsuranceComparator;
}

export function getRetirementFhsaDictionary(locale: Locale) {
  return locale === "fr" ? frRetirementFhsa : enRetirementFhsa;
}

export function getBudgetCostOfLivingDictionary(locale: Locale) {
  return locale === "fr" ? frBudgetCostOfLiving : enBudgetCostOfLiving;
}

export function getBudgetCalculatorDictionary(locale: Locale) {
  return locale === "fr" ? frBudgetCalculator : enBudgetCalculator;
}

export function getInternetComparatorDictionary(locale: Locale) {
  return locale === "fr" ? frInternetComparator : enInternetComparator;
}

export function getRetirementRrqDictionary(locale: Locale) {
  return locale === "fr" ? frRetirementRrq : enRetirementRrq;
}

export function getRetirementRrspDictionary(locale: Locale) {
  return locale === "fr" ? frRetirementRrsp : enRetirementRrsp;
}

export function getRetirementTfsaDictionary(locale: Locale) {
  return locale === "fr" ? frRetirementTfsa : enRetirementTfsa;
}

export function getInsuranceAutoDictionary(locale: Locale) {
  return locale === "fr" ? frInsuranceAuto : enInsuranceAuto;
}

export function getInsuranceHomeDictionary(locale: Locale) {
  return locale === "fr" ? frInsuranceHome : enInsuranceHome;
}

export function getInsuranceLifeDictionary(locale: Locale) {
  return locale === "fr" ? frInsuranceLife : enInsuranceLife;
}

export function getMovingChecklistDictionary(locale: Locale) {
  return locale === "fr" ? frMovingChecklist : enMovingChecklist;
}

export function getMovingCostDictionary(locale: Locale) {
  return locale === "fr" ? frMovingCost : enMovingCost;
}

export function getMovingMontrealDictionary(locale: Locale) {
  return locale === "fr" ? frMovingMontreal : enMovingMontreal;
}
