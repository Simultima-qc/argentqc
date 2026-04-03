import Link from "next/link";
import type { Programme } from "@/types";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const NIVEAUX_LABELS: Record<string, { label: string; couleur: string }> = {
  federal: { label: "Fédéral", couleur: "bg-red-100 text-red-700" },
  provincial: { label: "Provincial", couleur: "bg-blue-100 text-blue-700" },
  municipal: { label: "Municipal", couleur: "bg-green-100 text-green-700" },
};

interface FaqItem {
  question: string;
  reponse: string;
}

interface PageReliee {
  href: string;
  titre: string;
}

interface Props {
  titre: string;
  sousTitre: string;
  intro: string;
  programmes: Programme[];
  faqs: FaqItem[];
  motCle: string;
  pagesRelies?: PageReliee[];
}

export default function SeoProgrammesPage({
  titre,
  sousTitre,
  intro,
  programmes,
  faqs,
  motCle,
  pagesRelies,
}: Props) {
  const totalMax = programmes.reduce((acc, p) => acc + p.montant_max, 0);
  const totalFormate = new Intl.NumberFormat("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(totalMax);

  return (
    <main style={{ minHeight: "100vh", background: PARCH }}>

      {/* Header */}
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "512px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none", fontFamily: "var(--font-playfair)" }}>
            ArgentQC.ca
          </Link>
          <Link href="/questionnaire" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.85 }}>
            Calculer mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: DARK, position: "relative", overflow: "hidden", padding: "48px 20px 40px" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)`
        }} />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
        <div style={{ maxWidth: "512px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            {motCle}
          </p>
          <h1 style={{
            fontFamily: "var(--font-playfair)",
            color: "#F0EBE0",
            fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "12px"
          }}>{titre}</h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>{sousTitre}</p>
          <Link
            href="/questionnaire"
            style={{
              display: "block",
              background: GOLD,
              color: DARK,
              fontWeight: 800,
              fontSize: "15px",
              padding: "14px",
              borderRadius: "14px",
              textAlign: "center",
              textDecoration: "none",
              boxShadow: `0 0 28px rgba(245,200,66,0.2)`,
            }}
          >
            Calculer mes aides personnalisées →
          </Link>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", textAlign: "center", marginTop: "8px" }}>
            Gratuit · 2 minutes · estimation personnalisée
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "512px", margin: "0 auto", padding: "24px 16px" }}>

        {/* Intro */}
        <div style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "20px", marginBottom: "20px", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
          <p style={{ color: "#44403C", fontSize: "14px", lineHeight: 1.75 }}>{intro}</p>
        </div>

        {/* Résumé total */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "20px", marginBottom: "20px", textAlign: "center" }}>
          <p style={{ color: "rgba(240,235,224,0.4)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
            Potentiel total estimé
          </p>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "2.5rem", fontWeight: 800, lineHeight: 1, marginBottom: "4px" }}>
            {totalFormate}
          </p>
          <p style={{ color: "rgba(240,235,224,0.35)", fontSize: "12px" }}>{programmes.length} programmes disponibles</p>
        </div>

        {/* Liste des programmes */}
        <h2 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
          Programmes disponibles
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          {programmes.map((prog) => {
            const niveau = NIVEAUX_LABELS[prog.niveau];
            return (
              <div key={prog.id} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ background: "#F0FDF4", borderBottom: "1px solid #D1FAE5", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${niveau.couleur}`}>
                      {niveau.label}
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
                  <p style={{ color: "#57534E", fontSize: "13px", marginBottom: "12px", lineHeight: 1.65 }}>{prog.description}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                    {prog.conditions.map((c, i) => (
                      <li key={i} style={{ fontSize: "13px", color: "#57534E", display: "flex", gap: "8px", lineHeight: 1.5 }}>
                        <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>✓</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={prog.lien_officiel}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      width: "100%",
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

        {/* FAQ */}
        <h2 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
          Questions fréquentes
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "16px", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>{faq.question}</h3>
              <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7 }}>{faq.reponse}</p>
            </div>
          ))}
        </div>

        {/* Pages reliées */}
        {pagesRelies && pagesRelies.length > 0 && (
          <div style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
              Pages reliées
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {pagesRelies.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "white",
                    border: "1px solid #EDE9E0",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1C1C1E" }}>{page.titre}</span>
                  <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0, marginLeft: "8px" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA final */}
        <div style={{ background: DARK, borderRadius: "20px", padding: "28px 24px", textAlign: "center", marginBottom: "32px" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.2rem", fontWeight: 800, marginBottom: "8px" }}>
            Trouvez tout ce à quoi vous avez droit
          </p>
          <p style={{ color: "rgba(240,235,224,0.45)", fontSize: "13px", marginBottom: "20px" }}>
            Répondez à 8 questions — résultats personnalisés en 2 minutes.
          </p>
          <Link
            href="/questionnaire"
            style={{
              display: "block",
              background: GOLD,
              color: DARK,
              fontWeight: 800,
              fontSize: "15px",
              padding: "14px",
              borderRadius: "14px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Commencer le questionnaire →
          </Link>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", marginTop: "8px" }}>
            Gratuit · 2 minutes · estimation personnalisée
          </p>
        </div>

        <p style={{ color: "#A8A29E", fontSize: "11px", textAlign: "center", lineHeight: 1.7 }}>
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les montants sont des
          estimations — consultez toujours les sites officiels pour confirmer votre admissibilité.
        </p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div style={{ maxWidth: "512px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement.</p>
          <a href="mailto:contact@argentqc.ca" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "4px" }}>contact@argentqc.ca</a>
        </div>
      </footer>
    </main>
  );
}
