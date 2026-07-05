import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "prestation-dentaire-canadienne-2026";

const baseMetadata: Metadata = {
  title: "Soins dentaires Canada 2026 : Le programme fédéral qui couvre vos dents",
  description:
    "Tout sur le Régime canadien de soins dentaires en 2026 : qui est admissible, services couverts, montants remboursés et comment s'inscrire via Santé Canada.",
  keywords: [
    "régime canadien soins dentaires 2026",
    "prestation dentaire Canada",
    "soins dentaires gratuits Canada",
    "RCSD 2026",
    "dentiste remboursé Canada",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/prestation-dentaire-canadienne-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-700">Santé</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Soins dentaires Canada 2026 : Le programme fédéral qui couvre vos dents
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Régime canadien de soins dentaires (RCSD) couvre des millions de Canadiens qui
            n&apos;ont pas accès à une assurance dentaire privée. Si votre revenu familial est
            inférieur à <strong>90 000 $</strong>, vous pourriez faire couvrir examens, nettoyages,
            obturations et plus — sans débourser un sou à la clinique.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Admissible si revenu familial net <strong>inférieur à 90 000 $</strong></li>
            <li>✓ Aucune assurance dentaire privée ne doit être disponible via l&apos;employeur</li>
            <li>✓ Couvre examens, nettoyages, obturations, extractions, prothèses et plus</li>
            <li>✓ Inscription via Sun Life, mandataire de Santé Canada</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que le Régime canadien de soins dentaires ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Lancé par le gouvernement fédéral, le RCSD est un programme d&apos;assurance dentaire
            destiné aux Canadiens à revenu faible ou moyen qui n&apos;ont pas accès à des soins dentaires
            par leur employeur ou un régime privé. Il est administré par <strong>Sun Life</strong>{" "}
            pour le compte de Santé Canada.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Contrairement à la RAMQ qui couvre certains soins pour les enfants et les prestataires
            d&apos;aide sociale, le RCSD s&apos;adresse à une population beaucoup plus large —
            y compris les travailleurs autonomes, les retraités et les employés sans avantages sociaux.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui est admissible en 2026 ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vous devez satisfaire à <strong>tous</strong>{" "}les critères suivants :
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                ok: true,
                critere: "Revenu familial net ajusté inférieur à 90 000 $",
                detail: "Basé sur votre déclaration de revenus de l&apos;année précédente",
              },
              {
                ok: true,
                critere: "Aucune assurance dentaire privée disponible",
                detail: "Ni via votre employeur, ni via celui de votre conjoint, ni achetée individuellement",
              },
              {
                ok: true,
                critere: "Résident canadien admissible à l&apos;assurance-maladie provinciale",
                detail: "Vous devez être couvert par un régime provincial de soins de santé",
              },
              {
                ok: true,
                critere: "Avoir produit une déclaration de revenus",
                detail: "L&apos;admissibilité est vérifiée automatiquement par l&apos;ARC",
              },
            ].map((item) => (
              <div key={item.critere} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.critere}</p>
                <p className="text-slate-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quels soins sont couverts ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le régime couvre une large gamme de soins préventifs et curatifs. Le taux de remboursement
            varie selon votre revenu et le type de soin.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { categorie: "Soins préventifs", exemples: "Examens, radiographies, nettoyages, scellants dentaires", taux: "100 % pour revenu &lt; 70 000 $" },
              { categorie: "Soins de base", exemples: "Obturations, extractions, traitements de canal", taux: "80 % pour revenu &lt; 70 000 $" },
              { categorie: "Prothèses", exemples: "Dentiers complets et partiels, couronnes", taux: "60 % pour revenu &lt; 70 000 $" },
              { categorie: "Soins d&apos;urgence", exemples: "Soulagement de la douleur, infections", taux: "Couvert selon le barème applicable" },
            ].map((item) => (
              <div key={item.categorie} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm" dangerouslySetInnerHTML={{ __html: item.categorie }} />
                    <p className="text-slate-500 text-xs mt-0.5" dangerouslySetInnerHTML={{ __html: item.exemples }} />
                  </div>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded-full shrink-0" dangerouslySetInnerHTML={{ __html: item.taux }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Les taux de remboursement sont réduits pour les revenus entre 70 000 $ et 90 000 $.
            Au-delà de 90 000 $, aucune couverture n&apos;est offerte.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment s&apos;inscrire au RCSD</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Vérifiez votre admissibilité",
                texte: "L&apos;ARC vérifie automatiquement votre admissibilité à partir de votre déclaration de revenus. Si vous êtes admissible, vous recevrez une invitation par courrier ou via Mon dossier CRA.",
              },
              {
                num: "2",
                titre: "Inscrivez-vous via Sun Life",
                texte: "Rendez-vous sur le portail Sun Life dédié au RCSD ou appelez le 1-833-537-2635. Vous devrez fournir votre NAS et vos informations personnelles.",
              },
              {
                num: "3",
                titre: "Obtenez votre carte de membre",
                texte: "Une fois inscrit, vous recevez une carte de membre Sun Life. Présentez-la à votre dentiste — le remboursement se fait directement, sans avance de frais dans la plupart des cas.",
              },
              {
                num: "4",
                titre: "Trouvez un dentiste participant",
                texte: "La grande majorité des dentistes au Québec acceptent le RCSD. Vous pouvez utiliser l&apos;outil de recherche Sun Life pour trouver un fournisseur près de chez vous.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Ce que le RCSD ne couvre pas</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Certains soins restent à votre charge même avec le RCSD :
          </p>
          <div className="grid grid-cols-1 gap-2">
            {[
              "Orthodontie (broches, aligneurs invisibles)",
              "Implants dentaires",
              "Blanchiment des dents et soins esthétiques",
              "Soins hors du Canada",
              "Soins déjà couverts par un autre régime",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
                <span className="text-red-400 text-sm font-bold">✕</span>
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            RCSD, ACE, crédits d&apos;impôt — voyez rapidement à quoi vous avez droit selon votre situation.
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
            href="https://www.canada.ca/fr/sante-canada/services/soins-dentaires/regime-canadien-soins-dentaires.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca — Régime canadien de soins dentaires
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
  titre: "Soins dentaires Canada 2026 : Le programme fédéral qui couvre vos dents",
  description:
    "Tout sur le Régime canadien de soins dentaires en 2026 : admissibilité, soins couverts, taux de remboursement et procédure d'inscription via Sun Life.",
  date: "2026-07-05",
  categorie: "Santé",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
