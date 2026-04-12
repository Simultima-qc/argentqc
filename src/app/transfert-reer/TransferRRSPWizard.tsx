"use client";

import { useMemo, useState } from "react";
import { DARK, GOLD, GREEN, PARCH, wizardQuestions, type WizardState } from "./content";

const initialState: WizardState = {
  source: "",
  destination: "",
  planType: "",
  scope: "",
  needCash: "",
  assets: "",
};

type Advice = {
  summary: string;
  mainRisk: string;
  whoStarts: string;
  prepare: string[];
  checks: string[];
};

function getAdvice(state: WizardState): Advice {
  const wantsWithdrawal = state.needCash === "withdraw";
  const unsureCash = state.needCash === "unsure";
  const groupPlan = state.source === "group-rrsp" || state.planType === "group-rrsp";
  const selfDirected = state.destination === "self-directed-broker";
  const partial = state.scope === "partial";
  const unknownPlan = state.planType === "unknown";
  const assetNeedsAttention =
    state.assets === "mutual-funds" || state.assets === "gic" || state.assets === "stocks-etf" || state.assets === "unknown";

  let summary = "Dans ton cas, tu sembles vouloir faire un transfert direct vers une nouvelle institution.";
  if (wantsWithdrawal) {
    summary =
      "Tu sembles hésiter entre retirer l'argent et le déplacer. Si ton vrai objectif est de garder le REER intact, il faut plutôt viser un transfert direct.";
  } else if (groupPlan) {
    summary =
      "Ton dossier ressemble à un transfert qui mérite une vérification plus serrée, surtout parce qu'un REER collectif ou lié à l'employeur peut avoir ses propres règles.";
  } else if (selfDirected) {
    summary =
      "Tu sembles vouloir déplacer ton REER vers un courtier autogéré. Le bon réflexe est de faire ouvrir le bon compte d'arrivée avant toute autre action.";
  } else if (partial) {
    summary =
      "Tu sembles viser un transfert partiel. C'est souvent possible, mais il faut être très précis sur ce qui doit être déplacé et ce qui reste en place.";
  }

  let mainRisk = "Le risque principal est de demander un retrait au lieu d'un transfert direct.";
  if (groupPlan) {
    mainRisk =
      "Le risque principal est de supposer qu'un REER collectif suit exactement les mêmes règles et délais qu'un REER individuel.";
  } else if (assetNeedsAttention) {
    mainRisk =
      "Le risque principal est de découvrir trop tard que certains placements doivent être vendus ou ne peuvent pas être transférés tels quels.";
  } else if (unknownPlan) {
    mainRisk =
      "Le risque principal est de partir avec le mauvais type de compte ou le mauvais numéro de régime sur la demande.";
  }

  const whoStarts =
    "Commence habituellement avec la nouvelle institution, parce que c'est souvent elle qui initie la demande de transfert et te fait remplir la bonne paperasse.";

  const prepare = [
    "Le numéro de compte actuel et le nom exact du régime",
    "Le type de compte que tu ouvres dans la nouvelle institution",
    "Une liste claire des placements à transférer si ce n'est pas tout le compte",
  ];

  if (groupPlan) {
    prepare.push("Les documents du régime collectif et toute règle liée à l'employeur");
  }

  if (assetNeedsAttention) {
    prepare.push("La liste de tes placements pour vérifier s'ils peuvent être transférés en nature ou s'ils doivent être vendus");
  }

  const checks = [
    "Vérifie les frais de transfert à la sortie",
    "Vérifie si certains placements ont des restrictions de sortie ou des pénalités",
    "Demande à la nouvelle institution si elle rembourse des frais de transfert",
  ];

  if (unsureCash) {
    checks.unshift("Clarifie d'abord si tu veux vraiment l'argent en main ou seulement le déplacer");
  }

  return { summary, mainRisk, whoStarts, prepare, checks };
}

export default function TransferRRSPWizard() {
  const [state, setState] = useState<WizardState>(initialState);

  const answeredCount = wizardQuestions.filter((question) => state[question.id as keyof WizardState]).length;
  const progress = Math.round((answeredCount / wizardQuestions.length) * 100);
  const advice = useMemo(() => getAdvice(state), [state]);

  return (
    <section id="assistant" style={{ scrollMarginTop: "88px", marginBottom: "2rem" }}>
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          border: "1px solid #E7E0D3",
          padding: "1.25rem",
          boxShadow: "0 18px 40px rgba(6,13,26,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            alignItems: "flex-start",
            marginBottom: "14px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                color: "#9A7A11",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Assistant rapide
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
              Quoi faire maintenant dans ton cas
            </h2>
            <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.65, maxWidth: "620px" }}>
              Réponds aux questions ci-dessous. Tu vas obtenir un résumé concret de la prochaine bonne action à poser.
            </p>
          </div>
          <div
            style={{
              minWidth: "88px",
              padding: "10px 12px",
              borderRadius: "16px",
              background: PARCH,
              border: "1px solid #E7E0D3",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "11px", color: "#78716C", marginBottom: "4px" }}>Progression</div>
            <div style={{ fontWeight: 800, color: DARK }}>{progress}%</div>
          </div>
        </div>

        <div style={{ height: "10px", background: "#F3F1EC", borderRadius: "999px", overflow: "hidden", marginBottom: "18px" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${GOLD} 0%, ${GREEN} 100%)`, transition: "width 0.25s ease" }} />
        </div>

        <div className="grid grid-cols-1 gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {wizardQuestions.map((question, index) => {
            const selectedValue = state[question.id as keyof WizardState];

            return (
              <div
                key={question.id}
                style={{
                  border: "1px solid #EEE7DB",
                  borderRadius: "18px",
                  padding: "1rem",
                  background: selectedValue ? "#FFFCF4" : "#FAF8F3",
                }}
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "999px",
                      background: selectedValue ? DARK : "#EAE4D8",
                      color: selectedValue ? GOLD : "#57534E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1C1C1E", margin: 0 }}>{question.prompt}</h3>
                    {question.helper ? (
                      <p style={{ fontSize: "11px", color: "#78716C", lineHeight: 1.5, margin: "4px 0 0 0" }}>{question.helper}</p>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {question.options.map((option) => {
                    const selected = selectedValue === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setState((current) => ({
                            ...current,
                            [question.id]: option.value,
                          }))
                        }
                        style={{
                          textAlign: "left",
                          padding: "11px 12px",
                          borderRadius: "12px",
                          border: selected ? `1px solid ${GOLD}` : "1px solid #E7E0D3",
                          background: selected ? "rgba(245,200,66,0.12)" : "white",
                          color: "#1C1C1E",
                          fontSize: "13px",
                          fontWeight: selected ? 700 : 500,
                          cursor: "pointer",
                        }}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "22px",
            borderRadius: "22px",
            background: DARK,
            color: "#F0EBE0",
            padding: "1.25rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Résumé personnalisé
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, marginBottom: "12px" }}>{advice.summary}</p>
          <div className="grid grid-cols-1 gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1rem" }}>
              <div style={{ fontWeight: 800, marginBottom: "6px" }}>Risque principal à éviter</div>
              <p style={{ fontSize: "13px", color: "rgba(240,235,224,0.72)", lineHeight: 1.6, margin: 0 }}>{advice.mainRisk}</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1rem" }}>
              <div style={{ fontWeight: 800, marginBottom: "6px" }}>Qui initie souvent la démarche</div>
              <p style={{ fontSize: "13px", color: "rgba(240,235,224,0.72)", lineHeight: 1.6, margin: 0 }}>{advice.whoStarts}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1rem" }}>
              <div style={{ fontWeight: 800, marginBottom: "8px" }}>Quoi préparer avant de commencer</div>
              <ul style={{ margin: 0, paddingLeft: "1rem", color: "rgba(240,235,224,0.72)", fontSize: "13px", lineHeight: 1.7 }}>
                {advice.prepare.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1rem" }}>
              <div style={{ fontWeight: 800, marginBottom: "8px" }}>Vérifications utiles</div>
              <ul style={{ margin: 0, paddingLeft: "1rem", color: "rgba(240,235,224,0.72)", fontSize: "13px", lineHeight: 1.7 }}>
                {advice.checks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: "14px",
              padding: "12px 14px",
              borderRadius: "14px",
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#D1FAE5",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            Parle d&apos;abord à la nouvelle institution si tu veux juste déplacer le REER. C&apos;est le réflexe qui évite le plus souvent l&apos;erreur de retrait.
          </div>
        </div>
      </div>
    </section>
  );
}
