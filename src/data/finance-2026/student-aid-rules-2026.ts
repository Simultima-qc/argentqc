import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const studentAidRulesGuide2026 = defineVersionedDataset(
  "student-aid-rules-2026",
  {
    year: 2026,
    lastUpdated: "2026-08-28",
    status: "official",
    sourceNote:
      "Taux de crédit d'impôt pour frais de scolarité (fédéral et Québec), montants Bourse Perspective et taux de " +
      "remise de dette AFE vérifiés le 2026-08-28 aupres des pages officielles Québec/ARC/Revenu Québec listées ci-dessous.",
    reviewCadence: "quarterly",
    nextReviewAt: "2026-11-27",
    criticality: "high",
  },
  {
    federalTuitionCreditRate: 0.14,
    quebecTuitionAndExamCreditRate: 0.08,
    perspectivePerSession: { college: 1_500, university: 2_500 },
    debtRemissionRate: 0.15,
    links: {
      afeEligibility: "https://www.quebec.ca/education/aide-financiere-aux-etudes/prets-bourses-temps-plein/conditions-admissibilite",
      afeCalculator: "https://www.quebec.ca/education/aide-financiere-aux-etudes/prets-bourses-temps-plein/calcul/simulateur-calcul",
      afeCalculation: "https://www.quebec.ca/education/aide-financiere-aux-etudes/prets-bourses-temps-plein/calcul/calcul-aide-financiere",
      afePartTime: "https://www.quebec.ca/education/aide-financiere-aux-etudes/prets-etudes-temps-partiel",
      perspectiveEligibility: "https://www.quebec.ca/education/aide-financiere-aux-etudes/bourses-perspective/conditions-admissibilite",
      perspectiveAmounts: "https://www.quebec.ca/education/aide-financiere-aux-etudes/bourses-perspective/programmes-admissibles",
      debtRemission: "https://www.quebec.ca/education/aide-financiere-aux-etudes/remboursement/remise-dette",
      federalTuitionCredit: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html",
      quebecTuitionCredit: "https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration-de-revenus/aide-par-ligne/350-a-398-1-credits-dimpot-non-remboursables/ligne-398/",
      quebecStudentLoanInterest: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/interets-payes-sur-un-pret-etudiant/",
      llp: "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/reer-regimes-connexes/regime-encouragement-a-education-permanente.html",
    },
  } as const
);

export const studentAidRules2026 = studentAidRulesGuide2026.values;
