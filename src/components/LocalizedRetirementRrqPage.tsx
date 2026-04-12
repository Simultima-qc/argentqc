import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  rrqCotisations2026,
  rrqMontantsAge2026,
  rrqVsRpc2026,
} from "@/data/finance-2026";
import { getRetirementRrqDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const enFaqs = [
  {
    q: "How is my QPP pension calculated?",
    r: "The QPP is based on pensionable earnings across your career, with low-income years partially excluded and earnings adjusted over time. Longer contribution history and stronger earnings generally lead to a higher pension.",
  },
  {
    q: "Do Quebec workers also contribute to the CPP?",
    r: "Most Quebec workers contribute to the QPP rather than the core CPP. Quebec is still affected by federal pension coordination rules, so the comparison remains useful when evaluating Canada-wide retirement planning.",
  },
  {
    q: "Is the QPP pension taxable?",
    r: "Yes. QPP pension income is taxable and should be planned together with OAS, RRSP/RRIF withdrawals, employment income, and other retirement cash flows.",
  },
  {
    q: "Is it better to start at 60, 65, or 70?",
    r: "That depends mainly on life expectancy, cash-flow needs, and whether delaying the pension would materially reduce other planning risks. In good health, delaying can often be valuable.",
  },
];

const enMontantsAge = rrqMontantsAge2026.map((item) => ({
  ...item,
  age:
    item.age === "60 ans"
      ? "age 60"
      : item.age === "65 ans"
        ? "age 65"
        : "age 70",
  montantMoyen:
    item.age === "60 ans"
      ? "~$490/month"
      : item.age === "65 ans"
        ? "~$766/month"
        : "~$1,087/month",
  montantMax:
    item.age === "60 ans"
      ? "~$574/month"
      : item.age === "65 ans"
        ? "~$897/month"
        : "~$1,273/month",
  reduction:
    item.age === "60 ans"
      ? "-36% vs age 65"
      : item.age === "65 ans"
        ? "Reference amount"
        : "+42% vs age 65",
  reductionDetail:
    item.age === "60 ans"
      ? "Permanent reduction from claiming early."
      : item.age === "65 ans"
        ? "Standard claiming point with no reduction or bonus."
        : "Permanent enhancement from waiting longer.",
}));

const enComparison = rrqVsRpc2026.map((row) => ({
  aspect:
    row.aspect === "Qui y cotise ?"
      ? "Who contributes?"
      : row.aspect === "Taux de cotisation 2026"
        ? "2026 contribution rate"
        : row.aspect === "Age de debut"
          ? "Start age"
          : row.aspect === "Montant maximum 2026"
            ? "Maximum 2026 amount"
            : row.aspect === "Prestation de deces"
              ? "Death benefit"
              : "Survivor pension",
  rrq:
    row.aspect === "Qui y cotise ?"
      ? "Workers in Quebec"
      : row.aspect === "Taux de cotisation 2026"
        ? "5.9% employee + 5.9% employer"
        : row.rrq,
  rpc:
    row.aspect === "Qui y cotise ?"
      ? "Workers outside Quebec"
      : row.aspect === "Taux de cotisation 2026"
        ? "CPP rates outside Quebec"
        : row.rpc,
}));

const enCotisations = rrqCotisations2026.map((row) => ({
  ...row,
  salaire: row.salaire,
  cotEmpl: row.cotEmpl,
  cotTot: row.cotTot,
  renteEst:
    row.salaire === "30 000 $"
      ? "~$550/month at age 65"
      : row.salaire === "50 000 $"
        ? "~$700/month at age 65"
        : "~$897/month at age 65 (max)",
}));

export default function LocalizedRetirementRrqPage({ locale }: { locale: Locale }) {
  const dictionary = getRetirementRrqDictionary(locale);
  const ageCards = locale === "fr" ? rrqMontantsAge2026 : enMontantsAge;
  const comparisonRows = locale === "fr" ? rrqVsRpc2026 : enComparison;
  const contributionRows = locale === "fr" ? rrqCotisations2026 : enCotisations;
  const faqs = locale === "fr"
    ? [
        {
          q: "Comment est calculee ma rente RRQ ?",
          r: "La RRQ se base sur vos revenus cotisables au fil de la carriere, avec certains ajustements pour les annees plus faibles. Plus la carriere est complete et les revenus eleves, plus la rente a tendance a augmenter.",
        },
        {
          q: "Les Quebecois cotisent-ils aussi au RPC ?",
          r: "Dans la pratique, les travailleurs du Quebec sont d'abord dans le cadre RRQ. Mais la comparaison avec le RPC reste importante pour comprendre les differences de regime a l'echelle canadienne.",
        },
        {
          q: "La rente RRQ est-elle imposable ?",
          r: "Oui. Elle doit etre planifiee avec la SV, vos retraits REER/FERR et les autres revenus de retraite.",
        },
        {
          q: "Vaut-il mieux commencer a 60, 65 ou 70 ans ?",
          r: "Cela depend surtout de l'esperance de vie, du besoin de revenu immediat et du reste de votre strategie retraite. Reporter peut etre tres pertinent si votre situation le permet.",
        },
      ]
    : enFaqs;
  const homePath = getRoutePath(locale, "home");
  const retirementHubPath = getRoutePath(locale, "retirement");
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
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.ageCardsTitle}</h2>
          <div className="flex flex-col gap-4">
            {ageCards.map((card) => (
              <div key={card.age} style={{ background: card.color, border: `1.5px solid ${card.border}`, borderRadius: "20px", padding: "1.25rem" }}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.emoji}</span>
                    <h3 className="m-0 text-base font-extrabold" style={{ color: card.textColor }}>
                      {dictionary.ageStartLabel} {card.age}
                    </h3>
                  </div>
                  <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ color: card.textColor, background: "rgba(255,255,255,0.55)" }}>{card.reduction}</span>
                </div>
                <div className="mb-2 grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.6)" }}>
                    <div className="mb-1 text-[11px]" style={{ color: card.textColor, opacity: 0.75 }}>{dictionary.averageLabel}</div>
                    <div className="text-lg font-extrabold" style={{ color: card.textColor }}>{card.montantMoyen}</div>
                  </div>
                  <div className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.6)" }}>
                    <div className="mb-1 text-[11px]" style={{ color: card.textColor, opacity: 0.75 }}>{dictionary.maximumLabel}</div>
                    <div className="text-lg font-extrabold" style={{ color: card.textColor }}>{card.montantMax}</div>
                  </div>
                </div>
                <p className="m-0 text-sm" style={{ color: card.textColor, opacity: 0.85 }}>{card.reductionDetail}</p>
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
                {comparisonRows.map((row, index) => (
                  <tr key={row.aspect} style={{ borderBottom: index < comparisonRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 600, color: "#44403C" }}>{row.aspect}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#1C1C1E" }}>{row.rrq}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#1C1C1E" }}>{row.rpc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.contributionTitle}</h2>
          <div className="flex flex-col gap-3">
            {contributionRows.map((row) => (
              <div key={row.salaire} className="rounded-2xl border bg-white p-4" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-stone-900">{dictionary.salaryLabel} {row.salaire}</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">{row.renteEst}</span>
                </div>
                <div className="text-sm text-stone-600">
                  {dictionary.employeeContributionLabel}: <strong>{row.cotEmpl}/an</strong> · {dictionary.totalContributionLabel}: <strong>{row.cotTot}/an</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.faqsTitle}</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <h3 className="mb-2 text-sm font-bold text-stone-900">{faq.q}</h3>
                <p className="m-0 text-sm leading-7 text-stone-600">{faq.r}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] px-6 py-7 text-center" style={{ background: DARK }}>
          <h2 className="mb-3 text-2xl font-extrabold text-stone-100" style={{ fontFamily: "var(--font-playfair)" }}>
            {locale === "fr" ? "Relier la RRQ a votre situation globale" : "Place QPP inside your broader situation"}
          </h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">
            {locale === "fr"
              ? "La rente publique n'est qu'un pilier. Le questionnaire aide a voir les autres credits, aides ou leviers selon votre profil."
              : "A public pension is only one pillar. The questionnaire helps surface other credits, benefits, and planning levers that may apply to you."}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={questionnairePath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {locale === "fr" ? "Trouver mes aides" : "Find my programs"}
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
