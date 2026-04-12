import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getBudgetSolidarityCreditDictionary } from "@/i18n/budgetSolidarityCredit";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getCommonUiLabels } from "@/i18n/ui";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const levelColor = {
  federal: "bg-red-100 text-red-700",
  provincial: "bg-blue-100 text-blue-700",
  municipal: "bg-green-100 text-green-700",
} as const;

export default function LocalizedBudgetSolidarityCreditPage({ locale }: { locale: Locale }) {
  const dictionary = getBudgetSolidarityCreditDictionary(locale);
  const ui = getCommonUiLabels(locale);
  const homePath = getRoutePath(locale, "home");
  const questionnairePath = getRoutePath(locale, "questionnaire");
  const totalMax = dictionary.programmes.reduce((acc, program) => acc + program.montant_max, 0);
  const totalFormatted = new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(totalMax);

  return (
    <main style={{ minHeight: "100vh", background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "512px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <Link href={homePath} style={{ fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none", fontFamily: "var(--font-playfair)" }}>
            ArgentQC.ca
          </Link>
          <LanguageSwitcher currentLocale={locale} label={ui.languageSwitcher} />
        </div>
      </header>

      <section style={{ background: DARK, position: "relative", overflow: "hidden", padding: "48px 20px 40px" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div style={{ maxWidth: "512px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            {dictionary.keyword}
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            {dictionary.title}
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>{dictionary.subtitle}</p>
          <Link href={questionnairePath} style={{ display: "block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "15px", padding: "14px", borderRadius: "14px", textAlign: "center", textDecoration: "none", boxShadow: "0 0 28px rgba(245,200,66,0.2)" }}>
            {dictionary.ctaLabel}
          </Link>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", textAlign: "center", marginTop: "8px" }}>{dictionary.ctaHint}</p>
        </div>
      </section>

      <div style={{ maxWidth: "512px", margin: "0 auto", padding: "24px 16px" }}>
        <div style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "20px", marginBottom: "20px", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
          <p style={{ color: "#44403C", fontSize: "14px", lineHeight: 1.75 }}>{dictionary.intro}</p>
        </div>

        <div style={{ background: DARK, borderRadius: "16px", padding: "20px", marginBottom: "20px", textAlign: "center" }}>
          <p style={{ color: "rgba(240,235,224,0.4)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
            {dictionary.totalLabel}
          </p>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "2.5rem", fontWeight: 800, lineHeight: 1, marginBottom: "4px" }}>{totalFormatted}</p>
          <p style={{ color: "rgba(240,235,224,0.35)", fontSize: "12px" }}>
            {dictionary.programmes.length} {dictionary.availableProgramsLabel}
          </p>
        </div>

        <h2 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
          {dictionary.programsTitle}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          {dictionary.programmes.map((program) => (
            <div key={program.id} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ background: "#F0FDF4", borderBottom: "1px solid #D1FAE5", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className={`text-xs font-semibold rounded-full px-2 py-0.5 ${levelColor[program.niveau]}`}>{dictionary.levelLabels[program.niveau]}</span>
                <span style={{ color: "#059669", fontWeight: 800, fontSize: "15px", flexShrink: 0, marginLeft: "8px" }}>{program.montant_affiche}</span>
              </div>
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "4px", lineHeight: 1.35 }}>{program.nom}</h3>
                <p style={{ color: "#A8A29E", fontSize: "12px", marginBottom: "12px" }}>{program.organisme}</p>
                <p style={{ color: "#57534E", fontSize: "13px", marginBottom: "12px", lineHeight: 1.65 }}>{program.description}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  {program.conditions.map((condition) => (
                    <li key={condition} style={{ fontSize: "13px", color: "#57534E", display: "flex", gap: "8px", lineHeight: 1.5 }}>
                      <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>✓</span>
                      {condition}
                    </li>
                  ))}
                </ul>
                <a
                  href={program.lien_officiel}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", background: DARK, color: GOLD, fontSize: "13px", fontWeight: 700, padding: "12px", borderRadius: "12px", textAlign: "center", textDecoration: "none", border: "1px solid rgba(245,200,66,0.15)" }}
                >
                  {dictionary.officialLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
          {dictionary.faqsTitle}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
          {dictionary.faqs.map((faq) => (
            <div key={faq.question} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "16px", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>{faq.question}</h3>
              <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E", marginBottom: "12px" }}>
            {dictionary.relatedTitle}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {dictionary.relatedLinks.map((page) => (
              <Link key={page.href} href={page.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", textDecoration: "none" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#1C1C1E" }}>{page.title}</span>
                <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0, marginLeft: "8px" }}>→</span>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ background: DARK, borderRadius: "20px", padding: "28px 24px", textAlign: "center", marginBottom: "32px" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.2rem", fontWeight: 800, marginBottom: "8px" }}>{dictionary.ctaTitle}</p>
          <p style={{ color: "rgba(240,235,224,0.45)", fontSize: "13px", marginBottom: "20px" }}>{dictionary.ctaText}</p>
          <Link href={questionnairePath} style={{ display: "block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "15px", padding: "14px", borderRadius: "14px", textAlign: "center", textDecoration: "none" }}>
            {dictionary.ctaLabel}
          </Link>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", marginTop: "8px" }}>{dictionary.ctaHint}</p>
        </div>

        <p style={{ color: "#A8A29E", fontSize: "11px", textAlign: "center", lineHeight: 1.7 }}>{dictionary.disclaimer}</p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div style={{ maxWidth: "512px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>{dictionary.footerText}</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>{dictionary.footerContact}</Link>
        </div>
      </footer>
    </main>
  );
}
