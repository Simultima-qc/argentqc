"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { ReponseQuestionnaire } from "@/types";
import type { QuestionnaireDictionary } from "@/i18n/content";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getCommonUiLabels } from "@/i18n/ui";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";
const PROVINCE = "QC";

const DEFAULT_ANSWERS: ReponseQuestionnaire = {
  province: PROVINCE,
  statut_logement: "proprietaire",
  situation_familiale: "seul",
  enfants: false,
  revenu: "",
  vehicule_elec: "non",
  renovation: false,
  retraite: false,
  age: "",
};

interface LocalizedQuestionnaireProps {
  locale: Locale;
  dictionary: QuestionnaireDictionary;
}

export default function LocalizedQuestionnaire({
  locale,
  dictionary,
}: LocalizedQuestionnaireProps) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<ReponseQuestionnaire>(DEFAULT_ANSWERS);

  const step = dictionary.steps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / dictionary.steps.length) * 100);
  const homePath = getRoutePath(locale, "home");
  const resultsPath = getRoutePath(locale, "results");
  const ui = getCommonUiLabels(locale);

  function answerStep(value: string | boolean) {
    const id = step.id as keyof ReponseQuestionnaire;
    const nextAnswers = { ...answers, [id]: value };
    setAnswers(nextAnswers);

    if (stepIndex < dictionary.steps.length - 1) {
      setStepIndex(stepIndex + 1);
      return;
    }

    const params = new URLSearchParams(
      Object.entries(nextAnswers).map(([key, currentValue]) => [key, String(currentValue)])
    );
    router.push(`${resultsPath}?${params.toString()}`);
  }

  return (
    <div style={{ minHeight: "100vh", background: PARCH, display: "flex", flexDirection: "column" }}>
      <header style={{ background: DARK, padding: "14px 16px", position: "sticky", top: 0, zIndex: 10, boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "rgba(240,235,224,0.4)", fontSize: "13px" }}>
              {dictionary.progressLabel} {stepIndex + 1} / {dictionary.steps.length}
            </span>
            <LanguageSwitcher currentLocale={locale} label={ui.languageSwitcher} />
          </div>
        </div>
      </header>

      <div style={{ background: "rgba(245,200,66,0.12)", height: "3px" }}>
        <div
          style={{
            background: GOLD,
            height: "3px",
            width: `${progress}%`,
            transition: "width 0.4s ease-out",
            boxShadow: "0 0 8px rgba(245,200,66,0.4)",
          }}
        />
      </div>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", padding: "40px 16px 24px", maxWidth: "768px", margin: "0 auto", width: "100%" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.35rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "28px",
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          {step.question}
        </h2>

        {step.type === "choix" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {step.options.map((option) => (
              <button
                key={option.value}
                onClick={() => answerStep(option.value)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "white",
                  border: "1.5px solid #EDE9E0",
                  borderRadius: "14px",
                  padding: "16px 20px",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#1C1C1E",
                  cursor: "pointer",
                  minHeight: "58px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {step.type === "oui_non" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <button
              onClick={() => answerStep(true)}
              style={{
                background: "white",
                border: "1.5px solid #EDE9E0",
                borderRadius: "14px",
                padding: "24px 16px",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#1C1C1E",
                cursor: "pointer",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              {dictionary.yes}
            </button>
            <button
              onClick={() => answerStep(false)}
              style={{
                background: "white",
                border: "1.5px solid #EDE9E0",
                borderRadius: "14px",
                padding: "24px 16px",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#78716C",
                cursor: "pointer",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              {dictionary.no}
            </button>
          </div>
        )}

        {stepIndex > 0 && (
          <button
            onClick={() => setStepIndex(stepIndex - 1)}
            style={{
              marginTop: "28px",
              color: "#A8A29E",
              fontSize: "13px",
              textDecoration: "underline",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "block",
              margin: "28px auto 0",
              padding: "8px 16px",
            }}
          >
            ← {dictionary.previousQuestion}
          </button>
        )}
      </main>

      <p style={{ textAlign: "center", color: "#C4BFBA", fontSize: "11px", paddingBottom: "24px", paddingLeft: "16px", paddingRight: "16px" }}>
        {dictionary.answersNotSaved}
      </p>
    </div>
  );
}
