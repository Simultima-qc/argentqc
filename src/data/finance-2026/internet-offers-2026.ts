import { defineVersionedDataset } from "@/data/finance-2026/schema";

export interface InternetOffer2026 {
  fournisseur: string;
  initiales: string;
  couleur: string;
  type: "Fibre" | "Cable";
  vitesseDL: number;
  vitesseUL: number;
  prix: number;
  contrat: boolean;
  dureeContrat?: string;
  modemInclus: boolean;
  fraisModem?: number;
  regions: string[];
  url: string;
  /**
   * false = le prix/la vitesse/la disponibilite affiches n'ont PAS ete
   * confirmes contre une source officielle actuelle lors de la derniere
   * revalidation (issue #47) : a traiter comme une reference, pas comme un
   * prix garanti. Doit etre mis a true uniquement quand une revalidation
   * ulterieure confirme reellement le chiffre contre la page officielle du
   * fournisseur.
   */
  termesVerifies: boolean;
}

export const internetComparatorUi2026 = defineVersionedDataset(
  "internet-offers-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-03",
    status: "estimate",
    sourceNote:
      "2e passe de revalidation le 2026-09-03 (issue #47), suite au rejet par la revue independante de la 1re passe qui bumpait lastUpdated/nextReviewAt sans avoir reellement corrige ou retire de valeur commerciale. WebFetch reste bloque (EGRESS_BLOCKED) sur les 6 domaines officiels et sur web.archive.org, teste explicitement de nouveau a cette passe (videotron.com, fizz.ca, cogeco.ca, bell.ca, oxio.ca, teksavvy.com). Cette fois, des corrections reelles ont ete appliquees a partir de faits structurels suffisamment corrobores (chaine de revue independante de l'issue #47 + recherche web indirecte convergente), sans jamais inventer un chiffre de remplacement : (1) Videotron - la passerelle/le modem est fourni sans frais et les forfaits sont sans engagement (confirme par la revue independante et corrobore par recherche : 'Helix Fi WiFi 6 gateway is typically included at no charge') -> modemInclus corrige a true et fraisModem retire sur les 2 offres; le palier '400 Mbps' ne correspond a aucun palier actuel confirme (gamme actuelle : Internet 100/500/GIGA/2 GIGA/2.5 GIGA selon l'adresse) -> vitesseDL corrige a 500 (palier le plus proche confirme) pour l'offre cable. (2) Fizz - la page officielle inclut le modem-routeur et la livraison sans frais (confirme par la revue independante et corrobore deux fois independamment en recherche : 'Fizz includes a Wi-Fi modem... with no shipping fees, installation fees') -> modemInclus corrige a true et fraisModem retire sur les 2 offres. (3) Cogeco - la gamme publique actuelle est structuree autour de la marque fibre 'UltraFibre' (60/120/360/1 Gig/1.5 Gig/2 Gig, confirme par les propres noms de fichiers PDF indexes de cogeco.ca et par la revue independante); aucun equivalent direct de l'ancienne offre 'Cable 200 Mbps a 64 $' n'a ete retrouve, et le prix exact d'un palier UltraFibre courant n'a pas pu etre confirme avec confiance (signaux contradictoires en recherche, ex. 69,99 $ vs 94,99 $ pour le palier 1 Gig) -> offre Cogeco RETIREE plutot que republiee ou remplacee par un chiffre invente. (4) Bell, Oxio, TekSavvy - poursuite de la verification cette passe; les paliers Bell 'Fibe 500' et 'Fibe Gigabit 1.5' existent bel et bien comme produits actuels (confirme par contenu indexe sous bell.ca), mais aucun prix exact univoque n'a pu etre confirme (resultats contradictoires selon la source/promotion); aucune preuve, contredisante ou confirmante, n'a ete trouvee pour Oxio et TekSavvy au-dela de ce qui etait deja documente. Pour ces 3 fournisseurs et pour le prix des offres Videotron/Fizz corrigees structurellement ci-dessus, aucune valeur numerique (prix, vitesse restante, duree, disponibilite regionale) n'est modifiee faute de confirmation suffisante contre une source officielle actuelle. Plutot que de cacher cette incertitude uniquement ici, chaque offre porte desormais un champ visible cote produit (termesVerifies: false sur les 8 offres restantes) et le comparateur affiche un avertissement explicite au niveau de chaque carte d'offre tant que ce champ n'est pas passe a true par une revalidation ulterieure confirmee contre la page officielle du fournisseur. Voir le rapport durable de l'issue #47 (2e passe) pour le tableau complet offre par offre, les sources consultees et leurs limites.",
    reviewCadence: "monthly",
    nextReviewAt: "2026-10-01",
    criticality: "medium",
  },
  {
    budgetOptions: [50, 75, 100, 999] as const,
    speedOptions: [
      { val: 30, label: "30 Mbps" },
      { val: 100, label: "100 Mbps" },
      { val: 500, label: "500 Mbps" },
      { val: 1000, label: "1 Gbps" },
    ] as const,
    connectionTypes: ["Tous", "Fibre", "Cable"] as const,
    offers: [
      {
        fournisseur: "Videotron",
        initiales: "VT",
        couleur: "#6D28D9",
        type: "Cable",
        vitesseDL: 500,
        vitesseUL: 20,
        prix: 69,
        contrat: false,
        modemInclus: true,
        regions: ["Montreal", "Quebec", "Rive-Sud"],
        url: "https://www.videotron.com/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Videotron",
        initiales: "VT",
        couleur: "#6D28D9",
        type: "Fibre",
        vitesseDL: 1000,
        vitesseUL: 1000,
        prix: 89,
        contrat: false,
        modemInclus: true,
        regions: ["Montreal", "Quebec"],
        url: "https://www.videotron.com/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Bell",
        initiales: "BL",
        couleur: "#1D4ED8",
        type: "Fibre",
        vitesseDL: 500,
        vitesseUL: 500,
        prix: 79,
        contrat: true,
        dureeContrat: "24 mois",
        modemInclus: true,
        regions: ["Province entiere"],
        url: "https://www.bell.ca/Services_Internet/Acces_Internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Bell",
        initiales: "BL",
        couleur: "#1D4ED8",
        type: "Fibre",
        vitesseDL: 1500,
        vitesseUL: 1000,
        prix: 99,
        contrat: true,
        dureeContrat: "24 mois",
        modemInclus: true,
        regions: ["Province entiere"],
        url: "https://www.bell.ca/Services_Internet/Acces_Internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Fizz",
        initiales: "FZ",
        couleur: "#059669",
        type: "Cable",
        vitesseDL: 200,
        vitesseUL: 20,
        prix: 47,
        contrat: false,
        modemInclus: true,
        regions: ["Montreal", "Quebec"],
        url: "https://fizz.ca/fr/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Fizz",
        initiales: "FZ",
        couleur: "#059669",
        type: "Fibre",
        vitesseDL: 400,
        vitesseUL: 50,
        prix: 58,
        contrat: false,
        modemInclus: true,
        regions: ["Montreal", "Quebec"],
        url: "https://fizz.ca/fr/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Oxio",
        initiales: "OX",
        couleur: "#D97706",
        type: "Cable",
        vitesseDL: 120,
        vitesseUL: 20,
        prix: 44,
        contrat: false,
        modemInclus: false,
        fraisModem: 7,
        regions: ["Montreal", "Quebec"],
        url: "https://oxio.ca/fr/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "TekSavvy",
        initiales: "TS",
        couleur: "#7C3AED",
        type: "Cable",
        vitesseDL: 150,
        vitesseUL: 15,
        prix: 49,
        contrat: false,
        modemInclus: false,
        regions: ["Montreal"],
        url: "https://www.teksavvy.com/fr/nos-services/internet/",
        termesVerifies: false,
      },
    ] satisfies InternetOffer2026[],
  }
);

export const internetOffers2026 = internetComparatorUi2026.values.offers;
export const internetBudgetOptions2026 = internetComparatorUi2026.values.budgetOptions;
export const internetSpeedOptions2026 = internetComparatorUi2026.values.speedOptions;
export const internetConnectionTypes2026 = internetComparatorUi2026.values.connectionTypes;
