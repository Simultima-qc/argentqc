import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "rqap-conge-parental-quebec-2026";

const baseMetadata: Metadata = {
  title: "RQAP 2026 : Congé parental au Québec – montants, durée et procédure",
  description:
    "Tout sur le RQAP en 2026 : régime de base vs particulier, prestations maternité, paternité et parentales, montants hebdomadaires et comment faire votre demande.",
  keywords: ["RQAP 2026", "congé parental Québec", "prestations maternité RQAP", "régime assurance parentale Québec"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/rqap-conge-parental-quebec-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700">Famille</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 5 juin 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            RQAP 2026 : Congé parental au Québec – montants, durée et procédure
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Régime québécois d&apos;assurance parentale (RQAP) est l&apos;un des programmes les plus généreux en Amérique du Nord pour les nouveaux parents.
            En 2026, il verse des prestations allant jusqu&apos;à <strong>1 421 $ par semaine</strong>{" "}à la naissance ou à l&apos;adoption d&apos;un enfant.
            Voici tout ce qu&apos;il faut savoir pour en profiter pleinement.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Admissible dès <strong>2 000 $ de revenus</strong>{" "}dans l&apos;année — salariés ET travailleurs autonomes</li>
            <li>✓ Deux régimes au choix : base (plus de semaines) ou particulier (taux plus élevés)</li>
            <li>✓ Semaines de <strong>paternité exclusives</strong>{" "}et non transférables pour encourager le partage</li>
            <li>✓ Demande en ligne simple — versements aux 2 semaines en 3 à 5 jours ouvrables</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi le RQAP et qui y a droit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le RQAP est un programme provincial qui remplace une partie du revenu des parents québécois lors d&apos;une naissance ou d&apos;une adoption.
            Contrairement au régime fédéral d&apos;assurance-emploi, le RQAP offre des taux de remplacement plus élevés, s&apos;applique
            dès le <strong>premier dollar de revenus de travail</strong>{" "}et couvre aussi les <strong>travailleurs autonomes</strong>.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour y avoir droit en 2026, vous devez remplir quatre conditions :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Résider au Québec", desc: "À la date de naissance ou d'adoption de l'enfant" },
              { titre: "Revenus minimaux de 2 000 $", desc: "Revenus de travail (emploi ou autonome) dans les 52 dernières semaines ou l'année civile précédente" },
              { titre: "Réduction de revenus ou d'heures", desc: "Au moins 40 % de réduction de vos revenus hebdomadaires normaux" },
              { titre: "Lien parental", desc: "Être le père, la mère, le conjoint ou la conjointe de la mère, ou le parent adoptif" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Régime de base ou régime particulier : lequel choisir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le RQAP offre deux options entre lesquelles vous devez choisir au moment de la demande.
            Le choix est définitif pour la naissance ou l&apos;adoption en question.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-4">
            <div className="grid grid-cols-3 bg-slate-800 text-white text-sm font-semibold">
              <div className="px-4 py-3">Type de prestation</div>
              <div className="px-4 py-3 text-center">Régime de base</div>
              <div className="px-4 py-3 text-center">Régime particulier</div>
            </div>
            {[
              { type: "Maternité (mère)", base: "18 sem. à 70 %", part: "15 sem. à 75 %" },
              { type: "Paternité (père)", base: "5 sem. à 70 %", part: "3 sem. à 75 %" },
              { type: "Parentales", base: "7 sem. 70 % + 25 sem. 55 %", part: "25 sem. à 75 %" },
              { type: "Adoption", base: "12 sem. 70 % + 25 sem. 55 %", part: "28 sem. à 75 %" },
            ].map((row, i) => (
              <div key={row.type} className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
                <div className="px-4 py-3 font-medium text-slate-700">{row.type}</div>
                <div className="px-4 py-3 text-center text-slate-600">{row.base}</div>
                <div className="px-4 py-3 text-center text-slate-600">{row.part}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            <strong>Conseil :</strong>{" "}Le régime de base est avantageux si vous souhaitez prendre plus de semaines en congé,
            même à un taux plus faible. Le régime particulier convient mieux si vous préférez un revenu hebdomadaire plus élevé sur une période plus courte.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants des prestations RQAP en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vos prestations sont calculées en fonction de votre <strong>revenu hebdomadaire moyen</strong>{" "}des 26 dernières semaines (ou de l&apos;année précédente pour les travailleurs autonomes),
            jusqu&apos;à concurrence du revenu maximum assurable, fixé à <strong>98 000 $ par année</strong>{" "}en 2026.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Prestations hebdomadaires maximales 2026</p>
            <div className="space-y-2">
              {[
                { taux: "Taux de 75 % (régime particulier)", montant: "1 421 $/semaine" },
                { taux: "Taux de 70 % (régime de base)", montant: "1 327 $/semaine" },
                { taux: "Taux de 55 % (semaines partagées, régime de base)", montant: "1 042 $/semaine" },
              ].map((ligne) => (
                <div key={ligne.taux} className="flex justify-between text-sm">
                  <span className="text-blue-900">{ligne.taux}</span>
                  <span className="font-bold text-blue-800">{ligne.montant}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            * Basé sur le revenu maximum assurable annuel de 98 000 $ (1 884,62 $/semaine). Les montants réels varient selon votre revenu personnel.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Les différents types de prestations expliqués</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                titre: "Prestations de maternité",
                texte: "Réservées exclusivement à la mère biologique. Elles peuvent être prises avant et après l'accouchement. Dans le régime de base, c'est 18 semaines à 70 % ; dans le régime particulier, 15 semaines à 75 %.",
              },
              {
                titre: "Prestations de paternité",
                texte: "Exclusives au père ou au conjoint de la mère. Ces semaines ne peuvent pas être transférées à l'autre parent — si elles ne sont pas utilisées, elles sont perdues. C'est 5 semaines à 70 % (base) ou 3 semaines à 75 % (particulier).",
              },
              {
                titre: "Prestations parentales",
                texte: "Ces semaines peuvent être partagées entre les deux parents comme ils le souhaitent. Dans le régime de base : 7 semaines à 70 % + 25 semaines à 55 %. Dans le régime particulier : 25 semaines à 75 %. Les deux parents peuvent prendre leur congé simultanément.",
              },
              {
                titre: "Prestations d'adoption",
                texte: "Pour les parents adoptifs légaux d'un enfant. Le parent principal reçoit des semaines exclusives semblables aux semaines de maternité. Le tout représente 37 semaines (base) ou 28 semaines (particulier) selon le régime choisi.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-5 py-4">
                <p className="font-semibold text-slate-800 mb-2">{item.titre}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande au RQAP</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Préparez vos documents",
                texte: "Numéro d'assurance sociale, preuve de naissance ou d'adoption, renseignements sur vos revenus des 52 dernières semaines (talons de paie ou avis de cotisation), et coordonnées bancaires pour le dépôt direct.",
              },
              {
                num: "2",
                titre: "Faites la demande en ligne",
                texte: "Rendez-vous sur rqap.gouv.qc.ca. La demande peut être faite jusqu'à 4 semaines avant la naissance prévue ou jusqu'à 4 semaines après la date réelle. Pour l'adoption, jusqu'à 4 semaines après l'arrivée de l'enfant.",
              },
              {
                num: "3",
                titre: "Choisissez votre régime",
                texte: "Pendant la demande, vous devrez choisir entre le régime de base et le régime particulier. Utilisez la calculatrice sur le site du RQAP pour comparer les montants selon votre situation.",
              },
              {
                num: "4",
                titre: "Recevez votre décision",
                texte: "Le RQAP rend généralement sa décision en 3 à 5 jours ouvrables. En cas de problème ou de refus, vous pouvez demander une révision dans les 90 jours suivant la décision.",
              },
              {
                num: "5",
                titre: "Recevez vos versements",
                texte: "Les prestations sont versées toutes les deux semaines par dépôt direct dans votre compte bancaire. Les prestations sont imposables — pensez à demander des retenues à la source pour éviter une surprise au moment de l'impôt.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">Bon à savoir : quelques règles importantes</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Voici quelques points qui surprennent souvent les nouveaux parents :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Délai de carence : zéro",
                desc: "Contrairement à l'assurance-emploi fédérale, il n'y a aucune semaine d'attente au RQAP. Les prestations commencent dès la première semaine admissible.",
              },
              {
                titre: "Grossesse multiple",
                desc: "En cas de jumeaux, triplés ou plus, vous recevez des semaines supplémentaires de prestations parentales partagées.",
              },
              {
                titre: "Naissance ou adoption d'un enfant handicapé",
                desc: "Des semaines supplémentaires peuvent s'appliquer pour les parents d'un enfant ayant une condition médicale particulière.",
              },
              {
                titre: "Travailleurs autonomes",
                desc: "Vous devez avoir cotisé au RQAP sur vos revenus de travail autonome. La cotisation apparaît sur votre déclaration de revenus provinciale.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#060D1A" }} className="text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-slate-300 text-sm mb-4">RQAP, allocations familiales, frais de garde — trouvez tous vos programmes en 2 minutes.</p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-xl"
          >
            Calculer mes aides →
          </Link>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.rqap.gouv.qc.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            rqap.gouv.qc.ca – Régime québécois d&apos;assurance parentale
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
  titre: "RQAP 2026 : Congé parental au Québec – montants, durée et procédure",
  description: "Tout sur le RQAP en 2026 : régime de base vs particulier, prestations maternité, paternité et parentales, montants hebdomadaires et comment faire votre demande.",
  date: "2026-06-05",
  categorie: "Famille",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
