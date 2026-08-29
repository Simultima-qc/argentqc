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
    repayableAidLabel: string;
    nonRepayableAidLabel: string;
    taxReliefLabel: string;
    reepOptionLabel: string;
    noEstimateLabel: string;
    validateLabel: string;
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
    montant: "Calculé selon le dossier",
    montantEn: "Calculated from the complete file",
    condition: "Critère officiel de résidence · temps plein ou réputé temps plein",
    conditionEn: "Official residency criterion · full-time or deemed full-time",
  },
  {
    programme: "Bourses AFE",
    programmeEn: "AFE Grants",
    type: "Bourse (non remboursable)",
    typeEn: "Grant (non-repayable)",
    montant: "Besoins reconnus moins la portion prêt",
    montantEn: "Recognized needs minus the loan portion",
    condition: "Dossier AFE complet",
    conditionEn: "Complete AFE file",
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
    montant: "14 % des frais admissibles en 2026",
    montantEn: "14% of eligible fees in 2026",
    condition: "T2202 · reportable / transférable",
    conditionEn: "T2202 · can be carried forward or transferred",
  },
  {
    programme: "Crédit QC frais de scolarité ou d'examen",
    programmeEn: "QC Tuition or Examination Credit",
    type: "Crédit d'impôt non remboursable",
    typeEn: "Non-refundable tax credit",
    montant: "8 % des frais admissibles",
    montantEn: "8% of eligible fees",
    condition: "Annexe T · frais reconnus",
    conditionEn: "Schedule T · recognized fees",
  },
  {
    programme: "Bourse Perspective QC",
    programmeEn: "Bourse Perspective QC",
    type: "Bourse (continuité seulement)",
    typeEn: "Grant (continuity only)",
    montant: "1 500 $ collégial ou 2 500 $ université / session admissible",
    montantEn: "$1,500 college or $2,500 university / eligible term",
    condition: "⚠️ Programme commencé au plus tard à l'hiver 2025 · continuité",
    conditionEn: "⚠️ Program started no later than Winter 2025 · continuity",
  },
  {
    programme: "Remise de dette d'études",
    programmeEn: "Student Debt Relief",
    type: "Allègement de prêt",
    typeEn: "Loan reduction",
    montant: "15 % du solde restant",
    montantEn: "15% of remaining balance",
    condition: "Programme terminé à temps · bourse chaque année · demande dans les 3 ans",
    conditionEn: "Program completed on time · grant every year · apply within 3 years",
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
  heroCta: "Vérifier mes prochaines étapes",
  heroCtaSecondary: "Voir les programmes",
  disclaimerTitle: "Outil indicatif, non officiel",
  disclaimerText:
    "Cet outil oriente vers les démarches pertinentes sans calculer votre admissibilité ni un montant AFE. " +
    "Seul le simulateur officiel ou l'analyse de votre demande peut établir l'aide applicable.",
  aidesCategoriesTitle: "Quelles aides existent vraiment ?",
  aidesCategoriesIntro:
    "Il existe quatre grandes sources d'aide financière pour les étudiants québécois. " +
    "Elles sont complémentaires et peuvent souvent se combiner.",
  categories: [
    {
      emoji: "📚",
      labelFr: "Prêts et bourses (AFE)",
      description:
        "Le programme principal du Québec. Le calcul tient compte des dépenses admises, des contributions " +
        "et de la situation complète; le prêt précède toute portion bourse.",
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
        "En 2026, le crédit fédéral correspond à 14 % des frais admissibles et le crédit québécois " +
        "pour frais de scolarité ou d'examen à 8 %.",
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
  calculatorTitle: "Outil d'orientation — Quelles démarches vérifier ?",
  calculatorSubtitle:
    "Répondez à quelques questions pour être dirigé vers les bons programmes officiels. " +
    "Aucun montant ni verdict d'admissibilité n'est calculé.",
  calculatorDisclaimer:
    "Préfiltre éducatif seulement. Vérifiez chaque condition et utilisez le simulateur AFE officiel.",
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
      label: "Fédéral — Crédit frais de scolarité (14 % en 2026)",
      detail:
        "S'applique aux frais de scolarité admissibles déclarés sur votre T2202. " +
        "Si votre impôt fédéral est nul, le crédit est reporté aux années suivantes " +
        "ou transféré à un parent ou conjoint (max. 5 000 $ de frais).",
    },
    {
      label: "Québec — Crédit frais de scolarité ou d'examen (8 %)",
      detail:
        "Le crédit non remboursable québécois existe toujours et correspond à 8 % des frais admissibles. " +
        "Consultez l'annexe T et les règles de Revenu Québec pour les frais reconnus et les transferts.",
    },
    {
      label: "Intérêts sur prêts étudiants",
      detail:
        "Les intérêts admissibles peuvent donner droit à des crédits non remboursables fédéral et québécois. " +
        "Au Québec, le montant se calcule à l'annexe M selon les règles de Revenu Québec.",
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
    residentLabel: "Répondez-vous à l'un des critères officiels de résidence au Québec ?",
    residentOui: "Oui — selon un critère officiel",
    residentNon: "Non ou je dois vérifier",
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
    perspectiveLabel: "Avez-vous commencé un programme admissible au plus tard à l'hiver 2025 et poursuivez-vous ce même programme ?",
    perspectiveOptions: [
      { value: "yes", label: "Oui — programme admissible commencé au plus tard à l'hiver 2025" },
      { value: "no", label: "Non — je commence un nouveau programme en 2026" },
      { value: "unknown", label: "Je ne sais pas" },
    ],
    ctaLabel: "Voir les démarches à vérifier →",
    resetLabel: "Recommencer",
  },
  calculatorResults: {
    title: "Démarches officielles à vérifier",
    admissibiliteLabel: "Orientation AFE",
    admissibiliteValues: {
      "temps-plein": "Consultez les prêts et bourses pour études à temps plein. Le statut réputé temps plein répond à des conditions distinctes.",
      "temps-partiel": "Le Programme de prêts pour les études à temps partiel est distinct du Programme de prêts et bourses à temps plein.",
      "formation-continue": "Vérifiez d'abord si l'établissement, le programme et la charge d'études sont reconnus par l'AFE.",
      residence: "La règle des 12 mois n'est qu'une voie possible parmi les critères officiels de résidence.",
      "perspective-verify-continuity": "Continuité potentielle seulement : confirmez le programme, la session de début, la charge d'études et la réussite auprès de la source officielle.",
      "perspective-new-cohort-closed": "Les nouvelles cohortes après l'hiver 2025 ne sont pas admises; aucun montant n'est ajouté par cet outil.",
      "perspective-verify": "Vérifiez la cohorte, le programme, les sessions et les autres conditions officielles.",
      reep: "Le REEP peut être une piste si toutes les conditions de l'ARC sont respectées; il s'agit d'un retrait de votre REER à rembourser.",
    },
    pretAfeLabel: "Programme AFE pertinent",
    bourseAfeLabel: "Bourses AFE (indicatif)",
    creditsLabel: "Crédits d'impôt estimés",
    reepLabel: "REEP (si REER disponible)",
    perspectiveLabel: "Bourse Perspective QC",
    totalLabel: "Total indicatif / année",
    totalNote: "Cet outil ne calcule aucun droit ni montant. La décision appartient aux organismes officiels.",
    repayableAidLabel: "Aide remboursable",
    nonRepayableAidLabel: "Aide non remboursable",
    taxReliefLabel: "Crédits / allégements fiscaux",
    reepOptionLabel: "Option REEP",
    noEstimateLabel: "Aucune estimation dans cette catégorie",
    validateLabel: "à valider",
    officialCta: "Ouvrir le simulateur AFE officiel",
    officialCtaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/prets-bourses-temps-plein/calcul/simulateur-calcul",
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
  heroCta: "Check my next steps",
  heroCtaSecondary: "View programs",
  disclaimerTitle: "Indicative tool — not official",
  disclaimerText:
    "This tool routes you to relevant official steps without calculating AFE eligibility or an amount. " +
    "Only the official simulator or application review can determine your aid.",
  aidesCategoriesTitle: "What aid actually exists?",
  aidesCategoriesIntro:
    "There are four main sources of financial aid for Quebec students. " +
    "They are complementary and can often be combined.",
  categories: [
    {
      emoji: "📚",
      labelFr: "Loans and grants (AFE)",
      description:
        "Quebec's main program. The calculation uses recognized expenses, contributions and the complete situation; " +
        "the loan portion comes before any grant portion.",
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
        "In 2026, the federal credit is 14% of eligible fees and Quebec's tuition or examination " +
        "credit is 8%.",
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
  calculatorTitle: "Orientation tool — Which steps should you check?",
  calculatorSubtitle:
    "Answer a few questions to find the relevant official routes. " +
    "No amount or eligibility verdict is calculated.",
  calculatorDisclaimer:
    "Educational pre-filter only. Verify every condition and use the official AFE simulator.",
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
      label: "Federal — Tuition tax credit (14% in 2026)",
      detail:
        "Applies to eligible tuition reported on your T2202. " +
        "If your federal tax is zero, the credit is carried forward to future years " +
        "or transferred to a parent or spouse (max. $5,000 in fees).",
    },
    {
      label: "Quebec — Tuition or examination credit (8%)",
      detail:
        "Quebec's non-refundable credit still exists and equals 8% of eligible fees. " +
        "Consult Schedule T and Revenu Québec rules for recognized fees and transfers.",
    },
    {
      label: "Student loan interest",
      detail:
        "Eligible interest may qualify for federal and Quebec non-refundable credits. " +
        "In Quebec, the amount is calculated on Schedule M under Revenu Québec rules.",
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
    residentLabel: "Do you meet one of Quebec's official residency criteria?",
    residentOui: "Yes — under an official criterion",
    residentNon: "No or I need to verify",
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
    perspectiveLabel: "Did you start an eligible program no later than Winter 2025 and remain in that same program?",
    perspectiveOptions: [
      { value: "yes", label: "Yes — eligible program started no later than Winter 2025" },
      { value: "no", label: "No — I am starting a new program in 2026" },
      { value: "unknown", label: "I am not sure" },
    ],
    ctaLabel: "See the steps to verify →",
    resetLabel: "Start over",
  },
  calculatorResults: {
    title: "Official steps to verify",
    admissibiliteLabel: "AFE orientation",
    admissibiliteValues: {
      "temps-plein": "Review the full-time loans and grants program. Deemed-full-time status has separate conditions.",
      "temps-partiel": "The part-time studies loan program is separate from the full-time loans and grants program.",
      "formation-continue": "First verify that the institution, program and course load are recognized by AFE.",
      residence: "The 12-month rule is only one possible route among the official residency criteria.",
      "perspective-verify-continuity": "Potential continuity only: confirm the program, starting term, course load and successful completion with the official source.",
      "perspective-new-cohort-closed": "New cohorts after Winter 2025 are not accepted; this tool adds no amount.",
      "perspective-verify": "Verify the cohort, program, terms and all other official conditions.",
      reep: "The LLP may be worth checking if every CRA condition is met; it is a withdrawal from your RRSP that must be repaid.",
    },
    pretAfeLabel: "Relevant AFE program",
    bourseAfeLabel: "AFE grants (indicative)",
    creditsLabel: "Estimated tax credits",
    reepLabel: "LLP (if RRSP available)",
    perspectiveLabel: "Bourse Perspective QC",
    totalLabel: "Indicative total / year",
    totalNote: "This tool calculates neither entitlement nor an amount. Official agencies make the decision.",
    repayableAidLabel: "Repayable aid",
    nonRepayableAidLabel: "Non-repayable aid",
    taxReliefLabel: "Tax credits / relief",
    reepOptionLabel: "LLP option",
    noEstimateLabel: "No estimate in this category",
    validateLabel: "to validate",
    officialCta: "Open the official AFE simulator",
    officialCtaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/prets-bourses-temps-plein/calcul/simulateur-calcul",
    notApplicable: "Not applicable",
  },
};

// ─── Export ────────────────────────────────────────────────────────────────────

export function getPretsBoursesPageDictionary(locale: Locale): PretsBoursesPageDictionary {
  return locale === "en" ? en : fr;
}
