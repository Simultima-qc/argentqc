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
    lastUpdated: "2026-04-12",
    status: "estimate",
    sourceNote: "Tarifs publics et hypotheses editoriales du comparateur internet Quebec 2026.",
    reviewCadence: "monthly",
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
        url: "https://www.bell.ca/Internet",
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
        url: "https://www.bell.ca/Internet",
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
        url: "https://oxio.ca/fr",
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
        url: "https://teksavvy.com/fr/internet",
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
        url: "https://www.cogeco.ca/fr/internet",
      },
    ] satisfies InternetOffer2026[],
  }
);

export const internetOffers2026 = internetComparatorUi2026.values.offers;
export const internetBudgetOptions2026 = internetComparatorUi2026.values.budgetOptions;
export const internetSpeedOptions2026 = internetComparatorUi2026.values.speedOptions;
export const internetConnectionTypes2026 = internetComparatorUi2026.values.connectionTypes;
