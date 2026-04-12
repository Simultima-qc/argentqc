"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    emoji: "ðŸ“‹",
    taches: [
      { id: "8-1", texte: "Donner son prÃ©avis au propriÃ©taire (minimum 3 mois pour bail annuel)", note: "RecommandÃ© en recommandÃ© avec accusÃ© de rÃ©ception." },
      { id: "8-2", texte: "Commencer la recherche de logement (Kijiji, LesPAC, Centris)" },
      { id: "8-3", texte: "VÃ©rifier le registre des loyers (TAL) avant de signer", note: "Droit de connaÃ®tre le loyer payÃ© par l'ancien locataire." },
      { id: "8-4", texte: "Obtenir au moins 3 soumissions de compagnies de dÃ©mÃ©nagement" },
      { id: "8-5", texte: "Commencer Ã  dÃ©sencombrer â€” vendre, donner, recycler" },
      { id: "8-6", texte: "Commencer Ã  constituer des Ã©conomies pour les frais de dÃ©mÃ©nagement" },
    ],
  },
  {
    titre: "4 semaines avant",
    emoji: "ðŸ“¦",
    taches: [
      { id: "4-1", texte: "RÃ©server la compagnie de dÃ©mÃ©nagement ou louer le camion" },
      { id: "4-2", texte: "Commencer Ã  emballer les objets non essentiels" },
      { id: "4-3", texte: "RÃ©cupÃ©rer des boÃ®tes gratuites (SAQ, Ã©piceries, Marketplace)" },
      { id: "4-4", texte: "Aviser Canada Post â€” rÃ©expÃ©dition de courrier", note: "Faire la demande en ligne sur canadapost.ca" },
      { id: "4-5", texte: "Contacter votre assureur habitation â€” assurer le nouveau logement" },
      { id: "4-6", texte: "Informer l'employeur du changement d'adresse" },
      { id: "4-7", texte: "Informer l'Ã©cole des enfants et prÃ©voir le transfert de dossier" },
      { id: "4-8", texte: "RÃ©server l'ascenseur ou monte-meuble (immeuble) si nÃ©cessaire" },
    ],
  },
  {
    titre: "2 semaines avant",
    emoji: "ðŸ“®",
    taches: [
      { id: "2-1", texte: "SAAQ â€” changement d'adresse (permis de conduire, immatriculation)", note: "Obligatoire dans les 30 jours suivant le dÃ©mÃ©nagement." },
      { id: "2-2", texte: "Revenu QuÃ©bec â€” changement d'adresse (clic-sequr.gouv.qc.ca)" },
      { id: "2-3", texte: "Agence du revenu du Canada â€” Mon dossier (canada.ca)" },
      { id: "2-4", texte: "Banques et institutions financiÃ¨res â€” cartes de crÃ©dit, prÃªts" },
      { id: "2-5", texte: "RAMQ â€” mise Ã  jour de l'adresse (ramq.gouv.qc.ca)" },
      { id: "2-6", texte: "MÃ©decin et dentiste de famille" },
      { id: "2-7", texte: "Hydro-QuÃ©bec â€” clÃ´turer l'ancien compte et ouvrir le nouveau" },
      { id: "2-8", texte: "Internet et cÃ¢ble â€” rÃ©silier / transfÃ©rer le contrat" },
      { id: "2-9", texte: "Compagnie de cellulaire â€” mise Ã  jour de l'adresse de facturation" },
    ],
  },
  {
    titre: "1 semaine avant",
    emoji: "ðŸ”‘",
    taches: [
      { id: "1-1", texte: "Confirmer les dÃ©tails finaux avec la compagnie de dÃ©mÃ©nagement" },
      { id: "1-2", texte: "PrÃ©parer une boÃ®te de survie (draps, vÃªtements 2 jours, cafÃ©, nÃ©cessaire bain)" },
      { id: "1-3", texte: "DÃ©faire les meubles dÃ©montables (lits, bibliothÃ¨ques)" },
      { id: "1-4", texte: "Vider le congÃ©lateur (consommer ou distribuer les aliments)" },
      { id: "1-5", texte: "Confirmer la remise des clÃ©s et l'Ã©tat des lieux avec le propriÃ©taire" },
      { id: "1-6", texte: "PrÃ©parer le paiement des dÃ©mÃ©nageurs (espÃ¨ces ou carte selon leur politique)" },
    ],
  },
  {
    titre: "Jour J",
    emoji: "ðŸš›",
    taches: [
      { id: "j-1", texte: "Photographier chaque piÃ¨ce de l'ancien logement AVANT de partir", note: "Crucial en cas de litige sur le dÃ©pÃ´t de garantie." },
      { id: "j-2", texte: "Relever les compteurs (Ã©lectricitÃ©, gaz, eau) â€” noter les chiffres" },
      { id: "j-3", texte: "Inspecter le nouveau logement Ã  la livraison (noter les dommages existants)" },
      { id: "j-4", texte: "Remettre les clÃ©s au propriÃ©taire et obtenir une confirmation Ã©crite" },
      { id: "j-5", texte: "VÃ©rifier que tous les meubles et cartons sont arrivÃ©s" },
      { id: "j-6", texte: "Tester les serrures, la plomberie, le chauffage du nouveau logement" },
    ],
  },
  {
    titre: "AprÃ¨s le dÃ©mÃ©nagement",
    emoji: "âœ…",
    taches: [
      { id: "a-1", texte: "SAAQ â€” mettre Ã  jour permis et immatriculation (dÃ©lai lÃ©gal : 30 jours)" },
      { id: "a-2", texte: "CÃ©gep ou universitÃ© â€” mise Ã  jour du dossier Ã©tudiant" },
      { id: "a-3", texte: "Tester les dÃ©tecteurs de fumÃ©e et de monoxyde de carbone" },
      { id: "a-4", texte: "Conserver les reÃ§us de dÃ©mÃ©nagement (possiblement dÃ©ductibles d'impÃ´t)" },
      { id: "a-5", texte: "Voter lors des prochaines Ã©lections â€” mise Ã  jour de l'inscription Ã©lectorale" },
      { id: "a-6", texte: "Accuser rÃ©ception du courrier rÃ©expÃ©diÃ© (confirmer que Ã§a fonctionne)" },
      { id: "a-7", texte: "Obtenir les clÃ©s de secours au nouveau logement et les confier Ã  quelqu'un" },
    ],
  },
];

const organismes = [
  { nom: "Canada Post â€” RÃ©expÃ©dition", desc: "Faire rÃ©expÃ©dier votre courrier", href: "https://www.canadapost-postescanada.ca/cpc/fr/particuliers/postez-et-recevez/gerer-votre-courrier/reacheminement.page", emoji: "ðŸ“¬" },
  { nom: "SAAQ â€” Changement d'adresse", desc: "Permis de conduire et immatriculation", href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/", emoji: "ðŸš—" },
  { nom: "Revenu QuÃ©bec â€” Mon dossier", desc: "Adresse auprÃ¨s de Revenu QuÃ©bec", href: "https://www.revenuquebec.ca/fr/services-en-ligne/", emoji: "ðŸ’°" },
  { nom: "ARC â€” Mon dossier CRA", desc: "Adresse auprÃ¨s du gouvernement fÃ©dÃ©ral", href: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-electroniques-particuliers/dossier-particuliers.html", emoji: "ðŸ" },
  { nom: "RAMQ â€” Mise Ã  jour", desc: "Carte d'assurance maladie", href: "https://www.ramq.gouv.qc.ca/fr/citoyens/informations-importantes", emoji: "ðŸ¥" },
  { nom: "Hydro-QuÃ©bec â€” DÃ©mÃ©nagement", desc: "ClÃ´turer et ouvrir un compte", href: "https://www.hydroquebec.com/residentiel/demenagement.html", emoji: "âš¡" },
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
            {" â€º "}
            <Link href="/demenagement" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>DÃ©mÃ©nagement</Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Checklist</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Outil interactif Â· Checklist dÃ©mÃ©nagement QuÃ©bec
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Checklist dÃ©mÃ©nagement QuÃ©bec â€” Ne rien oublier
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            De 8 semaines avant au jour J. Cochez chaque tÃ¢che au fur et Ã  mesure â€”
            votre progression est mÃ©morisÃ©e dans l&apos;onglet.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Barre de progression */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#1C1C1E" }}>Progression</span>
            <span style={{ fontSize: "13px", fontWeight: 800, color: GREEN }}>{totalCochees} / {totalTaches} tÃ¢ches ({progres}%)</span>
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
              ðŸŽ‰ FÃ©licitations â€” checklist complÃ¨te !
            </p>
          )}
        </div>

        {/* Note confidentialitÃ© */}
        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "10px", padding: "10px 14px", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "1rem" }}>ðŸ’¾</span>
          <p style={{ fontSize: "12px", color: "#1D4ED8", margin: 0 }}>
            Votre progression est sauvegardÃ©e dans cet onglet (sessionStorage). Elle sera perdue si vous fermez l&apos;onglet.
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
                    {sectionComplete && <span style={{ marginLeft: "8px", fontSize: "14px" }}>âœ…</span>}
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
                            â„¹ï¸ {tache.note}
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

        {/* Organismes Ã  aviser */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", margin: "2rem 0 1.25rem" }}>
          Organismes Ã  aviser â€” liens directs
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
              <span style={{ color: "#3B82F6", flexShrink: 0 }}>â†—</span>
            </a>
          ))}
        </div>

        {/* RÃ©initialiser */}
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
            Remettre la checklist Ã  zÃ©ro
          </button>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-3 mb-4">
          <Link href="/demenagement/cout" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>ðŸ’¸</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Combien coÃ»te un dÃ©mÃ©nagement ?</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Tableaux de prix et conseils pour Ã©conomiser</div>
            </div>
            <span style={{ color: "#3B82F6" }}>â†’</span>
          </Link>
          <Link href="/assurances/habitation" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>ðŸ›¡ï¸</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Assurance habitation QuÃ©bec</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Ã€ ne pas oublier avant d&apos;entrer dans votre logement</div>
            </div>
            <span style={{ color: "#3B82F6" }}>â†’</span>
          </Link>
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affiliÃ© au gouvernement.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
