"use client";

import { useState } from "react";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

function formatMontant(n: number): string {
  return n.toLocaleString("fr-CA", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " $";
}

function getMessageContextuel(couverture: number): { message: string; bg: string; border: string; color: string } {
  if (couverture === 0) {
    return { message: "", bg: "", border: "", color: "" };
  } else if (couverture < 250000) {
    return {
      message: "⚠️ Couverture légère — suffisante pour les besoins immédiats, mais envisagez d'augmenter si vous avez une hypothèque ou des enfants.",
      bg: "#FEF3C7", border: "#FCD34D", color: "#92400E",
    };
  } else if (couverture <= 1000000) {
    return {
      message: "✅ Couverture adéquate — ce montant protège efficacement votre famille contre la perte de revenu et les dettes importantes.",
      bg: "#D1FAE5", border: "#34D399", color: "#065F46",
    };
  } else {
    return {
      message: "💼 Couverture élevée — nous recommandons de consulter un conseiller en sécurité financière pour optimiser votre stratégie (assurance permanente, planification successorale).",
      bg: "#EDE9FE", border: "#8B5CF6", color: "#5B21B6",
    };
  }
}

export default function AssuranceVieCalculateurClient() {
  const [revenuAnnuel, setRevenuAnnuel] = useState("");
  const [nombreAnnees, setNombreAnnees] = useState(10);
  const [soldeHypotheque, setSoldeHypotheque] = useState("");
  const [enfantsACharge, setEnfantsACharge] = useState(0);

  const revenu = parseFloat(revenuAnnuel.replace(/\s/g, "")) || 0;
  const hypotheque = parseFloat(soldeHypotheque.replace(/\s/g, "")) || 0;

  const partRevenu = revenu * nombreAnnees;
  const partHypotheque = hypotheque;
  const partEnfants = enfantsACharge * 50000;
  const couvertureTotal = partRevenu + partHypotheque + partEnfants;

  const ctx = getMessageContextuel(couvertureTotal);

  return (
    <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>

      {/* Revenu annuel */}
      <div style={{ marginBottom: "1.25rem" }}>
        <label style={{ display: "block", fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
          💵 Revenu annuel brut
        </label>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            value={revenuAnnuel}
            onChange={(e) => setRevenuAnnuel(e.target.value)}
            placeholder="ex : 70 000"
            style={{
              width: "100%",
              padding: "11px 40px 11px 14px",
              fontSize: "15px",
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

      {/* Nombre d'années à couvrir */}
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>
            📅 Années de revenu à remplacer
          </label>
          <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{nombreAnnees} ans</span>
        </div>
        <input
          type="range"
          min={5}
          max={30}
          step={5}
          value={nombreAnnees}
          onChange={(e) => setNombreAnnees(Number(e.target.value))}
          style={{ width: "100%", accentColor: GOLD }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>
          <span>5 ans</span>
          <span>30 ans</span>
        </div>
        <p style={{ fontSize: "11px", color: "#A8A29E", marginTop: "4px" }}>
          Recommandé : au moins jusqu&apos;à l&apos;autonomie financière de vos enfants ou à la retraite
        </p>
      </div>

      {/* Hypothèque */}
      <div style={{ marginBottom: "1.25rem" }}>
        <label style={{ display: "block", fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
          🏠 Solde hypothécaire restant
        </label>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            value={soldeHypotheque}
            onChange={(e) => setSoldeHypotheque(e.target.value)}
            placeholder="ex : 350 000 (0 si locataire)"
            style={{
              width: "100%",
              padding: "11px 40px 11px 14px",
              fontSize: "15px",
              fontWeight: 600,
              border: "2px solid #E5E7EB",
              borderRadius: "10px",
              outline: "none",
              background: "#FAFAFA",
              color: "#1C1C1E",
              boxSizing: "border-box",
            }}
            onFocus={(e) => { e.target.style.borderColor = "#3B82F6"; }}
            onBlur={(e) => { e.target.style.borderColor = "#E5E7EB"; }}
          />
          <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "#A8A29E", fontWeight: 600, fontSize: "14px" }}>$</span>
        </div>
      </div>

      {/* Enfants à charge */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>
            👶 Enfants à charge
          </label>
          <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{enfantsACharge}</span>
        </div>
        <input
          type="range"
          min={0}
          max={5}
          step={1}
          value={enfantsACharge}
          onChange={(e) => setEnfantsACharge(Number(e.target.value))}
          style={{ width: "100%", accentColor: GREEN }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>
          <span>0 enfant</span>
          <span>5 enfants (50 000$/enfant)</span>
        </div>
      </div>

      {/* Résultats */}
      {couvertureTotal > 0 && (
        <>
          <div style={{ background: DARK, borderRadius: "14px", padding: "1.25rem", marginBottom: "1rem" }}>
            <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Couverture recommandée
            </p>
            <div style={{ textAlign: "center", marginBottom: "14px" }}>
              <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "2rem", fontWeight: 800, margin: "0 0 4px 0" }}>
                {formatMontant(couvertureTotal)}
              </p>
              <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "12px" }}>estimation de couverture totale</p>
            </div>
            <div className="flex flex-col gap-2">
              {partRevenu > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 12px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(240,235,224,0.6)" }}>💵 Remplacement de revenu ({nombreAnnees} ans)</span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#F0EBE0" }}>{formatMontant(partRevenu)}</span>
                </div>
              )}
              {partHypotheque > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 12px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(240,235,224,0.6)" }}>🏠 Remboursement hypothèque</span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#F0EBE0" }}>{formatMontant(partHypotheque)}</span>
                </div>
              )}
              {partEnfants > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 12px" }}>
                  <span style={{ fontSize: "12px", color: "rgba(240,235,224,0.6)" }}>👶 Enfants à charge ({enfantsACharge} × 50 000 $)</span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#F0EBE0" }}>{formatMontant(partEnfants)}</span>
                </div>
              )}
            </div>
          </div>

          {ctx.message && (
            <div style={{ background: ctx.bg, border: `1px solid ${ctx.border}`, borderRadius: "10px", padding: "10px 14px", marginBottom: "1rem" }}>
              <p style={{ fontSize: "12px", color: ctx.color, margin: 0, lineHeight: 1.65 }}>{ctx.message}</p>
            </div>
          )}
        </>
      )}

      {/* Note */}
      <div style={{ background: "#F7F3EC", border: "1px solid #EDE9E0", borderRadius: "10px", padding: "10px 14px" }}>
        <p style={{ fontSize: "11px", color: "#78716C", margin: 0, lineHeight: 1.6 }}>
          ℹ️ <strong>Estimation indicative.</strong>{" "}Cette formule donne un ordre de grandeur. Pour une soumission réelle, contactez un courtier en assurance ou directement un assureur. Les primes dépendent de votre âge, état de santé et type de couverture choisi.
        </p>
      </div>
    </div>
  );
}
