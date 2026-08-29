"use client";

import { useState } from "react";
import { studentAidRules2026 } from "@/data/finance-2026/student-aid-rules-2026";
import type { PretsBoursesPageDictionary } from "@/i18n/prets-bourses";
import {
  buildStudentAidOrientation,
  type PerspectiveAnswer,
  type StudentAidOrientationResult,
  type StudentStudyStatus,
} from "@/lib/student-aid-orientation";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const FOCUS_CLASS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900";

interface FormState {
  statutEtudes: StudentStudyStatus;
  residentQuebec: boolean;
  reerDisponible: boolean;
  poursuiteProgrammePerspective: PerspectiveAnswer;
}

export default function PretsBoursesClient({ dictionary: d }: { dictionary: PretsBoursesPageDictionary }) {
  const f = d.calculatorFields;
  const r = d.calculatorResults;
  const [form, setForm] = useState<FormState>({
    statutEtudes: "temps-plein",
    residentQuebec: true,
    reerDisponible: false,
    poursuiteProgrammePerspective: "unknown",
  });
  const [resultats, setResultats] = useState<StudentAidOrientationResult | null>(null);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((previous) => ({ ...previous, [key]: value }));
    setResultats(null);
  }

  function orienter() {
    setResultats(buildStudentAidOrientation({
      studyStatus: form.statutEtudes,
      meetsQuebecResidencyCriterion: form.residentQuebec,
      hasRrspFunds: form.reerDisponible,
      perspectiveAnswer: form.poursuiteProgrammePerspective,
    }));
    setTimeout(() => document.getElementById("pb-resultats")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  const optionStyle = (active: boolean) => ({
    padding: "10px 12px",
    borderRadius: "10px",
    border: active ? `2px solid ${GOLD}` : "2px solid #E5E7EB",
    background: active ? "#FFFBEB" : "white",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: active ? 700 : 500,
    color: active ? "#78350F" : "#44403C",
    textAlign: "left" as const,
  });

  return (
    <div id="calculateur" style={{ background: "white", border: `2px solid ${GOLD}`, borderRadius: "20px", padding: "1.5rem", marginBottom: "2rem", scrollMarginTop: "76px" }}>
      <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#1C1C1E", margin: "0 0 4px" }}>
        🎓 {d.calculatorTitle}
      </h2>
      <p style={{ fontSize: "12px", color: "#78716C", margin: "0 0 1rem", lineHeight: 1.6 }}>{d.calculatorSubtitle}</p>
      <div style={{ background: "#FFFBEB", border: "1px solid #FCD34D", borderRadius: "10px", padding: "10px 14px", marginBottom: "1.25rem" }}>
        <p style={{ fontSize: "12px", color: "#92400E", margin: 0, lineHeight: 1.5 }}>⚠️ {d.calculatorDisclaimer}</p>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <div id="statut-etudes-label" style={{ fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{f.statutEtudesLabel}</div>
          <div role="group" aria-labelledby="statut-etudes-label" className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {f.statutEtudesOptions.map((option) => (
              <button key={option.value} type="button" aria-pressed={form.statutEtudes === option.value} className={FOCUS_CLASS}
                onClick={() => set("statutEtudes", option.value as StudentStudyStatus)} style={optionStyle(form.statutEtudes === option.value)}>
                {option.emoji} {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div id="resident-quebec-label" style={{ fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{f.residentLabel}</div>
          <div role="group" aria-labelledby="resident-quebec-label" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[{ value: true, label: f.residentOui }, { value: false, label: f.residentNon }].map((option) => (
              <button key={String(option.value)} type="button" aria-pressed={form.residentQuebec === option.value} className={FOCUS_CLASS}
                onClick={() => set("residentQuebec", option.value)} style={optionStyle(form.residentQuebec === option.value)}>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-start gap-3 rounded-xl border border-stone-200 p-3 text-sm">
          <input type="checkbox" checked={form.reerDisponible} onChange={(event) => set("reerDisponible", event.target.checked)} className="mt-1" />
          <span><strong>{f.reerLabel}</strong><br /><span className="text-xs text-stone-500">{f.reerDetail}</span></span>
        </label>

        <div>
          <div id="perspective-label" style={{ fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{f.perspectiveLabel}</div>
          <div role="group" aria-labelledby="perspective-label" className="flex flex-col gap-2">
            {f.perspectiveOptions.map((option) => (
              <button key={option.value} type="button" aria-pressed={form.poursuiteProgrammePerspective === option.value} className={FOCUS_CLASS}
                onClick={() => set("poursuiteProgrammePerspective", option.value as PerspectiveAnswer)} style={optionStyle(form.poursuiteProgrammePerspective === option.value)}>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <button type="button" onClick={orienter} className={FOCUS_CLASS}
          style={{ width: "100%", background: DARK, color: GOLD, border: 0, borderRadius: "12px", padding: "13px", fontWeight: 800, cursor: "pointer" }}>
          {f.ctaLabel}
        </button>
      </div>

      {resultats && (
        <div id="pb-resultats" style={{ marginTop: "1.25rem", scrollMarginTop: "76px" }}>
          <h3 style={{ fontWeight: 800, marginBottom: "10px" }}>{r.title}</h3>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
              <strong>{r.pretAfeLabel}</strong>
              <p className="mt-1 text-xs leading-6">
                {resultats.afeRoute === "full-time" ? r.admissibiliteValues["temps-plein"] : resultats.afeRoute === "part-time" ? r.admissibiliteValues["temps-partiel"] : r.admissibiliteValues["formation-continue"]}
                {resultats.residency === "verify" ? ` ${r.admissibiliteValues.residence}` : ""}
              </p>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-900">
              <strong>{r.perspectiveLabel}</strong>
              <p className="mt-1 text-xs leading-6">{r.admissibiliteValues[`perspective-${resultats.perspective}`]}</p>
            </div>
            {resultats.llp === "verify" && (
              <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-800">
                <strong>{r.reepLabel}</strong><p className="mt-1 text-xs leading-6">{r.admissibiliteValues.reep}</p>
              </div>
            )}
          </div>
          <p style={{ fontSize: "11px", color: "#78716C", lineHeight: 1.6, margin: "12px 0" }}>{r.totalNote}</p>
          <a href={studentAidRules2026.links.afeCalculator} target="_blank" rel="noopener noreferrer" className={FOCUS_CLASS}
            style={{ display: "block", width: "100%", background: "#1E40AF", color: "white", fontWeight: 700, fontSize: "14px", padding: "13px", borderRadius: "12px", textDecoration: "none", textAlign: "center" }}>
            {r.officialCta} →
          </a>
          <button type="button" className={FOCUS_CLASS} onClick={() => setResultats(null)}
            style={{ display: "block", width: "100%", background: "transparent", color: "#78716C", fontWeight: 600, fontSize: "13px", padding: "10px", borderRadius: "10px", border: "1px solid #E5E7EB", cursor: "pointer", marginTop: "10px" }}>
            {f.resetLabel}
          </button>
        </div>
      )}
    </div>
  );
}
