import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "Subvention thermopompe Québec : montants, admissibilité et estimation",
  description:
    "Voyez combien vous pourriez recevoir pour une thermopompe au Québec, les critères à vérifier et les erreurs à éviter pour maximiser le montant possible.",
  keywords: [
    "subvention thermopompe Québec",
    "aide thermopompe Québec",
    "LogisVert thermopompe",
    "Rénoclimat thermopompe",
    "subventions maison Québec",
  ],
};

const quickFacts = [
  ["Montant indicatif", "Plusieurs milliers $ possibles"],
  ["Temps pour vérifier", "2 minutes"],
  ["Complexité", "Modérée"],
  ["Travaux liés", "Isolation, rénovation, efficacité énergétique"],
];

const amountRanges = [
  {
    title: "Condo ou copropriété",
    range: "souvent plus limité",
    text: "Le potentiel reste plus serré, mais le type d'installation et les règles du bâtiment peuvent changer le résultat.",
  },
  {
    title: "Maison unifamiliale",
    range: "environ 1 000 $ à 6 700 $+",
    text: "Le bon choix d'équipement peut changer fortement le montant, surtout si le modèle est admissible et bien dimensionné.",
  },
  {
    title: "Projet plus large",
    range: "jusqu'à plusieurs milliers de dollars",
    text: "Le montant global peut devenir plus intéressant si la thermopompe s'insère dans des travaux d'efficacité énergétique.",
  },
];

const examples = [
  {
    title: "Maison unifamiliale à Québec",
    text: "Un propriétaire qui remplace un vieux système par une thermopompe admissible peut parfois viser un montant beaucoup plus intéressant qu'il ne l'imagine au départ.",
    estimate: "Potentiel indicatif : 1 500 $ à 6 700 $+",
  },
  {
    title: "Condo à Laval",
    text: "Dans un condo, le potentiel peut être plus variable selon le type d'installation, les autorisations et les critères applicables au bâtiment.",
    estimate: "Potentiel indicatif : montant plus limité ou variable",
  },
  {
    title: "Projet optimisé",
    text: "Quand la thermopompe s'intègre à une réflexion plus large sur l'efficacité énergétique, le projet peut devenir plus avantageux qu'une décision prise à la pièce.",
    estimate: "Potentiel indicatif : thermopompe + aides liées",
  },
];

const missedItems = [
  "Le bon choix d'équipement peut changer fortement le montant potentiel.",
  "Plusieurs personnes regardent un seul programme alors que le bon réflexe est de regarder le projet dans son ensemble.",
  "Certaines démarches ou validations sont plus simples lorsqu'elles sont prévues dès le départ.",
  "Les critères ne se résument pas à acheter une thermopompe et recevoir automatiquement une aide.",
  "Lire une fiche programme ne suffit pas toujours à comprendre son vrai potentiel.",
];

const maximizeTips = [
  "Vérifiez votre situation avant de choisir trop vite un modèle ou un scénario de travaux.",
  "Évaluez le projet global, pas seulement la thermopompe prise isolément.",
  "Comparez les options admissibles avant de signer ou d'acheter.",
  "Regardez aussi les travaux liés, comme l'isolation ou d'autres améliorations énergétiques.",
  "Évitez les raccourcis qui peuvent faire perdre du temps ou réduire le montant possible.",
];

const faqItems = [
  {
    q: "Est-ce que tout le monde peut recevoir une aide pour une thermopompe au Québec?",
    r: "Non. L'admissibilité dépend notamment du bâtiment, du type d'équipement, des critères du programme visé et parfois de la façon dont le projet est réalisé.",
  },
  {
    q: "Combien peut-on recevoir pour une thermopompe?",
    r: "Le montant varie beaucoup. Certaines situations donnent accès à un montant modeste, tandis que d'autres projets peuvent représenter plusieurs milliers de dollars d'aide potentielle.",
  },
  {
    q: "Peut-on combiner plusieurs programmes?",
    r: "Dans certains cas, oui. Il faut regarder le projet dans son ensemble plutôt que de se limiter à une seule source d'aide, surtout si d'autres travaux d'efficacité énergétique sont prévus.",
  },
  {
    q: "Faut-il faire certaines démarches avant les travaux?",
    r: "Selon le type de projet et les programmes visés, oui. C'est une des raisons pour lesquelles il vaut mieux vérifier tôt plutôt qu'après coup.",
  },
  {
    q: "Une thermopompe murale est-elle admissible?",
    r: "Ça dépend du contexte, du modèle et des critères applicables. Il ne faut pas supposer automatiquement qu'un type précis d'équipement donne toujours droit au même résultat.",
  },
  {
    q: "Combien de temps faut-il pour recevoir l'argent?",
    r: "Les délais varient selon le programme, la démarche à suivre, les documents transmis et le traitement du dossier.",
  },
  {
    q: "Peut-on obtenir une aide si on remplace un vieux système?",
    r: "C'est souvent un des cas qui mérite d'être vérifié de près, parce que le contexte du remplacement peut influencer le potentiel global du projet.",
  },
];

const relatedLinks = [
  { href: "/subventions-maison-quebec", title: "Subventions maison au Québec", text: "Vue d'ensemble des aides pour la maison, l'énergie et la rénovation." },
  { href: "/reno-climat-quebec", title: "Rénoclimat au Québec", text: "Comprendre les démarches et les travaux liés à l'efficacité énergétique." },
  { href: "/subvention-isolation-quebec", title: "Subvention isolation au Québec", text: "Voir comment l'isolation peut s'intégrer à un projet plus large." },
  { href: "/subvention-renovation-quebec", title: "Subvention rénovation au Québec", text: "Explorer les programmes de rénovation disponibles." },
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
      className={`block rounded-2xl bg-yellow-400 px-5 py-4 text-center text-sm font-extrabold text-slate-950 shadow-[0_18px_50px_rgba(245,200,66,0.22)] transition hover:bg-yellow-300 ${className}`}
    >
      Voir combien je peux recevoir
    </TrackingLink>
  );
}

export default function SubventionThermopompeQuebecPage() {
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
        <div className="mx-auto flex max-w-3xl items-center justify-between">
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
        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-[1.4fr_0.9fr] md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Subvention thermopompe Québec
            </p>
            <h1
              className="mb-4 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1.05]"
              style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0" }}
            >
              Subvention thermopompe Québec : combien pouvez-vous recevoir?
            </h1>
            <p className="mb-5 max-w-2xl text-base leading-7 text-slate-300">
              Le choix de la thermopompe peut changer fortement le montant que vous pouvez recevoir. Modèle,
              habitation, moment d&apos;achat et programmes applicables peuvent transformer une simple dépense en projet
              beaucoup plus avantageux.
            </p>
            <CtaButton location="hero" className="max-w-sm" />
            <p className="mt-3 rounded-2xl border border-yellow-300/25 bg-yellow-300/10 px-4 py-3 text-center text-sm font-extrabold text-yellow-200 sm:max-w-sm">
              💰 Jusqu&apos;à plusieurs milliers de dollars selon l&apos;équipement
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
          <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
            {amountRanges.map((item) => (
              <article key={item.title} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4 sm:last:border-r-0 sm:last:pr-0">
                <h2 className="text-base font-extrabold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-xl font-extrabold text-emerald-700">{item.range}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Montants indicatifs présentés à titre d&apos;exemple. Le résultat réel dépend notamment du bâtiment,
            du type de thermopompe, des travaux et des programmes applicables.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-extrabold text-slate-900">Montants indicatifs pour une thermopompe au Québec</h2>
          <div className="space-y-4 text-sm leading-7 text-slate-700">
            <p>
              Une subvention pour thermopompe au Québec peut valoir peu, beaucoup ou rien du tout selon la situation.
              Le bon point de départ n&apos;est donc pas seulement de savoir qu&apos;un programme existe, mais de comprendre
              rapidement si votre projet a un vrai potentiel.
            </p>
            <p>
              Les aides comme LogisVert ou les démarches liées à l&apos;efficacité énergétique peuvent dépendre de détails
              concrets : type d&apos;habitation, modèle choisi, puissance à basse température, moment des travaux et documents
              disponibles. C&apos;est précisément là que plusieurs dossiers se jouent.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Exemples concrets</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Deux projets qui semblent similaires peuvent mener à des montants très différents.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {examples.map((example) => (
              <article key={example.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-slate-900">{example.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{example.text}</p>
                <p className="mt-4 text-sm font-bold text-emerald-700">{example.estimate}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Exemples illustratifs pour aider à comprendre les écarts possibles.</p>
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
              Le but n&apos;est pas seulement d&apos;expliquer un programme. C&apos;est de vérifier si votre scénario peut être
              mieux structuré avant de perdre une aide, de choisir un mauvais équipement ou de faire les démarches
              dans le mauvais ordre.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Comment ça fonctionne</h2>
          <div className="mt-4 grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">Qui peut être concerné</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Des propriétaires, copropriétaires ou ménages qui planifient l&apos;installation ou le remplacement d&apos;une thermopompe.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">De quoi dépend le montant</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Du bâtiment, de l&apos;équipement, des travaux, du moment de la demande et des programmes applicables.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">Pourquoi vérifier tôt</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Certaines validations sont beaucoup plus simples avant de signer, acheter ou commencer les travaux.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">Besoin d&apos;une estimation plus ciblée?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Répondez à quelques questions pour voir quels programmes pourraient s&apos;appliquer à votre situation.
          </p>
          <CtaButton location="mid-page" className="mt-5" />
          <p className="mt-2 text-center text-xs text-slate-500">En 2 minutes, voyez quels programmes pourraient s&apos;appliquer.</p>
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
            Vous voulez savoir combien vous pourriez réellement recevoir?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Avant de choisir un modèle ou de signer, voyez si votre thermopompe peut vous rapporter plus que prévu.
          </p>
          <CtaButton location="final" className="mt-6" />
          <p className="mt-2 text-xs text-slate-400">
            En 2 minutes, obtenez une estimation plus orientée sur votre situation.
          </p>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les montants sont des estimations :
          confirmez toujours les critères et les montants auprès des sources officielles avant de prendre une décision.
        </p>
      </div>

      <footer className="px-4 py-6" style={{ background: DARK }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-1 text-base font-bold" style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}>
            ArgentQC.ca
          </p>
          <p className="text-[11px] text-slate-500">Outil informatif non affilié au gouvernement.</p>
          <Link href="/contact" className="mt-2 block text-[11px] text-slate-400">
            Contactez-nous
          </Link>
          <Link href="/politique-confidentialite" className="mt-1 block text-[11px] text-slate-400">
            Politique de confidentialité
          </Link>
        </div>
      </footer>
    </main>
  );
}
