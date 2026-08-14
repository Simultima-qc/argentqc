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
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · Publié le 5 juin 2026 · Vérifié le 14 août 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            RQAP 2026 : Congé parental au Québec – montants, durée et procédure
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Régime québécois d&apos;assurance parentale (RQAP) remplace une partie du revenu lors d&apos;une grossesse,
            d&apos;une naissance ou d&apos;une adoption. Selon le type de prestation et le régime choisi, le taux est de
            <strong> 55 %, 70 % ou 75 %</strong>, jusqu&apos;au revenu maximal assurable de <strong>103 000 $ en 2026</strong>.
            Voici les règles à vérifier avant de faire une demande.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Revenu assurable minimal : <strong>2 000 $ pendant la période de référence</strong>, sans minimum d&apos;heures</li>
            <li>✓ Deux régimes au choix : base (plus de semaines) ou particulier (taux plus élevés)</li>
            <li>✓ Prestations exclusives à chaque parent et prestations partageables, selon la situation</li>
            <li>✓ Décision généralement rendue dans les <strong>5 jours ouvrables</strong>{" "}suivant la réception de tous les renseignements requis</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi le RQAP et qui y a droit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le RQAP est un programme provincial qui remplace une partie du revenu des parents québécois lors d&apos;une naissance ou d&apos;une adoption.
            Il couvre notamment les travailleurs salariés et autonomes qui satisfont aux conditions d&apos;admissibilité.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour y avoir droit en 2026, vous devez remplir quatre conditions :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Résider au Québec", desc: "À la date de début de la période de prestations; une règle additionnelle s'applique aux travailleurs autonomes" },
              { titre: "Revenu assurable d'au moins 2 000 $", desc: "Pendant la période de référence, peu importe le nombre d'heures travaillées" },
              { titre: "Avoir cotisé", desc: "Avoir payé ou devoir payer des cotisations au RQAP ou à l'assurance-emploi pendant la période de référence" },
              { titre: "Cesser ou réduire le travail", desc: "Pour un salarié : revenu hebdomadaire réduit d'au moins 40 %; pour un autonome : temps d'activité réduit d'au moins 40 %" },
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
              { type: "Grossesse ou accouchement", base: "18 sem. à 70 %", part: "15 sem. à 75 %" },
              { type: "Parent qui n'a pas donné naissance", base: "5 sem. à 70 %", part: "3 sem. à 75 %" },
              { type: "Parentales", base: "7 sem. 70 % + 25 sem. 55 %", part: "25 sem. à 75 %" },
              { type: "Adoption — exclusives", base: "5 sem. par parent à 70 %", part: "3 sem. par parent à 75 %" },
              { type: "Adoption — accueil et soutien", base: "13 sem. à 70 %", part: "12 sem. à 75 %" },
              { type: "Adoption — partageables", base: "7 sem. 70 % + 25 sem. 55 %", part: "25 sem. à 75 %" },
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
            Vos prestations sont calculées en fonction de votre <strong>revenu hebdomadaire moyen</strong>. Pour un salarié,
            le calcul repose habituellement sur la moyenne des 26 dernières semaines de revenu assurable de la période de référence.
            Pour un travailleur autonome, il repose généralement sur 1/52 des revenus assurables de l&apos;année civile de référence.
            Le revenu maximal assurable est fixé à <strong>103 000 $ en 2026</strong>.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Exemples de calcul sur un revenu hebdomadaire moyen de 1 000 $</p>
            <div className="space-y-2">
              {[
                { taux: "Taux de 75 % (régime particulier)", montant: "750 $/semaine" },
                { taux: "Taux de 70 % (régime de base)", montant: "700 $/semaine" },
                { taux: "Taux de 55 % (semaines partagées, régime de base)", montant: "550 $/semaine" },
              ].map((ligne) => (
                <div key={ligne.taux} className="flex justify-between text-sm">
                  <span className="text-blue-900">{ligne.taux}</span>
                  <span className="font-bold text-blue-800">{ligne.montant}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            * Exemples arithmétiques, non estimations personnalisées. Le simulateur officiel et la décision du RQAP déterminent le montant réel.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Les différents types de prestations expliqués</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                titre: "Prestations de maternité",
                texte: "Réservées à la personne qui a vécu la grossesse ou l'accouchement. Elles peuvent être prises avant et après l'accouchement. Le régime de base offre 18 semaines à 70 %; le régime particulier, 15 semaines à 75 %.",
              },
              {
                titre: "Prestations au parent qui n'a pas donné naissance",
                texte: "Exclusives au parent qui n'a pas donné naissance et qui assure une présence régulière auprès de l'enfant. Le régime de base offre 5 semaines à 70 %; le régime particulier, 3 semaines à 75 %.",
              },
              {
                titre: "Prestations parentales",
                texte: "Ces semaines peuvent être partagées entre les parents. Dans le régime de base : 7 semaines à 70 % + 25 semaines à 55 %. Dans le régime particulier : 25 semaines à 75 %. Des semaines additionnelles s'ajoutent lorsque chaque parent reçoit au moins 8 semaines partageables au régime de base, ou 6 au régime particulier.",
              },
              {
                titre: "Prestations d'adoption",
                texte: "Chaque parent adoptant peut recevoir 5 semaines exclusives à 70 % au régime de base, ou 3 à 75 % au régime particulier. S'ajoutent des prestations partageables d'accueil et de soutien ainsi que des prestations d'adoption partageables.",
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
                texte: "Préparez les renseignements demandés selon votre statut. Un salarié doit notamment déclarer son revenu d'emploi brut et le nombre de relevés d'emploi attendus; un travailleur autonome doit déclarer le revenu net d'entreprise pertinent.",
              },
              {
                num: "2",
                titre: "Transmettez votre demande",
                texte: "Faites votre demande en ligne ou par téléphone. Elle peut être transmise au plus tôt le dimanche de la semaine où vous voulez commencer les prestations. Jusqu'à 6 semaines passées peuvent être accordées sans justification; au-delà, certaines semaines pourraient être perdues.",
              },
              {
                num: "3",
                titre: "Choisissez votre régime",
                texte: "Pendant la demande, vous devrez choisir entre le régime de base et le régime particulier. Utilisez la calculatrice sur le site du RQAP pour comparer les montants selon votre situation.",
              },
              {
                num: "4",
                titre: "Recevez votre décision",
                texte: "Le RQAP rend généralement sa décision dans les 5 jours ouvrables suivant la réception de tous les renseignements requis. Vous pouvez demander une révision dans les 90 jours suivant la réception d'un avis de décision.",
              },
              {
                num: "5",
                titre: "Recevez vos versements",
                texte: "Un versement effectué le dimanche couvre deux semaines civiles. Par dépôt direct, les fonds arrivent généralement 3 à 4 jours après le traitement. Des retenues d'impôt sont appliquées et peuvent être ajustées sur demande.",
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
                desc: "Chaque parent peut recevoir 5 semaines exclusives supplémentaires à 70 % au régime de base ou 3 semaines à 75 % au régime particulier.",
              },
              {
                titre: "Parent seul",
                desc: "Le seul parent mentionné à l'acte de naissance peut recevoir 5 semaines exclusives à 70 % au régime de base ou 3 semaines à 75 % au régime particulier.",
              },
              {
                titre: "Travailleurs autonomes",
                desc: "Vous devez avoir payé ou devoir payer des cotisations et réduire d'au moins 40 % le temps consacré à vos activités d'entreprise.",
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
            href="https://www.quebec.ca/famille-et-soutien-aux-personnes/grossesse-parentalite/aide-financiere-prestations/regime-quebecois-assurance-parentale"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Québec.ca – Régime québécois d&apos;assurance parentale
          </a>
        </p>
      </article>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement. Les exemples ne remplacent pas le calcul officiel du RQAP."
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
