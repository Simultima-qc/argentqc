import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import TaxSavingsCalculatorClient from "./TaxSavingsCalculatorClient";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";
const GREEN = "#10B981";

export const metadata: Metadata = {
  title: "Calculateur impot Quebec 2026 : economie REER et CELI | ArgentQC.ca",
  description:
    "Calculez votre economie d'impot REER au Quebec en 2026 avec les paliers federal et provincial. Comparez REER et CELI selon votre revenu.",
  keywords: [
    "calculateur impot quebec 2026",
    "calculateur REER Quebec",
    "economie impot REER",
    "REER ou CELI Quebec",
    "paliers imposition Quebec 2026",
  ],
  alternates: { canonical: "https://argentqc.ca/impots/calculateur-economies-fiscales" },
  openGraph: {
    title: "Calculateur impot Quebec 2026 : economie REER et CELI",
    description:
      "Un simulateur Quebec qui applique les paliers federal et provincial 2026 pour estimer l'economie fiscale reelle d'une cotisation REER.",
    url: "https://argentqc.ca/impots/calculateur-economies-fiscales",
    siteName: "ArgentQC.ca",
    locale: "fr_CA",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Comment le calculateur estime-t-il l'economie REER?",
    answer:
      "Il calcule l'impot federal et l'impot du Quebec sur le revenu imposable avant cotisation, puis refait le calcul apres la cotisation REER deductible. La difference donne l'economie estimee.",
  },
  {
    question: "Le CELI donne-t-il une economie d'impot immediate?",
    answer:
      "Non. Une cotisation CELI ne reduit pas le revenu imposable. Son avantage vient plutot des retraits admissibles non imposables et de la flexibilite.",
  },
  {
    question: "Est-ce un calcul exact de declaration d'impot?",
    answer:
      "Non. Le simulateur isole les paliers d'impot federal et Quebec pour estimer l'effet d'une deduction REER. Les credits, prestations, cotisations sociales et situations particulieres peuvent modifier le resultat.",
  },
  {
    question: "Pourquoi le federal est-il different au Quebec?",
    answer:
      "Les residents du Quebec beneficient d'un abattement federal de 16,5 %. Le simulateur applique donc les taux federaux 2026 apres cet abattement.",
  },
];

const combinedBrackets = [
  { range: "0 $ a 54 345 $", federal: "11,69 %", quebec: "14,00 %", combined: "25,69 %" },
  { range: "54 345 $ a 58 523 $", federal: "11,69 %", quebec: "19,00 %", combined: "30,69 %" },
  { range: "58 523 $ a 108 680 $", federal: "17,12 %", quebec: "19,00 %", combined: "36,12 %" },
  { range: "108 680 $ a 117 045 $", federal: "17,12 %", quebec: "24,00 %", combined: "41,12 %" },
  { range: "117 045 $ a 132 245 $", federal: "21,71 %", quebec: "24,00 %", combined: "45,71 %" },
  { range: "132 245 $ a 181 440 $", federal: "21,71 %", quebec: "25,75 %", combined: "47,46 %" },
  { range: "181 440 $ a 258 482 $", federal: "24,22 %", quebec: "25,75 %", combined: "49,97 %" },
  { range: "258 482 $ et plus", federal: "27,56 %", quebec: "25,75 %", combined: "53,31 %" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calculateur impot Quebec 2026",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CAD",
  },
};

export default function TaxSavingsCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: PARCH }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />

        <section className="px-5 py-12 text-white sm:py-16" style={{ background: DARK }}>
          <div className="mx-auto max-w-5xl">
            <nav className="mb-5 text-xs text-slate-400">
              <Link href="/fr" className="text-slate-400 no-underline">
                Accueil
              </Link>
              <span aria-hidden="true"> &gt; </span>
              <Link href="/fr/impots" className="text-slate-400 no-underline">
                Impots
              </Link>
              <span aria-hidden="true"> &gt; </span>
              <span className="text-slate-300">Calculateur economies fiscales</span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div>
                <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
                  Calculateur impot Quebec 2026
                </p>
                <h1
                  className="mb-5 text-[clamp(2.1rem,6vw,4.4rem)] font-black leading-[1.02]"
                  style={{ color: "#F0EBE0", fontFamily: "var(--font-playfair)" }}
                >
                  Economie fiscale REER reelle, pas juste un taux moyen.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300">
                  Entrez votre revenu et votre cotisation pour voir combien une deduction REER peut vraiment reduire
                  votre impot 2026 au Quebec, avec les paliers federal et provincial.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#calculateur"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-sm font-black text-slate-950 no-underline"
                    style={{ background: GOLD }}
                  >
                    Calculer mon economie
                  </a>
                  <Link
                    href="/retraite/reer-vs-celi"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-white no-underline"
                  >
                    Comparer REER et CELI
                  </Link>
                </div>
              </div>

              <aside className="border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.12em]" style={{ color: GREEN }}>
                  Pourquoi c&apos;est different
                </p>
                <p className="mt-4 text-4xl font-black leading-none text-white">8 taux</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Au Quebec, les seuils federal et provincial ne tombent pas aux memes endroits. Un calcul par paliers
                  montre l&apos;economie reelle sur chaque dollar cotise.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-10">
          <TaxSavingsCalculatorClient />

          <section className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em]" style={{ color: GREEN }}>
                Methode
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">Ce que le simulateur calcule</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Une cotisation REER reduit le revenu imposable. Le calculateur applique les paliers 2026 au revenu
                complet, puis au revenu reduit par la cotisation. Cette difference est plus precise qu&apos;un taux moyen
                unique, surtout pres d&apos;un changement de palier.
              </p>
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                <strong>Important :</strong> cet outil ne remplace pas un logiciel d&apos;impot. Il ne calcule pas les
                credits personnels, prestations, deductions complexes, cotisations RRQ/RQAP/AE, RAMQ, ni les effets sur
                les allocations.
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-black text-slate-950">Paliers combines Quebec 2026</h2>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-sm">
                  <thead>
                    <tr style={{ background: DARK, color: "#F0EBE0" }}>
                      <th className="p-3 text-left font-bold">Revenu imposable</th>
                      <th className="p-3 text-left font-bold">Federal apres abattement</th>
                      <th className="p-3 text-left font-bold">Quebec</th>
                      <th className="p-3 text-left font-bold">Combine</th>
                    </tr>
                  </thead>
                  <tbody>
                    {combinedBrackets.map((row, index) => (
                      <tr key={row.range} className={index < combinedBrackets.length - 1 ? "border-b border-slate-100" : ""}>
                        <td className="p-3 font-bold text-slate-900">{row.range}</td>
                        <td className="p-3 text-slate-600">{row.federal}</td>
                        <td className="p-3 text-slate-600">{row.quebec}</td>
                        <td className="p-3 font-extrabold text-emerald-700">{row.combined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-slate-950">Sources et limites</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-4">
                <h3 className="text-sm font-extrabold text-slate-950">Federal 2026</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Taux et seuils federaux 2026 publies par l&apos;Agence du revenu du Canada.
                </p>
                <a
                  href="https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/retenues-paie/t4127-formules-calcul-retenues-paie/t4127-jan/t4127-jan-formules-calcul-informatise-retenues-paie.html"
                  className="mt-3 inline-block text-sm font-extrabold text-blue-700 no-underline"
                >
                  Source ARC
                </a>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <h3 className="text-sm font-extrabold text-slate-950">Quebec 2026</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Taux du Quebec 2026 publies par Revenu Quebec, avec seuils indexes.
                </p>
                <a
                  href="https://www.revenuquebec.ca/fr/entreprises/retenues-a-la-source-et-cotisations-de-lemployeur/employeur-principaux-changements-2026/"
                  className="mt-3 inline-block text-sm font-extrabold text-blue-700 no-underline"
                >
                  Source Revenu Quebec
                </a>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <h3 className="text-sm font-extrabold text-slate-950">Abattement federal</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Les taux federaux affiches sont reduits de 16,5 % pour les residents du Quebec.
                </p>
                <a
                  href="https://www.canada.ca/fr/ministere-finances/services/publications/depenses-fiscales/2026/partie-4.html"
                  className="mt-3 inline-block text-sm font-extrabold text-blue-700 no-underline"
                >
                  Source Finances Canada
                </a>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-black text-slate-950">Questions frequentes</h2>
            <div className="mt-5 grid gap-3">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-extrabold text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <SiteFooter
          legalText="Outil informatif. Les resultats sont des estimations basees sur les paliers 2026 et ne remplacent pas un avis fiscal."
          contentClassName="mx-auto max-w-5xl text-center"
          style={{ background: DARK }}
          brandStyle={{ color: GOLD, marginBottom: "4px" }}
          legalStyle={{ color: "rgb(100 116 139)" }}
          linkStyle={{ color: "rgb(148 163 184)" }}
          contactLinkStyle={{ marginTop: "8px" }}
        />
      </main>
    </>
  );
}
