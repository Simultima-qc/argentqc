import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import SiteFooter from "@/components/SiteFooter";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";
const PAGE_URL = "https://argentqc.ca/subvention-toiture-quebec";

export const metadata: Metadata = {
  title: "Subvention toiture Québec 2026 : aide pour refaire votre toit?",
  description:
    "Voyez quoi vérifier avant de refaire une toiture au Québec, quelles aides peuvent parfois s'appliquer et les erreurs à éviter avant de signer une soumission.",
  keywords: [
    "subvention toiture Québec 2026",
    "subvention rénovation toiture Québec",
    "aide financière toiture Québec",
    "subvention refaire toit Québec",
    "toiture isolation entretoit Québec",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Subvention toiture Québec 2026 : quoi vérifier avant de refaire votre toit",
    description:
      "Aides possibles, travaux liés à l'isolation et erreurs à éviter avant de signer une soumission de toiture au Québec.",
    url: PAGE_URL,
    siteName: "ArgentQC.ca",
    locale: "fr_CA",
    type: "website",
  },
};

const quickAnswers = [
  "Il n'existe pas toujours une subvention simple pour refaire une toiture.",
  "Les aides sont plus probables si les travaux touchent l'isolation, l'efficacité énergétique ou une rénovation admissible.",
  "Certaines démarches doivent être faites avant les travaux, selon le programme.",
  "Le bon réflexe : vérifier avant de signer, pas après.",
];

const roofingWorkTypes = [
  {
    title: "Remplacement de bardeaux",
    text: "Un remplacement de couverture peut être surtout un entretien. L'admissibilité dépend des travaux connexes et du programme actif.",
  },
  {
    title: "Réparation urgente",
    text: "Une infiltration doit souvent être corrigée rapidement, mais l'urgence ne garantit pas une aide. Vérifiez ce qui reste possible avant d'autoriser les travaux.",
  },
  {
    title: "Toiture avec isolation de l'entretoit",
    text: "L'isolation peut changer l'analyse si elle améliore la performance énergétique et respecte les exigences du programme visé.",
  },
  {
    title: "Ventilation et étanchéité",
    text: "La ventilation, les fuites d'air et l'étanchéité peuvent compter dans une démarche énergétique, selon les travaux et les preuves demandées.",
  },
  {
    title: "Travaux combinés avec isolation",
    text: "Un projet toiture + entretoit peut mériter une vérification plus poussée qu'un simple remplacement de revêtement.",
  },
  {
    title: "Rénovation majeure",
    text: "Quand l'enveloppe de la maison est rénovée plus largement, il faut regarder les programmes de rénovation et d'efficacité énergétique ensemble.",
  },
];

const programs = [
  {
    href: "/subvention-renovation-quebec",
    title: "Subvention rénovation Québec",
    text: "Voir comment un projet de toiture peut s'inscrire dans une rénovation résidentielle plus large.",
  },
  {
    href: "/subvention-isolation-quebec",
    title: "Subvention isolation Québec",
    text: "Vérifier le rôle possible de l'isolation de l'entretoit, de l'étanchéité et des zones isolées.",
  },
  {
    href: "/reno-climat-quebec",
    title: "Rénoclimat Québec",
    text: "Comprendre les démarches liées à l'efficacité énergétique et l'importance de l'ordre des étapes.",
  },
  {
    href: "/subventions-maison-quebec",
    title: "Subventions maison Québec",
    text: "Obtenir une vue d'ensemble des aides maison à vérifier avant de lancer les travaux.",
  },
];

const lessLikelyItems = [
  "Remplacement purement esthétique du revêtement de toiture.",
  "Entretien normal sans amélioration énergétique documentée.",
  "Réparation isolée sans lien avec l'isolation, l'étanchéité ou une rénovation admissible.",
  "Travaux déjà commencés ou terminés avant les démarches exigées.",
  "Absence de photos, soumissions, factures ou évaluation si le programme les demande.",
];

const commonErrors = [
  "Signer une soumission avant de vérifier les aides et l'ordre des démarches.",
  "Croire qu'une toiture donne automatiquement droit à une subvention.",
  "Oublier de vérifier l'isolation de l'entretoit pendant que la toiture est ouverte ou planifiée.",
  "Ne pas garder les soumissions, factures, photos et preuves des travaux.",
  "Confondre subvention, crédit d'impôt et prêt.",
  "Attendre après les travaux pour se renseigner.",
];

const scenarios = [
  {
    label: "Toit vieillissant",
    title: "Toiture vieillissante à remplacer",
    text: "Vérifiez si le projet est seulement un remplacement de couverture ou s'il touche aussi l'isolation, l'étanchéité ou une rénovation plus large.",
  },
  {
    label: "Urgence",
    title: "Infiltration ou réparation urgente",
    text: "Protégez le bâtiment, mais documentez la situation et vérifiez rapidement si certaines démarches doivent être faites avant les travaux non urgents.",
  },
  {
    label: "Entretoit",
    title: "Toiture + isolation de l'entretoit",
    text: "Vérifiez les exigences liées à l'isolation, à la ventilation et à l'évaluation énergétique avant de signer la soumission complète.",
  },
  {
    label: "Enveloppe",
    title: "Rénovation majeure de l'enveloppe",
    text: "Regardez le projet comme un ensemble : toiture, isolation, fenêtres, étanchéité et efficacité énergétique peuvent être évaluées différemment ensemble.",
  },
];

const checklist = [
  "Âge et état actuel du toit.",
  "Urgence réelle ou rénovation planifiée.",
  "Niveau d'isolation actuel de l'entretoit.",
  "Ventilation, humidité, fuites d'air ou problèmes d'étanchéité.",
  "Photos avant travaux et notes sur les problèmes observés.",
  "Soumissions détaillées séparant toiture, isolation et travaux connexes.",
  "Exigences du programme actif, si un programme semble pertinent.",
  "Ordre des démarches : inscription, évaluation, soumission, travaux et preuves.",
];

const guides = [
  {
    href: "/subventions-maison-quebec",
    title: "Subventions maison au Québec",
    text: "Vue d'ensemble des aides liées à la maison, à l'énergie et aux rénovations.",
  },
  {
    href: "/subvention-renovation-quebec",
    title: "Subvention rénovation au Québec",
    text: "Situer la toiture dans un projet de rénovation plus large.",
  },
  {
    href: "/subvention-isolation-quebec",
    title: "Subvention isolation au Québec",
    text: "Comprendre le rôle possible de l'entretoit et de l'étanchéité.",
  },
  {
    href: "/reno-climat-quebec",
    title: "Rénoclimat au Québec",
    text: "Voir les démarches possibles en efficacité énergétique.",
  },
  {
    href: "/subvention-fenetres-quebec",
    title: "Subvention fenêtres au Québec",
    text: "Comparer la toiture avec d'autres travaux de l'enveloppe.",
  },
];

const faqs = [
  {
    q: "Existe-t-il une subvention pour refaire une toiture au Québec?",
    r: "Il n'existe pas toujours une aide simple et directe pour refaire une toiture. Une aide peut parfois s'appliquer si le projet touche l'isolation, l'efficacité énergétique ou une rénovation admissible, selon le programme.",
  },
  {
    q: "Une toiture est-elle admissible à Rénoclimat?",
    r: "Une toiture seule n'est pas automatiquement admissible. Rénoclimat s'inscrit dans une démarche d'efficacité énergétique, donc il faut vérifier les travaux précis, l'évaluation requise et l'ordre des étapes.",
  },
  {
    q: "Est-ce que l'isolation de l'entretoit peut changer l'admissibilité?",
    r: "Oui, dans certains cas. L'isolation de l'entretoit peut être plus pertinente qu'un remplacement de toiture seul, mais les critères du programme et les démarches avant travaux doivent être confirmés.",
  },
  {
    q: "Peut-on demander une aide après avoir refait la toiture?",
    r: "Ce n'est pas toujours possible. Certains programmes exigent une inscription, une évaluation ou une approbation avant les travaux. Il vaut mieux vérifier avant de signer.",
  },
  {
    q: "Une réparation urgente de toiture donne-t-elle droit à une aide?",
    r: "Pas nécessairement. Une réparation urgente vise d'abord à protéger le bâtiment. L'admissibilité dépend ensuite du programme, des travaux réalisés et des preuves conservées.",
  },
  {
    q: "Est-ce mieux de refaire la toiture ou d'isoler l'entretoit?",
    r: "Cela dépend de l'état du toit, des pertes de chaleur, de la ventilation et de l'urgence. Souvent, il faut comparer la toiture, l'isolation et l'étanchéité avant de choisir l'ordre des travaux.",
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

function CtaButton({
  location,
  name,
  className = "",
}: {
  location: "hero" | "final";
  name: "subvention_toiture_hero" | "subvention_toiture_final";
  className?: string;
}) {
  return (
    <TrackingLink
      href="/questionnaire"
      tracking={{
        cta_name: name,
        cta_location: location,
        destination: "/questionnaire",
      }}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl bg-yellow-400 px-6 py-4 text-center text-sm font-extrabold text-slate-950 no-underline shadow-[0_18px_50px_rgba(245,200,66,0.24)] transition hover:-translate-y-0.5 hover:bg-yellow-300 ${className}`}
    >
      Vérifier mes aides
    </TrackingLink>
  );
}

export default function SubventionToitureQuebecPage() {
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
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link
            href="/fr"
            className="text-[15px] font-extrabold no-underline"
            style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}
          >
            ArgentQC.ca
          </Link>
          <TrackingLink
            href="/questionnaire"
            tracking={{
              cta_name: "subvention_toiture_header",
              cta_location: "header",
              destination: "/questionnaire",
            }}
            className="text-xs font-semibold underline"
            style={{ color: GOLD }}
          >
            Vérifier mes aides
          </TrackingLink>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 py-12 text-white sm:py-16" style={{ background: DARK }}>
        <div
          className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full border border-yellow-300/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-6 top-24 h-40 w-40 rounded-full border border-yellow-300/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-4xl gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
              Toiture · Québec 2026
            </p>
            <h1
              className="mb-5 text-[clamp(2rem,6vw,3.6rem)] font-extrabold leading-[1.04]"
              style={{ color: "#F0EBE0", fontFamily: "var(--font-playfair)" }}
            >
              Subvention toiture Québec : quoi vérifier avant de refaire votre toit
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              Refaire une toiture coûte cher, mais une aide n&apos;est pas automatique. L&apos;admissibilité dépend du
              type de travaux, du programme actif, de l&apos;isolation, de l&apos;efficacité énergétique et des démarches à
              faire avant les travaux.
            </p>
            <CtaButton
              location="hero"
              name="subvention_toiture_hero"
              className="mt-6 w-full sm:w-auto"
            />
            <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-yellow-100">
              Avant de signer une soumission, vérifiez si votre projet peut entrer dans une aide existante.
            </p>
          </div>

          <aside className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Le point décisif
            </p>
            <p className="mt-4 text-2xl font-extrabold leading-tight text-white">
              La toiture seule ne suffit pas toujours
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Les travaux liés à l&apos;entretoit, à l&apos;étanchéité ou à une rénovation énergétique peuvent changer
              l&apos;analyse selon le programme.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-9 sm:py-12">
        <section className="mb-12 rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-800">Réponse rapide</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
            Une aide peut exister, mais il faut vérifier le contexte des travaux
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {quickAnswers.map((answer) => (
              <div key={answer} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-black text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <p className="text-sm leading-6 text-slate-700">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">
            Toiture : quels travaux peuvent changer la situation?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Une toiture peut cacher plusieurs types de travaux. Le programme regardera souvent ce qui est réellement
            amélioré, pas seulement le mot &quot;toiture&quot; sur la soumission.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {roofingWorkTypes.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Les programmes à regarder</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Les programmes changent et leurs critères doivent être vérifiés avant de signer. Ces guides aident à
            orienter les bonnes questions selon vos travaux.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {programs.map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
              >
                <span className="block text-base font-extrabold text-slate-950">{program.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{program.text}</span>
                <span className="mt-4 block text-sm font-bold text-emerald-700">Consulter le guide →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[28px] bg-slate-950 p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
            Limites fréquentes
          </p>
          <h2 className="mt-2 text-2xl font-extrabold">
            Quand une toiture est moins susceptible d&apos;être admissible
          </h2>
          <div className="mt-5 grid gap-3">
            {lessLikelyItems.map((item) => (
              <div key={item} className="border-t border-white/10 pt-3 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Erreurs fréquentes</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {commonErrors.map((error, index) => (
              <div key={error} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-black text-rose-800">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{error}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Scénarios concrets</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Le bon réflexe dépend de la raison des travaux et de ce qui est fait en même temps que la toiture.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {scenarios.map((scenario) => (
              <article key={scenario.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-emerald-700">{scenario.label}</p>
                <h3 className="mt-2 text-base font-extrabold text-slate-950">{scenario.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[28px] border border-yellow-200 bg-yellow-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-950">Avant de demander une soumission</h2>
          <div className="mt-5 grid gap-3">
            {checklist.map((item, index) => (
              <div key={item} className="flex gap-4 border-t border-yellow-200 pt-3 first:border-0 first:pt-0">
                <span className="text-sm font-black text-amber-800">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Guides utiles</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300"
              >
                <span className="block text-sm font-extrabold text-slate-950">{guide.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{guide.text}</span>
              </Link>
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

        <section className="rounded-[28px] p-6 text-center text-white sm:p-9" style={{ background: DARK }}>
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-playfair)" }}>
            Vous pensez refaire votre toiture?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Répondez à quelques questions pour voir quelles aides pourraient s&apos;appliquer à votre projet.
          </p>
          <CtaButton
            location="final"
            name="subvention_toiture_final"
            className="mt-6 w-full sm:w-auto"
          />
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les programmes, critères et montants
          peuvent changer. Confirmez toujours les exigences auprès des sources officielles avant de signer ou de
          commencer les travaux.
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
