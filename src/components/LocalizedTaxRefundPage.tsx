import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getStaticSubguideDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const refundRows = {
  fr: [
    { method: "En ligne + depot direct", cra: "~2 semaines", rq: "2 a 4 semaines", best: true },
    { method: "En ligne + cheque", cra: "4 a 6 semaines", rq: "4 a 6 semaines", best: false },
    { method: "Papier + depot direct", cra: "~8 semaines", rq: "8 a 10 semaines", best: false },
    { method: "Papier + cheque", cra: "8 a 12 semaines", rq: "10 a 12 semaines", best: false },
  ],
  en: [
    { method: "Online + direct deposit", cra: "~2 weeks", rq: "2 to 4 weeks", best: true },
    { method: "Online + cheque", cra: "4 to 6 weeks", rq: "4 to 6 weeks", best: false },
    { method: "Paper + direct deposit", cra: "~8 weeks", rq: "8 to 10 weeks", best: false },
    { method: "Paper + cheque", cra: "8 to 12 weeks", rq: "10 to 12 weeks", best: false },
  ],
} as const;

const delayReasons = {
  fr: [
    { title: "Verification de declaration", text: "Une verification aleatoire ou documentaire peut prolonger sensiblement le traitement.", emoji: "🔍" },
    { title: "Feuillet ou information manquante", text: "Un T4, RL-1 ou un montant incoherent peut bloquer le remboursement en attendant une correction.", emoji: "⚠️" },
    { title: "Compensation de dette gouvernementale", text: "Une somme due a un organisme public peut etre retenue sur le remboursement.", emoji: "⚖️" },
    { title: "Production papier en haute saison", text: "Le papier reste beaucoup plus lent, surtout au printemps.", emoji: "📬" },
  ],
  en: [
    { title: "Return review", text: "A random or document-based review can materially extend processing time.", emoji: "🔍" },
    { title: "Missing slip or mismatch", text: "A missing T4, RL-1, or inconsistent amount can delay the refund until corrected.", emoji: "⚠️" },
    { title: "Government debt set-off", text: "Amounts owed to a public body may be applied against the refund.", emoji: "⚖️" },
    { title: "Paper filing during peak season", text: "Paper remains much slower, especially during spring filing season.", emoji: "📬" },
  ],
} as const;

const missedCredits = {
  fr: [
    { title: "Frais medicaux", text: "Lunettes, soins, physiotherapie et primes d'assurance peuvent faire une vraie difference.", href: "/credit-impot-frais-medicaux-quebec", badge: "Jusqu'a env. 1 200 a 2 000 $" },
    { title: "Frais de demenagement", text: "Plusieurs couts lies a un demenagement admissible peuvent etre deductibles.", href: "/demenagement/cout", badge: "Deduction variable" },
    { title: "Credit de solidarite", text: "Au Quebec, ce credit remboursable est souvent sous-estime ou mal renseigne.", href: "/credit-solidarite-quebec", badge: "Jusqu'a 1 194 $/an" },
    { title: "Cotisations REER", text: "Les cotisations admissibles reduisent directement le revenu imposable.", href: "/retraite/reer", badge: "Economie fiscale potentielle" },
  ],
  en: [
    { title: "Medical expenses", text: "Glasses, care, physiotherapy, and insurance premiums can move the final refund meaningfully.", href: "/credit-impot-frais-medicaux-quebec", badge: "Often worth 1,200 to 2,000 CAD" },
    { title: "Moving expenses", text: "Several qualifying moving costs may still be deductible depending on the move context.", href: "/demenagement/cout", badge: "Variable deduction" },
    { title: "Solidarity tax credit", text: "In Quebec this refundable credit is often under-claimed or poorly completed.", href: "/credit-solidarite-quebec", badge: "Up to 1,194 CAD/year" },
    { title: "RRSP contributions", text: "Eligible RRSP contributions reduce taxable income directly.", href: "/retraite/reer", badge: "Potential tax savings" },
  ],
} as const;

export default function LocalizedTaxRefundPage({ locale }: { locale: Locale }) {
  const dictionary = getStaticSubguideDictionary(locale, "taxesRefund");
  const rows = refundRows[locale];
  const reasons = delayReasons[locale];
  const credits = missedCredits[locale];
  const homePath = getRoutePath(locale, "home");
  const taxesHubPath = getRoutePath(locale, "taxes");
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
        <div className="mb-6 rounded-2xl border px-4 py-3" style={{ background: "#ECFDF5", borderColor: "#A7F3D0" }}>
          <p className="m-0 text-sm leading-7 text-emerald-900">
            <strong>{locale === "fr" ? "Conseil" : "Tip"}:</strong>{" "}
            {locale === "fr"
              ? "produire en ligne avec depot direct reste la meilleure facon d'accelerer le remboursement."
              : "online filing with direct deposit is still the fastest path to a refund."}
          </p>
        </div>

        <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.tableTitle}</h2>
        <div className="mb-10 overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                {dictionary.tableHeaders.map((header) => (
                  <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.tableHeaders[0] ? "left" : "center", fontWeight: 700 }}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.method} style={{ borderBottom: index < rows.length - 1 ? "1px solid #F0EBE0" : "none", background: row.best ? "#ECFDF5" : "white" }}>
                  <td style={{ padding: "12px 14px", color: "#1C1C1E", fontWeight: row.best ? 700 : 500 }}>{row.method}</td>
                  <td style={{ padding: "12px 14px", textAlign: "center", color: row.best ? "#065F46" : "#44403C", fontWeight: row.best ? 700 : 500 }}>{row.cra}</td>
                  <td style={{ padding: "12px 14px", textAlign: "center", color: row.best ? "#065F46" : "#44403C", fontWeight: row.best ? 700 : 500 }}>{row.rq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.cardsLabel}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 text-sm font-bold text-stone-900">{reason.emoji} {reason.title}</div>
                <div className="text-sm leading-7 text-stone-600">{reason.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.timelineLabel}</h2>
          <div className="flex flex-col gap-3">
            {credits.map((credit) => (
              <Link key={credit.title} href={credit.href} className="rounded-2xl border bg-white p-5 no-underline" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="text-sm font-bold text-stone-900">{credit.title}</div>
                  <span className="rounded-full px-2 py-1 text-[11px] font-bold" style={{ background: "#D1FAE5", color: "#065F46" }}>{credit.badge}</span>
                </div>
                <div className="text-sm leading-7 text-stone-600">{credit.text}</div>
              </Link>
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
          <h2 className="mb-3 text-2xl font-extrabold text-stone-100" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.ctaTitle}</h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">{dictionary.ctaText}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={questionnairePath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {dictionary.ctaLabel}
            </Link>
            <Link href={taxesHubPath} className="inline-block rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Retour au thème impôts" : "Back to tax topic"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
