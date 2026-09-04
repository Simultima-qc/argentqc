import { defineVersionedDataset } from "@/data/finance-2026/schema";

export interface InternetOffer2026 {
  fournisseur: string;
  initiales: string;
  couleur: string;
  type: "Fibre" | "Cable";
  vitesseDL: number;
  vitesseUL: number;
  prix: number;
  contrat: boolean;
  dureeContrat?: string;
  modemInclus: boolean;
  fraisModem?: number;
  regions: string[];
  url: string;
  /**
   * false = le prix/la vitesse/la disponibilite affiches n'ont PAS ete
   * confirmes contre une source officielle actuelle lors de la derniere
   * revalidation (issue #47) : a traiter comme une reference, pas comme un
   * prix garanti. Doit etre mis a true uniquement quand une revalidation
   * ulterieure confirme reellement le chiffre contre la page officielle du
   * fournisseur.
   */
  termesVerifies: boolean;
}

export const internetComparatorUi2026 = defineVersionedDataset(
  "internet-offers-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-04",
    status: "estimate",
    sourceNote:
      "3e passe de revalidation le 2026-09-03 (issue #47). Historique : la 1re passe a ete rejetee par la revue independante pour avoir avance lastUpdated/nextReviewAt sans correction reelle. La 2e passe a corrige Fizz (modem-routeur et livraison confirmes sans frais -> modemInclus: true, fraisModem retire sur les 2 offres) et retire Cogeco (gamme actuelle structuree autour de la marque fibre 'UltraFibre', sans equivalent direct de l'ancienne offre 'Cable 200 Mbps a 64 $' ni prix confirmable -> offre RETIREE plutot que republiee ou remplacee par un chiffre invente), mais a ete de nouveau jugee insuffisante pour Videotron : le palier '500' avait ete retype/renomme sans corriger le televersement ni le prix, qui restaient ceux de l'ancienne offre '400/20 a 69 $'. WebFetch reste totalement bloque dans cet environnement (EGRESS_BLOCKED, confirme y compris sur en.wikipedia.org et web.archive.org, donc pas specifique a un fournisseur) : aucune page officielle n'a pu etre recuperee directement a aucune des 3 passes. Cette 3e passe corrige neanmoins reellement Videotron a partir d'une source secondaire specialisee et structuree (WhistleOut, comparateur telecom nomme, fiches dediees par forfait) convergeant avec la chaine de revue independante et avec plusieurs agregateurs independants (planhub, internetadvice.ca, topicks.ca, plangenius.ca) sur la meme gamme et les memes prix : 'Videotron Internet 500 | WhistleOut' (whistleout.ca/Internet/Providers/Videotron/Fiber/Internet-400) donne 500/50 Mbps, 75 $/mois, connexion fibre, modem Wifi a 0 $, sans contrat; 'Videotron Internet GIGA | WhistleOut' (whistleout.ca/Internet/Providers/Videotron/Fiber/Internet-Giga et /Cable/Internet-Giga) donne jusqu'a 940 Mbps (arrondi a 1000, palier 'GIGA' de la gamme Internet 100/500/GIGA/2 GIGA/2.5 GIGA selon l'adresse) / 50 Mbps, 80 $/mois, modem inclus, sans contrat. Ces deux offres sont donc corrigees : type Cable -> Fibre (categorisation confirmee par WhistleOut et par la description 'Pure Fibre network' des agregateurs), vitesseUL 20/1000 -> 50/50 (le televersement symetrique 1:1 n'est confirme par les sources que pour les paliers superieurs '2 GIGA'/'2.5 GIGA', pas pour 'GIGA'), prix 69 $/89 $ -> 75 $/80 $. Ces prix sont documentes par au moins deux sources independantes chacun (WhistleOut + agregateur multi-sources ou planhub) et correspondent a des prix de depart pour nouveaux clients/adresses admissibles (conditions explicitement mentionnees par les agregateurs : 'for eligible addresses and new customer offers'), pas necessairement au prix apres promotion ou pour un client existant. modemInclus (true, sans frais) et l'absence de contrat restent confirmes. termesVerifies reste false sur ces 2 offres (et sur les 6 autres) car aucune confirmation directe contre la page officielle primaire de Videotron n'a ete obtenue (source secondaire specialisee, pas primaire) : l'avertissement visible reste donc affiche sur chaque carte du comparateur. Bell, Oxio, TekSavvy : non retouches a cette passe, aucune preuve nouvelle recueillie (paliers Bell 'Fibe 500'/'Fibe Gigabit 1.5' confirmes exister mais prix exact toujours non confirmable). Voir le rapport durable de l'issue #47 (3e passe) pour le tableau complet offre par offre et les sources consultees. --- 4e passe le 2026-09-04 (issue #76, revalidation proactive avant l'echeance nextReviewAt du 2026-10-01). WebFetch confirme de nouveau totalement EGRESS_BLOCKED, y compris sur un domaine neutre (example.com), donc non specifique a un fournisseur telecom. Un outil de recherche web (non disponible aux passes precedentes) a ete essaye comme substitut mais s'est revele lui-meme insuffisamment fiable comme source secondaire cette passe : des requetes repetees sur la meme offre (ex. Bell Fibe 500) ont retourne des prix 'reguliers' mutuellement contradictoires d'un appel a l'autre (79 $, 94,95 $, 100 $, 105 $, 120 $ selon la requete), et une requete a fait remonter notre propre page (argentqc.ca/fr/internet/comparateur) dans les resultats, ce qui interdit d'exclure une circularite avec des agregateurs qui nous auraient deja repris. En consequence, AUCUN prix n'a ete modifie cette passe (aucune valeur de remplacement n'atteint un niveau de confiance suffisant pour remplacer un chiffre existant sans risquer d'en inventer un). Constats retenus, sans correction faute de confirmation suffisante : (1) Bell (Fibe 500 a 79 $/24 mois, Gigabit 1,5 a 99 $/24 mois) - toutes les recherches convergent vers des prix reguliers nettement superieurs (grosso modo 95 $-120 $), aucune ne confirmant litteralement 79 $/99 $ ; signal de derive possible mais aucun remplacement fiable identifie -> a traiter en priorite des qu'un acces direct est possible ; (2) Fizz (200/20 a 47 $, 400/50 a 58 $) - reponses mutuellement incoherentes (une meme reponse hierarchise un palier 200 Mbps plus cher qu'un palier 500 Mbps, incompatible avec la gamme connue) ; (3) Oxio (120/20 a 44 $ + 7 $ modem) - paliers et prix cites divergents d'une requete a l'autre sans jamais correspondre exactement au palier 120 Mbps ; (4) TekSavvy (150/15 a 49 $, modemInclus:false) - plusieurs resultats independants decrivent la gamme cable Quebec de TekSavvy comme 15/30/40/100 Mbps (aucune mention d'un palier '150') et un modem inclus sans frais sur l'ensemble des forfaits, ce qui contredit potentiellement le palier et le champ modemInclus actuels ; signal juge insuffisant pour corriger sans confirmation directe (on ne remplace pas un palier documente par un palier devine), mais retenu comme risque prioritaire distinct pour la prochaine revalidation. Videotron (500 a 75 $, GIGA a 80 $) : les mentions retrouvees restent dans le meme ordre de grandeur (ex. ~78 $/80 $ sur un agregateur), insuffisant pour une confirmation stricte au sens de la convention du dataset mais sans signal de derive materielle -> statu quo. Aucune offre n'est retiree ni ajoutee cette passe. termesVerifies reste false sur les 8 offres. Compte tenu du volume important de claims non verifiees avec confiance cette passe, nextReviewAt n'est PAS repoussee au-dela de son echeance actuelle : elle est au contraire RAPPROCHEE (2026-10-01 -> 2026-09-25) pour forcer une nouvelle tentative rapprochee, idealement avec un acces reseau direct.",
    reviewCadence: "monthly",
    nextReviewAt: "2026-09-25",
    criticality: "medium",
  },
  {
    budgetOptions: [50, 75, 100, 999] as const,
    speedOptions: [
      { val: 30, label: "30 Mbps" },
      { val: 100, label: "100 Mbps" },
      { val: 500, label: "500 Mbps" },
      { val: 1000, label: "1 Gbps" },
    ] as const,
    connectionTypes: ["Tous", "Fibre", "Cable"] as const,
    offers: [
      {
        fournisseur: "Videotron",
        initiales: "VT",
        couleur: "#6D28D9",
        type: "Fibre",
        vitesseDL: 500,
        vitesseUL: 50,
        prix: 75,
        contrat: false,
        modemInclus: true,
        regions: ["Montreal", "Quebec", "Rive-Sud"],
        url: "https://www.videotron.com/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Videotron",
        initiales: "VT",
        couleur: "#6D28D9",
        type: "Fibre",
        vitesseDL: 1000,
        vitesseUL: 50,
        prix: 80,
        contrat: false,
        modemInclus: true,
        regions: ["Montreal", "Quebec"],
        url: "https://www.videotron.com/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Bell",
        initiales: "BL",
        couleur: "#1D4ED8",
        type: "Fibre",
        vitesseDL: 500,
        vitesseUL: 500,
        prix: 79,
        contrat: true,
        dureeContrat: "24 mois",
        modemInclus: true,
        regions: ["Province entiere"],
        url: "https://www.bell.ca/Services_Internet/Acces_Internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Bell",
        initiales: "BL",
        couleur: "#1D4ED8",
        type: "Fibre",
        vitesseDL: 1500,
        vitesseUL: 1000,
        prix: 99,
        contrat: true,
        dureeContrat: "24 mois",
        modemInclus: true,
        regions: ["Province entiere"],
        url: "https://www.bell.ca/Services_Internet/Acces_Internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Fizz",
        initiales: "FZ",
        couleur: "#059669",
        type: "Cable",
        vitesseDL: 200,
        vitesseUL: 20,
        prix: 47,
        contrat: false,
        modemInclus: true,
        regions: ["Montreal", "Quebec"],
        url: "https://fizz.ca/fr/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Fizz",
        initiales: "FZ",
        couleur: "#059669",
        type: "Fibre",
        vitesseDL: 400,
        vitesseUL: 50,
        prix: 58,
        contrat: false,
        modemInclus: true,
        regions: ["Montreal", "Quebec"],
        url: "https://fizz.ca/fr/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "Oxio",
        initiales: "OX",
        couleur: "#D97706",
        type: "Cable",
        vitesseDL: 120,
        vitesseUL: 20,
        prix: 44,
        contrat: false,
        modemInclus: false,
        fraisModem: 7,
        regions: ["Montreal", "Quebec"],
        url: "https://oxio.ca/fr/internet",
        termesVerifies: false,
      },
      {
        fournisseur: "TekSavvy",
        initiales: "TS",
        couleur: "#7C3AED",
        type: "Cable",
        vitesseDL: 150,
        vitesseUL: 15,
        prix: 49,
        contrat: false,
        modemInclus: false,
        regions: ["Montreal"],
        url: "https://www.teksavvy.com/fr/nos-services/internet/",
        termesVerifies: false,
      },
    ] satisfies InternetOffer2026[],
  }
);

export const internetOffers2026 = internetComparatorUi2026.values.offers;
export const internetBudgetOptions2026 = internetComparatorUi2026.values.budgetOptions;
export const internetSpeedOptions2026 = internetComparatorUi2026.values.speedOptions;
export const internetConnectionTypes2026 = internetComparatorUi2026.values.connectionTypes;
