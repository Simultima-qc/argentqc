export const DARK = "#060D1A";
export const GOLD = "#F5C842";
export const GREEN = "#10B981";
export const PARCH = "#F7F3EC";

export interface WizardOption {
  value: string;
  label: string;
}

export interface WizardQuestion {
  id: string;
  prompt: string;
  helper?: string;
  options: WizardOption[];
}

export interface WizardState {
  source: string;
  destination: string;
  planType: string;
  scope: string;
  needCash: string;
  assets: string;
}

export const wizardQuestions: WizardQuestion[] = [
  {
    id: "source",
    prompt: "D'où vient l'argent ?",
    options: [
      { value: "bank", label: "Banque" },
      { value: "credit-union", label: "Caisse" },
      { value: "broker", label: "Courtier" },
      { value: "group-rrsp", label: "REER collectif employeur" },
      { value: "other", label: "Autre" },
    ],
  },
  {
    id: "destination",
    prompt: "Où veux-tu le transférer ?",
    options: [
      { value: "bank", label: "Banque" },
      { value: "credit-union", label: "Caisse" },
      { value: "self-directed-broker", label: "Courtier autogéré" },
      { value: "other", label: "Autre institution" },
    ],
  },
  {
    id: "planType",
    prompt: "Quel type de régime crois-tu avoir ?",
    options: [
      { value: "individual-rrsp", label: "REER individuel" },
      { value: "group-rrsp", label: "REER collectif" },
      { value: "rrif", label: "FERR / RRIF" },
      { value: "unknown", label: "Je ne sais pas" },
    ],
  },
  {
    id: "scope",
    prompt: "Veux-tu transférer :",
    options: [
      { value: "full", label: "Tout le compte" },
      { value: "partial", label: "Une partie seulement" },
      { value: "unknown", label: "Je ne sais pas encore" },
    ],
  },
  {
    id: "needCash",
    prompt: "As-tu besoin de l'argent maintenant ?",
    options: [
      { value: "move-only", label: "Non, je veux juste le déplacer" },
      { value: "withdraw", label: "Oui, je pensais le retirer" },
      { value: "unsure", label: "Je ne suis pas sûr" },
    ],
  },
  {
    id: "assets",
    prompt: "Est-ce que ton argent est investi dans :",
    helper: "Ça aide à prévoir si certains placements devront être vendus avant le transfert.",
    options: [
      { value: "cash", label: "Encaisse" },
      { value: "mutual-funds", label: "Fonds communs" },
      { value: "gic", label: "CPG / placement garanti" },
      { value: "stocks-etf", label: "Actions / FNB" },
      { value: "unknown", label: "Je ne sais pas" },
    ],
  },
];

export const stepCards = [
  {
    title: "Choisir la nouvelle institution",
    whatToDo:
      "Commence par l'institution qui va recevoir le REER. Compare le type de compte offert, les frais, le soutien au transfert et la possibilité de transférer tes placements tels quels.",
    whatToCheck:
      "Regarde si elle accepte les transferts entrants, si elle rembourse parfois les frais de transfert et si elle peut recevoir un REER collectif, un FERR ou un compte autogéré.",
    commonMistake:
      "Ouvrir n'importe quel compte sans confirmer qu'il correspond au bon régime enregistré.",
  },
  {
    title: "Confirmer le type exact de compte à transférer",
    whatToDo:
      "Repère le nom exact du régime, le numéro de compte et si le REER est individuel, collectif, immobilisé ou déjà converti.",
    whatToCheck:
      "Vérifie aussi si une partie de l'argent est verrouillée, si des cotisations patronales sont soumises à des règles particulières, ou si le compte contient plusieurs placements.",
    commonMistake:
      "Traiter un REER collectif ou un compte immobilisé comme un REER ordinaire.",
  },
  {
    title: "Remplir la demande de transfert avec la nouvelle institution",
    whatToDo:
      "Demande à la nouvelle institution d'initier le transfert direct. En pratique, c'est souvent elle qui fournit le formulaire ou le flux interne à remplir.",
    whatToCheck:
      "Assure-toi que les numéros de compte, le nom du titulaire, le type de transfert complet ou partiel et l'instruction de transfert direct sont exacts.",
    commonMistake:
      "Demander un retrait au lieu d'un transfert direct parce que le processus semble plus rapide.",
  },
  {
    title: "Attendre le traitement et surveiller les suivis",
    whatToDo:
      "Surveille les courriels, le portail client et les demandes de signature ou de documents additionnels. Réponds vite si une institution bloque le dossier.",
    whatToCheck:
      "Valide si des frais s'appliquent, si les placements doivent être liquidés, et si un CPG ou un fonds propriétaire impose un délai de sortie.",
    commonMistake:
      "Supposer que tout va se faire automatiquement sans aucun suivi.",
  },
  {
    title: "Vérifier que le transfert est complété correctement",
    whatToDo:
      "Quand le transfert apparaît, compare les montants, les titres transférés et le type de compte reçu. Garde une copie des confirmations.",
    whatToCheck:
      "Confirme qu'il s'agit bien d'un transfert direct entre régimes enregistrés et non d'un retrait suivi d'une nouvelle cotisation.",
    commonMistake:
      "Voir l'argent arriver et ne pas vérifier s'il manque des actifs, des unités ou des frais.",
  },
];

export const frequentErrors = [
  {
    title: "Confondre transfert et retrait",
    detail:
      "Si ton objectif est seulement de déplacer le REER, demander un retrait peut déclencher de l'impôt retenu à la source et compliquer la suite.",
  },
  {
    title: "Croire que tout se fait instantanément",
    detail:
      "Certaines demandes vont vite, mais d'autres traînent si l'ancienne institution tarde, si des placements doivent être vendus ou si le dossier est incomplet.",
  },
  {
    title: "Oublier les frais de transfert",
    detail:
      "Plusieurs institutions facturent des frais à la sortie. Certaines institutions d'arrivée remboursent ces frais, mais pas toujours.",
  },
  {
    title: "Ne pas vérifier si les placements seront transférés en nature ou vendus",
    detail:
      "Un transfert peut parfois se faire tel quel, mais certains fonds maison, CPG ou produits exclusifs doivent être liquidés avant.",
  },
  {
    title: "Ignorer les contraintes d'un REER collectif ou d'un placement verrouillé",
    detail:
      "Un régime lié à l'employeur ou un compte immobilisé peut avoir des règles différentes, des fenêtres de transfert ou des restrictions supplémentaires.",
  },
  {
    title: "Remplir une demande avec des infos de compte inexactes",
    detail:
      "Une erreur de numéro de compte, de nom du régime ou de type de transfert suffit souvent à bloquer le dossier plusieurs jours ou semaines.",
  },
];

export const faqItems = [
  {
    question: "Est-ce qu'un transfert de REER est imposable ?",
    answer:
      "Un transfert direct admissible n'est généralement pas traité comme un retrait imposable. L'ARC indique que, pour un transfert direct admissible de biens d'un REER non échu, le montant ne doit pas être déclaré comme revenu et il ne faut pas demander une nouvelle déduction pour ce transfert.",
  },
  {
    question: "Est-ce qu'il faut un formulaire ?",
    answer:
      "Souvent oui en pratique, parce que plusieurs institutions utilisent leur propre demande de transfert. L'ARC publie aussi le formulaire T2033 pour certains transferts directs entre régimes enregistrés.",
  },
  {
    question: "C'est quoi le T2033 ?",
    answer:
      "Le T2033 est le formulaire de l'ARC utilisé pour certains transferts directs entre régimes enregistrés. Selon l'ARC, il n'est pas toujours obligatoire d'utiliser un formulaire prescrit si toute l'information requise est bien consignée, mais plusieurs institutions s'appuient encore sur ce formulaire ou sur un parcours équivalent.",
  },
  {
    question: "Combien de temps prend un transfert de REER ?",
    answer:
      "Les délais varient selon les institutions, le type de compte et les placements détenus. Un transfert simple en encaisse peut être plus fluide, alors qu'un dossier avec liquidation, REER collectif ou produits non transférables peut prendre plus de temps.",
  },
  {
    question: "Peut-on transférer un REER collectif ?",
    answer:
      "Souvent oui, mais il faut vérifier les règles du régime collectif. Certaines cotisations patronales, périodes d'acquisition ou ententes avec l'employeur peuvent limiter le moment ou la façon de transférer.",
  },
  {
    question: "Peut-on transférer seulement une partie du REER ?",
    answer:
      "Dans plusieurs cas, oui. Il faut toutefois confirmer que l'institution de départ accepte les transferts partiels et comprendre quels actifs seront déplacés et quels frais pourraient s'appliquer.",
  },
  {
    question: "Qui paie les frais de transfert ?",
    answer:
      "Souvent, l'institution que tu quittes facture les frais. Parfois, la nouvelle institution les rembourse comme offre promotionnelle, mais il faut le confirmer avant de lancer le transfert.",
  },
  {
    question: "Que faire si le transfert bloque ?",
    answer:
      "Commence par la nouvelle institution, puisque c'est souvent elle qui pilote le dossier. Demande précisément ce qui manque: numéro de compte, signature, type de transfert, liquidation requise ou restrictions du régime actuel.",
  },
];

export const checklistItems = [
  "J'ai identifié mon institution actuelle",
  "J'ai trouvé le numéro de compte",
  "J'ai choisi la nouvelle institution",
  "J'ai vérifié les frais de transfert",
  "J'ai vérifié si mes placements doivent être vendus",
  "Je comprends que je veux un transfert direct, pas un retrait",
];

export const relatedPages = [
  {
    href: "/retraite/reer",
    title: "Comprendre le REER avant de transférer",
    description: "Guide REER Québec: fonctionnement, cotisations et erreurs à éviter.",
    emoji: "💼",
  },
  {
    href: "/impots/remboursement",
    title: "Voir comment un retrait peut affecter l'impôt",
    description: "Repères utiles sur le revenu imposable, les retenues et les délais.",
    emoji: "🧾",
  },
  {
    href: "/retraite",
    title: "Explorer les autres décisions retraite",
    description: "REER, CELI, RRQ et stratégies utiles pour la suite.",
    emoji: "🧭",
  },
];

export const satellitePages = [
  "transfert reer combien de temps",
  "frais transfert reer",
  "reer collectif vers reer individuel",
];
