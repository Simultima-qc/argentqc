import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-tps-tvh-canada-2026";

const baseMetadata: Metadata = {
  title: "Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement",
  description:
    "Tout sur le crédit pour la TPS/TVH en 2026 : montants selon votre revenu et situation familiale, seuils d&apos;admissibilité et versements automatiques trimestriels.",
  keywords: ["crédit TPS TVH 2026", "remboursement TPS 2026", "crédit TPS admissibilité", "versement TPS trimestriel"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-tps-tvh-canada-2026",
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
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Fiscal</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 13 septembre 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le crédit pour la TPS/TVH est une aide fédérale versée automatiquement chaque trimestre aux personnes
            et familles à revenu faible ou modeste. En 2026, une personne seule peut recevoir jusqu&apos;à{" "}
            <strong>545 $</strong>{" "} par année, et un couple avec deux enfants peut obtenir jusqu&apos;à{" "}
            <strong>1 100 $</strong>{" "} et plus. Voici comment savoir si vous y avez droit et comment est calculé
            votre remboursement.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Crédit fédéral versé en <strong>4 versements trimestriels</strong>{" "} : janvier, avril, juillet et octobre</li>
            <li>✓ Aucune demande distincte requise — vous l&apos;obtenez automatiquement en produisant votre déclaration de revenus</li>
            <li>✓ Admissible dès 19 ans, ou plus jeune si vous êtes marié, en union de fait ou parent</li>
            <li>✓ Montants réduits progressivement au-delà d&apos;un seuil de revenu net d&apos;environ <strong>46 600 $</strong>{" "} (2026)</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que le crédit pour la TPS/TVH ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit pour la taxe sur les produits et services / taxe de vente harmonisée (TPS/TVH) est un{" "}
            <strong>paiement trimestriel non imposable</strong>{" "} versé par le gouvernement fédéral canadien. Il vise à
            compenser, en partie, la TPS ou la TVH payée par les ménages à revenu faible ou modeste tout au long
            de l&apos;année.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;Agence du revenu du Canada (ARC) calcule automatiquement votre crédit en fonction de votre
            déclaration de revenus de l&apos;année précédente, de votre situation familiale et du nombre d&apos;enfants
            admissibles. Vous n&apos;avez pas à faire de demande séparée — il suffit de produire votre déclaration
            chaque année.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Les versements sont émis en <strong>janvier, avril, juillet et octobre</strong>. Si le montant annuel
            calculé est inférieur à 50 $, l&apos;ARC le verse en un seul paiement au mois de juillet plutôt qu&apos;en
            quatre versements.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui y a droit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour être admissible au crédit TPS/TVH, vous devez remplir toutes les conditions suivantes au
            début de chaque trimestre :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Résident canadien", desc: "Vous devez être un résident du Canada aux fins de l'impôt fédéral" },
              { titre: "Âge minimum de 19 ans", desc: "Ou avoir un conjoint ou une conjointe de fait, ou être parent d'un enfant qui vit avec vous" },
              { titre: "Déclaration de revenus produite", desc: "Vous et votre conjoint devez avoir produit votre déclaration, même si vous n'avez aucun revenu" },
              { titre: "Revenu familial net admissible", desc: "Votre revenu net ajusté doit être sous le seuil de réduction — calculé automatiquement par l'ARC" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            Les nouveaux résidents permanents et les réfugiés peuvent demander le crédit en remplissant le formulaire{" "}
            <strong>RC151</strong>{" "} — &quot;Crédit pour la TPS/TVH et allocation canadienne pour enfants pour les particuliers
            qui deviennent résidents du Canada&quot;.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants 2026 : combien pouvez-vous recevoir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les montants du crédit TPS/TVH sont indexés annuellement selon l&apos;inflation. Pour la période de
            juillet 2026 à juin 2027 (basée sur votre déclaration de revenus de 2025), les montants de base
            estimés sont les suivants :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Montants annuels de base (estimés 2026)</p>
            <div className="space-y-2">
              {[
                { situation: "Personne seule", montant: "545 $", trimestre: "136 $/trimestre" },
                { situation: "Conjoint ou conjoint de fait (total)", montant: "715 $", trimestre: "179 $/trimestre" },
                { situation: "Par enfant admissible (moins de 19 ans)", montant: "190 $", trimestre: "48 $/trimestre" },
              ].map((row) => (
                <div key={row.situation} className="flex justify-between items-center text-sm py-1 border-b border-blue-100 last:border-0">
                  <span className="text-blue-900 flex-1">{row.situation}</span>
                  <span className="font-bold text-blue-800 mr-4">{row.montant}</span>
                  <span className="text-blue-600 text-xs w-28 text-right">{row.trimestre}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
            <p className="font-semibold text-slate-700 text-sm mb-2">Exemples de crédit annuel maximal</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Personne seule, aucun enfant</span>
                <span className="font-bold text-slate-800">545 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Couple sans enfant</span>
                <span className="font-bold text-slate-800">715 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Couple avec 1 enfant</span>
                <span className="font-bold text-slate-800">905 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Couple avec 2 enfants</span>
                <span className="font-bold text-slate-800">1 095 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Famille monoparentale + 2 enfants</span>
                <span className="font-bold text-slate-800">925 $</span>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            * Ces montants sont des estimations indexées. L&apos;ARC publie les montants officiels confirmés pour
            chaque année. Consultez <strong>canada.ca</strong>{" "} pour les chiffres exacts de votre situation.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment le crédit est-il réduit selon votre revenu ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit commence à diminuer lorsque votre <strong>revenu familial net ajusté</strong>{" "} dépasse
            le seuil de réduction. En 2026, ce seuil est d&apos;environ <strong>46 600 $</strong>. Au-delà de ce
            montant, le crédit est réduit au taux de <strong>5 % par dollar de revenu supplémentaire</strong>.
          </p>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-4">
            <div className="grid grid-cols-3 px-4 py-2 bg-slate-100 border-b border-slate-200 text-xs font-semibold text-slate-600">
              <span>Revenu familial net</span>
              <span className="text-center">Personne seule</span>
              <span className="text-right">Couple + 2 enfants</span>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { revenu: "30 000 $", seul: "545 $", couple: "1 095 $" },
                { revenu: "40 000 $", seul: "545 $", couple: "1 095 $" },
                { revenu: "50 000 $", seul: "~ 380 $", couple: "~ 930 $" },
                { revenu: "60 000 $", seul: "~ 130 $", couple: "~ 680 $" },
                { revenu: "70 000 $", seul: "0 $", couple: "~ 180 $" },
                { revenu: "75 000 $", seul: "0 $", couple: "0 $" },
              ].map((row) => (
                <div key={row.revenu} className="grid grid-cols-3 px-4 py-2 text-sm">
                  <span className="text-slate-600">{row.revenu}</span>
                  <span className="text-center text-slate-700">{row.seul}</span>
                  <span className="text-right text-slate-700">{row.couple}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            Le taux de réduction est de 5 % par dollar dépassant le seuil. Les familles avec enfants ont
            droit à des montants de base plus élevés, ce qui repousse aussi le seuil auquel leur crédit
            tombe à zéro.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment recevoir votre crédit TPS/TVH ?</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Produisez votre déclaration de revenus",
                texte: "C'est l'étape la plus importante. L'ARC calcule automatiquement votre crédit en fonction des informations de votre déclaration — même si vous n'avez aucun revenu, vous devez produire pour recevoir le crédit. Plus vous produisez tôt, plus vite l'ARC établit votre droit au crédit.",
              },
              {
                num: "2",
                titre: "Mettez à jour votre situation familiale",
                texte: "Si votre situation change (mariage, séparation, divorce, naissance d'un enfant, décès du conjoint), signalez-le rapidement à l'ARC via Mon dossier. Cela peut modifier votre montant dès le prochain versement trimestriel.",
              },
              {
                num: "3",
                titre: "Inscrivez-vous au dépôt direct",
                texte: "Inscrivez-vous au dépôt direct via Mon dossier de l'ARC (canada.ca) pour recevoir vos versements directement dans votre compte bancaire — plus rapide et plus sécuritaire que par chèque postal.",
              },
              {
                num: "4",
                titre: "Vérifiez vos versements et votre admissibilité",
                texte: "Consultez Mon dossier de l'ARC pour voir vos versements à venir, l'historique de paiements et les montants calculés. Vous pouvez aussi appeler l'ARC au 1-800-387-1193 (particuliers) pour toute question.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {etape.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{etape.titre}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{etape.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Autres aides cumulables avec le crédit TPS/TVH</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            En produisant simplement votre déclaration de revenus, vous pouvez aussi être admissible à
            plusieurs autres aides fédérales et provinciales :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Crédit pour la solidarité (Québec)", desc: "Aide provinciale couvrant TVQ, logement et régions éloignées — versée mensuellement ou trimestriellement selon le montant" },
              { titre: "Allocation canadienne pour enfants (ACE)", desc: "Jusqu'à 7 998 $/an par enfant de moins de 6 ans pour les familles à revenu modeste (versée mensuellement)" },
              { titre: "Prestation canadienne pour les travailleurs (PCT)", desc: "Remboursement d'impôt pour les travailleurs à faible revenu, jusqu'à 1 590 $ pour une personne seule en 2026" },
              { titre: "Prestation dentaire canadienne", desc: "Pour les enfants de moins de 18 ans sans assurance dentaire privée, jusqu'à 1 710 $ par enfant selon le revenu familial" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#1a3a6b" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes vos aides en 2 minutes</p>
          <p className="text-sm mb-4" style={{ color: "rgba(200,215,255,0.85)" }}>
            Crédit TPS/TVH, solidarité, ACE et plus encore — trouvez tout ce à quoi vous avez droit selon votre situation.
          </p>
          <Link
            href="/fr/questionnaire"
            className="inline-block font-bold px-6 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#1a3a6b" }}
          >
            Trouver mes aides →
          </Link>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-tps-tvh-informations-generales.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ARC – Crédit pour la TPS/TVH
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
  titre: "Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement",
  description: "Tout sur le crédit pour la TPS/TVH en 2026 : montants selon votre revenu et situation familiale, seuils d'admissibilité et versements automatiques trimestriels.",
  date: "2026-09-13",
  categorie: "Fiscal",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
