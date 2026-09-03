import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const taxGuide2026 = defineVersionedDataset(
  "tax-guide-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-03",
    status: "official",
    sourceNote:
      "Revalide le 2026-09-03 (issue #45) par recherche web recoupee sur plusieurs sources independantes convergentes (acces direct canada.ca/revenuquebec.ca bloque par la politique reseau de cet environnement - EGRESS_BLOCKED, comme pour les audits precedents). Corrige: date de paiement du solde Revenu Quebec (30 avril, alignee sur l'ARC), plafond de la penalite mensuelle Revenu Quebec (12 mois, non 20), date limite REER 2025 (2 mars 2026, le 1er mars etant un dimanche), date limite T4/RL-1 (2 mars 2026, le 28 fevrier etant un samedi), ouverture IMPOTNET/ImpotNet Quebec (23 fevrier 2026, non mars), et le taux d'interet ARC (taux prescrit trimestriel reel de 2026 plutot qu'une approximation annuelle fixe). Paliers/taux du calculateur fiscal 2026 (tax-calculator.ts) revalides et confirmes inchanges.",
    reviewCadence: "quarterly",
    nextReviewAt: "2026-12-01",
    criticality: "high",
  },
  {
    datesLimites: [
      { situation: "Particulier salarie", federal: "30 avril 2026", provincial: "30 avril 2026", highlight: true },
      { situation: "Travailleur autonome (ou conjoint autonome)", federal: "15 juin 2026", provincial: "15 juin 2026", highlight: false },
      { situation: "Paiement du solde du", federal: "30 avril 2026", provincial: "30 avril 2026", highlight: true },
      { situation: "Personne decedee (avant novembre 2025)", federal: "30 avril 2026", provincial: "30 avril 2026", highlight: false },
      { situation: "Personne decedee (nov.-dec. 2025)", federal: "6 mois apres le deces", provincial: "6 mois apres le deces", highlight: false },
      { situation: "Fiducie testamentaire", federal: "90 jours apres la fin de l'annee d'imposition de la fiducie", provincial: "90 jours apres la fin de l'annee d'imposition de la fiducie", highlight: false },
    ],
    penalites: [
      {
        organisme: "ARC (federal)",
        emoji: "🍁",
        penaliteBase: "5% du solde du",
        penaliteMensuelle: "+ 1% par mois complet (max. 12 mois)",
        recidive: "10% si recidive dans les 3 ans",
        interets: "Interets composes quotidiennement, au taux prescrit trimestriel de l'ARC (7% pour les 4 trimestres de 2026)",
        couleur: "#DBEAFE",
        couleurTexte: "#1E40AF",
      },
      {
        organisme: "Revenu Quebec (provincial)",
        emoji: "🔵",
        penaliteBase: "5% du solde du",
        penaliteMensuelle: "+ 1% par mois complet (max. 12 mois)",
        recidive: "10% si recidive dans les 3 ans",
        interets: "Interets composes quotidiennement, au taux prescrit trimestriel de Revenu Quebec (distinct de celui de l'ARC)",
        couleur: "#D1FAE5",
        couleurTexte: "#065F46",
      },
    ],
    calendrier: [
      { date: "2 mars 2026", evenement: "Date limite cotisation REER (pour l'annee fiscale 2025)", note: "Deja passee - gardez en tete pour 2027 (le 60e jour, 1er mars 2026, est un dimanche : report au 2 mars)", urgent: false },
      { date: "2 mars 2026", evenement: "Reception des feuillets T4/RL-1 de votre employeur", note: "Delai legal des employeurs reporte au 2 mars 2026 (le 28 fevrier 2026 est un samedi) - verifiez que vous avez bien tout recu avant de produire", urgent: false },
      { date: "23 fevrier 2026", evenement: "Ouverture du service IMPOTNET (ARC) et ImpotNet Quebec", note: "Produisez tot pour recevoir votre remboursement plus vite", urgent: false },
      { date: "30 avril 2026", evenement: "Date limite - salaries et paiement du solde du", note: "Penalites automatiques des le 1er mai si solde non paye", urgent: true },
      { date: "15 juin 2026", evenement: "Date limite - travailleurs autonomes", note: "Le solde du reste payable au 30 avril malgre cette extension", urgent: true },
    ],
  }
);

export const taxDatesLimites2026 = taxGuide2026.values.datesLimites;
export const taxPenalites2026 = taxGuide2026.values.penalites;
export const taxCalendrier2026 = taxGuide2026.values.calendrier;
