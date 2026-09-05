import type { Programme } from "@/types";
import type { Locale } from "@/i18n/routing";

type ProgrammeTranslation = Pick<
  Programme,
  "nom" | "organisme" | "montant_affiche" | "description" | "conditions"
>;

const enProgrammeTranslations: Record<string, ProgrammeTranslation> = {
  "renoclimat-qc": {
    nom: "RenoClimat",
    organisme: "Government of Quebec (Ministere de l'Environnement, de la Lutte contre les changements climatiques, de la Faune et des Parcs)",
    montant_affiche: "$100 to $20,000",
    description:
      "Grants for improving your home's energy efficiency, including insulation, windows, doors, and related upgrades. Heat pumps are not eligible under Renoclimat itself; they are covered separately by Hydro-Quebec's LogisVert program.",
    conditions: [
      "The home must be built and lived in for at least 12 months (no cutoff by construction year)",
      "Single-family homes, duplex/triplex/small multi-unit buildings, condo syndicates, businesses and non-profits in Quebec are eligible; the property does not need to be a principal residence",
      "An energy evaluation must be completed before the work starts",
    ],
  },
  "logisvert-hydro": {
    nom: "LogisVert - Efficient heat pump",
    organisme: "Hydro-Quebec",
    montant_affiche: "Up to $6,700",
    description:
      "Financial assistance for buying and installing an ENERGY STAR certified central or mini-split heat pump. Amounts vary by output at -8C.",
    conditions: [
      "You must be a Hydro-Quebec customer",
      "The heat pump must appear on Hydro-Quebec's recognized equipment list",
      "Installation must be completed by an RBQ-certified contractor",
      "The application must be submitted within 9 months of installation",
    ],
  },
  "reer-subvention-fed": {
    nom: "Home Buyers' Plan (HBP)",
    organisme: "Government of Canada",
    montant_affiche: "Up to $35,000 per person",
    description:
      "Withdraw up to $35,000 from your RRSP tax-free to buy a first home. A couple may withdraw up to $70,000 combined.",
    conditions: [
      "You must qualify as a first-time home buyer",
      "The RRSP must have been open for at least 90 days",
      "Withdrawn amounts must be repaid over 15 years",
    ],
  },
  "credit-tps-fed": {
    nom: "Canada Groceries and Essentials Benefit (CGEB)",
    organisme: "Government of Canada",
    montant_affiche: "Amount calculated by the CRA — verify",
    description:
      "Quarterly tax-free benefit that replaced the GST/HST credit in July 2026. The amount depends on 2025 adjusted family net income and family composition.",
    conditions: [
      "You must live in Canada",
      "You must file an income tax return",
      "You must be 19 or older, or have a spouse/common-law partner or child",
      "Verify the amount using your 2025 adjusted family net income",
    ],
  },
  "ace-fed": {
    nom: "Canada Child Benefit (CCB)",
    organisme: "Government of Canada",
    montant_affiche: "Up to $8,157 per child under age 6 — verify",
    description:
      "A pre-filter for the monthly CCB. The actual amount depends on the children's ages and 2025 adjusted family net income; an application to the CRA is required.",
    conditions: [
      "You must have at least one child under 18",
      "You must live in Canada",
      "You must be primarily responsible for the child's care",
    ],
  },
  "irapvf-qc": {
    nom: "Quebec family allowance",
    organisme: "Retraite Quebec",
    montant_affiche: "Up to $3,068 per child in 2026 — verify",
    description:
      "Quarterly payments by default for eligible Quebec families with children under 18; monthly payments can be requested.",
    conditions: [
      "You must live in Quebec",
      "You must have at least one child under 18",
      "You must be primarily responsible for the child",
    ],
  },
  "subv-auto-elec-qc": {
    nom: "Roulez vert - Electric vehicle rebate",
    organisme: "Transition energetique Quebec",
    montant_affiche: "$500 to $2,000",
    description:
      "Purchase or lease rebate for a new or used electric vehicle. The amount depends on the vehicle category and eligibility rules in force.",
    conditions: [
      "You must live in Quebec",
      "You must buy or lease an eligible electric vehicle",
      "The vehicle's MSRP must stay below the applicable threshold",
      "The current program is scheduled through December 31, 2026",
    ],
  },
  "credit-reno-fed": {
    nom: "Multigenerational Home Renovation Tax Credit",
    organisme: "Government of Canada",
    montant_affiche: "Up to $7,500",
    description:
      "Refundable 15% tax credit on eligible expenses, up to $50,000, to build a secondary suite for a senior or a person with a disability.",
    conditions: [
      "You are creating a secondary unit within an existing home",
      "The new unit is intended for a senior aged 65+ or a person with a disability",
      "Eligible expenses must total at least $500",
    ],
  },
  "sre-fed": {
    nom: "Guaranteed Income Supplement (GIS)",
    organisme: "Service Canada",
    montant_affiche: "Up to $11,000 per year",
    description:
      "Monthly non-taxable payments for low-income seniors who receive Old Age Security. Amounts vary by income and household situation.",
    conditions: [
      "You must be 65 or older",
      "You must receive Old Age Security",
      "Your income must stay under the applicable threshold",
    ],
  },
  "psv-fed": {
    nom: "Old Age Security (OAS)",
    organisme: "Service Canada",
    montant_affiche: "Up to $8,000 per year",
    description:
      "Monthly pension for people aged 65 and over who have lived in Canada for at least 10 years after turning 18.",
    conditions: [
      "You must be 65 or older",
      "You must live in Canada or have lived in Canada previously",
      "You must have at least 10 years of Canadian residence after age 18",
    ],
  },
  "aide-solidarite-qc": {
    nom: "Social assistance",
    organisme: "Government of Quebec",
    montant_affiche: "Up to $12,000 per year",
    description:
      "Last-resort financial support for Quebec residents with little or no employment income and no other available resources.",
    conditions: [
      "You must live in Quebec",
      "You must have little or no income and limited assets",
      "You must be in a documented situation of financial need",
    ],
  },
  "credit-loyer-qc": {
    nom: "Quebec solidarity tax credit",
    organisme: "Revenu Quebec",
    montant_affiche: "Amount determined by Revenu Quebec — verify",
    description:
      "Refundable credit that combines up to three components (sales tax, housing, northern village) based on the 2025 tax return and Schedule D. The amount and payment frequency (annual, quarterly, or monthly) are set by Revenu Quebec, not chosen by the household.",
    conditions: [
      "You must live in Quebec on December 31, 2025",
      "You must file your 2025 tax return, plus Schedule D if the housing or northern village component applies",
      "Have Revenu Quebec verify the amount and payment frequency",
    ],
  },
  "allocation-logement-qc": {
    nom: "Quebec housing allowance",
    organisme: "Revenu Quebec (a Societe d'habitation du Quebec program)",
    montant_affiche: "100, 150 or 170 CAD per month depending on housing-cost ratio",
    description:
      "Monthly housing assistance for low-income renters and owner-occupiers who spend too much of their income on housing.",
    conditions: [
      "You must rent or own-occupy your home in Quebec",
      "You must be aged 50+ or have a dependent child",
      "Your income and savings must be under the program thresholds",
    ],
  },
  "credit-maintien-qc": {
    nom: "Home-support tax credit for seniors",
    organisme: "Revenu Quebec",
    montant_affiche: "Up to $6,000",
    description:
      "Refundable tax credit on eligible expenses that help seniors remain in their homes, such as domestic help or personal care services.",
    conditions: [
      "You must be 70 or older",
      "You must live in Quebec",
      "You must incur eligible expenses for approved support services",
    ],
  },
  "rrq-rentes-qc": {
    nom: "Quebec Pension Plan (QPP) retirement pension",
    organisme: "Retraite Quebec",
    montant_affiche: "Personal amount — verify with Retraite Quebec",
    description:
      "A lead for people who contributed to the QPP in Quebec. The pension may start from age 60 to 72; the amount depends on the participation record and cannot be calculated by this questionnaire.",
    conditions: [
      "You must have contributed to the QPP through work in Quebec",
      "You must be at least 60 years old",
      "You must apply to Retraite Quebec",
    ],
  },
  "subv-bornes-recharge-qc": {
    nom: "Home charging station rebate - Roulez vert",
    organisme: "Transition energetique Quebec",
    montant_affiche: "$600",
    description:
      "Rebate for purchasing and installing a Level 2 home charging station for an electric vehicle.",
    conditions: [
      "You must be a homeowner or renter in Quebec",
      "You must own or be acquiring a plug-in electric vehicle",
      "Installation must be completed by a certified electrician",
    ],
  },
  "chauffez-vert-qc": {
    nom: "Chauffez vert",
    organisme: "Transition energetique Quebec",
    montant_affiche: "$1,000 to $5,000",
    description:
      "Financial assistance for replacing a fossil-fuel heating system with an electric or renewable energy system, including eligible heat pumps.",
    conditions: [
      "You must own a principal residence in Quebec",
      "You must replace an oil, propane, or natural gas heating system",
      "The new system must run on electricity or renewable energy",
      "The work must be completed by an RBQ-certified contractor",
    ],
  },
  "credit-impot-reno-fed": {
    nom: "Home Accessibility Tax Credit",
    organisme: "Government of Canada",
    montant_affiche: "Up to $3,750",
    description:
      "15% tax credit on eligible renovation expenses that improve home accessibility or help an older adult remain safely at home.",
    conditions: [
      "Eligible home renovation expenses must be incurred",
      "The work must improve accessibility or safety at home",
      "The expense ceiling for the credit is $10,000",
    ],
  },
};

export function localizeProgramme(programme: Programme, locale: Locale): Programme {
  if (locale === "fr") {
    return programme;
  }

  const translation = enProgrammeTranslations[programme.id];
  return translation ? { ...programme, ...translation } : programme;
}
