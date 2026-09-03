import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const acebeOfficialUrls = {
  overview:
    "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-epicerie-besoins-essentiels.html",
  calculation:
    "https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/publications/rc4210/credit-tps-tvh.html",
  payments:
    "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/dates-versement-prestations.html",
  newResidents:
    "https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/formulaires/rc151.html",
  transition:
    "https://www.canada.ca/fr/ministere-finances/nouvelles/2026/02/le-gouvernement-du-canada-rend-la-vie-plus-abordable-avec-lallocation-canadienne-pour-lepicerie-et-les-besoins-essentiels.html",
} as const;

export const groceriesEssentialsBenefitDataset2026 = defineVersionedDataset(
  "allocation-canadienne-epicerie-besoins-essentiels-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-01",
    status: "official",
    sourceNote: "Agence du revenu du Canada et ministère des Finances du Canada",
    reviewCadence: "quarterly",
    nextReviewAt: "2026-12-01",
    criticality: "critical",
  },
  {
    programmeId: "credit-tps-fed",
    frenchName: "Allocation canadienne pour l’épicerie et les besoins essentiels (ACEBE)",
    englishName: "Canada Groceries and Essentials Benefit (CGEB)",
    benefitYear: "juillet 2026 à juin 2027",
    taxYearUsed: 2025,
    reductionThreshold: 46_432,
    maximumAnnual: {
      singleAdult: 679,
      couple: 890,
      perChildUnder19: 234,
    },
    paymentDates2026: ["2026-07-03", "2026-10-05"],
    transitionTopUpDate: "2026-06-05",
    formerCreditLastPaymentDate: "2026-04-02",
  }
);

export const acebe2026 = groceriesEssentialsBenefitDataset2026.values;
