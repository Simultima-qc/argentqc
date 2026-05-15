import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "REER — Guide complet pour les Québécois en 2026 | ArgentQC.ca",
  description:
    "Tout sur le REER en 2026 : plafond de cotisation, économie d'impôt avec exemples chiffrés, REER vs CELI, RAP pour l'achat d'une maison et erreurs fréquentes à éviter.",
  keywords: [
    "REER Québec",
    "REER 2026",
    "cotisation maximale REER 2026",
    "comment fonctionne REER",
    "REER vs CELI",
    "RAP REER premier acheteur",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const economiesImpot = [
  { revenu: "35 000 $", taux: "~27%", cotisation: "3 000 $", economie: "~810 $" },
  { revenu: "50 000 $", taux: "~37%", cotisation: "5 000 $", economie: "~1 850 $" },
  { revenu: "75 000 $", taux: "~43%", cotisation: "8 000 $", economie: "~3 440 $" },
  { revenu: "100 000 $", taux: "~48%", cotisation: "10 000 $", economie: "~4 800 $" },
  { revenu: "150 000 $", taux: "~53%", cotisation: "18 000 $", economie: "~9 540 $" },
];

const reerVsCeli = [
  { critere: "Cotisation réduit le revenu imposable ?", reer: "✅ Oui — remboursement d'impôt immédiat", celi: "❌ Non — pas de déduction" },
  { critere: "Retrait imposable ?", reer: "✅ Oui — imposé comme revenu à la retraite", celi: "❌ Non — retraits toujours libres d'impôt" },
  { critere: "Plafond de cotisation 2026", reer: "18% du revenu gagné (max. 32 490 $)", celi: "7 000 $/an (+ droits inutilisés)" },
  { critere: "Droits récupérés après retrait ?", reer: "❌ Non — un retrait perd les droits", celi: "✅ Oui — récupérés l'année suivante" },
  { critere: "Âge limite de cotisation", reer: "71 ans — conversion en FERR obligatoire", celi: "Aucun âge limite" },
  { critere: "Idéal pour", reer: "Revenu élevé maintenant, plus faible à la retraite", celi: "Flexibilité, revenus similaires avant/après retraite" },
];

const erreurs = [
  { erreur: "Cotiser sans tenir compte de son taux marginal", detail: "Cotiser au REER quand votre revenu est bas (moins de 40 000 $) peut être sous-optimal — le remboursement d'impôt est plus faible. Attendez une année de revenu plus élevé, ou priorisez le CELI.", emoji: "💸" },
  { erreur: "Retirer le REER avant 65 ans pour autre chose que le RAP/LLP", detail: "Un retrait hors RAP ou LLP est imposé comme revenu ordinaire — et vous perdez définitivement ces droits de cotisation.", emoji: "🚫" },
  { erreur: "Oublier le délai de 60 jours", detail: "Les cotisations REER des 60 premiers jours d'une année peuvent être déduites pour l'année fiscale précédente. La date limite 2026 : ~1er mars 2027 pour l'année d'imposition 2026.", emoji: "📅" },
  { erreur: "Investir le REER dans un compte d'épargne ordinaire", detail: "Un REER est un contenant, pas un placement. Ce qu'il contient est crucial : FNB d'indices, fonds de retraite — pas juste un dépôt à 2%. L'abri fiscal ne vaut rien si le capital ne fructifie pas.", emoji: "📊" },
  { erreur: "Ne pas planifier la décumulation", detail: "Comment décaisser le REER (converti en FERR à 71 ans) sans exploser votre taux d'imposition est aussi important que l'accumulation. Combiner FERR + CELI + SV + RRQ demande une stratégie.", emoji: "🧮" },
];

const faqs = [
  {
    q: "Quel est le plafond de cotisation REER en 2026 ?",
    r: "Le plafond de cotisation REER 2026 est de 18% du revenu gagné en 2025, jusqu'à un maximum de 32 490 $. Votre plafond personnel est indiqué sur votre avis de cotisation de l'Agence du revenu du Canada (ARC). N'oubliez pas d'ajouter vos droits inutilisés des années précédentes.",
  },
  {
    q: "C'est quoi le RAP (Régime d'accession à la propriété) ?",
    r: "Le RAP permet de retirer jusqu'à 35 000 $ de son REER sans impôt pour acheter une première propriété. Un couple peut retirer jusqu'à 70 000 $ combinés. Le montant doit être remboursé dans le REER sur 15 ans (à partir de la 2e année suivant le retrait), sinon la partie non remboursée est incluse dans le revenu. Depuis 2023, le plafond est passé de 35 000 $ à 35 000 $.",
  },
  {
    q: "Qu'est-ce que le LLP (Régime d'encouragement à l'éducation permanente) ?",
    r: "Le LLP permet de retirer jusqu'à 10 000 $/an (max. 20 000 $ au total) de son REER pour financer ses études ou celles de son conjoint dans un établissement d'enseignement agréé. Le montant doit être remboursé sur 10 ans. Moins connu que le RAP, mais très utile pour un retour aux études.",
  },
  {
    q: "À quel âge commencer à cotiser au REER ?",
    r: "Le plus tôt possible — l'intérêt composé fait des miracles sur de longues périodes. Une cotisation de 5 000 $ à 25 ans dans un FNB avec un rendement moyen de 7%/an vaudra environ 74 000 $ à 65 ans. La même cotisation faite à 45 ans vaudra environ 19 000 $. Chaque année compte.",
  },
];

export default function ReerPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/questionnaire" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.85 }}>
            Trouver mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
            {" › "}
            <Link href="/retraite" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Retraite</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>REER</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet · REER Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            REER — Guide complet pour les Québécois en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Plafond de cotisation 2026, économie d&apos;impôt concrète, REER vs CELI, RAP pour l&apos;achat
            d&apos;une maison et les 5 erreurs à éviter.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Explication simple */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            💰 C&apos;est quoi un REER, concrètement ?
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "12px" }}>
            Un REER est un <strong>compte d&apos;épargne enregistré</strong>{" "}qui vous permet d&apos;investir à l&apos;abri de l&apos;impôt jusqu&apos;à votre retraite. Deux avantages fiscaux majeurs :
          </p>
          <div className="flex flex-col gap-3">
            <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "10px", padding: "10px 14px" }}>
              <p style={{ fontSize: "13px", color: "#065F46", margin: 0, lineHeight: 1.6 }}>
                <strong>1. Déduction immédiate :</strong>{" "}chaque dollar cotisé réduit votre revenu imposable de l&apos;année — vous recevez un remboursement d&apos;impôt.
              </p>
            </div>
            <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "10px", padding: "10px 14px" }}>
              <p style={{ fontSize: "13px", color: "#065F46", margin: 0, lineHeight: 1.6 }}>
                <strong>2. Croissance à l&apos;abri de l&apos;impôt :</strong>{" "}les intérêts, dividendes et gains en capital accumulés dans le REER ne sont pas imposés tant qu&apos;ils y restent.
              </p>
            </div>
          </div>
          <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "10px", padding: "10px 14px", marginTop: "10px" }}>
            <p style={{ fontSize: "12px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>
              ⚠️ <strong>Important :</strong>{" "}les retraits sont imposés comme revenu ordinaire. L&apos;idée est de cotiser quand votre taux marginal est élevé, et retirer quand il est plus bas (à la retraite).
            </p>
          </div>
        </div>

        {/* Plafond 2026 */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "1.25rem", marginBottom: "2rem", textAlign: "center" }}>
          <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Plafond REER 2026</p>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "2rem", fontWeight: 800, marginBottom: "4px" }}>32 490 $</p>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "13px" }}>ou 18% du revenu gagné en 2025, selon le moins élevé des deux</p>
          <p style={{ color: "rgba(240,235,224,0.4)", fontSize: "11px", marginTop: "8px" }}>
            Votre plafond personnel (incluant les droits inutilisés) figure sur votre avis de cotisation ARC.
          </p>
        </div>

        {/* Tableau économies d'impôt */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Combien récupérez-vous en impôts ? (Québec 2026)
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Le remboursement d&apos;impôt dépend de votre taux marginal combiné fédéral + provincial.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Revenu imposable</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Taux marginal QC</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Cotisation ex.</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Remboursement</th>
              </tr>
            </thead>
            <tbody>
              {economiesImpot.map((e, i) => (
                <tr key={e.revenu} style={{ borderBottom: i < economiesImpot.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, color: "#1C1C1E" }}>{e.revenu}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>{e.taux}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>{e.cotisation}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, color: GREEN }}>{e.economie}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* REER vs CELI */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          REER vs CELI — Lequel choisir ?
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Critère</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>💰 REER</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>📈 CELI</th>
              </tr>
            </thead>
            <tbody>
              {reerVsCeli.map((r, i) => (
                <tr key={r.critere} style={{ borderBottom: i < reerVsCeli.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, color: "#44403C", fontSize: "12px" }}>{r.critere}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#1C1C1E", fontSize: "12px" }}>{r.reer}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#1C1C1E", fontSize: "12px" }}>{r.celi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RAP et LLP */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Utiliser le REER autrement : RAP et LLP
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div style={{ background: "white", border: "2px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>🏠</div>
            <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#1E40AF", marginBottom: "8px" }}>RAP — Régime d&apos;accession à la propriété</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#1E3A8A", lineHeight: 1.75 }}>
              <li>Retrait max. : <strong>35 000 $</strong>{" "}par personne</li>
              <li>Couple : jusqu&apos;à <strong>70 000 $</strong>{" "}combinés</li>
              <li>Sans impôt si remboursé sur 15 ans</li>
              <li>Réservé aux premiers acheteurs</li>
            </ul>
            <Link href="/blog/rap-reer-premier-acheteur-quebec-2026" style={{ display: "block", marginTop: "10px", color: "#1D4ED8", fontWeight: 700, fontSize: "12px", textDecoration: "none" }}>
              Lire notre guide complet RAP →
            </Link>
          </div>
          <div style={{ background: "white", border: "2px solid #D1FAE5", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>🎓</div>
            <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#065F46", marginBottom: "8px" }}>LLP — Régime d&apos;encouragement à l&apos;éducation permanente</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#047857", lineHeight: 1.75 }}>
              <li>Retrait max. : <strong>10 000 $/an</strong></li>
              <li>Maximum cumulatif : <strong>20 000 $</strong></li>
              <li>Pour vous ou votre conjoint</li>
              <li>Remboursement sur 10 ans</li>
            </ul>
          </div>
        </div>

        {/* Erreurs */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          5 erreurs fréquentes avec le REER
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {erreurs.map((e, i) => (
            <div key={e.erreur} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#FEF2F2", border: "1px solid #FECACA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, color: "#DC2626", flexShrink: 0 }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>{e.erreur}</div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{e.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Questions fréquentes
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "1rem 1.25rem" }}>
              <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>{faq.q}</h3>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{faq.r}</p>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.r },
              })),
            }),
          }}
        />

        {/* CTAs */}
        <div className="flex flex-col gap-3 mb-4">
          {[
            { href: "/retraite/reer-vs-celi", emoji: "⚖️", titre: "REER ou CELI — Comparatif", desc: "Choisir le bon ordre selon revenu, impôt, retraite et flexibilité" },
            { href: "/retraite/celi", emoji: "📈", titre: "CELI — Guide complet", desc: "Comparer REER et CELI, droits 2026, erreurs à éviter" },
            { href: "/retraite/celiapp", emoji: "🏡", titre: "Combinez avec le CELIAPP →", desc: "REER + CELIAPP = stratégie optimale pour le premier achat" },
            { href: "/retraite/rrq", emoji: "🏛️", titre: "RRQ — Votre rente de retraite", desc: "Montants 2026 et impact du choix de l'âge" },
            { href: "/retraite", emoji: "🏖️", titre: "Guide retraite Québec", desc: "Les 5 piliers et combien épargner selon votre profil" },
            { href: "/impots/remboursement", emoji: "🧾", titre: "Calculez votre retour d'impôts REER", desc: "Crédits, délais de remboursement et maximiser votre retour" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter
        legalText={"Outil informatif. Consultez un conseiller financier pour une planification personnalisée."}
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ background: DARK, padding: "24px 16px" }}
        brandStyle={{ color: GOLD }}
        contactLinkStyle={{ marginTop: "6px" }}
      />
    </main>
  );
}
