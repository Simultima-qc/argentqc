"use client";

import { useState } from "react";
import type { PretsBoursesPageDictionary } from "@/i18n/prets-bourses";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const FOCUS_CLASS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900";

// ─── Types ─────────────────────────────────────────────────────────────────────

type StatutEtudes = "temps-plein" | "temps-partiel" | "formation-continue";
type NiveauEtudes = "dep" | "cegep" | "bac" | "maitrise" | "doctorat";
type StatutFinancier = "parents" | "autonome" | "conjoint";
type AdmissibiliteAFE = "elevee" | "moyenne" | "faible" | "non-resident";
type PerspectiveStatus = "admissible" | "non" | "verifier";

interface FormState {
  statutEtudes: StatutEtudes;
  niveauEtudes: NiveauEtudes;
  residentQuebec: boolean;
  statutFinancier: StatutFinancier;
  revenuPersonnel: number;
  revenuParentsOuConjoint: number;
  enfantCharge: boolean;
  fraisScolarite: number;
  reerDisponible: boolean;
  poursuiteProgrammePerspective: "yes" | "no" | "unknown";
}

interface Resultats {
  admissibiliteAFE: AdmissibiliteAFE;
  estimationPretAFE: { min: number; max: number } | null;
  estimationBourseAFE: { min: number; max: number } | null;
  estimationCreditsImpot: number | null;
  possibiliteREEP: string | null;
  perspectiveQC: PerspectiveStatus;
}

// ─── Heuristics (transparent, prudentes) ──────────────────────────────────────

function evaluerAdmissibiliteAFE(
  residentQuebec: boolean,
  statutFinancier: StatutFinancier,
  revenuPersonnel: number,
  revenuParentsOuConjoint: number,
  enfantCharge: boolean,
  statutEtudes: StatutEtudes
): AdmissibiliteAFE {
  if (!residentQuebec) return "non-resident";
  if (statutEtudes === "formation-continue") return "faible";

  // Revenu de référence selon statut
  const revenuRef =
    statutFinancier === "parents"
      ? revenuParentsOuConjoint
      : statutFinancier === "conjoint"
        ? revenuPersonnel + revenuParentsOuConjoint
        : revenuPersonnel;

  // Ajustement pour enfants à charge
  const seuil = enfantCharge ? 15000 : 0;
  const revenuAjuste = Math.max(0, revenuRef - seuil);

  // Seuils heuristiques indicatifs (non-officiels)
  if (statutFinancier === "parents") {
    if (revenuAjuste < 40000) return "elevee";
    if (revenuAjuste < 75000) return "moyenne";
    return "faible";
  }
  if (statutFinancier === "autonome") {
    if (revenuAjuste < 15000) return "elevee";
    if (revenuAjuste < 30000) return "moyenne";
    return "faible";
  }
  // conjoint
  if (revenuAjuste < 30000) return "elevee";
  if (revenuAjuste < 55000) return "moyenne";
  return "faible";
}

function estimerPretAFE(
  admissibilite: AdmissibiliteAFE,
  statutEtudes: StatutEtudes,
  niveauEtudes: NiveauEtudes,
  fraisScolarite: number
): { min: number; max: number } | null {
  if (admissibilite === "non-resident" || admissibilite === "faible") return null;
  if (statutEtudes === "formation-continue") return null;

  const fraisBase = fraisScolarite > 0 ? fraisScolarite : { dep: 2500, cegep: 3500, bac: 5000, maitrise: 7000, doctorat: 8000 }[niveauEtudes];
  const facteurTemps = statutEtudes === "temps-partiel" ? 0.5 : 1;
  const baseAide = (fraisBase + 8000) * facteurTemps; // frais + coût de vie approx.

  if (admissibilite === "elevee") {
    return { min: Math.round(baseAide * 0.6), max: Math.min(Math.round(baseAide * 0.95), 17500) };
  }
  return { min: Math.round(baseAide * 0.2), max: Math.round(baseAide * 0.55) };
}

function estimerBourseAFE(
  admissibilite: AdmissibiliteAFE,
  pretEstimation: { min: number; max: number } | null
): { min: number; max: number } | null {
  if (!pretEstimation) return null;
  if (admissibilite !== "elevee") return null;
  return {
    min: Math.round(pretEstimation.min * 0.2),
    max: Math.min(Math.round(pretEstimation.max * 0.35), 8000),
  };
}

function estimerCreditsImpot(fraisScolarite: number, statutEtudes: StatutEtudes): number | null {
  if (fraisScolarite <= 0) return null;
  if (statutEtudes === "formation-continue") return Math.round(fraisScolarite * 0.20); // QC formation
  return Math.round(fraisScolarite * 0.15); // crédit fédéral uniquement
}

function evaluerPerspective(choice: "yes" | "no" | "unknown"): PerspectiveStatus {
  if (choice === "yes") return "admissible";
  if (choice === "no") return "non";
  return "verifier";
}

function calculerResultats(form: FormState): Resultats {
  const admissibiliteAFE = evaluerAdmissibiliteAFE(
    form.residentQuebec,
    form.statutFinancier,
    form.revenuPersonnel,
    form.revenuParentsOuConjoint,
    form.enfantCharge,
    form.statutEtudes
  );

  const estimationPretAFE = estimerPretAFE(admissibiliteAFE, form.statutEtudes, form.niveauEtudes, form.fraisScolarite);
  const estimationBourseAFE = estimerBourseAFE(admissibiliteAFE, estimationPretAFE);
  const estimationCreditsImpot = estimerCreditsImpot(form.fraisScolarite, form.statutEtudes);

  const possibiliteREEP = form.reerDisponible
    ? "Jusqu'à 10 000 $ (20 000 $ cumulatif) — remboursable sur 10 ans"
    : null;

  const perspectiveQC = evaluerPerspective(form.poursuiteProgrammePerspective);

  return {
    admissibiliteAFE,
    estimationPretAFE,
    estimationBourseAFE,
    estimationCreditsImpot,
    possibiliteREEP,
    perspectiveQC,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  dictionary: PretsBoursesPageDictionary;
}

export default function PretsBoursesClient({ dictionary: d }: Props) {
  const f = d.calculatorFields;
  const r = d.calculatorResults;

  const [form, setForm] = useState<FormState>({
    statutEtudes: "temps-plein",
    niveauEtudes: "bac",
    residentQuebec: true,
    statutFinancier: "parents",
    revenuPersonnel: 5000,
    revenuParentsOuConjoint: 65000,
    enfantCharge: false,
    fraisScolarite: 5000,
    reerDisponible: false,
    poursuiteProgrammePerspective: "unknown",
  });
  const [resultats, setResultats] = useState<Resultats | null>(null);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setResultats(null);
  }

  function handleCalculer() {
    const res = calculerResultats(form);
    setResultats(res);
    setTimeout(() => {
      document.getElementById("pb-resultats")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  const showRevenuParent = form.statutFinancier !== "autonome";

  function formatRange(range: { min: number; max: number }) {
    return `~${range.min.toLocaleString("fr-CA")} $ – ${range.max.toLocaleString("fr-CA")} $`;
  }

  function formatAmount(amount: number) {
    return `~${amount.toLocaleString("fr-CA")} $`;
  }

  function admissibiliteBadge(val: AdmissibiliteAFE) {
    const colors: Record<AdmissibiliteAFE, { bg: string; border: string; text: string }> = {
      elevee: { bg: "#ECFDF5", border: "#34D399", text: "#065F46" },
      moyenne: { bg: "#FEF3C7", border: "#FCD34D", text: "#78350F" },
      faible: { bg: "#FEF2F2", border: "#FECACA", text: "#991B1B" },
      "non-resident": { bg: "#F3F4F6", border: "#D1D5DB", text: "#374151" },
    };
    return colors[val];
  }

  return (
    <div id="calculateur" style={{ background: "white", border: `2px solid ${GOLD}`, borderRadius: "20px", padding: "1.5rem", marginBottom: "2rem", scrollMarginTop: "76px" }}>

      {/* Titre */}
      <div style={{ marginBottom: "1.25rem" }}>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#1C1C1E", margin: "0 0 4px" }}>
          🎓 {d.calculatorTitle}
        </h2>
        <p style={{ fontSize: "12px", color: "#78716C", margin: 0, lineHeight: 1.5 }}>{d.calculatorSubtitle}</p>
      </div>

      {/* Disclaimer */}
      <div style={{ background: "#FFFBEB", border: "1px solid #FCD34D", borderRadius: "10px", padding: "10px 14px", marginBottom: "1.25rem" }}>
        <p style={{ fontSize: "12px", color: "#92400E", margin: 0, lineHeight: 1.5 }}>
          ⚠️ {d.calculatorDisclaimer}
        </p>
      </div>

      <div className="flex flex-col gap-5">

        {/* Statut études */}
        <div>
          <div id="statut-etudes-label" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1C1C1E", marginBottom: "8px" }}>{f.statutEtudesLabel}</div>
          <div role="group" aria-labelledby="statut-etudes-label" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "8px" }}>
            {f.statutEtudesOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                aria-pressed={form.statutEtudes === opt.value}
                className={FOCUS_CLASS}
                onClick={() => set("statutEtudes", opt.value as StatutEtudes)}
                style={{
                  padding: "10px 6px",
                  borderRadius: "10px",
                  border: form.statutEtudes === opt.value ? `2px solid ${GOLD}` : "2px solid #E5E7EB",
                  background: form.statutEtudes === opt.value ? "#FFFBEB" : "white",
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: form.statutEtudes === opt.value ? 800 : 500,
                  color: form.statutEtudes === opt.value ? "#78350F" : "#44403C",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.2rem", marginBottom: "4px" }}>{opt.emoji}</div>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Niveau */}
        <div>
          <div id="niveau-etudes-label" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1C1C1E", marginBottom: "8px" }}>{f.niveauLabel}</div>
          <div role="group" aria-labelledby="niveau-etudes-label" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {f.niveauOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                aria-pressed={form.niveauEtudes === opt.value}
                className={FOCUS_CLASS}
                onClick={() => set("niveauEtudes", opt.value as NiveauEtudes)}
                style={{
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: form.niveauEtudes === opt.value ? `2px solid ${GOLD}` : "2px solid #E5E7EB",
                  background: form.niveauEtudes === opt.value ? "#FFFBEB" : "white",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: form.niveauEtudes === opt.value ? 700 : 400,
                  color: form.niveauEtudes === opt.value ? "#78350F" : "#44403C",
                  textAlign: "left",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Résident Québec */}
        <div>
          <div id="resident-quebec-label" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1C1C1E", marginBottom: "8px" }}>{f.residentLabel}</div>
          <div role="group" aria-labelledby="resident-quebec-label" style={{ display: "flex", gap: "8px" }}>
            {[{ val: true, label: f.residentOui }, { val: false, label: f.residentNon }].map(({ val, label }) => (
              <button
                key={String(val)}
                type="button"
                aria-pressed={form.residentQuebec === val}
                className={FOCUS_CLASS}
                onClick={() => set("residentQuebec", val)}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "10px",
                  border: form.residentQuebec === val ? `2px solid ${GOLD}` : "2px solid #E5E7EB",
                  background: form.residentQuebec === val ? "#FFFBEB" : "white",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: form.residentQuebec === val ? 700 : 400,
                  color: form.residentQuebec === val ? "#78350F" : "#44403C",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Statut financier */}
        <div>
          <div id="statut-financier-label" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1C1C1E", marginBottom: "8px" }}>{f.statutFinancierLabel}</div>
          <div role="group" aria-labelledby="statut-financier-label" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {f.statutFinancierOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                aria-pressed={form.statutFinancier === opt.value}
                className={FOCUS_CLASS}
                onClick={() => set("statutFinancier", opt.value as StatutFinancier)}
                style={{
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: form.statutFinancier === opt.value ? `2px solid ${GOLD}` : "2px solid #E5E7EB",
                  background: form.statutFinancier === opt.value ? "#FFFBEB" : "white",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: form.statutFinancier === opt.value ? 700 : 500, color: form.statutFinancier === opt.value ? "#78350F" : "#1C1C1E" }}>
                  {opt.label}
                </div>
                <div style={{ fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>{opt.detail}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Revenu personnel */}
        <div>
          <label htmlFor="revenu-personnel" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1C1C1E", marginBottom: "6px" }}>{f.revenuPersonnelLabel}</label>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <input id="revenu-personnel" name="revenu-personnel" className={FOCUS_CLASS} type="range" min={0} max={60000} step={1000} value={form.revenuPersonnel}
              onChange={(e) => set("revenuPersonnel", Number(e.target.value))}
              style={{ flex: 1, accentColor: GOLD }} />
            <span style={{ fontWeight: 800, fontSize: "13px", color: DARK, minWidth: "80px", textAlign: "right" }}>
              {form.revenuPersonnel.toLocaleString("fr-CA")} $
            </span>
          </div>
        </div>

        {/* Revenu parents/conjoint */}
        {showRevenuParent && (
          <div>
            <label htmlFor="revenu-parents-conjoint" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1C1C1E", marginBottom: "6px" }}>{f.revenuConjointParentLabel}</label>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <input id="revenu-parents-conjoint" name="revenu-parents-conjoint" className={FOCUS_CLASS} type="range" min={0} max={150000} step={5000} value={form.revenuParentsOuConjoint}
                onChange={(e) => set("revenuParentsOuConjoint", Number(e.target.value))}
                style={{ flex: 1, accentColor: GOLD }} />
              <span style={{ fontWeight: 800, fontSize: "13px", color: DARK, minWidth: "80px", textAlign: "right" }}>
                {form.revenuParentsOuConjoint.toLocaleString("fr-CA")} $
              </span>
            </div>
          </div>
        )}

        {/* Enfant à charge */}
        <button
          type="button"
          aria-pressed={form.enfantCharge}
          className={FOCUS_CLASS}
          onClick={() => set("enfantCharge", !form.enfantCharge)}
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: form.enfantCharge ? "#ECFDF5" : "#F9FAFB",
            border: form.enfantCharge ? "2px solid #34D399" : "2px solid #E5E7EB",
            borderRadius: "12px", padding: "12px 14px", cursor: "pointer", width: "100%", textAlign: "left",
          }}
        >
          <span style={{ fontSize: "1.3rem" }}>{form.enfantCharge ? "✅" : "⬜"}</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: form.enfantCharge ? "#065F46" : "#1C1C1E" }}>{f.enfantChargeLabel}</div>
            <div style={{ fontSize: "11px", color: "#A8A29E" }}>{f.enfantChargeDetail}</div>
          </div>
        </button>

        {/* Frais scolarité */}
        <div>
          <label htmlFor="frais-scolarite" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1C1C1E", marginBottom: "6px" }}>{f.fraisScolariteLabel}</label>
          <div style={{ position: "relative" }}>
            <input
              id="frais-scolarite"
              name="frais-scolarite"
              className={FOCUS_CLASS}
              type="number"
              inputMode="numeric"
              value={form.fraisScolarite || ""}
              onChange={(e) => set("fraisScolarite", Number(e.target.value) || 0)}
              placeholder={f.fraisScolaritePlaceholder}
              style={{
                width: "100%", padding: "10px 40px 10px 14px", fontSize: "15px", fontWeight: 600,
                border: "2px solid #E5E7EB", borderRadius: "10px",
                background: "#FAFAFA", color: "#1C1C1E", boxSizing: "border-box",
              }}
            />
            <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "#A8A29E", fontWeight: 600, fontSize: "14px" }}>$</span>
          </div>
        </div>

        {/* REER */}
        <button
          type="button"
          aria-pressed={form.reerDisponible}
          className={FOCUS_CLASS}
          onClick={() => set("reerDisponible", !form.reerDisponible)}
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: form.reerDisponible ? "#EFF6FF" : "#F9FAFB",
            border: form.reerDisponible ? "2px solid #93C5FD" : "2px solid #E5E7EB",
            borderRadius: "12px", padding: "12px 14px", cursor: "pointer", width: "100%", textAlign: "left",
          }}
        >
          <span style={{ fontSize: "1.3rem" }}>{form.reerDisponible ? "✅" : "⬜"}</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: form.reerDisponible ? "#1E40AF" : "#1C1C1E" }}>{f.reerLabel}</div>
            <div style={{ fontSize: "11px", color: "#A8A29E" }}>{f.reerDetail}</div>
          </div>
        </button>

        {/* Perspective QC */}
        <div>
          <div id="perspective-label" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1C1C1E", marginBottom: "8px" }}>{f.perspectiveLabel}</div>
          <div role="group" aria-labelledby="perspective-label" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {f.perspectiveOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                aria-pressed={form.poursuiteProgrammePerspective === opt.value}
                className={FOCUS_CLASS}
                onClick={() => set("poursuiteProgrammePerspective", opt.value as "yes" | "no" | "unknown")}
                style={{
                  padding: "10px 14px", borderRadius: "10px",
                  border: form.poursuiteProgrammePerspective === opt.value ? `2px solid ${GOLD}` : "2px solid #E5E7EB",
                  background: form.poursuiteProgrammePerspective === opt.value ? "#FFFBEB" : "white",
                  cursor: "pointer", fontSize: "12px",
                  fontWeight: form.poursuiteProgrammePerspective === opt.value ? 700 : 400,
                  color: form.poursuiteProgrammePerspective === opt.value ? "#78350F" : "#44403C",
                  textAlign: "left",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA calculer */}
      <button
        type="button"
        className={FOCUS_CLASS}
        onClick={handleCalculer}
        style={{
          display: "block", width: "100%", background: GOLD, color: DARK,
          fontWeight: 800, fontSize: "15px", padding: "14px", borderRadius: "14px",
          border: "none", cursor: "pointer", marginTop: "1.5rem",
        }}
      >
        {f.ctaLabel}
      </button>

      {/* Résultats */}
      {resultats && (
        <div id="pb-resultats" style={{ marginTop: "1.5rem" }}>
          <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
            {r.title}
          </h3>

          {/* Admissibilité AFE */}
          <div style={{ ...admissibiliteBadge(resultats.admissibiliteAFE), borderRadius: "10px", padding: "10px 14px", marginBottom: "12px", border: `1px solid` }}>
            <p style={{ fontSize: "12px", fontWeight: 700, margin: 0 }}>
              {r.admissibiliteLabel} : {r.admissibiliteValues[resultats.admissibiliteAFE]}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "10px", padding: "10px 14px" }}>
              <p style={{ fontSize: "11px", fontWeight: 800, color: "#1E40AF", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {r.repayableAidLabel}
              </p>
              {resultats.estimationPretAFE ? (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#1E40AF" }}>📚 {r.pretAfeLabel}</span>
                  <span style={{ fontWeight: 800, color: "#1E40AF", fontSize: "13px" }}>{formatRange(resultats.estimationPretAFE)}</span>
                </div>
              ) : (
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>{r.noEstimateLabel}</p>
              )}
            </div>

            <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "10px", padding: "10px 14px" }}>
              <p style={{ fontSize: "11px", fontWeight: 800, color: "#065F46", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {r.nonRepayableAidLabel}
              </p>
              {resultats.estimationBourseAFE ? (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: resultats.perspectiveQC === "admissible" ? "6px" : 0 }}>
                  <span style={{ fontSize: "12px", color: "#065F46" }}>🎁 {r.bourseAfeLabel}</span>
                  <span style={{ fontWeight: 800, color: "#065F46", fontSize: "13px" }}>{formatRange(resultats.estimationBourseAFE)}</span>
                </div>
              ) : null}
              {resultats.perspectiveQC === "admissible" ? (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#065F46" }}>🏆 {r.perspectiveLabel}</span>
                  <span style={{ fontWeight: 800, color: "#065F46", fontSize: "13px" }}>5 000 $ — {r.validateLabel}</span>
                </div>
              ) : null}
              {!resultats.estimationBourseAFE && resultats.perspectiveQC !== "admissible" && (
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>{r.noEstimateLabel}</p>
              )}
            </div>

            <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "10px", padding: "10px 14px" }}>
              <p style={{ fontSize: "11px", fontWeight: 800, color: "#14532D", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {r.taxReliefLabel}
              </p>
              {resultats.estimationCreditsImpot !== null ? (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#14532D" }}>🧾 {r.creditsLabel}</span>
                  <span style={{ fontWeight: 800, color: "#14532D", fontSize: "13px" }}>{formatAmount(resultats.estimationCreditsImpot)}</span>
                </div>
              ) : (
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>{r.noEstimateLabel}</p>
              )}
            </div>

            <div style={{ background: "#F8FAFC", border: "1px solid #CBD5E1", borderRadius: "10px", padding: "10px 14px" }}>
              <p style={{ fontSize: "11px", fontWeight: 800, color: "#334155", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {r.reepOptionLabel}
              </p>
              {resultats.possibiliteREEP ? (
                <p style={{ fontSize: "12px", color: "#334155", margin: 0 }}>
                  🏦 <strong>{r.reepLabel} :</strong>{" "}{resultats.possibiliteREEP}
                </p>
              ) : (
                <p style={{ fontSize: "12px", color: "#64748B", margin: 0 }}>{r.noEstimateLabel}</p>
              )}
            </div>

            {resultats.perspectiveQC === "non" && (
              <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "10px 14px" }}>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                  🏆 {r.perspectiveLabel} : non admissible (programme fermé aux nouvelles inscriptions depuis hiver 2025)
                </p>
              </div>
            )}
          </div>

          <p style={{ fontSize: "11px", color: "#78716C", lineHeight: 1.6, margin: "12px 0 0" }}>{r.totalNote}</p>

          {/* CTA officiel */}
          <a
            href={r.officialCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={FOCUS_CLASS}
            style={{
              display: "block", width: "100%", background: "#1E40AF", color: "white",
              fontWeight: 700, fontSize: "14px", padding: "13px", borderRadius: "12px",
              textDecoration: "none", textAlign: "center", marginTop: "1rem",
            }}
          >
            {r.officialCta} →
          </a>

          {/* Couleur selon admissibilité */}
          {resultats.admissibiliteAFE === "non-resident" && (
            <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "10px", padding: "10px 14px", marginTop: "10px" }}>
              <p style={{ fontSize: "12px", color: "#991B1B", margin: 0 }}>
                ℹ️ Les crédits d&apos;impôt fédéraux restent accessibles même sans résidence québécoise, si vous payez des frais de scolarité au Canada.
              </p>
            </div>
          )}

          {/* Reset */}
          <button
            type="button"
            className={FOCUS_CLASS}
            onClick={() => { setResultats(null); }}
            style={{
              display: "block", width: "100%", background: "transparent", color: "#78716C",
              fontWeight: 600, fontSize: "13px", padding: "10px", borderRadius: "10px",
              border: "1px solid #E5E7EB", cursor: "pointer", marginTop: "10px",
            }}
          >
            {f.resetLabel}
          </button>
        </div>
      )}
    </div>
  );
}
