import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "reee-subvention-epargne-etudes-2026";

const baseMetadata: Metadata = {
  title: "REEE 2026 : Épargner pour les études avec les subventions gouvernementales",
  description:
    "Tout sur le REEE en 2026 : SCEE fédérale (20 %, max 500 $/an), IQEE Québec (10 %), Bon d'études canadien, types de régimes et comment maximiser les subventions.",
  keywords: ["REEE 2026", "subvention études", "SCEE 2026", "IQEE Québec", "épargne-études enfant"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/reee-subvention-epargne-etudes-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Études</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 17 juin 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            REEE 2026 : Épargner pour les études avec les subventions gouvernementales
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Régime enregistré d&apos;épargne-études (REEE) est l&apos;un des outils d&apos;épargne les plus avantageux
            au Canada. En 2026, le gouvernement fédéral et le Québec offrent ensemble jusqu&apos;à{" "}
            <strong>750 $ de subventions par année</strong>{" "}pour chaque enfant — de l&apos;argent gratuit que
            des milliers de familles québécoises laissent sur la table.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>📚 SCEE fédérale : <strong>20 % sur les premiers 2 500 $/an</strong>, jusqu&apos;à 500 $ par enfant</li>
            <li>🏛️ IQEE Québec : <strong>10 % supplémentaires</strong>, jusqu&apos;à 250 $ par enfant par année</li>
            <li>🎁 Bon d&apos;études canadien : jusqu&apos;à <strong>2 000 $</strong>{" "} pour les familles à faible revenu, sans cotisation requise</li>
            <li>📅 Les droits de subvention sont reportables jusqu&apos;à l&apos;année des 17 ans de l&apos;enfant</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce qu&apos;un REEE ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Un REEE est un compte d&apos;épargne enregistré auprès du gouvernement fédéral, conçu spécifiquement
            pour financer les études postsecondaires d&apos;un enfant. Contrairement au REER, les cotisations
            ne sont pas déductibles d&apos;impôt, mais les <strong>revenus de placement s&apos;accumulent à l&apos;abri
            de l&apos;impôt</strong>{" "}jusqu&apos;au retrait.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le grand avantage du REEE tient aux subventions gouvernementales qui s&apos;y greffent
            automatiquement. En cotisant régulièrement, vous obtenez des sommes supplémentaires de
            l&apos;État sans rien faire de plus.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le plafond de cotisation à vie est de <strong>50 000 $ par bénéficiaire</strong>. Il n&apos;y a
            pas de plafond annuel de cotisation, mais les subventions sont calculées sur les premiers
            2 500 $ versés chaque année.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">La SCEE : 500 $ gratuits par année du fédéral</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La <strong>Subvention canadienne pour l&apos;épargne-études (SCEE)</strong>{" "}est versée automatiquement
            par le gouvernement fédéral dans le REEE de votre enfant dès que vous cotisez.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">SCEE de base — Tous les Canadiens</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-900">Taux de base</span>
                <span className="font-bold text-blue-800">20 % de la cotisation annuelle</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Cotisation maximale admissible</span>
                <span className="font-bold text-blue-800">2 500 $/an</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Subvention maximale par année</span>
                <span className="font-bold text-blue-800">500 $/an</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Plafond à vie</span>
                <span className="font-bold text-blue-800">7 200 $</span>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            Les familles à revenu faible ou moyen ont accès à une <strong>SCEE supplémentaire</strong>{" "}:
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Revenu familial ≤ 55 867 $ (2026)",
                desc: "20 % additionnels sur les premiers 500 $ cotisés = 100 $ de plus par année",
              },
              {
                titre: "Revenu familial entre 55 867 $ et 111 733 $",
                desc: "10 % additionnels sur les premiers 500 $ cotisés = 50 $ de plus par année",
              },
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">L&apos;IQEE : 250 $ supplémentaires par année du Québec</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le Québec offre en plus l&apos;<strong>Incitatif québécois à l&apos;épargne-études (IQEE)</strong>,
            un bonus provincial qui s&apos;ajoute automatiquement à la SCEE fédérale.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">IQEE — Résidents du Québec</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-900">Taux de base</span>
                <span className="font-bold text-blue-800">10 % de la cotisation annuelle</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Cotisation maximale admissible</span>
                <span className="font-bold text-blue-800">2 500 $/an</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Subvention maximale par année</span>
                <span className="font-bold text-blue-800">250 $/an</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Plafond à vie</span>
                <span className="font-bold text-blue-800">3 600 $</span>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Les familles québécoises à revenu plus modeste reçoivent également un IQEE supplémentaire
            de <strong>5 % ou 10 % additionnels</strong>{" "}sur les premiers 500 $ cotisés, selon le revenu familial.
            En combinant SCEE et IQEE de base, un parent québécois qui cotise 2 500 $ par année
            reçoit automatiquement <strong>750 $ de subventions</strong>{" "}(500 $ + 250 $).
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le Bon d&apos;études canadien : jusqu&apos;à 2 000 $ sans cotisation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le <strong>Bon d&apos;études canadien (BEC)</strong>{" "}est une aide réservée aux familles à faible revenu.
            Contrairement à la SCEE et à l&apos;IQEE, vous n&apos;avez pas besoin de cotiser quoi que ce soit
            pour le recevoir — le gouvernement dépose directement l&apos;argent dans le REEE.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Versement initial",
                desc: "500 $ lors de l'ouverture du REEE (si admissible lors de la naissance)",
              },
              {
                titre: "Versements annuels",
                desc: "100 $ par année jusqu'à l'âge de 15 ans de l'enfant",
              },
              {
                titre: "Maximum à vie",
                desc: "2 000 $ par enfant",
              },
              {
                titre: "Admissibilité",
                desc: "Familles qui reçoivent la prestation maximale ou réduite de l'Allocation canadienne pour enfants (ACE)",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            Des milliers de familles admissibles ne reçoivent pas le BEC simplement parce qu&apos;elles
            n&apos;ont pas ouvert de REEE. L&apos;ouverture d&apos;un REEE est gratuite auprès de la plupart des
            institutions financières et ne nécessite aucune cotisation initiale.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Individuel, familial ou collectif : quel type choisir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Il existe trois types de REEE, chacun adapté à des situations différentes :
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "REEE individuel",
                texte: "Ouvert pour un seul bénéficiaire. Tout le monde peut y cotiser (parents, grands-parents, oncles, amis). Le plus flexible : si l'enfant ne poursuit pas ses études, les règles de retrait sont simples. Recommandé pour la majorité des familles.",
              },
              {
                num: "2",
                titre: "REEE familial",
                texte: "Regroupe plusieurs bénéficiaires liés par le sang ou l'adoption. Les subventions et revenus peuvent être partagés entre les frères et sœurs. Avantageux si vous avez plusieurs enfants, car les fonds non utilisés par un enfant profitent aux autres.",
              },
              {
                num: "3",
                titre: "REEE collectif (plan de groupe)",
                texte: "Offert par des fondations spécialisées (ex. : Universitas, Heritage). Les cotisations sont regroupées avec celles d'autres familles. Très encadré, avec des règles rigides sur le calendrier de cotisation et les retraits. Peu recommandé en raison de la faible flexibilité et des frais élevés.",
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien vaut un REEE sur 18 ans ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Voici ce qu&apos;un parent québécois peut accumuler en cotisant <strong>208 $/mois</strong>{" "}(soit 2 500 $/an)
            dès la naissance, avec un rendement moyen de 5 % :
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 mb-3">Simulation sur 18 ans — Cotisation de 2 500 $/an</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-green-900">Total des cotisations</span>
                <span className="font-bold text-green-800">45 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">SCEE fédérale cumulée</span>
                <span className="font-bold text-green-800">7 200 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">IQEE Québec cumulée</span>
                <span className="font-bold text-green-800">3 600 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">Rendement estimé (5 %)</span>
                <span className="font-bold text-green-800">~28 000 $</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Total approximatif à 18 ans</span>
                <span className="font-extrabold text-green-800 text-base">~84 000 $</span>
              </div>
            </div>
            <p className="text-green-700 text-xs">
              * Simulation à titre indicatif. Le rendement réel varie selon les placements choisis.
              Les droits de subvention inutilisés peuvent être récupérés les années suivantes.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#0F1E3C" }} className="text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">
            REEE, allocations familiales, crédits d&apos;impôt — notre questionnaire gratuit dresse votre portrait complet en 2 minutes.
          </p>
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
            href="https://www.canada.ca/fr/services/prestations/education/epargne-etudes.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca – Épargne-études
          </a>
          {" "}·{" "}
          <a
            href="https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/incitatif-quebecois-a-lepargne-etudes/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            revenuquebec.ca – IQEE
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
  titre: "REEE 2026 : Épargner pour les études avec les subventions gouvernementales",
  description:
    "Tout sur le REEE en 2026 : SCEE fédérale (20 %, max 500 $/an), IQEE Québec (10 %), Bon d'études canadien pour familles à faible revenu, et types de régimes.",
  date: "2026-06-17",
  categorie: "Études",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
