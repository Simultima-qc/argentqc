"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { ReponseQuestionnaire } from "@/types";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const PROVINCE = "QC";

const ETAPES = [
  {
    id: "statut_logement",
    question: "Êtes-vous propriétaire ou locataire ?",
    type: "choix",
    options: [
      { valeur: "proprietaire", label: "🏠 Propriétaire" },
      { valeur: "locataire", label: "🔑 Locataire" },
    ],
  },
  {
    id: "situation_familiale",
    question: "Quelle est votre situation familiale ?",
    type: "choix",
    options: [
      { valeur: "seul", label: "🧑 Seul(e)" },
      { valeur: "couple", label: "👫 En couple" },
      { valeur: "famille", label: "👨‍👩‍👧 Famille avec enfants" },
    ],
  },
  {
    id: "enfants",
    question: "Avez-vous des enfants de moins de 18 ans à charge ?",
    type: "oui_non",
  },
  {
    id: "revenu",
    question: "Quel est votre revenu familial annuel brut ?",
    type: "choix",
    options: [
      { valeur: "0-30000", label: "Moins de 30 000 $" },
      { valeur: "30000-50000", label: "30 000 $ – 50 000 $" },
      { valeur: "50000-75000", label: "50 000 $ – 75 000 $" },
      { valeur: "75000-100000", label: "75 000 $ – 100 000 $" },
      { valeur: "100000+", label: "Plus de 100 000 $" },
    ],
  },
  {
    id: "vehicule_elec",
    question: "Avez-vous ou prévoyez-vous un véhicule électrique ?",
    type: "choix",
    options: [
      { valeur: "oui", label: "⚡ Oui, j'en ai déjà un" },
      { valeur: "prevu", label: "🔜 Oui, j'en prévois un" },
      { valeur: "non", label: "❌ Non" },
    ],
  },
  {
    id: "renovation",
    question: "Prévoyez-vous des travaux de rénovation ou d'amélioration énergétique ?",
    type: "oui_non",
  },
  {
    id: "retraite",
    question: "Êtes-vous à la retraite ou avez-vous 65 ans et plus ?",
    type: "oui_non",
  },
  {
    id: "age",
    question: "Dans quelle tranche d'âge vous situez-vous ?",
    type: "choix",
    options: [
      { valeur: "18-30", label: "18 – 30 ans" },
      { valeur: "31-45", label: "31 – 45 ans" },
      { valeur: "46-65", label: "46 – 65 ans" },
      { valeur: "65+", label: "65 ans et plus" },
    ],
  },
  {
    id: "etudiant",
    question: "Êtes-vous actuellement aux études (CÉGEP, université, DEP, formation professionnelle) ?",
    type: "oui_non",
  },
];

const DEFAUTS: ReponseQuestionnaire = {
  province: PROVINCE,
  statut_logement: "proprietaire",
  situation_familiale: "seul",
  enfants: false,
  revenu: "",
  vehicule_elec: "non",
  renovation: false,
  retraite: false,
  age: "",
  etudiant: false,
};

export default function Questionnaire() {
  const router = useRouter();
  const [etape, setEtape] = useState(0);
  const [reponses, setReponses] = useState<ReponseQuestionnaire>(DEFAUTS);

  const etapeCourante = ETAPES[etape];
  const progression = Math.round(((etape + 1) / ETAPES.length) * 100);

  function repondre(valeur: string | boolean) {
    const id = etapeCourante.id as keyof ReponseQuestionnaire;
    const nouvellesReponses = { ...reponses, [id]: valeur };
    setReponses(nouvellesReponses);

    if (etape < ETAPES.length - 1) {
      setEtape(etape + 1);
    } else {
      const params = new URLSearchParams(
        Object.entries(nouvellesReponses).map(([k, v]) => [k, String(v)])
      );
      router.push(`/resultats?${params.toString()}`);
    }
  }

  function retour() {
    if (etape > 0) setEtape(etape - 1);
  }

  return (
    <div style={{ minHeight: "100vh", background: PARCH, display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <header style={{ background: DARK, padding: "14px 16px", position: "sticky", top: 0, zIndex: 10, boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "512px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <span style={{ color: "rgba(240,235,224,0.4)", fontSize: "13px" }}>
            {etape + 1} / {ETAPES.length}
          </span>
        </div>
      </header>

      {/* Barre de progression */}
      <div style={{ background: "rgba(245,200,66,0.12)", height: "3px" }}>
        <div
          style={{
            background: GOLD,
            height: "3px",
            width: `${progression}%`,
            transition: "width 0.4s ease-out",
            boxShadow: `0 0 8px rgba(245,200,66,0.4)`
          }}
        />
      </div>

      {/* Contenu */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", padding: "40px 16px 24px", maxWidth: "512px", margin: "0 auto", width: "100%" }}>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1.35rem",
          fontWeight: 800,
          color: "#1C1C1E",
          marginBottom: "28px",
          textAlign: "center",
          lineHeight: 1.35
        }}>
          {etapeCourante.question}
        </h2>

        {etapeCourante.type === "choix" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {etapeCourante.options!.map((opt) => (
              <button
                key={opt.valeur}
                onClick={() => repondre(opt.valeur)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "white",
                  border: "1.5px solid #EDE9E0",
                  borderRadius: "14px",
                  padding: "16px 20px",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#1C1C1E",
                  cursor: "pointer",
                  minHeight: "58px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {etapeCourante.type === "oui_non" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <button
              onClick={() => repondre(true)}
              style={{
                background: "white",
                border: "1.5px solid #EDE9E0",
                borderRadius: "14px",
                padding: "24px 16px",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#1C1C1E",
                cursor: "pointer",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              ✅ Oui
            </button>
            <button
              onClick={() => repondre(false)}
              style={{
                background: "white",
                border: "1.5px solid #EDE9E0",
                borderRadius: "14px",
                padding: "24px 16px",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#78716C",
                cursor: "pointer",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              ❌ Non
            </button>
          </div>
        )}

        {etape > 0 && (
          <button
            onClick={retour}
            style={{
              marginTop: "28px",
              color: "#A8A29E",
              fontSize: "13px",
              textDecoration: "underline",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "block",
              margin: "28px auto 0",
              padding: "8px 16px",
            }}
          >
            ← Question précédente
          </button>
        )}
      </main>

      <p style={{ textAlign: "center", color: "#C4BFBA", fontSize: "11px", paddingBottom: "24px", paddingLeft: "16px", paddingRight: "16px" }}>
        Vos réponses ne sont pas enregistrées
      </p>
    </div>
  );
}
