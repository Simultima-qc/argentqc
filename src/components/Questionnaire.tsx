"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ReponseQuestionnaire } from "@/types";

// Province fixée à QC — le site est focalisé sur le Québec
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white px-4 py-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <span className="font-bold text-base">ArgentQC.ca</span>
          <span className="text-blue-200 text-sm font-medium">
            {etape + 1} / {ETAPES.length}
          </span>
        </div>
      </header>

      {/* Barre de progression */}
      <div className="bg-blue-100 h-1.5">
        <div
          className="bg-yellow-400 h-1.5 transition-all duration-500 ease-out"
          style={{ width: `${progression}%` }}
        />
      </div>

      {/* Contenu */}
      <main className="flex-1 flex flex-col px-4 pt-10 pb-6 max-w-lg mx-auto w-full">
        <h2 className="text-xl font-bold text-slate-800 mb-6 text-center leading-snug">
          {etapeCourante.question}
        </h2>

        {etapeCourante.type === "choix" && (
          <div className="flex flex-col gap-3">
            {etapeCourante.options!.map((opt) => (
              <button
                key={opt.valeur}
                onClick={() => repondre(opt.valeur)}
                className="w-full text-left bg-white active:bg-blue-50 border-2 border-slate-200 active:border-blue-500 rounded-2xl px-5 py-4 font-medium text-slate-700 text-base shadow-sm transition-colors min-h-[60px]"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {etapeCourante.type === "oui_non" && (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => repondre(true)}
              className="bg-white active:bg-blue-50 border-2 border-slate-200 active:border-blue-500 rounded-2xl px-4 py-7 font-bold text-slate-700 text-xl shadow-sm transition-colors"
            >
              ✅ Oui
            </button>
            <button
              onClick={() => repondre(false)}
              className="bg-white active:bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-7 font-bold text-slate-500 text-xl shadow-sm transition-colors"
            >
              ❌ Non
            </button>
          </div>
        )}

        {etape > 0 && (
          <button
            onClick={retour}
            className="mt-8 text-slate-400 active:text-slate-600 text-sm underline block mx-auto py-2 px-4"
          >
            ← Question précédente
          </button>
        )}
      </main>

      {/* Pied de page discret */}
      <p className="text-center text-slate-300 text-xs pb-6 px-4">
        Vos réponses ne sont pas enregistrées
      </p>
    </div>
  );
}
