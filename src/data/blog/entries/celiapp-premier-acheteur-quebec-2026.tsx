import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "celiapp-premier-acheteur-quebec-2026";

const baseMetadata: Metadata = {
  title: "CELIAPP 2026 : Épargnez 40 000 $ libre d'impôt pour votre première maison",
  description:
    "Tout sur le CELIAPP en 2026 : plafond de 8 000 $ par an, cumul à vie de 40 000 $, droits reportables, cumul avec le RAP et comment ouvrir votre compte.",
  keywords: ["CELIAPP 2026", "compte épargne premier acheteur", "CELIAPP montant", "CELIAPP RAP cumul", "premier acheteur maison Québec"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/celiapp-premier-acheteur-quebec-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Achat immobilier</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 29 mai 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            CELIAPP 2026 : Épargnez 40 000 $ libre d&apos;impôt pour votre première maison
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Compte d&apos;épargne libre d&apos;impôt pour l&apos;achat d&apos;une première propriété (CELIAPP) est
            l&apos;outil d&apos;épargne le plus puissant jamais créé pour les premiers acheteurs canadiens.
            En 2026, vous pouvez accumuler jusqu&apos;à <strong>40 000 $</strong>{" "} complètement libre d&apos;impôt
            — et déduire vos cotisations comme un REER. Voici tout ce que vous devez savoir.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Cotisation maximale de <strong>8 000 $ par année</strong>, plafond à vie de <strong>40 000 $</strong></li>
            <li>✓ Retraits non imposables si utilisés pour l&apos;achat d&apos;une première propriété</li>
            <li>✓ Cotisations déductibles du revenu imposable (comme un REER)</li>
            <li>✓ Cumulable avec le RAP du REER pour maximiser votre mise de fonds</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que le CELIAPP ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Lancé en 2023 par le gouvernement fédéral, le CELIAPP combine les avantages du CELI et du REER
            dans un seul compte destiné exclusivement à l&apos;achat d&apos;une première propriété.
            C&apos;est littéralement le meilleur des deux mondes :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Comme un REER", desc: "Vos cotisations sont déductibles de votre revenu imposable — vous récupérez de l'impôt maintenant" },
              { titre: "Comme un CELI", desc: "Les retraits admissibles ne sont pas imposables — vous ne payez aucun impôt à la sortie" },
              { titre: "Croissance libre d'impôt", desc: "Les intérêts, dividendes et gains en capital accumulés dans le compte ne sont jamais imposés" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed">
            Pour un acheteur dans une tranche d&apos;imposition de 40 %, cotiser <strong>8 000 $</strong>{" "} dans
            un CELIAPP génère un remboursement d&apos;impôt d&apos;environ <strong>3 200 $</strong>. Ce montant
            peut ensuite être réinvesti dans le CELIAPP l&apos;année suivante, créant un puissant effet boule de neige.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui peut ouvrir un CELIAPP ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour être admissible, vous devez répondre à <strong>toutes</strong>{" "} ces conditions :
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                num: "1",
                titre: "Être résident canadien",
                texte: "Vous devez être résident du Canada aux fins fiscales au moment de l'ouverture du compte.",
              },
              {
                num: "2",
                titre: "Avoir 18 à 71 ans",
                texte: "Vous devez avoir au moins 18 ans (l'âge de la majorité dans votre province) et moins de 71 ans.",
              },
              {
                num: "3",
                titre: "Être un premier acheteur",
                texte: "Vous ne devez pas avoir été propriétaire d'une résidence principale au cours des 4 dernières années civiles (ni votre conjoint, si applicable).",
              },
              {
                num: "4",
                titre: "Avoir l'intention d'habiter la propriété",
                texte: "La propriété achetée doit devenir votre résidence principale dans l'année suivant l'achat.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Plafonds et droits inutilisés reportables</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Les chiffres clés 2026</p>
            <div className="space-y-2">
              {[
                { label: "Cotisation annuelle maximale", valeur: "8 000 $" },
                { label: "Plafond à vie total", valeur: "40 000 $" },
                { label: "Droits inutilisés reportables", valeur: "Oui, jusqu'à 8 000 $ de plus" },
                { label: "Durée maximale du compte", valeur: "15 ans (ou jusqu'à 71 ans)" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-blue-900">{row.label}</span>
                  <span className="font-bold text-blue-800">{row.valeur}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            Si vous n&apos;avez pas cotisé le maximum une année, vous pouvez reporter jusqu&apos;à
            <strong> 8 000 $</strong>{" "} de droits inutilisés à l&apos;année suivante. Attention : le report
            est limité à <strong>8 000 $ au total</strong>, peu importe le nombre d&apos;années où vous avez
            sous-cotisé. Il n&apos;est donc pas possible de reporter plusieurs années simultanément.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Exemple concret : vous ouvrez un CELIAPP en 2024 et cotisez seulement 3 000 $. En 2025,
            vous pouvez cotiser 8 000 $ (votre limite normale) + 5 000 $ de droits reportés = <strong>13 000 $</strong>{" "} en une seule année.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">CELIAPP + RAP : la combinaison gagnante</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le CELIAPP est entièrement cumulable avec le Régime d&apos;accession à la propriété (RAP) du REER.
            Cela signifie que vous pouvez utiliser <strong>les deux en même temps</strong>{" "} pour votre achat.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-green-800 mb-3">Exemple : mise de fonds maximale combinée</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-green-900">CELIAPP (retrait non imposable)</span>
                <span className="font-bold text-green-800">jusqu&apos;à 40 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">RAP REER (retrait remboursable)</span>
                <span className="font-bold text-green-800">jusqu&apos;à 35 000 $</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Total combiné possible</span>
                <span className="font-extrabold text-green-800 text-base">jusqu&apos;à 75 000 $ par personne</span>
              </div>
            </div>
            <p className="text-green-700 text-xs">Pour un couple de deux premiers acheteurs : jusqu&apos;à 150 000 $ combinés.</p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            La grande différence : le retrait CELIAPP n&apos;a pas à être remboursé (contrairement au RAP,
            qui doit être remboursé sur 15 ans). C&apos;est un avantage considérable qui réduit vos
            obligations financières après l&apos;achat.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire un retrait admissible ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour que votre retrait soit non imposable, vous devez remplir ces conditions au moment du retrait :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Avoir un accord d'achat signé", desc: "Vous devez avoir conclu une entente écrite pour acheter ou faire construire une propriété admissible" },
              { titre: "Ne pas avoir habité une propriété que vous possédiez", desc: "Vous (et votre conjoint) n'avez pas habité une propriété vous appartenant dans les 4 années précédentes" },
              { titre: "Habiter la propriété dans l'année", desc: "Vous devez avoir l'intention d'habiter la propriété comme résidence principale dans l'année suivant l'achat" },
              { titre: "Retrait avant le 1er octobre", desc: "Pour acheter avant la fin d'une année, le retrait doit être fait avant le 1er octobre de cette même année" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            Si vous ne pouvez pas faire un retrait admissible (ex. : vous n&apos;achetez finalement pas),
            les fonds peuvent être transférés dans un REER sans impact fiscal — vous ne perdez pas vos économies.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment ouvrir un CELIAPP ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            L&apos;ouverture d&apos;un CELIAPP est simple et disponible dans la plupart des institutions financières :
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Choisissez une institution financière",
                texte: "Banques (RBC, TD, BMO, BNC, Desjardins…), courtiers en ligne (Wealthsimple, Questrade…) et compagnies d'assurance offrent le CELIAPP. Comparez les frais et les options de placement.",
              },
              {
                num: "2",
                titre: "Ouvrez le compte",
                texte: "Vous pouvez le faire en ligne en quelques minutes. Vous aurez besoin de votre NAS, d'une pièce d'identité et d'informations sur votre situation fiscale.",
              },
              {
                num: "3",
                titre: "Faites votre première cotisation",
                texte: "Même 1 $ suffit pour « activer » votre CELIAPP et faire partir l'horloge des 15 ans. N'attendez pas d'avoir 8 000 $ — ouvrez-le maintenant.",
              },
              {
                num: "4",
                titre: "Choisissez vos placements",
                texte: "CPG, fonds de placement, actions, ETF — les mêmes placements qu'un CELI ou REER sont admissibles. Adaptez selon votre horizon d'achat.",
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

        {/* CTA */}
        <div className="bg-blue-700 text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">CELIAPP, RAP, crédit TPS/TVH, allocations — trouvez en 2 minutes toutes les aides disponibles pour votre situation.</p>
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
            href="https://www.canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/impot-pret-premier-logement.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Canada.ca – CELIAPP
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
  titre: "CELIAPP 2026 : Épargnez 40 000 $ libre d'impôt pour votre première maison",
  description: "Tout sur le CELIAPP en 2026 : plafond de 8 000 $ par an, cumul à vie de 40 000 $, droits inutilisés reportables, cumul avec le RAP et comment ouvrir votre compte dès aujourd'hui.",
  date: "2026-05-29",
  categorie: "Achat immobilier",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
