import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import TrackingLink from "@/components/TrackingLink";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "REER ou CELI : lequel choisir au Québec?",
  description:
    "Comparez REER et CELI au Québec selon votre revenu, votre impôt, vos projets, votre retraite et votre besoin de flexibilité.",
  alternates: { canonical: "https://argentqc.ca/retraite/reer-vs-celi" },
  openGraph: {
    title: "REER ou CELI : lequel choisir au Québec?",
    description:
      "Un guide clair pour choisir le bon ordre entre REER et CELI selon votre situation au Québec.",
    url: "https://argentqc.ca/retraite/reer-vs-celi",
    siteName: "ArgentQC.ca",
    locale: "fr_CA",
    type: "article",
  },
};

const quickAnswers = [
  {
    title: "REER",
    text: "Souvent intéressant si votre revenu est élevé ou si vous voulez réduire votre impôt maintenant.",
  },
  {
    title: "CELI",
    text: "Souvent intéressant si vous voulez de la flexibilité ou si votre revenu est plus faible.",
  },
  {
    title: "Les deux",
    text: "Idéalement complémentaires. La vraie décision est souvent l'ordre de priorité.",
  },
];

const comparisonRows = [
  { item: "Déduction fiscale", reer: "Oui, la cotisation peut réduire le revenu imposable.", celi: "Non, il n'y a pas de déduction à la cotisation." },
  { item: "Impôt au retrait", reer: "Oui, les retraits sont généralement imposables.", celi: "Non, les retraits admissibles ne sont pas imposables." },
  { item: "Flexibilité", reer: "Moins flexible, surtout avant la retraite.", celi: "Très flexible pour retirer et recotiser plus tard selon les règles." },
  { item: "Retraite", reer: "Puissant si votre taux d'impôt baisse plus tard.", celi: "Utile pour créer un revenu futur non imposable." },
  { item: "Achat d'une maison / projets", reer: "Peut servir avec le RAP si les règles sont respectées.", celi: "Simple pour projets, fonds d'urgence et retraits sans impôt direct." },
  { item: "Impact potentiel sur prestations", reer: "Les retraits peuvent augmenter le revenu imposable futur.", celi: "Les retraits ne s'ajoutent généralement pas au revenu imposable." },
  { item: "Simplicité", reer: "Demande plus de planification fiscale.", celi: "Plus facile à comprendre et à gérer pour plusieurs ménages." },
];

const reerCases = [
  "Votre revenu imposable est élevé cette année.",
  "La cotisation peut réduire votre impôt aujourd'hui.",
  "Votre taux d'impôt à la retraite pourrait être plus bas.",
  "Vous avez la discipline de réinvestir le remboursement d'impôt.",
  "Vous planifiez un RAP et comprenez les règles de remboursement.",
];

const celiCases = [
  "Votre revenu est plus faible, variable ou en progression.",
  "Vous pourriez avoir besoin de retirer sans facture fiscale directe.",
  "Vous bâtissez un fonds d'urgence ou un projet à moyen terme.",
  "Vous voulez compléter la retraite avec des retraits non imposables.",
  "Vous voulez éviter que chaque retrait futur devienne du revenu imposable.",
];

const mistakes = [
  "Choisir le REER seulement pour le remboursement, puis dépenser ce remboursement.",
  "Ignorer le CELI parce qu'il ne donne pas de déduction immédiate.",
  "Retirer du REER trop facilement et perdre de l'espace de cotisation.",
  "Garder trop d'argent non investi dans des comptes à faible rendement.",
  "Croire qu'il faut absolument choisir seulement un des deux.",
];

const scenarios = [
  {
    title: "Jeune travailleur avec revenu modeste",
    text: "Le CELI est souvent prioritaire, parce qu'il garde la flexibilité pendant que le revenu augmente.",
    orientation: "Orientation simple : CELI d'abord, REER plus tard si le revenu grimpe.",
  },
  {
    title: "Professionnel avec revenu élevé",
    text: "Le REER peut devenir très pertinent si la déduction réduit un impôt élevé aujourd'hui.",
    orientation: "Orientation simple : REER souvent prioritaire, surtout si le remboursement est investi.",
  },
  {
    title: "Parent avec dépenses variables",
    text: "Le CELI peut protéger la marge de manoeuvre, puis le REER peut s'ajouter quand le budget le permet.",
    orientation: "Orientation simple : flexibilité d'abord, optimisation ensuite.",
  },
  {
    title: "Personne proche de la retraite",
    text: "L'arbitrage devient plus délicat, parce que les retraits imposables futurs peuvent créer de mauvais effets.",
    orientation: "Orientation simple : comparer les retraits futurs avant de cotiser automatiquement.",
  },
];

const guides = [
  { href: "/retraite", title: "Guide retraite", text: "Revenir à la vue d'ensemble REER, CELI, RRQ et CELIAPP." },
  { href: "/retraite/reer", title: "Guide REER", text: "Comprendre la déduction, les retraits et les erreurs fréquentes." },
  { href: "/retraite/celi", title: "Guide CELI", text: "Voir la flexibilité, les retraits et les usages retraite." },
  { href: "/retraite/celiapp", title: "Guide CELIAPP", text: "Comparer avec les objectifs de premier achat immobilier." },
];

const faqs = [
  {
    q: "Est-ce mieux de cotiser au REER ou au CELI?",
    r: "Cela dépend surtout du revenu actuel, du taux d'impôt futur prévu et du besoin de flexibilité. Au Québec, le REER est souvent plus fort à revenu élevé; le CELI est souvent plus simple et flexible.",
  },
  {
    q: "Est-ce que le REER est toujours avantageux?",
    r: "Non. Il peut être très avantageux dans plusieurs cas, mais il faut tenir compte de l'impôt au retrait et de l'usage du remboursement d'impôt.",
  },
  {
    q: "Pourquoi le CELI peut être meilleur qu'un REER?",
    r: "Le CELI peut être meilleur si votre revenu est plus faible, si vous voulez retirer sans impôt direct ou si vous voulez éviter d'augmenter votre revenu imposable à la retraite.",
  },
  {
    q: "Est-ce une bonne idée d'avoir les deux?",
    r: "Oui, souvent. Le REER et le CELI répondent à des besoins différents. La question importante est l'ordre et le montant à cotiser dans chaque compte.",
  },
  {
    q: "Que faire avec le remboursement d'impôt du REER?",
    r: "Dans plusieurs stratégies, le remboursement devrait être investi, versé au CELI, utilisé pour une dette coûteuse ou gardé pour un objectif clair. Le dépenser réduit beaucoup l'avantage du REER.",
  },
  {
    q: "Le CELI est-il utile pour la retraite?",
    r: "Oui. Le CELI peut fournir des retraits non imposables à la retraite et compléter le REER, la RRQ, la SV et les autres revenus.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.r },
  })),
};

function CtaButton({ location, name, className = "" }: { location: string; name: string; className?: string }) {
  return (
    <TrackingLink
      href="/questionnaire"
      tracking={{ cta_name: name, cta_location: location, destination: "/questionnaire" }}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 text-center text-sm font-extrabold text-slate-950 no-underline shadow-[0_18px_55px_rgba(245,200,66,0.28)] transition hover:bg-yellow-300 ${className}`}
    >
      Voir ma stratégie retraite
    </TrackingLink>
  );
}

export default function ReerVsCeliPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: PARCH }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section className="px-5 py-12 text-white sm:py-16" style={{ background: DARK }}>
          <div className="mx-auto max-w-4xl">
            <nav className="mb-4 text-xs text-slate-400">
              <Link href="/" className="text-slate-400 no-underline">Accueil</Link>
              <span aria-hidden="true"> &gt; </span>
              <Link href="/retraite" className="text-slate-400 no-underline">Retraite</Link>
              <span aria-hidden="true"> &gt; </span>
              <span className="text-slate-300">REER ou CELI</span>
            </nav>

            <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
                  Comparaison retraite Québec
                </p>
                <h1 className="mb-4 text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-[1.05]" style={{ color: "#F0EBE0", fontFamily: "var(--font-playfair)" }}>
                  REER ou CELI : lequel choisir pour garder plus d&apos;argent?
                </h1>
                <p className="mb-4 max-w-2xl text-base leading-7 text-slate-300">
                  Le bon choix dépend surtout du revenu imposable, du taux d&apos;impôt actuel, du taux prévu à la retraite,
                  des projets à court terme et du besoin de flexibilité.
                </p>
                <p className="mb-6 max-w-2xl rounded-2xl border border-yellow-300/25 bg-yellow-300/10 px-4 py-3 text-sm font-bold leading-6 text-yellow-100">
                  Un mauvais choix ne détruit pas votre retraite, mais un bon ordre de priorité peut vous faire garder plus d&apos;argent.
                </p>
                <CtaButton location="hero" name="reer_vs_celi_hero" className="w-full sm:w-auto" />
              </div>

              <aside className="border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
                  Réponse courte
                </p>
                <p className="mt-4 text-4xl font-black leading-none text-white">Ordre &gt; compte</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Le plus important n&apos;est pas de choisir un camp. C&apos;est de cotiser dans le bon compte, au bon moment, pour le bon objectif.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-10">
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Réponse rapide</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {quickAnswers.map((answer) => (
                <article key={answer.title} className="border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-extrabold text-slate-950">{answer.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{answer.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Tableau comparatif simple</h2>
            <div className="mt-5 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr style={{ background: DARK, color: "#F0EBE0" }}>
                    <th className="p-4 text-left font-bold">Critère</th>
                    <th className="p-4 text-left font-bold">REER</th>
                    <th className="p-4 text-left font-bold">CELI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.item} className={index < comparisonRows.length - 1 ? "border-b border-slate-100" : ""}>
                      <td className="p-4 font-bold text-slate-900">{row.item}</td>
                      <td className="p-4 leading-6 text-slate-600">{row.reer}</td>
                      <td className="p-4 leading-6 text-slate-600">{row.celi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-950">Quand le REER est souvent le meilleur choix</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {reerCases.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link href="/retraite/reer" className="mt-5 inline-block text-sm font-bold text-blue-700 no-underline">
                Lire le guide REER &gt;
              </Link>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-950">Quand le CELI est souvent le meilleur choix</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {celiCases.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link href="/retraite/celi" className="mt-5 inline-block text-sm font-bold text-blue-700 no-underline">
                Lire le guide CELI &gt;
              </Link>
            </article>
          </section>

          <section className="mb-12 bg-slate-950 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">Les erreurs fréquentes</h2>
            <div className="mt-6 grid gap-3">
              {mistakes.map((mistake) => (
                <div key={mistake} className="flex gap-3 border-t border-white/10 pt-4">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-yellow-400" aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-300">{mistake}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Scénarios concrets</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {scenarios.map((scenario) => (
                <article key={scenario.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-slate-950">{scenario.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.text}</p>
                  <p className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-900">
                    {scenario.orientation}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-[28px] border border-yellow-200 bg-yellow-50 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-950">La vraie réponse : l&apos;ordre de priorité</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
              La bonne question n&apos;est pas seulement &quot;REER ou CELI&quot;. C&apos;est combien cotiser, dans quel compte,
              dans quel ordre, avec quel objectif, et quoi faire avec le remboursement d&apos;impôt si vous choisissez le REER.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Guides utiles</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300">
                  <span className="block text-base font-extrabold text-slate-950">{guide.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">{guide.text}</span>
                  <span className="mt-4 block text-sm font-bold text-blue-700">Lire le guide &gt;</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-[28px] px-6 py-8 text-center" style={{ background: DARK }}>
            <h2 className="text-2xl font-extrabold text-stone-100" style={{ fontFamily: "var(--font-playfair)" }}>
              Vous hésitez encore entre REER et CELI?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-300">
              Répondez à quelques questions et voyez quelle stratégie pourrait mieux correspondre à votre situation.
            </p>
            <CtaButton location="final" name="reer_vs_celi_final" className="mt-5 w-full sm:w-auto" />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-slate-950">Questions fréquentes</h2>
            <div className="mt-5 grid gap-3">
              {faqs.map((faq) => (
                <article key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{faq.r}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <SiteFooter
          legalText={"Outil informatif. Consultez un planificateur financier pour votre situation personnelle."}
          contentClassName="mx-auto max-w-4xl text-center"
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
