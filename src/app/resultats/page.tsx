import type { Metadata } from "next";
import Link from "next/link";
import { trouverProgrammes, calculerTotal, formaterArgent } from "@/lib/matching";
import type { ReponseQuestionnaire } from "@/types";

export const metadata: Metadata = {
  title: "Vos rÃ©sultats â€“ ArgentQC.ca",
  description: "Voici les programmes gouvernementaux auxquels vous pourriez avoir droit.",
  robots: {
    index: false,
    follow: false,
  },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const CATEGORIES_LABELS: Record<string, string> = {
  renovation: "RÃ©novation",
  energie: "Ã‰nergie",
  famille: "Famille",
  transport: "Transport",
  logement: "Logement",
  credits_impot: "CrÃ©dits d'impÃ´t",
  sante: "SantÃ© & aÃ®nÃ©s",
  agriculture: "Agriculture",
};

const NIVEAUX_LABELS: Record<string, { label: string; couleur: string }> = {
  federal: { label: "FÃ©dÃ©ral", couleur: "bg-red-100 text-red-700" },
  provincial: { label: "Provincial", couleur: "bg-blue-100 text-blue-700" },
  municipal: { label: "Municipal", couleur: "bg-green-100 text-green-700" },
};

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
  };

  const programmes = trouverProgrammes(reponses);
  const total = calculerTotal(programmes);

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

        {/* RÃ©sumÃ© total */}
        <div style={{
          background: DARK,
          borderRadius: "20px",
          padding: "28px 24px",
          marginBottom: "20px",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,200,66,0.08) 0%, transparent 70%)`
          }} />
          <p style={{ color: "rgba(240,235,224,0.4)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", marginBottom: "6px" }}>
            Vous pourriez rÃ©cupÃ©rer jusqu&apos;Ã 
          </p>
          <p style={{
            fontFamily: "var(--font-playfair)",
            color: GOLD,
            fontSize: "clamp(2.5rem, 10vw, 3.5rem)",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1,
            marginBottom: "6px"
          }}>
            {formaterArgent(total.max)}
          </p>
          <p style={{ color: "rgba(240,235,224,0.35)", fontSize: "13px", textAlign: "center", marginBottom: "20px" }}>
            {programmes.length} programme{programmes.length > 1 ? "s" : ""} trouvÃ©{programmes.length > 1 ? "s" : ""}
          </p>
          {programmes.length > 0 && (
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {programmes.map((prog) => (
                <div key={prog.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ color: "rgba(240,235,224,0.65)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: GREEN }}>âœ“</span>
                    {prog.nom}
                  </span>
                  <span style={{ fontWeight: 700, color: "#F0EBE0", flexShrink: 0, marginLeft: "8px" }}>{prog.montant_affiche}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pub top */}
        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #EDE9E0", padding: "8px", marginBottom: "20px" }}>
          <div style={{ height: "56px", background: PARCH, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
            PublicitÃ©
          </div>
        </div>

        {programmes.length === 0 ? (
          <div style={{ background: "white", borderRadius: "20px", padding: "40px 24px", textAlign: "center", border: "1px solid #EDE9E0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>ðŸ”</div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
              Aucun programme trouvÃ©
            </h2>
            <p style={{ fontSize: "14px", color: "#78716C", marginBottom: "24px", lineHeight: 1.6 }}>
              Selon vos rÃ©ponses, nous n&apos;avons pas trouvÃ© de programmes correspondants.
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
                              <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>âœ“</span>
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
                        Faire une demande â†’
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pub milieu */}
            <div style={{ background: "white", borderRadius: "12px", border: "1px solid #EDE9E0", padding: "8px", margin: "20px 0" }}>
              <div style={{ height: "64px", background: PARCH, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
                PublicitÃ©
              </div>
            </div>

            {/* CTA refaire */}
            <div style={{ background: DARK, borderRadius: "16px", padding: "20px 24px", textAlign: "center" }}>
              <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", marginBottom: "14px" }}>
                Votre situation a changÃ© ? Recalculez vos aides.
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
          </>
        )}

        <p style={{ color: "#A8A29E", fontSize: "11px", textAlign: "center", marginTop: "24px", lineHeight: 1.7 }}>
          Les montants affichÃ©s sont des estimations Ã  titre informatif. L&apos;admissibilitÃ© finale
          dÃ©pend des critÃ¨res officiels de chaque programme.
        </p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px", marginTop: "16px" }}>
        <div style={{ maxWidth: "512px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affiliÃ© au gouvernement.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
