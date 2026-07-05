import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "impots-revenus-retraite-quebec-2026";

const baseMetadata: Metadata = {
  title: "Revenus de retraite et impôts au Québec 2026 : Ce que vous allez vraiment payer",
  description:
    "Combien d'impôt paierez-vous à la retraite au Québec ? RRQ, PSV, REER/FERR, fonds de pension : charge fiscale réelle, fractionnement, crédits disponibles et planification.",
  keywords: [
    "impôts retraite Québec 2026",
    "revenus retraite impôt",
    "RRQ impôt Québec",
    "FERR retrait impôt",
    "planification fiscale retraite Québec",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/impots-revenus-retraite-quebec-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">Retraite</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Revenus de retraite et impôts au Québec 2026 : Ce que vous allez vraiment payer
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            À la retraite, votre revenu change — mais l&apos;impôt ne disparaît pas pour autant.
            RRQ, PSV, REER converti en FERR, fonds de pension, CELI : chaque source est traitée
            différemment par le fisc. Voici ce qu&apos;un retraité québécois typique paie réellement
            en impôt, et comment minimiser cette facture légalement.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Les retraits REER/FERR, RRQ et PSV sont <strong>imposables</strong></li>
            <li>✓ Les retraits CELI et l&apos;ACE sont <strong>libres d&apos;impôt</strong></li>
            <li>✓ Le <strong>fractionnement du revenu de retraite</strong>{" "}peut vous faire économiser des milliers de dollars</li>
            <li>✓ Plusieurs crédits d&apos;impôt réduisent la facture des retraités québécois</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Sources de revenus : imposables ou non ?</h2>
          <div className="grid grid-cols-1 gap-2">
            {[
              { source: "RRQ — Rente de retraite", imposable: true, detail: "Revenu imposable intégralement, fédéral et provincial" },
              { source: "PSV — Pension de Sécurité de la vieillesse", imposable: true, detail: "Imposable, mais récupérée si revenu > 90 997 $ (2026)" },
              { source: "SRG — Supplément de revenu garanti", imposable: false, detail: "Non imposable, mais réduit si autres revenus augmentent" },
              { source: "Retraits REER / FERR", imposable: true, detail: "Intégralement imposables — retenue à la source obligatoire" },
              { source: "Rente d&apos;un fonds de pension d&apos;employeur", imposable: true, detail: "Admissible au fractionnement si vous avez 65 ans et plus" },
              { source: "Retraits CELI", imposable: false, detail: "Entièrement libres d&apos;impôt, aucun effet sur les prestations" },
              { source: "Dividendes et gains en capital", imposable: true, detail: "Partiellement imposables — taux préférentiels s&apos;appliquent" },
              { source: "Revenus d&apos;emploi ou de travail autonome", imposable: true, detail: "Pleinement imposables, mais admissibles au crédit prolongation de carrière" },
            ].map((item) => (
              <div key={item.source} className={`flex items-start gap-3 border rounded-xl px-4 py-3 ${item.imposable ? "bg-white border-slate-100" : "bg-green-50 border-green-100"}`}>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${item.imposable ? "bg-orange-100 text-orange-700" : "bg-green-200 text-green-800"}`}>
                  {item.imposable ? "Imposable" : "Libre"}
                </span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm" dangerouslySetInnerHTML={{ __html: item.source }} />
                  <p className="text-slate-500 text-xs mt-0.5" dangerouslySetInnerHTML={{ __html: item.detail }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien d&apos;impôt à la retraite ? Exemples réels</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                profil: "Retraité seul — 35 000 $/an de revenus",
                detail: "RRQ : 12 000 $ · PSV : 8 100 $ · FERR : 14 900 $",
                impotFederal: "~1 200 $",
                impotProvincial: "~2 400 $",
                tauxEffectif: "~10 %",
                couleur: "bg-green-50 border-green-200",
              },
              {
                profil: "Couple — 70 000 $/an combinés",
                detail: "Avec fractionnement du revenu de pension",
                impotFederal: "~4 800 $",
                impotProvincial: "~8 200 $",
                tauxEffectif: "~18 %",
                couleur: "bg-blue-50 border-blue-200",
              },
              {
                profil: "Retraité aisé — 100 000 $/an",
                detail: "Sans planification — PSV partiellement récupérée",
                impotFederal: "~14 000 $",
                impotProvincial: "~18 500 $",
                tauxEffectif: "~32 %",
                couleur: "bg-orange-50 border-orange-200",
              },
            ].map((ex) => (
              <div key={ex.profil} className={`border rounded-2xl p-4 ${ex.couleur}`}>
                <p className="font-bold text-slate-800 mb-1">{ex.profil}</p>
                <p className="text-slate-500 text-xs mb-3">{ex.detail}</p>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="font-bold text-slate-800">{ex.impotFederal}</div>
                    <div className="text-xs text-slate-500">Impôt fédéral</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{ex.impotProvincial}</div>
                    <div className="text-xs text-slate-500">Impôt Québec</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{ex.tauxEffectif}</div>
                    <div className="text-xs text-slate-500">Taux effectif</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Ces estimations sont à titre indicatif. Votre situation réelle dépend de votre composition de revenus,
            de votre situation familiale et des crédits auxquels vous avez droit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Stratégies pour réduire votre facture fiscale</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                strategie: "Fractionnement du revenu de retraite",
                detail: "Transférez jusqu&apos;à 50 % de votre rente de pension admissible à votre conjoint. Économies potentielles : 2 000 $ à 8 000 $ par an.",
                badge: "Très efficace",
                badgeCouleur: "bg-green-600 text-white",
              },
              {
                strategie: "Gérer le timing des retraits FERR",
                detail: "Retirez davantage dans les années à faible revenu (avant 65 ans ou avant la PSV) pour lisser votre charge fiscale.",
                badge: "Planification",
                badgeCouleur: "bg-blue-600 text-white",
              },
              {
                strategie: "Utiliser votre CELI à la retraite",
                detail: "Les retraits CELI n&apos;augmentent pas votre revenu imposable — idéal pour éviter la récupération de la PSV ou la réduction du SRG.",
                badge: "Stratégique",
                badgeCouleur: "bg-purple-600 text-white",
              },
              {
                strategie: "Reporter la PSV jusqu&apos;à 70 ans",
                detail: "Chaque mois de report après 65 ans augmente votre PSV de 0,6 % (7,2 %/an), soit +36 % à 70 ans. Utile si vous avez d&apos;autres sources de revenus.",
                badge: "Long terme",
                badgeCouleur: "bg-amber-600 text-white",
              },
            ].map((item) => (
              <div key={item.strategie} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-slate-800 text-sm">{item.strategie}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${item.badgeCouleur}`}>{item.badge}</span>
                </div>
                <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Crédits d&apos;impôt réservés aux retraités</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <div className="space-y-3 text-sm">
              {[
                { credit: "Crédit en raison de l&apos;âge (65 ans et plus)", montant: "Fédéral : 8 396 $ · Québec : 3 380 $" },
                { credit: "Crédit pour revenus de pension", montant: "Fédéral : jusqu&apos;à 2 000 $ · Québec : jusqu&apos;à 2 000 $" },
                { credit: "Crédit d&apos;impôt pour maintien à domicile (70 ans+)", montant: "Jusqu&apos;à 6 000 $ remboursables" },
                { credit: "Crédit pour la prolongation de carrière (60 ans+)", montant: "Jusqu&apos;à 1 650 $ si vous travaillez encore" },
              ].map((item) => (
                <div key={item.credit} className="flex justify-between items-start border-b border-blue-100 pb-3 last:border-0 last:pb-0 gap-3">
                  <span className="text-blue-900" dangerouslySetInnerHTML={{ __html: item.credit }} />
                  <span className="text-blue-800 font-semibold text-right shrink-0 text-xs" dangerouslySetInnerHTML={{ __html: item.montant }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Trouvez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            PSV, SRG, crédits de retraite, maintien à domicile — voyez rapidement ce à quoi vous avez droit.
          </p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Trouver mes aides →
          </Link>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Sources :{" "}
          <a
            href="https://www.revenuquebec.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            revenuquebec.ca
          </a>
          {" "}·{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ARC — canada.ca
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
  titre: "Revenus de retraite et impôts au Québec 2026 : Ce que vous allez vraiment payer",
  description:
    "RRQ, PSV, FERR, fonds de pension, CELI : comprendre la charge fiscale réelle à la retraite au Québec, les crédits disponibles et les stratégies pour réduire votre facture.",
  date: "2026-07-05",
  categorie: "Retraite",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
