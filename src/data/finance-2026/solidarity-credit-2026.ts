import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const solidarityCreditOfficialUrls = {
  overview:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
  calculation:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/calcul-du-credit-dimpot-pour-solidarite/",
  payment:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/versement-du-credit-dimpot-pour-solidarite/",
  application:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/demande-du-credit/",
  components:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/composantes-du-credit-dimpot-pour-solidarite/",
  housingComponent:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/composantes-du-credit-dimpot-pour-solidarite/composante-relative-au-logement/",
  northernVillageComponent:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/composantes-du-credit-dimpot-pour-solidarite/composante-relative-a-la-residence-sur-le-territoire-dun-village-nordique/",
  scheduleD:
    "https://www.revenuquebec.ca/documents/fr/formulaires/tp/2025-12/TP-1.D.D(2025-12).pdf",
  changesDuringYear:
    "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/changements-en-cours-dannee/",
  pressRelease20260326:
    "https://www.revenuquebec.ca/fr/salle-de-presse/actualites/details/2026-03-26/credit-dimpot-pour-solidarite-preparez-vous-a-le-demander-releve-31-ou-compte-de-taxes-municipales-annexe-d-et-inscription-au-depot-direct/",
  financeParameters2026:
    "https://www.finances.gouv.qc.ca/Budget_et_mise_a_jour/maj/documents/AUTFR_RegimeImpot2026.pdf",
  taxExpenditureSheet:
    "https://www.budget.finances.gouv.qc.ca/Budget/outils/depenses-fiscales/fiches/fiche-110201.asp",
} as const;

export const solidarityCreditGuide2026 = defineVersionedDataset(
  "solidarity-credit-guide-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-01",
    status: "official",
    sourceNote:
      "Parametres du credit d'impot pour solidarite verifies le 2026-09-01 aupres de Revenu Quebec et du ministere des Finances du Quebec (audit source-backed, issue #21). Le montant reel depend du dossier complet du menage (annexe D, logement, revenu familial).",
    reviewCadence: "quarterly",
  },
  {
    programmeId: "credit-loyer-qc",
    benefitPeriod: "juillet 2026 a juin 2027",
    situationDate: "2025-12-31",
    taxYearUsed: 2025,
    components: {
      tvq: {
        base: 363,
        spouse: 363,
        additionalLivingAlone: 172,
      },
      housing: {
        couple: 906,
        singleOrSingleParent: 746,
        perChild: 158,
      },
      northernVillage: {
        perAdult: 2_134,
        perChild: 461,
      },
    },
    reduction: {
      threshold: 43_195,
      rateTwoOrMoreComponents: 0.06,
      rateOneComponent: 0.03,
    },
    indicativeIncomeCeilings: {
      note:
        "Ces seuils sont indicatifs (tableau de calcul general de Revenu Quebec) et ne s'appliquent pas au volet village nordique, qui exige l'annexe D. Ils ne constituent pas un maximum universel du credit.",
      withoutSpouse: 64_545,
      withSpouse: 70_395,
      singleParent: 64_545,
      perAdditionalChild: 2_634,
    },
    paymentFrequency: [
      { maxAnnualAmount: 240, frequency: "annuel", schedule: "Un seul versement en juillet 2026" },
      {
        minAnnualAmount: 241,
        maxAnnualAmount: 799,
        frequency: "trimestriel",
        schedule: "Juillet 2026, octobre 2026, janvier 2027 et avril 2027",
      },
      {
        minAnnualAmount: 800,
        frequency: "mensuel",
        schedule: "Chaque mois de juillet 2026 a juin 2027, dans les cinq premiers jours du mois",
      },
    ],
    requirements: {
      taxReturn: "Declaration de revenus du Quebec 2025",
      scheduleD:
        "Annexe D (ou service Mon dossier equivalent) requise pour les composantes logement et village nordique. Sans annexe D, seules la composante TVQ de base et celle du conjoint peuvent etre versees.",
      housingDocuments: "Releve 31 (locataires) ou compte de taxes municipales (proprietaires)",
      directDeposit: "Inscription au depot direct generalement requise pour recevoir le credit",
    },
    refundable: true,
    taxableStatus:
      "Credit remboursable. Aucune source officielle precise n'a confirme un statut de traitement 'non imposable' distinct dans ce workstream: ne pas affirmer ce statut sans citer une source officielle precise.",
    universalMaximum: null,
    questionnaireScope: {
      preselectionOnly: true,
      montantSommable: false,
      note:
        "Le questionnaire ArgentQC ne collecte pas la ligne 275 des deux conjoints, la situation de logement partage, le nombre d'enfants a charge exact, l'admissibilite au volet village nordique ni le statut de l'annexe D. Il ne peut donc ni confirmer l'admissibilite ni calculer un montant: le programme reste une piste a verifier, non additionnee aux totaux generiques.",
    },
    sources: solidarityCreditOfficialUrls,
  }
);

export const solidarityCredit2026 = solidarityCreditGuide2026.values;
