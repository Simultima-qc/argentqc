"use client";

import { useState } from "react";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

function formatMontant(n: number): string {
  return n.toLocaleString("fr-CA", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " $";
}

export default function CeliappCalculateurClient() {
  const [cotisationAnnuelle, setCotisationAnnuelle] = useState(8000);
  const [tauxRendement, setTauxRendement] = useState(5);
  const [nombreAnnees, setNombreAnnees] = useState(3);

  const anneeActuelle = new Date().getFullYear();

  // Calcul future value of annuity: FV = C * ((1+r)^n - 1) / r
  const r = tauxRendement / 100;
  const totalCotise = cotisationAnnuelle * nombreAnnees;
  const totalAvecRendement =
    r === 0
      ? totalCotise
      : cotisationAnnuelle * ((Math.pow(1 + r, nombreAnnees) - 1) / r) * (1 + r);
  const rendementGenere = totalAvecRendement - totalCotise;
  const economieImpot = totalCotise * 0.37;
  const anneeAchat = anneeActuelle + nombreAnnees;
  const plafondAtteint = totalCotise >= 40000;

  return (
    <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>

      {/* Cotisation annuelle */}
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>
            💵 Cotisation annuelle
          </label>
          <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{formatMontant(cotisationAnnuelle)}</span>
        </div>
        <input
          type="range"
          min={500}
          max={8000}
          step={500}
          value={cotisationAnnuelle}
          onChange={(e) => setCotisationAnnuelle(Number(e.target.value))}
          style={{ width: "100%", accentColor: GOLD }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>
          <span>500 $</span>
          <span>8 000 $ (max)</span>
        </div>
      </div>

      {/* Taux de rendement */}
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>
            📈 Taux de rendement estimé
          </label>
          <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{tauxRendement} %</span>
        </div>
        <input
          type="range"
          min={0}
          max={10}
          step={0.5}
          value={tauxRendement}
          onChange={(e) => setTauxRendement(Number(e.target.value))}
          style={{ width: "100%", accentColor: GREEN }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>
          <span>0 % (sans risque)</span>
          <span>10 %</span>
        </div>
        <p style={{ fontSize: "11px", color: "#A8A29E", marginTop: "4px" }}>
          Référence : CPG ~4 %, FNB d&apos;indices ~6–7 % (historique long terme)
        </p>
      </div>

      {/* Nombre d'années */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>
            📅 Nombre d&apos;années de cotisation
          </label>
          <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{nombreAnnees} an{nombreAnnees > 1 ? "s" : ""}</span>
        </div>
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={nombreAnnees}
          onChange={(e) => setNombreAnnees(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#8B5CF6" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>
          <span>1 an</span>
          <span>5 ans (plafond à vie)</span>
        </div>
      </div>

      {/* Résultats */}
      <div style={{ background: DARK, borderRadius: "14px", padding: "1.25rem", marginBottom: "1rem" }}>
        <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Résultats estimés
        </p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div style={{ background: "rgba(245,200,66,0.08)", border: "1px solid rgba(245,200,66,0.15)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "rgba(240,235,224,0.5)", fontWeight: 600, marginBottom: "4px" }}>Total cotisé</div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: GOLD }}>{formatMontant(totalCotise)}</div>
          </div>
          <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "rgba(240,235,224,0.5)", fontWeight: 600, marginBottom: "4px" }}>Avec rendement</div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: GREEN }}>{formatMontant(Math.round(totalAvecRendement))}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "rgba(240,235,224,0.5)", fontWeight: 600, marginBottom: "4px" }}>Rendement généré</div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#F0EBE0" }}>+ {formatMontant(Math.round(rendementGenere))}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "rgba(240,235,224,0.5)", fontWeight: 600, marginBottom: "4px" }}>Économie d&apos;impôt</div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#F0EBE0" }}>~ {formatMontant(Math.round(economieImpot))}</div>
          </div>
        </div>
        <div style={{ background: plafondAtteint ? "rgba(16,185,129,0.12)" : "rgba(245,200,66,0.08)", border: `1px solid ${plafondAtteint ? "rgba(16,185,129,0.25)" : "rgba(245,200,66,0.2)"}`, borderRadius: "10px", padding: "12px", textAlign: "center" }}>
          <div style={{ fontSize: "11px", color: "rgba(240,235,224,0.6)", marginBottom: "4px" }}>
            {plafondAtteint ? "🏆 Plafond à vie atteint !" : "🏡 Prêt à acheter en"}
          </div>
          <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: plafondAtteint ? GREEN : GOLD }}>
            {plafondAtteint ? "40 000 $ cotisés" : anneeAchat.toString()}
          </div>
        </div>
      </div>

      {/* Note */}
      <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "10px", padding: "10px 14px" }}>
        <p style={{ fontSize: "11px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>
          ⚠️ <strong>Estimation indicative.</strong>{" "}L&apos;économie d&apos;impôt est calculée à un taux marginal moyen de 37% (Québec). Votre taux réel dépend de votre revenu. Le rendement passé ne garantit pas les résultats futurs. Les cotisations inutilisées ne sont pas reportables d&apos;une année à l&apos;autre dans le CELIAPP.
        </p>
      </div>
    </div>
  );
}
