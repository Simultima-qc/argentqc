import type { ReponseQuestionnaire } from "@/types";

const DEFAULT_RESULTS_ANSWERS: ReponseQuestionnaire = {
  province: "QC",
  statut_logement: "proprietaire",
  situation_familiale: "seul",
  enfants: false,
  revenu: "50000-75000",
  vehicule_elec: "non",
  renovation: false,
  retraite: false,
  age: "31-45",
  etudiant: false,
};

const ANSWER_KEYS: Array<keyof ReponseQuestionnaire> = [
  "province",
  "statut_logement",
  "situation_familiale",
  "enfants",
  "revenu",
  "vehicule_elec",
  "renovation",
  "retraite",
  "age",
  "etudiant",
];

const allowedValues = {
  province: ["QC"],
  statut_logement: ["proprietaire", "locataire"],
  situation_familiale: ["seul", "couple", "famille"],
  revenu: ["0-30000", "30000-50000", "50000-75000", "75000-100000", "100000+"],
  vehicule_elec: ["oui", "prevu", "non"],
  age: ["18-30", "31-45", "46-65", "65+"],
} as const;

type QuestionnaireQuery = Record<string, string | string[] | undefined>;

function getSingleValue(query: QuestionnaireQuery, key: string): string | undefined {
  const value = query[key];
  return Array.isArray(value) ? value[0] : value;
}

function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  if (value === "true") return true;
  if (value === "false") return false;
  return fallback;
}

function parseAllowedValue<T extends keyof typeof allowedValues>(
  query: QuestionnaireQuery,
  key: T,
  fallback: (typeof allowedValues)[T][number]
): (typeof allowedValues)[T][number] {
  const value = getSingleValue(query, key);
  return allowedValues[key].includes(value as never) ? (value as (typeof allowedValues)[T][number]) : fallback;
}

export function parseQuestionnaireAnswers(query: QuestionnaireQuery): ReponseQuestionnaire {
  return {
    province: parseAllowedValue(query, "province", DEFAULT_RESULTS_ANSWERS.province as "QC"),
    statut_logement: parseAllowedValue(query, "statut_logement", DEFAULT_RESULTS_ANSWERS.statut_logement),
    situation_familiale: parseAllowedValue(query, "situation_familiale", DEFAULT_RESULTS_ANSWERS.situation_familiale),
    enfants: parseBoolean(getSingleValue(query, "enfants"), DEFAULT_RESULTS_ANSWERS.enfants),
    revenu: parseAllowedValue(query, "revenu", DEFAULT_RESULTS_ANSWERS.revenu as (typeof allowedValues.revenu)[number]),
    vehicule_elec: parseAllowedValue(
      query,
      "vehicule_elec",
      DEFAULT_RESULTS_ANSWERS.vehicule_elec as (typeof allowedValues.vehicule_elec)[number]
    ),
    renovation: parseBoolean(getSingleValue(query, "renovation"), DEFAULT_RESULTS_ANSWERS.renovation),
    retraite: parseBoolean(getSingleValue(query, "retraite"), DEFAULT_RESULTS_ANSWERS.retraite),
    age: parseAllowedValue(query, "age", DEFAULT_RESULTS_ANSWERS.age as (typeof allowedValues.age)[number]),
    etudiant: parseBoolean(getSingleValue(query, "etudiant"), DEFAULT_RESULTS_ANSWERS.etudiant),
  };
}

export function serializeQuestionnaireAnswers(answers: ReponseQuestionnaire): URLSearchParams {
  const params = new URLSearchParams();

  for (const key of ANSWER_KEYS) {
    params.set(key, String(answers[key]));
  }

  return params;
}

export function buildResultsUrl(path: string, answers: ReponseQuestionnaire): string {
  return `${path}?${serializeQuestionnaireAnswers(answers).toString()}`;
}
