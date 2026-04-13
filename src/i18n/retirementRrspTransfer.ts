import type { Locale } from "@/i18n/routing";

export interface RetirementRrspTransferWizardQuestion {
  id: "source" | "destination" | "planType" | "scope" | "needCash" | "assets";
  prompt: string;
  helper?: string;
  options: Array<{ value: string; label: string }>;
}

export interface RetirementRrspTransferDictionary {
  routeKey: "retirementRrspTransfer";
  metadata: { title: string; description: string };
  breadcrumb: [string, string, string];
  eyebrow: string;
  title: string;
  intro: string;
  heroPrimaryLabel: string;
  heroSecondaryLabel: string;
  keyTakeawayEyebrow: string;
  keyTakeawayTitle: string;
  keyTakeawayCards: Array<{ title: string; text: string }>;
  keyTakeawayNote: string;
  assistant: {
    eyebrow: string;
    title: string;
    intro: string;
    progressLabel: string;
    summaryEyebrow: string;
    riskTitle: string;
    whoStartsTitle: string;
    prepareTitle: string;
    checksTitle: string;
    closingNote: string;
    questions: RetirementRrspTransferWizardQuestion[];
    advice: {
      defaultSummary: string;
      withdrawalSummary: string;
      groupPlanSummary: string;
      selfDirectedSummary: string;
      partialSummary: string;
      defaultRisk: string;
      groupPlanRisk: string;
      assetRisk: string;
      unknownPlanRisk: string;
      whoStarts: string;
      prepareBase: string[];
      prepareGroupPlan: string;
      prepareAssets: string;
      checksBase: string[];
      checksUnsureCash: string;
    };
  };
  officialSection: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; text: string }>;
    links: Array<{ title: string; description: string; href: string }>;
  };
  stepsSection: {
    eyebrow: string;
    title: string;
    intro: string;
    whatToDoLabel: string;
    whatToCheckLabel: string;
    commonMistakeLabel: string;
    steps: Array<{ title: string; whatToDo: string; whatToCheck: string; commonMistake: string }>;
  };
  errorsSection: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; detail: string }>;
  };
  timelineSection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  faqSection: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  checklistSection: {
    eyebrow: string;
    title: string;
    intro: string;
    progressLabel: string;
    items: string[];
  };
  transparencySection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  relatedSection: {
    title: string;
    links: Array<{ href: string; title: string; description: string; emoji: string }>;
  };
  footerText: string;
  footerContact: string;
}

const frQuestions: RetirementRrspTransferWizardQuestion[] = [
  { id: "source", prompt: "D'ou vient l'argent ?", options: [{ value: "bank", label: "Banque" }, { value: "credit-union", label: "Caisse" }, { value: "broker", label: "Courtier" }, { value: "group-rrsp", label: "REER collectif employeur" }, { value: "other", label: "Autre" }] },
  { id: "destination", prompt: "Ou voulez-vous le transferer ?", options: [{ value: "bank", label: "Banque" }, { value: "credit-union", label: "Caisse" }, { value: "self-directed-broker", label: "Courtier autogere" }, { value: "other", label: "Autre institution" }] },
  { id: "planType", prompt: "Quel type de regime avez-vous ?", options: [{ value: "individual-rrsp", label: "REER individuel" }, { value: "group-rrsp", label: "REER collectif" }, { value: "rrif", label: "FERR / RRIF" }, { value: "unknown", label: "Je ne sais pas" }] },
  { id: "scope", prompt: "Vous voulez transferer :", options: [{ value: "full", label: "Tout le compte" }, { value: "partial", label: "Une partie seulement" }, { value: "unknown", label: "Je ne sais pas encore" }] },
  { id: "needCash", prompt: "Avez-vous besoin de l'argent maintenant ?", options: [{ value: "move-only", label: "Non, je veux juste le deplacer" }, { value: "withdraw", label: "Oui, je pensais le retirer" }, { value: "unsure", label: "Je ne suis pas sur" }] },
  { id: "assets", prompt: "L'argent est investi dans :", helper: "Cela aide a savoir si certains placements devront etre vendus avant le transfert.", options: [{ value: "cash", label: "Encaisse" }, { value: "mutual-funds", label: "Fonds communs" }, { value: "gic", label: "CPG / placement garanti" }, { value: "stocks-etf", label: "Actions / FNB" }, { value: "unknown", label: "Je ne sais pas" }] },
];

const enQuestions: RetirementRrspTransferWizardQuestion[] = [
  { id: "source", prompt: "Where is the money coming from?", options: [{ value: "bank", label: "Bank" }, { value: "credit-union", label: "Credit union" }, { value: "broker", label: "Broker" }, { value: "group-rrsp", label: "Employer group RRSP" }, { value: "other", label: "Other" }] },
  { id: "destination", prompt: "Where do you want to move it?", options: [{ value: "bank", label: "Bank" }, { value: "credit-union", label: "Credit union" }, { value: "self-directed-broker", label: "Self-directed broker" }, { value: "other", label: "Other institution" }] },
  { id: "planType", prompt: "What type of registered plan do you think it is?", options: [{ value: "individual-rrsp", label: "Individual RRSP" }, { value: "group-rrsp", label: "Group RRSP" }, { value: "rrif", label: "RRIF" }, { value: "unknown", label: "I am not sure" }] },
  { id: "scope", prompt: "Do you want to transfer:", options: [{ value: "full", label: "The full account" }, { value: "partial", label: "Only part of it" }, { value: "unknown", label: "I am not sure yet" }] },
  { id: "needCash", prompt: "Do you need the money right now?", options: [{ value: "move-only", label: "No, I only want to move it" }, { value: "withdraw", label: "Yes, I was thinking of withdrawing it" }, { value: "unsure", label: "I am not sure" }] },
  { id: "assets", prompt: "The money is invested in:", helper: "This helps estimate whether some holdings will need to be sold before the transfer.", options: [{ value: "cash", label: "Cash" }, { value: "mutual-funds", label: "Mutual funds" }, { value: "gic", label: "GIC / guaranteed product" }, { value: "stocks-etf", label: "Stocks / ETFs" }, { value: "unknown", label: "I am not sure" }] },
];

const fr: RetirementRrspTransferDictionary = {
  routeKey: "retirementRrspTransfer",
  metadata: { title: "Transfert REER au Quebec | ArgentQC.ca", description: "Comment transferer un REER sans retrait imposable: demarche, erreurs a eviter, delais, T2033 et assistant pratique." },
  breadcrumb: ["Accueil", "Retraite", "Transfert REER"],
  eyebrow: "Guide pratique · REER",
  title: "Transferer un REER sans erreur",
  intro: "Une base claire pour deplacer un REER entre institutions sans declencher un retrait imposable par erreur, avec les bons reflexes avant de lancer la demande.",
  heroPrimaryLabel: "Ouvrir l'assistant",
  heroSecondaryLabel: "Voir les etapes",
  keyTakeawayEyebrow: "Le point crucial",
  keyTakeawayTitle: "Un transfert direct n'est pas un retrait",
  keyTakeawayCards: [
    { title: "Si vous retirez l'argent", text: "Vous pouvez declencher une retenue d'impot a la source, casser la logique du transfert et compliquer la paperasse." },
    { title: "Si vous faites un transfert direct admissible", text: "Le transfert ne doit generalement pas etre declare comme revenu et ne cree pas une nouvelle deduction REER." },
  ],
  keyTakeawayNote: "Si votre objectif est seulement de deplacer le REER, le bon point de depart est presque toujours la nouvelle institution.",
  assistant: {
    eyebrow: "Assistant rapide", title: "Quoi faire maintenant dans votre cas", intro: "Repondez aux questions pour obtenir une prochaine action concrete et les points de controle utiles.", progressLabel: "Progression",
    summaryEyebrow: "Resume personnalise", riskTitle: "Risque principal a eviter", whoStartsTitle: "Qui lance souvent la demarche", prepareTitle: "Quoi preparer avant de commencer", checksTitle: "Verifications utiles",
    closingNote: "Parlez d'abord a la nouvelle institution si vous voulez seulement deplacer le REER. C'est le reflexe qui evite le plus souvent l'erreur de retrait.",
    questions: frQuestions,
    advice: {
      defaultSummary: "Dans votre cas, vous semblez vouloir faire un transfert direct vers une nouvelle institution.",
      withdrawalSummary: "Vous semblez hesiter entre retirer l'argent et le deplacer. Si votre vrai objectif est de garder le REER intact, il faut viser un transfert direct.",
      groupPlanSummary: "Votre dossier ressemble a un transfert qui merite une verification plus serree, surtout parce qu'un REER collectif ou lie a l'employeur peut avoir ses propres regles.",
      selfDirectedSummary: "Vous semblez vouloir deplacer votre REER vers un courtier autogere. Le bon reflexe est de faire ouvrir le bon compte d'arrivee avant toute autre action.",
      partialSummary: "Vous semblez viser un transfert partiel. C'est souvent possible, mais il faut etre tres precis sur ce qui doit etre deplace et ce qui reste en place.",
      defaultRisk: "Le risque principal est de demander un retrait au lieu d'un transfert direct.",
      groupPlanRisk: "Le risque principal est de supposer qu'un REER collectif suit exactement les memes regles et delais qu'un REER individuel.",
      assetRisk: "Le risque principal est de decouvrir trop tard que certains placements doivent etre vendus ou ne peuvent pas etre transferes tels quels.",
      unknownPlanRisk: "Le risque principal est de partir avec le mauvais type de compte ou le mauvais numero de regime sur la demande.",
      whoStarts: "Commencez habituellement avec la nouvelle institution, parce que c'est souvent elle qui initie la demande de transfert et fournit la bonne paperasse.",
      prepareBase: ["Le numero de compte actuel et le nom exact du regime", "Le type de compte que vous ouvrez dans la nouvelle institution", "Une liste claire des placements a transferer si ce n'est pas tout le compte"],
      prepareGroupPlan: "Les documents du regime collectif et toute regle liee a l'employeur",
      prepareAssets: "La liste des placements pour verifier s'ils peuvent etre transferes en nature ou s'ils doivent etre vendus",
      checksBase: ["Verifier les frais de transfert a la sortie", "Verifier si certains placements ont des restrictions de sortie ou des penalites", "Demander a la nouvelle institution si elle rembourse des frais de transfert"],
      checksUnsureCash: "Clarifier d'abord si vous voulez vraiment l'argent en main ou seulement le deplacer",
    },
  },
  officialSection: {
    eyebrow: "Reperes utiles", title: "Ce que l'ARC dit sur le transfert direct",
    cards: [
      { title: "Formulaire souvent cite", text: "Le formulaire T2033 est souvent utilise pour certains transferts directs entre regimes enregistres." },
      { title: "Traitement fiscal general", text: "Pour un transfert direct admissible d'un REER non echu, le montant ne doit generalement pas etre traite comme un revenu imposable." },
      { title: "Formulaire prescrit ou non", text: "Un formulaire prescrit n'est pas toujours obligatoire si l'information requise est bien consignee, meme si plusieurs institutions gardent leur propre processus." },
    ],
    links: [
      { title: "Voir le formulaire T2033", description: "Source officielle du gouvernement du Canada", href: "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2033.html" },
      { title: "Lire la page sur le transfert d'un REER non echu", description: "Explications de l'ARC sur le transfert direct admissible", href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/transferring/property-unmatured-rrsp.html" },
    ],
  },
  stepsSection: {
    eyebrow: "Les etapes", title: "Les 5 etapes pour transferer un REER sans se compliquer la vie", intro: "L'objectif n'est pas d'aller vite a tout prix. L'objectif est de lancer la bonne demande, avec les bonnes informations, des le depart.",
    whatToDoLabel: "Quoi faire", whatToCheckLabel: "Quoi verifier", commonMistakeLabel: "Erreur frequente",
    steps: [
      { title: "Choisir la nouvelle institution", whatToDo: "Commencez par l'institution qui va recevoir le REER. Comparez le type de compte offert, les frais et le soutien au transfert.", whatToCheck: "Verifiez si elle accepte les transferts entrants, rembourse parfois les frais et peut recevoir votre type de regime.", commonMistake: "Ouvrir n'importe quel compte sans confirmer qu'il correspond au bon regime enregistre." },
      { title: "Confirmer le type exact de compte", whatToDo: "Reperez le nom exact du regime, le numero de compte et si le REER est individuel, collectif, immobilise ou deja converti.", whatToCheck: "Verifiez aussi si une partie de l'argent est verrouillee ou si des cotisations patronales ont des regles speciales.", commonMistake: "Traiter un REER collectif ou un compte immobilise comme un REER ordinaire." },
      { title: "Faire initier la demande", whatToDo: "Demandez a la nouvelle institution d'initier le transfert direct. C'est souvent elle qui fournit le formulaire ou le parcours interne.", whatToCheck: "Assurez-vous que les numeros de compte, le caractere complet ou partiel du transfert et l'instruction de transfert direct sont exacts.", commonMistake: "Demander un retrait parce que le processus semble plus rapide." },
      { title: "Suivre le traitement", whatToDo: "Surveillez les courriels, le portail client et les demandes de signature ou de documents additionnels.", whatToCheck: "Validez si des frais s'appliquent, si les placements doivent etre liquides et si un produit impose un delai de sortie.", commonMistake: "Supposer que tout va se faire automatiquement sans aucun suivi." },
      { title: "Verifier la completion", whatToDo: "Quand le transfert apparait, comparez les montants, les titres transferes et le type de compte recu.", whatToCheck: "Confirmez qu'il s'agit bien d'un transfert direct entre regimes enregistres et non d'un retrait suivi d'une nouvelle cotisation.", commonMistake: "Voir l'argent arriver et ne pas verifier s'il manque des actifs, des unites ou des frais." },
    ],
  },
  errorsSection: {
    eyebrow: "A eviter", title: "Erreurs frequentes",
    items: [
      { title: "Confondre transfert et retrait", detail: "Si l'objectif est seulement de deplacer le REER, demander un retrait peut declencher une retenue a la source et compliquer la suite." },
      { title: "Croire que tout se fait instantanement", detail: "Certaines demandes vont vite, mais d'autres trainent si l'ancienne institution repond lentement ou si le dossier est incomplet." },
      { title: "Oublier les frais de transfert", detail: "Plusieurs institutions facturent des frais a la sortie. Certaines institutions d'arrivee les remboursent, mais pas toujours." },
      { title: "Ne pas verifier le sort des placements", detail: "Certains fonds maison, CPG ou produits exclusifs doivent etre liquides avant le transfert." },
    ],
  },
  timelineSection: {
    eyebrow: "Delais realistes", title: "Combien de temps cela peut prendre ?",
    paragraphs: [
      "Il n'existe pas un nombre de jours universel. Les delais varient selon les institutions, le type d'actif et la qualite des informations fournies au depart.",
      "Un transfert simple en encaisse peut etre relativement fluide. Un dossier avec liquidation, REER collectif ou produits non transferables prend souvent plus de temps.",
      "Le bon reflexe est de lancer une demande complete, puis de faire un suivi si rien ne bouge apres le delai annonce par la nouvelle institution.",
    ],
  },
  faqSection: {
    eyebrow: "FAQ", title: "Questions frequentes sur le transfert REER",
    items: [
      { question: "Un transfert REER est-il imposable ?", answer: "Un transfert direct admissible n'est generalement pas traite comme un retrait imposable. Il faut toutefois eviter de demander un retrait si l'objectif est simplement de changer d'institution." },
      { question: "Faut-il toujours un formulaire ?", answer: "Souvent oui en pratique, parce que plusieurs institutions utilisent leur propre demande de transfert. Le T2033 reste la reference la plus souvent citee." },
      { question: "Peut-on transferer seulement une partie du REER ?", answer: "Dans plusieurs cas oui, mais il faut confirmer que l'institution de depart accepte les transferts partiels et comprendre quels actifs seront deplaces." },
      { question: "Que faire si le transfert bloque ?", answer: "Commencez par la nouvelle institution, puisque c'est souvent elle qui pilote le dossier. Demandez precisement ce qui manque." },
    ],
  },
  checklistSection: {
    eyebrow: "Checklist", title: "Avant de lancer le transfert", intro: "Une petite verification maintenant peut eviter un aller-retour frustrant plus tard.", progressLabel: "Progression",
    items: ["J'ai identifie mon institution actuelle", "J'ai trouve le numero de compte", "J'ai choisi la nouvelle institution", "J'ai verifie les frais de transfert", "J'ai verifie si mes placements doivent etre vendus", "Je comprends que je veux un transfert direct, pas un retrait"],
  },
  transparencySection: {
    eyebrow: "Transparence", title: "Ce guide est pratique, pas un avis fiscal ou juridique",
    paragraphs: ["Le site fournit de l'information generale pour vous aider a poser les bonnes questions et a eviter les erreurs les plus frequentes.", "Si votre cas touche un REER collectif, un compte immobilise ou un transfert partiel complexe, validez la marche a suivre avec l'institution ou un professionnel."],
  },
  relatedSection: {
    title: "Aller plus loin",
    links: [
      { href: "/fr/retraite/reer", title: "Comprendre le REER avant de transferer", description: "Fonctionnement, cotisations et erreurs a eviter.", emoji: "💼" },
      { href: "/fr/impots/remboursement", title: "Voir comment un retrait peut affecter l'impot", description: "Retenues, revenu imposable et delais de remboursement.", emoji: "🧾" },
      { href: "/fr/retraite", title: "Explorer les autres decisions retraite", description: "REER, CELI, RRQ et arbitrages utiles pour la suite.", emoji: "🧭" },
    ],
  },
  footerText: "Information pratique generale seulement. Verifiez toujours les details finaux avec votre institution.",
  footerContact: "Contactez-nous",
};

const en: RetirementRrspTransferDictionary = {
  routeKey: "retirementRrspTransfer",
  metadata: { title: "RRSP Transfer Guide in Quebec | ArgentQC.ca", description: "How to transfer an RRSP without creating a taxable withdrawal: steps, delays, fees, T2033 references, and a practical decision assistant." },
  breadcrumb: ["Home", "Retirement", "RRSP transfer"],
  eyebrow: "Practical guide · RRSP",
  title: "Transfer an RRSP without making a costly mistake",
  intro: "A practical foundation for moving an RRSP between institutions without accidentally turning the move into a taxable withdrawal.",
  heroPrimaryLabel: "Open the assistant",
  heroSecondaryLabel: "See the steps",
  keyTakeawayEyebrow: "The key point",
  keyTakeawayTitle: "A direct transfer is not the same as a withdrawal",
  keyTakeawayCards: [
    { title: "If you withdraw the money", text: "You may trigger withholding tax, break the transfer flow, and create unnecessary paperwork." },
    { title: "If you request an eligible direct transfer", text: "The amount is generally not treated as taxable income and does not create a fresh RRSP deduction." },
  ],
  keyTakeawayNote: "If your goal is simply to move the RRSP, the most reliable starting point is usually the receiving institution.",
  assistant: {
    eyebrow: "Quick assistant", title: "What to do next in your situation", intro: "Answer the questions below to get a concrete next step and the checks that matter most.", progressLabel: "Progress",
    summaryEyebrow: "Personalized summary", riskTitle: "Main risk to avoid", whoStartsTitle: "Who usually starts the process", prepareTitle: "What to prepare before starting", checksTitle: "Useful checks",
    closingNote: "Start with the receiving institution if you only want to move the RRSP. That is usually the safest way to avoid a withdrawal mistake.",
    questions: enQuestions,
    advice: {
      defaultSummary: "Based on your answers, you appear to be aiming for a direct transfer into a new institution.",
      withdrawalSummary: "You seem to be weighing a withdrawal versus a transfer. If your real goal is to keep the RRSP intact, the safer path is a direct transfer.",
      groupPlanSummary: "Your situation looks like one that needs closer checking, especially because a group RRSP or employer-linked plan may have its own rules.",
      selfDirectedSummary: "You appear to be moving the RRSP to a self-directed broker. The first priority is opening the correct receiving account before anything else.",
      partialSummary: "You seem to be aiming for a partial transfer. That is often possible, but the instructions need to be precise about what moves and what stays.",
      defaultRisk: "The main risk is requesting a withdrawal instead of a direct transfer.",
      groupPlanRisk: "The main risk is assuming a group RRSP follows exactly the same rules and timing as a standard individual RRSP.",
      assetRisk: "The main risk is discovering too late that some holdings must be sold or cannot be transferred in kind.",
      unknownPlanRisk: "The main risk is starting the request with the wrong account type or registered plan reference.",
      whoStarts: "Usually start with the receiving institution, because it often initiates the transfer request and provides the correct paperwork.",
      prepareBase: ["The current account number and exact registered plan name", "The type of account you are opening at the receiving institution", "A clear list of the holdings to move if you are not transferring the full account"],
      prepareGroupPlan: "Any group-plan documents and employer-linked transfer rules",
      prepareAssets: "A holdings list to confirm whether assets can be transferred in kind or must be sold first",
      checksBase: ["Check outgoing transfer fees", "Check whether any holdings have exit restrictions or penalties", "Ask the receiving institution whether it may reimburse transfer fees"],
      checksUnsureCash: "Clarify first whether you really need cash in hand or only want to move the account",
    },
  },
  officialSection: {
    eyebrow: "Useful references", title: "What the CRA points to for direct transfers",
    cards: [
      { title: "The form most people hear about", text: "Form T2033 is commonly used for certain direct transfers between registered plans." },
      { title: "General tax treatment", text: "An eligible direct transfer from an unmatured RRSP is generally not treated as taxable income." },
      { title: "Prescribed form or not", text: "A prescribed form is not always mandatory if the required information is recorded, even though many institutions keep their own workflow." },
    ],
    links: [
      { title: "View CRA form T2033", description: "Official Government of Canada source", href: "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2033.html" },
      { title: "Read the CRA page on unmatured RRSP transfers", description: "Direct-transfer guidance from the CRA", href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/transferring/property-unmatured-rrsp.html" },
    ],
  },
  stepsSection: {
    eyebrow: "The steps", title: "Five steps to transfer an RRSP without adding friction", intro: "The goal is not to move fast at any price. The goal is to start the right request, with the right information, from day one.",
    whatToDoLabel: "What to do", whatToCheckLabel: "What to check", commonMistakeLabel: "Common mistake",
    steps: [
      { title: "Choose the receiving institution", whatToDo: "Start with the institution that will receive the RRSP. Compare account type, fees, transfer support, and whether it can accept your plan type.", whatToCheck: "Check whether it accepts inbound transfers, may reimburse fees, and can receive your specific plan.", commonMistake: "Opening a random account without confirming it matches the right registered plan." },
      { title: "Confirm the exact account type", whatToDo: "Identify the exact plan name, account number, and whether the RRSP is individual, group, locked-in, or already converted.", whatToCheck: "Also verify whether some money is restricted or whether employer contributions have special rules.", commonMistake: "Treating a group RRSP or locked-in account as if it were a standard RRSP." },
      { title: "Have the receiving institution start the transfer", whatToDo: "Ask the receiving institution to initiate the direct transfer. It often provides the form or internal workflow.", whatToCheck: "Make sure account numbers, full versus partial instructions, and direct-transfer wording are all accurate.", commonMistake: "Requesting a withdrawal because it looks faster." },
      { title: "Monitor the processing stage", whatToDo: "Watch email, the client portal, and any signature or document requests.", whatToCheck: "Confirm whether fees apply, whether holdings need to be sold, and whether a product imposes a waiting period.", commonMistake: "Assuming everything will happen automatically with no follow-up." },
      { title: "Verify completion", whatToDo: "When the transfer appears, compare the amounts, transferred holdings, and receiving account type.", whatToCheck: "Confirm this was a direct transfer between registered plans and not a withdrawal followed by a new contribution.", commonMistake: "Seeing the cash arrive and not checking whether assets, units, or fees are missing." },
    ],
  },
  errorsSection: {
    eyebrow: "Avoid these", title: "Common mistakes",
    items: [
      { title: "Confusing a transfer with a withdrawal", detail: "If the goal is only to move the RRSP, a withdrawal can trigger withholding tax and create unnecessary extra steps." },
      { title: "Assuming it will be instant", detail: "Some files move quickly, but others stall when the old institution is slow or the file is incomplete." },
      { title: "Ignoring transfer fees", detail: "Many institutions charge outbound transfer fees. Some receiving institutions reimburse them, but not always." },
      { title: "Not checking whether holdings move in kind or must be sold", detail: "Some house funds, GICs, and proprietary products must be liquidated before the move." },
    ],
  },
  timelineSection: {
    eyebrow: "Realistic timing", title: "How long can it take?",
    paragraphs: [
      "There is no universal timeline. Processing time depends on the institutions involved, the asset type, and the quality of the information provided upfront.",
      "A simple cash transfer can move fairly smoothly. A file involving liquidation, a group RRSP, or non-transferable products usually takes longer.",
      "The right move is to submit a complete request first, then follow up if nothing moves after the timeline quoted by the receiving institution.",
    ],
  },
  faqSection: {
    eyebrow: "FAQ", title: "Common questions about RRSP transfers",
    items: [
      { question: "Is an RRSP transfer taxable?", answer: "An eligible direct transfer is generally not treated as a taxable withdrawal. The key is to avoid asking for a withdrawal when the goal is simply to move institutions." },
      { question: "Do I always need a form?", answer: "In practice, often yes, because many institutions use their own transfer request. T2033 remains the reference people most often encounter." },
      { question: "Can I transfer only part of an RRSP?", answer: "In many cases yes, but you need to confirm that the current institution accepts partial transfers and understand exactly which assets will move." },
      { question: "What should I do if the transfer stalls?", answer: "Start with the receiving institution, since it usually drives the file. Ask exactly what is missing." },
    ],
  },
  checklistSection: {
    eyebrow: "Checklist", title: "Before you submit the transfer", intro: "A small check now can prevent a frustrating back-and-forth later.", progressLabel: "Progress",
    items: ["I identified my current institution", "I found the account number", "I chose the receiving institution", "I checked transfer fees", "I checked whether my holdings must be sold first", "I understand I want a direct transfer, not a withdrawal"],
  },
  transparencySection: {
    eyebrow: "Transparency", title: "This is a practical guide, not tax or legal advice",
    paragraphs: ["The site provides general information to help you ask the right questions and avoid the most common mistakes.", "If the file involves a group RRSP, a locked-in account, or a more complex partial transfer, validate the process with the institution or a professional."],
  },
  relatedSection: {
    title: "Go further",
    links: [
      { href: "/en/retirement/rrsp", title: "Review the RRSP guide first", description: "Contribution logic, deduction value, and key mistakes.", emoji: "💼" },
      { href: "/en/taxes/refund", title: "See how a withdrawal can affect taxes", description: "Withholding, taxable income, and refund timing.", emoji: "🧾" },
      { href: "/en/retirement", title: "Explore the rest of the retirement topic", description: "RRSP, TFSA, QPP, and related retirement choices.", emoji: "🧭" },
    ],
  },
  footerText: "General practical information only. Always confirm the final details with your institution.",
  footerContact: "Contact us",
};

export function getRetirementRrspTransferDictionary(locale: Locale) {
  return locale === "fr" ? fr : en;
}
