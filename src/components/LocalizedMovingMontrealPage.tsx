import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getMovingMontrealDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function LocalizedMovingMontrealPage({ locale }: { locale: Locale }) {
  const dictionary = getMovingMontrealDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const movingHubPath = getRoutePath(locale, "moving");
  const movingChecklistPath = getRoutePath(locale, "movingChecklist");
  const movingCostPath = getRoutePath(locale, "movingCost");

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
        <section className="mb-10 rounded-3xl border px-6 py-6" style={{ borderColor: "#FCD34D", background: "#FEF3C7" }}>
          <h2 className="mb-3 text-2xl font-extrabold text-amber-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.alertTitle}</h2>
          <p className="m-0 text-sm leading-7 text-amber-900">{dictionary.alertText}</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.rentsTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  {dictionary.rentsHeaders.map((header) => (
                    <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.rentsHeaders[0] ? "left" : "center", fontWeight: 700 }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dictionary.rentsRows.map((row, index) => (
                  <tr key={row.district} style={{ borderBottom: index < dictionary.rentsRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px" }}>
                      <div className="text-sm font-bold text-stone-900">{row.district}</div>
                      <div className="text-xs text-stone-500">{row.note}</div>
                    </td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.studio}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.fourHalf}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.fiveHalf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.profilesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.profiles.map((item) => (
              <div key={item.profile} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-1 text-sm font-bold text-stone-900">{item.profile}</div>
                <div className="mb-1 text-sm font-semibold text-stone-700">{item.districts}</div>
                <div className="text-sm leading-7 text-stone-600">{item.reason}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.localTipsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.localTips.map((tip, index) => (
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
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.resourcesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.resources.map((resource) => (
              <a key={resource.name} href={resource.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border bg-white p-4 no-underline" style={{ borderColor: "#EDE9E0" }}>
                <div>
                  <div className="text-sm font-bold text-stone-900">{resource.name}</div>
                  <div className="text-xs text-stone-500">{resource.description}</div>
                </div>
              </a>
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
            <Link href={movingChecklistPath} className="rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {dictionary.ctaChecklistTitle}
            </Link>
            <Link href={movingCostPath} className="rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {dictionary.ctaCostTitle}
            </Link>
            <Link href={movingHubPath} className="rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Retour au hub demenagement" : "Back to moving hub"}
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm leading-7 text-stone-300 sm:flex-row sm:justify-center sm:gap-6">
            <span>{dictionary.ctaChecklistText}</span>
            <span>{dictionary.ctaCostText}</span>
          </div>
        </section>
      </div>
    </main>
  );
}
