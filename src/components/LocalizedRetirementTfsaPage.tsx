import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRetirementTfsaDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const cumulativeRights = [
  { year: "2009", annual: "5 000 $", total: "5 000 $" },
  { year: "2013", annual: "5 500 $", total: "25 500 $" },
  { year: "2015", annual: "10 000 $", total: "41 000 $" },
  { year: "2019", annual: "6 000 $", total: "63 500 $" },
  { year: "2023", annual: "6 500 $", total: "88 000 $" },
  { year: "2026", annual: "7 000 $", total: "109 000 $" },
];

const cumulativeRightsEn = [
  { year: "2009", annual: "5,000 CAD", total: "5,000 CAD" },
  { year: "2013", annual: "5,500 CAD", total: "25,500 CAD" },
  { year: "2015", annual: "10,000 CAD", total: "41,000 CAD" },
  { year: "2019", annual: "6,000 CAD", total: "63,500 CAD" },
  { year: "2023", annual: "6,500 CAD", total: "88,000 CAD" },
  { year: "2026", annual: "7,000 CAD", total: "109,000 CAD" },
];

export default function LocalizedRetirementTfsaPage({ locale }: { locale: Locale }) {
  const dictionary = getRetirementTfsaDictionary(locale);
  const rights = locale === "fr" ? cumulativeRights : cumulativeRightsEn;
  const homePath = getRoutePath(locale, "home");
  const retirementHubPath = getRoutePath(locale, "retirement");
  const rrspPath = getRoutePath(locale, "retirementRrsp");

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
        <section className="mb-8 rounded-3xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
          <h2 className="mb-4 text-xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.basicsTitle}</h2>
          <div className="flex flex-col gap-2">
            {dictionary.basicsBullets.map((bullet) => (
              <div key={bullet} className="flex gap-2 text-sm leading-7 text-emerald-800">
                <span style={{ color: GREEN }}>•</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-3xl px-6 py-6 text-center" style={{ background: DARK }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: "rgba(240,235,224,0.6)" }}>{dictionary.capTitle}</p>
          <p className="mb-2 text-4xl font-extrabold" style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}>{dictionary.capValue}</p>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-stone-300">{dictionary.capText}</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.rightsTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  {dictionary.rightsHeaders.map((header) => (
                    <th key={header} style={{ padding: "12px 14px", textAlign: "center", fontWeight: 700 }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rights.map((row, index) => (
                  <tr key={row.year} style={{ borderBottom: index < rights.length - 1 ? "1px solid #F0EBE0" : "none", background: row.year === "2026" ? "#ECFDF5" : "white" }}>
                    <td style={{ padding: "12px 14px", textAlign: "center", fontWeight: row.year === "2026" ? 800 : 500, color: row.year === "2026" ? "#065F46" : "#44403C" }}>{row.year}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.annual}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", fontWeight: row.year === "2026" ? 800 : 600, color: row.year === "2026" ? GREEN : "#1C1C1E" }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.placementsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.placements.map((placement) => (
              <div key={placement.title} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="text-sm font-bold text-stone-900">{placement.title}</div>
                  <span className="rounded-full px-2 py-1 text-[11px] font-bold" style={{ background: placement.risk.includes("Low") || placement.risk.includes("Faible") ? "#D1FAE5" : placement.risk.includes("High") || placement.risk.includes("Eleve") ? "#FEE2E2" : "#FEF3C7", color: placement.risk.includes("Low") || placement.risk.includes("Faible") ? "#065F46" : placement.risk.includes("High") || placement.risk.includes("Eleve") ? "#991B1B" : "#92400E" }}>
                    {placement.risk}
                  </span>
                </div>
                <div className="text-sm leading-7 text-stone-600">{placement.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.usesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.uses.map((use) => (
              <div key={use.title} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-1 text-sm font-bold text-stone-900">{use.title}</div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-400">{use.horizon}</div>
                <div className="text-sm leading-7 text-stone-600">{use.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.mistakesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.mistakes.map((mistake) => (
              <div key={mistake.title} className="rounded-2xl border bg-white p-5" style={{ borderColor: mistake.alert ? "#FECACA" : "#EDE9E0" }}>
                <div className="mb-2 flex items-center gap-2">
                  {mistake.alert && <span className="rounded-full bg-red-100 px-2 py-1 text-[10px] font-bold text-red-600">{locale === "fr" ? "Penalite possible" : "Penalty risk"}</span>}
                  <div className="text-sm font-bold text-stone-900">{mistake.title}</div>
                </div>
                <div className="text-sm leading-7 text-stone-600">{mistake.text}</div>
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
            {locale === "fr" ? "Penser CELI et REER ensemble" : "Think TFSA and RRSP together"}
          </h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">
            {locale === "fr"
              ? "Le CELI est plus puissant quand il complete le REER au lieu de le remplacer automatiquement."
              : "The TFSA is most powerful when it complements the RRSP rather than replacing it by default."}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={rrspPath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {locale === "fr" ? "Voir le guide REER" : "See the RRSP guide"}
            </Link>
            <Link href={retirementHubPath} className="inline-block rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Retour au hub retraite" : "Back to retirement hub"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
