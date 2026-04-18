import { defineVersionedDataset } from "@/data/finance-2026/schema";

// ─── Types ────────────────────────────────────────────────────────────────────

export type AideType = "pret" | "bourse" | "credit_impot" | "retrait_reer" | "exemption" | "remise";

export interface ProgrammeAideEtudes {
  id: string;
  titleFr: string;
  titleEn: string;
  organism: string;
  category: AideType;
  summary: string;
  summaryEn: string;
  eligibilityHighlights: string[];
  eligibilityHighlightsEn: string[];
  amountLabel: string;
  amountLabelEn: string;
  ctaLabel: string;
  ctaHref: string;
  tags: string[];
  seoKeywords: string[];
  /** Alerte éditoriale affichée sur la fiche programme */
  warningFr?: string;
  warningEn?: string;
}

export interface ProfilIllustratif {
  id: string;
  prenomFr: string;
  prenomEn: string;
  ageSituation: string;
  ageSituationEn: string;
  detail: Array<{ labelFr: string; labelEn: string; montant: string; type: AideType }>;
  totalIndicatif: string;
  noteFr: string;
  noteEn: string;
  emoji: string;
}

export interface EtapeDemandeAFE {
  num: number;
  titreFr: string;
  titreEn: string;
  descFr: string;
  descEn: string;
  emoji: string;
}

export interface FaqItem {
  questionFr: string;
  questionEn: string;
  reponseFr: string;
  reponseEn: string;
}

// ─── Dataset ──────────────────────────────────────────────────────────────────

export const pretsBourses2026 = defineVersionedDataset(
  "prets-bourses-etudiants-2026",
  {
    year: 2026,
    lastUpdated: "2026-04-18",
    status: "estimate",
    sourceNote:
      "Montants estimés d'après les barèmes AFE publiés pour 2025-2026 et le régime fiscal QC/CA. " +
      "Les seuils exacts varient selon le dossier individuel — vérifier auprès de l'AFE et de l'ARC.",
    reviewCadence: "quarterly",
  },
  {
    programmes: [
      {
        id: "afe-prets",
        titleFr: "Prêts aux études — AFE",
        titleEn: "Student Loans — AFE",
        organism: "Aide financière aux études — Gouvernement du Québec",
        category: "pret" as AideType,
        summary:
          "Prêts remboursables accordés aux étudiants inscrits dans un établissement reconnu au Québec. " +
          "Le montant est calculé selon vos frais réels, votre revenu et votre situation financière (contribution parentale, autonomie ou conjoint). " +
          "Le remboursement commence 6 mois après la fin des études.",
        summaryEn:
          "Repayable loans granted to students enrolled at a recognized Quebec institution. " +
          "The amount is calculated based on actual costs, income, and financial situation. " +
          "Repayment starts 6 months after the end of studies.",
        eligibilityHighlights: [
          "Être inscrit dans un établissement reconnu par l'AFE",
          "Résider au Québec depuis au moins 12 mois consécutifs",
          "Satisfaire les critères de situation financière (revenu personnel et/ou parental)",
          "Être à temps plein, ou à temps partiel selon certaines conditions",
          "Pas de limite d'âge — les adultes en retour aux études sont admissibles",
        ],
        eligibilityHighlightsEn: [
          "Enrolled in an AFE-recognized institution",
          "Quebec resident for at least 12 consecutive months",
          "Meet financial status criteria (personal and/or parental income)",
          "Full-time, or part-time under specific conditions",
          "No age limit — adult learners are eligible",
        ],
        amountLabel: "Environ 2 000 $ – 17 500 $/année (temps plein) selon la situation",
        amountLabelEn: "Approx. $2,000–$17,500/year (full-time) based on situation",
        ctaLabel: "Faire une demande sur monPortail AFE",
        ctaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/demander-aide-financiere",
        tags: ["AFE", "prêts", "remboursable", "Québec", "temps plein", "temps partiel"],
        seoKeywords: ["prêts étudiants Québec 2026", "AFE prêts", "aide financière études Québec"],
      },
      {
        id: "afe-bourses",
        titleFr: "Bourses aux études — AFE",
        titleEn: "Student Grants — AFE",
        organism: "Aide financière aux études — Gouvernement du Québec",
        category: "bourse" as AideType,
        summary:
          "Portion non remboursable de l'aide AFE accordée aux étudiants dont le revenu familial est sous les seuils. " +
          "La bourse est calculée automatiquement lors de l'analyse de votre dossier AFE — aucune demande distincte n'est requise.",
        summaryEn:
          "Non-repayable portion of AFE aid for students whose family income is below set thresholds. " +
          "The grant is calculated automatically during your AFE application — no separate request is needed.",
        eligibilityHighlights: [
          "Admissible à l'aide AFE (prêts)",
          "Revenu familial brut sous le seuil AFE (variable selon la situation : ~35 000 – 65 000 $)",
          "Déterminée automatiquement lors du traitement du dossier",
          "Peut transformer une partie des prêts en bourses non remboursables",
        ],
        eligibilityHighlightsEn: [
          "Must be eligible for AFE loans",
          "Family income below AFE threshold (varies: ~$35,000–$65,000)",
          "Automatically assessed when your application is reviewed",
          "Can convert part of the loan amount into a non-repayable grant",
        ],
        amountLabel: "Variable — jusqu'à environ 8 000 $/année pour les dossiers à faible revenu",
        amountLabelEn: "Variable — up to approx. $8,000/year for low-income cases",
        ctaLabel: "Inclus dans la demande AFE",
        ctaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/demander-aide-financiere",
        tags: ["AFE", "bourses", "non remboursable", "faible revenu", "Québec"],
        seoKeywords: ["bourses étudiants Québec 2026", "AFE bourses", "aide non remboursable études"],
      },
      {
        id: "reep",
        titleFr: "REEP — Régime d'encouragement à l'éducation permanente",
        titleEn: "LLP — Lifelong Learning Plan",
        organism: "Agence du revenu du Canada",
        category: "retrait_reer" as AideType,
        summary:
          "Permet de retirer jusqu'à 10 000 $ par année (20 000 $ à vie) de son REER sans retenue d'impôt " +
          "immédiate pour financer ses propres études ou celles de son conjoint. Le montant doit être remboursé " +
          "dans le REER sur une période maximale de 10 ans.",
        summaryEn:
          "Allows withdrawing up to $10,000/year ($20,000 lifetime) from your RRSP tax-free to fund your own " +
          "studies or your spouse's. Amount must be repaid into the RRSP over up to 10 years.",
        eligibilityHighlights: [
          "Avoir un REER avec des cotisations disponibles",
          "Être inscrit à temps plein dans un programme admissible (ou temps partiel si limitation fonctionnelle)",
          "Le programme doit durer au moins 3 mois consécutifs",
          "Rembourser sur 10 ans — sinon, le montant non remboursé est ajouté au revenu imposable",
        ],
        eligibilityHighlightsEn: [
          "Must have an RRSP with available funds",
          "Enrolled full-time in an eligible program (part-time if a functional limitation applies)",
          "Program must last at least 3 consecutive months",
          "Repay over 10 years — otherwise the unrepaid amount becomes taxable income",
        ],
        amountLabel: "Jusqu'à 10 000 $/année — maximum cumulatif de 20 000 $",
        amountLabelEn: "Up to $10,000/year — $20,000 lifetime maximum",
        ctaLabel: "Guide REEP (ARC)",
        ctaHref: "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-20800-deduction-reer.html",
        tags: ["REEP", "REER", "retour aux études", "fédéral", "remboursement"],
        seoKeywords: ["REEP études REER Québec", "retrait REER études 2026", "LLP Canada"],
      },
      {
        id: "credit-federal-scolarite",
        titleFr: "Crédit fédéral pour frais de scolarité",
        titleEn: "Federal Tuition Tax Credit",
        organism: "Agence du revenu du Canada",
        category: "credit_impot" as AideType,
        summary:
          "Crédit d'impôt non remboursable de 15 % sur les frais de scolarité admissibles payés à un " +
          "établissement d'enseignement postsecondaire. Peut être reporté indéfiniment ou transféré en partie " +
          "à un parent ou conjoint (jusqu'à 5 000 $).",
        summaryEn:
          "Non-refundable 15% credit on eligible tuition paid to a post-secondary institution. " +
          "Can be carried forward indefinitely or partially transferred to a parent or spouse (up to $5,000).",
        eligibilityHighlights: [
          "Frais de scolarité admissibles supérieurs à 100 $ par établissement",
          "T2202 (Certificat pour frais de scolarité) fourni par l'établissement",
          "Reportable indéfiniment si votre impôt fédéral est nul cette année",
          "Transférable à un parent ou conjoint (maximum 5 000 $ de frais admissibles)",
        ],
        eligibilityHighlightsEn: [
          "Eligible tuition over $100 per institution",
          "T2202 certificate issued by the institution",
          "Unused credit carries forward indefinitely",
          "Can transfer up to $5,000 to a parent or spouse",
        ],
        amountLabel: "15 % des frais admissibles (crédit non remboursable fédéral)",
        amountLabelEn: "15% of eligible tuition (federal non-refundable credit)",
        ctaLabel: "Ligne 32300 — Déclaration fédérale",
        ctaHref: "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-32300-frais-admissibles.html",
        tags: ["crédit d'impôt", "fédéral", "frais scolarité", "T2202", "non remboursable"],
        seoKeywords: ["crédit impôt frais scolarité fédéral 2026", "T2202 Canada", "déduction études Canada"],
      },
      {
        id: "credit-qc-formation",
        titleFr: "Crédit québécois pour frais de formation",
        titleEn: "Quebec Training Expense Credit",
        organism: "Revenu Québec",
        category: "credit_impot" as AideType,
        summary:
          "Le Québec a aboli le crédit d'impôt général pour frais de scolarité universitaires. " +
          "Il subsiste un crédit pour certains frais de formation professionnelle ou d'examen admissibles, " +
          "calculé à 20 % du montant payé. Vérifiez votre RL-8 et le guide Revenu Québec pour confirmer vos dépenses.",
        summaryEn:
          "Quebec eliminated the general university tuition tax credit. A credit for eligible vocational training " +
          "or examination fees remains, calculated at 20% of the amount paid. " +
          "Check your RL-8 and the Revenu Québec guide to confirm eligible expenses.",
        eligibilityHighlights: [
          "Frais de formation professionnelle ou d'examens reconnus (RL-8)",
          "Taux : 20 % des dépenses admissibles",
          "Attention : pas de crédit pour les frais de scolarité universitaires standard",
          "Confirmer les dépenses admissibles sur le site de Revenu Québec",
        ],
        eligibilityHighlightsEn: [
          "Eligible vocational training or recognized exam fees (RL-8)",
          "Rate: 20% of eligible expenses",
          "Note: no credit for standard university tuition in Quebec",
          "Confirm eligible expenses on the Revenu Québec website",
        ],
        amountLabel: "20 % des frais de formation ou d'examen admissibles",
        amountLabelEn: "20% of eligible training or exam fees",
        ctaLabel: "Revenu Québec — Crédit pour formation",
        ctaHref: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-les-frais-de-formation/",
        tags: ["crédit d'impôt", "provincial", "Québec", "RL-8", "formation professionnelle"],
        seoKeywords: ["crédit impôt formation Québec 2026", "RL-8 Québec", "frais formation Revenu Québec"],
      },
      {
        id: "bourse-perspective-qc",
        titleFr: "Bourse Perspective Québec",
        titleEn: "Bourse Perspective Québec",
        organism: "Gouvernement du Québec",
        category: "bourse" as AideType,
        summary:
          "Bourse annuelle de 5 000 $ pour les étudiants inscrits dans des programmes prioritaires. " +
          "Attention : le programme est en phase de continuité uniquement. " +
          "La dernière session d'inscription à un nouveau programme admissible était l'hiver 2025. " +
          "Seuls les étudiants qui poursuivent un programme déjà admissible peuvent encore en bénéficier.",
        summaryEn:
          "Annual $5,000 grant for students in priority programs. " +
          "Important: the program is in continuity phase only. " +
          "The last eligible enrollment session was Winter 2025. " +
          "Only students continuing an already-eligible program may still benefit.",
        eligibilityHighlights: [
          "⚠️ Continuité seulement — dernière inscription : hiver 2025",
          "Être déjà inscrit dans un programme admissible avant l'hiver 2025",
          "Programme prioritaire : sciences, génie, santé, enseignement, travail social",
          "Inscription à temps plein",
          "Revenus sous le seuil de la Bourse Perspective",
        ],
        eligibilityHighlightsEn: [
          "⚠️ Continuity only — last eligible enrollment: Winter 2025",
          "Must already be enrolled in an eligible program before Winter 2025",
          "Priority fields: sciences, engineering, healthcare, education, social work",
          "Full-time enrollment required",
          "Income below the Bourse Perspective threshold",
        ],
        amountLabel: "5 000 $/année pendant la durée du programme (continuité seulement)",
        amountLabelEn: "$5,000/year for the duration of the program (continuity only)",
        ctaLabel: "Vérifier avec votre établissement",
        ctaHref: "https://www.bourseperspective.gouv.qc.ca",
        tags: ["Perspective QC", "bourse", "programmes prioritaires", "continuité"],
        seoKeywords: ["Bourse Perspective Québec 2026", "bourse sciences santé Québec", "aide études STEM Québec"],
        warningFr:
          "Ce programme n'accepte plus de nouveaux étudiants depuis l'hiver 2025. " +
          "Si vous n'étiez pas déjà inscrit dans un programme admissible avant cette date, " +
          "vous n'y êtes pas admissible pour 2026.",
        warningEn:
          "This program no longer accepts new students as of Winter 2025. " +
          "If you were not already enrolled in an eligible program before that date, " +
          "you are not eligible for 2026.",
      },
      {
        id: "exemption-droits-intl",
        titleFr: "Exemption de droits de scolarité différenciés",
        titleEn: "Exemption from Differentiated Tuition Fees",
        organism: "Gouvernement du Québec",
        category: "exemption" as AideType,
        summary:
          "Certains étudiants internationaux résidents permanents, réfugiés reconnus ou ayant un statut " +
          "particulier peuvent bénéficier des tarifs québécois (non différenciés) plutôt que des droits " +
          "de scolarité internationaux, représentant une économie significative.",
        summaryEn:
          "Certain international students with permanent resident status, recognized refugee status, or " +
          "particular immigration statuses may qualify for Quebec resident tuition rates rather than " +
          "international fees, representing significant savings.",
        eligibilityHighlights: [
          "Résident permanent canadien établi au Québec",
          "Réfugié reconnu ou demandeur d'asile selon certains critères",
          "Certains statuts liés à des accords de réciprocité (ex. : France)",
          "Présenter les documents officiels à l'établissement dès l'inscription",
        ],
        eligibilityHighlightsEn: [
          "Canadian permanent resident established in Quebec",
          "Recognized refugee or asylum seeker meeting specific criteria",
          "Certain statuses under reciprocity agreements (e.g., France)",
          "Submit official documents to your institution at enrollment",
        ],
        amountLabel: "Économie variable — jusqu'à plusieurs milliers de $/session selon l'établissement",
        amountLabelEn: "Variable savings — potentially thousands of $/semester depending on institution",
        ctaLabel: "Vérifier auprès de votre établissement",
        ctaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/droits-scolarite-etrangers",
        tags: ["étudiants internationaux", "exemption", "droits scolarité", "résidents permanents"],
        seoKeywords: ["exemption droits scolarité Québec étudiants internationaux", "tarifs Québec résidents permanents"],
      },
      {
        id: "remise-dette-etudes-qc",
        titleFr: "Aide à la remise de dette d'études",
        titleEn: "Student Debt Relief",
        organism: "Aide financière aux études — Gouvernement du Québec",
        category: "remise" as AideType,
        summary:
          "Allègement de 15 % du solde de prêt AFE restant pour les diplômés qui travaillent dans " +
          "leur domaine de formation au Québec et respectent certaines conditions. " +
          "Il ne s'agit pas d'une remise automatique — une demande est requise après l'obtention du diplôme.",
        summaryEn:
          "A 15% reduction of the remaining AFE loan balance for graduates who work in their field " +
          "in Quebec and meet specific conditions. Not automatic — an application is required after graduation.",
        eligibilityHighlights: [
          "Avoir terminé un programme d'études admissible",
          "Travailler dans son domaine de formation au Québec",
          "Satisfaire les conditions de durée et de revenu prévues par le programme",
          "Faire une demande dans les délais prescrits",
        ],
        eligibilityHighlightsEn: [
          "Completed an eligible study program",
          "Working in the field of study in Quebec",
          "Meet the program's duration and income conditions",
          "Apply within the prescribed deadline",
        ],
        amountLabel: "15 % du solde de prêt restant, sous conditions",
        amountLabelEn: "15% of remaining loan balance, subject to conditions",
        ctaLabel: "Vérifier les conditions (AFE)",
        ctaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/remboursement",
        tags: ["remise de dette", "AFE", "diplômés", "emploi en formation"],
        seoKeywords: ["remise dette études Québec", "allègement prêts AFE Québec"],
      },
    ] as ProgrammeAideEtudes[],

    profilsIllustratifs: [
      {
        id: "jeune-bac",
        prenomFr: "Sofia",
        prenomEn: "Sofia",
        ageSituation: "21 ans — Bac sciences de la santé, contribution parentale",
        ageSituationEn: "Age 21 — Health sciences bachelor's, parental contribution",
        detail: [
          { labelFr: "Prêts AFE (indicatif)", labelEn: "AFE loans (indicative)", montant: "~7 500 $", type: "pret" as AideType },
          { labelFr: "Bourses AFE (indicatif)", labelEn: "AFE grants (indicative)", montant: "~2 500 $", type: "bourse" as AideType },
          { labelFr: "Crédit fédéral frais scolarité", labelEn: "Federal tuition credit", montant: "~600 $", type: "credit_impot" as AideType },
        ],
        totalIndicatif: "~10 600 $",
        noteFr:
          "Ce profil illustratif suppose un revenu parental d'environ 65 000 $. " +
          "Les montants réels dépendent du dossier AFE. La Bourse Perspective QC n'est disponible que si Sofia " +
          "est déjà inscrite dans un programme admissible depuis avant l'hiver 2025.",
        noteEn:
          "This illustrative profile assumes parental income of ~$65,000. " +
          "Actual amounts depend on the AFE file. Bourse Perspective QC only applies if Sofia was already " +
          "enrolled in an eligible program before Winter 2025.",
        emoji: "👩‍⚕️",
      },
      {
        id: "adulte-autonome-maitrise",
        prenomFr: "Marc",
        prenomEn: "Marc",
        ageSituation: "29 ans — Maîtrise informatique, autonome financièrement",
        ageSituationEn: "Age 29 — Computer science master's, financially independent",
        detail: [
          { labelFr: "Prêts AFE (indicatif)", labelEn: "AFE loans (indicative)", montant: "~12 000 $", type: "pret" as AideType },
          { labelFr: "Bourses AFE (indicatif)", labelEn: "AFE grants (indicative)", montant: "~3 000 $", type: "bourse" as AideType },
          { labelFr: "Crédit fédéral frais scolarité", labelEn: "Federal tuition credit", montant: "~750 $", type: "credit_impot" as AideType },
        ],
        totalIndicatif: "~15 750 $",
        noteFr:
          "Marc est autonome avec un revenu personnel d'environ 15 000 $ (contrats ponctuels). " +
          "S'il dispose d'un REER, le REEP pourrait lui permettre de réduire ses prêts en retirant jusqu'à " +
          "10 000 $ de son REER sans impôt immédiat.",
        noteEn:
          "Marc is financially independent with ~$15,000 personal income (contract work). " +
          "If he has an RRSP, the LLP could allow him to reduce loans by withdrawing up to " +
          "$10,000 from his RRSP tax-free.",
        emoji: "👨‍💻",
      },
      {
        id: "retour-etudes-reep",
        prenomFr: "Léa",
        prenomEn: "Léa",
        ageSituation: "36 ans — Retour aux études (DEP technique), REER disponible",
        ageSituationEn: "Age 36 — Back to school (vocational diploma), RRSP available",
        detail: [
          { labelFr: "Prêts AFE (selon dossier)", labelEn: "AFE loans (case-dependent)", montant: "À vérifier", type: "pret" as AideType },
          { labelFr: "Retrait REEP (si REER ≥ 10 000 $)", labelEn: "LLP withdrawal (if RRSP ≥ $10k)", montant: "Jusqu'à 10 000 $", type: "retrait_reer" as AideType },
          { labelFr: "Crédit fédéral frais formation", labelEn: "Federal training credit", montant: "~300 $", type: "credit_impot" as AideType },
          { labelFr: "Crédit QC frais formation", labelEn: "Quebec training credit", montant: "~200 $", type: "credit_impot" as AideType },
        ],
        totalIndicatif: "Variable",
        noteFr:
          "L'admissibilité de Léa à l'AFE dépend de son revenu de ménage et de son programme. " +
          "Le REEP est le levier principal si elle a un REER constitué. " +
          "Les crédits d'impôt viendront après production de la déclaration.",
        noteEn:
          "Léa's AFE eligibility depends on household income and program. " +
          "The LLP is the main lever if she has an RRSP. " +
          "Tax credits come after filing the return.",
        emoji: "👩‍🔬",
      },
    ] as ProfilIllustratif[],

    etapesDemandeAFE: [
      {
        num: 1,
        titreFr: "Vérifier votre admissibilité",
        titreEn: "Check your eligibility",
        descFr:
          "Avant de commencer, assurez-vous : être inscrit dans un programme reconnu AFE, " +
          "avoir résidé au Québec au moins 12 mois consécutifs, et satisfaire les critères de situation financière.",
        descEn:
          "Before starting: confirm enrollment in an AFE-recognized program, " +
          "12 consecutive months of Quebec residency, and meeting the financial situation criteria.",
        emoji: "✅",
      },
      {
        num: 2,
        titreFr: "Créer votre dossier sur monPortail AFE",
        titreEn: "Create your file on monPortail AFE",
        descFr:
          "Rendez-vous sur monPortail AFE avec votre NAS et vos informations personnelles. " +
          "Créez votre compte ou connectez-vous si vous avez déjà un dossier.",
        descEn:
          "Visit monPortail AFE with your SIN and personal information. " +
          "Create an account or log in if you already have a file.",
        emoji: "💻",
      },
      {
        num: 3,
        titreFr: "Remplir la demande",
        titreEn: "Complete the application",
        descFr:
          "Déclarez votre situation financière : revenus personnels, revenus des parents ou du conjoint, " +
          "personnes à charge. La demande prend environ 20 à 40 minutes.",
        descEn:
          "Declare your financial situation: personal income, parental or spousal income, dependants. " +
          "The form takes approximately 20–40 minutes.",
        emoji: "📝",
      },
      {
        num: 4,
        titreFr: "Fournir les documents requis",
        titreEn: "Submit required documents",
        descFr:
          "Principalement : avis de cotisation ARC (ou déclaration), confirmation d'inscription de l'établissement, " +
          "et pièces justificatives selon votre situation (résidence, naissance d'un enfant, etc.).",
        descEn:
          "Mainly: CRA Notice of Assessment (or tax return), enrollment confirmation from your institution, " +
          "and supporting documents based on your situation.",
        emoji: "📄",
      },
      {
        num: 5,
        titreFr: "Signer le contrat de prêt",
        titreEn: "Sign the loan agreement",
        descFr:
          "Une fois l'offre reçue, signez électroniquement. Une partie est versée directement à l'établissement " +
          "(frais de scolarité), et le reste vous est versé personnellement.",
        descEn:
          "Once the offer is received, sign electronically. Part goes directly to the institution (tuition); " +
          "the rest is deposited in your account.",
        emoji: "✍️",
      },
      {
        num: 6,
        titreFr: "Démarrer le remboursement après les études",
        titreEn: "Begin repayment after studies",
        descFr:
          "Le remboursement commence 6 mois après la fin ou l'abandon des études. " +
          "Des plans adaptés au revenu sont disponibles si les mensualités standard sont trop élevées.",
        descEn:
          "Repayment starts 6 months after the end or abandonment of studies. " +
          "Income-based repayment plans are available if standard payments are too high.",
        emoji: "📅",
      },
    ] as EtapeDemandeAFE[],

    faqs: [
      {
        questionFr: "Comment est calculé le montant de mon aide AFE ?",
        questionEn: "How is my AFE aid amount calculated?",
        reponseFr:
          "L'AFE calcule votre aide selon vos frais réels d'études (droits de scolarité, logement, transport, matériel scolaire) " +
          "moins votre capacité contributive. Cette capacité dépend de votre statut financier : " +
          "si vous êtes considéré à charge de vos parents, le revenu parental est intégré. " +
          "Si vous êtes autonome ou avez un conjoint, c'est le revenu de ménage qui compte. " +
          "Le résultat est une combinaison de prêts (toujours remboursables) et, si votre revenu est suffisamment bas, de bourses.",
        reponseEn:
          "AFE calculates your aid based on actual study costs (tuition, housing, transport, materials) " +
          "minus your contribution capacity. This capacity depends on your financial status: " +
          "if you are considered dependent on your parents, parental income is factored in. " +
          "If you are autonomous or have a spouse, household income applies. " +
          "The result is a mix of loans (always repayable) and, if income is low enough, grants.",
      },
      {
        questionFr: "Quelle est la différence entre un prêt et une bourse AFE ?",
        questionEn: "What is the difference between an AFE loan and grant?",
        reponseFr:
          "Un prêt AFE doit être remboursé après les études, avec intérêts. " +
          "Une bourse est une aide non remboursable accordée selon le revenu familial — elle remplace ou s'ajoute aux prêts. " +
          "L'AFE ne sépare pas les deux dans la demande : c'est lors de l'analyse de votre dossier que la portion " +
          "bourse est déterminée, selon votre revenu.",
        reponseEn:
          "An AFE loan must be repaid with interest after studies. " +
          "A grant is non-repayable aid awarded based on family income — it replaces or supplements loans. " +
          "AFE doesn't separate the two in the application: the grant portion is determined during your file review, based on income.",
      },
      {
        questionFr: "La Bourse Perspective Québec est-elle encore disponible en 2026 ?",
        questionEn: "Is the Bourse Perspective Québec still available in 2026?",
        reponseFr:
          "La Bourse Perspective Québec n'accepte plus de nouveaux étudiants depuis l'hiver 2025. " +
          "En 2026, seuls les étudiants déjà inscrits dans un programme admissible avant cette date peuvent encore la recevoir, " +
          "dans la mesure où ils poursuivent leur parcours dans ce programme. " +
          "Si vous entrez dans un nouveau programme en 2026, vous n'y avez pas accès.",
        reponseEn:
          "Bourse Perspective Québec no longer accepts new students as of Winter 2025. " +
          "In 2026, only students already enrolled in an eligible program before that date may still receive it, " +
          "as long as they continue in that program. " +
          "If you're entering a new program in 2026, you are not eligible.",
      },
      {
        questionFr: "Je suis adulte autonome en retour aux études — suis-je admissible à l'AFE ?",
        questionEn: "I'm an independent adult returning to school — am I eligible for AFE?",
        reponseFr:
          "Oui, il n'y a pas de limite d'âge pour l'AFE. Si vous êtes reconnu autonome (en général, vous n'êtes plus à la charge " +
          "de vos parents et vous avez un revenu propre ou un conjoint), seul votre revenu de ménage est pris en compte. " +
          "Un revenu bas pendant les études peut vous rendre admissible à une aide substantielle. " +
          "Vérifiez les conditions de statut d'autonomie sur le site de l'AFE.",
        reponseEn:
          "Yes, there is no age limit for AFE. If you are recognized as financially independent " +
          "(generally, no longer dependent on parents, with your own income or a spouse), " +
          "only your household income is considered. " +
          "Low income during studies may make you eligible for substantial aid. " +
          "Check the autonomy status conditions on the AFE website.",
      },
      {
        questionFr: "Comment fonctionne le REEP pour financer un retour aux études ?",
        questionEn: "How does the LLP work to fund a return to school?",
        reponseFr:
          "Le REEP vous permet de retirer jusqu'à 10 000 $ par année de votre REER, jusqu'à un maximum cumulatif de 20 000 $, " +
          "sans payer d'impôt immédiat. Vous devez rembourser ce montant dans votre REER sur 10 ans. " +
          "Si vous ne remboursez pas, la portion non remboursée s'ajoute à votre revenu imposable cette année-là. " +
          "Le REEP est particulièrement utile si vous avez accumulé un REER avant de retourner aux études.",
        reponseEn:
          "The LLP lets you withdraw up to $10,000/year from your RRSP, up to $20,000 total, without immediate tax. " +
          "You must repay this into your RRSP over 10 years. " +
          "If you don't repay, the unrepaid amount is added to your taxable income that year. " +
          "The LLP is especially useful if you've built up an RRSP before returning to school.",
      },
      {
        questionFr: "Quels crédits d'impôt les étudiants peuvent-ils réclamer ?",
        questionEn: "What tax credits can students claim?",
        reponseFr:
          "Fédéralement, vous pouvez réclamer un crédit non remboursable de 15 % sur vos frais de scolarité admissibles (T2202). " +
          "Si votre impôt fédéral est nul, ce crédit peut être reporté ou transféré (jusqu'à 5 000 $) à un parent ou conjoint. " +
          "Au Québec, le crédit général pour frais de scolarité universitaires a été aboli. " +
          "Il subsiste un crédit pour certains frais de formation professionnelle ou d'examens (RL-8), à vérifier avec Revenu Québec.",
        reponseEn:
          "Federally, you can claim a 15% non-refundable credit on eligible tuition (T2202). " +
          "If your federal tax is zero, the credit can be carried forward or transferred (up to $5,000) to a parent or spouse. " +
          "In Quebec, the general university tuition credit was eliminated. " +
          "A credit for some vocational training or exam fees (RL-8) remains — check with Revenu Québec.",
      },
      {
        questionFr: "Que se passe-t-il si j'abandonne mes études ?",
        questionEn: "What happens if I drop out?",
        reponseFr:
          "Les prêts AFE restent dus même si vous n'obtenez pas votre diplôme. " +
          "Le remboursement commence 6 mois après l'abandon. Si vous reprenez les études dans les 6 mois, " +
          "le délai est suspendu. Des modalités de remboursement adaptées au revenu sont disponibles " +
          "si les mensualités standard vous sont inaccessibles.",
        reponseEn:
          "AFE loans remain due even if you don't graduate. " +
          "Repayment starts 6 months after dropping out. If you return to school within 6 months, " +
          "the period is suspended. Income-based repayment options are available " +
          "if standard payments are unaffordable.",
      },
      {
        questionFr: "Les étudiants internationaux peuvent-ils bénéficier de l'AFE ?",
        questionEn: "Can international students access AFE?",
        reponseFr:
          "En règle générale, les étudiants internationaux (détenteurs d'un permis d'études) ne sont pas admissibles à l'AFE. " +
          "Cependant, les résidents permanents établis au Québec depuis au moins 12 mois consécutifs sont admissibles. " +
          "Certains autres statuts d'immigration peuvent aussi ouvrir droit à l'aide — vérifiez sur le site de l'AFE. " +
          "Par ailleurs, des exemptions sur les droits de scolarité différenciés peuvent réduire considérablement les frais.",
        reponseEn:
          "In general, international students (study permit holders) are not eligible for AFE. " +
          "However, permanent residents established in Quebec for at least 12 consecutive months are eligible. " +
          "Certain other immigration statuses may also qualify — check the AFE website. " +
          "Additionally, exemptions from differentiated tuition fees can significantly reduce costs.",
      },
      {
        questionFr: "Quand faire ma demande AFE ?",
        questionEn: "When should I apply for AFE?",
        reponseFr:
          "Le plus tôt possible, idéalement dès l'été précédant la session d'automne. " +
          "L'AFE ouvre les demandes plusieurs mois à l'avance. " +
          "Prévoyez un délai de traitement de 4 à 8 semaines. " +
          "Faire la demande en retard peut entraîner un manque de liquidités en début de session.",
        reponseEn:
          "As early as possible — ideally the summer before the fall session. " +
          "AFE opens applications months in advance. " +
          "Allow 4–8 weeks for processing. " +
          "Late applications can lead to cash shortfalls at the start of the semester.",
      },
      {
        questionFr: "En quoi consiste la remise de dette d'études du Québec ?",
        questionEn: "What is Quebec's student debt relief?",
        reponseFr:
          "L'aide à la remise de dette d'études permet aux diplômés qui travaillent dans leur domaine de formation " +
          "au Québec et respectent certaines conditions de revenus et de durée d'emploi d'obtenir un allègement " +
          "de 15 % de leur solde de prêt AFE restant. Ce n'est pas automatique : une demande est requise " +
          "après l'obtention du diplôme, dans les délais prescrits.",
        reponseEn:
          "Student debt relief allows graduates who work in their field of study in Quebec " +
          "and meet certain income and employment duration conditions to receive a 15% reduction " +
          "on their remaining AFE loan balance. It is not automatic: an application is required " +
          "after graduation, within the prescribed deadlines.",
      },
    ] as FaqItem[],
  }
);

// ─── Named exports ─────────────────────────────────────────────────────────────

export const pretsBoursesProgrammes2026 = pretsBourses2026.values.programmes;
export const pretsBoursesFaqs2026 = pretsBourses2026.values.faqs;
export const pretsBoursesProfils2026 = pretsBourses2026.values.profilsIllustratifs;
export const pretsBourseEtapes2026 = pretsBourses2026.values.etapesDemandeAFE;
