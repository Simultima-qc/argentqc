import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const retirementGuide2026 = defineVersionedDataset(
  "retirement-guide-2026",
  {
    year: 2026,
    lastUpdated: "2026-04-12",
    status: "estimate",
    sourceNote: "Montants guides et hypotheses editoriales de retraite pour RRQ/RPC 2026.",
    reviewCadence: "quarterly",
  },
  {
    rrqMontantsAge: [
      {
        age: "60 ans",
        montantMoyen: "~490 $/mois",
        montantMax: "~574 $/mois",
        reduction: "-36% vs 65 ans",
        reductionDetail: "7,2%/an x 5 ans = 36% de reduction permanente",
        emoji: "⏰",
        color: "#FEF3C7",
        border: "#FCD34D",
        textColor: "#78350F",
      },
      {
        age: "65 ans",
        montantMoyen: "~766 $/mois",
        montantMax: "~897 $/mois",
        reduction: "Montant de reference",
        reductionDetail: "Aucune reduction ni bonification - montant standard",
        emoji: "✅",
        color: "#ECFDF5",
        border: "#34D399",
        textColor: "#065F46",
      },
      {
        age: "70 ans",
        montantMoyen: "~1 087 $/mois",
        montantMax: "~1 273 $/mois",
        reduction: "+42% vs 65 ans",
        reductionDetail: "8,4%/an x 5 ans = 42% de bonification permanente",
        emoji: "📈",
        color: "#EDE9FE",
        border: "#8B5CF6",
        textColor: "#5B21B6",
      },
    ],
    rrqVsRpc: [
      { aspect: "Qui y cotise ?", rrq: "Tous les travailleurs du Quebec", rpc: "Travailleurs hors Quebec (et bonification RPC2 pour QC depuis 2024)" },
      { aspect: "Taux de cotisation 2026", rrq: "5,9% employe + 5,9% employeur (jusqu'a 68 500 $)", rpc: "5,95% (base) + 4% (bonification) - hors Quebec" },
      { aspect: "Age de debut", rrq: "60 a 70 ans au choix", rpc: "60 a 70 ans au choix" },
      { aspect: "Montant maximum 2026", rrq: "~897 $/mois a 65 ans", rpc: "~1 364 $/mois a 65 ans (avec bonification)" },
      { aspect: "Prestation de deces", rrq: "2 500 $ verses a la succession", rpc: "2 500 $ verses a la succession" },
      { aspect: "Rente de conjoint survivant", rrq: "Oui - selon revenu et age", rpc: "Oui - selon revenu et age" },
    ],
    rrqCotisations: [
      { salaire: "30 000 $", cotEmpl: "~1 714 $", cotTot: "~3 428 $", renteEst: "~550 $/mois a 65 ans" },
      { salaire: "50 000 $", cotEmpl: "~2 857 $", cotTot: "~5 714 $", renteEst: "~700 $/mois a 65 ans" },
      { salaire: "68 500 $+", cotEmpl: "~3 891 $", cotTot: "~7 782 $", renteEst: "~897 $/mois a 65 ans (max)" },
    ],
    rrqHighlights: [
      { val: "68 500 $", label: "Salaire cotisable max. 2026" },
      { val: "5,9%", label: "Taux de cotisation (employe)" },
      { val: "40 ans", label: "Meilleures annees retenues" },
    ],
  }
);

export const rrqMontantsAge2026 = retirementGuide2026.values.rrqMontantsAge;
export const rrqVsRpc2026 = retirementGuide2026.values.rrqVsRpc;
export const rrqCotisations2026 = retirementGuide2026.values.rrqCotisations;
export const rrqHighlights2026 = retirementGuide2026.values.rrqHighlights;
