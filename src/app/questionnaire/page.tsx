import type { Metadata } from "next";
import Questionnaire from "@/components/Questionnaire";

export const metadata: Metadata = {
  title: "Questionnaire – ArgentQC.ca",
  description: "Répondez à 9 questions pour découvrir toutes les aides gouvernementales auxquelles vous avez droit.",
};

export default function QuestionnairePage() {
  return <Questionnaire />;
}
