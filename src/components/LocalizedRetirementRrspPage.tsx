import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRetirementRrspDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const refundExamples = {
  fr: [
    { revenu: "35 000 $", taux: "~27%", cotisation: "3 000 $", remboursement: "~810 $" },
    { revenu: "50 000 $", taux: "~37%", cotisation: "5 000 $", remboursement: "~1 850 $" },
    { revenu: "75 000 $", taux: "~43%", cotisation: "8 000 $", remboursement: "~3 440 $" },
    { revenu: "100 000 $", taux: "~48%", cotisation: "10 000 $", remboursement: "~4 800 $" },
  ],
  en: [
    { revenu: "35,000 CAD", taux: "~27%", cotisation: "3,000 CAD", remboursement: "~810 CAD" },
    { revenu: "50,000 CAD", taux: "~37%", cotisation: "5,000 CAD", remboursement: "~1,850 CAD" },
    { revenu: "75,000 CAD", taux: "~43%", cotisation: "8,000 CAD", remboursement: "~3,440 CAD" },
    { revenu: "100,000 CAD", taux: "~48%", cotisation: "10,000 CAD", remboursement: "~4,800 CAD" },
  ],
} as const;

const comparisonRows = {
  fr: [
    { critere: "Deduction du revenu imposable", reer: "Oui", celi: "Non" },
    { critere: "Retrait imposable", reer: "Oui", celi: "Non" },
    { critere: "Droits recuperes apres retrait", reer: "Non", celi: "Oui, l'annee suivante" },
    { critere: "Ideal pour", reer: "Taux d'impot eleve maintenant", celi: "Flexibilite et retraits non imposes" },
  ],
  en: [
    { critere: "Reduces taxable income", reer: "Yes", celi: "No" },
    { critere: "Withdrawals taxed later", reer: "Yes", celi: "No" },
    { critere: "Contribution room comes back after withdrawal", reer: "No", celi: "Yes, the following year" },
    { critere: "Best suited for", reer: "Higher tax rate today", celi: "Flexibility and tax-free withdrawals" },
  ],
} as const;

export default function LocalizedRetirementRrspPage({ locale }: { locale: Locale }) {
  const dictionary = getRetirementRrspDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const retirementHubPath = getRoutePath(locale, "retirement");
  const rrqPath = getRoutePath(locale, "retirementRrq");
  const rows = refundExamples[locale];
  const comparisons = comparisonRows[locale];

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
          <div className="flex flex-col gap-3">
            {dictionary.basicsPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border px-4 py-3" style={{ background: "#ECFDF5", borderColor: "#A7F3D0" }}>
                <div className="mb-1 text-sm font-bold text-emerald-900">{point.title}</div>
                <div className="text-sm leading-7 text-emerald-800">{point.text}</div>
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
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.refundTableTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  {dictionary.refundTableHeaders.map((header) => (
                    <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.refundTableHeaders[0] ? "left" : "center", fontWeight: 700 }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.revenu} style={{ borderBottom: index < rows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 600, color: "#1C1C1E" }}>{row.revenu}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.taux}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.cotisation}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", fontWeight: 700, color: GREEN }}>{row.remboursement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                {comparisons.map((row, index) => (
                  <tr key={row.critere} style={{ borderBottom: index < comparisons.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 600, color: "#44403C" }}>{row.critere}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#1C1C1E" }}>{row.reer}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#1C1C1E" }}>{row.celi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.specialUsesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {dictionary.specialUses.map((item) => (
              <div key={item.title} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-3 text-sm font-bold text-stone-900">{item.title}</div>
                <ul className="m-0 pl-5 text-sm leading-7 text-stone-600">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.mistakesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.mistakes.map((mistake, index) => (
              <div key={mistake.title} className="flex gap-3 rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-extrabold text-red-600" style={{ background: "#FEF2F2", borderColor: "#FECACA" }}>
                  {index + 1}
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-stone-900">{mistake.title}</div>
                  <div className="text-sm leading-7 text-stone-600">{mistake.text}</div>
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
            {locale === "fr" ? "Construire la strategie retraite au complet" : "Build the full retirement strategy"}
          </h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">
            {locale === "fr"
              ? "Le REER prend plus de sens quand il est pense avec la RRQ, le CELI et votre horizon de revenu futur."
              : "An RRSP becomes more useful when planned alongside QPP, TFSA choices, and your future income path."}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={rrqPath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {locale === "fr" ? "Voir le guide RRQ" : "See the QPP guide"}
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
