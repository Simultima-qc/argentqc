import Link from "next/link";
import Script from "next/script";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LocalizedRetirementRrspTransferChecklist from "@/components/LocalizedRetirementRrspTransferChecklist";
import LocalizedRetirementRrspTransferWizard from "@/components/LocalizedRetirementRrspTransferWizard";
import { getRetirementRrspTransferDictionary } from "@/i18n/retirementRrspTransfer";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getCommonUiLabels } from "@/i18n/ui";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function LocalizedRetirementRrspTransferPage({ locale }: { locale: Locale }) {
  const dictionary = getRetirementRrspTransferDictionary(locale);
  const ui = getCommonUiLabels(locale);
  const homePath = getRoutePath(locale, "home");
  const retirementHubPath = getRoutePath(locale, "retirement");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dictionary.faqSection.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <LanguageSwitcher currentLocale={locale} label={ui.languageSwitcher} />
        </div>
      </header>

      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-4xl" style={{ position: "relative", zIndex: 1 }}>
          <nav className="mb-4 text-xs" style={{ color: "rgba(240,235,224,0.45)" }}>
            <Link href={homePath} style={{ color: "inherit", textDecoration: "none" }}>{dictionary.breadcrumb[0]}</Link>
            {" / "}
            <Link href={retirementHubPath} style={{ color: "inherit", textDecoration: "none" }}>{dictionary.breadcrumb[1]}</Link>
            {" / "}
            <span style={{ color: "rgba(240,235,224,0.75)" }}>{dictionary.breadcrumb[2]}</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>{dictionary.eyebrow}</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.title}</h1>
          <p className="max-w-3xl text-base leading-8 text-stone-300">{dictionary.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#assistant" className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>{dictionary.heroPrimaryLabel}</a>
            <a href="#etapes" className="inline-block rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>{dictionary.heroSecondaryLabel}</a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-10">
        <section style={{ background: "#FFF8E8", border: "1px solid #F4D585", borderRadius: "24px", padding: "1.25rem", marginBottom: "1.5rem", boxShadow: "0 18px 40px rgba(122,90,0,0.08)" }}>
          <p style={{ color: "#9A7A11", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{dictionary.keyTakeawayEyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "10px" }}>{dictionary.keyTakeawayTitle}</h2>
          <div className="grid grid-cols-1 gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
            {dictionary.keyTakeawayCards.map((card) => (
              <div key={card.title} style={{ background: "white", borderRadius: "18px", padding: "1rem", border: "1px solid #F0E2B8" }}>
                <div style={{ fontWeight: 800, color: "#1C1C1E", marginBottom: "6px" }}>{card.title}</div>
                <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "12px", padding: "12px 14px", borderRadius: "16px", background: "#1F2937", color: "#F9FAFB", fontSize: "13px", lineHeight: 1.65 }}>{dictionary.keyTakeawayNote}</div>
        </section>

        <LocalizedRetirementRrspTransferWizard dictionary={dictionary.assistant} />

        <section style={{ marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ color: "#9A7A11", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{dictionary.officialSection.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{dictionary.officialSection.title}</h2>
          </div>
          <div className="grid grid-cols-1 gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {dictionary.officialSection.cards.map((card) => (
              <article key={card.title} style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "20px", padding: "1rem" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{card.title}</h3>
                <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: 0 }}>{card.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {dictionary.officialSection.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", background: "white", border: "1px solid #E7E0D3", borderRadius: "16px", padding: "14px 16px", textDecoration: "none" }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#1C1C1E", fontSize: "14px" }}>{link.title}</div>
                  <div style={{ fontSize: "12px", color: "#78716C", marginTop: "2px" }}>{link.description}</div>
                </div>
                <span style={{ color: "#2563EB", flexShrink: 0 }}>↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="etapes" style={{ scrollMarginTop: "88px", marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ color: "#9A7A11", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{dictionary.stepsSection.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{dictionary.stepsSection.title}</h2>
            <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, maxWidth: "720px" }}>{dictionary.stepsSection.intro}</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {dictionary.stepsSection.steps.map((step, index) => (
              <article key={step.title} style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "22px", padding: "1.15rem", boxShadow: "0 8px 24px rgba(6,13,26,0.04)" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "12px", background: "#FFF7DB", color: "#7A5A00", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>{index + 1}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#1C1C1E", marginBottom: "10px" }}>{step.title}</h3>
                    <div className="grid grid-cols-1 gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                      <div>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#78716C", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>{dictionary.stepsSection.whatToDoLabel}</div>
                        <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{step.whatToDo}</p>
                      </div>
                      <div>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#78716C", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>{dictionary.stepsSection.whatToCheckLabel}</div>
                        <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{step.whatToCheck}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: "12px", background: "#FFF4F4", border: "1px solid #FFD4D4", borderRadius: "14px", padding: "12px 14px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#B42318", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>{dictionary.stepsSection.commonMistakeLabel}</div>
                      <p style={{ fontSize: "13px", color: "#7A271A", lineHeight: 1.6, margin: 0 }}>{step.commonMistake}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ color: "#9A7A11", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{dictionary.errorsSection.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{dictionary.errorsSection.title}</h2>
          </div>
          <div className="flex flex-col gap-3">
            {dictionary.errorsSection.items.map((item) => (
              <details key={item.title} style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "18px", padding: "1rem 1.1rem" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{item.title}</summary>
                <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: "12px 0 0 0" }}>{item.detail}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "2rem", background: "#EEF6FF", border: "1px solid #CFE2FF", borderRadius: "22px", padding: "1.2rem" }}>
          <p style={{ color: "#1D4ED8", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{dictionary.timelineSection.eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{dictionary.timelineSection.title}</h2>
          {dictionary.timelineSection.paragraphs.map((paragraph, index) => (
            <p key={paragraph} style={{ fontSize: "13px", color: "#1E3A8A", lineHeight: 1.75, margin: index === dictionary.timelineSection.paragraphs.length - 1 ? 0 : "0 0 10px 0" }}>{paragraph}</p>
          ))}
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ color: "#9A7A11", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{dictionary.faqSection.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{dictionary.faqSection.title}</h2>
          </div>
          <div className="flex flex-col gap-3">
            {dictionary.faqSection.items.map((item) => (
              <details key={item.question} style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "18px", padding: "1rem 1.1rem" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{item.question}</summary>
                <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: "12px 0 0 0" }}>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <LocalizedRetirementRrspTransferChecklist dictionary={dictionary.checklistSection} />

        <section style={{ marginBottom: "2rem", background: "#FFFDF8", border: "1px solid #E7E0D3", borderRadius: "22px", padding: "1.2rem" }}>
          <p style={{ color: "#9A7A11", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{dictionary.transparencySection.eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.35rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{dictionary.transparencySection.title}</h2>
          {dictionary.transparencySection.paragraphs.map((paragraph, index) => (
            <p key={paragraph} style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: index === dictionary.transparencySection.paragraphs.length - 1 ? 0 : "0 0 10px 0" }}>{paragraph}</p>
          ))}
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.relatedSection.title}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.relatedSection.links.map((link) => (
              <Link key={link.href} href={link.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #E7E0D3", borderRadius: "16px", padding: "14px 16px", textDecoration: "none" }}>
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{link.emoji}</span>
                <div className="flex-1">
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{link.title}</div>
                  <div style={{ fontSize: "12px", color: "#78716C", marginTop: "2px" }}>{link.description}</div>
                </div>
                <span style={{ color: "#2563EB" }}>→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="mx-auto max-w-4xl text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.4)", fontSize: "11px" }}>{dictionary.footerText}</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>{dictionary.footerContact}</Link>
        </div>
      </footer>

      <Script id="retirement-rrsp-transfer-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </main>
  );
}
