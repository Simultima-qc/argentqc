import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const childcareCreditOfficialUrls = {
  overview:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-de-garde-denfants/",
  eligibleExpenses:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-de-garde-denfants/frais-de-garde-donnant-droit-au-credit-dimpot/",
  calculation:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-de-garde-denfants/calcul-du-credit-dimpot/",
  rateSchedule2026:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-de-garde-denfants/versements-anticipes/bareme-des-taux-du-credit-dimpot-pour-frais-de-garde-denfants-2026/",
  advancePayments:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-de-garde-denfants/versements-anticipes/",
  advancePaymentRequestForm:
    "https://www.revenuquebec.ca/fr/services-en-ligne/formulaires-et-publications/details-courant/tpz-1029-8-f/",
  advancePaymentAttestationForm:
    "https://www.revenuquebec.ca/fr/services-en-ligne/formulaires-et-publications/details-courant/tpz-1029-8-f-a/",
  ageEligibilityChange20250923:
    "https://www.revenuquebec.ca/fr/salle-de-presse/actualites/details/2025-09-23/modification-de-lage-dadmissibilite-dun-enfant-credit-dimpot-remboursable-pour-frais-de-garde-denfants/",
  financeParameters2026:
    "https://www.finances.gouv.qc.ca/Budget_et_mise_a_jour/maj/documents/AUTFR_RegimeImpot2026.pdf",
  taxExpenditureSheet:
    "https://www.budget.finances.gouv.qc.ca/budget/outils/depenses-fiscales/fiches/fiche-110604.asp",
} as const;

// Barieme officiel 2026 (paliers) : minIncome est exclusif sauf pour le premier
// palier qui part de 0$ inclusivement; maxIncome est inclusif (le taux du palier
// s'applique jusqu'a et incluant ce montant). Le dernier palier (maxIncome: null)
// n'a pas de plafond. Un futur calcul doit trancher un revenu egal a une borne au
// palier ou cette borne apparait comme maxIncome, jamais comme minIncome.
export const childcareCreditRateSchedule2026 = [
  { minIncome: 0, maxIncome: 25_305, rate: 0.78 },
  { minIncome: 25_305, maxIncome: 44_620, rate: 0.75 },
  { minIncome: 44_620, maxIncome: 46_270, rate: 0.74 },
  { minIncome: 46_270, maxIncome: 47_935, rate: 0.73 },
  { minIncome: 47_935, maxIncome: 49_565, rate: 0.72 },
  { minIncome: 49_565, maxIncome: 51_225, rate: 0.71 },
  { minIncome: 51_225, maxIncome: 122_290, rate: 0.7 },
  { minIncome: 122_290, maxIncome: null, rate: 0.67 },
] as const;

export const childcareCreditGuide2026 = defineVersionedDataset(
  "childcare-credit-guide-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-02",
    status: "official",
    sourceNote:
      "Bareme, plafonds de depenses et regle d'age 2026 etablis via l'audit source-backed issue #24 (Revenu Quebec, page 'Bareme des taux du credit d'impot pour frais de garde d'enfants - 2026', communique du 2025-09-23 sur le changement d'age, et ministere des Finances du Quebec, Parametres du regime d'imposition des particuliers 2026 / fiche de depense fiscale 110604), avec deux tours de revue independante (GO le 2026-09-02). L'environnement d'implementation (issue #25) a WebFetch bloque (EGRESS_BLOCKED) vers revenuquebec.ca et les sources secondaires testees, comme l'environnement d'audit: la lecture directe finale de la page primaire n'a pas pu etre repetee dans cette session. Corroboration independante obtenue par recherche web: la regle d'age <14 ans est confirmee par plusieurs sources secondaires convergentes; les plafonds de depenses 2026 sont corrobores arithmetiquement (indexation 2,05% des montants 2025 arrondis au multiple de 5$ le plus proche reproduit exactement 17 145$/12 525$/6 305$). Le bareme complet a 8 paliers provient de la lecture directe de la source primaire rapportee par la revue independante et n'a pas pu etre recoupe caractere pres par une deuxieme source independante dans cette session (voir docs/claims/credit-frais-garde-enfants-2026.md, section limites). A revalider a la prochaine cadence ou des qu'un acces direct a revenuquebec.ca est disponible.",
    reviewCadence: "quarterly",
  },
  {
    programmeId: "credit-frais-garde-qc",
    taxYear: 2026,
    refundable: true,
    rateSchedule: childcareCreditRateSchedule2026,
    rateMin: 0.67,
    rateMax: 0.78,
    eligibleExpenseCeilings: {
      severeAndProlongedImpairment: 17_145,
      under7NoImpairment: 12_525,
      otherEligibleChild: 6_305,
    },
    eligibleChildMaxIncome: 13_938,
    ageRule: {
      generalMaxAgeExclusive: 14,
      note:
        "A compter de l'annee d'imposition 2026, l'enfant admissible general doit avoir moins de 14 ans (auparavant moins de 16 ans). Aucun changement pour un enfant atteint d'une deficience mentale ou physique grave et prolongee (aucune limite d'age dans ce cas).",
      effectiveTaxYear: 2026,
    },
    subsidizedCareExcluded: true,
    subsidizedCareNote:
      "La contribution reduite fixee par le gouvernement (place subventionnee en CPE, garderie ou milieu familial) n'est elle-meme jamais admissible. Cela ne veut toutefois pas dire qu'aucun frais associe a une place subventionnee ne peut jamais etre admissible: certains frais additionnels ou expressement admissibles peuvent, selon les regles de Revenu Quebec, donner droit au credit s'ils sont attestes au releve 24 par le prestataire -- l'admissibilite exacte d'un frais donne doit toujours etre confirmee aupres de Revenu Quebec, pas deduite d'une regle universelle simplifiee.",
    eligibleCareTypes: [
      "Garde en installation (CPE ou garderie) ou en milieu familial reconnu par un bureau coordonnateur, dont la contribution reduite elle-meme est exclue quel que soit le type d'etablissement, y compris en CPE -- certains frais additionnels attestes au releve 24 peuvent rester admissibles meme pour une place subventionnee",
      "Camp de jour (si le parent travaille, etudie ou cherche un emploi)",
      "Garde a domicile (avec NAS du prestataire)",
      "Pensionnat ou colonie de vacances (frais de garde seulement, part distincte des frais de scolarite/hebergement)",
    ],
    advancePayments: {
      eligibilityThresholdAnnualCredit: 1_000,
      requestForm: "TPZ-1029.8.F",
      providerAttestationForm: "TPZ-1029.8.F.A",
      modificationForm: "TPZ-1029.8.F.C",
      paymentDay: 15,
      fullYearDeadline: "1er decembre",
      note:
        "Le versement mensuel debute le mois suivant une demande complete; une demande faite apres le debut de l'annee est repartie sur les mois restants plutot que sur 12 mois.",
    },
    declarationForm: "Annexe C du TP-1",
    supportingDocument: "Releve 24 (RL-24) du prestataire de services de garde",
    federalDeductionDistinctFromThisCredit: {
      note:
        "La deduction federale pour frais de garde d'enfants (ligne 21400) est une mesure distincte et cumulable avec ce credit provincial remboursable. Ne pas presenter les deux mesures comme un seul montant.",
      ceilings: {
        under7: 8_000,
        age7to15OrInfirmity16Plus: 5_000,
        eligibleForDisabilityTaxCredit: 11_000,
      },
    },
    universalMaximum: null,
    questionnaireScope: {
      preselectionOnly: true,
      montantSommable: false,
      note:
        "Le questionnaire ArgentQC ne collecte pas l'age precis de l'enfant, le type de garde (subventionnee ou non), les frais de garde reels payes ni la situation de travail/etudes des parents. Il ne peut donc ni confirmer l'admissibilite (garde subventionnee exclue) ni calculer un taux ou un montant reel: le programme reste une piste d'orientation, non additionnee aux totaux generiques.",
    },
    sources: childcareCreditOfficialUrls,
  }
);

export const childcareCredit2026 = childcareCreditGuide2026.values;
