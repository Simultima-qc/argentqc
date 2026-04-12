"use client";

import { useState, useMemo } from "react";
import {
  assureursAuto2026,
  assureursHabitation2026,
  multAgeAuto2026,
  multBiensHabitation2026,
  multRegionAuto2026,
  multRegionHabitation2026,
  multStatutHabitation2026,
  multUsageAuto2026,
  multVehiculeAuto2026,
} from "@/data/finance-2026";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

// ─── Données habitation ────────────────────────────────────────────────────────

const assureursHabitation = assureursHabitation2026;
/*
  { nom: "Desjardins", emoji: "🏦", type: "Mutuelle / Direct", prix_base: [28, 45] as [number, number], url: "https://www.desjardins.com/assurances/habitation/" },
  { nom: "Intact", emoji: "🏢", type: "Direct / Courtiers", prix_base: [30, 50] as [number, number], url: "https://www.intact.ca/fr/assurance-habitation/" },
  { nom: "Belair Direct", emoji: "💻", type: "Direct en ligne", prix_base: [25, 42] as [number, number], url: "https://www.belairdirect.com/fr/assurance-habitation.html" },
  { nom: "CAA-Québec", emoji: "🚘", type: "Membres CAA", prix_base: [27, 44] as [number, number], url: "https://www.caaquebec.com/fr/assurance/habitation/" },
  { nom: "SSQ / Beneva", emoji: "🌿", type: "Mutuelle", prix_base: [26, 43] as [number, number], url: "https://www.beneva.ca/fr/assurance-habitation" },
  { nom: "La Personnelle", emoji: "🎓", type: "Groupes / Syndicats", prix_base: [24, 40] as [number, number], url: "https://www.lapersonnelle.com/fr/assurances/habitation" },
];

const multStatut: Record<string, number> = { locataire: 1.0, proprietaire: 2.8, condo: 1.6 };
const multRegionHab: Record<string, number> = { montreal: 1.15, quebec: 1.0, laval: 1.05, rive_sud: 1.08, region: 0.9 };
const multBiens: Record<string, number> = { bas: 0.85, moyen: 1.0, eleve: 1.25, tres_eleve: 1.55 };

// ─── Données auto ─────────────────────────────────────────────────────────────

const assureursAuto = assureursAuto2026;
/*
  { nom: "Desjardins", emoji: "🏦", type: "Mutuelle / Direct", prix_base: [95, 140] as [number, number], url: "https://www.desjardins.com/assurances/auto/" },
  { nom: "Intact", emoji: "🏢", type: "Direct / Courtiers", prix_base: [100, 155] as [number, number], url: "https://www.intact.ca/fr/assurance-auto/" },
  { nom: "Belair Direct", emoji: "💻", type: "Direct en ligne", prix_base: [88, 135] as [number, number], url: "https://www.belairdirect.com/fr/assurance-auto.html" },
  { nom: "CAA-Québec", emoji: "🚘", type: "Membres CAA", prix_base: [92, 138] as [number, number], url: "https://www.caaquebec.com/fr/assurance/automobile/" },
  { nom: "SSQ / Beneva", emoji: "🌿", type: "Mutuelle", prix_base: [90, 132] as [number, number], url: "https://www.beneva.ca/fr/assurance-auto" },
  { nom: "Promutuel", emoji: "🌾", type: "Mutuelle (régions)", prix_base: [85, 128] as [number, number], url: "https://www.promutuel.ca/" },
];

const multAge: Record<string, number> = { jeune: 2.2, jeune_adulte: 1.35, adulte: 1.0, senior: 1.05 };
const multVehicule: Record<string, number> = { berline: 1.0, vus_compact: 1.12, vus_grand: 1.28, camionnette: 1.22, electrique: 1.08 };
const multRegionAuto: Record<string, number> = { montreal: 1.30, quebec: 1.0, laval: 1.18, rive_sud: 1.12, region: 0.88 };
const multUsage: Record<string, number> = { faible: 0.95, moyen: 1.0, eleve: 1.15 };
*/

// ─── Composant ────────────────────────────────────────────────────────────────

const multStatut = multStatutHabitation2026;
const multRegionHab = multRegionHabitation2026;
const multBiens = multBiensHabitation2026;
const assureursAuto = assureursAuto2026;
const multAge = multAgeAuto2026;
const multVehicule = multVehiculeAuto2026;
const multRegionAuto = multRegionAuto2026;
const multUsage = multUsageAuto2026;

type TypeAssurance = "habitation" | "auto";

interface HabitationForm {
  logement: string;
  statut: string;
  region: string;
  biens: string;
}

interface AutoForm {
  age: string;
  vehicule: string;
  region: string;
  usage: string;
}

function RadioGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
        {label}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            style={{
              padding: "7px 14px",
              borderRadius: "10px",
              border: value === opt.value ? `2px solid ${GOLD}` : "2px solid #E7E3DC",
              background: value === opt.value ? DARK : "white",
              color: value === opt.value ? "#F0EBE0" : "#44403C",
              fontSize: "13px",
              fontWeight: value === opt.value ? 700 : 400,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SelectGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>
        {label}
      </p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 14px",
          borderRadius: "10px",
          border: "2px solid #E7E3DC",
          background: "white",
          fontSize: "13px",
          color: "#1C1C1E",
          appearance: "none",
          cursor: "pointer",
        }}
      >
        <option value="">— Sélectionner —</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

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

export default function ComparateurClient() {
  const [type, setType] = useState<TypeAssurance>("habitation");

  const [hab, setHab] = useState<HabitationForm>({
    logement: "",
    statut: "",
    region: "",
    biens: "",
  });

  const [auto, setAuto] = useState<AutoForm>({
    age: "",
    vehicule: "",
    region: "",
    usage: "",
  });

  // ── Calcul résultats habitation ──
  const resultatsHab = useMemo(() => {
    const statutKey = hab.logement === "condo" ? "condo" : hab.statut === "proprietaire" ? "proprietaire" : "locataire";
    if (!hab.logement || !hab.statut || !hab.region || !hab.biens) return null;
    const m1 = multStatut[statutKey as keyof typeof multStatut] ?? 1;
    const m2 = multRegionHab[hab.region as keyof typeof multRegionHab] ?? 1;
    const m3 = multBiens[hab.biens as keyof typeof multBiens] ?? 1;
    return assureursHabitation
      .map((a) => ({
        ...a,
        prixMin: Math.round(a.prix_base[0] * m1 * m2 * m3),
        prixMax: Math.round(a.prix_base[1] * m1 * m2 * m3),
      }))
      .sort((a, b) => a.prixMin - b.prixMin);
  }, [hab]);

  // ── Calcul résultats auto ──
  const resultatsAuto = useMemo(() => {
    if (!auto.age || !auto.vehicule || !auto.region || !auto.usage) return null;
    const m1 = multAge[auto.age as keyof typeof multAge] ?? 1;
    const m2 = multVehicule[auto.vehicule as keyof typeof multVehicule] ?? 1;
    const m3 = multRegionAuto[auto.region as keyof typeof multRegionAuto] ?? 1;
    const m4 = multUsage[auto.usage as keyof typeof multUsage] ?? 1;
    return assureursAuto
      .map((a) => ({
        ...a,
        prixMin: Math.round(a.prix_base[0] * m1 * m2 * m3 * m4),
        prixMax: Math.round(a.prix_base[1] * m1 * m2 * m3 * m4),
      }))
      .sort((a, b) => a.prixMin - b.prixMin);
  }, [auto]);

  const resultats = type === "habitation" ? resultatsHab : resultatsAuto;

  return (
    <div>
      {/* Sélecteur de type */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "10px" }}>
          Quel type d&apos;assurance voulez-vous comparer ?
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          {[
            { value: "habitation" as const, label: "🏠 Assurance habitation" },
            { value: "auto" as const, label: "🚗 Assurance auto" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setType(opt.value)}
              style={{
                flex: 1,
                padding: "14px 12px",
                borderRadius: "14px",
                border: type === opt.value ? `2px solid ${GOLD}` : "2px solid #E7E3DC",
                background: type === opt.value ? DARK : "white",
                color: type === opt.value ? "#F0EBE0" : "#44403C",
                fontSize: "14px",
                fontWeight: type === opt.value ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.15s",
                textAlign: "center",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ad placeholder 2 */}
      {AD_PLACEHOLDER}

      {/* Formulaire habitation */}
      {type === "habitation" && (
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
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#1C1C1E",
              marginBottom: "1.25rem",
            }}
          >
            Votre profil — Habitation
          </h2>
          <RadioGroup
            label="Type de logement"
            options={[
              { value: "appartement", label: "Appartement" },
              { value: "maison", label: "Maison" },
              { value: "condo", label: "Condo" },
            ]}
            value={hab.logement}
            onChange={(v) => setHab((p) => ({ ...p, logement: v }))}
          />
          {hab.logement !== "condo" && (
            <RadioGroup
              label="Vous êtes"
              options={[
                { value: "locataire", label: "Locataire" },
                { value: "proprietaire", label: "Propriétaire" },
              ]}
              value={hab.statut}
              onChange={(v) => setHab((p) => ({ ...p, statut: v }))}
            />
          )}
          <SelectGroup
            label="Région"
            options={[
              { value: "montreal", label: "Montréal" },
              { value: "quebec", label: "Québec (ville)" },
              { value: "laval", label: "Laval" },
              { value: "rive_sud", label: "Rive-Sud" },
              { value: "region", label: "Région (autre)" },
            ]}
            value={hab.region}
            onChange={(v) => setHab((p) => ({ ...p, region: v }))}
          />
          <RadioGroup
            label="Valeur de vos biens à assurer"
            options={[
              { value: "bas", label: "< 20 000 $" },
              { value: "moyen", label: "20 000 – 40 000 $" },
              { value: "eleve", label: "40 000 – 60 000 $" },
              { value: "tres_eleve", label: "60 000 $+" },
            ]}
            value={hab.biens}
            onChange={(v) => setHab((p) => ({ ...p, biens: v }))}
          />
        </div>
      )}

      {/* Formulaire auto */}
      {type === "auto" && (
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
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#1C1C1E",
              marginBottom: "1.25rem",
            }}
          >
            Votre profil — Auto
          </h2>
          <RadioGroup
            label="Âge du conducteur principal"
            options={[
              { value: "jeune", label: "16 – 24 ans" },
              { value: "jeune_adulte", label: "25 – 34 ans" },
              { value: "adulte", label: "35 – 54 ans" },
              { value: "senior", label: "55 ans+" },
            ]}
            value={auto.age}
            onChange={(v) => setAuto((p) => ({ ...p, age: v }))}
          />
          <RadioGroup
            label="Type de véhicule"
            options={[
              { value: "berline", label: "Berline" },
              { value: "vus_compact", label: "VUS compact" },
              { value: "vus_grand", label: "VUS grand" },
              { value: "camionnette", label: "Camionnette" },
              { value: "electrique", label: "Électrique" },
            ]}
            value={auto.vehicule}
            onChange={(v) => setAuto((p) => ({ ...p, vehicule: v }))}
          />
          <SelectGroup
            label="Région"
            options={[
              { value: "montreal", label: "Montréal" },
              { value: "quebec", label: "Québec (ville)" },
              { value: "laval", label: "Laval" },
              { value: "rive_sud", label: "Rive-Sud" },
              { value: "region", label: "Région (autre)" },
            ]}
            value={auto.region}
            onChange={(v) => setAuto((p) => ({ ...p, region: v }))}
          />
          <RadioGroup
            label="Usage du véhicule"
            options={[
              { value: "faible", label: "Personnel (< 15 000 km/an)" },
              { value: "moyen", label: "Travail-domicile (15 000 – 25 000 km)" },
              { value: "eleve", label: "Kilométrage élevé (25 000 km+)" },
            ]}
            value={auto.usage}
            onChange={(v) => setAuto((p) => ({ ...p, usage: v }))}
          />
        </div>
      )}

      {/* Résultats */}
      {resultats ? (
        <div>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#1C1C1E",
              marginBottom: "1rem",
            }}
          >
            Estimations par assureur
          </h2>
          <div className="flex flex-col gap-3 mb-4">
            {resultats.map((a, i) => (
              <div
                key={a.nom}
                style={{
                  background: "white",
                  border: i === 0 ? `2px solid ${GREEN}` : "1px solid #EDE9E0",
                  borderRadius: "14px",
                  padding: "14px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.4rem" }}>{a.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E" }}>
                        {a.nom}
                      </span>
                      {i === 0 && (
                        <span
                          style={{
                            background: GREEN,
                            color: "white",
                            fontSize: "10px",
                            fontWeight: 700,
                            padding: "2px 8px",
                            borderRadius: "100px",
                          }}
                        >
                          ⭐ Meilleure estimation
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: "11px", color: "#A8A29E" }}>{a.type}</span>
                  </div>
                  <span
                    style={{
                      background: "#FEF3C7",
                      color: "#92400E",
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "100px",
                      flexShrink: 0,
                    }}
                  >
                    Estimation
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: "18px", color: DARK }}>
                    {a.prixMin} $ – {a.prixMax} $
                    <span style={{ fontWeight: 400, fontSize: "12px", color: "#78716C" }}> /mois</span>
                  </span>
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: DARK,
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: "12px",
                      padding: "8px 14px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      flexShrink: 0,
                    }}
                  >
                    Obtenir une soumission réelle →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "11px",
              color: "#A8A29E",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            Ces estimations sont indicatives et basées sur des moyennes du marché québécois 2026. Les prix réels varient
            selon votre dossier. Cliquez sur un assureur pour obtenir une soumission personnalisée gratuite.
          </p>
        </div>
      ) : (
        <div
          style={{
            background: "white",
            border: "1px dashed #D1CCC4",
            borderRadius: "14px",
            padding: "2rem",
            textAlign: "center",
            color: "#A8A29E",
            fontSize: "13px",
            marginBottom: "1.5rem",
          }}
        >
          Remplissez tous les champs ci-dessus pour voir les estimations.
        </div>
      )}
    </div>
  );
}
