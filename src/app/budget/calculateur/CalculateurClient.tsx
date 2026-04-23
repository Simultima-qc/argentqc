"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

interface Ligne {
  label: string;
  key: string;
  emoji: string;
  placeholder: string;
  color: string;
}

const lignesDepenses: Ligne[] = [
  { label: "Loyer / hypothèque", key: "loyer", emoji: "🏠", placeholder: "ex: 1200", color: "#3B82F6" },
  { label: "Épicerie", key: "epicerie", emoji: "🛒", placeholder: "ex: 400", color: "#10B981" },
  { label: "Transport (auto + commun)", key: "transport", emoji: "🚗", placeholder: "ex: 300", color: "#F59E0B" },
  { label: "Restaurants & sorties", key: "restos", emoji: "🍽️", placeholder: "ex: 200", color: "#EC4899" },
  { label: "Internet + cellulaire", key: "internet", emoji: "📱", placeholder: "ex: 120", color: "#8B5CF6" },
  { label: "Électricité (Hydro-QC)", key: "electricite", emoji: "⚡", placeholder: "ex: 80", color: "#F97316" },
  { label: "Assurances (auto, habitation)", key: "assurances", emoji: "🛡️", placeholder: "ex: 150", color: "#06B6D4" },
  { label: "Loisirs & abonnements", key: "loisirs", emoji: "🎬", placeholder: "ex: 100", color: "#84CC16" },
  { label: "Santé (dentiste, physio, etc.)", key: "sante", emoji: "💊", placeholder: "ex: 80", color: "#EF4444" },
  { label: "Dettes & remboursements", key: "dettes", emoji: "💳", placeholder: "ex: 200", color: "#6B7280" },
  { label: "Épargne & investissements", key: "epargne", emoji: "💰", placeholder: "ex: 150", color: "#059669" },
  { label: "Autres dépenses", key: "autres", emoji: "📦", placeholder: "ex: 100", color: "#A78BFA" },
];

type Depenses = Record<string, string>;

const depensesInit: Depenses = Object.fromEntries(lignesDepenses.map((l) => [l.key, ""]));

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Chart: any;
  }
}

export default function CalculateurClient() {
  const [revenu, setRevenu] = useState("");
  const [depenses, setDepenses] = useState<Depenses>(depensesInit);
  const [calcule, setCalcule] = useState(false);
  const chartRef = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartInstance = useRef<any>(null);

  const totalDepenses = lignesDepenses.reduce(
    (sum, l) => sum + (parseFloat(depenses[l.key]) || 0),
    0
  );
  const revenuNum = parseFloat(revenu) || 0;
  const solde = revenuNum - totalDepenses;
  const taux = revenuNum > 0 ? Math.round((totalDepenses / revenuNum) * 100) : 0;

  useEffect(() => {
    // Charger Chart.js une seule fois via CDN
    if (typeof window !== "undefined" && !window.Chart) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!calcule || !chartRef.current) return;

    const renderChart = () => {
      if (!window.Chart) {
        setTimeout(renderChart, 200);
        return;
      }

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const lignesAvecValeur = lignesDepenses.filter((l) => parseFloat(depenses[l.key]) > 0);
      if (lignesAvecValeur.length === 0) return;

      chartInstance.current = new window.Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: lignesAvecValeur.map((l) => l.label),
          datasets: [
            {
              data: lignesAvecValeur.map((l) => parseFloat(depenses[l.key]) || 0),
              backgroundColor: lignesAvecValeur.map((l) => l.color),
              borderWidth: 2,
              borderColor: "#F7F3EC",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: { size: 11 },
                padding: 12,
                usePointStyle: true,
              },
            },
            tooltip: {
              callbacks: {
                label: (ctx: { label: string; parsed: number }) =>
                  ` ${ctx.label} : ${ctx.parsed.toFixed(0)} $`,
              },
            },
          },
        },
      });
    };

    renderChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [calcule, depenses]);

  const handleCalculer = () => {
    setCalcule(true);
    setTimeout(() => {
      document.getElementById("resultats")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleReset = () => {
    setRevenu("");
    setDepenses(depensesInit);
    setCalcule(false);
  };

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/questionnaire" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.85 }}>
            Trouver mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-10">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
            {" › "}
            <Link href="/budget" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Budget</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Calculateur</span>
          </nav>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.5rem, 5vw, 2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "10px" }}>
            Calculateur budget mensuel Québec
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.6 }}>
            Entrez vos revenus et dépenses pour obtenir votre bilan mensuel avec graphique.
            Aucune donnée n&apos;est sauvegardée — tout reste dans votre navigateur.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Badge confidentialité */}
        <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "1.1rem" }}>🔒</span>
          <p style={{ fontSize: "12px", color: "#065F46", margin: 0, lineHeight: 1.5 }}>
            <strong>Confidentialité :</strong>{" "}aucune donnée n&apos;est envoyée à nos serveurs. Le calcul se fait entièrement dans votre navigateur.
          </p>
        </div>

        {/* Revenu */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "10px" }}>
            💵 Revenu mensuel net (après impôts)
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="number"
              value={revenu}
              onChange={(e) => setRevenu(e.target.value)}
              placeholder="ex: 3 500"
              style={{
                width: "100%",
                padding: "12px 40px 12px 14px",
                fontSize: "16px",
                fontWeight: 600,
                border: "2px solid #E5E7EB",
                borderRadius: "10px",
                outline: "none",
                background: "#FAFAFA",
                color: "#1C1C1E",
                boxSizing: "border-box",
              }}
              onFocus={(e) => { e.target.style.borderColor = GOLD; }}
              onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
            />
            <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "#A8A29E", fontWeight: 600, fontSize: "14px" }}>$</span>
          </div>
        </div>

        {/* Dépenses */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.25rem" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#1C1C1E", marginBottom: "1rem" }}>
            📊 Dépenses mensuelles
          </h2>
          <div className="flex flex-col gap-3">
            {lignesDepenses.map((l) => (
              <div key={l.key} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.2rem", flexShrink: 0, width: "28px", textAlign: "center" }}>{l.emoji}</span>
                <label style={{ flex: 1, fontSize: "13px", color: "#44403C", minWidth: 0 }}>{l.label}</label>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <input
                    type="number"
                    value={depenses[l.key]}
                    onChange={(e) => setDepenses((prev) => ({ ...prev, [l.key]: e.target.value }))}
                    placeholder={l.placeholder}
                    style={{
                      width: "110px",
                      padding: "8px 28px 8px 10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      border: "1.5px solid #E5E7EB",
                      borderRadius: "8px",
                      outline: "none",
                      background: "#FAFAFA",
                      color: "#1C1C1E",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = l.color; }}
                    onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
                  />
                  <span style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", color: "#A8A29E", fontSize: "12px" }}>$</span>
                </div>
              </div>
            ))}
          </div>
          {totalDepenses > 0 && (
            <div style={{ borderTop: "1px solid #F0EBE0", marginTop: "1rem", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#78716C" }}>Total dépenses</span>
              <span style={{ fontSize: "16px", fontWeight: 800, color: "#EF4444" }}>{totalDepenses.toFixed(0)} $</span>
            </div>
          )}
        </div>

        {/* Bouton calculer */}
        <button
          onClick={handleCalculer}
          disabled={!revenu && totalDepenses === 0}
          style={{
            display: "block",
            width: "100%",
            background: revenu || totalDepenses > 0 ? GOLD : "#D1D5DB",
            color: revenu || totalDepenses > 0 ? DARK : "#9CA3AF",
            fontWeight: 800,
            fontSize: "16px",
            padding: "15px",
            borderRadius: "14px",
            border: "none",
            cursor: revenu || totalDepenses > 0 ? "pointer" : "default",
            marginBottom: "2rem",
            transition: "background 0.15s",
          }}
        >
          Calculer mon bilan →
        </button>

        {/* Résultats */}
        {calcule && (
          <div id="resultats">
            {/* Bilan */}
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              Votre bilan mensuel
            </h2>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "14px", padding: "14px 10px", textAlign: "center" }}>
                <div style={{ fontSize: "11px", color: "#1D4ED8", fontWeight: 600, marginBottom: "6px" }}>Revenus</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1D4ED8" }}>{revenuNum > 0 ? revenuNum.toFixed(0) + " $" : "—"}</div>
              </div>
              <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "14px", padding: "14px 10px", textAlign: "center" }}>
                <div style={{ fontSize: "11px", color: "#DC2626", fontWeight: 600, marginBottom: "6px" }}>Dépenses</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#DC2626" }}>{totalDepenses > 0 ? totalDepenses.toFixed(0) + " $" : "—"}</div>
              </div>
              <div style={{
                background: solde >= 0 ? "#ECFDF5" : "#FEF2F2",
                border: `1px solid ${solde >= 0 ? "#A7F3D0" : "#FECACA"}`,
                borderRadius: "14px", padding: "14px 10px", textAlign: "center"
              }}>
                <div style={{ fontSize: "11px", color: solde >= 0 ? "#065F46" : "#DC2626", fontWeight: 600, marginBottom: "6px" }}>Solde</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: solde >= 0 ? GREEN : "#DC2626" }}>
                  {revenuNum > 0 ? (solde >= 0 ? "+" : "") + solde.toFixed(0) + " $" : "—"}
                </div>
              </div>
            </div>

            {/* Message bilan */}
            {revenuNum > 0 && totalDepenses > 0 && (
              <div style={{
                background: solde >= 0 ? "#ECFDF5" : "#FEF3C7",
                border: `1px solid ${solde >= 0 ? "#A7F3D0" : "#FCD34D"}`,
                borderRadius: "14px",
                padding: "1rem 1.25rem",
                marginBottom: "1.5rem",
              }}>
                <p style={{ fontSize: "13px", color: solde >= 0 ? "#065F46" : "#92400E", lineHeight: 1.6, margin: 0 }}>
                  {solde >= 0 ? (
                    <>
                      ✅ <strong>Budget équilibré.</strong>{" "}Vos dépenses représentent{" "}<strong>{taux}%</strong>{" "}de vos revenus.
                      {taux <= 70 ? " Excellent ! Vous avez de la marge pour épargner davantage." : " Essayez de réduire quelques postes pour augmenter votre épargne."}
                    </>
                  ) : (
                    <>
                      ⚠️ <strong>Budget déficitaire.</strong>{" "}Vos dépenses dépassent vos revenus de{" "}
                      <strong>{Math.abs(solde).toFixed(0)} $</strong>{" "}par mois. Identifiez les postes à réduire, et vérifiez si vous avez droit à des aides gouvernementales.
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Graphique */}
            {totalDepenses > 0 && (
              <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1C1C1E", marginBottom: "1rem", textAlign: "center" }}>
                  Répartition de vos dépenses
                </h3>
                <canvas ref={chartRef} style={{ maxHeight: "320px" }} />
              </div>
            )}

            {/* Détail */}
            <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1C1C1E", marginBottom: "0.75rem" }}>Détail par poste</h3>
              <div className="flex flex-col gap-2">
                {lignesDepenses
                  .filter((l) => parseFloat(depenses[l.key]) > 0)
                  .sort((a, b) => (parseFloat(depenses[b.key]) || 0) - (parseFloat(depenses[a.key]) || 0))
                  .map((l) => {
                    const val = parseFloat(depenses[l.key]) || 0;
                    const pct = totalDepenses > 0 ? Math.round((val / totalDepenses) * 100) : 0;
                    return (
                      <div key={l.key}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                          <span style={{ fontSize: "12px", color: "#44403C" }}>{l.emoji} {l.label}</span>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "#1C1C1E" }}>{val.toFixed(0)} $ ({pct}%)</span>
                        </div>
                        <div style={{ height: "5px", background: "#F3F4F6", borderRadius: "100px", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${pct}%`, background: l.color, borderRadius: "100px", transition: "width 0.5s ease" }} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* CTA aides */}
            <div style={{ background: DARK, borderRadius: "16px", padding: "1.25rem", textAlign: "center", marginBottom: "1.5rem" }}>
              <p style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>
                Des aides gouvernementales pourraient alléger votre budget
              </p>
              <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "12px", marginBottom: "1rem", lineHeight: 1.6 }}>
                Crédits d&apos;impôt, allocations, subventions — trouvez ce à quoi vous avez droit en 2 minutes.
              </p>
              <Link
                href="/questionnaire"
                style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 24px", borderRadius: "12px", textDecoration: "none" }}
              >
                Trouver mes aides →
              </Link>
            </div>

            {/* Réinitialiser */}
            <button
              onClick={handleReset}
              style={{
                display: "block", width: "100%",
                background: "transparent", color: "#78716C",
                fontWeight: 600, fontSize: "14px",
                padding: "12px", borderRadius: "12px",
                border: "1px solid #E5E7EB",
                cursor: "pointer",
                marginBottom: "2rem",
              }}
            >
              Recommencer le calcul
            </button>
          </div>
        )}

        {/* Liens */}
        <div className="flex flex-col gap-3 mb-4">
          <Link href="/budget" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>📊</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Coût de la vie au Québec — données de référence</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Loyers, épicerie, comparaison par ville</div>
            </div>
            <span style={{ color: "#3B82F6" }}>→</span>
          </Link>
          <Link href="/demenagement" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>📦</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Guide déménagement Québec</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Intégrez les coûts de déménagement à votre budget</div>
            </div>
            <span style={{ color: "#3B82F6" }}>→</span>
          </Link>
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif — aucune donnée personnelle n&apos;est collectée par cet outil.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
          <Link href="/politique-confidentialite" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "4px" }}>Politique de confidentialité</Link>
        </div>
      </footer>
    </main>
  );
}
