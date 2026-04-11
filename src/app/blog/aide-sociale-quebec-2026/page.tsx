import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aide sociale Québec 2026 : Montants, conditions et comment faire une demande",
  description:
    "Aide sociale et solidarité sociale 2026 : montants selon votre situation, conditions d&apos;admissibilité, démarches de demande et autres avantages inclus.",
  keywords: [
    "aide sociale Québec 2026",
    "montant aide sociale 2026",
    "comment faire demande aide sociale Québec",
    "solidarité sociale Québec",
    "aide de dernier recours Québec",
  ],
};

export default function ArticleAideSociale() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Aide sociale</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 11 avril 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Aide sociale Québec 2026 : Montants, conditions et comment faire une demande
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            L&apos;aide sociale — officiellement appelée aide de dernier recours — est un filet de sécurité
            financier géré par le ministère de l&apos;Emploi et de la Solidarité sociale. En 2026, deux
            programmes distincts existent selon votre situation : le <strong>Programme d&apos;aide sociale</strong>{" "}
            et le <strong>Programme de solidarité sociale</strong>. Voici tout ce que vous devez savoir.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Deux programmes : aide sociale (général) et solidarité sociale (contraintes sévères)</li>
            <li>✓ Montants allant de <strong>780 $ à plus de 1 800 $/mois</strong>{" "} selon votre situation</li>
            <li>✓ Inclut la couverture médicaments (RAMQ) et des aides pour le logement</li>
            <li>✓ Demande en ligne, par téléphone ou en personne — réponse dans 30 jours</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Aide sociale vs solidarité sociale : quelle différence ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Au Québec, l&apos;aide de dernier recours est divisée en deux programmes bien distincts. Le choix
            du programme ne vous appartient pas : c&apos;est votre situation qui détermine lequel s&apos;applique.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Programme d'aide sociale",
                desc: "Pour les personnes sans contraintes à l'emploi ou avec des contraintes temporaires (maladie, blessure, garde d'enfants). On s'attend à ce que vous cherchiez activement du travail ou participiez à des mesures d'emploi.",
              },
              {
                titre: "Programme de solidarité sociale",
                desc: "Pour les personnes ayant des contraintes sévères à l'emploi à long terme (invalidité, maladie chronique, handicap). Les montants sont plus élevés et les exigences de participation au marché du travail ne s'appliquent pas.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 — Montants */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants 2026 selon votre situation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les montants sont indexés chaque année le 1er janvier. Voici les prestations de base estimées pour 2026.
            Des suppléments peuvent s&apos;ajouter selon votre situation (enfants, logement, besoins spéciaux).
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Programme d&apos;aide sociale — montants mensuels estimés 2026</p>
            <div className="space-y-2">
              {[
                { situation: "Personne seule", montant: "~780 $" },
                { situation: "Couple sans enfant", montant: "~1 100 $" },
                { situation: "Famille monoparentale, 1 enfant", montant: "~1 200 $*" },
                { situation: "Couple avec 1 enfant", montant: "~1 450 $*" },
              ].map((ex) => (
                <div key={ex.situation} className="flex justify-between text-sm">
                  <span className="text-blue-900">{ex.situation}</span>
                  <span className="font-bold text-blue-800">{ex.montant}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-700 text-xs mt-3">* Avant l&apos;allocation famille de Retraite Québec, qui peut ajouter plusieurs centaines de dollars.</p>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
            <p className="font-bold text-purple-800 mb-3">Programme de solidarité sociale — montants mensuels estimés 2026</p>
            <div className="space-y-2">
              {[
                { situation: "Personne seule", montant: "~1 220 $" },
                { situation: "Couple (1 personne avec contraintes sévères)", montant: "~1 600 $" },
                { situation: "Couple (2 personnes avec contraintes sévères)", montant: "~1 870 $" },
              ].map((ex) => (
                <div key={ex.situation} className="flex justify-between text-sm">
                  <span className="text-purple-900">{ex.situation}</span>
                  <span className="font-bold text-purple-800">{ex.montant}</span>
                </div>
              ))}
            </div>
            <p className="text-purple-700 text-xs mt-3">Les montants de solidarité sociale sont significativement plus élevés pour tenir compte des limitations à l&apos;emploi.</p>
          </div>
        </section>

        {/* Section 3 — Admissibilité */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui peut faire une demande ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour être admissible à l&apos;aide sociale au Québec, vous devez remplir toutes ces conditions :
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icone: "📍",
                titre: "Résider au Québec",
                texte: "Vous devez résider au Québec et être citoyen canadien, résident permanent, réfugié reconnu ou titulaire de certains statuts d'immigration.",
              },
              {
                icone: "🎂",
                titre: "Avoir 18 ans ou plus",
                texte: "Les jeunes de 16-17 ans peuvent exceptionnellement faire une demande dans certaines situations (émancipation, danger dans le milieu familial).",
              },
              {
                icone: "💸",
                titre: "Avoir des ressources insuffisantes",
                texte: "Vos revenus et avoirs doivent être sous les seuils permis. Pour une personne seule, les avoirs liquides ne peuvent généralement pas dépasser 1 500 $.",
              },
              {
                icone: "🏠",
                titre: "Avoir besoin d'aide financière",
                texte: "Vous ne devez pas être en mesure de subvenir à vos besoins essentiels par vos propres moyens ou par d'autres sources de revenus disponibles.",
              },
            ].map((point) => (
              <div key={point.titre} className="flex gap-4 items-start bg-white rounded-xl border border-slate-100 px-4 py-3">
                <span className="text-xl shrink-0">{point.icone}</span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{point.titre}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{point.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Démarches */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande étape par étape</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Rassemblez vos documents",
                texte: "Pièce d'identité, preuve de résidence au Québec, preuve de statut d'immigration si applicable, relevés bancaires des 3 derniers mois, preuves de tous vos revenus.",
              },
              {
                num: "2",
                titre: "Faites votre demande en ligne, par téléphone ou en personne",
                texte: "En ligne sur le portail Services Québec, par téléphone au 1 877 767-8773, ou en vous rendant dans un centre local d'emploi (CLE) de votre région.",
              },
              {
                num: "3",
                titre: "Participez à l'entrevue",
                texte: "Un agent du ministère vous contactera pour une entrevue afin de valider votre admissibilité. Ayez tous vos documents à portée de main.",
              },
              {
                num: "4",
                titre: "Recevez la décision",
                texte: "La décision est rendue dans un délai de 30 jours. Si vous êtes admissible, les prestations sont versées par dépôt direct chaque dernier jour ouvrable du mois.",
              },
              {
                num: "5",
                titre: "Renouvelez chaque mois",
                texte: "Vous devez signaler mensuellement vos revenus et tout changement de situation (emploi, revenus, logement, composition du ménage) pour continuer à recevoir vos prestations.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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

        {/* Section 5 — Avantages connexes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Les avantages qui viennent avec l&apos;aide sociale</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Recevoir l&apos;aide sociale vous donne automatiquement accès à plusieurs autres avantages importants.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <div className="space-y-3 text-sm">
              {[
                { avantage: "Couverture médicaments (RAMQ)", detail: "Assurance médicaments gratuite pour vous et votre famille — cotisations suspendues" },
                { avantage: "Crédit de solidarité", detail: "Vous avez automatiquement droit au crédit de solidarité provincial (composante habitation et TVQ)" },
                { avantage: "Allocation logement", detail: "Aide supplémentaire si vos frais de logement dépassent un certain pourcentage de vos revenus" },
                { avantage: "Aide au transport", detail: "Remboursement des frais de transport pour vos rendez-vous médicaux ou de recherche d'emploi" },
                { avantage: "Services d'emploi gratuits", detail: "Accès aux centres locaux d'emploi pour formation, aide à la recherche d'emploi et bilan de compétences" },
              ].map((item) => (
                <div key={item.avantage} className="flex gap-3">
                  <span className="text-green-600 font-bold shrink-0">✓</span>
                  <div>
                    <span className="font-semibold text-green-900">{item.avantage}</span>
                    <span className="text-green-800">{" "}— {item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Cumul */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Peut-on travailler tout en recevant l&apos;aide sociale ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Oui — et c&apos;est encouragé. Le Québec prévoit des exemptions de revenus pour ne pas pénaliser
            ceux qui travaillent tout en étant à l&apos;aide sociale. Voici comment ça fonctionne :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Exemptions de revenus de travail (estimées 2026)</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-blue-900">Personne seule</span>
                <span className="font-bold text-blue-800">jusqu&apos;à 200 $/mois exempt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Couple</span>
                <span className="font-bold text-blue-800">jusqu&apos;à 300 $/mois exempt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Famille monoparentale</span>
                <span className="font-bold text-blue-800">jusqu&apos;à 300 $/mois exempt</span>
              </div>
            </div>
            <p className="text-blue-700 text-xs">
              Au-delà de ces seuils, chaque dollar de revenu de travail réduit la prestation d&apos;un dollar.
              Signalez toujours vos revenus — ne pas le faire est considéré comme de la fraude.
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            Des programmes de supplément au salaire comme <strong>Prime au travail</strong>{" "} peuvent aussi
            bonifier vos revenus lors du retour en emploi. Consultez notre{" "}
            <Link href="/credit-impot-quebec" className="text-blue-600 underline">guide des crédits d&apos;impôt</Link>{" "}
            pour en savoir plus.
          </p>
        </section>

        {/* CTA */}
        <div style={{ background: "#060D1A" }} className="text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            Au-delà de l&apos;aide sociale, il existe des dizaines de programmes provinciaux et fédéraux.
            Répondez à quelques questions pour voir ce qui s&apos;applique à votre situation.
          </p>
          <Link
            href="/questionnaire"
            className="inline-block font-bold px-6 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
          >
            Trouver mes aides →
          </Link>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale/aide-sociale-et-solidarite-sociale"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            quebec.ca – Aide sociale et solidarité sociale
          </a>
        </p>
      </article>

      <footer style={{ background: "#060D1A", padding: "24px 16px", marginTop: "16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F5C842", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement. Les montants sont des estimations.</p>
          <a href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</a>
        </div>
      </footer>
    </main>
  );
}
