"use client";

import { useMemo, useState } from "react";
import {
  internetBudgetOptions2026,
  internetConnectionTypes2026,
  internetOffers2026,
  internetSpeedOptions2026,
} from "@/data/finance-2026";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

type BudgetMax = 50 | 75 | 100 | 999;
type VitesseMin = 30 | 100 | 500 | 1000;
type TypeConnexion = "Tous" | "Fibre" | "Cable";
type Tri = "prix" | "vitesse" | "rapport";

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "7px 14px",
        borderRadius: "10px",
        border: active ? `2px solid ${GOLD}` : "2px solid #E7E3DC",
        background: active ? DARK : "white",
        color: active ? "#F0EBE0" : "#44403C",
        fontSize: "13px",
        fontWeight: active ? 700 : 400,
        cursor: "pointer",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

export default function ComparateurInternetClient() {
  const [budgetMax, setBudgetMax] = useState<BudgetMax>(999);
  const [vitesseMin, setVitesseMin] = useState<VitesseMin>(30);
  const [typeConnexion, setTypeConnexion] = useState<TypeConnexion>("Tous");
  const [sansContrat, setSansContrat] = useState(false);
  const [tri, setTri] = useState<Tri>("prix");

  const resultats = useMemo(() => {
    const filtered = internetOffers2026.filter((f) => {
      if (f.prix > budgetMax) return false;
      if (f.vitesseDL < vitesseMin) return false;
      if (typeConnexion !== "Tous" && f.type !== typeConnexion) return false;
      if (sansContrat && f.contrat) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      if (tri === "prix") return a.prix - b.prix;
      if (tri === "vitesse") return b.vitesseDL - a.vitesseDL;
      return b.vitesseDL / b.prix - a.vitesseDL / a.prix;
    });
  }, [budgetMax, vitesseMin, typeConnexion, sansContrat, tri]);

  const prixMin = Math.min(...internetOffers2026.map((f) => f.prix));
  const vitesseMax = Math.max(...internetOffers2026.map((f) => f.vitesseDL));

  return (
    <div>
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          border: "1px solid #EDE9E0",
          padding: "1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.1rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          Filtrer les forfaits
        </h2>

        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
            Budget max / mois
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {(internetBudgetOptions2026 as readonly BudgetMax[]).map((b) => (
              <FilterButton key={b} active={budgetMax === b} onClick={() => setBudgetMax(b)}>
                {b === 999 ? "Peu importe" : `${b} $`}
              </FilterButton>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
            Vitesse minimale
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {(internetSpeedOptions2026 as readonly { val: VitesseMin; label: string }[]).map((opt) => (
              <FilterButton key={opt.val} active={vitesseMin === opt.val} onClick={() => setVitesseMin(opt.val)}>
                {opt.label}
              </FilterButton>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
            Type de connexion
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {(internetConnectionTypes2026 as readonly TypeConnexion[]).map((t) => (
              <FilterButton key={t} active={typeConnexion === t} onClick={() => setTypeConnexion(t)}>
                {t}
              </FilterButton>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => setSansContrat((value) => !value)}
            style={{
              width: "44px",
              height: "24px",
              borderRadius: "100px",
              border: "none",
              background: sansContrat ? GREEN : "#D1CBC2",
              position: "relative",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "2px",
                left: sansContrat ? "22px" : "2px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          </button>
          <span style={{ fontSize: "13px", fontWeight: sansContrat ? 700 : 400, color: "#1C1C1E" }}>
            Sans engagement uniquement
          </span>
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
          Trier par
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <FilterButton active={tri === "prix"} onClick={() => setTri("prix")}>
            Prix croissant
          </FilterButton>
          <FilterButton active={tri === "vitesse"} onClick={() => setTri("vitesse")}>
            Vitesse
          </FilterButton>
          <FilterButton active={tri === "rapport"} onClick={() => setTri("rapport")}>
            Rapport qualite-prix
          </FilterButton>
        </div>
      </div>

      <p style={{ fontSize: "12px", color: "#A8A29E", marginBottom: "12px" }}>
        {resultats.length} forfait{resultats.length > 1 ? "s" : ""} trouve{resultats.length > 1 ? "s" : ""}
      </p>
      <div className="flex flex-col gap-3 mb-4">
        {resultats.map((f, i) => (
          <div
            key={`${f.fournisseur}-${f.vitesseDL}-${f.type}`}
            style={{
              background: "white",
              border: i === 0 ? `2px solid ${GREEN}` : "1px solid #EDE9E0",
              borderRadius: "14px",
              padding: "14px 16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: f.couleur,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "13px",
                  flexShrink: 0,
                }}
              >
                {f.initiales}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "3px" }}>
                  <span style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E" }}>{f.fournisseur}</span>
                  <span
                    style={{
                      background: f.type === "Fibre" ? "#DBEAFE" : "#FEF3C7",
                      color: f.type === "Fibre" ? "#1D4ED8" : "#92400E",
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "2px 7px",
                      borderRadius: "100px",
                    }}
                  >
                    {f.type}
                  </span>
                  {i === 0 && <span style={{ background: GREEN, color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 7px", borderRadius: "100px" }}>Meilleur resultat</span>}
                </div>
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                  {f.prix === prixMin && <span style={{ fontSize: "10px", color: "#065F46" }}>Meilleur prix</span>}
                  {f.vitesseDL === vitesseMax && <span style={{ fontSize: "10px", color: "#1D4ED8" }}>Meilleure vitesse</span>}
                  {!f.contrat && <span style={{ fontSize: "10px", color: "#92400E" }}>Sans engagement</span>}
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontWeight: 800, fontSize: "20px", color: DARK, lineHeight: 1 }}>{f.prix} $</div>
                <div style={{ fontSize: "10px", color: "#78716C" }}>/mois</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", background: "#F7F3EC", borderRadius: "10px", padding: "10px 12px", marginBottom: "10px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "10px", color: "#A8A29E", marginBottom: "2px" }}>Download</div>
                <div style={{ fontWeight: 800, fontSize: "13px", color: "#1C1C1E" }}>
                  {f.vitesseDL >= 1000 ? `${f.vitesseDL / 1000} Gbps` : `${f.vitesseDL} Mbps`}
                </div>
              </div>
              <div style={{ textAlign: "center", borderLeft: "1px solid #EDE9E0", borderRight: "1px solid #EDE9E0" }}>
                <div style={{ fontSize: "10px", color: "#A8A29E", marginBottom: "2px" }}>Upload</div>
                <div style={{ fontWeight: 800, fontSize: "13px", color: "#1C1C1E" }}>
                  {f.vitesseUL >= 1000 ? `${f.vitesseUL / 1000} Gbps` : `${f.vitesseUL} Mbps`}
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "10px", color: "#A8A29E", marginBottom: "2px" }}>Contrat</div>
                <div style={{ fontWeight: 800, fontSize: "12px", color: f.contrat ? "#DC2626" : "#059669" }}>
                  {f.contrat ? f.dureeContrat : "Aucun"}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px", color: "#78716C" }}>
                {f.modemInclus ? "Modem inclus" : f.fraisModem ? `Modem +${f.fraisModem} $/mois` : "Modem non inclus"}
              </span>
              <span style={{ fontSize: "11px", color: "#A8A29E" }}>{f.regions.join(", ")}</span>
            </div>

            <a
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: DARK,
                color: GOLD,
                fontWeight: 700,
                fontSize: "13px",
                padding: "10px 16px",
                borderRadius: "10px",
                textDecoration: "none",
                width: "100%",
              }}
            >
              Voir l&apos;offre sur {f.fournisseur} -&gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
