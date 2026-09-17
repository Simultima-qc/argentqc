import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-tps-tvh-canada-2026";

const baseMetadata: Metadata = {
  title: "Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement",
  description:
    "Tout sur le crédit TPS/TVH en 2026 : montants trimestriels selon votre revenu et situation familiale, seuils d'admissibilité, dates de versement et comment vous assurer de le recevoir.",
  keywords: ["crédit TPS TVH 2026", "remboursement TPS 2026", "crédit taxe Canada", "crédit TPS admissibilité"],
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Fiscal fédéral</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 17 septembre 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le crédit TPS/TVH est un versement trimestriel non imposable du gouvernement fédéral qui aide les particuliers et
            les familles à revenu faible ou modeste à compenser la taxe sur les produits et services qu&apos;ils paient.
            En 2026, des millions de Canadiens reçoivent automatiquement ce crédit — mais beaucoup ignorent à combien ils ont réellement
            droit ou pourquoi certains versements diffèrent d&apos;une année à l&apos;autre.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Versement trimestriel automatique — <strong>aucune demande séparée</strong>{" "} si vous produisez votre déclaration de revenus</li>
            <li>✓ Jusqu&apos;à <strong>533 $ par an</strong>{" "} pour une personne seule, <strong>698 $</strong>{" "} pour un couple en 2026</li>
            <li>✓ <strong>183 $</strong>{" "} supplémentaires par enfant de moins de 19 ans admissible</li>
            <li>✓ Le montant diminue progressivement au-delà d&apos;un revenu familial net d&apos;environ <strong>39 826 $</strong></li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi le crédit TPS/TVH exactement ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit pour la taxe sur les produits et services / taxe de vente harmonisée (TPS/TVH) est un crédit
            fédéral remboursable administré par l&apos;Agence du revenu du Canada (ARC). Il a été créé pour reconnaître
            que les taxes à la consommation représentent une part plus importante du budget des ménages à revenu modeste.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Contrairement à de nombreuses aides gouvernementales, ce crédit est entièrement automatique : si vous
            produisez votre déclaration de revenus chaque année, l&apos;ARC calcule votre admissibilité et votre montant
            sans que vous ayez à remplir de formulaire supplémentaire. Les versements sont déposés directement dans
            votre compte bancaire ou envoyés par chèque.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui a droit au crédit TPS/TVH ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vous êtes admissible si vous remplissez <strong>toutes</strong>{" "} les conditions suivantes :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Résidence canadienne", desc: "Vous êtes résident du Canada aux fins de l'impôt au début du mois de versement" },
              { titre: "Âge minimum", desc: "Vous avez 19 ans ou plus (des exceptions existent pour les personnes avec conjoint ou enfants)" },
              { titre: "Déclaration produite", desc: "Vous avez produit votre déclaration de revenus pour l'année d'imposition précédente" },
              { titre: "Revenu admissible", desc: "Votre revenu familial net ne dépasse pas le seuil d'élimination progressive" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            Important : même si votre revenu était nul l&apos;an dernier, vous devez produire une déclaration de revenus
            pour recevoir le crédit. Ne pas produire = ne pas recevoir le versement.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants du crédit TPS/TVH en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les montants sont indexés à l&apos;inflation chaque année. Pour la période de juillet 2026 à juin 2027
            (basée sur la déclaration de revenus 2025), les montants annuels de base sont :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Montants annuels 2026</p>
            <div className="space-y-2">
              {[
                { situation: "Personne seule", annuel: "533 $", trimestriel: "133,25 $" },
                { situation: "Époux ou conjoint de fait", annuel: "698 $", trimestriel: "174,50 $" },
                { situation: "Par enfant de moins de 19 ans", annuel: "+ 183 $", trimestriel: "+ 45,75 $" },
                { situation: "Personne seule monoparentale (premier enfant)", annuel: "698 $ (au lieu de 533 $)", trimestriel: "174,50 $" },
              ].map((row) => (
                <div key={row.situation} className="flex justify-between text-sm items-start gap-2">
                  <span className="text-blue-900">{row.situation}</span>
                  <span className="font-bold text-blue-800 whitespace-nowrap">{row.annuel}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            * Exemple : une famille monoparentale avec deux enfants reçoit 698 $ + 183 $ = <strong>881 $/an</strong>,
            soit environ <strong>220,25 $ par trimestre</strong>, avant réduction selon le revenu.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment est calculé votre montant réel ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le montant maximum s&apos;applique aux revenus les plus modestes. Au-delà d&apos;un certain seuil, le crédit
            diminue progressivement au taux de <strong>5 %</strong>{" "} du revenu familial net excédentaire jusqu&apos;à
            s&apos;annuler complètement.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-slate-800 mb-3">Seuils d&apos;élimination progressive (2026)</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-700">Personne seule sans enfant</p>
                <p className="text-slate-500">Montant plein sous ~39 826 $ → zéro vers ~50 486 $</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Couple sans enfant</p>
                <p className="text-slate-500">Montant plein sous ~39 826 $ → zéro vers ~53 786 $</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Famille avec 2 enfants</p>
                <p className="text-slate-500">Montant plein sous ~39 826 $ → zéro vers ~62 306 $</p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="font-bold text-amber-800 mb-2">Exemple de calcul</p>
            <p className="text-sm text-amber-900 leading-relaxed">
              Une personne seule avec un revenu net de <strong>45 000 $</strong>{" "} : le revenu excède le seuil de
              39 826 $ par 5 174 $. La réduction est de 5 % × 5 174 $ = <strong>258,70 $</strong>.
              Son crédit annuel est donc de 533 $ − 258,70 $ = <strong>274,30 $</strong>{" "} (environ 68,58 $/trimestre).
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Dates de versement et comment recevoir votre crédit</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit TPS/TVH est versé quatre fois par an, généralement le <strong>5 de chaque mois</strong>{" "} de versement.
            Pour la période 2026–2027, les dates sont :
          </p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { mois: "Juillet 2026", label: "1er versement" },
              { mois: "Octobre 2026", label: "2e versement" },
              { mois: "Janvier 2027", label: "3e versement" },
              { mois: "Avril 2027", label: "4e versement" },
            ].map((v) => (
              <div key={v.mois} className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-center">
                <p className="text-xs text-slate-400">{v.label}</p>
                <p className="font-bold text-slate-700 text-sm">{v.mois}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[
              {
                num: "1",
                titre: "Produisez votre déclaration chaque année",
                texte: "Même avec zéro revenu. L'ARC utilise votre déclaration de l'année précédente pour calculer le crédit de la période suivante.",
              },
              {
                num: "2",
                titre: "Inscrivez-vous au dépôt direct",
                texte: "Connectez-vous à Mon dossier de l'ARC pour activer le dépôt direct et recevoir vos versements rapidement, sans attendre un chèque postal.",
              },
              {
                num: "3",
                titre: "Signalez les changements de situation",
                texte: "Mariage, séparation, naissance d'un enfant — l'ARC doit être informée via Mon dossier pour recalculer votre crédit rapidement.",
              },
              {
                num: "4",
                titre: "Vérifiez votre admissibilité après 19 ans",
                texte: "La première fois, vous devez produire votre déclaration de revenus l'année de vos 19 ans. L'ARC vous inscrit automatiquement pour la période suivante.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">Questions fréquentes sur le crédit TPS/TVH</h2>
          <div className="space-y-4">
            {[
              {
                q: "Pourquoi mon versement est-il moins élevé que prévu ?",
                r: "Votre revenu de l'année précédente a peut-être augmenté, ce qui réduit le crédit. Vérifiez votre avis de détermination du crédit dans Mon dossier de l'ARC.",
              },
              {
                q: "Le crédit est-il imposable ?",
                r: "Non. Le crédit TPS/TVH est entièrement non imposable — vous n'avez pas à le déclarer comme revenu.",
              },
              {
                q: "Je suis nouveau au Canada. Ai-je droit au crédit ?",
                r: "Oui, si vous êtes résident canadien aux fins de l'impôt. Vous devez remplir le formulaire RC151 pour demander le crédit si vous n'avez pas encore produit de déclaration de revenus canadienne.",
              },
              {
                q: "Le crédit peut-il être combiné avec d'autres aides ?",
                r: "Oui. Le crédit TPS/TVH est cumulable avec l'Allocation canadienne pour enfants, le crédit pour la solidarité du Québec, et la plupart des autres aides gouvernementales.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-slate-100 px-4 py-4">
                <p className="font-semibold text-slate-800 text-sm mb-1">{faq.q}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">Crédit TPS/TVH, Allocation canadienne pour enfants, crédit pour la solidarité — faites le calcul complet en 2 minutes.</p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Trouver mes aides →
          </Link>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-taxe-produits-services-taxe-vente-harmonisee-tps-tvh.html"
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
  description: "Montants, seuils d'admissibilité et dates de versement du crédit TPS/TVH en 2026. Découvrez combien vous pouvez recevoir selon votre revenu et situation familiale.",
  date: "2026-09-17",
  categorie: "Fiscal fédéral",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
