import type { Metadata } from "next";
import Link from "next/link";
import articles from "@/data/articles";

export const metadata: Metadata = {
  title: "Blogue – Guides sur les aides gouvernementales au Québec | ArgentQC.ca",
  description:
    "Guides pratiques sur les subventions, crédits d'impôt et aides gouvernementales au Québec. Rénoclimat, allocation famille, crédit solidarité et plus.",
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function BlogPage() {
  return (
    <main style={{ minHeight: "100vh", background: PARCH }}>

      <header style={{ background: DARK, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <Link href="/questionnaire" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.8 }}>
            Calculer mes aides
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 16px" }}>
        <h1 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          fontWeight: 800,
          color: "#1C1C1E",
          marginBottom: "8px"
        }}>
          Blogue
        </h1>
        <p style={{ fontSize: "15px", color: "#78716C", marginBottom: "36px", lineHeight: 1.6 }}>
          Guides pratiques pour maximiser vos aides gouvernementales au Québec.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{
                background: "white",
                borderRadius: "18px",
                border: "1px solid #EDE9E0",
                padding: "24px",
                textDecoration: "none",
                display: "block",
                boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                transition: "border-color 0.15s, box-shadow 0.15s",
              }}
            >
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span style={{
                  fontSize: "11px", fontWeight: 700, padding: "3px 10px",
                  borderRadius: "100px", background: "#DBEAFE", color: "#1D4ED8"
                }}>{article.categorie}</span>
                <span style={{ fontSize: "12px", color: "#A8A29E", padding: "3px 0" }}>{article.tempsLecture} de lecture</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 800,
                fontSize: "1.15rem",
                color: "#1C1C1E",
                lineHeight: 1.35,
                marginBottom: "10px"
              }}>{article.titre}</h2>
              <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.65, marginBottom: "14px" }}>{article.description}</p>
              <span style={{ color: "#3B82F6", fontSize: "13px", fontWeight: 600 }}>Lire l&apos;article →</span>
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px", marginTop: "32px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement.</p>
          <a href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</a>
        </div>
      </footer>
    </main>
  );
}
