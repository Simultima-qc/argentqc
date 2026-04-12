import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getMovingCostDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function LocalizedMovingCostPage({ locale }: { locale: Locale }) {
  const dictionary = getMovingCostDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const movingHubPath = getRoutePath(locale, "moving");
  const checklistPath = getRoutePath(locale, "movingChecklist");
  const insuranceHomePath = getRoutePath(locale, "insuranceHome");

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <LanguageSwitcher currentLocale={locale} label="Language switcher" />
        </div>
      </header>

      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl" style={{ position: "relative", zIndex: 1 }}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>{dictionary.eyebrow}</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.title}</h1>
          <p className="max-w-2xl text-base leading-8 text-stone-300">{dictionary.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-10">
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.tableTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  {dictionary.tableHeaders.map((header) => (
                    <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.tableHeaders[0] ? "left" : "center", fontWeight: 700 }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dictionary.tableRows.map((row, index) => (
                  <tr key={row.housing} style={{ borderBottom: index < dictionary.tableRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700, color: "#1C1C1E" }}>{row.housing}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: GREEN, fontWeight: 700 }}>{row.diy}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#2563EB", fontWeight: 700 }}>{row.professional}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.comparisonTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {dictionary.comparisonCards.map((card) => (
              <div key={card.title} className="rounded-3xl border bg-white p-6" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-4 text-lg font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{card.title}</div>
                <div className="mb-3 text-sm font-bold" style={{ color: GREEN }}>{card.prosTitle}</div>
                <div className="mb-5 flex flex-col gap-2 text-sm leading-7 text-stone-700">
                  {card.pros.map((item) => <div key={item}>{item}</div>)}
                </div>
                <div className="mb-3 text-sm font-bold text-red-600">{card.consTitle}</div>
                <div className="flex flex-col gap-2 text-sm leading-7 text-stone-700">
                  {card.cons.map((item) => <div key={item}>{item}</div>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.hiddenCostsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.hiddenCosts.map((cost) => (
              <div key={cost.item} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="text-sm font-bold text-stone-900">{cost.item}</div>
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-800">{cost.range}</span>
                </div>
                <div className="text-sm leading-7 text-stone-600">{cost.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.savingsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.savings.map((tip, index) => (
              <div key={tip.title} className="flex gap-3 rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold" style={{ background: DARK, color: GOLD }}>{index + 1}</div>
                <div>
                  <div className="mb-1 text-sm font-bold text-stone-900">{tip.title}</div>
                  <div className="text-sm leading-7 text-stone-600">{tip.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
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

        <section className="rounded-[28px] px-6 py-7 text-center" style={{ background: DARK }}>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href={checklistPath} className="rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {dictionary.ctaChecklistTitle}
            </Link>
            <Link href={insuranceHomePath} className="rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {dictionary.ctaInsuranceTitle}
            </Link>
            <Link href={movingHubPath} className="rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Retour au hub demenagement" : "Back to moving hub"}
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm leading-7 text-stone-300 sm:flex-row sm:justify-center sm:gap-6">
            <span>{dictionary.ctaChecklistText}</span>
            <span>{dictionary.ctaInsuranceText}</span>
          </div>
        </section>
      </div>
    </main>
  );
}
