"use client";

import { useState, useMemo } from "react";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

// ─── Données fournisseurs ──────────────────────────────────────────────────────

interface Forfait {
  fournisseur: string;
  initiales: string;
  couleur: string;
  type: "Fibre" | "Cable";
  vitesseDL: number;   // Mbps
  vitesseUL: number;   // Mbps
  prix: number;        // $/mois (sans modem)
  contrat: boolean;
  dureeContrat?: string;
  modemInclus: boolean;
  fraisModem?: number; // $/mois si location
  regions: string[];
  url: string;
}

const forfaits: Forfait[] = [
  {
    fournisseur: "Vidéotron",
    initiales: "VT",
    couleur: "#6D28D9",
    type: "Cable",
    vitesseDL: 400,
    vitesseUL: 20,
    prix: 69,
    contrat: false,
    modemInclus: false,
    fraisModem: 10,
    regions: ["Montréal", "Québec", "Rive-Sud"],
    url: "https://www.videotron.com/internet",
  },
  {
    fournisseur: "Vidéotron",
    initiales: "VT",
    couleur: "#6D28D9",
    type: "Fibre",
    vitesseDL: 1000,
    vitesseUL: 1000,
    prix: 89,
    contrat: false,
    modemInclus: false,
    fraisModem: 10,
    regions: ["Montréal", "Québec"],
    url: "https://www.videotron.com/internet",
  },
  {
    fournisseur: "Bell",
    initiales: "BL",
    couleur: "#1D4ED8",
    type: "Fibre",
    vitesseDL: 500,
    vitesseUL: 500,
    prix: 79,
    contrat: true,
    dureeContrat: "24 mois",
    modemInclus: true,
    regions: ["Province entière"],
    url: "https://www.bell.ca/Internet",
  },
  {
    fournisseur: "Bell",
    initiales: "BL",
    couleur: "#1D4ED8",
    type: "Fibre",
    vitesseDL: 1500,
    vitesseUL: 1000,
    prix: 99,
    contrat: true,
    dureeContrat: "24 mois",
    modemInclus: true,
    regions: ["Province entière"],
    url: "https://www.bell.ca/Internet",
  },
  {
    fournisseur: "Fizz",
    initiales: "FZ",
    couleur: "#059669",
    type: "Cable",
    vitesseDL: 200,
    vitesseUL: 20,
    prix: 47,
    contrat: false,
    modemInclus: false,
    fraisModem: 5,
    regions: ["Montréal", "Québec"],
    url: "https://fizz.ca/fr/internet",
  },
  {
    fournisseur: "Fizz",
    initiales: "FZ",
    couleur: "#059669",
    type: "Fibre",
    vitesseDL: 400,
    vitesseUL: 50,
    prix: 58,
    contrat: false,
    modemInclus: false,
    fraisModem: 5,
    regions: ["Montréal", "Québec"],
    url: "https://fizz.ca/fr/internet",
  },
  {
    fournisseur: "Oxio",
    initiales: "OX",
    couleur: "#D97706",
    type: "Cable",
    vitesseDL: 120,
    vitesseUL: 20,
    prix: 44,
    contrat: false,
    modemInclus: false,
    fraisModem: 7,
    regions: ["Montréal", "Québec"],
    url: "https://oxio.ca/fr",
  },
  {
    fournisseur: "TekSavvy",
    initiales: "TS",
    couleur: "#7C3AED",
    type: "Cable",
    vitesseDL: 150,
    vitesseUL: 15,
    prix: 49,
    contrat: false,
    modemInclus: false,
    regions: ["Montréal"],
    url: "https://teksavvy.com/fr/internet",
  },
  {
    fournisseur: "Cogeco",
    initiales: "CG",
    couleur: "#DC2626",
    type: "Cable",
    vitesseDL: 200,
    vitesseUL: 20,
    prix: 64,
    contrat: false,
    modemInclus: false,
    regions: ["Montréal-Est", "Lanaudière", "Laurentides"],
    url: "https://www.cogeco.ca/fr/internet",
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type BudgetMax = 50 | 75 | 100 | 999;
type VitesseMin = 30 | 100 | 500 | 1000;
type TypeConnexion = "Tous" | "Fibre" | "Cable";
type Tri = "prix" | "vitesse" | "rapport";

// ─── Composant ────────────────────────────────────────────────────────────────

const AD_PLACEHOLDER = (
  <div
    style={{
      background: "#EDE9E0",
      borderRadius: "12px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#A8A29E",
      fontSize: "11px",
      marginBottom: "1.5rem",
    }}
  >
    Publicité
  </div>
);

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
        whiteSpace: "nowrap" as const,
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
    const filtered = forfaits.filter((f) => {
      if (f.prix > budgetMax) return false;
      if (f.vitesseDL < vitesseMin) return false;
      if (typeConnexion !== "Tous" && f.type !== typeConnexion) return false;
      if (sansContrat && f.contrat) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      if (tri === "prix") return a.prix - b.prix;
      if (tri === "vitesse") return b.vitesseDL - a.vitesseDL;
      if (tri === "rapport") return b.vitesseDL / b.prix - a.vitesseDL / a.prix;
      return 0;
    });
  }, [budgetMax, vitesseMin, typeConnexion, sansContrat, tri]);

  // Badges
  const prixMin = Math.min(...forfaits.map((f) => f.prix));
  const vitesseMax = Math.max(...forfaits.map((f) => f.vitesseDL));

  return (
    <div>
      {/* Filtres */}
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

        {/* Budget */}
        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
            Budget max / mois
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {([50, 75, 100, 999] as BudgetMax[]).map((b) => (
              <FilterButton key={b} active={budgetMax === b} onClick={() => setBudgetMax(b)}>
                {b === 999 ? "Peu importe" : `${b} $`}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Vitesse minimale */}
        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
            Vitesse minimale (download)
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {([
              { val: 30 as VitesseMin, label: "30 Mbps" },
              { val: 100 as VitesseMin, label: "100 Mbps" },
              { val: 500 as VitesseMin, label: "500 Mbps" },
              { val: 1000 as VitesseMin, label: "1 Gbps" },
            ]).map((opt) => (
              <FilterButton key={opt.val} active={vitesseMin === opt.val} onClick={() => setVitesseMin(opt.val)}>
                {opt.label}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Type connexion */}
        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
            Type de connexion
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {(["Tous", "Fibre", "Cable"] as TypeConnexion[]).map((t) => (
              <FilterButton key={t} active={typeConnexion === t} onClick={() => setTypeConnexion(t)}>
                {t === "Cable" ? "Câble" : t}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Sans contrat toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => setSansContrat((v) => !v)}
            style={{
              width: "44px",
              height: "24px",
              borderRadius: "100px",
              border: "none",
              background: sansContrat ? GREEN : "#D1CBC2",
              position: "relative",
              cursor: "pointer",
              transition: "background 0.2s",
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
                transition: "left 0.2s",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          </button>
          <span style={{ fontSize: "13px", fontWeight: sansContrat ? 700 : 400, color: "#1C1C1E" }}>
            Sans engagement uniquement
          </span>
        </div>
      </div>

      {/* Ad placeholder 2 */}
      {AD_PLACEHOLDER}

      {/* Tri */}
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
            Rapport qualité-prix
          </FilterButton>
        </div>
      </div>

      {/* Résultats */}
      {resultats.length === 0 ? (
        <div
          style={{
            background: "white",
            border: "1px dashed #D1CCC4",
            borderRadius: "14px",
            padding: "2rem",
            textAlign: "center",
            color: "#A8A29E",
            fontSize: "13px",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          Aucun forfait ne correspond à vos critères. Ajustez les filtres ci-dessus.
        </div>
      ) : (
        <div>
          <p style={{ fontSize: "12px", color: "#A8A29E", marginBottom: "12px" }}>
            {resultats.length} forfait{resultats.length > 1 ? "s" : ""} trouvé{resultats.length > 1 ? "s" : ""}
          </p>
          <div className="flex flex-col gap-3 mb-4">
            {resultats.map((f, i) => {
              const estMeilleurPrix = f.prix === prixMin;
              const estMeilleureVitesse = f.vitesseDL === vitesseMax;
              const estSansEngagement = !f.contrat;

              return (
                <div key={`${f.fournisseur}-${f.vitesseDL}-${f.type}`}>
                  <div
                    style={{
                      background: "white",
                      border: i === 0 ? `2px solid ${GREEN}` : "1px solid #EDE9E0",
                      borderRadius: "14px",
                      padding: "14px 16px",
                    }}
                  >
                    {/* En-tête fournisseur */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      {/* Logo placeholder (initiales) */}
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
                          letterSpacing: "0.02em",
                        }}
                      >
                        {f.initiales}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            flexWrap: "wrap",
                            marginBottom: "3px",
                          }}
                        >
                          <span style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E" }}>
                            {f.fournisseur}
                          </span>
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
                          {i === 0 && (
                            <span
                              style={{
                                background: GREEN,
                                color: "white",
                                fontSize: "10px",
                                fontWeight: 700,
                                padding: "2px 7px",
                                borderRadius: "100px",
                              }}
                            >
                              ⭐ Meilleur résultat
                            </span>
                          )}
                        </div>
                        {/* Badges */}
                        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                          {estMeilleurPrix && (
                            <span
                              style={{
                                background: "#D1FAE5",
                                color: "#065F46",
                                fontSize: "10px",
                                fontWeight: 600,
                                padding: "1px 7px",
                                borderRadius: "100px",
                              }}
                            >
                              💰 Meilleur prix
                            </span>
                          )}
                          {estMeilleureVitesse && (
                            <span
                              style={{
                                background: "#DBEAFE",
                                color: "#1D4ED8",
                                fontSize: "10px",
                                fontWeight: 600,
                                padding: "1px 7px",
                                borderRadius: "100px",
                              }}
                            >
                              ⚡ Meilleure vitesse
                            </span>
                          )}
                          {estSansEngagement && (
                            <span
                              style={{
                                background: "#FEF3C7",
                                color: "#92400E",
                                fontSize: "10px",
                                fontWeight: 600,
                                padding: "1px 7px",
                                borderRadius: "100px",
                              }}
                            >
                              🔓 Sans engagement
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Prix */}
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontWeight: 800, fontSize: "20px", color: DARK, lineHeight: 1 }}>
                          {f.prix} $
                        </div>
                        <div style={{ fontSize: "10px", color: "#78716C" }}>/mois</div>
                      </div>
                    </div>

                    {/* Détails vitesse */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "8px",
                        background: "#F7F3EC",
                        borderRadius: "10px",
                        padding: "10px 12px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "10px", color: "#A8A29E", marginBottom: "2px" }}>
                          ⬇️ Download
                        </div>
                        <div style={{ fontWeight: 800, fontSize: "13px", color: "#1C1C1E" }}>
                          {f.vitesseDL >= 1000 ? `${f.vitesseDL / 1000} Gbps` : `${f.vitesseDL} Mbps`}
                        </div>
                      </div>
                      <div style={{ textAlign: "center", borderLeft: "1px solid #EDE9E0", borderRight: "1px solid #EDE9E0" }}>
                        <div style={{ fontSize: "10px", color: "#A8A29E", marginBottom: "2px" }}>
                          ⬆️ Upload
                        </div>
                        <div style={{ fontWeight: 800, fontSize: "13px", color: "#1C1C1E" }}>
                          {f.vitesseUL >= 1000 ? `${f.vitesseUL / 1000} Gbps` : `${f.vitesseUL} Mbps`}
                        </div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "10px", color: "#A8A29E", marginBottom: "2px" }}>
                          📋 Contrat
                        </div>
                        <div style={{ fontWeight: 800, fontSize: "12px", color: f.contrat ? "#DC2626" : "#059669" }}>
                          {f.contrat ? f.dureeContrat : "Aucun"}
                        </div>
                      </div>
                    </div>

                    {/* Modem + régions */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginBottom: "10px",
                      }}
                    >
                      <span style={{ fontSize: "12px", color: "#78716C" }}>
                        {f.modemInclus
                          ? "✅ Modem inclus"
                          : f.fraisModem
                          ? `📦 Modem +${f.fraisModem} $/mois`
                          : "📦 Modem non inclus"}
                      </span>
                      <span style={{ fontSize: "11px", color: "#A8A29E" }}>
                        📍 {f.regions.join(", ")}
                      </span>
                    </div>

                    {/* CTA */}
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
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
                      Voir l&apos;offre sur {f.fournisseur} →
                    </a>
                  </div>

                  {/* Ad après les 4 premiers résultats */}
                  {i === 3 && resultats.length > 4 && (
                    <div
                      style={{
                        background: "#EDE9E0",
                        borderRadius: "12px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#A8A29E",
                        fontSize: "11px",
                        marginTop: "12px",
                      }}
                    >
                      Publicité
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p
            style={{
              fontSize: "11px",
              color: "#A8A29E",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            Prix indicatifs basés sur les tarifs publics des fournisseurs au Québec en 2026.
            Les offres peuvent varier selon votre adresse et les promotions en cours.
            Cliquez sur un fournisseur pour consulter l&apos;offre exacte et les conditions.
          </p>
        </div>
      )}
    </div>
  );
}
