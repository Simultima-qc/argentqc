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
}

export const localizedHubRouteKeys = ["budget", "taxes", "retirement", "insurance", "internet", "moving"] as const;

const fr: Record<HubRouteKey, HubDictionary> = {
  budget: {
    routeKey: "budget",
    metadata: {
      title: "Budget au Quebec | ArgentQC.ca",
      description: "Un point d'entree simple pour piloter budget, cout de la vie et arbitrages financiers utiles au Quebec.",
    },
    eyebrow: "Hub budget Quebec",
    title: "Budget et cout de la vie au Quebec",
    description: "Comprendre les postes qui comptent vraiment avant d'optimiser le detail.",
    keyPoints: [
      "Le logement et le transport restent les deux plus gros leviers.",
      "Les credits et aides changent le budget net plus qu'on ne le pense.",
      "Le bon budget integre les depenses mensuelles et les versements annuels.",
    ],
    cards: [
      { title: "Calculateur budget", description: "Estimer votre equilibre mensuel.", href: "/fr/budget/calculateur" },
      { title: "Cout de la vie", description: "Comparer les grands postes de depense.", href: "/fr/budget/cout-vie" },
      { title: "Allocation logement", description: "Voir les aides logement pour locataires.", href: "/fr/budget/allocation-logement" },
      { title: "Credit de solidarite", description: "Comprendre ce credit remboursable du Quebec.", href: "/fr/budget/credit-solidarite" },
      { title: "Questionnaire aides", description: "Voir ce qui peut soulager le budget.", href: "/fr/questionnaire" },
    ],
    faqs: [
      { question: "Par quoi commencer ?", answer: "Par logement, transport et dettes. Ce sont les postes qui deplacent le plus vite la trajectoire du budget." },
      { question: "Le Quebec est-il moins cher partout ?", answer: "Pas partout. Certains postes sont plus doux, mais le logement peut vite compenser cet avantage." },
    ],
    ctaTitle: "Voir ce qui peut alleger le budget",
    ctaText: "Le questionnaire complete la vision budget en ajoutant les programmes potentiellement accessibles.",
    ctaLabel: "Lancer le questionnaire",
  },
  taxes: {
    routeKey: "taxes",
    metadata: {
      title: "Impots Quebec | ArgentQC.ca",
      description: "Les bases utiles pour comprendre impots, dates et credits au Quebec.",
    },
    eyebrow: "Hub impots Quebec",
    title: "Impots au Quebec sans angle mort",
    description: "Une base claire entre ARC, Revenu Quebec, echeances et credits importants.",
    keyPoints: [
      "Le Quebec se pense toujours en federal et provincial.",
      "Les dates de paiement et de production ne sont pas interchangeables.",
      "Les credits remboursables comptent meme avec peu d'impot du.",
    ],
    cards: [
      { title: "Dates limites", description: "Echeances et penalites.", href: "/fr/impots/dates" },
      { title: "Remboursement", description: "Delais et suivi des retours.", href: "/fr/impots/remboursement" },
      { title: "Logiciels", description: "Comparer les solutions utiles.", href: "/fr/impots/logiciels" },
    ],
    faqs: [
      { question: "Pourquoi le Quebec semble plus complexe ?", answer: "Parce que plusieurs credits et obligations se lisent a la fois du cote federal et du cote provincial." },
      { question: "Faut-il produire avec un petit revenu ?", answer: "Souvent oui, surtout pour declencher des credits et prestations." },
    ],
    ctaTitle: "Croiser impots et aides",
    ctaText: "Le questionnaire permet de reperer les programmes qui n'apparaissent pas toujours dans un simple raisonnement fiscal.",
    ctaLabel: "Trouver mes aides",
  },
  retirement: {
    routeKey: "retirement",
    metadata: {
      title: "Retraite Quebec | ArgentQC.ca",
      description: "Les grands reperes pour relier RRQ, SV, REER, CELI et besoins de revenu futur.",
    },
    eyebrow: "Hub retraite Quebec",
    title: "Retraite au Quebec : les bons piliers dans le bon ordre",
    description: "Une vue d'ensemble avant de rentrer dans les details de produits et de decaissement.",
    keyPoints: [
      "RRQ et SV forment une base, rarement une solution complete.",
      "REER et CELI n'ont pas le meme role fiscal.",
      "L'age de prise des prestations doit etre pense avec votre horizon de revenu.",
    ],
    cards: [
      { title: "Guide REER", description: "Comprendre deduction et usage.", href: "/fr/retraite/reer" },
      { title: "Transfert REER", description: "Deplacer un REER sans faux retrait.", href: "/fr/retraite/transfert-reer" },
      { title: "Guide CELIAPP", description: "Premier achat et mise de fonds.", href: "/fr/retraite/celiapp" },
      { title: "Guide RRQ", description: "Le pilier public Quebec.", href: "/fr/retraite/rrq" },
    ],
    faqs: [
      { question: "REER ou CELI ?", answer: "Cela depend surtout de votre niveau d'imposition actuel, de votre revenu futur et de votre besoin de flexibilite." },
      { question: "La RRQ suffit-elle ?", answer: "Pour la plupart des foyers, non. Elle reste une fondation, pas un plan complet." },
    ],
    ctaTitle: "Voir les programmes lies a votre situation",
    ctaText: "Certaines aides et certains credits croisent les enjeux retraite, surtout pour les aines.",
    ctaLabel: "Estimer mes programmes",
  },
  insurance: {
    routeKey: "insurance",
    metadata: {
      title: "Assurances Quebec | ArgentQC.ca",
      description: "Comprendre les grandes decisions d'assurance dans le contexte propre au Quebec.",
    },
    eyebrow: "Hub assurances Quebec",
    title: "Assurances au Quebec sans payer a l'aveugle",
    description: "Une base simple pour distinguer les risques a couvrir des protections superflues.",
    keyPoints: [
      "L'assurance auto au Quebec suit une logique particuliere avec la SAAQ.",
      "Les franchises et exclusions comptent autant que la prime.",
      "Vie et invalidite ne couvrent pas le meme risque financier.",
    ],
    cards: [
      { title: "Comparateur assurances", description: "Estimer les prix auto et habitation.", href: "/fr/assurances/comparateur" },
      { title: "Assurance auto", description: "Le cadre Quebec et les couvertures utiles.", href: "/fr/assurances/auto" },
      { title: "Assurance habitation", description: "Protections et exclusions.", href: "/fr/assurances/habitation" },
    ],
    faqs: [
      { question: "Faut-il magasiner chaque annee ?", answer: "Tres souvent oui. Le marche bouge et l'ecart de prime peut etre important." },
      { question: "Un locataire a-t-il vraiment besoin d'assurance ?", answer: "Oui dans la pratique, surtout pour la responsabilite civile et la protection des biens." },
    ],
    ctaTitle: "Replacer l'assurance dans la vue d'ensemble",
    ctaText: "Le questionnaire aide a remettre les decisions de couverture dans votre contexte financier global.",
    ctaLabel: "Voir mon profil",
  },
  internet: {
    routeKey: "internet",
    metadata: {
      title: "Internet Quebec | ArgentQC.ca",
      description: "Les grands criteres pour choisir un forfait internet au Quebec selon usage, budget et region.",
    },
    eyebrow: "Hub internet Quebec",
    title: "Internet au Quebec sans payer pour de la vitesse inutile",
    description: "Une vue claire sur les vrais criteres de choix entre fibre, cable, contrat et budget.",
    keyPoints: [
      "Le bon forfait depend de l'usage reel du foyer, pas seulement du chiffre marketing.",
      "L'upload compte beaucoup plus avec le teletravail.",
      "Le vrai prix inclut modem, promo et souplesse de sortie.",
    ],
    cards: [
      { title: "Comparateur internet", description: "Comparer les offres principales.", href: "/fr/internet/comparateur" },
      { title: "Questionnaire aides", description: "Voir aussi les autres leviers budgetaires.", href: "/fr/questionnaire" },
      { title: "Hub budget", description: "Remettre les telecoms dans le budget global.", href: "/fr/budget" },
    ],
    faqs: [
      { question: "La fibre vaut-elle toujours le surcout ?", answer: "Pas toujours. Elle devient surtout pertinente pour les usages intensifs, simultanes ou tres sensibles a la stabilite." },
      { question: "Les promotions sont-elles un bon repere ?", answer: "Seulement si vous regardez le prix complet apres promotion." },
    ],
    ctaTitle: "Voir l'impact dans le budget global",
    ctaText: "Le bon forfait est aussi un arbitrage avec les autres depenses recurrentes du foyer.",
    ctaLabel: "Lancer le questionnaire",
  },
  moving: {
    routeKey: "moving",
    metadata: {
      title: "Demenagement Quebec | ArgentQC.ca",
      description: "Les bases utiles pour planifier un demenagement au Quebec et en maitriser les couts.",
    },
    eyebrow: "Hub demenagement Quebec",
    title: "Demenager au Quebec avec une vraie feuille de route",
    description: "Une base simple pour cadrer couts, calendrier et changements administratifs.",
    keyPoints: [
      "La date et le bail conditionnent une grande partie du stress et du cout.",
      "Le vrai cout depasse le simple camion ou demenageur.",
      "Les changements d'adresse doivent etre traites comme une checklist unique.",
    ],
    cards: [
      { title: "Checklist demenagement", description: "Ne rien oublier avant et apres l'arrivee.", href: "/fr/demenagement/checklist" },
      { title: "Cout du demenagement", description: "Estimer les frais reels.", href: "/fr/demenagement/cout" },
      { title: "Montreal", description: "Le contexte specifique de Montreal.", href: "/fr/demenagement/montreal" },
    ],
    faqs: [
      { question: "Quand faut-il commencer ?", answer: "Idealement 6 a 8 semaines avant, surtout si plusieurs services doivent etre coordonnes." },
      { question: "Qu'est-ce qui fait grimper la facture ?", answer: "La date, l'accessibilite, la distance et les ajouts de derniere minute." },
    ],
    ctaTitle: "Refaire le point apres un changement de situation",
    ctaText: "Un demenagement peut modifier votre budget et votre admissibilite a certains programmes.",
    ctaLabel: "Refaire le point",
  },
};

const en: Record<HubRouteKey, HubDictionary> = {
  budget: {
    routeKey: "budget",
    metadata: { title: "Budget in Quebec | ArgentQC.ca", description: "A practical starting point for budget and cost-of-living tradeoffs in Quebec." },
    eyebrow: "Quebec budget hub",
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
    eyebrow: "Quebec taxes hub",
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
    eyebrow: "Quebec retirement hub",
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
    eyebrow: "Quebec insurance hub",
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
    eyebrow: "Quebec internet hub",
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
      { title: "Budget hub", description: "Put telecom back inside your full budget.", href: "/en/budget" },
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
    eyebrow: "Quebec moving hub",
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
