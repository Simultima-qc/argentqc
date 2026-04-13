import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getInsuranceLifeDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function LocalizedInsuranceLifePage({ locale }: { locale: Locale }) {
  const dictionary = getInsuranceLifeDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const insuranceHubPath = getRoutePath(locale, "insurance");
  const homeInsurancePath = getRoutePath(locale, "insuranceHome");
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
        <section className="mb-10 rounded-3xl border bg-white p-6" style={{ borderColor: "#EDE9E0" }}>
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.whyTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.whyPoints.map((point) => (
              <div key={point} className="flex gap-3 text-sm leading-7 text-stone-700">
                <span className="shrink-0 font-bold" style={{ color: GOLD }}>•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
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
                  <tr key={row.criteria} style={{ borderBottom: index < dictionary.comparisonRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700, color: "#1C1C1E" }}>{row.criteria}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.term}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.permanent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.needsTitle}</h2>
          <p className="mb-5 text-sm leading-7 text-stone-600">{dictionary.needsIntro}</p>
          <div className="flex flex-col gap-3">
            {dictionary.needsRows.map((row) => (
              <div key={row.profile} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="text-sm font-bold text-stone-900">{row.profile}</div>
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-800">{row.target}</span>
                </div>
                <div className="text-sm leading-7 text-stone-600">{row.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.providersTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.providers.map((provider) => (
              <div key={provider.name} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-1 text-sm font-bold text-stone-900">{provider.name}</div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">{provider.type}</div>
                <div className="text-sm leading-7 text-stone-600">{provider.note}</div>
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
            {locale === "fr" ? "Replacer l'assurance vie dans l'ensemble du profil" : "Place life insurance inside the broader profile"}
          </h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">
            {locale === "fr"
              ? "Le besoin d'assurance vie depend de vos revenus, dettes, charges familiales et des autres protections deja en place."
              : "Life insurance needs depend on income, debts, family obligations, and the other protections already in place."}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={questionnairePath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {locale === "fr" ? "Trouver mes aides" : "Find my programs"}
            </Link>
            <Link href={homeInsurancePath} className="inline-block rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Voir aussi l'assurance habitation" : "See home insurance too"}
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
