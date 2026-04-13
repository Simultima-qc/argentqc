import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  taxCalendrier2026,
  taxDatesLimites2026,
  taxPenalites2026,
} from "@/data/finance-2026";
import { getStaticSubguideDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const enDates = [
  { situation: "Employee", federal: "April 30, 2026", provincial: "April 30, 2026" },
  { situation: "Self-employed taxpayer (or spouse)", federal: "June 15, 2026", provincial: "June 15, 2026" },
  { situation: "Payment of balance owing", federal: "April 30, 2026", provincial: "May 1, 2026" },
  { situation: "Deceased person (before November 2025)", federal: "April 30, 2026", provincial: "April 30, 2026" },
  { situation: "Deceased person (Nov.-Dec. 2025)", federal: "6 months after death", provincial: "6 months after death" },
  { situation: "Graduated rate estate", federal: "90 days after year-end", provincial: "90 days after year-end" },
];

const enPenalties = [
  {
    organisme: "CRA (federal)",
    penaliteBase: "5% of balance owing",
    penaliteMensuelle: "+ 1% for each full month (up to 12 months)",
    recidive: "10% if repeated within 3 years",
    interets: "Interest compounded daily at the prescribed rate (~8%)",
  },
  {
    organisme: "Revenu Quebec (provincial)",
    penaliteBase: "5% of balance owing",
    penaliteMensuelle: "+ 1% for each full month (up to 20 months)",
    recidive: "10% if repeated within 3 years",
    interets: "Interest compounded daily at the prescribed rate",
  },
];

const enCalendar = [
  { date: "March 1, 2026", evenement: "RRSP contribution deadline for the 2025 tax year", note: "Already passed, but worth keeping in mind for the next filing cycle." },
  { date: "Late February 2026", evenement: "Receive T4 and RL-1 slips from your employer", note: "Make sure every slip has arrived before you file." },
  { date: "Starting in March 2026", evenement: "NETFILE and Quebec online filing open", note: "Filing early usually means receiving your refund sooner." },
  { date: "April 30, 2026", evenement: "Main deadline for employees and balance owing", note: "Late-payment penalties can begin immediately after the deadline." },
  { date: "June 15, 2026", evenement: "Filing deadline for self-employed taxpayers", note: "The payment deadline does not move with this filing extension." },
];

function getLocalizedDates(locale: Locale) {
  if (locale === "fr") {
    return taxDatesLimites2026;
  }

  return taxDatesLimites2026.map((item, index) => ({
    ...item,
    ...enDates[index],
  }));
}

function getLocalizedPenalties(locale: Locale) {
  if (locale === "fr") {
    return taxPenalites2026;
  }

  return taxPenalites2026.map((item, index) => ({
    ...item,
    ...enPenalties[index],
  }));
}

function getLocalizedCalendar(locale: Locale) {
  if (locale === "fr") {
    return taxCalendrier2026;
  }

  return taxCalendrier2026.map((item, index) => ({
    ...item,
    ...enCalendar[index],
  }));
}

export default function LocalizedTaxDeadlinesPage({ locale }: { locale: Locale }) {
  const dictionary = getStaticSubguideDictionary(locale, "taxesDeadlines");
  const homePath = getRoutePath(locale, "home");
  const questionnairePath = getRoutePath(locale, "questionnaire");
  const taxHubPath = getRoutePath(locale, "taxes");
  const datesLimites = getLocalizedDates(locale);
  const penalites = getLocalizedPenalties(locale);
  const calendrier = getLocalizedCalendar(locale);
  const penaltyLabels =
    locale === "fr"
      ? { base: "Penalite initiale", monthly: "Penalite mensuelle", repeat: "Recidive", interest: "Interets" }
      : { base: "Base", monthly: "Monthly", repeat: "Repeat filing", interest: "Interest" };

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
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
            {dictionary.eyebrow}
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            {dictionary.title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-stone-300">{dictionary.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-10">
        <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
          {dictionary.tableTitle}
        </h2>
        <div className="mb-10 overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                {dictionary.tableHeaders.map((header) => (
                  <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.tableHeaders[0] ? "left" : "center", fontWeight: 700 }}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {datesLimites.map((row, index) => (
                <tr key={`${row.situation}-${index}`} style={{ borderBottom: index < datesLimites.length - 1 ? "1px solid #F0EBE0" : "none", background: row.highlight ? "#FFFBEB" : "white" }}>
                  <td style={{ padding: "12px 14px", fontWeight: row.highlight ? 700 : 500, color: "#1C1C1E" }}>{row.situation}</td>
                  <td style={{ padding: "12px 14px", textAlign: "center", fontWeight: 700, color: row.highlight ? "#B45309" : "#44403C" }}>{row.federal}</td>
                  <td style={{ padding: "12px 14px", textAlign: "center", fontWeight: 700, color: row.highlight ? "#B45309" : "#44403C" }}>{row.provincial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {dictionary.cardsLabel}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {penalites.map((penalite) => (
              <div key={penalite.organisme} style={{ background: penalite.couleur, border: `1px solid ${penalite.couleur}`, borderRadius: "20px", padding: "1.25rem" }}>
                <div style={{ fontWeight: 800, fontSize: "15px", color: penalite.couleurTexte, marginBottom: "12px" }}>{penalite.organisme}</div>
                <ul className="flex list-none flex-col gap-2 p-0">
                  <li className="text-sm leading-7" style={{ color: penalite.couleurTexte }}>
                    <strong>{penaltyLabels.base}:</strong> {penalite.penaliteBase}
                  </li>
                  <li className="text-sm leading-7" style={{ color: penalite.couleurTexte }}>
                    <strong>{penaltyLabels.monthly}:</strong> {penalite.penaliteMensuelle}
                  </li>
                  <li className="text-sm leading-7" style={{ color: penalite.couleurTexte }}>
                    <strong>{penaltyLabels.repeat}:</strong> {penalite.recidive}
                  </li>
                  <li className="text-sm leading-7" style={{ color: penalite.couleurTexte }}>
                    <strong>{penaltyLabels.interest}:</strong> {penalite.interets}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {dictionary.timelineLabel}
          </h2>
          <div className="flex flex-col gap-3">
            {calendrier.map((item, index) => (
              <div key={`${item.date}-${index}`} className="flex gap-4 rounded-2xl border bg-white p-4" style={{ borderColor: item.urgent ? "#FCD34D" : "#EDE9E0" }}>
                <div className="rounded-xl border px-3 py-1 text-xs font-bold" style={{ whiteSpace: "nowrap", background: item.urgent ? "#FEF3C7" : PARCH, borderColor: item.urgent ? "#FCD34D" : "#EDE9E0", color: item.urgent ? "#B45309" : "#78716C" }}>
                  {item.date}
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-stone-900">{item.evenement}</div>
                  <p className="m-0 text-sm leading-7 text-stone-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {dictionary.faqsTitle}
          </h2>
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
            {dictionary.ctaTitle}
          </h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">{dictionary.ctaText}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={questionnairePath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {dictionary.ctaLabel}
            </Link>
            <Link href={taxHubPath} className="inline-block rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Retour au thème impôts" : "Back to tax topic"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
