import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const familyTrainingRules2026 = defineVersionedDataset(
  "family-training-rules-2026",
  {
    year: 2026,
    lastUpdated: "2026-08-29",
    status: "official",
    sourceNote: "Paramètres ARC, Retraite Québec et Revenu Québec vérifiés pour 2026.",
    reviewCadence: "quarterly",
    nextReviewAt: "2026-11-29",
    criticality: "high",
  },
  {
    ace: {
      benefitPeriod: "juillet 2026 à juin 2027",
      incomeYear: 2025,
      under6Annual: 8_157,
      under6Monthly: 679.75,
      age6To17Annual: 6_883,
      age6To17Monthly: 573.58,
      disabilityAnnual: 3_480,
      disabilityMonthly: 290,
      firstThreshold: 38_237,
      secondThreshold: 82_847,
      firstBandReductionRates: [0.07, 0.135, 0.19, 0.23],
      sharedCustodyRange: [0.4, 0.6],
      officialUrl:
        "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants/combien-recevoir.html",
    },
    quebecFamilyAllowance: {
      year: 2026,
      baseMaxAnnual: 3_068,
      singleParentSupplementAnnual: 1_077,
      singleParentMaxAnnual: 4_145,
      defaultFrequency: "trimestrielle",
      optionalFrequency: "mensuelle sur demande",
      officialUrl:
        "https://www.retraitequebec.gouv.qc.ca/fr/enfants/allocation-famille/paiements/Pages/montants.aspx",
    },
    ccf: {
      limitYear: 2026,
      incomeYear: 2025,
      annualLimitIncrease: 250,
      lifetimeLimit: 5_000,
      eligibleFeesRate: 0.5,
      minimumWorkingIncome: 12_058,
      maximumNetIncome: 177_882,
      quebecTuitionCreditRate: 0.08,
      officialUrl:
        "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-45350-credit-canadien-pour-la-formation.html",
    },
  }
);
