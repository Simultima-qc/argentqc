import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "allocation-canadienne-enfants-2026";

const baseMetadata: Metadata = {
  title: "Allocation canadienne pour enfants 2026 : Jusqu'à 8 157 $/an par enfant",
  description:
    "Guide complet sur l'Allocation canadienne pour enfants en 2026 : montants selon l'âge, calcul selon votre revenu familial, versements mensuels et cumul avec l'Allocation famille du Québec.",
  keywords: [
    "allocation canadienne pour enfants 2026",
    "ACE 2026",
    "prestation enfants Canada",
    "CCB 2026",
    "allocation enfant non imposable",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/allocation-canadienne-enfants-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Famille</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Allocation canadienne pour enfants 2026 : Jusqu&apos;à 8 157 $/an par enfant
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            L&apos;Allocation canadienne pour enfants (ACE) est l&apos;une des aides les plus généreuses du gouvernement fédéral.
            En 2026, une famille avec un jeune enfant peut recevoir jusqu&apos;à <strong>679,75 $ par mois</strong>,{" "}
            complètement libre d&apos;impôt. Et la majorité des familles québécoises y ont droit.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Jusqu&apos;à <strong>8 157 $/an</strong>{" "}par enfant de moins de 6 ans (679,75 $/mois)</li>
            <li>✓ Jusqu&apos;à <strong>6 883 $/an</strong>{" "}par enfant de 6 à 17 ans (573,58 $/mois)</li>
            <li>✓ Prestation <strong>non imposable</strong>,{" "}versée automatiquement chaque mois</li>
            <li>✓ Cumulable avec l&apos;Allocation famille du Québec — deux chèques distincts</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que l&apos;Allocation canadienne pour enfants ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;ACE est une prestation mensuelle versée par l&apos;Agence du revenu du Canada (ARC) aux familles
            qui ont des enfants de moins de 18 ans à leur charge. Contrairement à plusieurs autres aides,
            elle est entièrement <strong>non imposable</strong>{" "}— vous ne la déclarez pas comme revenu et elle
            n&apos;affecte pas vos autres crédits d&apos;impôt.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le montant que vous recevez dépend principalement de votre <strong>revenu net familial rajusté</strong>{" "}
            de l&apos;année précédente et du nombre d&apos;enfants que vous avez. Plus votre revenu est faible,
            plus la prestation est élevée.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants de l&apos;ACE en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour l&apos;année de prestations 2026-2027 (juillet 2026 à juin 2027), les montants maximaux sont :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Montants maximaux par enfant</p>
            <div className="space-y-3">
              {[
                { groupe: "Enfant de moins de 6 ans", annuel: "8 157 $", mensuel: "679,75 $/mois" },
                { groupe: "Enfant de 6 à 17 ans", annuel: "6 883 $", mensuel: "573,58 $/mois" },
                { groupe: "Supplément pour enfant handicapé", annuel: "+ 3 480 $", mensuel: "+ 290 $/mois" },
              ].map((item) => (
                <div key={item.groupe} className="flex justify-between items-center text-sm border-b border-blue-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-blue-900 font-medium">{item.groupe}</span>
                  <div className="text-right">
                    <div className="font-bold text-blue-800">{item.annuel}</div>
                    <div className="text-blue-600 text-xs">{item.mensuel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            Ces montants sont indexés à l&apos;inflation chaque juillet. Ils représentent le maximum pour les familles
            à faible revenu — votre prestation réelle est calculée selon votre revenu familial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment votre revenu affecte le montant</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le calcul est progressif : sous un certain seuil de revenu, vous recevez le montant maximum.
            Au-delà, la prestation diminue graduellement — elle ne tombe jamais à zéro brusquement.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { revenu: "Moins de 38 237 $", resultat: "Montant maximal", couleur: "bg-green-50 border-green-200 text-green-800" },
              { revenu: "38 237 $ – 82 847 $", resultat: "Réduction de 13,5 % à 23 % sur la tranche excédentaire selon le nombre d&apos;enfants", couleur: "bg-yellow-50 border-yellow-200 text-yellow-800" },
              { revenu: "Plus de 82 847 $", resultat: "Réduction fixe plus un pourcentage additionnel selon le nombre d&apos;enfants", couleur: "bg-orange-50 border-orange-200 text-orange-800" },
              { revenu: "Très hauts revenus", resultat: "La prestation peut diminuer jusqu&apos;à 0 $ selon le revenu et la composition familiale", couleur: "bg-red-50 border-red-200 text-red-800" },
            ].map((item) => (
              <div key={item.revenu} className={`border rounded-xl p-4 ${item.couleur}`}>
                <p className="font-semibold text-sm">{item.revenu}</p>
                <p className="text-sm mt-0.5 opacity-80" dangerouslySetInnerHTML={{ __html: item.resultat }} />
              </div>
            ))}
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-4">
            <p className="text-slate-700 text-sm font-semibold mb-2">Exemple concret</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Une famille avec un revenu net de <strong>65 000 $</strong>{" "} et deux enfants (3 ans et 8 ans)
              reçoit environ <strong>952 $ par mois</strong>{" "} en ACE — soit 11 427 $ par année,
              complètement libre d&apos;impôt.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">ACE et Allocation famille : deux aides distinctes</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Beaucoup de parents ne réalisent pas qu&apos;ils reçoivent <strong>deux prestations séparées</strong>{" "}chaque mois :
            l&apos;ACE fédérale (ARC) et l&apos;Allocation famille provinciale (Retraite Québec). Ces deux programmes
            sont cumulables et indépendants.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                programme: "Allocation canadienne pour enfants",
                organisme: "Gouvernement fédéral — ARC",
                base: "Revenu familial net rajusté",
                max: "Jusqu&apos;à 8 157 $/an/enfant",
              },
              {
                programme: "Allocation famille Québec",
                organisme: "Gouvernement du Québec — Retraite Québec",
                base: "Revenu familial et situation de garde",
                max: "Jusqu&apos;à 2 986 $/an/enfant",
              },
            ].map((item) => (
              <div key={item.programme} className="bg-white border border-slate-100 rounded-xl p-4">
                <p className="font-semibold text-slate-800 text-sm mb-2">{item.programme}</p>
                <div className="space-y-1 text-xs text-slate-500">
                  <p>Administré par : {item.organisme}</p>
                  <p>Calculé selon : {item.base}</p>
                  <p className="font-medium text-slate-700" dangerouslySetInnerHTML={{ __html: item.max }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            En combinant les deux programmes, une famille québécoise à revenu modeste peut recevoir
            plus de <strong>10 000 $ par année par enfant</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "À la naissance : via Service Canada",
                texte: "Lors de l&apos;enregistrement de la naissance de votre enfant, vous pouvez cocher la case pour demander l&apos;ACE automatiquement. C&apos;est la façon la plus simple — pas de formulaire séparé.",
              },
              {
                num: "2",
                titre: "Via Mon dossier CRA (ARC)",
                texte: "Connectez-vous à Mon dossier sur le site de l&apos;ARC et utilisez la section « Prestations ». Vous aurez besoin de votre NAS et de vos informations fiscales.",
              },
              {
                num: "3",
                titre: "Par la poste : formulaire RC66",
                texte: "Si vous ne pouvez pas faire la demande en ligne, remplissez le formulaire RC66 (Demande de prestations canadiennes pour enfants) et envoyez-le à votre centre fiscal.",
              },
              {
                num: "4",
                titre: "Mettez à jour vos informations chaque année",
                texte: "Le montant est recalculé chaque juillet selon votre déclaration de revenus. Assurez-vous de produire votre déclaration même si vous n&apos;avez pas de revenus — c&apos;est obligatoire pour maintenir la prestation.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">Situations particulières à connaître</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Garde partagée",
                desc: "Si vous avez la garde partagée à 50/50, chaque parent reçoit 50 % de la prestation mensuelle. Vous devez tous les deux faire la demande.",
              },
              {
                titre: "Nouvel arrivant au Canada",
                desc: "Vous devez être résident du Canada et avoir produit une déclaration de revenus. Pour les nouveaux arrivants, une demande peut être faite dès l&apos;établissement de la résidence fiscale.",
              },
              {
                titre: "Enfant handicapé",
                desc: "Si votre enfant est admissible au Crédit d&apos;impôt pour personnes handicapées, vous recevez automatiquement le Supplément pour enfant handicapé — jusqu&apos;à 3 480 $ de plus par année.",
              },
              {
                titre: "Paiements rétroactifs",
                desc: "Si vous avez négligé de faire votre demande, l&apos;ARC peut verser des paiements rétroactifs. Ça vaut la peine de régulariser votre situation même des années plus tard.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            ACE, Allocation famille, crédits d&apos;impôt — découvrez tout ce à quoi vous avez droit selon votre situation.
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
            href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca — Allocation canadienne pour enfants
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
  titre: "Allocation canadienne pour enfants 2026 : Jusqu'à 8 157 $/an par enfant",
  description:
    "Tout sur l'Allocation canadienne pour enfants en 2026 : montants par enfant, calcul selon votre revenu familial, cumul avec l'Allocation famille du Québec et comment faire votre demande.",
  date: "2026-07-05",
  categorie: "Famille",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
