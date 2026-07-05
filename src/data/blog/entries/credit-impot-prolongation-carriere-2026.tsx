import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-impot-prolongation-carriere-2026";

const baseMetadata: Metadata = {
  title: "Crédit d'impôt pour prolongation de carrière 2026 : Un bonus pour travailler après 60 ans",
  description:
    "Guide complet sur le crédit d'impôt québécois pour prolongation de carrière en 2026 : qui est admissible, revenus de travail admissibles, calcul du crédit et exemples concrets.",
  keywords: [
    "crédit impôt prolongation carrière 2026",
    "travail après 60 ans Québec",
    "crédit impôt 60 ans Québec",
    "travailleur expérimenté Québec 2026",
    "incitatif retraite Québec",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-impot-prolongation-carriere-2026",
  },
};

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/fr" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Retraite</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit d&apos;impôt pour prolongation de carrière 2026 : Un bonus pour travailler après 60 ans
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Québec vous récompense financièrement si vous continuez de travailler après 60 ans.
            Le crédit d&apos;impôt pour la prolongation de carrière peut vous faire économiser jusqu&apos;à
            <strong> 1 650 $ d&apos;impôt par an</strong>{" "}— une aide concrète pour les travailleurs expérimentés
            qui choisissent de rester actifs.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Disponible dès <strong>60 ans</strong>{" "}si vous avez un revenu de travail</li>
            <li>✓ Taux de crédit : <strong>15 %</strong>{" "}sur les revenus admissibles</li>
            <li>✓ Plafond : <strong>11 000 $</strong>{" "}de revenus admissibles (soit 1 650 $ max de crédit)</li>
            <li>✓ Réclamé directement dans votre déclaration de revenus québécoise</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que ce crédit d&apos;impôt ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Instauré par le gouvernement du Québec pour contrer la pénurie de main-d&apos;œuvre,
            le crédit d&apos;impôt pour la prolongation de carrière vise à inciter les travailleurs
            de 60 ans et plus à demeurer sur le marché du travail ou à y revenir.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Concrètement, il réduit votre impôt provincial en fonction de vos revenus de travail.
            Plus vous gagnez (jusqu&apos;au plafond), plus le crédit est élevé. Il s&apos;applique sur le
            revenu qui <strong>dépasse 5 000 $</strong>{" "}de revenus de travail admissibles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui est admissible ?</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { critere: "Avoir 60 ans ou plus au 31 décembre de l&apos;année d&apos;imposition", ok: true },
              { critere: "Résider au Québec à la fin de l&apos;année", ok: true },
              { critere: "Avoir un revenu de travail admissible (emploi ou travail autonome)", ok: true },
              { critere: "Produire une déclaration de revenus québécoise", ok: true },
            ].map((item) => (
              <div key={item.critere} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3">
                <span className="text-green-600 font-bold text-sm mt-0.5">✓</span>
                <span className="text-slate-700 text-sm" dangerouslySetInnerHTML={{ __html: item.critere }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment se calcule le crédit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit s&apos;applique sur vos revenus de travail admissibles qui <strong>dépassent 5 000 $</strong>,
            jusqu&apos;à un maximum de 11 000 $. Le taux est de <strong>15 %</strong>.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Calcul du crédit selon le revenu de travail</p>
            <div className="space-y-2 text-sm">
              {[
                { revenu: "5 000 $ ou moins", credit: "0 $", note: "Seuil non atteint" },
                { revenu: "8 000 $", credit: "450 $", note: "(8 000 – 5 000) × 15 %" },
                { revenu: "11 000 $", credit: "900 $", note: "(11 000 – 5 000) × 15 %" },
                { revenu: "16 000 $ et plus", credit: "1 650 $", note: "Maximum — (11 000) × 15 %" },
              ].map((item) => (
                <div key={item.revenu} className="flex justify-between items-center border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="text-blue-900 font-medium">{item.revenu}</span>
                    <span className="text-blue-600 text-xs ml-2">{item.note}</span>
                  </div>
                  <span className="font-bold text-blue-800">{item.credit}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            Le montant maximal du crédit de 1 650 $ s&apos;obtient à partir de 16 000 $ de revenus
            de travail admissibles (5 000 $ de seuil + 11 000 $ de base de crédit).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Revenus admissibles vs non admissibles</h2>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-sm mb-2">Revenus admissibles ✓</p>
              <ul className="space-y-1 text-sm text-green-900">
                <li>• Salaires et traitements d&apos;emploi</li>
                <li>• Revenus de travail autonome (entreprise, profession)</li>
                <li>• Pourboires déclarés</li>
                <li>• Indemnités de remplacement du revenu (accidents du travail)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-2">Revenus non admissibles ✕</p>
              <ul className="space-y-1 text-sm text-red-900">
                <li>• Revenus de retraite (RRQ, RPC, fonds de pension)</li>
                <li>• Revenus de placement (dividendes, intérêts)</li>
                <li>• Prestations gouvernementales (PSV, SRG, aide sociale)</li>
                <li>• Revenus locatifs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment réclamer le crédit</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La démarche est simple et intégrée à votre déclaration de revenus québécoise :
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Calculez vos revenus de travail admissibles",
                texte: "Additionnez vos revenus d&apos;emploi et de travail autonome pour l&apos;année. Assurez-vous d&apos;inclure tous les feuillets T4/RL-1.",
              },
              {
                num: "2",
                titre: "Remplissez l&apos;annexe J de votre déclaration québécoise",
                texte: "L&apos;annexe J est consacrée au crédit pour la prolongation de carrière. Votre logiciel d&apos;impôt devrait la remplir automatiquement si vous indiquez votre âge.",
              },
              {
                num: "3",
                titre: "Inscrivez le montant à la ligne appropriée",
                texte: "Le crédit calculé est inscrit à la ligne 462 de votre déclaration de revenus du Québec et réduit directement votre impôt provincial à payer.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {etape.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{etape.titre}</p>
                  <p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: etape.texte }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combinaison avec d&apos;autres avantages</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Travailler après 60 ans peut aussi bonifier votre rente RRQ. Chaque année supplémentaire
            de cotisation au RRQ après 60 ans augmente votre rente future — surtout si vous choisissez
            de ne pas la toucher avant 65 ou 70 ans.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-semibold text-amber-800 text-sm mb-2">Avantages cumulés à continuer de travailler après 60 ans</p>
            <ul className="space-y-1.5 text-sm text-amber-900">
              <li>• Crédit d&apos;impôt pour prolongation de carrière : jusqu&apos;à 1 650 $/an</li>
              <li>• Bonification de la rente RRQ (jusqu&apos;à +42 % à 70 ans vs 65 ans)</li>
              <li>• Report de la PSV pour bonification (jusqu&apos;à +36 % à 70 ans vs 65 ans)</li>
              <li>• Revenus supplémentaires qui s&apos;ajoutent à votre épargne retraite</li>
            </ul>
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            Crédit prolongation de carrière, RRQ, PSV — découvrez ce à quoi vous avez droit selon votre situation.
          </p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Trouver mes aides →
          </Link>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration/annexes/annexe-j/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            revenuquebec.ca — Crédit pour la prolongation de carrière
          </a>
        </p>
      </article>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement. Les montants sont des estimations."
        contactLabel="Contactez-nous"
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ marginTop: "16px" }}
      />
    </main>
  );
}

const article: BlogArticle = {
  slug,
  titre: "Crédit d'impôt pour prolongation de carrière 2026 : Un bonus pour travailler après 60 ans",
  description:
    "Tout sur le crédit d'impôt québécois pour prolongation de carrière en 2026 : admissibilité, calcul du crédit, revenus admissibles et comment le réclamer dans votre déclaration.",
  date: "2026-07-05",
  categorie: "Retraite",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
