/**
 * Quebec income tax calculator — 2026 brackets.
 *
 * Federal rates are reduced by the Quebec abatement (16.5 %) before being
 * applied. Provincial rates are the Revenu Québec rates for 2026.
 *
 * Sources:
 *  - ARC: https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/retenues-paie/t4127-formules-calcul-retenues-paie/t4127-jan/t4127-jan-formules-calcul-informatise-retenues-paie.html
 *  - Revenu Québec: https://www.revenuquebec.ca/fr/entreprises/retenues-a-la-source-et-cotisations-de-lemployeur/employeur-principaux-changements-2026/
 */

export type TaxBracket = {
  /** Upper income limit for this bracket, or null if it is the top bracket. */
  upTo: number | null;
  /** Effective marginal rate for income within this bracket. */
  rate: number;
};

/**
 * Quebec federal abatement factor (1 − 16.5 %).
 * Federal tax is multiplied by this factor for Quebec residents.
 */
export const FEDERAL_QUEBEC_ABATEMENT = 0.835;

/** Federal 2026 brackets after Quebec abatement. */
export const federalQuebecBrackets2026: TaxBracket[] = [
  { upTo: 58_523, rate: 0.14 * FEDERAL_QUEBEC_ABATEMENT },
  { upTo: 117_045, rate: 0.205 * FEDERAL_QUEBEC_ABATEMENT },
  { upTo: 181_440, rate: 0.26 * FEDERAL_QUEBEC_ABATEMENT },
  { upTo: 258_482, rate: 0.29 * FEDERAL_QUEBEC_ABATEMENT },
  { upTo: null, rate: 0.33 * FEDERAL_QUEBEC_ABATEMENT },
];

/** Quebec provincial 2026 brackets. */
export const quebecBrackets2026: TaxBracket[] = [
  { upTo: 54_345, rate: 0.14 },
  { upTo: 108_680, rate: 0.19 },
  { upTo: 132_245, rate: 0.24 },
  { upTo: null, rate: 0.2575 },
];

/**
 * Calculates progressive (marginal) tax for a given income against a set of
 * brackets. Negative income is treated as zero.
 */
export function calculateProgressiveTax(
  taxableIncome: number,
  brackets: TaxBracket[],
): number {
  const income = Math.max(0, taxableIncome);
  let previousLimit = 0;
  let tax = 0;

  for (const bracket of brackets) {
    const upperLimit = bracket.upTo ?? Number.POSITIVE_INFINITY;
    const taxableSlice = Math.max(0, Math.min(income, upperLimit) - previousLimit);
    tax += taxableSlice * bracket.rate;

    if (income <= upperLimit) {
      break;
    }

    previousLimit = upperLimit;
  }

  return tax;
}

/**
 * Calculates combined Quebec + federal (after abatement) tax for a given
 * taxable income using 2026 brackets.
 */
export function calculateTotalTax(taxableIncome: number): number {
  return (
    calculateProgressiveTax(taxableIncome, federalQuebecBrackets2026) +
    calculateProgressiveTax(taxableIncome, quebecBrackets2026)
  );
}

/**
 * Returns the combined marginal rate (federal after abatement + Quebec) that
 * applies to the last dollar of the given taxable income.
 */
export function getMarginalRate(taxableIncome: number): number {
  const federalRate =
    federalQuebecBrackets2026.find(
      (bracket) => bracket.upTo === null || taxableIncome <= bracket.upTo,
    )?.rate ?? 0;

  const quebecRate =
    quebecBrackets2026.find(
      (bracket) => bracket.upTo === null || taxableIncome <= bracket.upTo,
    )?.rate ?? 0;

  return federalRate + quebecRate;
}
