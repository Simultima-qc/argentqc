import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "reno-adaptation-programme-2026";

const baseMetadata: Metadata = {
  title: "Réno-Adaptation 2026 : Subventions pour adapter votre domicile au vieillissement",
  description:
    "Guide complet sur le programme Réno-Adaptation en 2026 : travaux admissibles (rampes, salle de bain, ascenseurs), montants selon revenus, cumulable avec Rénoclimat.",
  keywords: [
    "Réno-Adaptation 2026",
    "subvention adaptation domicile Québec",
    "rampe accès fauteuil roulant subvention",
    "adaptation maison aîné Québec",
    "aide financière adaptation logement",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/reno-adaptation-programme-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Logement</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Réno-Adaptation 2026 : Subventions pour adapter votre domicile au vieillissement
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Vieillir chez soi, c&apos;est le souhait de la majorité des Québécois. Le programme
            Réno-Adaptation aide les personnes âgées et les personnes handicapées à financer
            les travaux nécessaires pour rester à domicile en toute sécurité — avec des subventions
            pouvant atteindre <strong>16 000 $</strong>{" "}selon votre revenu.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Subvention jusqu&apos;à <strong>16 000 $</strong>{" "}pour les ménages à faible revenu</li>
            <li>✓ Travaux admissibles : rampes, salles de bain adaptées, monte-escaliers, portes élargies</li>
            <li>✓ Pour personnes de <strong>65 ans et plus</strong>{" "}ou handicapées de tout âge</li>
            <li>✓ Cumulable avec Rénoclimat et les crédits d&apos;impôt provinciaux</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que Réno-Adaptation ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Réno-Adaptation est un programme d&apos;aide financière administré par la Société d&apos;habitation
            du Québec (SHQ). Il vise à permettre aux personnes âgées et aux personnes handicapées
            de demeurer dans leur logement en finançant les travaux d&apos;adaptation nécessaires à leur
            sécurité et à leur autonomie.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Contrairement aux rénovations esthétiques, Réno-Adaptation finance des modifications
            <strong> fonctionnelles</strong>{" "}liées directement à une limitation physique ou à une condition médicale.
            Un diagnostic d&apos;un professionnel de la santé est requis pour valider le besoin.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui peut en bénéficier ?</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                profil: "Personnes de 65 ans et plus",
                detail: "Propriétaires ou locataires qui ont besoin d&apos;adapter leur domicile pour le vieillissement en place.",
              },
              {
                profil: "Personnes handicapées (tout âge)",
                detail: "Avec une limitation fonctionnelle attestée par un médecin ou un ergothérapeute, peu importe l&apos;âge.",
              },
              {
                profil: "Ménages à faible ou moyen revenu",
                detail: "Le montant de la subvention est modulé selon votre revenu familial — plus le revenu est faible, plus la subvention est élevée.",
              },
            ].map((item) => (
              <div key={item.profil} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.profil}</p>
                <p className="text-slate-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Travaux admissibles</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les travaux doivent être directement liés à la limitation fonctionnelle de la personne.
            Voici les exemples les plus courants :
          </p>
          <div className="grid grid-cols-1 gap-2">
            {[
              { travail: "Rampes d&apos;accès et mains courantes", ex: "Entrée, escaliers intérieurs et extérieurs" },
              { travail: "Salle de bain adaptée", ex: "Barre d&apos;appui, siège de douche, douche de plain-pied" },
              { travail: "Monte-escalier ou élévateur", ex: "Pour accéder aux étages sans risque de chute" },
              { travail: "Élargissement des portes", ex: "Pour permettre le passage d&apos;un fauteuil roulant" },
              { travail: "Plancher antidérapant", ex: "Dans les zones à risque (salle de bain, cuisine)" },
              { travail: "Équipements de cuisine adaptés", ex: "Comptoirs abaissés, tiroirs accessibles en fauteuil" },
            ].map((item) => (
              <div key={item.travail} className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                <p className="font-semibold text-blue-800 text-sm" dangerouslySetInnerHTML={{ __html: item.travail }} />
                <p className="text-blue-600 text-xs mt-0.5">{item.ex}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants de la subvention</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La subvention couvre un pourcentage du coût des travaux selon votre revenu familial.
            Les ménages les plus modestes peuvent obtenir jusqu&apos;à 100 % des coûts admissibles.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Aide maximale selon le revenu familial</p>
            <div className="space-y-2 text-sm">
              {[
                { revenu: "Revenu faible (moins de 30 000 $)", taux: "100 %", max: "16 000 $" },
                { revenu: "Revenu moyen-faible (30 000 – 50 000 $)", taux: "75 %", max: "12 000 $" },
                { revenu: "Revenu moyen (50 000 – 80 000 $)", taux: "50 %", max: "8 000 $" },
                { revenu: "Revenu moyen-élevé (80 000 $ et plus)", taux: "Réduit ou non admissible", max: "Variable" },
              ].map((item) => (
                <div key={item.revenu} className="flex justify-between items-center border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="text-blue-900">{item.revenu}</span>
                    <span className="text-blue-600 text-xs ml-2">({item.taux})</span>
                  </div>
                  <span className="font-bold text-blue-800">{item.max}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Les seuils et taux sont révisés annuellement par la SHQ. Consultez le site officiel
            pour les barèmes en vigueur au moment de votre demande.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Contactez votre municipalité ou un OSBL partenaire",
                texte: "Réno-Adaptation est administré localement par les municipalités et certains organismes sans but lucratif mandatés par la SHQ. Commencez par appeler votre municipalité ou le Centre local de développement (CLD) de votre région.",
              },
              {
                num: "2",
                titre: "Obtenez une évaluation des travaux nécessaires",
                texte: "Un ergothérapeute ou un professionnel mandaté évalue votre domicile et recommande les travaux d&apos;adaptation requis selon votre condition médicale. Cette évaluation est souvent gratuite dans le cadre du programme.",
              },
              {
                num: "3",
                titre: "Soumettez votre demande avec les documents",
                texte: "Vous aurez besoin de : pièce d&apos;identité, preuve de revenus, évaluation des travaux, attestation médicale et soumissions d&apos;entrepreneurs. L&apos;organisme vous guidera dans les formulaires à remplir.",
              },
              {
                num: "4",
                titre: "Attendez l&apos;approbation avant de commencer les travaux",
                texte: "IMPORTANT : vous devez recevoir l&apos;approbation écrite avant de commencer les travaux. Des travaux déjà réalisés ne sont pas admissibles à la subvention.",
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">Cumuler Réno-Adaptation avec d&apos;autres programmes</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Selon les travaux, vous pouvez combiner Réno-Adaptation avec d&apos;autres aides :
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <div className="space-y-3 text-sm">
              {[
                { programme: "Rénoclimat (TEQ)", desc: "Si les travaux améliorent aussi l&apos;efficacité énergétique (ex. : fenêtres, isolation)" },
                { programme: "Crédit d&apos;impôt pour maintien à domicile (Québec)", desc: "Pour les services à domicile des 70 ans et plus (aide ménagère, soins)" },
                { programme: "Programme HOPE — SCHL (fédéral)", desc: "Pour propriétaires à faible revenu qui effectuent des réparations essentielles" },
              ].map((item) => (
                <div key={item.programme} className="border-b border-green-200 pb-3 last:border-0 last:pb-0">
                  <p className="font-semibold text-green-800">{item.programme}</p>
                  <p className="text-green-700 text-xs mt-0.5" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Trouvez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            Réno-Adaptation, maintien à domicile, allocation logement — voyez rapidement ce à quoi vous avez droit.
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
            href="https://www.habitation.gouv.qc.ca/programme/programme/reno-adaptation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            habitation.gouv.qc.ca — Réno-Adaptation
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
  titre: "Réno-Adaptation 2026 : Subventions pour adapter votre domicile au vieillissement",
  description:
    "Tout sur le programme Réno-Adaptation en 2026 : travaux admissibles, montants de subvention selon le revenu, démarche de demande et cumul avec d'autres programmes.",
  date: "2026-07-05",
  categorie: "Logement",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
