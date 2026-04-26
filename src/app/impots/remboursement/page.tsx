import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Remboursement d'impôts Québec 2026 — Délais, montants et suivi | ArgentQC.ca",
  description:
    "Combien de temps pour recevoir votre remboursement d'impôts au Québec en 2026 ? Délais par méthode, comment suivre votre dossier ARC et Revenu Québec, et crédits souvent oubliés.",
  keywords: [
    "remboursement impôts Québec 2026",
    "délai remboursement impôts Québec",
    "combien remboursement impôts Québec",
    "suivre remboursement impôts",
    "Mon dossier ARC remboursement",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const delaisRemboursement = [
  { methode: "En ligne + dépôt direct", arc: "~2 semaines", revenuQC: "2–4 semaines", emoji: "⚡", meilleur: true },
  { methode: "En ligne + chèque par courrier", arc: "4–6 semaines", revenuQC: "4–6 semaines", emoji: "🖥️", meilleur: false },
  { methode: "Papier + dépôt direct", arc: "~8 semaines", revenuQC: "8–10 semaines", emoji: "📄", meilleur: false },
  { methode: "Papier + chèque par courrier", arc: "8–12 semaines", revenuQC: "10–12 semaines", emoji: "📬", meilleur: false },
];

const raisonsRetard = [
  {
    raison: "Vérification de votre déclaration",
    detail: "L'ARC ou Revenu Québec peut sélectionner votre déclaration pour vérification aléatoire. Cela peut prendre 4 à 16 semaines supplémentaires. Vous recevrez un avis si c'est le cas.",
    emoji: "🔍",
  },
  {
    raison: "Erreurs ou renseignements manquants",
    detail: "Une erreur de calcul, un feuillet manquant (T4, RL-1) ou une information contradictoire peuvent déclencher une demande de clarification avant que votre remboursement soit traité.",
    emoji: "⚠️",
  },
  {
    raison: "Compensation de dettes gouvernementales",
    detail: "Si vous devez de l'argent à d'autres programmes gouvernementaux (pension alimentaire, prêts étudiants, trop-perçus de prestations), votre remboursement peut être réduit ou retenu pour compensation.",
    emoji: "⚖️",
  },
  {
    raison: "Déclaration produite sur papier en période de pointe",
    detail: "Les déclarations papier reçues en mars-avril sont traitées en lot. Plus vous produisez tard, plus vous attendez. En ligne = priorité dans la file de traitement.",
    emoji: "📬",
  },
  {
    raison: "Coordonnées bancaires incorrectes",
    detail: "Si vos coordonnées de dépôt direct sont erronées ou périmées dans Mon dossier ARC ou Mon dossier Revenu Québec, l'organisme revient à un chèque papier, ajoutant plusieurs semaines.",
    emoji: "🏦",
  },
];

const creditsOublies = [
  {
    credit: "Frais médicaux",
    detail: "Lunettes, soins dentaires, physiothérapie, médicaments sur ordonnance, primes d'assurance médicale — accumulez toutes les factures de 12 mois consécutifs.",
    href: "/credit-impot-frais-medicaux-quebec",
    montant: "Jusqu'à ~1 200–2 000 $ de crédit",
  },
  {
    credit: "Dons de bienfaisance",
    detail: "Les dons aux organismes enregistrés génèrent un crédit d'impôt de 15% (fédéral) sur les premiers 200 $ et 29% sur l'excédent. Conservez vos reçus.",
    href: "/credit-impot-quebec",
    montant: "Crédit de 15–29% du montant du don",
  },
  {
    credit: "Frais de déménagement",
    detail: "Si vous avez déménagé pour un emploi ou des études en 2025 et que la distance est d'au moins 40 km, plusieurs coûts sont déductibles : camion, hébergement temporaire, frais de résiliation de bail.",
    href: "/demenagement/cout",
    montant: "Variable — déduction du revenu d'emploi",
  },
  {
    credit: "Crédit de solidarité (Revenu Québec)",
    detail: "Versé en plusieurs fois dans l'année, ce crédit remboursable est basé sur votre situation familiale, votre loyer et si vous habitez en région. Ne pas oublier d'inclure votre adresse et loyer exact.",
    href: "/credit-solidarite-quebec",
    montant: "Jusqu'à 1 194 $/an selon situation",
  },
  {
    credit: "Cotisation REER déductible",
    detail: "Vos cotisations REER faites en 2025 et dans les 60 premiers jours de 2026 réduisent votre revenu imposable. Assurez-vous d'avoir tous vos reçus de cotisation avant de produire.",
    href: "/retraite/reer",
    montant: "Économie ~27–53% du montant cotisé",
  },
  {
    credit: "Frais de garde d'enfants",
    detail: "Garderie, camp de jour, garde parascolaire — les frais de garde ouvrent droit à une déduction fédérale et un crédit provincial remboursable au Québec. Le parent au revenu le plus faible doit réclamer.",
    href: "/questionnaire",
    montant: "Jusqu'à 8 000 $/enfant (fédéral)",
  },
];

const faqs = [
  {
    q: "Comment savoir si mon remboursement a été traité ?",
    r: "Via Mon dossier ARC (canada.ca) : section « Remboursements » — vous verrez la date d'émission et le montant. Via Mon dossier Revenu Québec (revenuquebec.ca) : section « Ma déclaration ». Vous pouvez aussi appeler l'ARC au 1-800-959-1956 (ligne automatisée) ou Revenu Québec au 1-800-267-6299.",
  },
  {
    q: "Puis-je activer le dépôt direct après avoir produit ma déclaration ?",
    r: "Oui — vous pouvez mettre à jour vos coordonnées bancaires dans Mon dossier ARC et Mon dossier Revenu Québec à n'importe quel moment, même après avoir produit votre déclaration. Le dépôt direct sera utilisé pour votre remboursement si vous le configurez avant qu'il soit émis.",
  },
  {
    q: "Mon remboursement peut-il être retenu pour une dette à Hydro-Québec ?",
    r: "Non — les remboursements d'impôt ne peuvent être retenus que pour des dettes envers des organismes gouvernementaux fédéraux ou provinciaux (ex. pension alimentaire gouvernementale, prêts étudiants, trop-perçus de prestations). Une dette auprès d'une société d'État comme Hydro-Québec ne peut pas être compensée sur votre remboursement d'impôt.",
  },
  {
    q: "Combien puis-je espérer de remboursement en moyenne au Québec ?",
    r: "Le remboursement moyen au Canada tourne autour de 1 800–2 200 $ par déclaration fédérale. Au Québec, en ajoutant le remboursement provincial de Revenu Québec, le total combiné est souvent de 2 500–3 500 $ pour un salarié avec des crédits standards. Les résidents du Québec paient plus d'impôt provincial mais bénéficient de davantage de crédits remboursables (solidarité, famille).",
  },
  {
    q: "Que faire si mon remboursement est inférieur à ce que j'attendais ?",
    r: "Comparez le détail de votre avis de cotisation (fédéral) ou de votre avis de cotisation Revenu Québec avec votre déclaration. Vérifiez que tous vos crédits et déductions ont été acceptés. Si vous pensez qu'il y a une erreur, vous pouvez demander une révision via Mon dossier ARC (T1-ADJ — Demande de redressement) ou faire une demande de modification auprès de Revenu Québec.",
  },
];

export default function RemboursementImpotsPage() {
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
            <Link href="/impots" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Impôts</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Remboursement</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide · Remboursement d&apos;impôts Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Remboursement d&apos;impôts au Québec — Délais, montants et suivi en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            2 semaines en ligne avec dépôt direct, 12 semaines sur papier. Comment suivre votre dossier et les crédits souvent oubliés qui gonflent votre retour d&apos;impôt.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Conseil pro */}
        <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "12px", padding: "12px 16px", marginBottom: "1.5rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>💡</span>
          <p style={{ fontSize: "13px", color: "#065F46", margin: 0, lineHeight: 1.6 }}>
            <strong>Conseil :</strong>{" "}pour obtenir votre remboursement le plus rapidement possible, produisez en ligne et activez le dépôt direct dans Mon dossier ARC et Mon dossier Revenu Québec avant de produire.
          </p>
        </div>

        {/* Tableau délais */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Délais moyens de remboursement
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Méthode</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>ARC (fédéral)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Revenu Québec</th>
              </tr>
            </thead>
            <tbody>
              {delaisRemboursement.map((row, i) => (
                <tr key={row.methode} style={{ borderBottom: i < delaisRemboursement.length - 1 ? "1px solid #F0EBE0" : "none", background: row.meilleur ? "#ECFDF5" : "white" }}>
                  <td style={{ padding: "10px 14px", color: "#1C1C1E", fontSize: "12px" }}>
                    <span style={{ marginRight: "6px" }}>{row.emoji}</span>
                    <span style={{ fontWeight: row.meilleur ? 700 : 500 }}>{row.methode}</span>
                    {row.meilleur && <span style={{ marginLeft: "6px", background: "#D1FAE5", color: "#065F46", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "100px" }}>Recommandé</span>}
                  </td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontWeight: row.meilleur ? 700 : 400, color: row.meilleur ? "#065F46" : "#44403C", fontSize: "12px" }}>{row.arc}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontWeight: row.meilleur ? 700 : 400, color: row.meilleur ? "#065F46" : "#44403C", fontSize: "12px" }}>{row.revenuQC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comment suivre */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            🔍 Comment suivre votre remboursement en ligne
          </h2>
          <div className="flex flex-col gap-4">
            <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "12px" }}>
              <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>🍁 Mon dossier ARC (fédéral)</div>
              <p style={{ fontSize: "12px", color: "#44403C", lineHeight: 1.6, margin: 0 }}>
                Connectez-vous sur <strong>canada.ca/mon-dossier-arc</strong> → section <strong>«{" "}Remboursements{" "}»</strong>. Vous verrez la date d&apos;émission et le montant exact. Le délai de traitement s&apos;affiche aussi en temps réel.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid "#3B82F6"`, paddingLeft: "12px", borderLeftColor: "#3B82F6" }}>
              <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>🔵 Mon dossier Revenu Québec (provincial)</div>
              <p style={{ fontSize: "12px", color: "#44403C", lineHeight: 1.6, margin: 0 }}>
                Connectez-vous sur <strong>revenuquebec.ca</strong> → <strong>Mon dossier</strong> → <strong>Ma déclaration</strong>. La date de traitement et l&apos;état de votre déclaration y sont affichés.
              </p>
            </div>
          </div>
        </div>

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Raisons retard */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Pourquoi votre remboursement peut être retardé
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {raisonsRetard.map((r, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{r.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>{r.raison}</div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{r.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Crédits oubliés */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Maximisez votre remboursement — crédits souvent oubliés
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Ces crédits et déductions sont fréquemment omis et peuvent augmenter votre remboursement de façon significative.
        </p>
        <div className="flex flex-col gap-3 mb-10">
          {creditsOublies.map((c) => (
            <Link key={c.credit} href={c.href} style={{ display: "block", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{c.credit}</div>
                <span style={{ background: "#D1FAE5", color: "#065F46", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", whiteSpace: "nowrap", flexShrink: 0 }}>{c.montant}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: "6px 0 0" }}>{c.detail}</p>
            </Link>
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
            { href: "/credit-impot-quebec", emoji: "💳", titre: "Tous les crédits d'impôt Québec", desc: "Ne manquez aucun crédit remboursable auquel vous avez droit" },
            { href: "/questionnaire", emoji: "🎯", titre: "Trouvez toutes vos aides", desc: "8 questions pour découvrir vos aides gouvernementales" },
            { href: "/impots/dates", emoji: "📅", titre: "Dates limites impôts 2026", desc: "30 avril pour les salariés, 15 juin pour les autonomes" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter
        legalText={"Outil informatif. Les délais indiqués sont des moyennes — ils peuvent varier selon la charge de traitement des organismes fiscaux."}
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ background: DARK, padding: "24px 16px" }}
        brandStyle={{ color: GOLD }}
        contactLinkStyle={{ marginTop: "6px" }}
      />
    </main>
  );
}
