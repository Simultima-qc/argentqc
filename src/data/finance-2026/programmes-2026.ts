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
    lastUpdated: "2026-04-12",
    status: "editorial",
    sourceNote:
      "Dataset editorial des programmes 2026, a maintenir a partir des pages officielles et hypotheses internes. " +
      "Limite connue (issue #27/#28, P2): ce champ lastUpdated decrit le wrapper et n'est pas recalcule depuis le " +
      "contenu reel de programmes.json; ce fichier a ete modifie plus recemment que cette date sans que ce champ le " +
      "reflete. Les 3 programmes a plus haut risque (credit-loyer-qc, credit-frais-garde-qc, credit-tps-fed) restent " +
      "proteges par des guardrails dedies dans check-seo.mjs independamment de cette date.",
    reviewCadence: "monthly",
    nextReviewAt: "2026-05-12",
    criticality: "medium",
  },
  programmes
);

export const programmes2026 = programmesDataset2026.values;
