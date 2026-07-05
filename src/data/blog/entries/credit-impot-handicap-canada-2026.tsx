import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-impot-handicap-canada-2026";

const baseMetadata: Metadata = {
  title: "Crédit d'impôt pour personnes handicapées 2026 : Comment l'obtenir et ce qu'il débloque",
  description:
    "Guide complet sur le Crédit d'impôt pour personnes handicapées (CIPH) en 2026 : conditions médicales admissibles, montant du crédit, formulaire T2201 et accès au REEI et autres avantages.",
  keywords: [
    "crédit impôt personnes handicapées 2026",
    "CIPH 2026",
    "T2201 Canada",
    "handicap crédit impôt fédéral",
    "REEI admissibilité CIPH",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-impot-handicap-canada-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">Santé</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit d&apos;impôt pour personnes handicapées 2026 : Comment l&apos;obtenir et ce qu&apos;il débloque
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Crédit d&apos;impôt pour personnes handicapées (CIPH) est souvent méconnu — et pourtant,
            il vaut jusqu&apos;à <strong>9 428 $ par année</strong>{" "}en réduction d&apos;impôt. Mieux encore, être admissible
            au CIPH débloque l&apos;accès au REEI, au Supplément pour enfant handicapé (ACE) et à d&apos;autres
            programmes qui peuvent représenter des dizaines de milliers de dollars sur une vie.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Crédit de base fédéral : <strong>9 428 $</strong>{" "}de revenu imposable réduit (≈ 1 414 $ d&apos;impôt économisé)</li>
            <li>✓ Supplément pour enfants admissibles : <strong>5 500 $</strong>{" "}supplémentaires</li>
            <li>✓ Débloque l&apos;accès au <strong>REEI</strong>{" "}(jusqu&apos;à 90 000 $ de subventions gouvernementales)</li>
            <li>✓ Demande via formulaire T2201 — rempli par un professionnel de la santé</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que le CIPH ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le Crédit d&apos;impôt pour personnes handicapées est un crédit fédéral non remboursable qui
            réduit l&apos;impôt à payer des personnes vivant avec une déficience grave et prolongée de
            leurs fonctions physiques ou mentales. Il peut aussi être transféré à un proche qui
            subvient à vos besoins.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le CIPH n&apos;est pas un chèque que vous recevez directement. C&apos;est une réduction d&apos;impôt.
            Mais son importance dépasse largement cette réduction : il agit comme une <strong>clé d&apos;accès</strong>{" "}
            à plusieurs autres programmes gouvernementaux majeurs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Conditions médicales admissibles</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour être admissible, vous devez avoir une déficience <strong>grave et prolongée</strong>{" "}(ayant duré
            ou devant durer au moins 12 mois consécutifs) dans une ou plusieurs des fonctions suivantes :
          </p>
          <div className="grid grid-cols-1 gap-2">
            {[
              { fonction: "Vision", detail: "Acuité visuelle très limitée même avec correction" },
              { fonction: "Marche", detail: "Incapacité ou grande difficulté à marcher" },
              { fonction: "Fonctions mentales", detail: "Pensée, jugement, mémoire — inclut certains cas de TDAH sévère, autisme" },
              { fonction: "Audition", detail: "Surdité sévère même avec appareil auditif" },
              { fonction: "Soins personnels", detail: "Incapacité à s&apos;habiller, se nourrir ou maintenir une hygiène de base" },
              { fonction: "Parole", detail: "Incapacité ou grande difficulté à parler" },
              { fonction: "Fonctions d&apos;élimination", detail: "Nécessite une supervision ou des soins prolongés quotidiens" },
              { fonction: "Effets cumulatifs de limitations", detail: "Plusieurs limitations moins graves qui ensemble créent une restriction sévère" },
            ].map((item) => (
              <div key={item.fonction} className="flex items-start gap-3 bg-violet-50 border border-violet-100 rounded-xl px-4 py-2.5">
                <div>
                  <span className="text-violet-800 font-semibold text-sm">{item.fonction}</span>
                  <span className="text-slate-500 text-xs ml-2" dangerouslySetInnerHTML={{ __html: item.detail }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montant du crédit en 2026</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Valeur du CIPH fédéral 2026</p>
            <div className="space-y-2 text-sm">
              {[
                { poste: "Montant de base du CIPH", valeur: "9 428 $", note: "Réduction du revenu imposable" },
                { poste: "Crédit d&apos;impôt (taux 15 %)", valeur: "≈ 1 414 $", note: "Impôt économisé par an" },
                { poste: "Supplément pour enfant (moins de 18 ans)", valeur: "+ 5 500 $", note: "Montant additionnel admissible" },
                { poste: "Crédit pour enfant (taux 15 %)", valeur: "≈ + 825 $", note: "Impôt supplémentaire économisé" },
              ].map((item) => (
                <div key={item.poste} className="flex justify-between items-center border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="text-blue-900" dangerouslySetInnerHTML={{ __html: item.poste }} />
                    <span className="text-blue-600 text-xs ml-2">{item.note}</span>
                  </div>
                  <span className="font-bold text-blue-800" dangerouslySetInnerHTML={{ __html: item.valeur }} />
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Si vous n&apos;avez pas d&apos;impôt à payer, vous pouvez transférer le crédit inutilisé à un proche
            qui subvient à vos besoins (conjoint, parent, enfant adulte).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Ce que le CIPH débloque</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C&apos;est souvent la valeur indirecte du CIPH qui est la plus importante :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                programme: "REEI — Régime enregistré d&apos;épargne-invalidité",
                valeur: "Jusqu&apos;à 90 000 $ de subventions + 20 000 $ de bons",
                desc: "Uniquement accessible si vous avez un certificat CIPH approuvé.",
              },
              {
                programme: "Supplément pour enfant handicapé (ACE)",
                valeur: "3 432 $/an supplémentaires",
                desc: "Ajouté automatiquement à l&apos;Allocation canadienne pour enfants.",
              },
              {
                programme: "PCT — Supplément pour handicapés",
                valeur: "Jusqu&apos;à 784 $/an",
                desc: "Complément à la Prestation canadienne pour les travailleurs.",
              },
              {
                programme: "Régime de rentes du Québec — rente d&apos;invalidité",
                valeur: "Variable",
                desc: "Une attestation CIPH peut appuyer une demande de rente d&apos;invalidité RRQ.",
              },
            ].map((item) => (
              <div key={item.programme} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <div className="flex justify-between items-start gap-2">
                  <p className="font-semibold text-slate-800 text-sm" dangerouslySetInnerHTML={{ __html: item.programme }} />
                  <span className="text-violet-700 font-bold text-xs shrink-0 text-right" dangerouslySetInnerHTML={{ __html: item.valeur }} />
                </div>
                <p className="text-slate-500 text-xs mt-1" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Obtenez le formulaire T2201",
                texte: "Téléchargez le formulaire T2201 (Certificat pour le crédit d&apos;impôt pour personnes handicapées) sur le site de l&apos;ARC ou demandez-le à votre médecin.",
              },
              {
                num: "2",
                titre: "Faites remplir la partie médicale",
                texte: "Un professionnel de la santé autorisé doit compléter et certifier la partie médicale du formulaire. Selon la déficience, il peut s&apos;agir d&apos;un médecin, optométriste, audiologiste, ergothérapeute, etc.",
              },
              {
                num: "3",
                titre: "Soumettez à l&apos;ARC",
                texte: "Envoyez le formulaire T2201 complété à l&apos;ARC (par courrier ou en ligne via Mon dossier). L&apos;ARC rend une décision — l&apos;approbation peut prendre plusieurs semaines.",
              },
              {
                num: "4",
                titre: "Réclamez le crédit dans vos déclarations",
                texte: "Une fois approuvé, réclamez le CIPH à la ligne 31600 de votre déclaration fédérale. Vous pouvez aussi demander un redressement pour les 10 années précédentes si vous étiez admissible mais n&apos;aviez pas réclamé.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-violet-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {etape.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{etape.titre}</p>
                  <p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: etape.texte }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Trouvez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            CIPH, REEI, Supplément enfant handicapé — découvrez les programmes auxquels vous avez droit selon votre situation.
          </p>
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
            href="https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/lignes-31600-31800-montant-personnes-handicapees.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca — Crédit d&apos;impôt pour personnes handicapées
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
  titre: "Crédit d'impôt pour personnes handicapées 2026 : Comment l'obtenir et ce qu'il débloque",
  description:
    "Tout sur le CIPH en 2026 : conditions médicales admissibles, valeur du crédit, formulaire T2201 et accès au REEI, au Supplément enfant handicapé et à d'autres programmes.",
  date: "2026-07-05",
  categorie: "Santé",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
