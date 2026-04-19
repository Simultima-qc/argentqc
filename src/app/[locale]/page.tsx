import Link from "next/link";
import { getDictionary } from "@/i18n/content";
import { getRoutePath, isLocale, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";
import { logCriticalRender, startServerTimer } from "@/lib/server-timing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TrackingLink from "@/components/TrackingLink";

// Stable editorial content: prerender and serve from ISR instead of rendering on every hit/RSC request.
export const revalidate = 86400;
export const dynamic = "force-static";

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
  const timer = startServerTimer();
  const { locale } = await params;
  const d = getDictionary(locale);
  const h = d.home;
  const questionnairePath = getRoutePath(locale, "questionnaire");

  // Presentation metadata for piliers (emoji, color, route) — labels/desc from content.ts
  const piliersMeta = [
    { emoji: "💰", routeKey: "budget" as const, color: "#D1FAE5", textColor: "#065F46" },
    { emoji: "🧾", routeKey: "taxes" as const, color: "#FEE2E2", textColor: "#991B1B" },
    { emoji: "🏦", routeKey: "retirement" as const, color: "#EDE9FE", textColor: "#5B21B6" },
    { emoji: "📡", routeKey: "internet" as const, color: "#CFFAFE", textColor: "#155E75" },
    { emoji: "🧠", routeKey: "budget" as const, color: "#FEF3C7", textColor: "#92400E" },
  ] as const;

  const piliers = piliersMeta.map((meta, i) => ({
    ...meta,
    href: getRoutePath(locale, meta.routeKey),
    label: h.piliers[i].label,
    desc: h.piliers[i].desc,
  }));

  // Topics hub — route keys stay structural, labels from content.ts
  const topicsRouteKeys = [
    "budget",
    "taxes",
    "retirement",
    "insurance",
    "internet",
    "moving",
  ] as const;

  const topics = topicsRouteKeys.map((key, i) => ({
    key,
    href: getRoutePath(locale, key),
    label: h.topicsLabels[i],
  }));
  logCriticalRender("home", timer);

  return (
    <main className="flex min-h-screen flex-col">
      {/* ── HERO ── */}
      <section className="px-5 pb-14 pt-6" style={{ background: DARK, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.08) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        <div className="relative mx-auto flex max-w-3xl flex-col gap-10" style={{ zIndex: 1 }}>
          <header className="flex items-center justify-between gap-4">
            <Link
              href={getRoutePath(locale, "home")}
              className="text-sm font-extrabold text-amber-300 no-underline"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {d.brand}
            </Link>
            <LanguageSwitcher currentLocale={locale} label={d.languageSwitcherLabel} />
          </header>

          <div className="mx-auto max-w-2xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{ background: "rgba(245,200,66,0.1)", borderColor: "rgba(245,200,66,0.2)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: GOLD, display: "inline-block", flexShrink: 0 }} />
              <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
                {h.badge}
              </span>
            </div>

            {/* Titre */}
            <h1 className="mb-5 font-extrabold leading-tight text-stone-100"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.85rem, 6vw, 2.6rem)", lineHeight: 1.2 }}>
              {h.title}
            </h1>

            {/* Preuve immédiate */}
            <div className="mx-auto mb-8 inline-block rounded-xl px-4 py-2.5"
              style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)" }}>
              <span className="text-xs font-medium" style={{ color: "rgba(110,231,183,0.8)" }}>
                {h.proofLine}
              </span>
            </div>

            {/* CTA principal */}
            <TrackingLink
              href={questionnairePath}
              className="mx-auto mb-3 block max-w-sm rounded-2xl px-8 py-5 text-base font-extrabold no-underline transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
              style={{ background: GOLD, color: DARK, boxShadow: "0 0 40px rgba(245,200,66,0.35), 0 8px 24px rgba(0,0,0,0.35)" }}
              tracking={{ cta_name: "voir_combien_recuperer", cta_location: "home_hero", destination: questionnairePath }}
            >
              👉 {h.primaryCta}
            </TrackingLink>
            <p className="text-xs" style={{ color: "rgba(240,235,224,0.35)" }}>{h.ctaMeta}</p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7" style={{ color: "rgba(240,235,224,0.45)" }}>
              {h.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── CE QUE VOUS PERDEZ ── */}
      <section className="px-5 py-10" style={{ background: "#0F1B2D", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-extrabold"
            style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0" }}>
            {h.lossTitle}
          </h2>
          <div className="flex flex-col gap-3 mb-5">
            {h.lossItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl px-4 py-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>❌</span>
                <span className="text-sm font-medium" style={{ color: "rgba(240,235,224,0.75)" }}>{item}</span>
              </div>
            ))}
          </div>
          <p className="mb-5 text-center text-sm leading-7" style={{ color: "rgba(240,235,224,0.5)" }}>
            {h.lossConclusion}
          </p>
          <div className="text-center">
            <TrackingLink href={questionnairePath}
              className="inline-block rounded-xl px-6 py-3 text-sm font-bold no-underline"
              style={{ background: "rgba(245,200,66,0.12)", color: GOLD, border: "1px solid rgba(245,200,66,0.25)" }}
              tracking={{ cta_name: "voir_ce_que_je_peux_recuperer", cta_location: "home_loss", destination: questionnairePath }}>
              👉 {h.lossCta}
            </TrackingLink>
          </div>
        </div>
      </section>

      {/* ── EXEMPLES RÉELS ── */}
      <section className="border-b px-5 py-12" style={{ background: PARCH, borderColor: "#E8E0D4" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {h.examplesTitle}
          </h2>
          <p className="mb-6 text-center text-sm text-stone-500">
            {h.examplesSubtitle}
          </p>
          <div className="flex flex-col gap-4">
            {h.examples.map((example) => (
              <div key={example.profile} className="rounded-2xl bg-white px-5 py-5"
                style={{ borderLeft: `4px solid ${GREEN}`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-base font-bold text-stone-900">{example.profile}</div>
                    <div className="mt-0.5 text-xs text-stone-400">{example.revenue}</div>
                    <div className="mt-2 text-sm leading-6 text-stone-500">{example.description}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="font-extrabold leading-none" style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", color: "#059669" }}>
                      {example.amount}
                    </div>
                    <div className="mt-0.5 text-xs" style={{ color: "#6EE7B7" }}>
                      {h.examplesRecoveredLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <TrackingLink href={questionnairePath}
              className="inline-block rounded-xl border px-5 py-3 text-sm font-bold no-underline"
              style={{ color: "#059669", borderColor: "#6EE7B7", background: "rgba(16,185,129,0.06)" }}
              tracking={{ cta_name: "voir_exemples_similaires", cta_location: "home_examples", destination: questionnairePath }}>
              👉 {h.examplesCta} →
            </TrackingLink>
          </div>
        </div>
      </section>

      {/* ── CTA POST-EXEMPLES ── */}
      <section className="px-5 py-10 text-center" style={{ background: "#0F1B2D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-md">
          <p className="mb-2 text-base font-bold" style={{ color: "#F0EBE0" }}>
            {h.examplesCtaBlockTitle}
          </p>
          <p className="mb-6 text-sm" style={{ color: "rgba(240,235,224,0.5)" }}>
            {h.examplesCtaBlockSubtext}
          </p>
          <TrackingLink
            href={questionnairePath}
            className="inline-block rounded-2xl px-8 py-5 text-base font-extrabold no-underline transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
            style={{ background: GOLD, color: DARK, boxShadow: "0 0 32px rgba(245,200,66,0.3), 0 6px 20px rgba(0,0,0,0.3)" }}
            tracking={{ cta_name: "exemples_apres_preuve", cta_location: "home_examples_block", destination: questionnairePath }}
          >
            👉 {h.primaryCta}
          </TrackingLink>
        </div>
      </section>

      {/* ── AD ── */}
      <div className="py-3 px-4" style={{ background: "#EDE9E0", borderBottom: "1px solid #E0D9CE" }}>
        <div className="mx-auto max-w-3xl">
          <div className="flex h-14 items-center justify-center rounded-xl text-xs text-stone-400"
            style={{ background: "#E5DFD4" }}>
            Publicité
          </div>
        </div>
      </div>

      {/* ── POSITIONNEMENT ── */}
      <section className="border-b bg-white px-5 py-10" style={{ borderColor: "#F0EBE0" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-extrabold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {h.positioningTitle}
          </h2>
          <div className="rounded-2xl border p-5" style={{ background: PARCH, borderColor: "#EDE9E0" }}>
            <p className="text-sm leading-8 text-stone-500">
              {h.positioningText}
            </p>
          </div>
        </div>
      </section>

      {/* ── PILIERS ── */}
      <section className="border-b px-5 py-12" style={{ background: PARCH, borderColor: "#E8E0D4" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {h.pilaresTitle}
          </h2>
          <p className="mb-6 text-center text-sm text-stone-500">{h.pilaresSubtitle}</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {piliers.map((p) => (
              <Link key={p.href + p.emoji} href={p.href}
                className="block rounded-2xl border bg-white p-4 no-underline"
                style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 text-3xl">{p.emoji}</div>
                <div className="mb-1 text-sm font-bold text-stone-900">{p.label}</div>
                <div className="mb-3 text-xs leading-5 text-stone-400">{p.desc}</div>
                <span className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold"
                  style={{ background: p.color, color: p.textColor }}>
                  {h.pilaresExploreLabel}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCÉNARIOS CONCRETS ── */}
      <section className="border-b bg-white px-5 py-12" style={{ borderColor: "#F0EBE0" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {h.scenariosTitle}
          </h2>
          <p className="mb-6 text-center text-sm text-stone-500">{h.scenariosSubtitle}</p>
          <div className="flex flex-col gap-3">
            {h.scenarios.map((s) => (
              <TrackingLink key={s.profil} href={questionnairePath}
                className="flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 no-underline"
                style={{ background: PARCH, borderColor: "#EDE9E0" }}
                tracking={{ cta_name: `scenario_${s.profil.toLowerCase().replace(/\s+/g, "_")}`, cta_location: "home_scenarios_card", destination: questionnairePath }}>
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{s.emoji}</span>
                  <div>
                    <div className="text-sm font-bold text-stone-900">{s.profil}</div>
                    <div className="mt-0.5 text-xs text-stone-400">{s.detail}</div>
                  </div>
                </div>
                <span className="shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: "#D1FAE5", color: "#059669" }}>
                  {s.gain}
                </span>
              </TrackingLink>
            ))}
          </div>
          <div className="mt-6 text-center">
            <TrackingLink href={questionnairePath}
              className="inline-block rounded-xl px-6 py-3 text-sm font-bold text-white no-underline"
              style={{ background: "#059669" }}
              tracking={{ cta_name: "voir_mon_scenario", cta_location: "home_scenarios", destination: questionnairePath }}>
              👉 {h.scenariosCta}
            </TrackingLink>
          </div>
        </div>
      </section>

      {/* ── OUTIL / QUESTIONNAIRE ── */}
      <section id="tool-section" className="px-5 py-12" style={{ background: DARK, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(245,200,66,0.07) 0%, transparent 70%)",
        }} />
        <div className="relative mx-auto max-w-3xl text-center" style={{ zIndex: 1 }}>
          <div className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em]"
            style={{ background: "rgba(245,200,66,0.12)", color: GOLD }}>
            {h.toolBadge}
          </div>
          <h2 className="mb-3 text-2xl font-extrabold"
            style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0" }}>
            {h.toolTitle}
          </h2>
          <p className="mb-4 text-sm leading-7" style={{ color: "rgba(240,235,224,0.55)" }}>
            {h.toolDescription}
          </p>
          <div className="mx-auto mb-7 flex max-w-xs flex-col gap-2 text-left">
            {h.toolBenefits.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-px shrink-0 font-bold" style={{ color: GREEN }}>✓</span>
                <span className="text-sm" style={{ color: "rgba(240,235,224,0.65)" }}>{item}</span>
              </div>
            ))}
          </div>
          <TrackingLink href={questionnairePath}
            className="inline-block rounded-2xl px-8 py-4 text-base font-extrabold no-underline"
            style={{ background: GOLD, color: DARK, boxShadow: "0 0 32px rgba(245,200,66,0.25)" }}
            tracking={{ cta_name: "lancer_mon_diagnostic", cta_location: "home_tool", destination: questionnairePath }}>
            🚀 {h.toolCta} →
          </TrackingLink>
          <p className="mt-3 text-xs" style={{ color: "rgba(240,235,224,0.3)" }}>
            {h.ctaMeta}
          </p>
        </div>
      </section>

      {/* ── COMMENT ÇA FONCTIONNE ── */}
      <section className="border-t bg-white px-5 py-12" style={{ borderColor: "#F0EBE0" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {h.stepsTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {h.steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4 rounded-2xl border p-5"
                style={{ background: PARCH, borderColor: "#EDE9E0" }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-extrabold"
                  style={{ background: GOLD, color: DARK, fontFamily: "var(--font-playfair)" }}>
                  {step.number}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-stone-900">{step.title}</h3>
                  <p className="text-xs leading-6 text-stone-500">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THÈMES / HUB CARDS ── */}
      <section className="border-t px-5 py-12" style={{ background: PARCH, borderColor: "#E8E0D4" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-2xl font-extrabold text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {h.topicsTitle}
          </h2>
          <p className="mb-6 text-sm leading-7 text-stone-500">{h.topicsDescription}</p>
          <div className="grid gap-3 md:grid-cols-3">
            {topics.map((topic) => (
              <Link key={topic.key} href={topic.href}
                className="rounded-2xl border bg-white px-5 py-6 no-underline"
                style={{ borderColor: "#EDE9E0" }}>
                <div className="text-base font-bold text-stone-900">{topic.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD BAS ── */}
      <section className="px-4 py-4" style={{ background: "#EDE9E0", borderTop: "1px solid #E0D9CE" }}>
        <div className="mx-auto max-w-3xl">
          <div className="flex h-16 items-center justify-center rounded-xl text-xs text-stone-400"
            style={{ background: "#E5DFD4" }}>
            Publicité
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mt-auto px-5 py-8" style={{ background: DARK }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-lg font-bold" style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}>
            {d.brand}
          </p>
          <div className="mb-4 flex flex-wrap justify-center gap-4">
            {[
              { label: h.piliers[0].label, href: getRoutePath(locale, "budget") },
              { label: h.piliers[1].label, href: getRoutePath(locale, "taxes") },
              { label: h.piliers[2].label, href: getRoutePath(locale, "retirement") },
              { label: h.piliers[3].label, href: getRoutePath(locale, "internet") },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="text-xs no-underline" style={{ color: "rgba(240,235,224,0.4)" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-sm leading-7 text-stone-400">{h.footerDisclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
