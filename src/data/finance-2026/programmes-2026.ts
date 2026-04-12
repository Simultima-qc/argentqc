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
    sourceNote: "Dataset editorial des programmes 2026, a maintenir a partir des pages officielles et hypotheses internes.",
    reviewCadence: "monthly",
  },
  programmes
);

export const programmes2026 = programmesDataset2026.values;
