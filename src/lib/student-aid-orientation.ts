export type StudentStudyStatus = "temps-plein" | "temps-partiel" | "formation-continue";
export type PerspectiveAnswer = "yes" | "no" | "unknown";

export interface StudentAidOrientationInput {
  studyStatus: StudentStudyStatus;
  meetsQuebecResidencyCriterion: boolean;
  hasRrspFunds: boolean;
  perspectiveAnswer: PerspectiveAnswer;
}

export interface StudentAidOrientationResult {
  afeRoute: "full-time" | "part-time" | "verify-program";
  residency: "declared-criterion" | "verify";
  llp: "verify" | "not-selected";
  perspective: "verify-continuity" | "new-cohort-closed" | "verify";
}

/** Routes to official information without calculating eligibility or entitlement. */
export function buildStudentAidOrientation(input: StudentAidOrientationInput): StudentAidOrientationResult {
  const afeRoute = input.studyStatus === "temps-plein"
    ? "full-time"
    : input.studyStatus === "temps-partiel"
      ? "part-time"
      : "verify-program";

  return {
    afeRoute,
    residency: input.meetsQuebecResidencyCriterion ? "declared-criterion" : "verify",
    llp: input.hasRrspFunds ? "verify" : "not-selected",
    perspective: input.perspectiveAnswer === "yes"
      ? "verify-continuity"
      : input.perspectiveAnswer === "no"
        ? "new-cohort-closed"
        : "verify",
  };
}
