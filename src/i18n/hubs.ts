import type { Locale, RouteKey } from "@/i18n/routing";

type HubRouteKey = Extract<RouteKey, "budget" | "taxes" | "retirement" | "insurance" | "internet" | "moving">;

export interface HubDictionary {
  routeKey: HubRouteKey;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  description: string;
  keyPoints: string[];
  cards: Array<{ title: string; description: string; href: string; note?: string }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  example?: {
    label: string;
    items: Array<{ label: string; amount: string }>;
    totalLabel: string;
    totalAmount: string;
  };
  actionSteps?: Array<{ text: string }>;
}

export const localizedHubRouteKeys = ["budget", "taxes", "retirement", "insurance", "internet", "moving"] as const;

const fr: Record<HubRouteKey, HubDictionary> = {
  budget: {
    routeKey: "budget",
    metadata: {
      title: "Budget au Québec | ArgentQC.ca",
      description: "Un point d'entrée simple pour piloter budget, coût de la vie et arbitrages financiers utiles au Québec.",
    },
    eyebrow: "Thème budget Québec",
    title: "Budget et coût de la vie au Québec",
    description: "Comprendre les postes qui comptent vraiment avant d'optimiser le détail.",
    keyPoints: [
      "Le logement et le transport restent les deux plus gros leviers.",
      "Les crédits et aides changent le budget net plus qu'on ne le pense.",
      "Le bon budget intègre les dépenses mensuelles et les versements annuels.",
    ],
    cards: [
      { title: "Calculateur budget", description: "Estimer votre équilibre mensuel.", href: "/fr/budget/calculateur" },
      { title: "Coût de la vie", description: "Comparer les grands postes de dépense.", href: "/fr/budget/cout-vie" },
      { title: "Allocation logement", description: "Voir les aides logement pour locataires.", href: "/fr/budget/allocation-logement" },
      { title: "Crédit de solidarité", description: "Comprendre ce crédit remboursable du Québec.", href: "/fr/budget/credit-solidarite" },
      { title: "Questionnaire aides", description: "Voir ce qui peut soulager le budget.", href: "/fr/questionnaire" },
    ],
    faqs: [
      { question: "Par quoi commencer ?", answer: "Par logement, transport et dettes. Ce sont les postes qui déplacent le plus vite la trajectoire du budget." },
      { question: "Le Québec est-il moins cher partout ?", answer: "Pas partout. Certains postes sont plus doux, mais le logement peut vite compenser cet avantage." },
    ],
    ctaTitle: "Voir ce qui peut alléger le budget",
    ctaText: "Le questionnaire complète la vision budget en ajoutant les programmes potentiellement accessibles.",
    ctaLabel: "Lancer le questionnaire",
    example: {
      label: "Sophie, couple locataire à 65 000 $ — économies trouvées en 1 heure",
      items: [
        { label: "Changement fournisseur internet", amount: "- 300 $/an" },
        { label: "Regroupement assurances auto + habitation", amount: "- 380 $/an" },
        { label: "Optimisation forfaits mobiles (2 lignes)", amount: "- 240 $/an" },
        { label: "Crédit de solidarité (locataire)", amount: "+ 1 185 $/an" },
      ],
      totalLabel: "Total récupéré",
      totalAmount: "2 105 $/an",
    },
    actionSteps: [
      { text: "Liste tes 3 plus grosses dépenses fixes — logement, transport, télécoms — et cherche le levier le plus rapide" },
      { text: "Compare ton forfait internet actuel : un changement de fournisseur peut économiser 25-40 $/mois sans sacrifice" },
      { text: "Vérifie ton admissibilité au crédit de solidarité — souvent non réclamé par les locataires à revenu moyen" },
    ],
  },
  taxes: {
    routeKey: "taxes",
    metadata: {
      title: "Impôts Québec | ArgentQC.ca",
      description: "Les bases utiles pour comprendre impôts, dates et crédits au Québec.",
    },
    eyebrow: "Thème impôts Québec",
    title: "Impôts au Québec sans angle mort",
    description: "Une base claire entre ARC, Revenu Québec, échéances et crédits importants.",
    keyPoints: [
      "Le Québec se pense toujours en fédéral et provincial.",
      "Les dates de paiement et de production ne sont pas interchangeables.",
      "Les crédits remboursables comptent même avec peu d'impôt dû.",
    ],
    cards: [
      { title: "Dates limites", description: "Échéances et pénalités.", href: "/fr/impots/dates" },
      { title: "Remboursement", description: "Délais et suivi des retours.", href: "/fr/impots/remboursement" },
      { title: "Logiciels", description: "Comparer les solutions utiles.", href: "/fr/impots/logiciels" },
    ],
    faqs: [
      { question: "Pourquoi le Québec semble plus complexe ?", answer: "Parce que plusieurs crédits et obligations se lisent à la fois du côté fédéral et du côté provincial." },
      { question: "Faut-il produire avec un petit revenu ?", answer: "Souvent oui, surtout pour déclencher des crédits et prestations." },
    ],
    ctaTitle: "Croiser impots et aides",
    ctaText: "Le questionnaire permet de repérer les programmes qui n'apparaissent pas toujours dans un simple raisonnement fiscal.",
    ctaLabel: "Trouver mes aides",
    example: {
      label: "Marie, salariée à 55 000 $ — ce qu'elle récupère en produisant ses deux déclarations",
      items: [
        { label: "Crédit TPS/TVH fédéral", amount: "+ 496 $" },
        { label: "Crédit de solidarité Québec (locataire)", amount: "+ 1 185 $" },
        { label: "Remboursement REER cotisé (8 000 $)", amount: "+ 2 560 $" },
        { label: "Crédit d'impôt frais médicaux", amount: "+ 320 $" },
      ],
      totalLabel: "Total estimé",
      totalAmount: "4 561 $",
    },
    actionSteps: [
      { text: "Rassemble tes feuillets T4/Relevé 1 et tout autre document de revenu avant de commencer" },
      { text: "Produis la déclaration fédérale via l'ARC (logiciel gratuit disponible) avant le 30 avril" },
      { text: "Produis la déclaration provinciale via Revenu Québec — ne pas oublier le formulaire TP-1" },
    ],
  },
  retirement: {
    routeKey: "retirement",
    metadata: {
      title: "Retraite Québec | ArgentQC.ca",
      description: "Les grands repères pour relier RRQ, SV, REER, CELI et besoins de revenu futur.",
    },
    eyebrow: "Thème retraite Québec",
    title: "Retraite au Québec : les bons piliers dans le bon ordre",
    description: "Une vue d'ensemble avant de rentrer dans les détails de produits et de décaissement.",
    keyPoints: [
      "RRQ et SV forment une base, rarement une solution complete.",
      "REER et CELI n'ont pas le même rôle fiscal.",
      "L'âge de prise des prestations doit être pensé avec votre horizon de revenu.",
    ],
    cards: [
      { title: "Guide REER", description: "Comprendre déduction et usage.", href: "/fr/retraite/reer" },
      { title: "Transfert REER", description: "Deplacer un REER sans faux retrait.", href: "/fr/retraite/transfert-reer" },
      { title: "Guide CELIAPP", description: "Premier achat et mise de fonds.", href: "/fr/retraite/celiapp" },
      { title: "Guide RRQ", description: "Le pilier public Québec.", href: "/fr/retraite/rrq" },
    ],
    faqs: [
      { question: "REER ou CELI ?", answer: "Cela dépend surtout de votre niveau d'imposition actuel, de votre revenu futur et de votre besoin de flexibilité." },
      { question: "La RRQ suffit-elle ?", answer: "Pour la plupart des foyers, non. Elle reste une fondation, pas un plan complet." },
    ],
    ctaTitle: "Voir les programmes lies a votre situation",
    ctaText: "Certaines aides et certains credits croisent les enjeux retraite, surtout pour les aines.",
    ctaLabel: "Estimer mes programmes",
    example: {
      label: "Gilles, 58 ans, salarié à 75 000 $ — impact des bonnes décisions maintenant",
      items: [
        { label: "Économie d'impôt REER (13 500 $ cotisés)", amount: "+ 5 130 $" },
        { label: "RRQ différée à 70 ans (vs 65 ans)", amount: "+ 42 % à vie" },
        { label: "Décaissement REER + CELI optimal", amount: "3 000-6 000 $/an" },
        { label: "Crédit en raison de l'âge (dès 65 ans)", amount: "+ 1 530 $" },
      ],
      totalLabel: "Voir le scénario complet",
      totalAmount: "→",
    },
    actionSteps: [
      { text: "Vérifie tes droits REER inutilisés sur Mon dossier ARC — chaque dollar cotisé maintenant réduit l'impôt au taux marginal le plus élevé" },
      { text: "Évalue le report de la RRQ : chaque année de report après 65 ans augmente la pension de 8,4 % à vie" },
      { text: "Planifie l'ordre de décaissement REER + CELI pour minimiser l'impôt en retraite" },
    ],
  },
  insurance: {
    routeKey: "insurance",
    metadata: {
      title: "Assurances Québec | ArgentQC.ca",
      description: "Comprendre les grandes décisions d'assurance dans le contexte propre au Québec.",
    },
    eyebrow: "Thème assurances Québec",
    title: "Assurances au Québec sans payer à l'aveugle",
    description: "Une base simple pour distinguer les risques a couvrir des protections superflues.",
    keyPoints: [
      "L'assurance auto au Québec suit une logique particulière avec la SAAQ.",
      "Les franchises et exclusions comptent autant que la prime.",
      "Vie et invalidite ne couvrent pas le meme risque financier.",
    ],
    cards: [
      { title: "Comparateur assurances", description: "Estimer les prix auto et habitation.", href: "/fr/assurances/comparateur" },
      { title: "Assurance auto", description: "Le cadre Québec et les couvertures utiles.", href: "/fr/assurances/auto" },
      { title: "Assurance habitation", description: "Protections et exclusions.", href: "/fr/assurances/habitation" },
    ],
    faqs: [
      { question: "Faut-il magasiner chaque année ?", answer: "Très souvent oui. Le marché bouge et l'écart de prime peut être important." },
      { question: "Un locataire a-t-il vraiment besoin d'assurance ?", answer: "Oui dans la pratique, surtout pour la responsabilite civile et la protection des biens." },
    ],
    ctaTitle: "Replacer l'assurance dans la vue d'ensemble",
    ctaText: "Le questionnaire aide a remettre les decisions de couverture dans votre contexte financier global.",
    ctaLabel: "Voir mon profil",
    example: {
      label: "Marc, propriétaire avec 2 voitures — ce qu'il a économisé en magasinant",
      items: [
        { label: "Regroupement auto + habitation (même assureur)", amount: "- 420 $/an" },
        { label: "Hausse de franchise (500 $ → 1 000 $)", amount: "- 180 $/an" },
        { label: "Suppression doublon assurance vie crédit", amount: "- 240 $/an" },
      ],
      totalLabel: "Économie annuelle",
      totalAmount: "840 $/an",
    },
    actionSteps: [
      { text: "Regroupe auto et habitation chez le même assureur — le rabais de regroupement est souvent de 15-20 %" },
      { text: "Magasine à la date de renouvellement : obtiens 2-3 soumissions 30 jours avant l'échéance" },
      { text: "Élimine les doublons : assurance vie sur carte de crédit, assurance accident déjà couverte ailleurs" },
    ],
  },
  internet: {
    routeKey: "internet",
    metadata: {
      title: "Internet Québec | ArgentQC.ca",
      description: "Les grands critères pour choisir un forfait internet au Québec selon usage, budget et région.",
    },
    eyebrow: "Thème internet Québec",
    title: "Internet au Québec sans payer pour de la vitesse inutile",
    description: "Une vue claire sur les vrais critères de choix entre fibre, câble, contrat et budget.",
    keyPoints: [
      "Le bon forfait dépend de l'usage réel du foyer, pas seulement du chiffre marketing.",
      "L'upload compte beaucoup plus avec le télétravail.",
      "Le vrai prix inclut modem, promo et souplesse de sortie.",
    ],
    cards: [
      { title: "Comparateur internet", description: "Comparer les offres principales.", href: "/fr/internet/comparateur" },
      { title: "Questionnaire aides", description: "Voir aussi les autres leviers budgetaires.", href: "/fr/questionnaire" },
      { title: "Thème budget", description: "Remettre les télécoms dans le budget global.", href: "/fr/budget" },
    ],
    faqs: [
      { question: "La fibre vaut-elle toujours le surcout ?", answer: "Pas toujours. Elle devient surtout pertinente pour les usages intensifs, simultanes ou tres sensibles a la stabilite." },
      { question: "Les promotions sont-elles un bon repère ?", answer: "Seulement si vous regardez le prix complet après promotion." },
    ],
    ctaTitle: "Voir l'impact dans le budget global",
    ctaText: "Le bon forfait est aussi un arbitrage avec les autres depenses recurrentes du foyer.",
    ctaLabel: "Lancer le questionnaire",
    example: {
      label: "Julie, famille de 4 — économies télécom sans sacrifier la vitesse",
      items: [
        { label: "Passage Bell → Fizz fibre (même vitesse)", amount: "- 35 $/mois" },
        { label: "2 lignes mobiles → opérateur virtuel", amount: "- 40 $/mois" },
      ],
      totalLabel: "Économie annuelle",
      totalAmount: "900 $/an",
    },
    actionSteps: [
      { text: "Note ta vitesse actuelle réelle (teste sur fast.com) — la plupart des foyers n'utilisent pas ce pour quoi ils paient" },
      { text: "Compare avec un opérateur alternatif (Fizz, Oxio, Distributel) : même infrastructure, prix 20-40 % moins cher" },
      { text: "Fais de même pour les mobiles : un forfait 30-40 $/mois chez un opérateur virtuel remplace souvent un 65 $/mois chez un grand" },
    ],
  },
  moving: {
    routeKey: "moving",
    metadata: {
      title: "Déménagement Québec | ArgentQC.ca",
      description: "Les bases utiles pour planifier un déménagement au Québec et en maîtriser les coûts.",
    },
    eyebrow: "Thème déménagement Québec",
    title: "Déménager au Québec avec une vraie feuille de route",
    description: "Une base simple pour cadrer coûts, calendrier et changements administratifs.",
    keyPoints: [
      "La date et le bail conditionnent une grande partie du stress et du cout.",
      "Le vrai coût dépasse le simple camion ou déménageur.",
      "Les changements d'adresse doivent être traités comme une checklist unique.",
    ],
    cards: [
      { title: "Checklist déménagement", description: "Ne rien oublier avant et après l'arrivée.", href: "/fr/demenagement/checklist" },
      { title: "Coût du déménagement", description: "Estimer les frais réels.", href: "/fr/demenagement/cout" },
      { title: "Montreal", description: "Le contexte spécifique de Montréal.", href: "/fr/demenagement/montreal" },
    ],
    faqs: [
      { question: "Quand faut-il commencer ?", answer: "Idéalement 6 à 8 semaines avant, surtout si plusieurs services doivent être coordonnés." },
      { question: "Qu'est-ce qui fait grimper la facture ?", answer: "La date, l'accessibilité, la distance et les ajouts de dernière minute." },
    ],
    ctaTitle: "Refaire le point apres un changement de situation",
    ctaText: "Un déménagement peut modifier votre budget et votre admissibilité à certains programmes.",
    ctaLabel: "Refaire le point",
  },
};

const en: Record<HubRouteKey, HubDictionary> = {
  budget: {
    routeKey: "budget",
    metadata: { title: "Budget in Quebec | ArgentQC.ca", description: "A practical starting point for budget and cost-of-living tradeoffs in Quebec." },
    eyebrow: "Quebec budget topic",
    title: "Budget and cost of living in Quebec",
    description: "A clear view of the spending lines that matter before you optimize the details.",
    keyPoints: [
      "Housing and transportation remain the two biggest budget levers.",
      "Benefits and refundable credits can materially improve net cash flow.",
      "A realistic budget should include annual payments and credits, not only monthly bills.",
    ],
    cards: [
      { title: "Budget calculator", description: "Estimate your monthly balance.", href: "/en/budget/calculator" },
      { title: "Cost of living", description: "Compare major spending categories.", href: "/en/budget/cost-of-living" },
      { title: "Housing allowance", description: "See renter-focused housing support.", href: "/en/budget/housing-allowance" },
      { title: "Solidarity tax credit", description: "Understand this refundable Quebec credit.", href: "/en/budget/solidarity-tax-credit" },
      { title: "Benefits questionnaire", description: "See what may ease your budget.", href: "/en/questionnaire" },
    ],
    faqs: [
      { question: "Where should I start?", answer: "Start with housing, transport, and debt. Those are usually the fastest ways to change the budget path." },
      { question: "Is Quebec cheaper across the board?", answer: "Not across every category. Some structural costs are lower, but housing can offset the advantage quickly." },
    ],
    ctaTitle: "See what may improve your budget",
    ctaText: "The questionnaire adds the benefits view to the budgeting view.",
    ctaLabel: "Start the questionnaire",
  },
  taxes: {
    routeKey: "taxes",
    metadata: { title: "Taxes in Quebec | ArgentQC.ca", description: "A clear Quebec-focused starting point on filing, deadlines, and important credits." },
    eyebrow: "Quebec tax topic",
    title: "Taxes in Quebec without the blind spots",
    description: "A simple overview of CRA, Revenu Quebec, deadlines, and useful credits.",
    keyPoints: [
      "Quebec should be read through both federal and provincial layers.",
      "Payment dates and filing dates are not the same thing.",
      "Refundable credits matter even when little tax is otherwise payable.",
    ],
    cards: [
      { title: "Deadlines", description: "Key dates and penalties.", href: "/en/taxes/deadlines" },
      { title: "Refund timing", description: "Understand refund timing and delays.", href: "/en/taxes/refund" },
      { title: "Tax software", description: "Useful filing software choices.", href: "/en/taxes/software" },
    ],
    faqs: [
      { question: "Why is Quebec more complex?", answer: "Because credits and obligations often need to be reviewed on both the federal and provincial sides." },
      { question: "Should a low-income filer still file?", answer: "Very often yes, especially to trigger refundable credits and benefits." },
    ],
    ctaTitle: "Cross-check taxes with benefits",
    ctaText: "The questionnaire surfaces programs that tax logic alone may not highlight.",
    ctaLabel: "Find my programs",
  },
  retirement: {
    routeKey: "retirement",
    metadata: { title: "Retirement in Quebec | ArgentQC.ca", description: "A practical overview of RRQ, OAS, RRSPs, TFSAs, and retirement income logic in Quebec." },
    eyebrow: "Quebec retirement topic",
    title: "Retirement in Quebec: the right pillars in the right order",
    description: "A simple overview before you move into product detail and withdrawal strategy.",
    keyPoints: [
      "RRQ and OAS form a base, not usually a full solution.",
      "RRSPs and TFSAs do not solve the same tax problem.",
      "Benefit start age should be aligned with your income horizon.",
    ],
    cards: [
      { title: "RRSP guide", description: "Understand deduction logic and role.", href: "/en/retirement/rrsp" },
      { title: "RRSP transfer guide", description: "Move an RRSP without creating a withdrawal.", href: "/en/retirement/rrsp-transfer" },
      { title: "FHSA guide", description: "First-home savings and down payment strategy.", href: "/en/retirement/fhsa" },
      { title: "QPP guide", description: "Review the Quebec public pension pillar.", href: "/en/retirement/qpp" },
    ],
    faqs: [
      { question: "RRSP or TFSA first?", answer: "It depends mainly on your current tax bracket, expected future income, and flexibility needs." },
      { question: "Is RRQ enough?", answer: "For most households, no. It is a foundation rather than a complete plan." },
    ],
    ctaTitle: "See related programs too",
    ctaText: "Some benefits and credits intersect directly with retirement planning, especially for seniors.",
    ctaLabel: "Estimate my programs",
  },
  insurance: {
    routeKey: "insurance",
    metadata: { title: "Insurance in Quebec | ArgentQC.ca", description: "A Quebec-focused overview of core insurance choices and the risks they really cover." },
    eyebrow: "Quebec insurance topic",
    title: "Insurance in Quebec without paying blindly",
    description: "A practical foundation for separating essential protection from unnecessary overlap.",
    keyPoints: [
      "Auto insurance follows a Quebec-specific framework tied to the SAAQ.",
      "Deductibles and exclusions matter as much as price.",
      "Life and disability insurance do not protect against the same risk.",
    ],
    cards: [
      { title: "Insurance comparator", description: "Estimate auto and home pricing ranges.", href: "/en/insurance/comparator" },
      { title: "Auto insurance", description: "The Quebec setup and useful coverages.", href: "/en/insurance/auto" },
      { title: "Home insurance", description: "Protection, exclusions, and renter-owner logic.", href: "/en/insurance/home" },
    ],
    faqs: [
      { question: "Should I shop every year?", answer: "Very often yes. Pricing and underwriting appetite can move a lot for the same profile." },
      { question: "Do renters really need coverage?", answer: "In practice, yes, especially for liability and contents protection." },
    ],
    ctaTitle: "Place insurance in the wider picture",
    ctaText: "The questionnaire helps you reframe insurance decisions inside your full financial context.",
    ctaLabel: "Review my situation",
  },
  internet: {
    routeKey: "internet",
    metadata: { title: "Internet in Quebec | ArgentQC.ca", description: "The main decision criteria for choosing an internet plan in Quebec by usage, budget, and region." },
    eyebrow: "Quebec internet topic",
    title: "Internet in Quebec without paying for speed you do not need",
    description: "A clear view on the real tradeoffs between speed, upload, contract flexibility, and total cost.",
    keyPoints: [
      "The best plan depends on actual household use, not only headline speed.",
      "Upload performance matters much more with remote work.",
      "The real price includes hardware, promotions, and switching friction.",
    ],
    cards: [
      { title: "Internet comparator", description: "Compare major offers and providers.", href: "/en/internet/comparator" },
      { title: "Benefits questionnaire", description: "Check the rest of the household cost picture too.", href: "/en/questionnaire" },
      { title: "Budget topic", description: "Put telecom back inside your full budget.", href: "/en/budget" },
    ],
    faqs: [
      { question: "Is fibre always worth more?", answer: "Not always. It becomes more valuable for heavier simultaneous use and high upload needs." },
      { question: "Are promos a good benchmark?", answer: "Only if you also examine the full post-promo price." },
    ],
    ctaTitle: "See the internet line inside your budget",
    ctaText: "The right plan is a broader budget tradeoff, not only a speed decision.",
    ctaLabel: "Start the questionnaire",
  },
  moving: {
    routeKey: "moving",
    metadata: { title: "Moving in Quebec | ArgentQC.ca", description: "A practical starting point for planning a move in Quebec and keeping costs under control." },
    eyebrow: "Quebec moving topic",
    title: "Moving in Quebec with a real action plan",
    description: "A simple foundation for framing costs, timing, and administrative updates.",
    keyPoints: [
      "The date and lease timing drive a large part of both stress and cost.",
      "The true moving cost goes beyond the truck or mover invoice.",
      "Address changes should be managed as one checklist.",
    ],
    cards: [
      { title: "Moving checklist", description: "Keep the process organized before and after move-in.", href: "/en/moving/checklist" },
      { title: "Moving cost", description: "Estimate the true total cost.", href: "/en/moving/cost" },
      { title: "Moving in Montreal", description: "A more Montreal-specific guide.", href: "/en/moving/montreal" },
    ],
    faqs: [
      { question: "When should planning begin?", answer: "Ideally 6 to 8 weeks ahead, especially when several services need to line up." },
      { question: "What pushes costs up fastest?", answer: "Date pressure, distance, access constraints, and last-minute add-ons." },
    ],
    ctaTitle: "Reassess after a change in situation",
    ctaText: "A move can affect both your budget and your eligibility picture.",
    ctaLabel: "Reassess my situation",
  },
};

export function getHubDictionary(locale: Locale, routeKey: HubRouteKey): HubDictionary {
  return locale === "fr" ? fr[routeKey] : en[routeKey];
}
