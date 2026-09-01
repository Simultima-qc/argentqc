import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const rrqOfficialUrls = {
  contributions:
    "https://www.revenuquebec.ca/fr/entreprises/retenues-a-la-source-et-cotisations-de-lemployeur/calcul-des-retenues-et-des-cotisations/cotisations-au-rrq/maximum-des-gains-admissibles-et-taux-de-cotisation/",
  pensionCalculation:
    "https://www.retraitequebec.gouv.qc.ca/fr/citoyens/retraite-et-planification/demandez-rente-retraite/rente-retraite-regime-rentes-quebec/calcul-rente-retraite",
  amounts:
    "https://www.retraitequebec.gouv.qc.ca/fr/montants-prestations-et-donnees-base",
  application:
    "https://www.retraitequebec.gouv.qc.ca/fr/services-ligne-et-outils/demande-rente-retraite-regime-rentes-quebec?form=MG0AV3",
  stopContributing:
    "https://www.retraitequebec.gouv.qc.ca/fr/citoyens/travail/travail-et-retraite/choisir-arreter-cotiser-regime-rentes-quebec",
  selfEmployed:
    "https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/payer-ou-etre-rembourse/paiement-des-cotisations/cotisations-du-travailleur-autonome-ou-du-membre-dune-societe-de-personnes/cotisation-du-travailleur-autonome-ou-du-membre-dune-societe-de-personnes-au-regime-de-rentes-du-quebec/",
  cppEnhancement:
    "https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-enhancement.html",
} as const;

export const retirementGuide2026 = defineVersionedDataset(
  "retirement-guide-2026",
  {
    year: 2026,
    lastUpdated: "2026-08-31",
    status: "official",
    sourceNote:
      "Parametres RRQ 2026 verifies le 2026-08-31 aupres de Revenu Quebec et Retraite Quebec. Les montants reels dependent du dossier de cotisation et de l'age de demande.",
    reviewCadence: "quarterly",
  },
  {
    contributions: {
      generalExemption: 3_500,
      maximumPensionableEarnings: 74_600,
      maximumContributoryEarnings: 71_100,
      employeeEmployerRate: 0.063,
      employeeEmployerMaximum: 4_479.3,
      additionalMaximumPensionableEarnings: 85_000,
      secondBandMaximumEarnings: 10_400,
      secondAdditionalRate: 0.04,
      secondAdditionalMaximum: 416,
      employeeEmployerTotalMaximum: 4_895.3,
      selfEmployedRate: 0.126,
      selfEmployedSecondAdditionalRate: 0.08,
      selfEmployedMaximum: 8_958.6,
      selfEmployedSecondAdditionalMaximum: 832,
      selfEmployedTotalMaximum: 9_790.6,
    },
    pension: {
      earliestAge: 60,
      referenceAge: 65,
      latestAge: 72,
      earlyMonthlyReductionMinimum: 0.005,
      earlyMonthlyReductionMaximum: 0.006,
      lateMonthlyIncrease: 0.007,
      latestIncrease: 0.588,
      amountsByAge: [
        { age: 60, averageMonthly: 490, maximumMonthly: 964.9, adjustmentMinimum: -0.36, adjustmentMaximum: -0.3 },
        { age: 65, averageMonthly: 731, maximumMonthly: 1_507.65, adjustmentMinimum: 0, adjustmentMaximum: 0 },
        { age: 70, averageMonthly: 1_038, maximumMonthly: 2_141, adjustmentMinimum: 0.42, adjustmentMaximum: 0.42 },
        { age: 72, averageMonthly: 1_161, maximumMonthly: 2_394.15, adjustmentMinimum: 0.588, adjustmentMaximum: 0.588 },
      ],
    },
    cpp: {
      employeeEmployerRate: 0.0595,
      secondAdditionalRate: 0.04,
      maximumPensionableEarnings: 74_600,
      additionalMaximumPensionableEarnings: 85_000,
      maximumMonthlyAt65: 1_507.65,
    },
  }
);

export const rrqContributions2026 = retirementGuide2026.values.contributions;
export const rrqPension2026 = retirementGuide2026.values.pension;
export const cpp2026 = retirementGuide2026.values.cpp;
export const rrqMontantsAge2026 = rrqPension2026.amountsByAge;

function roundCurrency(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export interface RrqContributionCalculation {
  salary: number;
  firstBand: number;
  secondBand: number;
  employee: number;
  employer: number;
  employeeAndEmployer: number;
  selfEmployed: number;
}

export function calculateRrqContributions2026(salary: number): RrqContributionCalculation {
  const eligibleSalary = Math.max(0, salary);
  const firstBandEarnings = Math.max(
    0,
    Math.min(eligibleSalary, rrqContributions2026.maximumPensionableEarnings) -
      rrqContributions2026.generalExemption
  );
  const secondBandEarnings = Math.max(
    0,
    Math.min(eligibleSalary, rrqContributions2026.additionalMaximumPensionableEarnings) -
      rrqContributions2026.maximumPensionableEarnings
  );
  const firstBand = roundCurrency(firstBandEarnings * rrqContributions2026.employeeEmployerRate);
  const secondBand = roundCurrency(secondBandEarnings * rrqContributions2026.secondAdditionalRate);
  const employee = roundCurrency(firstBand + secondBand);

  return {
    salary: eligibleSalary,
    firstBand,
    secondBand,
    employee,
    employer: employee,
    employeeAndEmployer: roundCurrency(employee * 2),
    selfEmployed: roundCurrency(employee * 2),
  };
}

export const rrqContributionExamples2026 = [30_000, 50_000, 68_500, 85_000].map(
  calculateRrqContributions2026
);
