import type { Locale } from "@/i18n/routing";

export interface PretsBoursesPageDictionary {
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  subtitle: string;
  heroCta: string;
  heroCtaSecondary: string;
  disclaimerTitle: string;
  disclaimerText: string;
  aidesCategoriesTitle: string;
  aidesCategoriesIntro: string;
  categories: Array<{ emoji: string; labelFr: string; description: string }>;
  tableauTitle: string;
  tableauHeaders: [string, string, string, string];
  programmesTitle: string;
  programmesIntro: string;
  warningLabel: string;
  officialLinkLabel: string;
  calculatorTitle: string;
  calculatorSubtitle: string;
  calculatorDisclaimer: string;
  guideTitle: string;
  reepSectionTitle: string;
  reepSectionIntro: string;
  reepItems: string[];
  creditsSectionTitle: string;
  creditsSectionIntro: string;
  creditsItems: Array<{ label: string; detail: string }>;
  intlSectionTitle: string;
  intlSectionIntro: string;
  profilsTitle: string;
  profilsDisclaimer: string;
  profilsTotalLabel: string;
  profilsNoteLabel: string;
  faqTitle: string;
  relatedTitle: string;
  relatedLinks: Array<{ href: string; emoji: string; title: string; desc: string }>;
  footerText: string;
  footerContact: string;
  breadcrumb: [string, string];
  calculatorFields: {
    statutEtudesLabel: string;
    statutEtudesOptions: Array<{ value: string; label: string; emoji: string }>;
    niveauLabel: string;
    niveauOptions: Array<{ value: string; label: string }>;
    residentLabel: string;
    residentOui: string;
    residentNon: string;
    statutFinancierLabel: string;
    statutFinancierOptions: Array<{ value: string; label: string; detail: string }>;
    revenuPersonnelLabel: string;
    revenuConjointParentLabel: string;
    enfantChargeLabel: string;
    enfantChargeDetail: string;
    fraisScolariteLabel: string;
    fraisScolaritePlaceholder: string;
    reerLabel: string;
    reerDetail: string;
    perspectiveLabel: string;
    perspectiveOptions: Array<{ value: string; label: string }>;
    ctaLabel: string;
    resetLabel: string;
  };
  calculatorResults: {
    title: string;
    admissibiliteLabel: string;
    admissibiliteValues: Record<string, string>;
    pretAfeLabel: string;
    bourseAfeLabel: string;
    creditsLabel: string;
    reepLabel: string;
    perspectiveLabel: string;
    totalLabel: string;
    totalNote: string;
    officialCta: string;
    officialCtaHref: string;
    notApplicable: string;
  };
}

// ─── Tableau comparatif data (locale-neutral keys, labels in dict) ─────────────

export interface TableauRow {
  programme: string;
  programmeEn: string;
  type: string;
  typeEn: string;
  montant: string;
  montantEn: string;
  condition: string;
  conditionEn: string;
  highlight?: boolean;
}

export const tableauComparatif: TableauRow[] = [
  {
    programme: "Prêts AFE",
    programmeEn: "AFE Loans",
    type: "Prêt (remboursable)",
    typeEn: "Loan (repayable)",
    montant: "~2 000 – 17 500 $/an",
    montantEn: "~$2,000–$17,500/yr",
    condition: "Résidence QC · établissement reconnu",
    conditionEn: "QC residency · recognized institution",
  },
  {
    programme: "Bourses AFE",
    programmeEn: "AFE Grants",
    type: "Bourse (non remboursable)",
    typeEn: "Grant (non-repayable)",
    montant: "Jusqu'à ~8 000 $/an",
    montantEn: "Up to ~$8,000/yr",
    condition: "Revenu familial sous les seuils AFE",
    conditionEn: "Family income below AFE thresholds",
    highlight: true,
  },
  {
    programme: "REEP",
    programmeEn: "LLP",
    type: "Retrait REER temporaire",
    typeEn: "Temporary RRSP withdrawal",
    montant: "≤ 10 000 $/an (20 000 $ cumulatif)",
    montantEn: "≤$10,000/yr ($20,000 cumulative)",
    condition: "REER constitué · remboursement sur 10 ans",
    conditionEn: "Existing RRSP · repay over 10 years",
  },
  {
    programme: "Crédit fédéral frais scolarité",
    programmeEn: "Federal Tuition Credit",
    type: "Crédit d'impôt non remboursable",
    typeEn: "Non-refundable tax credit",
    montant: "15 % des frais admissibles",
    montantEn: "15% of eligible fees",
    condition: "T2202 · reportable / transférable",
    conditionEn: "T2202 · can be carried forward or transferred",
  },
  {
    programme: "Crédit QC formation",
    programmeEn: "QC Training Credit",
    type: "Crédit d'impôt non remboursable",
    typeEn: "Non-refundable tax credit",
    montant: "20 % des frais de formation admissibles",
    montantEn: "20% of eligible training fees",
    condition: "RL-8 · formation pro / examens",
    conditionEn: "RL-8 · vocational training / exams",
  },
  {
    programme: "Bourse Perspective QC",
    programmeEn: "Bourse Perspective QC",
    type: "Bourse (continuité seulement)",
    typeEn: "Grant (continuity only)",
    montant: "5 000 $/an",
    montantEn: "$5,000/yr",
    condition: "⚠️ Inscrit avant hiver 2025 · programme prioritaire",
    conditionEn: "⚠️ Enrolled before Winter 2025 · priority program",
  },
  {
    programme: "Remise de dette d'études",
    programmeEn: "Student Debt Relief",
    type: "Allègement de prêt",
    typeEn: "Loan reduction",
    montant: "15 % du solde restant",
    montantEn: "15% of remaining balance",
    condition: "Diplômé · emploi dans le domaine · QC",
    conditionEn: "Graduate · working in field · QC",
  },
];

// ─── FR Dictionary ─────────────────────────────────────────────────────────────

const fr: PretsBoursesPageDictionary = {
  metadata: {
    title: "Prêts et bourses étudiants Québec 2026 — AFE, REEP, crédits d'impôt | ArgentQC.ca",
    description:
      "Guide complet sur le financement des études au Québec en 2026 : prêts et bourses AFE, REEP, crédits d'impôt, Bourse Perspective QC et étudiants internationaux. Estimez votre aide de façon indicative.",
  },
  eyebrow: "Guide indicatif · Aide financière aux études Québec 2026",
  title: "Financer ses études au Québec en 2026",
  subtitle:
    "Prêts et bourses AFE, REEP, crédits d'impôt — ce qui existe vraiment, pour qui, et comment y accéder.",
  heroCta: "Estimer mon aide",
  heroCtaSecondary: "Voir les programmes",
  disclaimerTitle: "Outil indicatif, non officiel",
  disclaimerText:
    "Les montants présentés sur cette page sont des estimations à titre informatif. " +
    "Votre aide réelle dépend de votre dossier individuel. " +
    "Pour un calcul officiel, utilisez monPortail AFE ou contactez l'Agence du revenu du Canada.",
  aidesCategoriesTitle: "Quelles aides existent vraiment ?",
  aidesCategoriesIntro:
    "Il existe quatre grandes sources d'aide financière pour les étudiants québécois. " +
    "Elles sont complémentaires et peuvent souvent se combiner.",
  categories: [
    {
      emoji: "📚",
      labelFr: "Prêts et bourses (AFE)",
      description:
        "Le programme principal du Québec. Les prêts sont remboursables après les études; " +
        "les bourses ne le sont pas. L'accès dépend du revenu familial.",
    },
    {
      emoji: "🏦",
      labelFr: "REEP — Retrait REER",
      description:
        "Si vous avez un REER, vous pouvez retirer jusqu'à 10 000 $/an sans impôt immédiat " +
        "pour financer vos études ou celles de votre conjoint.",
    },
    {
      emoji: "🧾",
      labelFr: "Crédits d'impôt",
      description:
        "Fédéralement, un crédit de 15 % sur les frais de scolarité. Au Québec, le crédit général " +
        "sur les frais universitaires a été aboli — reste un crédit pour certaines formations.",
    },
    {
      emoji: "🎁",
      labelFr: "Bourses externes et institutionnelles",
      description:
        "Votre établissement, des fondations privées et des organismes sectoriels offrent des bourses " +
        "supplémentaires non traitées ici. Consultez le portail de votre établissement.",
    },
  ],
  tableauTitle: "Tableau comparatif — Programmes 2026",
  tableauHeaders: ["Programme", "Type d'aide", "Montant indicatif", "Condition principale"],
  programmesTitle: "Les programmes en détail",
  programmesIntro:
    "Ces programmes sont décrits à titre informatif. Les conditions officielles peuvent varier. " +
    "Cliquez sur « Site officiel » pour les détails exacts.",
  warningLabel: "⚠️ À noter",
  officialLinkLabel: "Site officiel →",
  calculatorTitle: "Estimateur indicatif — Quelle aide pourriez-vous recevoir ?",
  calculatorSubtitle:
    "Répondez aux questions ci-dessous pour obtenir une fourchette indicative. " +
    "Ce calcul ne reproduit pas la formule officielle de l'AFE.",
  calculatorDisclaimer:
    "Estimation indicative uniquement. Pour un résultat officiel, faites votre demande sur monPortail AFE.",
  guideTitle: "Comment faire une demande AFE — 6 étapes",
  reepSectionTitle: "REEP : utiliser votre REER pour financer des études",
  reepSectionIntro:
    "Le Régime d'encouragement à l'éducation permanente (REEP) est souvent méconnu. " +
    "Il est particulièrement utile pour les adultes qui retournent aux études et ont déjà constitué un REER.",
  reepItems: [
    "Retrait de 10 000 $/an maximum (20 000 $ cumulatif à vie)",
    "Pas de retenue d'impôt au moment du retrait",
    "Remboursement sur 10 ans dans votre REER",
    "Si vous ne remboursez pas, le montant est ajouté à votre revenu imposable",
    "Disponible pour vous ou votre conjoint inscrit aux études",
    "Programme d'au moins 3 mois consécutifs requis",
  ],
  creditsSectionTitle: "Crédits d'impôt pour étudiants — Ce qui reste en 2026",
  creditsSectionIntro:
    "Le paysage fiscal pour les étudiants a beaucoup changé ces dernières années. " +
    "Voici ce qui existe réellement en 2026.",
  creditsItems: [
    {
      label: "Fédéral — Crédit frais de scolarité (15 %)",
      detail:
        "S'applique aux frais de scolarité admissibles déclarés sur votre T2202. " +
        "Si votre impôt fédéral est nul, le crédit est reporté aux années suivantes " +
        "ou transféré à un parent ou conjoint (max. 5 000 $ de frais).",
    },
    {
      label: "Québec — Crédit frais de formation (20 %)",
      detail:
        "Le crédit général sur les frais de scolarité universitaires a été aboli au Québec. " +
        "Il subsiste un crédit de 20 % pour certains frais de formation professionnelle ou d'examens admissibles (RL-8). " +
        "Vérifiez sur le site de Revenu Québec ce qui est admissible dans votre cas.",
    },
    {
      label: "Intérêts sur prêts étudiants",
      detail:
        "Les intérêts payés sur vos prêts AFE peuvent donner droit à un crédit d'impôt fédéral (ligne 31900). " +
        "Note : le Québec a aboli son crédit sur les intérêts de prêts étudiants.",
    },
  ],
  intlSectionTitle: "Étudiants internationaux au Québec",
  intlSectionIntro:
    "Les étudiants détenteurs d'un permis d'études ne sont généralement pas admissibles à l'AFE. " +
    "Deux pistes importantes à explorer :",
  profilsTitle: "Profils illustratifs — Exemples non officiels",
  profilsDisclaimer:
    "Ces profils sont des exemples fictifs à titre purement illustratif. " +
    "Ils ne constituent pas une estimation officielle de votre admissibilité.",
  profilsTotalLabel: "Total estimatif indicatif / an",
  profilsNoteLabel: "Note",
  faqTitle: "Questions fréquentes",
  relatedTitle: "Pages connexes",
  relatedLinks: [
    { href: "/retraite/reer", emoji: "💰", title: "Guide REER", desc: "Comprendre le REEP et comment utiliser votre REER pour les études" },
    { href: "/impots/remboursement", emoji: "🧾", title: "Remboursement d'impôts", desc: "Maximiser votre retour avec les crédits frais de scolarité" },
    { href: "/blog/frais-garde-enfants-quebec-2026", emoji: "👶", title: "Crédits frais de garde", desc: "Si vous avez des enfants tout en poursuivant des études" },
    { href: "/questionnaire", emoji: "🔍", title: "Trouver toutes mes aides", desc: "Questionnaire complet — programmes QC/CA selon votre profil" },
    { href: "/budget/calculateur", emoji: "📊", title: "Calculateur budget", desc: "Équilibrer votre budget pendant les études" },
  ],
  footerText:
    "Outil informatif non affilié au gouvernement. " +
    "Les montants sont des estimations et l'admissibilité réelle doit être confirmée auprès des sources officielles.",
  footerContact: "Contactez-nous",
  breadcrumb: ["Accueil", "Prêts et bourses étudiants"],
  calculatorFields: {
    statutEtudesLabel: "Statut d'études",
    statutEtudesOptions: [
      { value: "temps-plein", label: "Temps plein", emoji: "📚" },
      { value: "temps-partiel", label: "Temps partiel", emoji: "📖" },
      { value: "formation-continue", label: "Formation continue", emoji: "🛠️" },
    ],
    niveauLabel: "Niveau d'études",
    niveauOptions: [
      { value: "dep", label: "DEP / formation professionnelle" },
      { value: "cegep", label: "CÉGEP / AEC / technique" },
      { value: "bac", label: "Baccalauréat" },
      { value: "maitrise", label: "Maîtrise" },
      { value: "doctorat", label: "Doctorat" },
    ],
    residentLabel: "Résident québécois depuis ≥ 12 mois ?",
    residentOui: "Oui",
    residentNon: "Non",
    statutFinancierLabel: "Situation financière",
    statutFinancierOptions: [
      { value: "parents", label: "Contribution parentale", detail: "Mes parents contribuent — leurs revenus sont pris en compte par l'AFE" },
      { value: "autonome", label: "Étudiant autonome", detail: "Je subviens moi-même à mes besoins — seul mon revenu est considéré" },
      { value: "conjoint", label: "En couple (conjoint)", detail: "Je vis avec un conjoint — notre revenu combiné est pris en compte" },
    ],
    revenuPersonnelLabel: "Votre revenu annuel brut estimé pendant les études",
    revenuConjointParentLabel: "Revenu annuel brut des parents / du conjoint",
    enfantChargeLabel: "Enfant(s) à charge",
    enfantChargeDetail: "Avoir des enfants à charge peut augmenter votre aide AFE",
    fraisScolariteLabel: "Frais de scolarité annuels estimés",
    fraisScolaritePlaceholder: "ex. 4 000",
    reerLabel: "Avez-vous un REER avec des fonds disponibles ?",
    reerDetail: "Utile pour évaluer le potentiel du REEP",
    perspectiveLabel: "Poursuivez-vous un programme Bourse Perspective QC déjà admissible (inscrit avant hiver 2025) ?",
    perspectiveOptions: [
      { value: "yes", label: "Oui — je suis en continuité de programme admissible" },
      { value: "no", label: "Non — je commence un nouveau programme en 2026" },
      { value: "unknown", label: "Je ne sais pas" },
    ],
    ctaLabel: "Voir mon estimation indicative →",
    resetLabel: "Recommencer",
  },
  calculatorResults: {
    title: "Estimation indicative 2026",
    admissibiliteLabel: "Admissibilité AFE estimée",
    admissibiliteValues: {
      faible: "Faible — votre revenu dépasse probablement les seuils",
      moyenne: "Moyenne — une aide partielle est possible selon le dossier",
      elevee: "Élevée — vous correspondez généralement aux critères AFE",
      "non-resident": "Non admissible — résidence québécoise requise",
    },
    pretAfeLabel: "Prêts AFE (indicatif)",
    bourseAfeLabel: "Bourses AFE (indicatif)",
    creditsLabel: "Crédits d'impôt estimés",
    reepLabel: "REEP (si REER disponible)",
    perspectiveLabel: "Bourse Perspective QC",
    totalLabel: "Total indicatif / année",
    totalNote: "Estimation non officielle. Des montants réels peuvent différer significativement.",
    officialCta: "Faire ma demande officielle (AFE)",
    officialCtaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/demander-aide-financiere",
    notApplicable: "Non applicable",
  },
};

// ─── EN Dictionary ─────────────────────────────────────────────────────────────

const en: PretsBoursesPageDictionary = {
  metadata: {
    title: "Student Financial Aid in Quebec 2026 — AFE, LLP, Tax Credits | ArgentQC.ca",
    description:
      "Complete guide to financing studies in Quebec in 2026: AFE loans and grants, LLP (RRSP), tuition tax credits, Bourse Perspective QC and international students. Indicative estimates only.",
  },
  eyebrow: "Indicative Guide · Student Financial Aid Quebec 2026",
  title: "Financing your studies in Quebec in 2026",
  subtitle:
    "AFE loans and grants, LLP, tax credits — what really exists, for whom, and how to access it.",
  heroCta: "Estimate my aid",
  heroCtaSecondary: "View programs",
  disclaimerTitle: "Indicative tool — not official",
  disclaimerText:
    "The amounts on this page are informational estimates only. " +
    "Your actual aid depends on your individual file. " +
    "For an official calculation, use monPortail AFE or contact the Canada Revenue Agency.",
  aidesCategoriesTitle: "What aid actually exists?",
  aidesCategoriesIntro:
    "There are four main sources of financial aid for Quebec students. " +
    "They are complementary and can often be combined.",
  categories: [
    {
      emoji: "📚",
      labelFr: "Loans and grants (AFE)",
      description:
        "Quebec's main program. Loans are repayable after studies; grants are not. " +
        "Access depends on family income.",
    },
    {
      emoji: "🏦",
      labelFr: "LLP — RRSP withdrawal",
      description:
        "If you have an RRSP, you can withdraw up to $10,000/year tax-free " +
        "to fund your own studies or your spouse's.",
    },
    {
      emoji: "🧾",
      labelFr: "Tax credits",
      description:
        "Federally, a 15% credit on tuition fees. Quebec abolished its general university " +
        "tuition credit — a credit for some vocational training remains.",
    },
    {
      emoji: "🎁",
      labelFr: "External and institutional grants",
      description:
        "Your institution, private foundations and sector organizations offer additional grants " +
        "not covered here. Check your institution's scholarship portal.",
    },
  ],
  tableauTitle: "Comparison table — Programs 2026",
  tableauHeaders: ["Program", "Aid type", "Indicative amount", "Main condition"],
  programmesTitle: "Programs in detail",
  programmesIntro:
    "These programs are described for informational purposes. Official conditions may vary. " +
    "Click 'Official site' for exact details.",
  warningLabel: "⚠️ Note",
  officialLinkLabel: "Official site →",
  calculatorTitle: "Indicative estimator — What aid might you receive?",
  calculatorSubtitle:
    "Answer the questions below for an indicative range. " +
    "This calculator does not reproduce the official AFE formula.",
  calculatorDisclaimer:
    "Indicative estimate only. For an official result, apply on monPortail AFE.",
  guideTitle: "How to apply for AFE — 6 steps",
  reepSectionTitle: "LLP: using your RRSP to fund studies",
  reepSectionIntro:
    "The Lifelong Learning Plan (LLP) is often overlooked. " +
    "It is especially useful for adults returning to school who have already built an RRSP.",
  reepItems: [
    "Maximum withdrawal of $10,000/year ($20,000 cumulative lifetime)",
    "No income tax withheld at the time of withdrawal",
    "Repay over 10 years into your RRSP",
    "If you don't repay, the amount is added to your taxable income",
    "Available for you or your enrolled spouse",
    "Program of at least 3 consecutive months required",
  ],
  creditsSectionTitle: "Student tax credits — What remains in 2026",
  creditsSectionIntro:
    "The tax landscape for students has changed significantly in recent years. " +
    "Here is what actually exists in 2026.",
  creditsItems: [
    {
      label: "Federal — Tuition tax credit (15%)",
      detail:
        "Applies to eligible tuition reported on your T2202. " +
        "If your federal tax is zero, the credit is carried forward to future years " +
        "or transferred to a parent or spouse (max. $5,000 in fees).",
    },
    {
      label: "Quebec — Training credit (20%)",
      detail:
        "Quebec eliminated the general university tuition tax credit. " +
        "A 20% credit for eligible vocational training or examination fees (RL-8) remains. " +
        "Check the Revenu Québec website to confirm what is eligible in your case.",
    },
    {
      label: "Student loan interest",
      detail:
        "Interest paid on your AFE loans may qualify for a federal tax credit (line 31900). " +
        "Note: Quebec has eliminated its credit for student loan interest.",
    },
  ],
  intlSectionTitle: "International students in Quebec",
  intlSectionIntro:
    "Students holding a study permit are generally not eligible for AFE. " +
    "Two important avenues to explore:",
  profilsTitle: "Illustrative profiles — Unofficial examples",
  profilsDisclaimer:
    "These profiles are fictional examples for illustrative purposes only. " +
    "They do not constitute an official estimate of your eligibility.",
  profilsTotalLabel: "Indicative total / year",
  profilsNoteLabel: "Note",
  faqTitle: "Frequently asked questions",
  relatedTitle: "Related pages",
  relatedLinks: [
    { href: "/retraite/reer", emoji: "💰", title: "RRSP Guide", desc: "Understanding the LLP and how to use your RRSP for studies" },
    { href: "/impots/remboursement", emoji: "🧾", title: "Tax refund", desc: "Maximize your return with tuition tax credits" },
    { href: "/blog/frais-garde-enfants-quebec-2026", emoji: "👶", title: "Childcare credits", desc: "If you have children while pursuing studies" },
    { href: "/questionnaire", emoji: "🔍", title: "Find all my benefits", desc: "Complete questionnaire — QC/CA programs by profile" },
    { href: "/budget/calculateur", emoji: "📊", title: "Budget calculator", desc: "Balance your budget while studying" },
  ],
  footerText:
    "Informational tool not affiliated with the government. " +
    "Amounts are estimates and actual eligibility must be confirmed with official sources.",
  footerContact: "Contact us",
  breadcrumb: ["Home", "Student loans and grants"],
  calculatorFields: {
    statutEtudesLabel: "Study status",
    statutEtudesOptions: [
      { value: "temps-plein", label: "Full-time", emoji: "📚" },
      { value: "temps-partiel", label: "Part-time", emoji: "📖" },
      { value: "formation-continue", label: "Continuing education", emoji: "🛠️" },
    ],
    niveauLabel: "Level of study",
    niveauOptions: [
      { value: "dep", label: "DEP / vocational training" },
      { value: "cegep", label: "CÉGEP / AEC / technical" },
      { value: "bac", label: "Bachelor's degree" },
      { value: "maitrise", label: "Master's degree" },
      { value: "doctorat", label: "Doctorate" },
    ],
    residentLabel: "Quebec resident for ≥ 12 months?",
    residentOui: "Yes",
    residentNon: "No",
    statutFinancierLabel: "Financial situation",
    statutFinancierOptions: [
      { value: "parents", label: "Parental contribution", detail: "My parents contribute — their income is factored in by AFE" },
      { value: "autonome", label: "Financially independent", detail: "I support myself — only my income is considered" },
      { value: "conjoint", label: "In a couple (spouse)", detail: "I live with a spouse — our combined income is considered" },
    ],
    revenuPersonnelLabel: "Your estimated gross annual income during studies",
    revenuConjointParentLabel: "Parents' / spouse's annual gross income",
    enfantChargeLabel: "Dependent child(ren)",
    enfantChargeDetail: "Having dependant children may increase your AFE aid",
    fraisScolariteLabel: "Estimated annual tuition fees",
    fraisScolaritePlaceholder: "e.g. 4,000",
    reerLabel: "Do you have an RRSP with available funds?",
    reerDetail: "Useful for assessing LLP potential",
    perspectiveLabel: "Are you continuing a Bourse Perspective QC eligible program (enrolled before Winter 2025)?",
    perspectiveOptions: [
      { value: "yes", label: "Yes — I am continuing an eligible program" },
      { value: "no", label: "No — I am starting a new program in 2026" },
      { value: "unknown", label: "I am not sure" },
    ],
    ctaLabel: "View my indicative estimate →",
    resetLabel: "Start over",
  },
  calculatorResults: {
    title: "Indicative estimate 2026",
    admissibiliteLabel: "Estimated AFE eligibility",
    admissibiliteValues: {
      faible: "Low — your income likely exceeds AFE thresholds",
      moyenne: "Medium — partial aid may be possible depending on the file",
      elevee: "High — you generally meet AFE criteria",
      "non-resident": "Not eligible — Quebec residency required",
    },
    pretAfeLabel: "AFE loans (indicative)",
    bourseAfeLabel: "AFE grants (indicative)",
    creditsLabel: "Estimated tax credits",
    reepLabel: "LLP (if RRSP available)",
    perspectiveLabel: "Bourse Perspective QC",
    totalLabel: "Indicative total / year",
    totalNote: "Unofficial estimate. Actual amounts may differ significantly.",
    officialCta: "Submit my official application (AFE)",
    officialCtaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/demander-aide-financiere",
    notApplicable: "Not applicable",
  },
};

// ─── Export ────────────────────────────────────────────────────────────────────

export function getPretsBoursesPageDictionary(locale: Locale): PretsBoursesPageDictionary {
  return locale === "en" ? en : fr;
}
