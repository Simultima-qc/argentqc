import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "assurance-emploi-guide-complet-2026";

const baseMetadata: Metadata = {
  title: "Assurance-emploi 2026 : Conditions, montants et comment faire votre demande",
  description:
    "Guide complet sur l'assurance-emploi en 2026 : heures requises selon votre région, taux de 55 %, durée des prestations, délai de carence et comment soumettre votre demande en ligne.",
  keywords: ["assurance-emploi 2026", "AE 2026", "heures assurables", "prestations assurance-emploi", "comment faire demande AE"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/assurance-emploi-guide-complet-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Emploi</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · Publié le 1 juin 2026 · Vérifié le 8 août 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Assurance-emploi 2026 : Conditions, montants et comment faire votre demande
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Vous venez de perdre votre emploi ou vous anticipez une mise à pied ? L&apos;assurance-emploi (AE) peut vous verser
            jusqu&apos;à <strong>729 $/semaine</strong>{" "}pour vous soutenir pendant votre transition. Mais les conditions sont
            strictes — voici tout ce que vous devez savoir en 2026.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Taux de prestations : <strong>55 % de votre salaire assurable</strong></li>
            <li>✓ Maximum : <strong>729 $/semaine</strong>{" "} (plafond de rémunération assurable : 68 900 $/an)</li>
            <li>✓ Heures requises : de <strong>420 à 700 heures</strong>{" "} selon votre région</li>
            <li>✓ Délai de carence habituel temporairement annulé pour les demandes commençant au plus tard le 10 octobre 2026</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi l&apos;assurance-emploi ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;assurance-emploi est un programme fédéral administré par Service Canada qui offre un soutien financier temporaire
            aux travailleurs qui ont perdu leur emploi sans en être responsables — mise à pied, fin de contrat, fermeture d&apos;entreprise.
            Il couvre également certaines absences pour maladie ou pour prendre soin d&apos;un proche.
          </p>
          <p className="text-slate-600 leading-relaxed">
            En 2026, le plafond de la rémunération assurable est fixé à <strong>68 900 $ par année.</strong>{" "}Vos cotisations et
            vos prestations maximales sont toutes deux calculées sur ce montant. Au Québec, le taux de cotisation des employés est
            de <strong>1,30 %</strong>{" "}de la rémunération assurable, jusqu&apos;à une cotisation annuelle maximale de 895,70 $.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien d&apos;heures faut-il pour être admissible ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le nombre d&apos;heures assurables requises varie selon le <strong>taux de chômage régional</strong>{" "}de votre zone
            d&apos;emploi. Plus le chômage est élevé dans votre région, moins d&apos;heures vous avez besoin.
            Ces heures doivent avoir été accumulées au cours des 52 dernières semaines (ou depuis votre dernière demande,
            si cette période est plus courte).
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Heures requises selon le taux de chômage régional</p>
            <div className="space-y-2">
              {[
                { taux: "6 % et moins", heures: "700 heures" },
                { taux: "6,1 % à 7 %", heures: "665 heures" },
                { taux: "7,1 % à 8 %", heures: "630 heures" },
                { taux: "8,1 % à 9 %", heures: "595 heures" },
                { taux: "9,1 % à 10 %", heures: "560 heures" },
                { taux: "10,1 % à 11 %", heures: "525 heures" },
                { taux: "11,1 % à 12 %", heures: "490 heures" },
                { taux: "12,1 % à 13 %", heures: "455 heures" },
                { taux: "13,1 % et plus", heures: "420 heures" },
              ].map((ligne) => (
                <div key={ligne.taux} className="flex justify-between text-sm">
                  <span className="text-blue-900">Chômage régional : {ligne.taux}</span>
                  <span className="font-bold text-blue-800">{ligne.heures}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            Note : un avis de violation lié à une ancienne demande peut augmenter le nombre d&apos;heures requis.
            Service Canada doit confirmer l&apos;admissibilité selon le dossier et la région au début de la demande.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien allez-vous recevoir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vos prestations correspondent à <strong>55 % de votre rémunération hebdomadaire assurable moyenne</strong>{" "}des
            meilleures semaines de la période de référence (généralement les 14 à 22 meilleures semaines selon la région),
            jusqu&apos;au maximum hebdomadaire.
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { salaire: "Salaire annuel de 30 000 $", prestation: "~317 $/semaine" },
              { salaire: "Salaire annuel de 45 000 $", prestation: "~476 $/semaine" },
              { salaire: "Salaire annuel de 60 000 $", prestation: "~635 $/semaine" },
              { salaire: "Salaire de 68 900 $ et plus", prestation: "729 $/semaine (maximum)" },
            ].map((ex) => (
              <div key={ex.salaire} className="bg-white rounded-xl border border-slate-100 px-4 py-3 flex justify-between items-center">
                <p className="text-slate-700 text-sm font-medium">{ex.salaire}</p>
                <p className="font-bold text-slate-800 text-sm">{ex.prestation}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            En 2026, si votre revenu net dépasse <strong>86 125 $</strong>, vous pourriez devoir rembourser 30 % du moins élevé entre
            l&apos;excédent sur ce seuil et vos prestations régulières. Des exemptions s&apos;appliquent, notamment si vous n&apos;avez
            reçu aucune prestation régulière au cours des 10 années d&apos;imposition précédentes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Durée des prestations et délai de carence</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La durée varie entre <strong>14 et 45 semaines</strong>{" "}pour les prestations régulières, en fonction
            du taux de chômage régional et du nombre d&apos;heures assurables accumulées.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Une mesure temporaire peut ajouter 20 semaines, jusqu&apos;à un maximum de 65 semaines, à certains travailleurs de longue date
            dont la demande commence au plus tard le 10 octobre 2026.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Exemples de durée de prestations</p>
            <div className="space-y-2 text-sm">
              {[
                { heures: "700 h · chômage régional 5 %", duree: "14 semaines" },
                { heures: "1 000 h · chômage régional 5 %", duree: "18 semaines" },
                { heures: "700 h · chômage régional 12 %", duree: "26 semaines" },
                { heures: "1 820 h · chômage régional 13 %+", duree: "45 semaines (maximum)" },
              ].map((ex) => (
                <div key={ex.heures} className="flex justify-between">
                  <span className="text-blue-900">{ex.heures}</span>
                  <span className="font-bold text-blue-800">{ex.duree}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Le délai de carence habituel est d&apos;une semaine. Il est toutefois <strong>annulé pour les nouvelles demandes qui commencent
            entre le 30 mars 2025 et le 10 octobre 2026</strong>. Les versements sont ensuite conditionnels à la remise de déclarations
            toutes les deux semaines. Dans certains cas, conserver le délai peut être avantageux avec un régime de prestations
            supplémentaires de chômage; Service Canada précise cette exception dans la mesure temporaire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Les différents types de prestations AE</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            L&apos;assurance-emploi couvre bien plus que la simple perte d&apos;emploi :
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                type: "Prestations régulières",
                desc: "Pour les travailleurs mis à pied ou dont le contrat a pris fin. Durée de 14 à 45 semaines selon la région et les heures accumulées.",
              },
              {
                type: "Prestations de maladie",
                desc: "Pour les travailleurs dans l'incapacité de travailler pour des raisons médicales. Maximum 26 semaines à 55 % du salaire.",
              },
              {
                type: "Prestations pour proches aidants (adulte)",
                desc: "Pour prendre soin d'un proche adulte gravement malade. Maximum 15 semaines, partageable en famille.",
              },
              {
                type: "Prestations pour proches aidants (enfant)",
                desc: "Pour soigner un enfant gravement malade ou blessé. Maximum 35 semaines, partageable entre parents.",
              },
              {
                type: "Prestations de soins de compassion",
                desc: "Pour accompagner un proche en fin de vie. Maximum 26 semaines partagées entre membres de la famille.",
              },
              {
                type: "Maternité et parentales (Québec)",
                desc: "Au Québec, ces prestations sont couvertes par le RQAP (Régime québécois d'assurance parentale), non par l'AE fédérale.",
              },
            ].map((item) => (
              <div key={item.type} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.type}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande d&apos;AE</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Obtenez votre relevé d'emploi",
                texte: "Votre employeur doit émettre votre relevé d'emploi (RE) dans les 5 jours civils suivant la dernière période de paie. Vous pouvez vérifier les RE électroniques dans Mon dossier Service Canada.",
              },
              {
                num: "2",
                titre: "Faites votre demande en ligne rapidement",
                texte: "Soumettez votre demande à canada.ca/assurance-emploi dans les 4 semaines suivant votre dernier jour travaillé. Chaque semaine de retard peut vous faire perdre des semaines de prestations non récupérables.",
              },
              {
                num: "3",
                titre: "Attendez la décision de Service Canada",
                texte: "La norme de service vise une décision dans les 28 jours suivant la demande, dans 80 % des cas. Vous pouvez suivre le dossier et les messages dans Mon dossier Service Canada.",
              },
              {
                num: "4",
                titre: "Remplissez vos déclarations bimensuelles",
                texte: "Toutes les deux semaines, déclarez vos heures travaillées et vos revenus gagnés. Sans déclaration, aucun versement n'est émis — même si votre demande est approuvée.",
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

        <div style={{ background: "#0F1E3A" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">AE, aide sociale, crédit solidarité — faites le bilan de votre situation en 2 minutes.</p>
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
            href="https://www.canada.ca/fr/services/prestations/ae.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca – Assurance-emploi
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
  titre: "Assurance-emploi 2026 : Conditions, montants et comment faire votre demande",
  description: "Guide complet sur l'assurance-emploi en 2026 : heures requises selon votre région, taux de 55 %, durée des prestations, délai de carence et comment soumettre votre demande.",
  date: "2026-06-01",
  categorie: "Emploi",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
