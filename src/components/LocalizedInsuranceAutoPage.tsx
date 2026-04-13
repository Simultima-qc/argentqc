import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getInsuranceAutoDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const regimeRows = {
  fr: [
    { layer: "Dommages corporels", manager: "SAAQ", what: "Blessures, deces, readaptation", paid: "Immatriculation" },
    { layer: "Dommages materiels", manager: "Assureur prive", what: "Vehicules, biens et responsabilite civile", paid: "Prime mensuelle" },
  ],
  en: [
    { layer: "Bodily injury", manager: "SAAQ", what: "Injury, death, rehabilitation", paid: "Vehicle registration" },
    { layer: "Property damage", manager: "Private insurer", what: "Vehicles, property, and liability", paid: "Insurance premium" },
  ],
} as const;

export default function LocalizedInsuranceAutoPage({ locale }: { locale: Locale }) {
  const dictionary = getInsuranceAutoDictionary(locale);
  const regime = regimeRows[locale];
  const homePath = getRoutePath(locale, "home");
  const insuranceHubPath = getRoutePath(locale, "insurance");
  const questionnairePath = getRoutePath(locale, "questionnaire");

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
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.regimeTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  {dictionary.regimeHeaders.map((header) => (
                    <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.regimeHeaders[2] ? "left" : "center", fontWeight: 700 }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {regime.map((row, index) => (
                  <tr key={row.layer} style={{ borderBottom: index < regime.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700, color: "#1C1C1E", textAlign: "center" }}>{row.layer}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.manager}</td>
                    <td style={{ padding: "12px 14px", color: "#44403C" }}>{row.what}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.coveragesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.coverages.map((coverage) => (
              <div key={coverage.name} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center gap-2">
                  <div className="text-sm font-bold text-stone-900">{coverage.name}</div>
                  {coverage.mandatory && <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-800">{locale === "fr" ? "Obligatoire" : "Required"}</span>}
                </div>
                <div className="text-sm leading-7 text-stone-600">{coverage.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.factorsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.factors.map((factor) => (
              <div key={factor.title} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="text-sm font-bold text-stone-900">{factor.title}</div>
                  <span className="rounded-full px-2 py-1 text-[10px] font-bold" style={{ background: factor.impact.includes("Very") || factor.impact.includes("Tres") ? "#FEE2E2" : "#FEF3C7", color: factor.impact.includes("Very") || factor.impact.includes("Tres") ? "#991B1B" : "#92400E" }}>{factor.impact}</span>
                </div>
                <div className="text-sm leading-7 text-stone-600">{factor.text}</div>
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
                  <tr key={row.profile} style={{ borderBottom: index < dictionary.pricingRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 600, color: "#1C1C1E" }}>{row.profile}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.montreal}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.suburb}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.regions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.tipsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.tips.map((tip, index) => (
              <div key={tip.title} className="flex gap-3 rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold" style={{ background: DARK, color: GOLD }}>
                  {index + 1}
                </div>
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
          <h2 className="mb-3 text-2xl font-extrabold text-stone-100" style={{ fontFamily: "var(--font-playfair)" }}>
            {locale === "fr" ? "Replacer l'assurance auto dans l'ensemble du budget" : "Place auto insurance inside the full budget"}
          </h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">
            {locale === "fr"
              ? "Le bon niveau de couverture depend aussi de votre budget, de votre vehicule et de vos autres protections."
              : "The right level of coverage also depends on your budget, your vehicle, and the rest of your protection stack."}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={questionnairePath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
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
