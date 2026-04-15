import Link from "next/link";
import type { HubDictionary } from "@/i18n/hubs";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getCommonUiLabels } from "@/i18n/ui";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

interface LocalizedHubPageProps {
  locale: Locale;
  dictionary: HubDictionary;
}

export default function LocalizedHubPage({ locale, dictionary }: LocalizedHubPageProps) {
  const homePath = getRoutePath(locale, "home");
  const questionnairePath = getRoutePath(locale, "questionnaire");
  const ui = getCommonUiLabels(locale);

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, padding: "14px 16px", position: "sticky", top: 0, zIndex: 10, boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <LanguageSwitcher currentLocale={locale} label={ui.languageSwitcher} />
        </div>
      </header>

      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-14">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl" style={{ position: "relative", zIndex: 1 }}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
            {dictionary.eyebrow}
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            {dictionary.title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-stone-300">{dictionary.description}</p>
        </div>
      </section>

      {/* ── EXEMPLE CONCRET ── */}
      {dictionary.example && (
        <section style={{ background: "#0F172A" }} className="px-5 py-8">
          <div className="mx-auto max-w-3xl">
            <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: "14px", padding: "20px" }}>
              <p style={{ color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
                💡 Exemple concret
              </p>
              <p style={{ color: "#F0EBE0", fontSize: "15px", fontWeight: 600, lineHeight: 1.5, marginBottom: "12px" }}>
                {dictionary.example.label}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {dictionary.example.items.map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{item.label}</span>
                    <span style={{ color: GREEN, fontWeight: 700 }}>{item.amount}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>{dictionary.example.totalLabel}</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem" }}>{dictionary.example.totalAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── QUOI FAIRE MAINTENANT ── */}
      {dictionary.actionSteps && (
        <section style={{ background: "white", borderBottom: "1px solid #F0EBE0" }} className="px-5 py-8">
          <div className="mx-auto max-w-3xl">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
              🎯 Quoi faire maintenant
            </h2>
            <ol style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {dictionary.actionSteps.map((step, i) => (
                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: DARK, color: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                  <p style={{ fontSize: "14px", color: "#44403C", lineHeight: 1.6, paddingTop: "4px" }}>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-5 py-10">
        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {ui.hubKeyPoints}
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            {dictionary.keyPoints.map((point) => (
              <div key={point} className="rounded-2xl border bg-white p-5 text-sm leading-7 text-stone-600" style={{ borderColor: "#EDE9E0" }}>
                {point}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {ui.hubUsefulPages}
          </h2>
          <div className="grid gap-3">
            {dictionary.cards.map((card) => (
              <Link
                key={`${card.href}-${card.title}`}
                href={card.href}
                className="rounded-2xl border bg-white p-5 no-underline"
                style={{ borderColor: "#EDE9E0" }}
              >
                <div className="mb-1 text-base font-bold text-stone-900">{card.title}</div>
                <div className="text-sm leading-7 text-stone-600">{card.description}</div>
                {card.note && <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-400">{card.note}</div>}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {ui.faq}
          </h2>
          <div className="flex flex-col gap-3">
            {dictionary.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 text-sm font-bold text-stone-900">{faq.question}</div>
                <div className="text-sm leading-7 text-stone-600">{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] px-6 py-7 text-center" style={{ background: DARK }}>
          <h2 className="mb-3 text-2xl font-extrabold text-stone-100" style={{ fontFamily: "var(--font-playfair)" }}>
            {dictionary.ctaTitle}
          </h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">{dictionary.ctaText}</p>
          <Link
            href={questionnairePath}
            className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline"
            style={{ background: GOLD, color: DARK }}
          >
            {dictionary.ctaLabel}
          </Link>
        </section>
      </div>
    </main>
  );
}
