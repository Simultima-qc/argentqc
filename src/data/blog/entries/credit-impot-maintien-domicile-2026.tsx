import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-impot-maintien-domicile-2026";

const baseMetadata: Metadata = {
  title: "Crédit d&apos;impôt pour maintien à domicile 2026 : Jusqu&apos;à 6 000 $ pour les 70 ans et plus",
  description:
    "Tout sur le crédit d&apos;impôt pour maintien à domicile des aînés en 2026 : services admissibles, taux de 36 % ou 38 %, plafond annuel et comment faire votre demande.",
  keywords: [
    "crédit impôt maintien domicile 2026",
    "crédit maintien domicile aînés",
    "aide ménagère crédit impôt Québec",
    "maintien à domicile 70 ans Québec",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-impot-maintien-domicile-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Aînés</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 1 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit d&apos;impôt pour maintien à domicile 2026 : Jusqu&apos;à 6 000 $ pour les 70 ans et plus
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Si vous avez 70 ans ou plus et que vous payez des services pour rester chez vous,
            le gouvernement du Québec vous rembourse une partie de ces dépenses.
            Ce crédit d&apos;impôt remboursable peut atteindre <strong>6 000 $ par année</strong>{" "}
            — et il est souvent ignoré par ceux qui en ont le plus besoin.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Crédit <strong>remboursable</strong>{" "} de 36 % (autonome) ou 38 % (non autonome) des dépenses admissibles</li>
            <li>✓ Disponible dès <strong>70 ans</strong>, que vous soyez propriétaire ou locataire</li>
            <li>✓ Services admissibles : aide ménagère, repas, soins personnels, entretien extérieur</li>
            <li>✓ Demande faite automatiquement dans votre déclaration de revenus québécoise (TP-1)</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi ce crédit d&apos;impôt ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit d&apos;impôt pour maintien à domicile des aînés est une mesure fiscale du gouvernement du Québec
            qui vise à aider les personnes âgées à demeurer dans leur domicile le plus longtemps possible.
            En remboursant une portion des frais de services à domicile, il réduit le fardeau financier lié
            au vieillissement à la maison.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Contrairement à un crédit ordinaire qui réduit simplement votre impôt à payer, ce crédit est
            <strong> remboursable</strong>{" "} : même si vous ne payez aucun impôt, vous recevez quand même le montant
            auquel vous avez droit. Il peut être versé par anticipation chaque trimestre pour alléger votre budget
            tout au long de l&apos;année.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui peut demander ce crédit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour être admissible, vous devez remplir les conditions suivantes :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Âge minimum", desc: "Avoir 70 ans ou plus à un moment quelconque de l'année d'imposition" },
              { titre: "Résidence au Québec", desc: "Être résident du Québec le 31 décembre de l'année visée" },
              { titre: "Type de logement", desc: "Vivre dans votre domicile ordinaire (maison, condo, appartement) — non admissible en CHSLD ou en résidence avec services inclus dans le loyer" },
              { titre: "Dépenses payées", desc: "Avoir payé des services à domicile admissibles à des prestataires de services (personnes ou entreprises)" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quels services sont admissibles ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Une large gamme de services est couverte, pourvu qu&apos;ils soient liés au maintien à domicile.
            Voici les principales catégories :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Aide ménagère", desc: "Nettoyage de la maison, lavage de vitres, entretien intérieur général" },
              { titre: "Préparation de repas", desc: "Livraison de repas à domicile ou aide à la cuisine" },
              { titre: "Soins personnels", desc: "Aide pour la toilette, l'habillage, les soins d'hygiène" },
              { titre: "Entretien extérieur", desc: "Déneigement, tonte du gazon, entretien de la cour (dans certaines limites)" },
              { titre: "Surveillance et assistance", desc: "Services de téléassistance, accompagnement, aide à la mobilité" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Les services purement médicaux remboursés par la RAMQ et les frais d&apos;hébergement en résidence ne sont pas admissibles.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien pouvez-vous recevoir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le taux du crédit varie selon votre niveau d&apos;autonomie, déterminé par Retraite Québec :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Taux et plafonds 2026</p>
            <div className="space-y-3">
              {[
                {
                  type: "Personne autonome (70 ans et plus)",
                  taux: "36 %",
                  plafond: "19 500 $/an",
                  max: "~6 000 $",
                },
                {
                  type: "Personne non autonome",
                  taux: "38 %",
                  plafond: "25 500 $/an",
                  max: "~9 700 $",
                },
              ].map((ex) => (
                <div key={ex.type} className="bg-white rounded-xl border border-blue-100 px-4 py-3">
                  <p className="font-semibold text-blue-900 text-sm mb-1">{ex.type}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-blue-700">Taux : <strong>{ex.taux}</strong></span>
                    <span className="text-blue-700">Dépenses max : <strong>{ex.plafond}</strong></span>
                    <span className="text-blue-800">Crédit max : <strong>{ex.max}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            <strong>Exemple concret :</strong> {" "}
            Madeleine, 78 ans, autonome, paie 500 $/mois pour de l&apos;aide ménagère et des repas livrés,
            soit 6 000 $ par année. Elle reçoit <strong>36 % × 6 000 $ = 2 160 $</strong>{" "} de crédit.
            Si ses dépenses atteignent le plafond de 19 500 $, elle touche le maximum de <strong>7 020 $</strong>.
          </p>
          <p className="text-slate-500 text-sm">
            * Le crédit n&apos;est pas réduit en fonction du revenu : même une personne à revenu élevé y a droit au même taux.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande ?</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Conservez vos reçus tout au long de l'année",
                texte: "Gardez les factures de tous vos fournisseurs de services à domicile : aide ménagère, repas, soins, entretien. Ces documents sont nécessaires en cas de vérification.",
              },
              {
                num: "2",
                titre: "Remplissez l'annexe J dans votre déclaration TP-1",
                texte: "Au moment de produire votre déclaration de revenus québécoise, remplissez l'annexe J (Crédit d'impôt pour maintien à domicile des aînés). La plupart des logiciels fiscaux (ImpôtRapide, H&R Block, etc.) vous guident automatiquement.",
              },
              {
                num: "3",
                titre: "Optez pour les versements anticipés",
                texte: "Plutôt que d'attendre votre remboursement après votre déclaration, vous pouvez demander à Revenu Québec de verser le crédit trimestriellement. Faites la demande via Mon dossier sur le site de Revenu Québec.",
              },
              {
                num: "4",
                titre: "Recevez votre remboursement",
                texte: "Si vous avez opté pour les versements anticipés, vous recevez le crédit quatre fois par an (en janvier, avril, juillet et octobre). Sinon, il est inclus dans votre remboursement d'impôt annuel.",
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">Ce que beaucoup ignorent : le cumul avec d&apos;autres aides</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit d&apos;impôt pour maintien à domicile se cumule avec plusieurs autres programmes :
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 mb-3">Exemple de combinaison d&apos;aides</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-green-900">Crédit maintien à domicile</span>
                <span className="font-bold text-green-800">jusqu&apos;à 6 000 $/an</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">Supplément de revenu garanti (fédéral)</span>
                <span className="font-bold text-green-800">jusqu&apos;à 14 500 $/an</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">Allocation-logement Québec</span>
                <span className="font-bold text-green-800">jusqu&apos;à 2 040 $/an</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Total potentiel cumulé</span>
                <span className="font-extrabold text-green-800 text-base">plus de 22 500 $/an</span>
              </div>
            </div>
            <p className="text-green-700 text-xs">Les montants dépendent de votre revenu et de votre situation personnelle.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-700 text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">Maintien à domicile, Supplément de revenu garanti, allocation-logement — calculez votre total en 2 minutes.</p>
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
            href="https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-maintien-a-domicile-des-aines/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Revenu Québec – Crédit d&apos;impôt pour maintien à domicile des aînés
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
  titre: "Crédit d'impôt pour maintien à domicile 2026 : Jusqu'à 6 000 $ pour les 70 ans et plus",
  description:
    "Tout sur le crédit d'impôt pour maintien à domicile des aînés en 2026 : services admissibles, taux de 36 % ou 38 %, plafond annuel et comment faire votre demande.",
  date: "2026-07-01",
  categorie: "Aînés",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
