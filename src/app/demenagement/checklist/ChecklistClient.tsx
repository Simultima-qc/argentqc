"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SiteFooter from "@/components/SiteFooter";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";
const STORAGE_KEY = "checklist-demenagement-qc";

interface TacheItem {
  id: string;
  texte: string;
  note?: string;
}

interface Section {
  titre: string;
  emoji: string;
  taches: TacheItem[];
}

const sections: Section[] = [
  {
    titre: "8 semaines avant",
    emoji: "📋",
    taches: [
      { id: "8-1", texte: "Donner son préavis au propriétaire (minimum 3 mois pour bail annuel)", note: "Recommandé en recommandé avec accusé de réception." },
      { id: "8-2", texte: "Commencer la recherche de logement (Kijiji, LesPAC, Centris)" },
      { id: "8-3", texte: "Vérifier le registre des loyers (TAL) avant de signer", note: "Droit de connaître le loyer payé par l'ancien locataire." },
      { id: "8-4", texte: "Obtenir au moins 3 soumissions de compagnies de déménagement" },
      { id: "8-5", texte: "Commencer à désencombrer — vendre, donner, recycler" },
      { id: "8-6", texte: "Commencer à constituer des économies pour les frais de déménagement" },
    ],
  },
  {
    titre: "4 semaines avant",
    emoji: "📦",
    taches: [
      { id: "4-1", texte: "Réserver la compagnie de déménagement ou louer le camion" },
      { id: "4-2", texte: "Commencer à emballer les objets non essentiels" },
      { id: "4-3", texte: "Récupérer des boîtes gratuites (SAQ, épiceries, Marketplace)" },
      { id: "4-4", texte: "Aviser Canada Post — réexpédition de courrier", note: "Faire la demande en ligne sur canadapost.ca" },
      { id: "4-5", texte: "Contacter votre assureur habitation — assurer le nouveau logement" },
      { id: "4-6", texte: "Informer l'employeur du changement d'adresse" },
      { id: "4-7", texte: "Informer l'école des enfants et prévoir le transfert de dossier" },
      { id: "4-8", texte: "Réserver l'ascenseur ou monte-meuble (immeuble) si nécessaire" },
    ],
  },
  {
    titre: "2 semaines avant",
    emoji: "📮",
    taches: [
      { id: "2-1", texte: "SAAQ — changement d'adresse (permis de conduire, immatriculation)", note: "Obligatoire dans les 30 jours suivant le déménagement." },
      { id: "2-2", texte: "Revenu Québec — changement d'adresse (clic-sequr.gouv.qc.ca)" },
      { id: "2-3", texte: "Agence du revenu du Canada — Mon dossier (canada.ca)" },
      { id: "2-4", texte: "Banques et institutions financières — cartes de crédit, prêts" },
      { id: "2-5", texte: "RAMQ — mise à jour de l'adresse (ramq.gouv.qc.ca)" },
      { id: "2-6", texte: "Médecin et dentiste de famille" },
      { id: "2-7", texte: "Hydro-Québec — clôturer l'ancien compte et ouvrir le nouveau" },
      { id: "2-8", texte: "Internet et câble — résilier / transférer le contrat" },
      { id: "2-9", texte: "Compagnie de cellulaire — mise à jour de l'adresse de facturation" },
    ],
  },
  {
    titre: "1 semaine avant",
    emoji: "🔑",
    taches: [
      { id: "1-1", texte: "Confirmer les détails finaux avec la compagnie de déménagement" },
      { id: "1-2", texte: "Préparer une boîte de survie (draps, vêtements 2 jours, café, nécessaire bain)" },
      { id: "1-3", texte: "Défaire les meubles démontables (lits, bibliothèques)" },
      { id: "1-4", texte: "Vider le congélateur (consommer ou distribuer les aliments)" },
      { id: "1-5", texte: "Confirmer la remise des clés et l'état des lieux avec le propriétaire" },
      { id: "1-6", texte: "Préparer le paiement des déménageurs (espèces ou carte selon leur politique)" },
    ],
  },
  {
    titre: "Jour J",
    emoji: "🚛",
    taches: [
      { id: "j-1", texte: "Photographier chaque pièce de l'ancien logement AVANT de partir", note: "Crucial en cas de litige sur le dépôt de garantie." },
      { id: "j-2", texte: "Relever les compteurs (électricité, gaz, eau) — noter les chiffres" },
      { id: "j-3", texte: "Inspecter le nouveau logement à la livraison (noter les dommages existants)" },
      { id: "j-4", texte: "Remettre les clés au propriétaire et obtenir une confirmation écrite" },
      { id: "j-5", texte: "Vérifier que tous les meubles et cartons sont arrivés" },
      { id: "j-6", texte: "Tester les serrures, la plomberie, le chauffage du nouveau logement" },
    ],
  },
  {
    titre: "Après le déménagement",
    emoji: "✅",
    taches: [
      { id: "a-1", texte: "SAAQ — mettre à jour permis et immatriculation (délai légal : 30 jours)" },
      { id: "a-2", texte: "Cégep ou université — mise à jour du dossier étudiant" },
      { id: "a-3", texte: "Tester les détecteurs de fumée et de monoxyde de carbone" },
      { id: "a-4", texte: "Conserver les reçus de déménagement (possiblement déductibles d'impôt)" },
      { id: "a-5", texte: "Voter lors des prochaines élections — mise à jour de l'inscription électorale" },
      { id: "a-6", texte: "Accuser réception du courrier réexpédié (confirmer que ça fonctionne)" },
      { id: "a-7", texte: "Obtenir les clés de secours au nouveau logement et les confier à quelqu'un" },
    ],
  },
];

const organismes = [
  { nom: "Canada Post — Réexpédition", desc: "Faire réexpédier votre courrier", href: "https://www.canadapost-postescanada.ca/cpc/fr/particuliers/postez-et-recevez/gerer-votre-courrier/reacheminement.page", emoji: "📬" },
  { nom: "SAAQ — Changement d'adresse", desc: "Permis de conduire et immatriculation", href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/", emoji: "🚗" },
  { nom: "Revenu Québec — Mon dossier", desc: "Adresse auprès de Revenu Québec", href: "https://www.revenuquebec.ca/fr/services-en-ligne/", emoji: "💰" },
  { nom: "ARC — Mon dossier CRA", desc: "Adresse auprès du gouvernement fédéral", href: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-electroniques-particuliers/dossier-particuliers.html", emoji: "🍁" },
  { nom: "RAMQ — Mise à jour", desc: "Carte d'assurance maladie", href: "https://www.ramq.gouv.qc.ca/fr/citoyens/informations-importantes", emoji: "🏥" },
  { nom: "Hydro-Québec — Déménagement", desc: "Clôturer et ouvrir un compte", href: "https://www.hydroquebec.com/residentiel/demenagement.html", emoji: "⚡" },
];

function getAllIds(): string[] {
  return sections.flatMap((s) => s.taches.map((t) => t.id));
}

export default function ChecklistClient() {
  const [checked, setChecked] = useState<Set<string>>(() => {
    if (typeof window === "undefined") {
      return new Set();
    }

    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checked)));
    } catch {
      // ignore
    }
  }, [checked]);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleReset = () => {
    setChecked(new Set());
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const totalTaches = getAllIds().length;
  const totalCochees = checked.size;
  const progres = totalTaches > 0 ? Math.round((totalCochees / totalTaches) * 100) : 0;

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
      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
            {" › "}
            <Link href="/demenagement" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Déménagement</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Checklist</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Outil interactif · Checklist déménagement Québec
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Checklist déménagement Québec — Ne rien oublier
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            De 8 semaines avant au jour J. Cochez chaque tâche au fur et à mesure —
            votre progression est mémorisée dans l&apos;onglet.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Barre de progression */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#1C1C1E" }}>Progression</span>
            <span style={{ fontSize: "13px", fontWeight: 800, color: GREEN }}>{totalCochees} / {totalTaches} tâches ({progres}%)</span>
          </div>
          <div style={{ height: "10px", background: "#F3F4F6", borderRadius: "100px", overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${progres}%`,
              background: progres === 100 ? GREEN : GOLD,
              borderRadius: "100px",
              transition: "width 0.4s ease",
            }} />
          </div>
          {progres === 100 && (
            <p style={{ fontSize: "13px", color: GREEN, fontWeight: 700, textAlign: "center", marginTop: "10px" }}>
              🎉 Félicitations — checklist complète !
            </p>
          )}
        </div>

        {/* Note confidentialité */}
        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "10px", padding: "10px 14px", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "1rem" }}>💾</span>
          <p style={{ fontSize: "12px", color: "#1D4ED8", margin: 0 }}>
            Votre progression est sauvegardée dans cet onglet (sessionStorage). Elle sera perdue si vous fermez l&apos;onglet.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => {
          const tachesCochees = section.taches.filter((t) => checked.has(t.id)).length;
          const sectionComplete = tachesCochees === section.taches.length;

          return (
            <div key={section.titre} style={{
              background: "white",
              border: `1px solid ${sectionComplete ? "#A7F3D0" : "#EDE9E0"}`,
              borderRadius: "16px",
              padding: "1.25rem",
              marginBottom: "1rem",
              transition: "border-color 0.3s",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.4rem" }}>{section.emoji}</span>
                  <h2 style={{ fontWeight: 800, fontSize: "15px", color: sectionComplete ? GREEN : "#1C1C1E", margin: 0 }}>
                    {section.titre}
                    {sectionComplete && <span style={{ marginLeft: "8px", fontSize: "14px" }}>✅</span>}
                  </h2>
                </div>
                <span style={{ fontSize: "12px", color: "#A8A29E" }}>{tachesCochees}/{section.taches.length}</span>
              </div>

              <div className="flex flex-col gap-2">
                {section.taches.map((tache) => {
                  const estCochee = checked.has(tache.id);
                  return (
                    <label
                      key={tache.id}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        cursor: "pointer",
                        padding: "8px 10px",
                        borderRadius: "10px",
                        background: estCochee ? "#ECFDF5" : "#FAFAFA",
                        border: `1px solid ${estCochee ? "#A7F3D0" : "#F3F4F6"}`,
                        transition: "background 0.2s, border-color 0.2s",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={estCochee}
                        onChange={() => toggle(tache.id)}
                        style={{ marginTop: "2px", flexShrink: 0, width: "17px", height: "17px", accentColor: GREEN, cursor: "pointer" }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <span style={{
                          fontSize: "13px",
                          color: estCochee ? "#065F46" : "#1C1C1E",
                          lineHeight: 1.5,
                          textDecoration: estCochee ? "line-through" : "none",
                          opacity: estCochee ? 0.7 : 1,
                        }}>
                          {tache.texte}
                        </span>
                        {tache.note && (
                          <p style={{ fontSize: "11px", color: "#A8A29E", margin: "3px 0 0 0", lineHeight: 1.5 }}>
                            ℹ️ {tache.note}
                          </p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Organismes à aviser */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", margin: "2rem 0 1.25rem" }}>
          Organismes à aviser — liens directs
        </h2>
        <div className="flex flex-col gap-3 mb-8">
          {organismes.map((o) => (
            <a
              key={o.nom}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", textDecoration: "none" }}
            >
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{o.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{o.nom}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{o.desc}</div>
              </div>
              <span style={{ color: "#3B82F6", flexShrink: 0 }}>↗</span>
            </a>
          ))}
        </div>

        {/* Réinitialiser */}
        {totalCochees > 0 && (
          <button
            onClick={handleReset}
            style={{
              display: "block", width: "100%",
              background: "transparent", color: "#EF4444",
              fontWeight: 600, fontSize: "13px",
              padding: "12px", borderRadius: "12px",
              border: "1px solid #FECACA",
              cursor: "pointer",
              marginBottom: "1.5rem",
            }}
          >
            Remettre la checklist à zéro
          </button>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-3 mb-4">
          <Link href="/demenagement/cout" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>💸</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Combien coûte un déménagement ?</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Tableaux de prix et conseils pour économiser</div>
            </div>
            <span style={{ color: "#3B82F6" }}>→</span>
          </Link>
          <Link href="/assurances/habitation" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>🛡️</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Assurance habitation Québec</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>À ne pas oublier avant d&apos;entrer dans votre logement</div>
            </div>
            <span style={{ color: "#3B82F6" }}>→</span>
          </Link>
        </div>
      </div>

      <SiteFooter
        legalText={"Outil informatif non affilié au gouvernement."}
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ background: DARK, padding: "24px 16px" }}
        brandStyle={{ color: GOLD }}
        contactLinkStyle={{ marginTop: "6px" }}
      />
    </main>
  );
}
