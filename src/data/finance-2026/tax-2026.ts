import { defineVersionedDataset } from "@/data/finance-2026/schema";

export const taxGuide2026 = defineVersionedDataset(
  "tax-guide-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-03",
    status: "official",
    sourceNote:
      "Revalide le 2026-09-03 (issue #45, corrige le meme jour suite a une revue independante de la PR #46 exigeant des sources primaires precises). Acces HTTP direct a canada.ca/revenuquebec.ca bloque par la politique reseau de cet environnement (EGRESS_BLOCKED, teste explicitement sur canada.ca, revenuquebec.ca, quebec.ca, laws-lois.justice.gc.ca et legisquebec.gouv.qc.ca lors de cette revalidation) : chaque claim materiel ci-dessous est neanmoins rattache a l'URL primaire exacte (ARC/Revenu Quebec/Justice Canada) confirmee via son propre contenu indexe (recherche ciblee site:), et non plus a une simple convergence de sources secondaires. Voir le ledger complet claim/URL primaire dans le rapport durable de l'issue #45. Paiement du solde Revenu Quebec = 30 avril 2026 (revenuquebec.ca/.../solde-dimpot-a-payer). Penalite mensuelle Revenu Quebec plafonnee a 12 mois (revenuquebec.ca/.../penalites-pour-retard). Recidive Revenu Quebec: aucune source primaire ne confirme un mecanisme identique a celui de l'ARC (la seule penalite de recidive/non-conformite documentee par Revenu Quebec, revenuquebec.ca/.../penalite-pour-non-production, est structurellement differente - 25$/jour, max. 2500$ - donc le claim a ete retire plutot que republie sans preuve). Fiducie: 90 jours apres la fin de l'annee d'imposition de la fiducie (canada.ca/.../declaration-t3/produire-declaration-fiducie/quand-produire). REER 2025: 2 mars 2026 (canada.ca/.../important-dates-rrsp-rrif-rdsp). T4/RL-1: dernier jour de fevrier, reporte au 2 mars 2026 car le 28 fevrier 2026 est un samedi (canada.ca, guide de l'employeur RC4120). IMPOTNET (ARC) et ImpotNet Quebec: 23 fevrier 2026 (canada.ca, page IMPOTNET + conseil fiscal 2026 'Tax season starts on February 23'; revenuquebec.ca, communique du 2026-02-23). Interets ARC: taux prescrit trimestriel reel, 7% aux 4 trimestres de 2026 (canada.ca/.../prescribed-interest-rates/2026-q1 a q4). Interets Revenu Quebec: taux prescrit trimestriel distinct de celui de l'ARC (revenuquebec.ca/.../taux-dinteret-sur-les-creances). Paliers/abattement du calculateur fiscal 2026 (tax-calculator.ts) revalides et confirmes inchanges: paliers federaux et indexation 2,0% (canada.ca, rajustement des montants par indexation), paliers Quebec et indexation 2,05% (revenuquebec.ca, principaux changements 2026 - trousse employeur), abattement Quebec 16,5% (canada.ca, T4127-JAN 122e edition, deja cite dans l'en-tete de tax-calculator.ts).",
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
        recidive: "Non confirme par une source primaire distincte de celle de l'ARC",
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
