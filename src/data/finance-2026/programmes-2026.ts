import rawProgrammes from "@/data/programmes.json";
import { assertUniqueIds, defineVersionedDataset } from "@/data/finance-2026/schema";
import type { Programme } from "@/types";

const programmes = rawProgrammes as Programme[];

for (const programme of programmes) {
  if (!programme.id || !programme.nom || !programme.organisme || !programme.montant_affiche) {
    throw new Error("programmes-2026: missing required programme fields.");
  }
}

assertUniqueIds(
  "programmes-2026",
  programmes.map((programme) => programme.id)
);

export const programmesDataset2026 = defineVersionedDataset(
  "programmes-2026",
  {
    year: 2026,
    lastUpdated: "2026-09-05",
    status: "editorial",
    sourceNote:
      "Revalidation source-backed reelle des claims materiels de programmes.json (issue #51, 2026-09-03): " +
      "inventaire complet des programmes, verification contre des sources gouvernementales officielles ou " +
      "reutilisation des sources de verite deja gouvernees du depot (SV/SRG, RRQ, AFE, ACE, ACEBE, credit " +
      "solidarite, frais de garde, credit combine age/personne vivant seule/revenus de retraite, fractionnement " +
      "du revenu de pension) lorsque le meme claim y etait deja audite. Un programme ferme retire " +
      "(canada-greener-homes-fed, ferme aux nouvelles demandes depuis 2024-02) plutot que publie comme actif. " +
      "chauffez-vert-qc corrige suite a la revue independante de la PR #52 (2026-09-03): la premiere version de " +
      "cette PR l'avait retire integralement, mais le volet distinct 'Passage a la bienergie electricite-gaz " +
      "naturel' reste actif depuis le 2026-04-01 (administre par Energir); seul le volet mazout/propane est " +
      "ferme (2026-03-31) - l'entree est desormais explicitement rebornee a ce volet actif. Plusieurs autres " +
      "claims corriges (montants SV/SRG/Allocation/SRG-survivant, " +
      "RAP releve a 60 000$, credits fiscaux au taux federal 2026 de 14%, credit personnes aidantes restructure, " +
      "Roulez vert reduit a 2 000$/1 000$ avant sa fin le 2026-12-31, etc.). Accès direct bloque (EGRESS_BLOCKED) " +
      "vers la plupart des domaines gouvernementaux dans cet environnement: verification par recherche web ciblee " +
      "recoupee sur plusieurs sources, comme pour les audits precedents (#34, #41, #43). Plusieurs claims restent " +
      "explicitement marques incertains dans les descriptions individuelles (ex.: chauffe-eau-efficace-hq, " +
      "recuperateur-chaleur-hq, prafr-shq, taux exact 2026 de certains credits federaux de renovation) faute de " +
      "confirmation directe suffisante; une revalidation directe des pages officielles est recommandee des qu'un " +
      "acces reseau le permettra. Les 3 programmes a plus haut risque (credit-loyer-qc, credit-frais-garde-qc, " +
      "credit-tps-fed) restent proteges par des guardrails dedies dans check-seo.mjs independamment de cette date. --- " +
      "Revalidation du 2026-09-05 (issue #88, residu documente de l'issue #86/PR #87): ajout de l'entree federale " +
      "credit-frais-medicaux-fed (absente du catalogue) et correction de credit-frais-medicaux-qc, jusqu'ici a " +
      "50$-400$ - une fourchette fixe fabriquee, incompatible avec sa propre description 'sans plafond en dollars " +
      "fixe'. WebFetch reste EGRESS_BLOCKED sur canada.ca et revenuquebec.ca (confirme de nouveau cette passe); " +
      "verification par recherche web convergente. Federal (lignes 33099/33199, ARC): confirme taux 15% et seuil " +
      "'le moindre de 2 834$ ou 3% du revenu net' pour l'annee d'imposition 2025 (derniere valeur publiee par " +
      "l'ARC au moment de cette revalidation) - l'ancien texte de aide-lunettes-quebec citait '2 635$ en 2026', " +
      "qui est en realite le seuil de l'annee d'imposition 2023 mal date; le seuil indexe 2026 n'est pas encore " +
      "publie. URL canada.ca mise a jour vers le chemin confirme litteralement par une source qui reflete le site " +
      "(lignes-33099-33199-frais-medicaux-admissibles-vous-pouvez-demander-votre-declaration-revenus.html), l'ancien " +
      "chemin (ligne-33099-33199-depenses-admissibles-frais-medicaux.html) n'ayant pu etre confirme. Quebec (ligne " +
      "381, Revenu Quebec): confirme taux 20% sur les frais excedant 3% du revenu familial net, sans seuil fixe en " +
      "dollars (a la difference du federal) - la description existante etait deja correcte, seuls montant_min/max " +
      "(50$-400$) la contredisaient et sont corriges a 0$/0$ selon la convention deja etablie dans ce catalogue pour " +
      "les credits a formule non plafonnee (ex. credit-tps-fed, credit-loyer-qc: 'Montant ... - a verifier'). Fait " +
      "specifique 2026 ajoute a la description: depuis le 2026-01-01, les frais payes aux homeopathes, " +
      "naturopathes, osteopathes et phytotherapeutes ne sont plus admissibles au credit quebecois. URL " +
      "revenuquebec.ca corrigee vers /fr/citoyens/credits-dimpot/frais-medicaux/ (confirmee via plusieurs resultats " +
      "de recherche convergents), l'ancien chemin /credit-dimpot-pour-frais-medicaux/ n'ayant pu etre reconfirme. " +
      "Un credit remboursable quebecois distinct (ligne 462 point 1, travailleurs a faible revenu, taux 25%, " +
      "plafond ~1 500$ indexe, reduit des 28 335$ de revenu familial net) existe reellement mais represente un " +
      "programme different de credit-frais-medicaux-qc; non ajoute au catalogue, hors mandat de l'issue #88. " +
      "aide-lunettes-quebec/page.tsx source desormais ces deux entrees via getProgrammeFromCatalogue, fermant le " +
      "dernier residu verrouille par programme-catalogue-drift.test.mjs depuis l'issue #86. --- " +
      "Reponse a la revue independante NO-GO du 2026-09-05 (issue #88, 2e passe): 2 findings bloquants souleves, " +
      "1 confirme et corrige, 1 rejete avec sources apres contre-verification independante. Finding 1 (federal 15% " +
      "-> 14%) CONFIRME et CORRIGE: le premier taux d'imposition federal - auquel les credits non remboursables " +
      "(dont les frais medicaux, lignes 33099/33199) sont legalement arrimes - est passe de 15% a 14,5% pour 2025 " +
      "puis 14% pour 2026 et les annees suivantes (Ministere des Finances du Canada, Report on the Impact of " +
      "Reducing the Lowest Marginal Personal Income Tax Rate on Non-Refundable Tax Credits, confirme egalement par " +
      "les taux d'imposition 2026 de l'ARC et par KPMG); la revalidation du 2026-09-05 (1re passe) avait manque ce " +
      "changement en reconduisant le taux historique de 15% sans le revalider specifiquement pour 2026. Description " +
      "de credit-frais-medicaux-fed corrigee en consequence. Finding 2 (Quebec ligne 381, 20% -> 14%) REJETE apres " +
      "verification: 3 sources independantes et recentes (annee d'imposition 2025), dont la page d'aide officielle " +
      "de Revenu Quebec elle-meme pour la ligne 381, le guide specialise de la Chaire en fiscalite et en finances " +
      "publiques de l'Universite de Sherbrooke (fiche dediee 'credit_frais_medicaux_2025_VF', datee 2025) et le " +
      "Planiguide fiscal de Raymond Chabot Grant Thornton, confirment toutes un taux de 20% specifique a ce credit, " +
      "sans mention d'un changement a 14%. La reforme quebecoise de 2017 qui a arrime plusieurs credits non " +
      "remboursables usuels (montant personnel de base, credit en raison de l'age, etc.) au premier taux du bareme " +
      "(alors 16%, aujourd'hui 14%) ne semble pas s'appliquer au credit pour frais medicaux de la ligne 381, qui " +
      "conserve son propre taux fixe de 20% distinct de ce mecanisme - une hypothese coherente avec le fait, deja " +
      "documente avant cette revue, que ce credit n'a pas de seuil fixe en dollars contrairement aux credits " +
      "'arrimes au bareme'. La source citee par la revue (statistiques fiscales detaillees du ministere des " +
      "Finances du Quebec classant 'Frais medicaux' a 14%) n'a pas pu etre recuperee directement (WebFetch " +
      "EGRESS_BLOCKED sur budget.finances.gouv.qc.ca) ni retrouvee de maniere verifiable par recherche web; en cas " +
      "de contradiction persistante, la page d'aide officielle Revenu Quebec de la ligne 381 elle-meme fait autorite " +
      "et prevaut. montant_affiche/description de credit-frais-medicaux-qc INCHANGES (20% maintenu). Un acces " +
      "reseau direct a budget.finances.gouv.qc.ca permettrait de trancher cette divergence avec certitude si elle " +
      "est reiteree.",
    reviewCadence: "quarterly",
    nextReviewAt: "2026-12-01",
    criticality: "medium",
  },
  programmes
);

export const programmes2026 = programmesDataset2026.values;

// Lets SEO landing pages that still keep a local Programme[] literal (see
// SeoProgrammesPage.tsx) source individual entries directly from the
// governed catalogue instead of hand-copying montant_max/montant_affiche,
// so those entries cannot drift from src/data/programmes.json (issue #69).
export function getProgrammeFromCatalogue(id: string): Programme {
  const programme = programmes2026.find((candidate) => candidate.id === id);
  if (!programme) {
    throw new Error(`programmes-2026: no programme with id "${id}" in the catalogue.`);
  }
  return programme;
}
