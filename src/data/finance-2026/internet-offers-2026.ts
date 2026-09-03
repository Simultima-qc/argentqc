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
}

export const internetComparatorUi2026 = defineVersionedDataset(
  "internet-offers-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-03",
    status: "estimate",
    sourceNote:
      "Tentative de revalidation le 2026-09-03 (issue #47, apres la revalidation source-backed de tax-2026.ts dans les issues #45/#46). Acces direct (WebFetch) bloque par la politique reseau de cet environnement (EGRESS_BLOCKED / 'unable to fetch') sur les 6 pages officielles des fournisseurs testees explicitement (videotron.com, bell.ca, fizz.ca, oxio.ca, teksavvy.com, cogeco.ca) ainsi que sur web.archive.org (aucune capture historique accessible non plus). Contrairement a tax-2026.ts, la recherche web indirecte (WebSearch, y compris des requetes site:) n'a pas permis d'obtenir de contenu indexe rattachable avec confiance a chaque forfait individuel : resultats generiques sans prix precis (Oxio, TekSavvy), sources tierces non officielles et explicitement variables selon l'adresse ou la periode (ex. forums mentionnant Videotron Helix 400 Mbps entre 52 $ et 73 $ selon la promotion), ou divergence structurelle avec le dataset actuel (page Cogeco actuelle mettant de l'avant la marque fibre 'UltraFibre' des 49,99 $/mois plutot qu'une confirmation directe de l'offre cable listee ici; paliers Bell Fibe reperes en recherche ne confirmant pas precisement 500 Mbps/79 $ ni 1500 Mbps/99 $). Aucune de ces preuves indirectes n'atteint le niveau de confirmation source primaire exige par l'issue #47 pour corriger ou retirer un prix, une vitesse ou une duree de contrat : republier une valeur non confirmee comme verifiee serait trompeur, et inventer une valeur de remplacement a partir d'un forum ou d'un prix promotionnel adresse-dependant serait pire. Decision : aucun prix, aucune vitesse, aucune duree de contrat n'est modifie dans cette passe; chaque offre reste explicitement 'incertain' au sens de l'issue #47 (ni verifiee, ni retiree sans preuve). Seules les URL de Bell, Oxio, TekSavvy et Cogeco sont corrigees vers la page produit precise confirmee par contenu indexe sous leur propre domaine; les URL Videotron et Fizz sont conservees telles quelles, aucune page plus precise n'ayant ete confirmee. Voir le rapport durable de l'issue #47 pour l'inventaire complet offre par offre et les sources consultees. Une revalidation humaine avec acces reseau non bloque reste necessaire pour lever ce statut 'incertain' sur les prix/vitesses/contrats.",
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
        vitesseDL: 400,
        vitesseUL: 20,
        prix: 69,
        contrat: false,
        modemInclus: false,
        fraisModem: 10,
        regions: ["Montreal", "Quebec", "Rive-Sud"],
        url: "https://www.videotron.com/internet",
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
        modemInclus: false,
        fraisModem: 10,
        regions: ["Montreal", "Quebec"],
        url: "https://www.videotron.com/internet",
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
        modemInclus: false,
        fraisModem: 5,
        regions: ["Montreal", "Quebec"],
        url: "https://fizz.ca/fr/internet",
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
        modemInclus: false,
        fraisModem: 5,
        regions: ["Montreal", "Quebec"],
        url: "https://fizz.ca/fr/internet",
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
      },
      {
        fournisseur: "Cogeco",
        initiales: "CG",
        couleur: "#DC2626",
        type: "Cable",
        vitesseDL: 200,
        vitesseUL: 20,
        prix: 64,
        contrat: false,
        modemInclus: false,
        regions: ["Montreal-Est", "Lanaudiere", "Laurentides"],
        url: "https://www.cogeco.ca/fr/internet/forfaits",
      },
    ] satisfies InternetOffer2026[],
  }
);

export const internetOffers2026 = internetComparatorUi2026.values.offers;
export const internetBudgetOptions2026 = internetComparatorUi2026.values.budgetOptions;
export const internetSpeedOptions2026 = internetComparatorUi2026.values.speedOptions;
export const internetConnectionTypes2026 = internetComparatorUi2026.values.connectionTypes;
