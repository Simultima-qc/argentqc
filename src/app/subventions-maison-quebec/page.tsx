import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import SiteFooter from "@/components/SiteFooter";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "Subventions maison Québec : montants, aides et estimation",
  description:
    "Découvrez combien vous pourriez recevoir pour vos travaux, les principales subventions disponibles et comment maximiser votre montant.",
  keywords: [
    "subventions maison Québec",
    "subvention rénovation Québec",
    "subvention thermopompe Québec",
    "subvention isolation Québec",
    "Rénoclimat Québec",
    "aide financière maison Québec",
  ],
};

const amountCards = [
  {
    icon: "🔥",
    title: "Rénovation énergétique",
    amount: "1 000 $ à 10 000 $+",
    text: "Le potentiel augmente vite quand les bons travaux et les bons programmes sont regardés ensemble.",
  },
  {
    icon: "❄️",
    title: "Thermopompe",
    amount: "Jusqu'à plusieurs milliers de dollars",
    text: "Le bon équipement, au bon moment, peut faire une grosse différence sur le montant récupéré.",
  },
  {
    icon: "🧱",
    title: "Isolation",
    amount: "De modeste à très intéressant",
    text: "Le potentiel change fortement selon les zones isolées : grenier, murs, sous-sol ou étanchéité.",
  },
  {
    icon: "⚡",
    title: "Projets combinés",
    amount: "Potentiel encore plus élevé",
    text: "Plusieurs travaux bien planifiés peuvent faire grimper le total beaucoup plus vite qu'on le pense.",
  },
];

const examples = [
  {
    title: "Maison",
    amount: "4 500 $",
    text: "Thermopompe admissible et quelques améliorations énergétiques bien planifiées.",
  },
  {
    title: "Projet combiné",
    amount: "8 000 $",
    text: "Isolation, chauffage et démarches réalisées dans le bon ordre.",
  },
  {
    title: "Petit projet",
    amount: "1 500 $",
    text: "Travaux ciblés avec un programme applicable, sans rénovation majeure.",
  },
];

const variationReasons = [
  "Ce n'est pas une seule subvention à cocher : plusieurs aides peuvent se cumuler autour du même projet.",
  "Le mix de travaux change tout : thermopompe, isolation, fenêtres, chauffage ou borne ne se calculent pas pareil.",
  "Le timing compte : certaines validations ou démarches doivent être faites avant d'acheter ou de commencer.",
  "La majorité des gens sous-optimisent parce qu'ils regardent une dépense isolée au lieu de l'ensemble des travaux.",
];

const subsidyTypes = [
  {
    href: "/subvention-thermopompe-quebec",
    title: "Subvention thermopompe Québec",
    desc: "Voir le potentiel pour une thermopompe et les erreurs qui peuvent réduire le montant.",
  },
  {
    href: "/subvention-isolation-quebec",
    title: "Subvention isolation Québec",
    desc: "Comprendre les aides possibles pour grenier, murs, sous-sol et travaux liés.",
  },
  {
    href: "/reno-climat-quebec",
    title: "Rénoclimat Québec",
    desc: "Le programme central pour plusieurs projets d'efficacité énergétique résidentielle.",
  },
  {
    href: "/subvention-renovation-quebec",
    title: "Subvention rénovation Québec",
    desc: "Explorer les crédits, aides et programmes liés aux rénovations de maison.",
  },
  {
    href: "/borne-recharge-quebec",
    title: "Borne de recharge Québec",
    desc: "Aide possible pour l'installation d'une borne résidentielle de niveau 2.",
  },
  {
    href: "/chauffez-vert-quebec",
    title: "Chauffez vert Québec",
    desc: "Voir les aides liées au remplacement d'un système de chauffage admissible.",
  },
];

const maximizeTips = [
  "Penser en projet global, pas seulement en achat isolé.",
  "Comparer les options avant de choisir un équipement ou un entrepreneur.",
  "Éviter les décisions rapides qui ferment la porte à certaines aides.",
  "Vérifier avant d'acheter ou de commencer les travaux.",
  "Regarder les combinaisons possibles entre rénovation, énergie, chauffage et transport électrique.",
];

const processSteps = [
  {
    title: "Vérifier l'admissibilité",
    text: "Votre bâtiment, vos travaux et votre situation déterminent le point de départ.",
  },
  {
    title: "Comprendre les options",
    text: "On regarde les programmes possibles ensemble, pas une fiche gouvernementale isolée.",
  },
  {
    title: "Passer à l'action",
    text: "Vous savez quoi vérifier avant d'acheter, de signer ou de commencer les travaux.",
  },
];

const faqs = [
  {
    q: "Qui est admissible aux subventions maison au Québec?",
    r: "L'admissibilité dépend surtout du type de bâtiment, de votre statut, des travaux prévus et des critères propres à chaque programme. Les propriétaires occupants sont souvent les premiers concernés, mais chaque cas doit être vérifié.",
  },
  {
    q: "Combien peut-on recevoir?",
    r: "Le montant peut aller de quelques centaines de dollars à plusieurs milliers. Un petit projet peut viser environ 1 500 $, tandis qu'un projet combiné peut atteindre 8 000 $ ou plus selon les travaux et les programmes applicables.",
  },
  {
    q: "Peut-on combiner plusieurs subventions?",
    r: "Dans certains cas, oui. C'est justement pourquoi il faut regarder le projet global : rénovation énergétique, thermopompe, isolation, chauffage et autres aides peuvent parfois se compléter.",
  },
  {
    q: "Faut-il faire les démarches avant les travaux?",
    r: "Souvent, oui. Certaines aides exigent une validation, une évaluation ou des conditions à respecter avant l'achat ou le début des travaux. Vérifier après coup peut coûter cher.",
  },
  {
    q: "Combien de temps faut-il?",
    r: "Les délais varient selon le programme, les documents requis, le traitement du dossier et le moment des travaux. Le plus important est de vérifier tôt pour éviter de bloquer une aide possible.",
  },
  {
    q: "Quels travaux sont admissibles?",
    r: "Les travaux courants incluent thermopompe, isolation, rénovation énergétique, chauffage, accessibilité et borne de recharge. L'admissibilité exacte dépend du programme et des caractéristiques du bâtiment.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.r,
    },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Principales subventions maison Québec",
  itemListElement: subsidyTypes.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    description: item.desc,
    url: `https://argentqc.ca${item.href}`,
  })),
};

function CtaButton({ location, className = "" }: { location: string; className?: string }) {
  return (
    <TrackingLink
      href="/questionnaire"
      tracking={{
        cta_name: "Voir combien je peux récupérer",
        cta_location: location,
        destination: "/questionnaire",
      }}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 text-center text-sm font-extrabold text-slate-950 no-underline shadow-[0_18px_55px_rgba(245,200,66,0.28)] transition hover:bg-yellow-300 ${className}`}
    >
      Voir combien je peux récupérer
    </TrackingLink>
  );
}

export default function SubventionsMaisonQuebecPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <header
        className="sticky top-0 z-10 px-4 py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
        style={{ background: DARK }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
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
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Subventions maison Québec
            </p>
            <h1
              className="mb-4 text-[clamp(2rem,6vw,3.6rem)] font-extrabold leading-[1.05]"
              style={{ color: "#F0EBE0", fontFamily: "var(--font-playfair)" }}
            >
              Subventions maison au Québec : combien pouvez-vous récupérer?
            </h1>
            <p className="mb-6 max-w-2xl text-base leading-7 text-slate-300">
              La plupart des propriétaires sous-estiment ce qu&apos;ils peuvent réellement récupérer. Selon vos
              travaux, plusieurs aides peuvent s&apos;additionner et changer fortement le budget final.
            </p>
            <CtaButton location="hero" className="w-full sm:w-auto" />
            <p
              className="mt-3 rounded-2xl border border-yellow-300/25 bg-yellow-300/10 px-4 py-3 text-center text-sm font-extrabold text-yellow-200 sm:inline-flex sm:text-left"
              aria-label="Potentiel financier estimé"
            >
              💰 1 000 $ à 10 000 $+ selon votre projet
            </p>
            <p className="mt-3 text-center text-xs text-slate-400 sm:text-left">
              Estimation en 2 minutes selon votre situation
            </p>
          </div>

          <aside className="border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Potentiel à vérifier
            </p>
            <p className="mt-4 text-5xl font-black leading-none text-white">8 000 $+</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Un projet combiné peut dépasser plusieurs milliers de dollars quand les travaux sont bien structurés.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10">
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Combien pouvez-vous vraiment recevoir?</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {amountCards.map((card) => (
              <article key={card.title} className="border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 text-2xl" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-950">{card.title}</h3>
                <p className="mt-2 text-xl font-black text-emerald-700">{card.amount}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Le vrai levier est souvent la combinaison : bâtiment, travaux, ordre des démarches et programmes
            compatibles.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Exemples de montants récupérés</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {examples.map((example) => (
              <article key={example.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-slate-500">{example.title}</h3>
                <p className="mt-3 text-4xl font-black text-emerald-700">{example.amount}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{example.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Exemples illustratifs : le montant réel dépend de votre dossier et des critères applicables.
          </p>
        </section>

        <section className="mb-12 bg-slate-950 p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">Pourquoi les montants varient autant</h2>
          <div className="mt-6 grid gap-3">
            {variationReasons.map((reason) => (
              <div key={reason} className="border-t border-white/10 pt-4 text-sm leading-6 text-slate-300">
                {reason}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Les principales subventions pour votre maison</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Utilisez ces guides comme points d&apos;entrée, puis estimez le projet complet pour voir quelles aides
            pourraient s&apos;additionner autour de vos travaux.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {subsidyTypes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300"
              >
                <span className="block text-base font-extrabold text-slate-950">{item.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{item.desc}</span>
                <span className="mt-4 block text-sm font-bold text-blue-700">Voir le guide →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="rounded-[28px] border border-yellow-200 bg-yellow-50 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-950">Comment maximiser ce que vous pouvez recevoir</h2>
            <div className="mt-5 grid gap-3">
              {maximizeTips.map((tip, index) => (
                <div key={tip} className="flex gap-4 rounded-2xl bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-extrabold text-yellow-300">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-950">En quelques minutes, voyez votre potentiel</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Le questionnaire vous aide à relier vos travaux, votre bâtiment et votre situation aux programmes
            qui pourraient s&apos;appliquer.
          </p>
          <CtaButton location="mid" className="mt-5 w-full sm:w-auto" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Comment ça fonctionne</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                  Étape {index + 1}
                </span>
                <h3 className="mt-3 text-base font-extrabold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
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

        <section className="rounded-[28px] p-6 text-center text-white sm:p-8" style={{ background: DARK }}>
          <h2 className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-playfair)" }}>
            Vous pourriez laisser plusieurs milliers de dollars sur la table
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Avant de lancer vos travaux, voyez ce que votre projet pourrait réellement vous faire récupérer.
          </p>
          <CtaButton location="final" className="mt-6 w-full sm:w-auto" />
          <p className="mt-3 text-xs text-slate-400">Estimation en 2 minutes selon votre situation</p>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les montants sont des estimations :
          confirmez toujours les critères et les montants auprès des sources officielles avant de prendre une décision.
        </p>
      </div>

      <SiteFooter
        legalText={"Outil informatif non affilié au gouvernement."}
        contentClassName="mx-auto max-w-4xl text-center"
        style={{ background: DARK }}
        brandStyle={{ color: GOLD, marginBottom: "4px" }}
        legalStyle={{ color: "rgb(100 116 139)" }}
        linkStyle={{ color: "rgb(148 163 184)" }}
        contactLinkStyle={{ marginTop: "8px" }}
      />
    </main>
  );
}
