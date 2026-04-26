import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SiteFooter from "@/components/SiteFooter";
import LocalizedRetirementFhsaCalculator from "@/components/LocalizedRetirementFhsaCalculator";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getRetirementFhsaDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function LocalizedRetirementFhsaPage({ locale }: { locale: Locale }) {
  const dictionary = getRetirementFhsaDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const retirementHubPath = getRoutePath(locale, "retirement");
  const rrspPath = getRoutePath(locale, "retirementRrsp");

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <LanguageSwitcher currentLocale={locale} label="Language switcher" />
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
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-10">
        <section className="mb-8 rounded-3xl border bg-white p-6" style={{ borderColor: "#EDE9E0" }}>
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.introTitle}</h2>
          <div className="mb-5 flex flex-col gap-4">
            {dictionary.introParagraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 text-sm leading-7 text-stone-600">{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {dictionary.highlights.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-7 text-emerald-800">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: "#ECFDF5", color: "#065F46" }}>+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl px-6 py-6 text-center" style={{ background: DARK }}>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "rgba(240,235,224,0.5)" }}>{dictionary.annualCapLabel}</p>
            <p className="mb-1 text-3xl font-extrabold" style={{ fontFamily: "var(--font-playfair)", color: GOLD }}>{dictionary.annualCapValue}</p>
            <p className="m-0 text-xs text-stone-400">{dictionary.annualCapNote}</p>
          </div>
          <div className="rounded-3xl px-6 py-6 text-center" style={{ background: DARK }}>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "rgba(240,235,224,0.5)" }}>{dictionary.lifetimeCapLabel}</p>
            <p className="mb-1 text-3xl font-extrabold" style={{ fontFamily: "var(--font-playfair)", color: GREEN }}>{dictionary.lifetimeCapValue}</p>
            <p className="m-0 text-xs text-stone-400">{dictionary.lifetimeCapNote}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.rulesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.rules.map((rule) => (
              <div key={rule.title} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: DARK, color: GOLD }}>{rule.emoji}</span>
                    <span className="text-sm font-bold text-stone-900">{rule.title}</span>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-800">{rule.value}</span>
                </div>
                <p className="m-0 text-sm leading-7 text-stone-600">{rule.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-3xl border px-6 py-6" style={{ background: "#EFF6FF", borderColor: "#BFDBFE" }}>
          <h2 className="mb-3 text-2xl font-extrabold text-blue-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.strategyTitle}</h2>
          <p className="mb-4 text-sm leading-7 text-blue-900">{dictionary.strategyIntro}</p>
          <div className="rounded-2xl bg-white p-4">
            {dictionary.strategyRows.map((row) => (
              <div key={row.label} className="mb-2 flex items-center justify-between gap-3 text-sm text-blue-900">
                <span className="font-semibold">{row.label}</span>
                <span className="font-extrabold">{row.value}</span>
              </div>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t pt-3 text-sm text-blue-900" style={{ borderColor: "#BFDBFE" }}>
              <span className="font-bold">{dictionary.strategyTotalLabel}</span>
              <span className="text-base font-extrabold">{dictionary.strategyTotalValue}</span>
            </div>
          </div>
          <Link href={rrspPath} className="mt-3 inline-block text-sm font-bold no-underline" style={{ color: "#1D4ED8" }}>
            {dictionary.strategyLinkLabel}
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.comparisonTitle}</h2>
          <p className="mb-4 text-sm leading-7 text-stone-600">{dictionary.comparisonIntro}</p>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  {dictionary.comparisonHeaders.map((header) => (
                    <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.comparisonHeaders[0] ? "left" : "center", fontWeight: 700 }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dictionary.comparisonRows.map((row, index) => (
                  <tr key={row.criteria} style={{ borderBottom: index < dictionary.comparisonRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700, color: "#1C1C1E" }}>{row.criteria}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.fhsa}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.tfsa}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.rrsp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.calculatorTitle}</h2>
          <p className="mb-4 text-sm leading-7 text-stone-600">{dictionary.calculatorIntro}</p>
          <LocalizedRetirementFhsaCalculator locale={locale} dictionary={dictionary.calculator} />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.faqsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <h3 className="mb-2 text-sm font-bold text-stone-900">{faq.question}</h3>
                <p className="m-0 text-sm leading-7 text-stone-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 grid gap-3 md:grid-cols-3">
          {dictionary.ctaLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl border bg-white p-4 no-underline" style={{ borderColor: "#EDE9E0", color: "inherit" }}>
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: DARK, color: GOLD }}>{link.emoji}</div>
              <div className="mb-1 text-sm font-bold text-stone-900">{link.title}</div>
              <div className="text-xs leading-6 text-stone-500">{link.description}</div>
            </Link>
          ))}
        </section>
      </div>

      <SiteFooter
        legalText={dictionary.footerText}
        contactLabel={dictionary.footerContact}
        locale={locale}
        contentClassName="mx-auto max-w-4xl text-center"
        style={{ background: DARK }}
        legalStyle={{ color: "rgba(240,235,224,0.4)" }}
      />
    </main>
  );
}
