import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackingLink from "@/components/TrackingLink";
import {
  cpp2026,
  rrqContributionExamples2026,
  rrqContributions2026,
  rrqMontantsAge2026,
  rrqOfficialUrls,
} from "@/data/finance-2026";
import { getRetirementRrqDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

function formatCurrency(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number, locale: Locale, digits = 1): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "percent",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

const cardStyles = [
  { emoji: "⏰", color: "#FEF3C7", border: "#FCD34D", textColor: "#78350F" },
  { emoji: "✅", color: "#ECFDF5", border: "#34D399", textColor: "#065F46" },
  { emoji: "📈", color: "#EDE9FE", border: "#8B5CF6", textColor: "#5B21B6" },
  { emoji: "🗓️", color: "#E0F2FE", border: "#38BDF8", textColor: "#075985" },
];

export default function LocalizedRetirementRrqPage({ locale }: { locale: Locale }) {
  const dictionary = getRetirementRrqDictionary(locale);
  const fr = locale === "fr";
  const homePath = getRoutePath(locale, "home");
  const retirementHubPath = getRoutePath(locale, "retirement");
  const questionnairePath = getRoutePath(locale, "questionnaire");
  const articlePath = "/blog/rrq-rente-retraite-2026";

  const ageCards = rrqMontantsAge2026.map((amount, index) => {
    const adjustment = amount.age === 60
      ? fr ? "−30 % à −36 % vs 65 ans" : "−30% to −36% vs age 65"
      : amount.age === 65
        ? fr ? "Montant de référence" : "Reference amount"
        : `+${formatPercent(amount.adjustmentMaximum, locale)} ${fr ? "vs 65 ans" : "vs age 65"}`;
    const detail = amount.age === 60
      ? fr
        ? "La réduction varie de 0,5 % à 0,6 % par mois selon le dossier de cotisation et le montant de rente."
        : "The reduction varies from 0.5% to 0.6% per month based on the contribution record and pension amount."
      : amount.age === 65
        ? fr
          ? "Aucune réduction ni bonification liée à l'âge."
          : "No age-based reduction or enhancement."
        : fr
          ? "La rente augmente de 0,7 % par mois après 65 ans et cesse d'augmenter à 72 ans."
          : "The pension increases by 0.7% per month after age 65 and stops increasing at age 72.";

    return {
      ...amount,
      ...cardStyles[index],
      ageLabel: fr ? `${amount.age} ans` : `age ${amount.age}`,
      averageLabel: `${formatCurrency(amount.averageMonthly, locale)}/${fr ? "mois" : "month"}`,
      maximumLabel: `${formatCurrency(amount.maximumMonthly, locale)}/${fr ? "mois" : "month"}`,
      adjustment,
      detail,
    };
  });

  const comparisonRows = fr
    ? [
        { aspect: "Qui y cotise?", rrq: "Travailleurs assujettis au Québec", rpc: "Travailleurs au Canada hors Québec" },
        { aspect: "Taux 2026 sous le MGA", rrq: `${formatPercent(rrqContributions2026.employeeEmployerRate, locale, 2)} par salarié et employeur`, rpc: `${formatPercent(cpp2026.employeeEmployerRate, locale, 2)} par salarié et employeur` },
        { aspect: "Deuxième tranche 2026", rrq: `${formatPercent(rrqContributions2026.secondAdditionalRate, locale, 0)} de ${formatCurrency(rrqContributions2026.maximumPensionableEarnings, locale)} à ${formatCurrency(rrqContributions2026.additionalMaximumPensionableEarnings, locale)}`, rpc: `${formatPercent(cpp2026.secondAdditionalRate, locale, 0)} sur la même tranche, hors Québec` },
        { aspect: "Âge de début", rrq: "60 à 72 ans", rpc: "60 à 70 ans" },
        { aspect: "Maximum mensuel à 65 ans", rrq: formatCurrency(1_507.65, locale), rpc: formatCurrency(cpp2026.maximumMonthlyAt65, locale) },
      ]
    : [
        { aspect: "Who contributes?", rrq: "Workers covered in Quebec", rpc: "Workers in Canada outside Quebec" },
        { aspect: "2026 rate below the YMPE", rrq: `${formatPercent(rrqContributions2026.employeeEmployerRate, locale, 2)} each for employee and employer`, rpc: `${formatPercent(cpp2026.employeeEmployerRate, locale, 2)} each for employee and employer` },
        { aspect: "2026 second earnings band", rrq: `${formatPercent(rrqContributions2026.secondAdditionalRate, locale, 0)} from ${formatCurrency(rrqContributions2026.maximumPensionableEarnings, locale)} to ${formatCurrency(rrqContributions2026.additionalMaximumPensionableEarnings, locale)}`, rpc: `${formatPercent(cpp2026.secondAdditionalRate, locale, 0)} on the same band, outside Quebec` },
        { aspect: "Start age", rrq: "Age 60 to 72", rpc: "Age 60 to 70" },
        { aspect: "Maximum monthly amount at 65", rrq: formatCurrency(1_507.65, locale), rpc: formatCurrency(cpp2026.maximumMonthlyAt65, locale) },
      ];

  const faqs = fr
    ? [
        {
          q: "Comment est calculée ma rente RRQ?",
          r: "Elle dépend des revenus de travail inscrits à votre dossier, de la période cotisée, des exclusions applicables et de l'âge de demande. Jusqu'à 15 % des mois aux revenus les plus faibles peuvent être exclus si cela vous avantage. Un salaire récent ne suffit pas pour estimer la rente.",
        },
        {
          q: "Les travailleurs du Québec cotisent-ils aussi au RPC2?",
          r: "Une personne qui travaille seulement au Québec cotise au RRQ, y compris à sa deuxième cotisation supplémentaire lorsque ses gains dépassent le MGA. Elle ne cotise pas au RPC2 pour ce travail.",
        },
        {
          q: "La rente RRQ est-elle imposable?",
          r: "Oui. La rente est imposable et la retenue d'impôt ne se fait pas automatiquement; vous pouvez demander une retenue à la source.",
        },
        {
          q: "Quel est le meilleur âge pour commencer?",
          r: "Il n'existe pas d'âge universellement optimal. Les besoins de revenu, la santé, les autres revenus et la protection recherchée contre le risque de longévité doivent être considérés ensemble.",
        },
      ]
    : [
        {
          q: "How is my QPP pension calculated?",
          r: "It depends on the employment earnings recorded in your file, contribution period, applicable exclusions and claiming age. Up to 15% of the lowest-earning months may be excluded when advantageous. A recent salary alone cannot determine the pension.",
        },
        {
          q: "Do Quebec workers also contribute to CPP2?",
          r: "Someone who works only in Quebec contributes to the QPP, including its second additional contribution when earnings exceed the YMPE. That work is not subject to CPP2.",
        },
        {
          q: "Is the QPP pension taxable?",
          r: "Yes. QPP pension income is taxable, and income tax is not withheld automatically; source deductions can be requested.",
        },
        {
          q: "What is the best age to start?",
          r: "There is no universally optimal age. Income needs, health, other income sources and the desired protection against longevity risk should be considered together.",
        },
      ];

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>ArgentQC.ca</Link>
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
        <section className="mb-10 rounded-3xl border bg-white p-5 shadow-sm" style={{ borderColor: "#EDE9E0" }}>
          <h2 className="mb-3 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
            {fr ? "Repères officiels du RRQ en 2026" : "Official 2026 QPP reference points"}
          </h2>
          <p className="mb-4 text-sm leading-7 text-stone-700">
            {fr
              ? `Le MGA est de ${formatCurrency(rrqContributions2026.maximumPensionableEarnings, locale)} et le MSGA de ${formatCurrency(rrqContributions2026.additionalMaximumPensionableEarnings, locale)}. La rente peut commencer de 60 à 72 ans.`
              : `The YMPE is ${formatCurrency(rrqContributions2026.maximumPensionableEarnings, locale)} and the YAMPE is ${formatCurrency(rrqContributions2026.additionalMaximumPensionableEarnings, locale)}. The pension may start from age 60 to 72.`}
          </p>
          <p className="m-0 text-sm leading-7 text-stone-600">
            {fr
              ? "Les moyennes et maximums ci-dessous sont des repères officiels 2026, pas une estimation personnelle. Votre montant dépend de votre dossier."
              : "The averages and maximums below are official 2026 reference figures, not a personal estimate. Your amount depends on your record."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.ageCardsTitle}</h2>
          <div className="flex flex-col gap-4">
            {ageCards.map((card) => (
              <div key={card.age} style={{ background: card.color, border: `1.5px solid ${card.border}`, borderRadius: "20px", padding: "1.25rem" }}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3"><span className="text-2xl">{card.emoji}</span><h3 className="m-0 text-base font-extrabold" style={{ color: card.textColor }}>{dictionary.ageStartLabel} {card.ageLabel}</h3></div>
                  <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ color: card.textColor, background: "rgba(255,255,255,0.55)" }}>{card.adjustment}</span>
                </div>
                <div className="mb-2 grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.6)" }}><div className="mb-1 text-[11px]" style={{ color: card.textColor, opacity: 0.75 }}>{dictionary.averageLabel}</div><div className="text-lg font-extrabold" style={{ color: card.textColor }}>{card.averageLabel}</div></div>
                  <div className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.6)" }}><div className="mb-1 text-[11px]" style={{ color: card.textColor, opacity: 0.75 }}>{dictionary.maximumLabel}</div><div className="text-lg font-extrabold" style={{ color: card.textColor }}>{card.maximumLabel}</div></div>
                </div>
                <p className="m-0 text-sm" style={{ color: card.textColor, opacity: 0.85 }}>{card.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.comparisonTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead><tr style={{ background: DARK, color: "#F0EBE0" }}>{dictionary.comparisonHeaders.map((header) => <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.comparisonHeaders[0] ? "left" : "center", fontWeight: 700 }}>{header}</th>)}</tr></thead>
              <tbody>{comparisonRows.map((row, index) => <tr key={row.aspect} style={{ borderBottom: index < comparisonRows.length - 1 ? "1px solid #F0EBE0" : "none" }}><td style={{ padding: "12px 14px", fontWeight: 600, color: "#44403C" }}>{row.aspect}</td><td style={{ padding: "12px 14px", textAlign: "center", color: "#1C1C1E" }}>{row.rrq}</td><td style={{ padding: "12px 14px", textAlign: "center", color: "#1C1C1E" }}>{row.rpc}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.contributionTitle}</h2>
          <p className="mb-4 text-sm leading-7 text-stone-600">
            {fr
              ? `Le taux salarié est de ${formatPercent(rrqContributions2026.employeeEmployerRate, locale, 2)} entre l'exemption de ${formatCurrency(rrqContributions2026.generalExemption, locale)} et le MGA, puis de ${formatPercent(rrqContributions2026.secondAdditionalRate, locale, 0)} entre le MGA et le MSGA. L'employeur verse la même somme.`
              : `The employee rate is ${formatPercent(rrqContributions2026.employeeEmployerRate, locale, 2)} between the ${formatCurrency(rrqContributions2026.generalExemption, locale)} exemption and the YMPE, then ${formatPercent(rrqContributions2026.secondAdditionalRate, locale, 0)} between the YMPE and YAMPE. The employer pays the same amount.`}
          </p>
          <div className="flex flex-col gap-3">
            {rrqContributionExamples2026.map((row) => (
              <div key={row.salary} className="rounded-2xl border bg-white p-4" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center justify-between gap-3"><span className="text-sm font-bold text-stone-900">{dictionary.salaryLabel} {formatCurrency(row.salary, locale)}</span><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">{fr ? "Cotisation, pas estimation de rente" : "Contribution, not a pension estimate"}</span></div>
                <div className="text-sm text-stone-600">{dictionary.employeeContributionLabel}: <strong>{formatCurrency(row.employee, locale)}/{fr ? "an" : "year"}</strong> · {dictionary.totalContributionLabel}: <strong>{formatCurrency(row.employeeAndEmployer, locale)}/{fr ? "an" : "year"}</strong></div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-6 text-stone-500">{fr ? "Exemples reproductibles à partir des taux 2026; ils ne permettent pas de déduire une rente." : "Examples reproduced from the 2026 rates; they cannot be used to infer a pension amount."}</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.faqsTitle}</h2>
          <div className="flex flex-col gap-3">{faqs.map((faq) => <div key={faq.q} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}><h3 className="mb-2 text-sm font-bold text-stone-900">{faq.q}</h3><p className="m-0 text-sm leading-7 text-stone-600">{faq.r}</p></div>)}</div>
        </section>

        <section className="mb-10 rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
          <h2 className="mb-3 text-xl font-extrabold text-stone-900">{fr ? "Vérifier auprès de la source officielle" : "Check the official source"}</h2>
          <p className="mb-4 text-sm leading-7 text-stone-600">{fr ? "Consultez votre relevé de participation dans Mon dossier pour une estimation liée à votre historique réel." : "Use your statement of participation in My Account for an estimate based on your actual record."}</p>
          <div className="flex flex-wrap gap-3">
            <TrackedExternalLink href={rrqOfficialUrls.pensionCalculation} target="_blank" rel="noopener noreferrer" tracking={{ cta_name: "rrq_official_calculation", cta_location: "rrq_sources", destination: rrqOfficialUrls.pensionCalculation }} className="font-bold text-blue-700 underline">{fr ? "Calcul officiel de la rente" : "Official pension calculation"}</TrackedExternalLink>
            <Link href={articlePath} className="font-bold text-blue-700 underline">{fr ? "Lire l'article RRQ 2026" : "Read the 2026 QPP article (French)"}</Link>
          </div>
        </section>

        <section className="rounded-[28px] px-6 py-7 text-center" style={{ background: DARK }}>
          <h2 className="mb-3 text-2xl font-extrabold text-stone-100" style={{ fontFamily: "var(--font-playfair)" }}>{fr ? "Explorer les programmes liés à votre situation" : "Explore programs related to your situation"}</h2>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-stone-300">{fr ? "Le questionnaire propose des pistes à vérifier. Il ne calcule pas votre rente RRQ et ne confirme pas votre admissibilité." : "The questionnaire suggests leads to verify. It does not calculate your QPP pension or confirm eligibility."}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TrackingLink href={questionnairePath} tracking={{ cta_name: "rrq_hero", cta_location: "final", destination: questionnairePath }} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>{fr ? "Voir mes pistes de programmes" : "See my program leads"}</TrackingLink>
            <Link href={retirementHubPath} className="inline-block rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>{fr ? "Retour au thème retraite" : "Back to retirement topic"}</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
