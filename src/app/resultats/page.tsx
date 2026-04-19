import type { Metadata } from "next";
import Link from "next/link";
import { trouverProgrammes, calculerTotal, formaterArgent } from "@/lib/matching";
import type { ReponseQuestionnaire } from "@/types";

export const metadata: Metadata = {
  title: "Vos résultats – ArgentQC.ca",
  description: "Voici les programmes gouvernementaux auxquels vous pourriez avoir droit.",
  robots: { index: false, follow: false },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const CATEGORIES_LABELS: Record<string, string> = {
  renovation: "Rénovation",
  energie: "Énergie",
  famille: "Famille",
  transport: "Transport",
  logement: "Logement",
  credits_impot: "Crédits d'impôt",
  sante: "Santé & aînés",
  agriculture: "Agriculture",
  education: "Études",
};

const NIVEAUX_LABELS: Record<string, { label: string; couleur: string }> = {
  federal: { label: "Fédéral", couleur: "bg-red-100 text-red-700" },
  provincial: { label: "Provincial", couleur: "bg-blue-100 text-blue-700" },
  municipal: { label: "Municipal", couleur: "bg-green-100 text-green-700" },
};

function labelRevenu(revenu: string): string {
  const map: Record<string, string> = {
    "0-30000": "Moins de 30 000 $",
    "30000-50000": "30 000 – 50 000 $",
    "50000-75000": "50 000 – 75 000 $",
    "75000-100000": "75 000 – 100 000 $",
    "100000+": "Plus de 100 000 $",
  };
  return map[revenu] ?? revenu;
}

function labelAge(age: string): string {
  const map: Record<string, string> = {
    "18-30": "18 – 30 ans",
    "31-45": "31 – 45 ans",
    "46-65": "46 – 65 ans",
    "65+": "65 ans et plus",
  };
  return map[age] ?? age;
}

function getStrategies(r: ReponseQuestionnaire): Array<{
  emoji: string;
  titre: string;
  desc: string;
  lien: string;
  libelleBtn: string;
}> {
  const strats = [];

  if (r.etudiant) {
    strats.push({
      emoji: "🎓",
      titre: "Prêts, bourses et crédits pour étudiants",
      desc: "AFE, REEP, crédits d'impôt frais de scolarité — guide complet avec estimateur indicatif pour financer vos études au Québec.",
      lien: "/prets-bourses-etudiants",
      libelleBtn: "Guide aides étudiants",
    });
    return strats.slice(0, 2);
  }

  if (r.retraite || r.age === "65+") {
    strats.push({
      emoji: "📅",
      titre: "Ordre de décaissement à la retraite",
      desc: "L'ordre dans lequel tu retires REER, CELI et RRQ a un impact majeur sur ta facture fiscale. La bonne séquence peut économiser 3 000 – 6 000 $/an.",
      lien: "/strategies/decaissement-retraite",
      libelleBtn: "Guide décaissement retraite",
    });
  } else if (r.age === "31-45" || r.age === "46-65") {
    strats.push({
      emoji: "🏦",
      titre: "REER ou CELI : lequel choisir ?",
      desc: "La règle de base : REER si ton revenu actuel dépasse ton revenu estimé à la retraite. La différence peut représenter plusieurs milliers de dollars par an.",
      lien: "/strategies/reer-vs-celi",
      libelleBtn: "Comparaison REER vs CELI",
    });
  } else {
    strats.push({
      emoji: "🏦",
      titre: "Maximise ton CELI et ton CELIAPP",
      desc: "En début de carrière, le CELI offre la plus grande flexibilité. Si tu prévois acheter une propriété, ouvrir un CELIAPP est prioritaire (8 000 $/an déductibles).",
      lien: "/retraite/celi",
      libelleBtn: "Guide CELI",
    });
  }

  if (r.situation_familiale === "couple") {
    strats.push({
      emoji: "📊",
      titre: "Fractionnement du revenu en couple",
      desc: "Si vos revenus sont différents, contribuer au REER du conjoint à revenu plus faible peut économiser jusqu'à 4 200 $/an en impôts combinés.",
      lien: "/strategies/fractionnement-revenu",
      libelleBtn: "Guide fractionnement revenu",
    });
  } else {
    strats.push({
      emoji: "📡",
      titre: "Réduire tes dépenses fixes",
      desc: "Changer de fournisseur internet et remagasiner tes assurances peut économiser 500 – 1 300 $/an sans sacrifier la qualité de service.",
      lien: "/depenses",
      libelleBtn: "Voir les stratégies dépenses",
    });
  }

  return strats.slice(0, 2);
}

function getScenario(r: ReponseQuestionnaire): { titre: string; desc: string; lien: string } | null {
  if (r.retraite || r.age === "65+") {
    return {
      titre: "Scénario pré-retraite",
      desc: "Décaissement, RRQ différée et planification fiscale pour maximiser ses revenus de retraite.",
      lien: "/scenarios/pre-retraite",
    };
  }
  if (r.situation_familiale === "famille" || r.enfants) {
    return {
      titre: "Scénario famille avec 2 enfants",
      desc: "Calculs concrets : crédits, frais de garde, allocations — pour un revenu familial de 90 000 $.",
      lien: "/scenarios/famille-2-enfants",
    };
  }
  if (r.situation_familiale === "seul" && r.statut_logement === "locataire") {
    return {
      titre: "Scénario célibataire locataire",
      desc: "Optimisation REER, CELI, crédit de solidarité pour un célibataire locataire à 50 000 $.",
      lien: "/scenarios/celibataire-locataire",
    };
  }
  if (r.situation_familiale === "couple" && r.statut_logement === "proprietaire") {
    return {
      titre: "Scénario propriétaire avec hypothèque",
      desc: "RAP, rénovations subventionnées et stratégies fiscales pour couple propriétaire.",
      lien: "/scenarios/proprietaire-hypotheque",
    };
  }
  if (r.situation_familiale === "couple") {
    return {
      titre: "Scénario couple sans enfant",
      desc: "Stratégies fiscales et dépenses pour un couple combinant 120 000 $.",
      lien: "/scenarios/couple-sans-enfant",
    };
  }
  return null;
}

function getPlanAction(r: ReponseQuestionnaire, nbProgrammes: number): string[] {
  const steps: string[] = [];

  if (nbProgrammes > 0) {
    steps.push(
      "Fais tes demandes pour les programmes admissibles ci-dessous — certains sont automatiques (ACE, allocation famille), d'autres nécessitent une inscription directe"
    );
  }

  if (r.retraite || r.age === "65+") {
    steps.push(
      "Planifie ton ordre de décaissement (FERR, CELI, RRQ) pour minimiser l'impôt et préserver la Sécurité de la vieillesse et le Supplément de revenu garanti"
    );
  } else if (r.age === "31-45" || r.age === "46-65") {
    steps.push(
      "Vérifie tes droits de cotisation REER sur ton avis de cotisation ARC et contribue avant le 28 février pour maximiser ton remboursement d'impôt"
    );
  } else {
    steps.push(
      "Ouvre un CELI et/ou un CELIAPP si tu prévois acheter une propriété — cotise le maximum avant le 31 décembre pour accumuler des droits"
    );
  }

  steps.push(
    "Compare tes forfaits internet et tes assurances auto/habitation — 30 minutes de démarches représente typiquement 500 à 1 300 $/an d'économies"
  );

  return steps;
}

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export default async function ResultatsPage({ searchParams }: Props) {
  const params = await searchParams;

  const reponses: ReponseQuestionnaire = {
    province: "QC",
    statut_logement: (params.statut_logement as ReponseQuestionnaire["statut_logement"]) ?? "proprietaire",
    situation_familiale: (params.situation_familiale as ReponseQuestionnaire["situation_familiale"]) ?? "seul",
    enfants: params.enfants === "true",
    revenu: params.revenu ?? "50000-75000",
    vehicule_elec: params.vehicule_elec ?? "non",
    renovation: params.renovation === "true",
    retraite: params.retraite === "true",
    age: params.age ?? "31-45",
    etudiant: params.etudiant === "true",
  };

  const programmes = trouverProgrammes(reponses);
  const total = calculerTotal(programmes);
  const strategies = getStrategies(reponses);
  const scenario = getScenario(reponses);
  const planAction = getPlanAction(reponses, programmes.length);

  const profilTags = [
    reponses.situation_familiale === "seul"
      ? "Célibataire"
      : reponses.situation_familiale === "couple"
      ? "En couple"
      : "Famille avec enfants",
    reponses.statut_logement === "proprietaire" ? "Propriétaire" : "Locataire",
    labelRevenu(reponses.revenu),
    labelAge(reponses.age),
  ];

  return (
    <main style={{ minHeight: "100vh", background: PARCH }}>

      {/* Header */}
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "512px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <Link href="/questionnaire" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.8 }}>
            Recommencer
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: "512px", margin: "0 auto", padding: "24px 16px" }}>

        {/* ── PROFIL DÉTECTÉ ── */}
        <div style={{ background: "white", borderRadius: "14px", border: "1px solid #EDE9E0", padding: "16px 20px", marginBottom: "16px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "10px" }}>
            Profil détecté
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {profilTags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: PARCH,
                  color: "#44403C",
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "100px",
                  border: "1px solid #EDE9E0",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── TOTAL ESTIMÉ ── */}
        <div style={{
          background: DARK,
          borderRadius: "20px",
          padding: "28px 24px",
          marginBottom: "16px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 70%)`,
          }} />
          {programmes.length === 0 ? (
            <p style={{ color: "rgba(240,235,224,0.65)", fontSize: "16px", fontWeight: 600, textAlign: "center", lineHeight: 1.6 }}>
              Plusieurs programmes peuvent s&apos;appliquer à votre situation
            </p>
          ) : (
            <>
              <p style={{ color: "rgba(240,235,224,0.45)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textAlign: "center", marginBottom: "8px" }}>
                💰 Vous pourriez récupérer jusqu&apos;à
              </p>
              <p style={{
                fontFamily: "var(--font-playfair)",
                color: GREEN,
                fontSize: "clamp(2.5rem, 10vw, 3.5rem)",
                fontWeight: 800,
                textAlign: "center",
                lineHeight: 1,
                marginBottom: "4px",
              }}>
                {formaterArgent(total.max)}
              </p>
              <p style={{ color: "rgba(240,235,224,0.35)", fontSize: "13px", textAlign: "center", marginBottom: "8px" }}>
                cette année
              </p>
              {total.min > 0 && total.min !== total.max && (
                <p style={{ color: "rgba(240,235,224,0.45)", fontSize: "12px", textAlign: "center", marginBottom: "8px" }}>
                  Entre {formaterArgent(total.min)} et {formaterArgent(total.max)} selon votre situation
                </p>
              )}
              <p style={{ color: "rgba(240,235,224,0.25)", fontSize: "12px", textAlign: "center", marginBottom: "20px" }}>
                {programmes.length} programme{programmes.length > 1 ? "s" : ""} trouvé{programmes.length > 1 ? "s" : ""}
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {programmes.map((prog) => (
                  <div key={prog.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: GREEN }}>✓</span>
                      {prog.nom}
                    </span>
                    <span style={{ fontWeight: 700, color: "#F0EBE0", flexShrink: 0, marginLeft: "8px" }}>{prog.montant_affiche}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── PLAN D'ACTION ── */}
        <div style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "20px", marginBottom: "20px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "14px" }}>
            🎯 Plan d&apos;action — par ordre de priorité
          </p>
          <ol style={{ listStyle: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {planAction.map((step, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{
                  width: "24px", height: "24px", borderRadius: "50%",
                  background: DARK, color: GOLD,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: 800, flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.6, paddingTop: "3px" }}>{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* ── PUB TOP ── */}
        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #EDE9E0", padding: "8px", marginBottom: "20px" }}>
          <div style={{ height: "56px", background: PARCH, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
            Publicité
          </div>
        </div>

        {/* ── PROGRAMMES ── */}
        {programmes.length === 0 ? (
          <div style={{ background: "white", borderRadius: "20px", padding: "40px 24px", textAlign: "center", border: "1px solid #EDE9E0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🔍</div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
              Aucun programme trouvé
            </h2>
            <p style={{ fontSize: "14px", color: "#78716C", marginBottom: "24px", lineHeight: 1.6 }}>
              Selon vos réponses, nous n&apos;avons pas trouvé de programmes correspondants.
            </p>
            <Link
              href="/questionnaire"
              style={{ display: "block", background: DARK, color: GOLD, fontWeight: 700, padding: "14px", borderRadius: "14px", textAlign: "center", textDecoration: "none" }}
            >
              Refaire le questionnaire
            </Link>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
              Vos programmes admissibles
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {programmes.map((prog) => {
                const niveau = NIVEAUX_LABELS[prog.niveau];
                return (
                  <div key={prog.id} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
                    <div style={{ background: "#F0FDF4", borderBottom: "1px solid #D1FAE5", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${niveau.couleur}`}>
                          {niveau.label}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {CATEGORIES_LABELS[prog.categorie] ?? prog.categorie}
                        </span>
                      </div>
                      <span style={{ color: "#059669", fontWeight: 800, fontSize: "15px", flexShrink: 0, marginLeft: "8px" }}>
                        {prog.montant_affiche}
                      </span>
                    </div>
                    <div style={{ padding: "16px" }}>
                      <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "4px", lineHeight: 1.35 }}>
                        {prog.nom}
                      </h3>
                      <p style={{ color: "#A8A29E", fontSize: "12px", marginBottom: "12px" }}>{prog.organisme}</p>
                      <p style={{ fontSize: "13px", color: "#57534E", marginBottom: "12px", lineHeight: 1.65 }}>{prog.description}</p>
                      <div style={{ marginBottom: "16px" }}>
                        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "8px" }}>
                          Conditions
                        </p>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          {prog.conditions.map((c, i) => (
                            <li key={i} style={{ fontSize: "13px", color: "#57534E", display: "flex", gap: "8px", lineHeight: 1.5 }}>
                              <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>✓</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={prog.lien_officiel}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          background: DARK,
                          color: GOLD,
                          fontSize: "13px",
                          fontWeight: 700,
                          padding: "12px",
                          borderRadius: "12px",
                          textAlign: "center",
                          textDecoration: "none",
                          border: `1px solid rgba(245,200,66,0.15)`,
                        }}
                      >
                        Faire une demande →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ── PUB MILIEU ── */}
        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #EDE9E0", padding: "8px", margin: "20px 0" }}>
          <div style={{ height: "64px", background: PARCH, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
            Publicité
          </div>
        </div>

        {/* ── STRATÉGIES RECOMMANDÉES ── */}
        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
            Stratégies recommandées pour ton profil
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {strategies.map((strat) => (
              <div key={strat.lien} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDE9E0", padding: "16px 18px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{strat.emoji}</span>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", lineHeight: 1.3 }}>{strat.titre}</p>
                </div>
                <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.6, marginBottom: "12px" }}>{strat.desc}</p>
                <Link
                  href={strat.lien}
                  style={{
                    display: "inline-block",
                    background: PARCH,
                    color: DARK,
                    fontWeight: 700,
                    fontSize: "12px",
                    padding: "7px 14px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    border: "1px solid #EDE9E0",
                  }}
                >
                  {strat.libelleBtn} →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── SCÉNARIO SIMILAIRE ── */}
        {scenario && (
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
              Scénario similaire à votre profil
            </p>
            <Link
              href={scenario.lien}
              style={{
                display: "block",
                background: "white",
                border: "1px solid #EDE9E0",
                borderRadius: "14px",
                padding: "16px 18px",
                textDecoration: "none",
              }}
            >
              <p style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "4px" }}>
                {scenario.titre} →
              </p>
              <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.5 }}>{scenario.desc}</p>
            </Link>
          </div>
        )}

        {/* ── CTA REFAIRE ── */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", marginBottom: "14px" }}>
            Votre situation a changé ? Recalculez vos aides.
          </p>
          <Link
            href="/questionnaire"
            style={{
              display: "block",
              background: GOLD,
              color: DARK,
              fontWeight: 800,
              padding: "13px",
              borderRadius: "12px",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Refaire le questionnaire
          </Link>
        </div>

        <p style={{ color: "#A8A29E", fontSize: "11px", textAlign: "center", marginTop: "24px", lineHeight: 1.7 }}>
          Les montants affichés sont des estimations à titre informatif. L&apos;admissibilité finale
          dépend des critères officiels de chaque programme.
        </p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px", marginTop: "16px" }}>
        <div style={{ maxWidth: "512px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>
            Contactez-nous
          </Link>
        </div>
      </footer>
    </main>
  );
}
