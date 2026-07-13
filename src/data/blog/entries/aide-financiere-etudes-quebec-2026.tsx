import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "aide-financiere-etudes-quebec-2026";

const baseMetadata: Metadata = {
  title: "Aide financière aux études 2026 : Bourses et prêts pour étudier au Québec",
  description:
    "Guide complet sur l'Aide financière aux études (AFE) du Québec en 2026 : calcul des bourses vs prêts, critères d'admissibilité, Bourse Perspective Québec et remboursement.",
  keywords: [
    "aide financière aux études 2026",
    "AFE Québec 2026",
    "bourse études Québec",
    "prêts et bourses Québec",
    "Bourse Perspective Québec 2026",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/aide-financiere-etudes-quebec-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">Études</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Aide financière aux études 2026 : Bourses et prêts pour étudier au Québec
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            L&apos;Aide financière aux études (AFE) du Québec permet à des dizaines de milliers d&apos;étudiants
            de financer leurs études chaque année. En 2026, un étudiant à temps plein peut recevoir
            jusqu&apos;à <strong>17 000 $ en bourses et prêts combinés</strong>{" "}selon sa situation — dont une
            partie n&apos;est jamais à rembourser.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Les <strong>bourses</strong>{" "}ne sont jamais remboursées — les prêts, oui</li>
            <li>✓ L&apos;AFE calcule automatiquement la proportion bourse/prêt selon votre revenu familial</li>
            <li>✓ <strong>Bourse Perspective Québec</strong>{" "} : 1 500 $ au collégial ou 2 500 $ à l&apos;université par session admissible</li>
            <li>✓ Demande à faire chaque année scolaire sur le site de l&apos;AFE</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">L&apos;AFE : comment ça fonctionne ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;Aide financière aux études est un programme du gouvernement du Québec administré par
            le ministère de l&apos;Enseignement supérieur. Il évalue votre situation financière et celle
            de vos parents (si vous êtes dépendant) pour calculer le montant auquel vous avez droit.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;aide est divisée en deux parties distinctes :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                type: "Bourse",
                couleur: "bg-green-50 border-green-200",
                texte: "Montant non remboursable versé directement à l&apos;étudiant. Plus votre revenu familial est faible, plus la proportion de bourses est élevée.",
                badge: "Non remboursable",
                badgeCouleur: "bg-green-700 text-white",
              },
              {
                type: "Prêt",
                couleur: "bg-blue-50 border-blue-200",
                texte: "Montant à rembourser après les études, avec un délai de grâce de 6 mois après la fin du programme. Taux d&apos;intérêt préférentiel.",
                badge: "À rembourser",
                badgeCouleur: "bg-blue-700 text-white",
              },
            ].map((item) => (
              <div key={item.type} className={`border rounded-xl p-4 ${item.couleur}`}>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-slate-800">{item.type}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${item.badgeCouleur}`}>{item.badge}</span>
                </div>
                <p className="text-slate-600 text-sm" dangerouslySetInnerHTML={{ __html: item.texte }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants typiques en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le montant varie selon votre niveau d&apos;études, votre situation financière et si vous vivez
            chez vos parents ou de façon autonome.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Aide maximale annuelle (à temps plein)</p>
            <div className="space-y-3">
              {[
                { niveau: "Cégep (collégial)", bourse: "Jusqu&apos;à 4 500 $", pret: "Jusqu&apos;à 2 800 $" },
                { niveau: "Université — 1er cycle", bourse: "Jusqu&apos;à 7 200 $", pret: "Jusqu&apos;à 5 000 $" },
                { niveau: "Université — cycles supérieurs", bourse: "Jusqu&apos;à 8 400 $", pret: "Jusqu&apos;à 5 000 $" },
              ].map((item) => (
                <div key={item.niveau} className="border-b border-blue-100 pb-3 last:border-0 last:pb-0">
                  <p className="font-semibold text-blue-900 text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.niveau }} />
                  <div className="flex gap-4 text-xs">
                    <span className="text-green-700 font-medium" dangerouslySetInnerHTML={{ __html: `Bourse : ${item.bourse}` }} />
                    <span className="text-blue-700 font-medium" dangerouslySetInnerHTML={{ __html: `Prêt : ${item.pret}` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Ces montants représentent le maximum. Votre aide réelle dépend de votre revenu familial,
            de vos dépenses admissibles et de votre charge de cours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">La Bourse Perspective Québec : 1 500 $ ou 2 500 $/session</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            En plus de l&apos;AFE régulière, la <strong>Bourse Perspective Québec</strong>{" "}offre 1 500 $ au collégial ou 2 500 $ à l&apos;université
            par session admissible aux étudiants déjà inscrits dans des programmes ciblés.
            La demande doit être faite après chaque session réussie; elle n&apos;est pas renouvelée automatiquement.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p className="font-semibold text-indigo-800 mb-2 text-sm">Programmes admissibles à la Bourse Perspective</p>
            <ul className="space-y-1 text-sm text-indigo-900">
              {[
                "Génie et technologies",
                "Sciences infirmières et soins de santé",
                "Éducation et enseignement",
                "Informatique et intelligence artificielle",
                "Programmes techniques ciblés au collégial",
              ].map((prog) => (
                <li key={prog}>• {prog}</li>
              ))}
            </ul>
            <p className="text-indigo-600 text-xs mt-2">Liste partielle — consultez le site de l&apos;AFE pour la liste complète.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Créez votre dossier en ligne",
                texte: "Rendez-vous sur le site de l&apos;AFE (afe.gouv.qc.ca). Créez votre compte avec votre code permanent du MEQ. La demande doit être faite chaque année scolaire.",
              },
              {
                num: "2",
                titre: "Fournissez vos informations financières",
                texte: "Vous devrez indiquer vos revenus (et ceux de vos parents si vous êtes dépendant), vos dépenses admissibles (loyer, frais de scolarité, transport) et votre situation de garde.",
              },
              {
                num: "3",
                titre: "Recevez votre attestation d&apos;admissibilité",
                texte: "L&apos;AFE calcule votre aide et vous remet une attestation. Votre établissement scolaire confirme votre inscription à temps plein ou partiel.",
              },
              {
                num: "4",
                titre: "Versements en cours de session",
                texte: "L&apos;aide est versée en tranches au début et en cours de session — généralement deux versements par session pour les études à temps plein.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-indigo-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le remboursement des prêts</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les prêts AFE sont gérés par les institutions financières participantes. Voici ce qu&apos;il
            faut savoir :
          </p>
          <div className="grid grid-cols-1 gap-2">
            {[
              { label: "Délai de grâce", valeur: "6 mois après la fin des études" },
              { label: "Durée maximale de remboursement", valeur: "10 ans (17 ans si prêt élevé)" },
              { label: "Aide au remboursement", valeur: "Programme de remboursement différé si revenus faibles après les études" },
              { label: "Aide à l&apos;exemption d&apos;intérêts", valeur: "Disponible pendant une période de faible revenu" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center bg-white border border-slate-100 rounded-xl px-4 py-3 text-sm gap-3">
                <span className="text-slate-600" dangerouslySetInnerHTML={{ __html: item.label }} />
                <span className="font-semibold text-slate-800 text-right shrink-0" dangerouslySetInnerHTML={{ __html: item.valeur }} />
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Trouvez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            AFE, Bourse Perspective, Crédit canadien pour la formation — voyez ce à quoi vous avez droit selon votre situation.
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
            href="https://www.afe.gouv.qc.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            afe.gouv.qc.ca — Aide financière aux études
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
  titre: "Aide financière aux études 2026 : Bourses et prêts pour étudier au Québec",
  description:
    "Tout sur l'Aide financière aux études (AFE) en 2026 : calcul des bourses et prêts, Bourse Perspective Québec, démarche de demande et remboursement.",
  date: "2026-07-05",
  categorie: "Études",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
