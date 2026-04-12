import type { Metadata } from "next";
import Link from "next/link";
import articles from "@/data/articles";
import { homeHubPageDefinitions } from "@/data/seo-pages";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "ArgentQC.ca | Aides, subventions et credits d'impot au Quebec",
  description: "Questionnaire gratuit et guides pratiques pour trouver les aides financieres, subventions et credits d'impot au Quebec.",
  alternates: {
    canonical: "https://argentqc.ca",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* â”€â”€ HERO â”€â”€ */}
      <section
        style={{ background: DARK, position: "relative", overflow: "hidden" }}
        className="px-5 pt-16 pb-14"
      >
        {/* Subtle radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.08) 0%, transparent 70%)"
        }} />
        {/* Dot-grid texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />

        <div className="max-w-lg mx-auto relative" style={{ zIndex: 1, textAlign: "center" }}>
          {/* Pill badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: `rgba(245,200,66,0.1)`, border: `1px solid rgba(245,200,66,0.2)`,
            borderRadius: "100px", padding: "6px 16px", marginBottom: "1.5rem"
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: GOLD, display: "inline-block", flexShrink: 0 }} />
            <span style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>
              100 % gratuit Â· aucune inscription
            </span>
          </div>

          {/* Headline â€” serif */}
          <h1 style={{
            fontFamily: "var(--font-playfair)",
            color: "#F0EBE0",
            fontSize: "clamp(2rem, 6.5vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.18,
            letterSpacing: "-0.01em",
            marginBottom: "1.25rem"
          }}>
            DÃ©couvrez l&apos;argent que<br />vous{" "}
            <em style={{ color: GOLD, fontStyle: "italic" }}>laissez sur la table</em>
          </h1>

          <p style={{
            color: "rgba(240,235,224,0.6)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "380px",
            margin: "0 auto 2rem"
          }}>
            CrÃ©dits d&apos;impÃ´t, subventions, allocations â€” rÃ©pondez Ã  8 questions pour obtenir votre liste personnalisÃ©e.
          </p>

          {/* Primary CTA */}
          <Link
            href="/questionnaire"
            style={{
              display: "block",
              background: GOLD,
              color: DARK,
              fontWeight: 800,
              fontSize: "1.05rem",
              padding: "1rem",
              borderRadius: "14px",
              textAlign: "center",
              boxShadow: `0 0 32px rgba(245,200,66,0.25)`,
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
          >
            Trouver mes aides â†’
          </Link>
          <p style={{ color: "rgba(240,235,224,0.35)", fontSize: "12px", marginTop: "10px", textAlign: "center" }}>
            Gratuit Â· 2 minutes Â· estimation personnalisÃ©e
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-2" style={{ marginTop: "1.25rem" }}>
            {[
              "ðŸ”’ Aucune donnÃ©e sauvegardÃ©e",
              "âœ… Programmes officiels",
              "ðŸŽ 100 % gratuit",
            ].map((b) => (
              <span key={b} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "rgba(240,235,224,0.6)",
                fontSize: "11px",
                padding: "5px 12px",
                borderRadius: "100px"
              }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ EXEMPLES â”€â”€ */}
      <section style={{ background: PARCH, borderBottom: "1px solid #E8E0D4" }} className="py-10 px-5">
        <div className="max-w-lg mx-auto">
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E", textAlign: "center", marginBottom: "1.25rem" }}>
            Exemples de profils
          </p>
          <div className="flex flex-col gap-3">
            {[
              { profil: "Famille avec 2 enfants", montant: "9 800 $", desc: "Allocation famille + ACE + crÃ©dit solidaritÃ©" },
              { profil: "PropriÃ©taire qui rÃ©nove", montant: "16 700 $", desc: "RÃ©noclimat + LogisVert + crÃ©dits fÃ©dÃ©raux" },
              { profil: "AÃ®nÃ© de 70 ans", montant: "14 000 $", desc: "SV + SRG + maintien Ã  domicile" },
            ].map((ex) => (
              <div key={ex.profil} style={{
                background: "white",
                borderLeft: `3px solid ${GREEN}`,
                borderRadius: "12px",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 1px 10px rgba(0,0,0,0.05)"
              }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{ex.profil}</div>
                  <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "2px" }}>{ex.desc}</div>
                </div>
                <div style={{ flexShrink: 0, marginLeft: "12px", textAlign: "right" }}>
                  <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#059669" }}>{ex.montant}</span>
                  <span style={{ fontSize: "11px", color: "#6EE7B7", marginLeft: "2px" }}>/an</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ AD â”€â”€ */}
      <div style={{ background: "#EDE9E0", borderBottom: "1px solid #E0D9CE" }} className="py-3 px-4">
        <div className="max-w-lg mx-auto">
          <div style={{ height: "56px", background: "#E5DFD4", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
            PublicitÃ©
          </div>
        </div>
      </div>

      {/* â”€â”€ STATS â”€â”€ */}
      <section style={{ background: "#0F172A" }} className="py-9 px-5">
        <div className="max-w-lg mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { val: "16", label: "programmes couverts" },
            { val: "20k$", label: "potentiel moyen" },
            { val: "2min", label: "pour vos rÃ©sultats" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
                fontWeight: 800,
                color: GOLD,
                lineHeight: 1
              }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "6px", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ COMMENT Ã‡A MARCHE â”€â”€ */}
      <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="py-12 px-5">
        <div className="max-w-lg mx-auto">
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#1C1C1E",
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            Comment Ã§a fonctionne
          </h2>
          <div className="flex flex-col gap-6">
            {[
              { num: "1", titre: "RÃ©pondez Ã  8 questions", texte: "Situation familiale, revenus, logement, vÃ©hicule Ã©lectriqueâ€¦" },
              { num: "2", titre: "Notre algorithme analyse", texte: "On croise vos rÃ©ponses avec 16 programmes provinciaux et fÃ©dÃ©raux." },
              { num: "3", titre: "RÃ©cupÃ©rez votre argent", texte: "Liste claire avec montants estimÃ©s et liens vers les formulaires officiels." },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: DARK, color: GOLD,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800,
                  flexShrink: 0
                }}>
                  {item.num}
                </div>
                <div style={{ paddingTop: "6px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "4px" }}>{item.titre}</h3>
                  <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6 }}>{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/questionnaire"
            style={{
              display: "block",
              background: DARK,
              color: GOLD,
              fontWeight: 700,
              fontSize: "1rem",
              padding: "1rem",
              borderRadius: "14px",
              textAlign: "center",
              marginTop: "2rem",
              border: `1px solid rgba(245,200,66,0.2)`,
            }}
          >
            Commencer maintenant â†’
          </Link>
        </div>
      </section>

      {/* â”€â”€ HUB FINANCES PERSONNELLES â”€â”€ */}
      <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="py-12 px-5">
        <div className="max-w-lg mx-auto">
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#1C1C1E",
            textAlign: "center",
            marginBottom: "6px"
          }}>
            Finances personnelles QuÃ©bec
          </h2>
          <p style={{ textAlign: "center", color: "#78716C", fontSize: "13px", marginBottom: "1.75rem" }}>
            Guides pratiques adaptÃ©s au marchÃ© quÃ©bÃ©cois
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { href: "/demenagement", emoji: "ðŸ“¦", label: "DÃ©mÃ©nagement", desc: "Guide, coÃ»ts, checklist", color: "#DBEAFE", textColor: "#1D4ED8" },
              { href: "/budget", emoji: "ðŸ’°", label: "Budget & coÃ»t de la vie", desc: "Calculateur, comparatifs", color: "#D1FAE5", textColor: "#065F46" },
              { href: "/assurances", emoji: "ðŸ›¡ï¸", label: "Assurances", desc: "Auto, habitation QuÃ©bec", color: "#FEF3C7", textColor: "#92400E" },
              { href: "/retraite", emoji: "ðŸ–ï¸", label: "Retraite", desc: "REER, CELI, RRQ", color: "#EDE9FE", textColor: "#5B21B6" },
              { href: "/impots", emoji: "ðŸ§¾", label: "ImpÃ´ts QuÃ©bec", desc: "Dates, remboursement, logiciels", color: "#FEE2E2", textColor: "#991B1B" },
              { href: "/internet", emoji: "ðŸŒ", label: "Internet QuÃ©bec", desc: "Comparateur fournisseurs 2026", color: "#CFFAFE", textColor: "#155E75" },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                style={{
                  display: "block",
                  background: "#F7F3EC",
                  borderRadius: "14px",
                  padding: "18px 14px",
                  border: "1px solid #EDE9E0",
                  textDecoration: "none",
                  transition: "border-color 0.15s, box-shadow 0.15s"
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "8px" }}>{cat.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", lineHeight: 1.3, marginBottom: "4px" }}>{cat.label}</div>
                <div style={{ fontSize: "11px", color: "#A8A29E" }}>{cat.desc}</div>
                <div style={{ marginTop: "10px" }}>
                  <span style={{
                    display: "inline-block",
                    background: cat.color, color: cat.textColor,
                    fontSize: "10px", fontWeight: 700,
                    padding: "2px 8px", borderRadius: "100px"
                  }}>Voir les guides â†’</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CATÃ‰GORIES â”€â”€ */}
      <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="py-12 px-5">
        <div className="max-w-lg mx-auto">
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#1C1C1E",
            textAlign: "center",
            marginBottom: "1.75rem"
          }}>
            Programmes couverts
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: "ðŸ ", label: "RÃ©novation & logement" },
              { emoji: "âš¡", label: "Ã‰nergie & thermopompe" },
              { emoji: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§", label: "Famille & enfants" },
              { emoji: "ðŸš—", label: "Auto Ã©lectrique" },
              { emoji: "ðŸ’°", label: "CrÃ©dits d'impÃ´t" },
              { emoji: "ðŸ‘´", label: "AÃ®nÃ©s & retraite" },
              { emoji: "ðŸŒ±", label: "Environnement" },
              { emoji: "ðŸ™ï¸", label: "Aide sociale QC" },
            ].map((cat) => (
              <div key={cat.label} style={{
                background: PARCH,
                borderRadius: "12px",
                padding: "18px 14px",
                textAlign: "center",
                border: "1px solid #EDE9E0",
                transition: "border-color 0.15s"
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "6px" }}>{cat.emoji}</div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#44403C", lineHeight: 1.4 }}>{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ GUIDES SEO â”€â”€ */}
      <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="py-12 px-5">
        <div className="max-w-lg mx-auto">
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#1C1C1E",
            textAlign: "center",
            marginBottom: "1.75rem"
          }}>
            Guides par situation
          </h2>
          <div className="flex flex-col gap-2">
            {homeHubPageDefinitions.map((lien) => (
              <Link
                key={lien.path}
                href={lien.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "white",
                  border: "1px solid #EDE9E0",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  textDecoration: "none",
                  transition: "border-color 0.15s, box-shadow 0.15s"
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{lien.title}</div>
                  <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{lien.description}</div>
                </div>
                <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0, marginLeft: "8px" }}>&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ DERNIERS ARTICLES â”€â”€ */}
      <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="py-12 px-5">
        <div className="max-w-lg mx-auto">
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#1C1C1E",
            textAlign: "center",
            marginBottom: "1.75rem"
          }}>
            Derniers articles
          </h2>
          <div className="flex flex-col gap-3">
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  background: PARCH,
                  border: "1px solid #EDE9E0",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  textDecoration: "none",
                  transition: "border-color 0.15s"
                }}
              >
                <span style={{
                  fontSize: "11px", fontWeight: 700, padding: "3px 8px",
                  borderRadius: "100px", background: "#DBEAFE", color: "#1D4ED8",
                  flexShrink: 0, marginTop: "2px", whiteSpace: "nowrap"
                }}>{article.categorie}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E", lineHeight: 1.45 }}>{article.titre}</div>
                  <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "3px" }}>{article.tempsLecture} de lecture</div>
                </div>
                <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0 }}>â†’</span>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            style={{
              display: "block",
              textAlign: "center",
              color: "#3B82F6",
              fontSize: "14px",
              fontWeight: 600,
              marginTop: "1rem",
              textDecoration: "none"
            }}
          >
            Voir tous les articles â†’
          </Link>
        </div>
      </section>

      {/* â”€â”€ AD BAS â”€â”€ */}
      <section style={{ background: "#EDE9E0", borderTop: "1px solid #E0D9CE" }} className="py-4 px-4">
        <div className="max-w-lg mx-auto">
          <div style={{ height: "64px", background: "#E5DFD4", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
            PublicitÃ©
          </div>
        </div>
      </section>

      {/* â”€â”€ FOOTER â”€â”€ */}
      <footer style={{ background: DARK }} className="py-8 px-5 mt-auto">
        <div className="max-w-lg mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.35)", fontSize: "12px", lineHeight: 1.7 }}>
            Outil informatif non affiliÃ© au gouvernement. Les montants sont des estimations â€”<br />
            consultez toujours les sites officiels pour confirmer votre admissibilitÃ©.
          </p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "12px", display: "block", marginTop: "8px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
