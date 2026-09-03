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
      "du revenu de pension) lorsque le meme claim y etait deja audite. Deux programmes fermes retires " +
      "(chauffez-vert-qc, ferme le 2026-03-31; canada-greener-homes-fed, ferme aux nouvelles demandes depuis " +
      "2024-02) plutot que publies comme actifs. Plusieurs claims corriges (montants SV/SRG/Allocation/SRG-survivant, " +
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
