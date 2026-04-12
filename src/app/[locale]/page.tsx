import Link from "next/link";
import { getDictionary } from "@/i18n/content";
import { getRoutePath, isLocale, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: "home",
    title: dictionary.home.metadata.title,
    description: dictionary.home.metadata.description,
  });
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const questionnairePath = getRoutePath(locale, "questionnaire");
  const hubCards = [
    { key: "budget" as const, title: locale === "fr" ? "Budget" : "Budget" },
    { key: "taxes" as const, title: locale === "fr" ? "Impots" : "Taxes" },
    { key: "retirement" as const, title: locale === "fr" ? "Retraite" : "Retirement" },
    { key: "insurance" as const, title: locale === "fr" ? "Assurances" : "Insurance" },
    { key: "internet" as const, title: locale === "fr" ? "Internet" : "Internet" },
    { key: "moving" as const, title: locale === "fr" ? "Demenagement" : "Moving" },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <section className="px-5 pb-14 pt-6" style={{ background: DARK, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.06,
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto flex max-w-3xl flex-col gap-10" style={{ zIndex: 1 }}>
          <header className="flex items-center justify-between gap-4">
            <Link
              href={getRoutePath(locale, "home")}
              className="text-sm font-extrabold text-amber-300 no-underline"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {dictionary.brand}
            </Link>
            <LanguageSwitcher currentLocale={locale} label={dictionary.languageSwitcherLabel} />
          </header>

          <div className="mx-auto max-w-2xl text-center">
            <div
              className="mb-6 inline-flex items-center rounded-full border px-4 py-2"
              style={{ background: "rgba(245,200,66,0.1)", borderColor: "rgba(245,200,66,0.2)" }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
                {dictionary.home.badge}
              </span>
            </div>

            <h1
              className="mb-5 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {dictionary.home.title}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-stone-300">
              {dictionary.home.description}
            </p>

            <Link
              href={questionnairePath}
              className="mx-auto block max-w-sm rounded-2xl px-6 py-4 text-base font-extrabold no-underline"
              style={{ background: GOLD, color: DARK, boxShadow: "0 0 32px rgba(245,200,66,0.25)" }}
            >
              {dictionary.home.primaryCta} →
            </Link>
            <p className="mt-3 text-xs text-stone-400">{dictionary.home.ctaMeta}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {dictionary.home.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.09)", color: "rgba(240,235,224,0.75)" }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b px-5 py-10" style={{ background: PARCH, borderColor: "#E8E0D4" }}>
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-stone-400">
            {dictionary.home.examplesLabel}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {dictionary.home.examples.map((example) => (
              <div
                key={example.profile}
                className="rounded-2xl border bg-white p-5"
                style={{ borderColor: "#EDE9E0", boxShadow: "0 1px 10px rgba(0,0,0,0.05)" }}
              >
                <div className="mb-2 text-sm font-semibold text-stone-900">{example.profile}</div>
                <div className="mb-2 text-2xl font-extrabold" style={{ color: GREEN }}>
                  {example.amount}
                </div>
                <div className="text-sm leading-6 text-stone-500">{example.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10" style={{ background: "#0F172A" }}>
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 text-center">
          {dictionary.home.stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl font-extrabold leading-none md:text-4xl"
                style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-xs leading-5 text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t px-5 py-12" style={{ background: PARCH, borderColor: "#E8E0D4" }}>
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-8 text-center text-3xl font-extrabold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {dictionary.home.stepsTitle}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {dictionary.home.steps.map((step) => (
              <div key={step.number} className="rounded-2xl border bg-white p-6" style={{ borderColor: "#EDE9E0" }}>
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-full text-lg font-extrabold"
                  style={{ background: DARK, color: GOLD, fontFamily: "var(--font-playfair)" }}
                >
                  {step.number}
                </div>
                <h3 className="mb-2 text-base font-bold text-stone-900">{step.title}</h3>
                <p className="text-sm leading-6 text-stone-500">{step.text}</p>
              </div>
            ))}
          </div>

          <Link
            href={questionnairePath}
            className="mx-auto mt-8 block max-w-sm rounded-2xl px-6 py-4 text-center text-base font-bold no-underline"
            style={{ background: DARK, color: GOLD, border: "1px solid rgba(245,200,66,0.2)" }}
          >
            {dictionary.home.secondaryCta} →
          </Link>
        </div>
      </section>

      <section className="border-t bg-white px-5 py-12" style={{ borderColor: "#F0EBE0" }}>
        <div className="mx-auto max-w-3xl rounded-[28px] border p-8" style={{ borderColor: "#EDE9E0", background: "#FCFAF7" }}>
          <h2 className="mb-3 text-3xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {dictionary.home.foundationTitle}
          </h2>
          <p className="mb-5 max-w-2xl text-sm leading-7 text-stone-600">
            {dictionary.home.foundationDescription}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {dictionary.home.foundationPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border bg-white px-4 py-5 text-sm font-medium text-stone-700"
                style={{ borderColor: "#EDE9E0" }}
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-white px-5 py-12" style={{ borderColor: "#F0EBE0" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {locale === "fr" ? "Hubs structurants" : "Core hubs"}
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            {hubCards.map((hub) => (
              <Link
                key={hub.key}
                href={getRoutePath(locale, hub.key)}
                className="rounded-2xl border bg-[#FCFAF7] px-5 py-6 no-underline"
                style={{ borderColor: "#EDE9E0" }}
              >
                <div className="text-base font-bold text-stone-900">{hub.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-auto px-5 py-8" style={{ background: DARK }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-lg font-bold" style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}>
            {dictionary.brand}
          </p>
          <p className="text-sm leading-7 text-stone-400">{dictionary.home.footerDisclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
