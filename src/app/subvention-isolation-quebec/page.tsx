import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import SiteFooter from "@/components/SiteFooter";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "Subvention isolation Québec : montants, admissibilité et estimation",
  description:
    "Voyez combien vous pourriez recevoir pour des travaux d'isolation au Québec, les critères à vérifier et comment maximiser le montant possible selon votre projet.",
  keywords: [
    "subvention isolation Québec",
    "aide isolation Québec",
    "Rénoclimat isolation",
    "subvention isolation entretoit",
    "subventions maison Québec",
  ],
};

const quickFacts = [
  ["Montant indicatif", "Très différent selon les zones"],
  ["Temps pour vérifier", "2 minutes"],
  ["Complexité", "Modérée"],
  ["Travaux liés", "Thermopompe, Rénoclimat, rénovation énergétique"],
];

const amountRanges = [
  {
    title: "Isolation de l'entretoit",
    range: "potentiel souvent intéressant",
    text: "Un projet ciblé peut être plus accessible à vérifier, surtout si l'amélioration énergétique est nette.",
  },
  {
    title: "Murs ou travaux importants",
    range: "peut devenir très intéressant",
    text: "Le potentiel monte lorsque l'ampleur des travaux, le bâtiment et la stratégie énergétique se répondent bien.",
  },
  {
    title: "Projet global énergétique",
    range: "potentiel global plus élevé",
    text: "L'isolation devient souvent plus payante quand elle s'insère dans une stratégie complète d'efficacité énergétique.",
  },
];

const examples = [
  {
    title: "Entretoit",
    text: "Un projet ciblé d'isolation de l'entretoit peut parfois être plus intéressant qu'on le pense, surtout lorsqu'il améliore clairement la performance énergétique du bâtiment.",
    estimate: "Potentiel indicatif : accessible selon le projet",
  },
  {
    title: "Travaux plus importants",
    text: "Quand les travaux touchent plusieurs composantes du bâtiment, le potentiel peut devenir plus variable, mais aussi plus intéressant.",
    estimate: "Potentiel indicatif : variable selon l'ampleur",
  },
  {
    title: "Projet optimisé",
    text: "L'isolation est souvent plus avantageuse lorsqu'elle s'insère dans une réflexion plus large sur l'efficacité énergétique de la maison.",
    estimate: "Potentiel indicatif : isolation + aides liées",
  },
];

const missedItems = [
  "Tous les travaux d'isolation ne donnent pas le même potentiel.",
  "Certaines zones du bâtiment peuvent avoir plus d'impact que d'autres.",
  "Beaucoup de gens regardent les travaux un par un au lieu de penser en projet global.",
  "Le vrai potentiel dépend souvent du contexte complet du bâtiment.",
  "Lire une fiche programme ne suffit pas toujours à voir où se trouve l'argent à récupérer.",
];

const maximizeTips = [
  "Vérifiez tôt les travaux qui ont le plus de sens dans votre situation.",
  "Pensez votre projet comme un ensemble plutôt qu'une décision isolée.",
  "Comparez plusieurs scénarios avant d'avancer.",
  "Regardez les travaux liés à l'efficacité énergétique, pas seulement l'isolation seule.",
  "Évitez les raccourcis qui réduisent votre marge de manoeuvre.",
];

const processSteps = [
  {
    title: "De quoi dépend le montant",
    text: "Du type de bâtiment, des zones isolées, de la portée des travaux et des programmes applicables au moment du projet.",
  },
  {
    title: "Pourquoi les écarts sont grands",
    text: "Deux projets d'isolation peuvent sembler proches, mais ne pas améliorer le bâtiment de la même façon.",
  },
  {
    title: "Pourquoi vérifier avant",
    text: "Certaines démarches, validations ou comparaisons sont beaucoup plus utiles avant de choisir les travaux.",
  },
];

const faqItems = [
  {
    q: "Est-ce que tous les travaux d'isolation donnent droit à une aide?",
    r: "Non. Le potentiel dépend des travaux, du bâtiment et des critères applicables au programme visé.",
  },
  {
    q: "Combien peut-on recevoir pour l'isolation?",
    r: "Le montant varie beaucoup selon le type de travaux et le contexte global du projet. Un projet ciblé et un projet complet ne mènent pas au même potentiel.",
  },
  {
    q: "Peut-on combiner plusieurs programmes?",
    r: "Dans certains cas, il faut regarder le projet dans son ensemble plutôt que de se limiter à une seule source d'aide.",
  },
  {
    q: "Faut-il faire certaines démarches avant les travaux?",
    r: "Selon les programmes visés, oui. Il vaut mieux vérifier tôt plutôt qu'après coup.",
  },
  {
    q: "L'isolation de l'entretoit est-elle admissible?",
    r: "C'est souvent un cas qui mérite d'être vérifié de près, mais le résultat dépend des critères applicables et du bâtiment.",
  },
  {
    q: "Combien de temps faut-il pour recevoir l'argent?",
    r: "Les délais varient selon la démarche, le programme concerné, les documents transmis et le traitement du dossier.",
  },
  {
    q: "Est-ce que l'isolation peut être plus avantageuse dans un projet plus global?",
    r: "Oui, parce que le potentiel réel apparaît souvent mieux quand on regarde l'ensemble des travaux et non une seule décision isolée.",
  },
];

const relatedLinks = [
  { href: "/subventions-maison-quebec", title: "Subventions maison au Québec", text: "Vue d'ensemble des aides pour la maison, l'énergie et la rénovation." },
  { href: "/subvention-thermopompe-quebec", title: "Subvention thermopompe au Québec", text: "Voir le potentiel d'une thermopompe et les liens avec l'efficacité énergétique." },
  { href: "/reno-climat-quebec", title: "Rénoclimat au Québec", text: "Comprendre les démarches liées aux travaux d'efficacité énergétique." },
  { href: "/subvention-renovation-quebec", title: "Subvention rénovation au Québec", text: "Explorer les aides et crédits liés aux rénovations résidentielles." },
  { href: "/chauffez-vert-quebec", title: "Chauffez vert au Québec", text: "Voir les aides liées au remplacement d'un système de chauffage admissible." },
  { href: "/questionnaire", title: "Estimation personnalisée", text: "Vérifier rapidement quels programmes pourraient s'appliquer." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.r,
    },
  })),
};

function CtaButton({ location, className = "" }: { location: string; className?: string }) {
  return (
    <TrackingLink
      href="/questionnaire"
      tracking={{
        cta_name: "Voir combien je peux recevoir",
        cta_location: location,
        destination: "/questionnaire",
      }}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 text-center text-sm font-extrabold text-slate-950 no-underline shadow-[0_18px_50px_rgba(245,200,66,0.24)] transition hover:bg-yellow-300 ${className}`}
    >
      Voir combien je peux recevoir
    </TrackingLink>
  );
}

export default function SubventionIsolationQuebecPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header
        className="sticky top-0 z-10 px-4 py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
        style={{ background: DARK }}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[15px] font-extrabold no-underline"
            style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}
          >
            ArgentQC.ca
          </Link>
          <TrackingLink
            href="/questionnaire"
            tracking={{
              cta_name: "Trouver mes aides",
              cta_location: "header",
              destination: "/questionnaire",
            }}
            className="text-xs font-semibold underline"
            style={{ color: GOLD }}
          >
            Trouver mes aides
          </TrackingLink>
        </div>
      </header>

      <section className="px-5 py-12 text-white sm:py-16" style={{ background: DARK }}>
        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-[1.35fr_0.85fr] md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Subvention isolation Québec
            </p>
            <h1
              className="mb-4 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1.05]"
              style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0" }}
            >
              Subvention isolation Québec : combien pouvez-vous recevoir?
            </h1>
            <p className="mb-5 max-w-2xl text-base leading-7 text-slate-300">
              Tous les travaux d&apos;isolation n&apos;offrent pas le même potentiel. Entretoit, murs, sous-sol et étanchéité
              peuvent mener à des montants très différents selon votre bâtiment et la façon de structurer le projet.
            </p>
            <CtaButton location="hero" className="w-full sm:w-auto" />
            <p className="mt-3 rounded-2xl border border-yellow-300/25 bg-yellow-300/10 px-4 py-3 text-center text-sm font-extrabold text-yellow-200 sm:inline-flex sm:text-left">
              💰 Le potentiel varie fortement selon les zones isolées
            </p>
            <p className="mt-2 text-center text-xs text-slate-400 sm:max-w-sm">
              Estimation rapide selon votre situation
            </p>
          </div>

          <aside className="border border-white/10 bg-white/[0.04] p-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Infos rapides
            </p>
            <dl className="space-y-4">
              {quickFacts.map(([label, value]) => (
                <div key={label} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <dt className="text-xs text-slate-400">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-100">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Montants indicatifs pour des travaux d&apos;isolation au Québec
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Le montant réel dépend de plusieurs facteurs, mais voici quelques ordres de grandeur pour vous situer rapidement.
          </p>
          <div className="mt-5 grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
            {amountRanges.map((item) => (
              <article
                key={item.title}
                className="border-b border-slate-100 pb-4 last:border-0 last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4 sm:last:border-r-0 sm:last:pr-0"
              >
                <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xl font-extrabold text-emerald-700">{item.range}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Les montants sont indicatifs. Le résultat réel dépend notamment du bâtiment, des travaux et des programmes applicables.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Exemples concrets</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Deux projets d&apos;isolation peuvent mener à des résultats très différents. Voici quelques exemples illustratifs.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {examples.map((example) => (
              <article key={example.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-slate-900">{example.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{example.text}</p>
                <p className="mt-4 text-sm font-bold text-emerald-700">{example.estimate}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Exemples illustratifs à titre informatif.</p>
        </section>

        <section className="mb-10 rounded-[28px] bg-slate-950 p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">Ce que la plupart des gens manquent</h2>
          <div className="mt-5 grid gap-3">
            {missedItems.map((item) => (
              <div key={item} className="border-t border-white/10 pt-3 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Comment maximiser ce que vous pouvez recevoir</h2>
          <div className="mt-5 grid gap-3">
            {maximizeTips.map((tip, index) => (
              <div key={tip} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-800">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-sm leading-6 text-slate-800">
              L&apos;objectif n&apos;est pas seulement de savoir s&apos;il existe une aide. C&apos;est de comprendre si votre projet
              mérite d&apos;être analysé plus en détail avant de choisir les travaux, signer ou commencer.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Comment ça fonctionne</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Le montant possible dépend notamment du type de bâtiment, des travaux envisagés, de leur portée et des
            programmes applicables au moment du projet.
          </p>
          <div className="mt-5 grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.title}>
                <h3 className="text-sm font-extrabold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">Besoin d&apos;une estimation plus ciblée?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Répondez à quelques questions pour relier vos travaux, votre bâtiment et votre situation aux programmes
            qui pourraient s&apos;appliquer.
          </p>
          <CtaButton location="mid-page" className="mt-5 w-full sm:w-auto" />
          <p className="mt-2 text-center text-xs text-slate-500 sm:text-left">
            En quelques minutes, voyez quels programmes pourraient s&apos;appliquer.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-slate-900">Questions fréquentes</h2>
          <div className="grid gap-3">
            {faqItems.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-extrabold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.r}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-slate-900">À voir aussi</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300"
              >
                <span className="block text-sm font-extrabold text-slate-900">{item.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{item.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] p-6 text-center text-white sm:p-8" style={{ background: DARK }}>
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-playfair)" }}>
            Vous voulez savoir combien vos travaux d&apos;isolation pourraient réellement vous rapporter?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Quelques minutes peuvent suffire pour voir si vos travaux cachent plus d&apos;aide que prévu.
          </p>
          <CtaButton location="final" className="mt-6 w-full sm:w-auto" />
          <p className="mt-2 text-xs text-slate-400">
            En quelques minutes, obtenez une estimation plus orientée sur votre situation.
          </p>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les montants sont des estimations :
          confirmez toujours les critères et les montants auprès des sources officielles avant de prendre une décision.
        </p>
      </div>

      <SiteFooter
        legalText={"Outil informatif non affilié au gouvernement."}
        contentClassName="mx-auto max-w-3xl text-center"
        style={{ background: DARK }}
        brandStyle={{ color: GOLD, marginBottom: "4px" }}
        legalStyle={{ color: "rgb(100 116 139)" }}
        linkStyle={{ color: "rgb(148 163 184)" }}
        contactLinkStyle={{ marginTop: "8px" }}
      />
    </main>
  );
}
