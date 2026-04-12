import Link from "next/link";
import type { HubDictionary } from "@/i18n/hubs";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getCommonUiLabels } from "@/i18n/ui";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const DARK = "#060D1A";
const GOLD = "#F5C842";
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
