import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remboursement d'impÃ´ts QuÃ©bec 2026 â€” DÃ©lais, montants et suivi | ArgentQC.ca",
  description:
    "Combien de temps pour recevoir votre remboursement d'impÃ´ts au QuÃ©bec en 2026 ? DÃ©lais par mÃ©thode, comment suivre votre dossier ARC et Revenu QuÃ©bec, et crÃ©dits souvent oubliÃ©s.",
  keywords: [
    "remboursement impÃ´ts QuÃ©bec 2026",
    "dÃ©lai remboursement impÃ´ts QuÃ©bec",
    "combien remboursement impÃ´ts QuÃ©bec",
    "suivre remboursement impÃ´ts",
    "Mon dossier ARC remboursement",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const delaisRemboursement = [
  { methode: "En ligne + dÃ©pÃ´t direct", arc: "~2 semaines", revenuQC: "2â€“4 semaines", emoji: "âš¡", meilleur: true },
  { methode: "En ligne + chÃ¨que par courrier", arc: "4â€“6 semaines", revenuQC: "4â€“6 semaines", emoji: "ðŸ–¥ï¸", meilleur: false },
  { methode: "Papier + dÃ©pÃ´t direct", arc: "~8 semaines", revenuQC: "8â€“10 semaines", emoji: "ðŸ“„", meilleur: false },
  { methode: "Papier + chÃ¨que par courrier", arc: "8â€“12 semaines", revenuQC: "10â€“12 semaines", emoji: "ðŸ“¬", meilleur: false },
];

const raisonsRetard = [
  {
    raison: "VÃ©rification de votre dÃ©claration",
    detail: "L'ARC ou Revenu QuÃ©bec peut sÃ©lectionner votre dÃ©claration pour vÃ©rification alÃ©atoire. Cela peut prendre 4 Ã  16 semaines supplÃ©mentaires. Vous recevrez un avis si c'est le cas.",
    emoji: "ðŸ”",
  },
  {
    raison: "Erreurs ou renseignements manquants",
    detail: "Une erreur de calcul, un feuillet manquant (T4, RL-1) ou une information contradictoire peuvent dÃ©clencher une demande de clarification avant que votre remboursement soit traitÃ©.",
    emoji: "âš ï¸",
  },
  {
    raison: "Compensation de dettes gouvernementales",
    detail: "Si vous devez de l'argent Ã  d'autres programmes gouvernementaux (pension alimentaire, prÃªts Ã©tudiants, trop-perÃ§us de prestations), votre remboursement peut Ãªtre rÃ©duit ou retenu pour compensation.",
    emoji: "âš–ï¸",
  },
  {
    raison: "DÃ©claration produite sur papier en pÃ©riode de pointe",
    detail: "Les dÃ©clarations papier reÃ§ues en mars-avril sont traitÃ©es en lot. Plus vous produisez tard, plus vous attendez. En ligne = prioritÃ© dans la file de traitement.",
    emoji: "ðŸ“¬",
  },
  {
    raison: "CoordonnÃ©es bancaires incorrectes",
    detail: "Si vos coordonnÃ©es de dÃ©pÃ´t direct sont erronÃ©es ou pÃ©rimÃ©es dans Mon dossier ARC ou Mon dossier Revenu QuÃ©bec, l'organisme revient Ã  un chÃ¨que papier, ajoutant plusieurs semaines.",
    emoji: "ðŸ¦",
  },
];

const creditsOublies = [
  {
    credit: "Frais mÃ©dicaux",
    detail: "Lunettes, soins dentaires, physiothÃ©rapie, mÃ©dicaments sur ordonnance, primes d'assurance mÃ©dicale â€” accumulez toutes les factures de 12 mois consÃ©cutifs.",
    href: "/credit-impot-frais-medicaux-quebec",
    montant: "Jusqu'Ã  ~1 200â€“2 000 $ de crÃ©dit",
  },
  {
    credit: "Dons de bienfaisance",
    detail: "Les dons aux organismes enregistrÃ©s gÃ©nÃ¨rent un crÃ©dit d'impÃ´t de 15% (fÃ©dÃ©ral) sur les premiers 200 $ et 29% sur l'excÃ©dent. Conservez vos reÃ§us.",
    href: "/credit-impot-quebec",
    montant: "CrÃ©dit de 15â€“29% du montant du don",
  },
  {
    credit: "Frais de dÃ©mÃ©nagement",
    detail: "Si vous avez dÃ©mÃ©nagÃ© pour un emploi ou des Ã©tudes en 2025 et que la distance est d'au moins 40 km, plusieurs coÃ»ts sont dÃ©ductibles : camion, hÃ©bergement temporaire, frais de rÃ©siliation de bail.",
    href: "/demenagement/cout",
    montant: "Variable â€” dÃ©duction du revenu d'emploi",
  },
  {
    credit: "CrÃ©dit de solidaritÃ© (Revenu QuÃ©bec)",
    detail: "VersÃ© en plusieurs fois dans l'annÃ©e, ce crÃ©dit remboursable est basÃ© sur votre situation familiale, votre loyer et si vous habitez en rÃ©gion. Ne pas oublier d'inclure votre adresse et loyer exact.",
    href: "/credit-solidarite-quebec",
    montant: "Jusqu'Ã  1 194 $/an selon situation",
  },
  {
    credit: "Cotisation REER dÃ©ductible",
    detail: "Vos cotisations REER faites en 2025 et dans les 60 premiers jours de 2026 rÃ©duisent votre revenu imposable. Assurez-vous d'avoir tous vos reÃ§us de cotisation avant de produire.",
    href: "/retraite/reer",
    montant: "Ã‰conomie ~27â€“53% du montant cotisÃ©",
  },
  {
    credit: "Frais de garde d'enfants",
    detail: "Garderie, camp de jour, garde parascolaire â€” les frais de garde ouvrent droit Ã  une dÃ©duction fÃ©dÃ©rale et un crÃ©dit provincial remboursable au QuÃ©bec. Le parent au revenu le plus faible doit rÃ©clamer.",
    href: "/questionnaire",
    montant: "Jusqu'Ã  8 000 $/enfant (fÃ©dÃ©ral)",
  },
];

const faqs = [
  {
    q: "Comment savoir si mon remboursement a Ã©tÃ© traitÃ© ?",
    r: "Via Mon dossier ARC (canada.ca) : section Â« Remboursements Â» â€” vous verrez la date d'Ã©mission et le montant. Via Mon dossier Revenu QuÃ©bec (revenuquebec.ca) : section Â« Ma dÃ©claration Â». Vous pouvez aussi appeler l'ARC au 1-800-959-1956 (ligne automatisÃ©e) ou Revenu QuÃ©bec au 1-800-267-6299.",
  },
  {
    q: "Puis-je activer le dÃ©pÃ´t direct aprÃ¨s avoir produit ma dÃ©claration ?",
    r: "Oui â€” vous pouvez mettre Ã  jour vos coordonnÃ©es bancaires dans Mon dossier ARC et Mon dossier Revenu QuÃ©bec Ã  n'importe quel moment, mÃªme aprÃ¨s avoir produit votre dÃ©claration. Le dÃ©pÃ´t direct sera utilisÃ© pour votre remboursement si vous le configurez avant qu'il soit Ã©mis.",
  },
  {
    q: "Mon remboursement peut-il Ãªtre retenu pour une dette Ã  Hydro-QuÃ©bec ?",
    r: "Non â€” les remboursements d'impÃ´t ne peuvent Ãªtre retenus que pour des dettes envers des organismes gouvernementaux fÃ©dÃ©raux ou provinciaux (ex. pension alimentaire gouvernementale, prÃªts Ã©tudiants, trop-perÃ§us de prestations). Une dette auprÃ¨s d'une sociÃ©tÃ© d'Ã‰tat comme Hydro-QuÃ©bec ne peut pas Ãªtre compensÃ©e sur votre remboursement d'impÃ´t.",
  },
  {
    q: "Combien puis-je espÃ©rer de remboursement en moyenne au QuÃ©bec ?",
    r: "Le remboursement moyen au Canada tourne autour de 1 800â€“2 200 $ par dÃ©claration fÃ©dÃ©rale. Au QuÃ©bec, en ajoutant le remboursement provincial de Revenu QuÃ©bec, le total combinÃ© est souvent de 2 500â€“3 500 $ pour un salariÃ© avec des crÃ©dits standards. Les rÃ©sidents du QuÃ©bec paient plus d'impÃ´t provincial mais bÃ©nÃ©ficient de davantage de crÃ©dits remboursables (solidaritÃ©, famille).",
  },
  {
    q: "Que faire si mon remboursement est infÃ©rieur Ã  ce que j'attendais ?",
    r: "Comparez le dÃ©tail de votre avis de cotisation (fÃ©dÃ©ral) ou de votre avis de cotisation Revenu QuÃ©bec avec votre dÃ©claration. VÃ©rifiez que tous vos crÃ©dits et dÃ©ductions ont Ã©tÃ© acceptÃ©s. Si vous pensez qu'il y a une erreur, vous pouvez demander une rÃ©vision via Mon dossier ARC (T1-ADJ â€” Demande de redressement) ou faire une demande de modification auprÃ¨s de Revenu QuÃ©bec.",
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
            {" â€º "}
            <Link href="/impots" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>ImpÃ´ts</Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Remboursement</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide Â· Remboursement d&apos;impÃ´ts QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Remboursement d&apos;impÃ´ts au QuÃ©bec â€” DÃ©lais, montants et suivi en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            2 semaines en ligne avec dÃ©pÃ´t direct, 12 semaines sur papier. Comment suivre votre dossier et les crÃ©dits souvent oubliÃ©s qui gonflent votre retour d&apos;impÃ´t.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Conseil pro */}
        <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "12px", padding: "12px 16px", marginBottom: "1.5rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>ðŸ’¡</span>
          <p style={{ fontSize: "13px", color: "#065F46", margin: 0, lineHeight: 1.6 }}>
            <strong>Conseil :</strong>{" "}pour obtenir votre remboursement le plus rapidement possible, produisez en ligne et activez le dÃ©pÃ´t direct dans Mon dossier ARC et Mon dossier Revenu QuÃ©bec avant de produire.
          </p>
        </div>

        {/* Tableau dÃ©lais */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          DÃ©lais moyens de remboursement
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>MÃ©thode</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>ARC (fÃ©dÃ©ral)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Revenu QuÃ©bec</th>
              </tr>
            </thead>
            <tbody>
              {delaisRemboursement.map((row, i) => (
                <tr key={row.methode} style={{ borderBottom: i < delaisRemboursement.length - 1 ? "1px solid #F0EBE0" : "none", background: row.meilleur ? "#ECFDF5" : "white" }}>
                  <td style={{ padding: "10px 14px", color: "#1C1C1E", fontSize: "12px" }}>
                    <span style={{ marginRight: "6px" }}>{row.emoji}</span>
                    <span style={{ fontWeight: row.meilleur ? 700 : 500 }}>{row.methode}</span>
                    {row.meilleur && <span style={{ marginLeft: "6px", background: "#D1FAE5", color: "#065F46", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "100px" }}>RecommandÃ©</span>}
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
            ðŸ” Comment suivre votre remboursement en ligne
          </h2>
          <div className="flex flex-col gap-4">
            <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "12px" }}>
              <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>ðŸ Mon dossier ARC (fÃ©dÃ©ral)</div>
              <p style={{ fontSize: "12px", color: "#44403C", lineHeight: 1.6, margin: 0 }}>
                Connectez-vous sur <strong>canada.ca/mon-dossier-arc</strong> â†’ section <strong>Â«{" "}Remboursements{" "}Â»</strong>. Vous verrez la date d&apos;Ã©mission et le montant exact. Le dÃ©lai de traitement s&apos;affiche aussi en temps rÃ©el.
              </p>
            </div>
            <div style={{ borderLeft: `3px solid "#3B82F6"`, paddingLeft: "12px", borderLeftColor: "#3B82F6" }}>
              <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>ðŸ”µ Mon dossier Revenu QuÃ©bec (provincial)</div>
              <p style={{ fontSize: "12px", color: "#44403C", lineHeight: 1.6, margin: 0 }}>
                Connectez-vous sur <strong>revenuquebec.ca</strong> â†’ <strong>Mon dossier</strong> â†’ <strong>Ma dÃ©claration</strong>. La date de traitement et l&apos;Ã©tat de votre dÃ©claration y sont affichÃ©s.
              </p>
            </div>
          </div>
        </div>

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Raisons retard */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Pourquoi votre remboursement peut Ãªtre retardÃ©
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

        {/* CrÃ©dits oubliÃ©s */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Maximisez votre remboursement â€” crÃ©dits souvent oubliÃ©s
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Ces crÃ©dits et dÃ©ductions sont frÃ©quemment omis et peuvent augmenter votre remboursement de faÃ§on significative.
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
          Questions frÃ©quentes
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
            { href: "/credit-impot-quebec", emoji: "ðŸ’³", titre: "Tous les crÃ©dits d'impÃ´t QuÃ©bec", desc: "Ne manquez aucun crÃ©dit remboursable auquel vous avez droit" },
            { href: "/questionnaire", emoji: "ðŸŽ¯", titre: "Trouvez toutes vos aides", desc: "8 questions pour dÃ©couvrir vos aides gouvernementales" },
            { href: "/impots/dates", emoji: "ðŸ“…", titre: "Dates limites impÃ´ts 2026", desc: "30 avril pour les salariÃ©s, 15 juin pour les autonomes" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>â†’</span>
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Les dÃ©lais indiquÃ©s sont des moyennes â€” ils peuvent varier selon la charge de traitement des organismes fiscaux.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
