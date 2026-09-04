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
    lastUpdated: "2026-09-03",
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
      "credit-tps-fed) restent proteges par des guardrails dedies dans check-seo.mjs independamment de cette date.",
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
