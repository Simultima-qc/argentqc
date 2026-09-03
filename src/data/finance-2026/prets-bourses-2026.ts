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
    lastUpdated: "2026-08-28",
    status: "official",
    sourceNote:
      "Règles vérifiées dans les sources officielles AFE 2026-2027, Revenu Québec et ARC. " +
      "Aucun montant AFE personnalisé n'est estimé par ArgentQC.",
    reviewCadence: "manual",
    nextReviewAt: "2026-10-12",
    criticality: "high",
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
          "L'aide est calculée selon les dépenses admises, les contributions applicables et la situation complète. " +
          "Après les études, aucun remboursement de capital n'est exigé pendant six mois, mais les intérêts sont à la charge de l'emprunteur dès le mois suivant.",
        summaryEn:
          "Repayable loans granted to students enrolled at a recognized Quebec institution. " +
          "Aid is calculated from recognized expenses, applicable contributions and the complete situation. " +
          "After studies, no principal is due for six months, but interest is the borrower's responsibility starting the following month.",
        eligibilityHighlights: [
          "Être inscrit dans un établissement reconnu par l'AFE",
          "Être considéré résident du Québec selon l'un des critères officiels",
          "Satisfaire les critères de citoyenneté ou de statut, de période d'admissibilité et d'endettement",
          "Être à temps plein ou réputé temps plein; le prêt pour études à temps partiel est un programme distinct",
          "Pas de limite d'âge — les adultes en retour aux études sont admissibles",
        ],
        eligibilityHighlightsEn: [
          "Enrolled in an AFE-recognized institution",
          "Be considered a Quebec resident under one of the official criteria",
          "Meet citizenship or status, eligibility-period and debt-limit requirements",
          "Study full-time or be deemed full-time; the part-time loan is a separate program",
          "No age limit — adult learners are eligible",
        ],
        amountLabel: "Montant calculé selon le dossier complet",
        amountLabelEn: "Amount calculated from the complete file",
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
          "Portion non remboursable accordée lorsque les besoins reconnus dépassent la portion de prêt établie. " +
          "La bourse est calculée automatiquement lors de l'analyse de votre dossier AFE — aucune demande distincte n'est requise.",
        summaryEn:
          "Non-repayable portion awarded when recognized needs exceed the established loan portion. " +
          "The grant is calculated automatically during your AFE application — no separate request is needed.",
        eligibilityHighlights: [
          "Admissible à l'aide AFE (prêts)",
          "Besoins reconnus supérieurs à la portion de prêt calculée",
          "Déterminée automatiquement lors du traitement du dossier",
          "Peut transformer une partie des prêts en bourses non remboursables",
        ],
        eligibilityHighlightsEn: [
          "Must be eligible for AFE loans",
          "Recognized needs exceed the calculated loan portion",
          "Automatically assessed when your application is reviewed",
          "Can convert part of the loan amount into a non-repayable grant",
        ],
        amountLabel: "Variable — aucun plafond universel",
        amountLabelEn: "Variable — no universal cap",
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
          "Crédit d'impôt non remboursable de 14 % en 2026 sur les frais de scolarité admissibles payés à un " +
          "établissement d'enseignement postsecondaire. Peut être reporté indéfiniment ou transféré en partie " +
          "à un parent ou conjoint (jusqu'à 5 000 $).",
        summaryEn:
          "Non-refundable 14% credit in 2026 on eligible tuition paid to a post-secondary institution. " +
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
        amountLabel: "14 % des frais admissibles en 2026",
        amountLabelEn: "14% of eligible tuition in 2026",
        ctaLabel: "Ligne 32300 — Déclaration fédérale",
        ctaHref: "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-32300-frais-admissibles.html",
        tags: ["crédit d'impôt", "fédéral", "frais scolarité", "T2202", "non remboursable"],
        seoKeywords: ["crédit impôt frais scolarité fédéral 2026", "T2202 Canada", "déduction études Canada"],
      },
      {
        id: "credit-qc-formation",
        titleFr: "Crédit québécois pour frais de scolarité ou d'examen",
        titleEn: "Quebec Tuition or Examination Credit",
        organism: "Revenu Québec",
        category: "credit_impot" as AideType,
        summary:
          "Le Québec accorde un crédit non remboursable de 8 % pour les frais de scolarité ou d'examen admissibles. " +
          "Les frais reconnus et les règles de transfert sont détaillés à l'annexe T et par Revenu Québec.",
        summaryEn:
          "Quebec provides an 8% non-refundable credit for eligible tuition or examination fees. " +
          "Recognized fees and transfer rules are detailed on Schedule T and by Revenu Québec.",
        eligibilityHighlights: [
          "Frais de scolarité ou d'examen reconnus",
          "Taux : 8 % des dépenses admissibles",
          "Les frais universitaires admissibles ne sont pas abolis",
          "Confirmer les dépenses admissibles sur le site de Revenu Québec",
        ],
        eligibilityHighlightsEn: [
          "Eligible tuition or recognized examination fees",
          "Rate: 8% of eligible expenses",
          "Eligible university tuition has not been abolished",
          "Confirm eligible expenses on the Revenu Québec website",
        ],
        amountLabel: "8 % des frais de scolarité ou d'examen admissibles",
        amountLabelEn: "8% of eligible tuition or examination fees",
        ctaLabel: "Revenu Québec — Ligne 398",
        ctaHref: "https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration-de-revenus/aide-par-ligne/350-a-398-1-credits-dimpot-non-remboursables/ligne-398/",
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
          "Bourse de 1 500 $ par session admissible au collégial ou de 2 500 $ à l'université. " +
          "Attention : le programme est en phase de continuité uniquement. " +
          "La dernière session d'inscription à un nouveau programme admissible était l'hiver 2025. " +
          "Seuls les étudiants qui poursuivent un programme déjà admissible peuvent encore en bénéficier.",
        summaryEn:
          "$1,500 per eligible college term or $2,500 per eligible university term. " +
          "Important: the program is in continuity phase only. " +
          "The last eligible enrollment session was Winter 2025. " +
          "Only students continuing an already-eligible program may still benefit.",
        eligibilityHighlights: [
          "⚠️ Continuité seulement — dernière inscription : hiver 2025",
          "Avoir commencé un programme admissible au plus tard à l'hiver 2025 et poursuivre ce même programme",
          "Programme prioritaire : sciences, génie, santé, enseignement, travail social",
          "Inscription à temps plein",
          "Respecter les conditions de charge, de réussite, de résidence et de session",
        ],
        eligibilityHighlightsEn: [
          "⚠️ Continuity only — last eligible enrollment: Winter 2025",
          "Started an eligible program no later than Winter 2025 and continue in that same program",
          "Priority fields: sciences, engineering, healthcare, education, social work",
          "Full-time enrollment required",
          "Meet course-load, successful-completion, residency and term requirements",
        ],
        amountLabel: "1 500 $ collégial ou 2 500 $ université / session admissible",
        amountLabelEn: "$1,500 college or $2,500 university / eligible term",
        ctaLabel: "Vérifier avec votre établissement",
        ctaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/bourses-perspective/conditions-admissibilite",
        tags: ["Perspective QC", "bourse", "programmes prioritaires", "continuité"],
        seoKeywords: ["Bourse Perspective Québec 2026", "bourse sciences santé Québec", "aide études STEM Québec"],
        warningFr:
          "Ce programme n'accepte plus de nouveaux étudiants depuis l'hiver 2025. " +
          "Si vous n'avez pas commencé un programme admissible au plus tard à cette session, " +
          "vous n'y êtes pas admissible pour 2026.",
        warningEn:
          "This program no longer accepts new students as of Winter 2025. " +
          "If you did not start an eligible program no later than that term, " +
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
          "Allègement de 15 % de la dette d'études pour les personnes qui terminent un programme admissible " +
          "dans les délais prévus et ont reçu une bourse chaque année d'attribution. " +
          "Il ne s'agit pas d'une remise automatique — une demande est requise après l'obtention du diplôme.",
        summaryEn:
          "A 15% student-debt reduction for people who complete an eligible program within the prescribed time " +
          "and received a grant in every award year. Not automatic — an application is required after graduation.",
        eligibilityHighlights: [
          "Avoir terminé un programme admissible dans les délais prévus",
          "Avoir reçu une bourse AFE pour chaque année d'attribution du programme",
          "Faire une demande dans les 3 ans suivant la fin des études",
        ],
        eligibilityHighlightsEn: [
          "Completed an eligible program within the prescribed time",
          "Received an AFE grant for every award year in the program",
          "Apply within 3 years after completing studies",
        ],
        amountLabel: "15 % du solde de prêt restant, sous conditions",
        amountLabelEn: "15% of remaining loan balance, subject to conditions",
        ctaLabel: "Vérifier les conditions (AFE)",
        ctaHref: "https://www.quebec.ca/education/aide-financiere-aux-etudes/remboursement/remise-dette",
        tags: ["remise de dette", "AFE", "diplômés", "bourse"],
        seoKeywords: ["remise dette études Québec", "allègement prêts AFE Québec"],
      },
    ] as ProgrammeAideEtudes[],

    profilsIllustratifs: [] as ProfilIllustratif[],

    etapesDemandeAFE: [
      {
        num: 1,
        titreFr: "Vérifier votre admissibilité",
        titreEn: "Check your eligibility",
        descFr:
          "Avant de commencer, vérifiez votre statut, un des critères officiels de résidence au Québec, " +
          "la reconnaissance de l'établissement et du programme, ainsi que le statut temps plein ou réputé temps plein.",
        descEn:
          "Before starting, verify your status, one of Quebec's official residency criteria, " +
          "the recognized institution and program, and full-time or deemed-full-time status.",
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
          "Aucun remboursement de capital n'est exigé pendant les 6 mois suivant la fin ou l'abandon des études, " +
          "mais les intérêts sont à votre charge dès le mois suivant et peuvent être payés ou capitalisés.",
        descEn:
          "No principal payment is required for 6 months after studies end or are abandoned, " +
          "but interest becomes your responsibility the following month and may be paid or capitalized.",
        emoji: "📅",
      },
    ] as EtapeDemandeAFE[],

    faqs: [
      {
        questionFr: "Comment est calculé le montant de mon aide AFE ?",
        questionEn: "How is my AFE aid amount calculated?",
        reponseFr:
          "L'AFE calcule votre aide selon les dépenses admises par règlement " +
          "moins les contributions applicables. Ces contributions dépendent notamment de votre statut financier : " +
          "si vous êtes considéré à charge de vos parents, le revenu parental est intégré. " +
          "Si vous êtes autonome ou avez un conjoint, c'est le revenu de ménage qui compte. " +
          "L'aide est d'abord versée sous forme de prêt; une portion bourse peut s'ajouter si les besoins reconnus dépassent la portion de prêt.",
        reponseEn:
          "AFE calculates aid using expenses recognized by regulation " +
          "minus applicable contributions. These contributions depend in part on financial status: " +
          "if you are considered dependent on your parents, parental income is factored in. " +
          "If you are autonomous or have a spouse, household income applies. " +
          "Aid is provided first as a loan; a grant portion may be added when recognized needs exceed the loan portion.",
      },
      {
        questionFr: "Quelle est la différence entre un prêt et une bourse AFE ?",
        questionEn: "What is the difference between an AFE loan and grant?",
        reponseFr:
          "Un prêt AFE doit être remboursé après les études, avec intérêts. " +
          "Une bourse est une aide non remboursable qui s'ajoute lorsque les besoins reconnus dépassent la portion de prêt. " +
          "L'AFE ne sépare pas les deux dans la demande : c'est lors de l'analyse de votre dossier que la portion " +
          "bourse est déterminée à partir du dossier complet.",
        reponseEn:
          "An AFE loan must be repaid with interest after studies. " +
          "A grant is non-repayable aid added when recognized needs exceed the loan portion. " +
          "AFE determines that portion from the complete file during its review.",
      },
      {
        questionFr: "La Bourse Perspective Québec est-elle encore disponible en 2026 ?",
        questionEn: "Is the Bourse Perspective Québec still available in 2026?",
        reponseFr:
          "La Bourse Perspective Québec n'accepte plus de nouveaux étudiants depuis l'hiver 2025. " +
          "En 2026, seuls les étudiants ayant commencé un programme admissible au plus tard à l'hiver 2025 peuvent encore la recevoir, " +
          "dans la mesure où ils poursuivent leur parcours dans ce programme. " +
          "Si vous entrez dans un nouveau programme en 2026, vous n'y avez pas accès.",
        reponseEn:
          "Bourse Perspective Québec no longer accepts new students as of Winter 2025. " +
          "In 2026, only students who started an eligible program no later than Winter 2025 may still receive it, " +
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
          "Fédéralement, le taux 2026 du crédit non remboursable sur les frais de scolarité admissibles est de 14 % (T2202). " +
          "Si votre impôt fédéral est nul, ce crédit peut être reporté ou transféré (jusqu'à 5 000 $) à un parent ou conjoint. " +
          "Au Québec, le crédit pour frais de scolarité ou d'examen existe toujours au taux de 8 %. " +
          "Des crédits fédéral et québécois existent aussi pour certains intérêts sur prêts étudiants admissibles.",
        reponseEn:
          "Federally, the 2026 non-refundable credit rate on eligible tuition is 14% (T2202). " +
          "If your federal tax is zero, the credit can be carried forward or transferred (up to $5,000) to a parent or spouse. " +
          "In Quebec, the tuition or examination credit still exists at an 8% rate. " +
          "Federal and Quebec credits also exist for certain eligible student-loan interest.",
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
          "La résidence permanente peut satisfaire le critère de statut, mais il faut aussi être considéré résident du Québec " +
          "selon l'un des critères officiels de l'AFE. " +
          "Par ailleurs, des exemptions sur les droits de scolarité différenciés peuvent réduire considérablement les frais.",
        reponseEn:
          "In general, international students (study permit holders) are not eligible for AFE. " +
          "Permanent residence may satisfy the status requirement, but the person must also be considered a Quebec resident " +
          "under one of AFE's official criteria. " +
          "Additionally, exemptions from differentiated tuition fees can significantly reduce costs.",
      },
      {
        questionFr: "Quand faire ma demande AFE ?",
        questionEn: "When should I apply for AFE?",
        reponseFr:
          "Le plus tôt possible, idéalement dès l'été précédant la session d'automne. " +
          "Consultez monPortail AFE pour les dates et le suivi propres à votre année d'attribution. " +
          "Une demande incomplète ou tardive peut retarder l'analyse du dossier.",
        reponseEn:
          "As early as possible — ideally the summer before the fall session. " +
          "Consult monPortail AFE for dates and tracking specific to your award year. " +
          "An incomplete or late application may delay file review.",
      },
      {
        questionFr: "En quoi consiste la remise de dette d'études du Québec ?",
        questionEn: "What is Quebec's student debt relief?",
        reponseFr:
          "La remise de dette peut réduire de 15 % la dette d'études d'une personne qui termine un programme admissible " +
          "dans les délais prévus et reçoit une bourse pour chaque année d'attribution. Ce n'est pas automatique : " +
          "la demande doit être présentée dans les 3 ans suivant la fin des études.",
        reponseEn:
          "Debt remission may reduce student debt by 15% for a person who completes an eligible program " +
          "within the prescribed time and receives a grant for every award year. It is not automatic: " +
          "the application must be filed within 3 years after studies end.",
      },
    ] as FaqItem[],
  }
);

// ─── Named exports ─────────────────────────────────────────────────────────────

export const pretsBoursesProgrammes2026 = pretsBourses2026.values.programmes;
export const pretsBoursesFaqs2026 = pretsBourses2026.values.faqs;
export const pretsBoursesProfils2026 = pretsBourses2026.values.profilsIllustratifs;
export const pretsBourseEtapes2026 = pretsBourses2026.values.etapesDemandeAFE;
