import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PretsBoursesClient from "@/components/PretsBoursesClient";
import SiteFooter from "@/components/SiteFooter";
import {
  pretsBoursesProgrammes2026,
  pretsBoursesFaqs2026,
  pretsBoursesProfils2026,
  pretsBourseEtapes2026,
} from "@/data/finance-2026/prets-bourses-2026";
import {
  getPretsBoursesPageDictionary,
  tableauComparatif,
} from "@/i18n/prets-bourses";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  pret:          { bg: "#EFF6FF", text: "#1E40AF", border: "#BFDBFE" },
  bourse:        { bg: "#ECFDF5", text: "#065F46", border: "#A7F3D0" },
  credit_impot:  { bg: "#F0FDF4", text: "#14532D", border: "#BBF7D0" },
  retrait_reer:  { bg: "#FEF2F2", text: "#991B1B", border: "#FECACA" },
  exemption:     { bg: "#EFF6FF", text: "#0C4A6E", border: "#BAE6FD" },
  remise:        { bg: "#F3E8FF", text: "#6B21A8", border: "#D8B4FE" },
};

export default function LocalizedPretsBoursesPage({ locale }: { locale: Locale }) {
  const d = getPretsBoursesPageDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const questionnairePath = getRoutePath(locale, "questionnaire");

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>

      {/* Header */}
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <LanguageSwitcher currentLocale={locale} label="Language switcher" availableLocales={["fr"]} />
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="mx-auto max-w-3xl" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
            <Link href={homePath} style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>{d.breadcrumb[0]}</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>{d.breadcrumb[1]}</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            {d.eyebrow}
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "14px" }}>
            {d.title}
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
            {d.subtitle}
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="#calculateur" style={{ background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 20px", borderRadius: "12px", textDecoration: "none" }}>
              {d.heroCta}
            </a>
            <a href="#programmes" style={{ background: "rgba(255,255,255,0.08)", color: "#F0EBE0", fontWeight: 600, fontSize: "14px", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}>
              {d.heroCtaSecondary}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8">

        {/* Disclaimer */}
        <div style={{ background: "#FFFBEB", border: "1px solid #FCD34D", borderRadius: "12px", padding: "12px 16px", marginBottom: "2rem", display: "flex", gap: "10px" }}>
          <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>⚠️</span>
          <div>
            <p style={{ fontWeight: 700, fontSize: "13px", color: "#78350F", margin: "0 0 4px" }}>{d.disclaimerTitle}</p>
            <p style={{ fontSize: "12px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>{d.disclaimerText}</p>
          </div>
        </div>

        {/* Quelles aides existent ? */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          {d.aidesCategoriesTitle}
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>{d.aidesCategoriesIntro}</p>
        <div className="grid grid-cols-1 gap-3 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {d.categories.map((cat) => (
            <div key={cat.labelFr} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "1rem" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{cat.emoji}</div>
              <h3 style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "6px" }}>{cat.labelFr}</h3>
              <p style={{ fontSize: "12px", color: "#78716C", margin: 0, lineHeight: 1.6 }}>{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Tableau comparatif */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          {d.tableauTitle}
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                {d.tableauHeaders.map((h) => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableauComparatif.map((row, i) => (
                <tr key={row.programme} style={{
                  borderBottom: i < tableauComparatif.length - 1 ? "1px solid #F0EBE0" : "none",
                  background: row.highlight ? "#FFFBEB" : "white",
                }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700, color: "#1C1C1E" }}>
                    {locale === "en" ? row.programmeEn : row.programme}
                  </td>
                  <td style={{ padding: "10px 12px", color: "#44403C" }}>
                    {locale === "en" ? row.typeEn : row.type}
                  </td>
                  <td style={{ padding: "10px 12px", fontWeight: 600, color: "#065F46" }}>
                    {locale === "en" ? row.montantEn : row.montant}
                  </td>
                  <td style={{ padding: "10px 12px", color: "#78716C", fontSize: "11px" }}>
                    {locale === "en" ? row.conditionEn : row.condition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Calculateur */}
        <PretsBoursesClient dictionary={d} />

        {/* Programmes en détail */}
        <h2 id="programmes" style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem", scrollMarginTop: "76px" }}>
          {d.programmesTitle}
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>{d.programmesIntro}</p>
        <div className="flex flex-col gap-3 mb-10">
          {pretsBoursesProgrammes2026.map((p) => {
            const colors = TYPE_COLORS[p.category] ?? TYPE_COLORS.pret;
            const title = locale === "en" ? p.titleEn : p.titleFr;
            const summary = locale === "en" ? p.summaryEn : p.summary;
            const highlights = locale === "en" ? p.eligibilityHighlightsEn : p.eligibilityHighlights;
            const amount = locale === "en" ? p.amountLabelEn : p.amountLabel;
            const warning = locale === "en" ? p.warningEn : p.warningFr;
            return (
              <div key={p.id} style={{ background: "white", border: `1px solid ${colors.border}`, borderRadius: "14px", padding: "1rem 1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "14px", color: colors.text, margin: 0 }}>{title}</h3>
                  <span style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`, fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", whiteSpace: "nowrap" }}>
                    {amount}
                  </span>
                </div>
                {warning && (
                  <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "8px", padding: "8px 12px", marginBottom: "8px" }}>
                    <p style={{ fontSize: "12px", color: "#991B1B", margin: 0, lineHeight: 1.5 }}>
                      {d.warningLabel} — {warning}
                    </p>
                  </div>
                )}
                <p style={{ fontSize: "12px", color: "#78716C", margin: "0 0 8px", lineHeight: 1.6 }}>{summary}</p>
                <div className="flex flex-col gap-1 mb-3">
                  {highlights.map((h, i) => (
                    <p key={i} style={{ fontSize: "11px", color: "#A8A29E", margin: 0, paddingLeft: "10px", borderLeft: `2px solid ${colors.border}` }}>{h}</p>
                  ))}
                </div>
                <a href={p.ctaHref} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "12px", fontWeight: 700, color: colors.text, textDecoration: "none" }}>
                  {d.officialLinkLabel}
                </a>
              </div>
            );
          })}
        </div>

        {/* Pub */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Guide AFE */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          {d.guideTitle}
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {pretsBourseEtapes2026.map((e) => {
            const titre = locale === "en" ? e.titreEn : e.titreFr;
            const desc = locale === "en" ? e.descEn : e.descFr;
            return (
              <div key={e.num} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: DARK, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: GOLD, flexShrink: 0 }}>
                  {e.num}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>{e.emoji} {titre}</div>
                  <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* REEP */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          {d.reepSectionTitle}
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1rem" }}>{d.reepSectionIntro}</p>
        <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "14px", padding: "1.25rem", marginBottom: "2.5rem" }}>
          <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
            {d.reepItems.map((item, i) => (
              <li key={i} style={{ fontSize: "13px", color: "#7F1D1D", lineHeight: 1.7, marginBottom: i < d.reepItems.length - 1 ? "4px" : 0 }}>{item}</li>
            ))}
          </ul>
          <Link href="/retraite/reer" style={{ display: "inline-block", marginTop: "12px", fontSize: "12px", fontWeight: 700, color: "#991B1B", textDecoration: "none" }}>
            {locale === "en" ? "Read the RRSP / LLP guide →" : "Lire le guide REER / REEP →"}
          </Link>
        </div>

        {/* Crédits d'impôt */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          {d.creditsSectionTitle}
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1rem" }}>{d.creditsSectionIntro}</p>
        <div className="flex flex-col gap-3 mb-10">
          {d.creditsItems.map((item) => (
            <div key={item.label} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px" }}>
              <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", margin: "0 0 6px" }}>🧾 {item.label}</p>
              <p style={{ fontSize: "12px", color: "#78716C", margin: 0, lineHeight: 1.6 }}>{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Étudiants internationaux */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          {d.intlSectionTitle}
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1rem" }}>{d.intlSectionIntro}</p>
        <div className="grid grid-cols-1 gap-3 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div style={{ background: "white", border: "2px solid #BAE6FD", borderRadius: "14px", padding: "1rem" }}>
            <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>🌍</div>
            <h3 style={{ fontWeight: 800, fontSize: "13px", color: "#0C4A6E", marginBottom: "8px" }}>
              {locale === "en" ? "Exemption from differentiated fees" : "Exemption des droits différenciés"}
            </h3>
            <p style={{ fontSize: "12px", color: "#0369A1", margin: 0, lineHeight: 1.6 }}>
              {locale === "en"
                ? "Permanent residents and certain other statuses may qualify for Quebec resident tuition rates. Check with your institution."
                : "Les résidents permanents et certains autres statuts peuvent bénéficier des tarifs québécois. Vérifiez auprès de votre établissement."}
            </p>
          </div>
          <div style={{ background: "white", border: "2px solid #A7F3D0", borderRadius: "14px", padding: "1rem" }}>
            <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>📋</div>
            <h3 style={{ fontWeight: 800, fontSize: "13px", color: "#065F46", marginBottom: "8px" }}>
              {locale === "en" ? "AFE for permanent residents" : "AFE pour résidents permanents"}
            </h3>
            <p style={{ fontSize: "12px", color: "#047857", margin: 0, lineHeight: 1.6 }}>
              {locale === "en"
                ? "Permanent residents established in Quebec for at least 12 consecutive months are eligible for AFE, just like any other Quebec resident."
                : "Les résidents permanents établis au Québec depuis au moins 12 mois consécutifs sont admissibles à l'AFE, comme tout autre résident québécois."}
            </p>
          </div>
        </div>

        {/* Pub */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Profils illustratifs */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.5rem" }}>
          {d.profilsTitle}
        </h2>
        <p style={{ fontSize: "12px", color: "#A8A29E", lineHeight: 1.6, marginBottom: "1.25rem", fontStyle: "italic" }}>{d.profilsDisclaimer}</p>
        <div className="flex flex-col gap-4 mb-10">
          {pretsBoursesProfils2026.map((profil) => {
            const prenom = locale === "en" ? profil.prenomEn : profil.prenomFr;
            const situation = locale === "en" ? profil.ageSituationEn : profil.ageSituation;
            const note = locale === "en" ? profil.noteEn : profil.noteFr;
            return (
              <div key={profil.id} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "1.8rem" }}>{profil.emoji}</span>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E", margin: 0 }}>{prenom}</h3>
                    <p style={{ fontSize: "12px", color: "#78716C", margin: 0 }}>{situation}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-3">
                  {profil.detail.map((item) => {
                    const colors = TYPE_COLORS[item.type] ?? TYPE_COLORS.pret;
                    const label = locale === "en" ? item.labelEn : item.labelFr;
                    return (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "12px", color: "#44403C" }}>{label}</span>
                        <span style={{ fontWeight: 700, fontSize: "13px", color: colors.text }}>{item.montant}</span>
                      </div>
                    );
                  })}
                  <div style={{ borderTop: "1px solid #F0EBE0", paddingTop: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "13px", fontWeight: 800, color: "#1C1C1E" }}>{d.profilsTotalLabel}</span>
                    <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{profil.totalIndicatif}</span>
                  </div>
                </div>
                <div style={{ background: "#F7F3EC", borderRadius: "8px", padding: "8px 12px" }}>
                  <p style={{ fontSize: "11px", color: "#78716C", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>
                    📝 {d.profilsNoteLabel} : {note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          {d.faqTitle}
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {pretsBoursesFaqs2026.map((faq, i) => {
            const question = locale === "en" ? faq.questionEn : faq.questionFr;
            const reponse = locale === "en" ? faq.reponseEn : faq.reponseFr;
            return (
              <div key={i} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "1rem 1.25rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>{question}</h3>
                <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{reponse}</p>
              </div>
            );
          })}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": pretsBoursesFaqs2026.map((f) => ({
                "@type": "Question",
                "name": locale === "en" ? f.questionEn : f.questionFr,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale === "en" ? f.reponseEn : f.reponseFr,
                },
              })),
            }),
          }}
        />

        {/* CTA questionnaire */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "1.5rem", textAlign: "center", marginBottom: "2rem" }}>
          <p style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>
            {locale === "en" ? "Find all programs matching your profile" : "Trouvez tous les programmes adaptés à votre profil"}
          </p>
          <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "12px", marginBottom: "1rem", lineHeight: 1.6 }}>
            {locale === "en"
              ? "The questionnaire covers all QC and CA programs in 2 minutes."
              : "Le questionnaire couvre tous les programmes QC et CA en 2 minutes."}
          </p>
          <Link href={questionnairePath} style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 24px", borderRadius: "12px", textDecoration: "none" }}>
            {locale === "en" ? "Start the questionnaire →" : "Démarrer le questionnaire →"}
          </Link>
        </div>

        {/* Liens connexes */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
          {d.relatedTitle}
        </h2>
        <div className="flex flex-col gap-3 mb-4">
          {d.relatedLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.title}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>→</span>
            </Link>
          ))}
        </div>

      </div>

      <SiteFooter
        legalText={d.footerText}
        contactLabel={d.footerContact}
        locale={locale}
        contentClassName="mx-auto max-w-3xl text-center"
        style={{ background: DARK }}
        legalStyle={{ color: "rgba(240,235,224,0.3)", lineHeight: 1.6 }}
      />

    </main>
  );
}
