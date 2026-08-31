import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "reee-subvention-epargne-etudes-2026";

const baseMetadata: Metadata = {
  title: "REEE 2026 : SCEE, IQEE, BEC et retraits",
  description:
    "Repères 2026 sur le REEE : cotisations, SCEE fédérale, IQEE du Québec, Bon d'études canadien, rattrapage et règles de retrait.",
  keywords: ["REEE 2026", "SCEE 2026", "IQEE Québec", "Bon d'études canadien", "épargne-études enfant"],
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
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Études</span>
            <span className="text-xs text-slate-400 py-0.5">9 min de lecture · Mis à jour le 31 août 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            REEE 2026 : SCEE, IQEE, BEC et règles de retrait
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Pour un bénéficiaire admissible, une cotisation annuelle de 2 500 $ peut donner droit à une
            <strong> SCEE de base de 500 $</strong> et, au Québec, à un <strong>IQEE de base de 250 $</strong>.
            Ce total de base de 750 $ n&apos;est ni universel ni un maximum global : les familles admissibles
            peuvent aussi recevoir jusqu&apos;à 100 $ de SCEE supplémentaire et 50 $ d&apos;IQEE supplémentaire,
            tandis que le rattrapage suit des règles distinctes.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>📚 SCEE de base : <strong>20 % des premiers 2 500 $</strong>, jusqu&apos;à 500 $ par année ordinaire</li>
            <li>🏛️ IQEE de base : <strong>10 % des cotisations nettes</strong>, jusqu&apos;à 250 $ par année ordinaire</li>
            <li>🎁 BEC : jusqu&apos;à <strong>2 000 $</strong> pour un enfant admissible, sans cotisation personnelle</li>
            <li>🔎 Le fournisseur doit offrir les incitatifs visés et transmettre les demandes requises</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment fonctionne un REEE ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le souscripteur ouvre le régime auprès d&apos;un promoteur et désigne un ou plusieurs bénéficiaires.
            Les cotisations ne sont pas déductibles d&apos;impôt. Les revenus de placement s&apos;accumulent à
            l&apos;abri de l&apos;impôt tant qu&apos;ils demeurent dans le régime; leur traitement au retrait dépend
            ensuite du type de paiement.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Il n&apos;y a pas de plafond annuel de cotisation. Le plafond à vie est de <strong>50 000 $ par
            bénéficiaire</strong>, en additionnant tous ses REEE. Une cotisation excédentaire peut entraîner
            un impôt de 1 % par mois jusqu&apos;à son retrait.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">SCEE de base et supplémentaire en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La Subvention canadienne pour l&apos;épargne-études (SCEE) exige notamment que le bénéficiaire ait
            un NAS, soit résident du Canada au moment de la cotisation, soit désigné au REEE et respecte les
            règles d&apos;âge. Le promoteur présente la demande au programme fédéral.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">SCEE de base</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-4"><span className="text-blue-900">Taux</span><span className="font-bold text-blue-800 text-right">20 % des cotisations admissibles</span></div>
              <div className="flex justify-between gap-4"><span className="text-blue-900">Base annuelle ordinaire</span><span className="font-bold text-blue-800 text-right">2 500 $</span></div>
              <div className="flex justify-between gap-4"><span className="text-blue-900">Maximum annuel ordinaire</span><span className="font-bold text-blue-800 text-right">500 $</span></div>
              <div className="flex justify-between gap-4"><span className="text-blue-900">Plafond à vie, SCEE totale</span><span className="font-bold text-blue-800 text-right">7 200 $</span></div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">En 2026, la SCEE supplémentaire porte sur les premiers 500 $ cotisés :</p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Revenu net familial rajusté de 58 523 $ ou moins", desc: "20 % supplémentaires sur les premiers 500 $ = jusqu'à 100 $ de plus" },
              { titre: "Plus de 58 523 $, sans dépasser 117 045 $", desc: "10 % supplémentaires sur les premiers 500 $ = jusqu'à 50 $ de plus" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            Les droits inutilisés à la SCEE de base s&apos;accumulent. Avec des droits disponibles, une cotisation
            pouvant atteindre 5 000 $ dans une année peut générer jusqu&apos;à <strong>1 000 $ de SCEE de base</strong>.
            La SCEE supplémentaire ne crée pas un plafond à vie séparé : le maximum total demeure 7 200 $.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-900">
            <strong>À 16 ou 17 ans :</strong> avant la fin de l&apos;année des 15 ans, au moins 2 000 $ doivent avoir
            été cotisés et non retirés, ou au moins 100 $ doivent avoir été cotisés et non retirés au cours de
            quatre années antérieures.
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">IQEE : règles et seuils du Québec en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            L&apos;Incitatif québécois à l&apos;épargne-études (IQEE) est un crédit remboursable versé directement
            dans un REEE par Revenu Québec. Le fiduciaire en fait la demande; le fournisseur doit offrir
            l&apos;IQEE. Le bénéficiaire doit notamment avoir moins de 18 ans, avoir un NAS, être désigné au régime
            et résider au Québec le 31 décembre de l&apos;année visée. Des règles particulières s&apos;appliquent à 16 et 17 ans.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">IQEE de base</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-4"><span className="text-blue-900">Taux</span><span className="font-bold text-blue-800 text-right">10 % des cotisations nettes</span></div>
              <div className="flex justify-between gap-4"><span className="text-blue-900">Maximum annuel ordinaire</span><span className="font-bold text-blue-800 text-right">250 $</span></div>
              <div className="flex justify-between gap-4"><span className="text-blue-900">Maximum de base avec rattrapage</span><span className="font-bold text-blue-800 text-right">500 $ dans une année</span></div>
              <div className="flex justify-between gap-4"><span className="text-blue-900">Plafond à vie</span><span className="font-bold text-blue-800 text-right">3 600 $</span></div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            Des droits accumulés peuvent ajouter jusqu&apos;à 250 $ au montant de base d&apos;une année. La majoration
            2026 s&apos;applique aux premiers 500 $ de cotisations admissibles :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-3">
            <li>revenu familial de 0 $ à 54 345 $ : 10 %, jusqu&apos;à 50 $;</li>
            <li>revenu familial de 54 346 $ à 108 680 $ : 5 %, jusqu&apos;à 25 $.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Ainsi, 2 500 $ de cotisations nettes peuvent donner 750 $ de SCEE et d&apos;IQEE de base seulement si
            toutes les conditions fédérales et québécoises sont remplies et si les demandes sont acceptées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">BEC : jusqu&apos;à 2 000 $ sans cotisation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le Bon d&apos;études canadien (BEC) vise les enfants admissibles de familles à faible revenu nés le
            1er janvier 2004 ou après, ainsi que certains enfants pris en charge par un responsable public.
            L&apos;admissibilité dépend notamment du revenu familial rajusté et du nombre d&apos;enfants admissibles;
            recevoir une ACE réduite ne suffit pas à lui seul.
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Première année admissible", desc: "500 $, même si cette année n'est pas celle de la naissance ou de l'ouverture" },
              { titre: "Années admissibles suivantes", desc: "100 $ par année additionnelle d'admissibilité, jusqu'à l'année des 15 ans" },
              { titre: "Maximum à vie", desc: "2 000 $; aucune cotisation personnelle n'est requise" },
              { titre: "Année de prestation 2026-2027", desc: "Pour 1 à 3 enfants : revenu rajusté de 58 523 $ ou moins; les seuils augmentent à partir de 4 enfants" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed">
            Le BEC peut être demandé rétroactivement pour les années admissibles. Le bénéficiaire doit avoir
            moins de 21 ans au moment de la demande; de 18 à 20 ans, il peut ouvrir son propre REEE et présenter
            une demande avant son 21e anniversaire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Individuel, familial ou collectif ?</h2>
          <div className="flex flex-col gap-4">
            {[
              { num: "1", titre: "REEE individuel", texte: "Un seul bénéficiaire. Le souscripteur n'a pas à être apparenté au bénéficiaire; les cotisations et retraits restent soumis au contrat et aux règles du REEE." },
              { num: "2", titre: "REEE familial", texte: "Un ou plusieurs bénéficiaires liés au souscripteur par le sang ou l'adoption. Le partage des revenus et incitatifs demeure soumis aux plafonds et aux règles propres à chaque programme et bénéficiaire." },
              { num: "3", titre: "REEE collectif", texte: "L'épargne est regroupée avec celle d'autres souscripteurs. Les calendriers, frais, options de transfert et conséquences d'un arrêt de cotisation varient selon le contrat : comparez-les avant de signer." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{item.num}</div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{item.titre}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            Un changement de bénéficiaire ou un transfert peut provoquer un excédent de cotisations ou le
            remboursement d&apos;incitatifs lorsque les conditions ne sont pas respectées. Confirmez les conséquences
            avec le promoteur avant le mouvement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Retirer l&apos;argent pour les études</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Les <strong>cotisations</strong> peuvent être remboursées sans impôt au souscripteur ou versées au
            bénéficiaire selon les modalités du régime. Les <strong>paiements d&apos;aide aux études (PAE)</strong>
            regroupent les revenus de placement et les incitatifs gouvernementaux; ils sont imposables pour le bénéficiaire.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le promoteur demandera une preuve d&apos;inscription. Un programme admissible à temps plein dure au
            moins trois semaines consécutives et exige au moins 10 heures par semaine. Un programme déterminé à
            temps partiel dure au moins trois semaines et exige au moins 12 heures par mois.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-900 mb-3">
            Les PAE sont normalement limités à <strong>8 000 $ pendant les 13 premières semaines consécutives</strong>
            d&apos;un programme à temps plein et à <strong>4 000 $ par période de 13 semaines</strong> pour un programme
            à temps partiel. Une demande de dépassement peut être possible par l&apos;entremise du promoteur.
          </div>
          <p className="text-slate-600 leading-relaxed">
            Si le bénéficiaire ne poursuit pas d&apos;études admissibles, les options peuvent inclure laisser le
            régime ouvert, changer de bénéficiaire, transférer certains fonds ou fermer le régime. Selon le cas,
            les incitatifs doivent être remboursés. Un paiement de revenu accumulé (PRA) est généralement imposé
            au souscripteur au taux ordinaire, plus 20 % — ou 12 % pour un résident du Québec. Un roulement pouvant
            atteindre 50 000 $ vers un régime de retraite peut être permis si toutes les conditions et les droits
            de cotisation sont respectés.
          </p>
        </section>

        <div style={{ background: "#0F1E3C" }} className="text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Vérifiez les autres aides qui pourraient correspondre à votre situation</p>
          <p className="text-blue-200 text-sm mb-4">
            Notre questionnaire offre une orientation parmi les programmes qu&apos;il couvre. Il ne calcule pas
            l&apos;admissibilité ni les montants de la SCEE, de l&apos;IQEE ou du BEC.
          </p>
          <Link href="/fr/questionnaire" className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl">
            Explorer les aides couvertes →
          </Link>
        </div>

        <div className="text-center text-slate-500 text-xs mt-6 space-y-2">
          <p className="font-semibold text-slate-600">Sources officielles vérifiées le 31 août 2026</p>
          <p>
            <a href="https://www.canada.ca/fr/services/prestations/education/epargne-etudes/estimation-montants.html" target="_blank" rel="noopener noreferrer" className="underline">Canada — SCEE et montants 2026</a>
            {" · "}
            <a href="https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/regime-enregistre-epargne-etudes-reee/programmes-canadiens-epargne-etudes-pcee/etudes-canadien.html" target="_blank" rel="noopener noreferrer" className="underline">ARC — BEC</a>
          </p>
          <p>
            <a href="https://www.canada.ca/fr/services/prestations/education/epargne-etudes/paiement-education.html" target="_blank" rel="noopener noreferrer" className="underline">Canada — retraits pour les études</a>
            {" · "}
            <a href="https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/incitatif-quebecois-a-lepargne-etudes/determination-du-montant/" target="_blank" rel="noopener noreferrer" className="underline">Revenu Québec — montant de l&apos;IQEE</a>
            {" · "}
            <a href="https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/incitatif-quebecois-a-lepargne-etudes/conditions-dadmissibilite/" target="_blank" rel="noopener noreferrer" className="underline">Revenu Québec — admissibilité IQEE</a>
          </p>
        </div>
      </article>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement. Vérifiez votre situation auprès du promoteur et des organismes officiels."
        contactLabel="Contactez-nous"
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ marginTop: "16px" }}
      />
    </main>
  );
}

const article: BlogArticle = {
  slug,
  titre: "REEE 2026 : SCEE, IQEE, BEC et règles de retrait",
  description:
    "Repères 2026 sur les cotisations au REEE, la SCEE, l'IQEE, le Bon d'études canadien, le rattrapage et les retraits pour les études.",
  date: "2026-08-31",
  categorie: "Études",
  tempsLecture: "9 min",
  metadata,
  Content,
};

export default article;
