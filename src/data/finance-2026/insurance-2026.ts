import { defineVersionedDataset } from "@/data/finance-2026/schema";

export interface InsuranceEstimatorCarrier2026 {
  nom: string;
  emoji: string;
  type: string;
  prix_base: [number, number];
  url: string;
  /**
   * false = le prix (prix_base) et l'URL de cet assureur n'ont PAS ete
   * confirmes contre une source officielle primaire lors de la derniere
   * revalidation (issue #49) : a traiter comme une approximation
   * editoriale, pas comme un tarif garanti. Meme convention que
   * internet-offers-2026 (issue #47). Doit passer a true uniquement quand
   * une revalidation ulterieure confirme reellement le chiffre contre la
   * page officielle primaire de l'assureur (WebFetch est reste
   * EGRESS_BLOCKED sur tous les domaines d'assureurs testes cette passe).
   */
  termesVerifies: boolean;
}

export const insuranceComparator2026 = defineVersionedDataset(
  "insurance-comparator-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-03",
    status: "estimate",
    sourceNote:
      "Revalidation source-backed du 2026-09-03 (issue #49, suite au re-baseline #31). WebFetch direct est reste bloque pour tous les domaines testes cette passe (EGRESS_BLOCKED confirme sur lapersonnelle.com, beneva.ca, promutuel.ca, caaquebec.com et gaa.qc.ca) : aucune page officielle d'assureur n'a pu etre recuperee directement, comme deja documente pour internet-offers-2026 (issue #47). Verification effectuee via recherche web convergente (requetes site:<domaine> par assureur/produit); voir le rapport durable de l'issue #49 pour le detail assureur par assureur, incluant les sources consultees. Corrections appliquees : (1) 'SSQ / Beneva' renomme 'Beneva' sur les 2 lignes (habitation et auto) - SSQ Assurance a fusionne avec La Capitale sous la marque unique Beneva des le 1er janvier 2023, la mention SSQ n'est plus defendable en 2026; (2) URLs corrigees pour Desjardins (nouveau format /fr/assurances/....html confirme par recherche indexee), CAA-Quebec (nouveau chemin /fr/assurances/... au pluriel; l'ancien /fr/assurance/... au singulier n'apparait plus), Beneva (page de soumission unifiee auto+habitation lp.beneva.ca/fr/assurances/obtenez-une-soumission) et Promutuel (migration de domaine confirmee vers promutuelassurance.ca - promutuel.ca n'apparait plus dans aucun resultat de recherche); (3) URL Intact laissee INCHANGEE malgre une forte suspicion d'obsolescence (le site a manifestement restructure ses chemins vers /fr/assurance-particuliers/..., confirme par plusieurs sous-pages indexees) car aucune page de destination exacte n'a pu etre confirmee litteralement dans les resultats de recherche - mieux vaut une URL non reconfirmee mais deja documentee qu'une URL inventee; a revalider en priorite des qu'un acces reseau direct est possible; (4) prix habitation (prix_base, avant multiplicateurs) INCHANGES - recoupes avec succes contre plusieurs sources de marche quebecoises 2026 convergentes (Sonnet, HelloSafe, Assur360, Gendron) : locataire ~29-30$/mois, proprietaire ~82-108$/mois, condo ~45-57$/mois, tous dans la fourchette couverte par les bases actuelles combinees aux multiplicateurs statut existants (proprietaire 2.8x, condo 1.6x); (5) prix auto (prix_base) CORRIGES A LA BAISSE d'environ 20% (ex. Desjardins 95-140$ -> 76-112$/mois) - la moyenne precedente (~115$/mois soit ~1377$/an au point median tous assureurs confondus) depassait significativement les moyennes 2025-2026 convergentes trouvees pour le marche quebecois : Groupement des assureurs automobiles (GAA, autorite de reference du secteur) ~1006$/an pour 2025 (volet dommages prive) + ~66$/an SAAQ (volet public), KBD Insurance ~1045$/an debut 2026, autres agregateurs entre 850$ et 1352$/an selon la source; la nouvelle moyenne calculee (~1102$/an) se situe dans cette fourchette convergente. Aucun assureur ne publie de grille tarifaire officielle fixe (la prime automobile ou habitation est toujours individualisee selon le dossier), donc ce recalibrage reste une approximation editoriale ancree sur des statistiques de marche agregees et non une confirmation chiffre par chiffre aupres de chaque assureur; (6) multiplicateur regional Montreal (auto) ajuste de 1.30 a 1.35 pour refleter l'ecart regional cite par plusieurs sources convergentes ('primes a Montreal environ 35% superieures a la moyenne provinciale'). Chaque assureur porte desormais un champ termesVerifies: false (meme convention qu'internet-offers-2026/issue #47) : aucun prix ni aucune URL n'a ete confirme contre la page officielle primaire de l'assureur cette passe (recherche web secondaire uniquement, acces direct bloque) - l'avertissement correspondant est desormais affiche visiblement sur chaque carte du comparateur (non localise et localise), pas seulement documente ici. status reste 'estimate' (jamais 'official') : ce comparateur n'a jamais pretendu publier des primes officielles, seulement des fourchettes editoriales indicatives avant l'obtention d'une vraie soumission personnalisee - le libelle 'Estimation' et l'avertissement du bas de page etaient deja corrects et restent inchanges.",
    reviewCadence: "monthly",
    nextReviewAt: "2026-10-03",
    criticality: "medium",
  },
  {
    habitation: {
      assureurs: [
        { nom: "Desjardins", emoji: "🏦", type: "Mutuelle / Direct", prix_base: [28, 45], url: "https://www.desjardins.com/fr/assurances/habitation.html", termesVerifies: false },
        { nom: "Intact", emoji: "🏢", type: "Direct / Courtiers", prix_base: [30, 50], url: "https://www.intact.ca/fr/assurance-habitation/", termesVerifies: false },
        { nom: "Belair Direct", emoji: "💻", type: "Direct en ligne", prix_base: [25, 42], url: "https://www.belairdirect.com/fr/assurance-habitation.html", termesVerifies: false },
        { nom: "CAA-Quebec", emoji: "🚘", type: "Membres CAA", prix_base: [27, 44], url: "https://www.caaquebec.com/fr/assurances/habitation", termesVerifies: false },
        { nom: "Beneva", emoji: "🌿", type: "Mutuelle", prix_base: [26, 43], url: "https://lp.beneva.ca/fr/assurances/obtenez-une-soumission", termesVerifies: false },
        { nom: "La Personnelle", emoji: "🎓", type: "Groupes / Syndicats", prix_base: [24, 40], url: "https://www.lapersonnelle.com/assurances/habitation.html", termesVerifies: false },
      ] satisfies InsuranceEstimatorCarrier2026[],
      multiplicateurs: {
        statut: { locataire: 1.0, proprietaire: 2.8, condo: 1.6 },
        region: { montreal: 1.15, quebec: 1.0, laval: 1.05, rive_sud: 1.08, region: 0.9 },
        biens: { bas: 0.85, moyen: 1.0, eleve: 1.25, tres_eleve: 1.55 },
      },
    },
    auto: {
      assureurs: [
        { nom: "Desjardins", emoji: "🏦", type: "Mutuelle / Direct", prix_base: [76, 112], url: "https://www.desjardins.com/fr/assurances/auto.html", termesVerifies: false },
        { nom: "Intact", emoji: "🏢", type: "Direct / Courtiers", prix_base: [80, 124], url: "https://www.intact.ca/fr/assurance-auto/", termesVerifies: false },
        { nom: "Belair Direct", emoji: "💻", type: "Direct en ligne", prix_base: [70, 108], url: "https://www.belairdirect.com/fr/assurance-auto.html", termesVerifies: false },
        { nom: "CAA-Quebec", emoji: "🚘", type: "Membres CAA", prix_base: [74, 110], url: "https://www.caaquebec.com/fr/assurances/vehicule/assurance-auto", termesVerifies: false },
        { nom: "Beneva", emoji: "🌿", type: "Mutuelle", prix_base: [72, 106], url: "https://lp.beneva.ca/fr/assurances/obtenez-une-soumission", termesVerifies: false },
        { nom: "Promutuel", emoji: "🌾", type: "Mutuelle (regions)", prix_base: [68, 102], url: "https://www.promutuelassurance.ca/fr/soumission-auto-lb", termesVerifies: false },
      ] satisfies InsuranceEstimatorCarrier2026[],
      multiplicateurs: {
        age: { jeune: 2.2, jeune_adulte: 1.35, adulte: 1.0, senior: 1.05 },
        vehicule: { berline: 1.0, vus_compact: 1.12, vus_grand: 1.28, camionnette: 1.22, electrique: 1.08 },
        region: { montreal: 1.35, quebec: 1.0, laval: 1.18, rive_sud: 1.12, region: 0.88 },
        usage: { faible: 0.95, moyen: 1.0, eleve: 1.15 },
      },
    },
  }
);

export const assureursHabitation2026 = insuranceComparator2026.values.habitation.assureurs;
export const assureursAuto2026 = insuranceComparator2026.values.auto.assureurs;
export const multStatutHabitation2026 = insuranceComparator2026.values.habitation.multiplicateurs.statut;
export const multRegionHabitation2026 = insuranceComparator2026.values.habitation.multiplicateurs.region;
export const multBiensHabitation2026 = insuranceComparator2026.values.habitation.multiplicateurs.biens;
export const multAgeAuto2026 = insuranceComparator2026.values.auto.multiplicateurs.age;
export const multVehiculeAuto2026 = insuranceComparator2026.values.auto.multiplicateurs.vehicule;
export const multRegionAuto2026 = insuranceComparator2026.values.auto.multiplicateurs.region;
export const multUsageAuto2026 = insuranceComparator2026.values.auto.multiplicateurs.usage;
