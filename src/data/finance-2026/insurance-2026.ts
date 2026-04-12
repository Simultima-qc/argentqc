import { defineVersionedDataset } from "@/data/finance-2026/schema";

export interface InsuranceEstimatorCarrier2026 {
  nom: string;
  emoji: string;
  type: string;
  prix_base: [number, number];
  url: string;
}

export const insuranceComparator2026 = defineVersionedDataset(
  "insurance-comparator-2026",
  {
    year: 2026,
    lastUpdated: "2026-04-12",
    status: "estimate",
    sourceNote: "Moyennes editoriales et hypotheses du comparateur assurances Quebec 2026.",
    reviewCadence: "monthly",
  },
  {
    habitation: {
      assureurs: [
        { nom: "Desjardins", emoji: "🏦", type: "Mutuelle / Direct", prix_base: [28, 45], url: "https://www.desjardins.com/assurances/habitation/" },
        { nom: "Intact", emoji: "🏢", type: "Direct / Courtiers", prix_base: [30, 50], url: "https://www.intact.ca/fr/assurance-habitation/" },
        { nom: "Belair Direct", emoji: "💻", type: "Direct en ligne", prix_base: [25, 42], url: "https://www.belairdirect.com/fr/assurance-habitation.html" },
        { nom: "CAA-Quebec", emoji: "🚘", type: "Membres CAA", prix_base: [27, 44], url: "https://www.caaquebec.com/fr/assurance/habitation/" },
        { nom: "SSQ / Beneva", emoji: "🌿", type: "Mutuelle", prix_base: [26, 43], url: "https://www.beneva.ca/fr/assurance-habitation" },
        { nom: "La Personnelle", emoji: "🎓", type: "Groupes / Syndicats", prix_base: [24, 40], url: "https://www.lapersonnelle.com/fr/assurances/habitation" },
      ] satisfies InsuranceEstimatorCarrier2026[],
      multiplicateurs: {
        statut: { locataire: 1.0, proprietaire: 2.8, condo: 1.6 },
        region: { montreal: 1.15, quebec: 1.0, laval: 1.05, rive_sud: 1.08, region: 0.9 },
        biens: { bas: 0.85, moyen: 1.0, eleve: 1.25, tres_eleve: 1.55 },
      },
    },
    auto: {
      assureurs: [
        { nom: "Desjardins", emoji: "🏦", type: "Mutuelle / Direct", prix_base: [95, 140], url: "https://www.desjardins.com/assurances/auto/" },
        { nom: "Intact", emoji: "🏢", type: "Direct / Courtiers", prix_base: [100, 155], url: "https://www.intact.ca/fr/assurance-auto/" },
        { nom: "Belair Direct", emoji: "💻", type: "Direct en ligne", prix_base: [88, 135], url: "https://www.belairdirect.com/fr/assurance-auto.html" },
        { nom: "CAA-Quebec", emoji: "🚘", type: "Membres CAA", prix_base: [92, 138], url: "https://www.caaquebec.com/fr/assurance/automobile/" },
        { nom: "SSQ / Beneva", emoji: "🌿", type: "Mutuelle", prix_base: [90, 132], url: "https://www.beneva.ca/fr/assurance-auto" },
        { nom: "Promutuel", emoji: "🌾", type: "Mutuelle (regions)", prix_base: [85, 128], url: "https://www.promutuel.ca/" },
      ] satisfies InsuranceEstimatorCarrier2026[],
      multiplicateurs: {
        age: { jeune: 2.2, jeune_adulte: 1.35, adulte: 1.0, senior: 1.05 },
        vehicule: { berline: 1.0, vus_compact: 1.12, vus_grand: 1.28, camionnette: 1.22, electrique: 1.08 },
        region: { montreal: 1.3, quebec: 1.0, laval: 1.18, rive_sud: 1.12, region: 0.88 },
        usage: { faible: 0.95, moyen: 1.0, eleve: 1.15 },
      },
    },
  }
);

export const assureursHabitation2026 = insuranceComparator2026.values.habitation.assureurs;
export const assureursAuto2026 = insuranceComparator2026.values.auto.assureurs;
export const multStatutHabitation2026 = insuranceComparator2026.values.habitation.multiplicateurs.statut;
export const multRegionHabitation2026 = insuranceComparator2026.values.habitation.multiplicateurs.region;
export const multBiensHabitation2026 = insuranceComparator2026.values.habitation.multiplicateurs.biens;
export const multAgeAuto2026 = insuranceComparator2026.values.auto.multiplicateurs.age;
export const multVehiculeAuto2026 = insuranceComparator2026.values.auto.multiplicateurs.vehicule;
export const multRegionAuto2026 = insuranceComparator2026.values.auto.multiplicateurs.region;
export const multUsageAuto2026 = insuranceComparator2026.values.auto.multiplicateurs.usage;
