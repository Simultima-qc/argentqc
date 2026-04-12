import type { Programme } from "@/types";
import type { Locale } from "@/i18n/routing";

type ProgrammeTranslation = Pick<
  Programme,
  "nom" | "organisme" | "montant_affiche" | "description" | "conditions"
>;

const enProgrammeTranslations: Record<string, ProgrammeTranslation> = {
  "renoclimat-qc": {
    nom: "RenoClimat",
    organisme: "Transition energetique Quebec",
    montant_affiche: "$100 to $10,000",
    description:
      "Grants for improving your home's energy efficiency, including insulation, windows, doors, heat pumps, and related upgrades.",
    conditions: [
      "You must own a principal residence in Quebec",
      "The home must have been built before 2012",
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
    nom: "GST/HST credit",
    organisme: "Government of Canada",
    montant_affiche: "Up to $700 per year",
    description:
      "Quarterly tax-free payments that help individuals and modest-income families recover part of the GST/HST they pay.",
    conditions: [
      "You must live in Canada",
      "You must file an income tax return",
      "You must be 19 or older, or have a spouse/common-law partner or child",
    ],
  },
  "ace-fed": {
    nom: "Canada Child Benefit (CCB)",
    organisme: "Government of Canada",
    montant_affiche: "Up to $7,787 per child per year",
    description:
      "A monthly tax-free payment for families raising children under 18, based on adjusted family income.",
    conditions: [
      "You must have at least one child under 18",
      "You must live in Canada",
      "You must be primarily responsible for the child's care",
    ],
  },
  "irapvf-qc": {
    nom: "Quebec family allowance",
    organisme: "Retraite Quebec",
    montant_affiche: "Up to $2,782 per child per year",
    description:
      "Monthly payments for Quebec families with children under 18. This is paid in addition to the Canada Child Benefit.",
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
    montant_affiche: "$150 to $2,000",
    description:
      "Refundable tax credit that combines support related to sales tax and housing costs. It may be paid monthly or annually.",
    conditions: [
      "You must live in Quebec",
      "Your family income must remain under the applicable thresholds",
      "You must file a Quebec income tax return",
    ],
  },
  "allocation-logement-qc": {
    nom: "Quebec housing allowance",
    organisme: "Societe d'habitation du Quebec",
    montant_affiche: "Up to $170 per month",
    description:
      "Monthly housing assistance for low-income renters who spend too much of their income on rent.",
    conditions: [
      "You must rent your home in Quebec",
      "You must be aged 50+ or have a dependent child",
      "Your annual gross income must be under the program thresholds",
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
