"use client";

import { useMemo, useState } from "react";
import type { RetirementRrspTransferDictionary } from "@/i18n/retirementRrspTransfer";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

type WizardState = Record<"source" | "destination" | "planType" | "scope" | "needCash" | "assets", string>;

const initialState: WizardState = {
  source: "",
  destination: "",
  planType: "",
  scope: "",
  needCash: "",
  assets: "",
};

function getAdvice(state: WizardState, dictionary: RetirementRrspTransferDictionary["assistant"]["advice"]) {
  const wantsWithdrawal = state.needCash === "withdraw";
  const unsureCash = state.needCash === "unsure";
  const groupPlan = state.source === "group-rrsp" || state.planType === "group-rrsp";
  const selfDirected = state.destination === "self-directed-broker";
  const partial = state.scope === "partial";
  const unknownPlan = state.planType === "unknown";
  const assetNeedsAttention =
    state.assets === "mutual-funds" || state.assets === "gic" || state.assets === "stocks-etf" || state.assets === "unknown";

  let summary = dictionary.defaultSummary;
  if (wantsWithdrawal) {
    summary = dictionary.withdrawalSummary;
  } else if (groupPlan) {
    summary = dictionary.groupPlanSummary;
  } else if (selfDirected) {
    summary = dictionary.selfDirectedSummary;
  } else if (partial) {
    summary = dictionary.partialSummary;
  }

  let mainRisk = dictionary.defaultRisk;
  if (groupPlan) {
    mainRisk = dictionary.groupPlanRisk;
  } else if (assetNeedsAttention) {
    mainRisk = dictionary.assetRisk;
  } else if (unknownPlan) {
    mainRisk = dictionary.unknownPlanRisk;
  }

  const prepare = [...dictionary.prepareBase];
  if (groupPlan) {
    prepare.push(dictionary.prepareGroupPlan);
  }
  if (assetNeedsAttention) {
    prepare.push(dictionary.prepareAssets);
  }

  const checks = [...dictionary.checksBase];
  if (unsureCash) {
    checks.unshift(dictionary.checksUnsureCash);
  }

  return { summary, mainRisk, whoStarts: dictionary.whoStarts, prepare, checks };
}

export default function LocalizedRetirementRrspTransferWizard({
  dictionary,
}: {
  dictionary: RetirementRrspTransferDictionary["assistant"];
}) {
  const [state, setState] = useState<WizardState>(initialState);
  const answeredCount = dictionary.questions.filter((question) => state[question.id]).length;
  const progress = Math.round((answeredCount / dictionary.questions.length) * 100);
  const advice = useMemo(() => getAdvice(state, dictionary.advice), [dictionary.advice, state]);

  return (
    <section id="assistant" style={{ scrollMarginTop: "88px", marginBottom: "2rem" }}>
      <div style={{ background: "white", borderRadius: "24px", border: "1px solid #E7E0D3", padding: "1.25rem", boxShadow: "0 18px 40px rgba(6,13,26,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-start", marginBottom: "14px", flexWrap: "wrap" }}>
          <div>
            <p style={{ color: "#9A7A11", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{dictionary.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{dictionary.title}</h2>
            <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.65, maxWidth: "620px" }}>{dictionary.intro}</p>
          </div>
          <div style={{ minWidth: "88px", padding: "10px 12px", borderRadius: "16px", background: PARCH, border: "1px solid #E7E0D3", textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#78716C", marginBottom: "4px" }}>{dictionary.progressLabel}</div>
            <div style={{ fontWeight: 800, color: DARK }}>{progress}%</div>
          </div>
        </div>

        <div style={{ height: "10px", background: "#F3F1EC", borderRadius: "999px", overflow: "hidden", marginBottom: "18px" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${GOLD} 0%, ${GREEN} 100%)`, transition: "width 0.25s ease" }} />
        </div>

        <div className="grid grid-cols-1 gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {dictionary.questions.map((question, index) => {
            const selectedValue = state[question.id];

            return (
              <div key={question.id} style={{ border: "1px solid #EEE7DB", borderRadius: "18px", padding: "1rem", background: selectedValue ? "#FFFCF4" : "#FAF8F3" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "999px", background: selectedValue ? DARK : "#EAE4D8", color: selectedValue ? GOLD : "#57534E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1C1C1E", margin: 0 }}>{question.prompt}</h3>
                    {question.helper ? <p style={{ fontSize: "11px", color: "#78716C", lineHeight: 1.5, margin: "4px 0 0 0" }}>{question.helper}</p> : null}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {question.options.map((option) => {
                    const selected = selectedValue === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setState((current) => ({ ...current, [question.id]: option.value }))}
                        style={{ textAlign: "left", padding: "11px 12px", borderRadius: "12px", border: selected ? `1px solid ${GOLD}` : "1px solid #E7E0D3", background: selected ? "rgba(245,200,66,0.12)" : "white", color: "#1C1C1E", fontSize: "13px", fontWeight: selected ? 700 : 500, cursor: "pointer" }}
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

        <div style={{ marginTop: "22px", borderRadius: "22px", background: DARK, color: "#F0EBE0", padding: "1.25rem" }}>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{dictionary.summaryEyebrow}</p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, marginBottom: "12px" }}>{advice.summary}</p>
          <div className="grid grid-cols-1 gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1rem" }}>
              <div style={{ fontWeight: 800, marginBottom: "6px" }}>{dictionary.riskTitle}</div>
              <p style={{ fontSize: "13px", color: "rgba(240,235,224,0.72)", lineHeight: 1.6, margin: 0 }}>{advice.mainRisk}</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1rem" }}>
              <div style={{ fontWeight: 800, marginBottom: "6px" }}>{dictionary.whoStartsTitle}</div>
              <p style={{ fontSize: "13px", color: "rgba(240,235,224,0.72)", lineHeight: 1.6, margin: 0 }}>{advice.whoStarts}</p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1rem" }}>
              <div style={{ fontWeight: 800, marginBottom: "8px" }}>{dictionary.prepareTitle}</div>
              <ul style={{ margin: 0, paddingLeft: "1rem", color: "rgba(240,235,224,0.72)", fontSize: "13px", lineHeight: 1.7 }}>
                {advice.prepare.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1rem" }}>
              <div style={{ fontWeight: 800, marginBottom: "8px" }}>{dictionary.checksTitle}</div>
              <ul style={{ margin: 0, paddingLeft: "1rem", color: "rgba(240,235,224,0.72)", fontSize: "13px", lineHeight: 1.7 }}>
                {advice.checks.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "14px", padding: "12px 14px", borderRadius: "14px", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", color: "#D1FAE5", fontSize: "13px", lineHeight: 1.6 }}>
            {dictionary.closingNote}
          </div>
        </div>
      </div>
    </section>
  );
}
