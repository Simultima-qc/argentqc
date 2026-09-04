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
    lastUpdated: "2026-09-04",
    status: "estimate",
    sourceNote:
      "Revalidation source-backed du 2026-09-03 (issue #49, suite au re-baseline #31), corrigee le 2026-09-03 suite a la revue independante CHANGES REQUESTED sur la PR #50. WebFetch direct est reste bloque pour tous les domaines testes cette passe (EGRESS_BLOCKED confirme sur lapersonnelle.com, beneva.ca, promutuel.ca, caaquebec.com et gaa.qc.ca) : aucune page officielle d'assureur n'a pu etre recuperee directement, comme deja documente pour internet-offers-2026 (issue #47). Verification effectuee via recherche web convergente (requetes site:<domaine> par assureur/produit); voir le rapport durable de l'issue #49 pour le detail assureur par assureur, incluant les sources consultees. Corrections retenues apres revue : (1) 'SSQ / Beneva' renomme 'Beneva' sur les 2 lignes (habitation et auto) - SSQ Assurance a fusionne avec La Capitale sous la marque unique Beneva des le 1er janvier 2023, la mention SSQ n'est plus defendable en 2026; (2) URLs corrigees pour Desjardins (nouveau format /fr/assurances/....html) et CAA-Quebec (nouveau chemin /fr/assurances/... au pluriel), toutes deux confirmees bonnes par la revue independante; Beneva (habitation et auto) et Promutuel (auto) restent/reviennent sur leurs pages produit officielles stables (beneva.ca/fr/assurance-habitation, beneva.ca/fr/assurance-auto, promutuelassurance.ca/fr/assurance-auto - la migration de domaine promutuel.ca -> promutuelassurance.ca reste correcte, seul le chemin exact a ete corrige par la revue independante, qui disposait d'un acces reseau que cette session n'avait pas); (3) URL Intact laissee INCHANGEE malgre une forte suspicion d'obsolescence (le site a manifestement restructure ses chemins vers /fr/assurance-particuliers/...) car aucune page de destination exacte n'a pu etre confirmee litteralement dans les resultats de recherche - a revalider en priorite des qu'un acces reseau direct est possible; (4) prix habitation (prix_base, avant multiplicateurs) INCHANGES - recoupes avec succes contre plusieurs sources de marche quebecoises 2026 convergentes (Sonnet, HelloSafe, Assur360, Gendron) : locataire ~29-30$/mois, proprietaire ~82-108$/mois, condo ~45-57$/mois, tous dans la fourchette couverte par les bases actuelles combinees aux multiplicateurs statut existants; (5) prix auto (prix_base) : la 1re passe de cette issue avait recalibre les 6 fourchettes a la baisse d'environ 20% en ancrant sur une moyenne de marche agregee (GAA ~1006$/an 2025, KBD ~1045$/an debut 2026, autres agregateurs 850$-1352$/an). La revue independante a REJETE ce recalibrage : une statistique provinciale/sectorielle agregee ne justifie pas de fabriquer six fourchettes precises propres a Desjardins, Intact, Belair Direct, CAA-Quebec, Beneva et Promutuel sans source par assureur. Les 6 fourchettes prix_base auto sont donc REVERTIES a leurs valeurs anterieures a l'issue #49 (ex. Desjardins 95-140$/mois). Elles restent des estimations editoriales non source-backed par assureur - ni confirmees ni infirmees par cette revalidation - et non un recalibrage 'corrige'; l'incertitude reste explicite via termesVerifies: false et l'avertissement visible sur chaque carte, plutot que via un chiffre invente presente comme corrige; (6) multiplicateur regional Montreal (auto) ajuste de 1.30 a 1.35, non conteste par la revue independante : il repose sur un seul fait regional partage (source convergente : 'primes a Montreal environ 35% superieures a la moyenne provinciale'), pas sur six valeurs par assureur fabriquees, donc distinct du probleme signale au point (5). Chaque assureur porte un champ termesVerifies: false (meme convention qu'internet-offers-2026/issue #47) : aucun prix ni aucune URL n'a ete confirme contre la page officielle primaire de l'assureur par cette session (recherche web secondaire uniquement, acces direct bloque) - l'avertissement correspondant est affiche visiblement sur chaque carte du comparateur (non localise et localise), pas seulement documente ici. status reste 'estimate' (jamais 'official'). --- Revalidation du 2026-09-04 (issue #76, proactive avant l'echeance nextReviewAt du 2026-10-03). WebFetch confirme de nouveau totalement EGRESS_BLOCKED (meme sur un domaine neutre, example.com). Un outil de recherche web (indisponible a la passe #49) a permis cette fois de verifier litteralement les URLs (elles apparaissent telles quelles dans les liens de resultats de recherche, contrairement aux prix qui sont reformules/synthetises et se sont averes peu fiables - voir la note equivalente sur internet-offers-2026 datee du meme jour pour le detail de cette limite). Resultats URL par ligne : Desjardins (habitation.html et auto.html), Belair Direct (assurance-habitation.html et assurance-auto.html), CAA-Quebec (assurances/habitation et assurances/vehicule/assurance-auto) et La Personnelle (assurances/habitation.html) sont CONFIRMEES INCHANGEES, chacune retrouvee de maniere litterale et exacte dans au moins un resultat de recherche direct. Intact (habitation) est CORRIGEE : plusieurs requetes independantes retrouvent des pages sous /fr/assurance-particuliers/habitation/... (notamment .../habitation/conseils et .../habitation/assurance-maison/conseils) alors qu'aucune requete, sur une dizaine de formulations, ne retrouve la page actuellement enregistree /fr/assurance-habitation/ ; ceci confirme la suspicion documentee par la revue independante de l'issue #49. URL mise a jour vers https://www.intact.ca/fr/assurance-particuliers/habitation (page hub, parallele a la version anglaise /en/personal-insurance/home). Intact (auto) reste INCHANGEE : la meme restructuration de site est vraisemblable, mais le hub anglais correspondant est /en/personal-insurance/vehicle (pas /auto/), donc le segment francais exact ('auto' vs 'vehicule') ne peut pas etre devine sans confirmation directe -> non verifiable avec confiance, signalee comme probablement obsolete et prioritaire pour la prochaine passe avec acces reseau direct. Beneva (habitation, auto) et Promutuel (auto) restent INCHANGEES : une dizaine de requetes, y compris avec le chemin /fr/ demande explicitement entre guillemets, ne retournent que les URLs /en/ equivalentes (beneva.ca/en/home-insurance, beneva.ca/en/car-insurance, promutuelassurance.ca/en/car-insurance) sans jamais confirmer NI infirmer litteralement les chemins /fr/ actuellement enregistres ; traite comme un biais d'indexation du moteur de recherche vers la variante anglaise plutot que comme une preuve de rupture, donc PAS de correction vers une URL /en/ qui degraderait l'experience francophone sans certitude -> non verifiable avec confiance. prix_base (12 lignes, habitation et auto) : AUCUNE recherche de prix n'a ete tentee cette passe, la fiabilite des reponses synthetisees pour des prix precis s'etant averee insuffisante sur le domaine comparable internet-offers-2026 le meme jour, et la revue independante de l'issue #49 ayant deja explicitement rejete un recalibrage similaire faute de source par assureur -> valeurs CONSERVEES inchangees, non verifiable avec confiance, termesVerifies reste false sur les 12 lignes. Compte tenu du volume de claims non verifiees avec confiance, nextReviewAt n'est PAS repoussee au-dela de son echeance actuelle : elle est RAPPROCHEE (2026-10-03 -> 2026-09-25) pour forcer une nouvelle tentative rapprochee, idealement avec un acces reseau direct.",
    reviewCadence: "monthly",
    nextReviewAt: "2026-09-25",
    criticality: "medium",
  },
  {
    habitation: {
      assureurs: [
        { nom: "Desjardins", emoji: "🏦", type: "Mutuelle / Direct", prix_base: [28, 45], url: "https://www.desjardins.com/fr/assurances/habitation.html", termesVerifies: false },
        { nom: "Intact", emoji: "🏢", type: "Direct / Courtiers", prix_base: [30, 50], url: "https://www.intact.ca/fr/assurance-particuliers/habitation", termesVerifies: false },
        { nom: "Belair Direct", emoji: "💻", type: "Direct en ligne", prix_base: [25, 42], url: "https://www.belairdirect.com/fr/assurance-habitation.html", termesVerifies: false },
        { nom: "CAA-Quebec", emoji: "🚘", type: "Membres CAA", prix_base: [27, 44], url: "https://www.caaquebec.com/fr/assurances/habitation", termesVerifies: false },
        { nom: "Beneva", emoji: "🌿", type: "Mutuelle", prix_base: [26, 43], url: "https://www.beneva.ca/fr/assurance-habitation", termesVerifies: false },
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
        { nom: "Desjardins", emoji: "🏦", type: "Mutuelle / Direct", prix_base: [95, 140], url: "https://www.desjardins.com/fr/assurances/auto.html", termesVerifies: false },
        { nom: "Intact", emoji: "🏢", type: "Direct / Courtiers", prix_base: [100, 155], url: "https://www.intact.ca/fr/assurance-auto/", termesVerifies: false },
        { nom: "Belair Direct", emoji: "💻", type: "Direct en ligne", prix_base: [88, 135], url: "https://www.belairdirect.com/fr/assurance-auto.html", termesVerifies: false },
        { nom: "CAA-Quebec", emoji: "🚘", type: "Membres CAA", prix_base: [92, 138], url: "https://www.caaquebec.com/fr/assurances/vehicule/assurance-auto", termesVerifies: false },
        { nom: "Beneva", emoji: "🌿", type: "Mutuelle", prix_base: [90, 132], url: "https://www.beneva.ca/fr/assurance-auto", termesVerifies: false },
        { nom: "Promutuel", emoji: "🌾", type: "Mutuelle (regions)", prix_base: [85, 128], url: "https://www.promutuelassurance.ca/fr/assurance-auto", termesVerifies: false },
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
