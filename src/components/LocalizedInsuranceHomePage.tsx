import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getInsuranceHomeDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function LocalizedInsuranceHomePage({ locale }: { locale: Locale }) {
  const dictionary = getInsuranceHomeDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const insuranceHubPath = getRoutePath(locale, "insurance");
  const autoPath = getRoutePath(locale, "insuranceAuto");
  const questionnairePath = getRoutePath(locale, "questionnaire");
  const movingPath = getRoutePath(locale, "moving");

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
        <section className="mb-10 rounded-3xl border px-5 py-5" style={{ borderColor: "#FCD34D", background: "#FEF3C7" }}>
          <div className="mb-2 text-sm font-extrabold text-amber-900">{locale === "fr" ? "A revoir avant un demenagement" : "Worth reviewing before a move"}</div>
          <p className="mb-4 text-sm leading-7 text-amber-900">
            {locale === "fr"
              ? "Un demenagement est souvent le meilleur moment pour ajuster sa couverture, revoir la franchise et remettre a jour la valeur des biens."
              : "A move is often the best time to review coverage, reassess deductibles, and update the value of your contents."}
          </p>
          <Link href={movingPath} className="inline-block rounded-2xl px-4 py-3 text-sm font-extrabold no-underline" style={{ background: DARK, color: GOLD }}>
            {locale === "fr" ? "Voir le guide demenagement" : "See the moving guide"}
          </Link>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.comparisonTitle}</h2>
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
                  <tr key={row.aspect} style={{ borderBottom: index < dictionary.comparisonRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700, color: "#1C1C1E" }}>{row.aspect}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.renter}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.coverageTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.coverageRows.map((row) => (
              <div key={row.risk} className="rounded-2xl border bg-white p-5" style={{ borderColor: row.covered ? "#A7F3D0" : "#FECACA" }}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-sm font-bold text-stone-900">{row.risk}</span>
                  <span
                    className="rounded-full px-2 py-1 text-[10px] font-bold"
                    style={{ background: row.covered ? "#DCFCE7" : "#FEE2E2", color: row.covered ? "#166534" : "#991B1B" }}
                  >
                    {row.covered ? (locale === "fr" ? "Souvent couvert" : "Often covered") : (locale === "fr" ? "Souvent exclu" : "Often excluded")}
                  </span>
                </div>
                <div className="text-sm leading-7 text-stone-600">{row.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.pricingTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  {dictionary.pricingHeaders.map((header) => (
                    <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.pricingHeaders[0] ? "left" : "center", fontWeight: 700 }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dictionary.pricingRows.map((row, index) => (
                  <tr key={row.housing} style={{ borderBottom: index < dictionary.pricingRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700, color: "#1C1C1E" }}>{row.housing}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.insuredValue}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.monthlyPremium}</td>
                    <td style={{ padding: "12px 14px", color: "#44403C" }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.inventoryTitle}</h2>
          <p className="mb-5 text-sm leading-7 text-stone-600">{dictionary.inventoryIntro}</p>
          <div className="flex flex-col gap-3">
            {dictionary.inventoryRows.map((row) => (
              <div key={row.category} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="text-sm font-bold text-stone-900">{row.category}</div>
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-800">{row.range}</span>
                </div>
                <div className="text-sm leading-7 text-stone-600">{row.examples}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border px-5 py-4 text-sm leading-7" style={{ borderColor: "#A7F3D0", background: "#ECFDF5", color: "#065F46" }}>
            {dictionary.inventoryTip}
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
          <h2 className="mb-3 text-2xl font-extrabold text-stone-100" style={{ fontFamily: "var(--font-playfair)" }}>
            {locale === "fr" ? "Faire le lien avec auto et budget" : "Connect home coverage with auto and budget"}
          </h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">
            {locale === "fr"
              ? "Le bon niveau de couverture depend aussi du reste de vos protections et de la place de cette prime dans votre budget."
              : "The right coverage level also depends on the rest of your protection stack and how the premium fits inside your budget."}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={autoPath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {locale === "fr" ? "Voir aussi l'assurance auto" : "See auto insurance too"}
            </Link>
            <Link href={questionnairePath} className="inline-block rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Trouver mes aides" : "Find my programs"}
            </Link>
            <Link href={insuranceHubPath} className="inline-block rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Retour au thème assurances" : "Back to insurance topic"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
