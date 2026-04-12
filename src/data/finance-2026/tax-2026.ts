import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const taxGuide2026 = defineVersionedDataset(
  "tax-guide-2026",
  {
    year: 2026,
    lastUpdated: "2026-04-12",
    status: "official",
    sourceNote: "Dates fiscales 2026 et regles de retard publiees ou resumees pour ARC et Revenu Quebec.",
    reviewCadence: "quarterly",
  },
  {
    datesLimites: [
      { situation: "Particulier salarie", federal: "30 avril 2026", provincial: "30 avril 2026", highlight: true },
      { situation: "Travailleur autonome (ou conjoint autonome)", federal: "15 juin 2026", provincial: "15 juin 2026", highlight: false },
      { situation: "Paiement du solde du", federal: "30 avril 2026", provincial: "1er mai 2026", highlight: true },
      { situation: "Personne decedee (avant novembre 2025)", federal: "30 avril 2026", provincial: "30 avril 2026", highlight: false },
      { situation: "Personne decedee (nov.-dec. 2025)", federal: "6 mois apres le deces", provincial: "6 mois apres le deces", highlight: false },
      { situation: "Fiducie testamentaire", federal: "90 jours apres la fin d'annee", provincial: "90 jours apres la fin d'annee", highlight: false },
    ],
    penalites: [
      {
        organisme: "ARC (federal)",
        emoji: "🍁",
        penaliteBase: "5% du solde du",
        penaliteMensuelle: "+ 1% par mois complet (max. 12 mois)",
        recidive: "10% si recidive dans les 3 ans",
        interets: "Interets composes quotidiennement au taux prescrit (~8%)",
        couleur: "#DBEAFE",
        couleurTexte: "#1E40AF",
      },
      {
        organisme: "Revenu Quebec (provincial)",
        emoji: "🔵",
        penaliteBase: "5% du solde du",
        penaliteMensuelle: "+ 1% par mois complet (max. 20 mois)",
        recidive: "10% si recidive dans les 3 ans",
        interets: "Interets composes quotidiennement au taux prescrit",
        couleur: "#D1FAE5",
        couleurTexte: "#065F46",
      },
    ],
    calendrier: [
      { date: "1er mars 2026", evenement: "Date limite cotisation REER (pour l'annee fiscale 2025)", note: "Deja passee - gardez en tete pour 2027", urgent: false },
      { date: "Fin fevrier 2026", evenement: "Reception des feuillets T4/RL-1 de votre employeur", note: "Verifiez que vous avez bien tout recu avant de produire", urgent: false },
      { date: "Des mars 2026", evenement: "Ouverture du service IMPOTNET (ARC) et ImpotNet Quebec", note: "Produisez tot pour recevoir votre remboursement plus vite", urgent: false },
      { date: "30 avril 2026", evenement: "Date limite - salaries et paiement du solde du", note: "Penalites automatiques des le 1er mai si solde non paye", urgent: true },
      { date: "15 juin 2026", evenement: "Date limite - travailleurs autonomes", note: "Le solde du reste payable au 30 avril malgre cette extension", urgent: true },
    ],
  }
);

export const taxDatesLimites2026 = taxGuide2026.values.datesLimites;
export const taxPenalites2026 = taxGuide2026.values.penalites;
export const taxCalendrier2026 = taxGuide2026.values.calendrier;
