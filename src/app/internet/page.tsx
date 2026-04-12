import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internet au QuÃ©bec en 2026 â€” Fournisseurs et forfaits | ArgentQC.ca",
  description:
    "Guide complet des fournisseurs internet au QuÃ©bec en 2026 : VidÃ©otron, Bell, Fizz, Oxio, TekSavvy. Fibre vs cÃ¢ble, sans contrat, meilleur prix selon votre rÃ©gion.",
  keywords: [
    "internet QuÃ©bec 2026",
    "fournisseur internet QuÃ©bec",
    "meilleur internet QuÃ©bec",
    "forfait internet QuÃ©bec",
    "fibre optique QuÃ©bec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const typesFournisseurs = [
  {
    type: "Fibre optique",
    emoji: "âš¡",
    desc: "Connexion symÃ©trique (upload = download), trÃ¨s stable, idÃ©ale pour le tÃ©lÃ©travail et le streaming 4K. Disponible principalement Ã  MontrÃ©al, QuÃ©bec et Laval. Bell et VidÃ©otron dÃ©ploient activement leur rÃ©seau fibre.",
    avantages: ["Vitesse symÃ©trique", "TrÃ¨s faible latence", "Stable et fiable"],
    inconvenients: ["DisponibilitÃ© limitÃ©e", "Prix plus Ã©levÃ©"],
  },
  {
    type: "CÃ¢ble coaxial",
    emoji: "ðŸ“¡",
    desc: "Technologie dominante au QuÃ©bec. Vitesse de tÃ©lÃ©chargement Ã©levÃ©e mais upload plus lent. RÃ©seau partagÃ© dans le quartier â€” performances peuvent varier en soirÃ©e.",
    avantages: ["Large disponibilitÃ©", "Bon rapport prix/vitesse", "Installations existantes"],
    inconvenients: ["Upload plus lent", "RÃ©seau partagÃ©"],
  },
];

const criteres = [
  {
    titre: "Vitesse de tÃ©lÃ©chargement (download)",
    emoji: "â¬‡ï¸",
    desc: "Pour la navigation, Netflix et YouTube. 100 Mbps suffit pour 2â€“3 appareils. 500 Mbps pour une famille connectÃ©e.",
  },
  {
    titre: "Vitesse d'envoi (upload)",
    emoji: "â¬†ï¸",
    desc: "Crucial pour le tÃ©lÃ©travail, les visioconfÃ©rences et le stockage en nuage. La fibre offre des vitesses symÃ©triques â€” le cÃ¢ble peut Ãªtre 10Ã— plus lent en upload.",
  },
  {
    titre: "Contrat et engagement",
    emoji: "ðŸ“‹",
    desc: "Plusieurs fournisseurs offrent des forfaits sans contrat (Fizz, Oxio, TekSavvy). Bell exige gÃ©nÃ©ralement 24 mois. Un contrat peut offrir un rabais initial, mais limite votre flexibilitÃ©.",
  },
  {
    titre: "Location du modem",
    emoji: "ðŸ“¦",
    desc: "Certains fournisseurs facturent 5â€“10 $/mois pour le modem. Acheter votre propre Ã©quipement compatible peut Ã©conomiser 60â€“120 $/an. VÃ©rifiez la liste des modems approuvÃ©s.",
  },
  {
    titre: "Service Ã  la clientÃ¨le et fiabilitÃ©",
    emoji: "ðŸ› ï¸",
    desc: "Oxio et Fizz misent sur un support 100% numÃ©rique. VidÃ©otron et Bell offrent des techniciens en personne. Les fournisseurs alternatifs (Oxio, TekSavvy) louent le rÃ©seau de VidÃ©otron ou Bell.",
  },
];

const faqs = [
  {
    q: "Fibre ou cÃ¢ble : quelle diffÃ©rence concrÃ¨te au QuÃ©bec ?",
    r: "La fibre offre des vitesses symÃ©triques (upload = download), ce qui est dÃ©terminant pour le tÃ©lÃ©travail et les visioconfÃ©rences. Le cÃ¢ble est asymÃ©trique â€” vous tÃ©lÃ©chargez vite mais l'envoi est lent. Pour la navigation et le streaming, le cÃ¢ble haute vitesse est souvent suffisant. Pour le tÃ©lÃ©travail intensif, la fibre est recommandÃ©e.",
  },
  {
    q: "Quel est le meilleur fournisseur internet Ã  MontrÃ©al ?",
    r: "Cela dÃ©pend de votre prioritÃ©. Pour le prix, Oxio (44$/mois) ou Fizz (47â€“58$/mois) sont imbattables. Pour la vitesse fibre, VidÃ©otron et Bell dominent. Pour la flexibilitÃ© sans contrat, Fizz et Oxio n'exigent aucun engagement. Bell impose un contrat de 24 mois mais inclut le modem.",
  },
  {
    q: "Combien de temps pour l'installation d'un nouvel abonnement ?",
    r: "Pour le cÃ¢ble, l'activation peut parfois Ãªtre faite en libre-service si l'infrastructure est dÃ©jÃ  en place (2â€“5 jours). Pour la fibre ou un nouvel immeuble, comptez 1â€“3 semaines pour un rendez-vous technicien. Planifiez Ã  l'avance lors d'un dÃ©mÃ©nagement.",
  },
  {
    q: "Les fournisseurs alternatifs (Fizz, Oxio) sont-ils fiables ?",
    r: "Oui. Fizz (filiale de VidÃ©otron) et Oxio utilisent le rÃ©seau cÃ¢blÃ© de VidÃ©otron â€” vous avez la mÃªme infrastructure physique, mais une expÃ©rience client et un prix diffÃ©rents. TekSavvy est un revendeur agrÃ©Ã© bien Ã©tabli. La principale diffÃ©rence est le support client : 100% en ligne pour ces fournisseurs.",
  },
];

export default function InternetPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header
        style={{
          background: DARK,
          position: "sticky",
          top: 0,
          zIndex: 10,
          padding: "14px 16px",
          boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 800,
              fontSize: "15px",
              color: GOLD,
              textDecoration: "none",
            }}
          >
            ArgentQC.ca
          </Link>
          <Link
            href="/questionnaire"
            style={{
              color: GOLD,
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "underline",
              opacity: 0.85,
            }}
          >
            Trouver mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{ background: DARK, position: "relative", overflow: "hidden" }}
        className="px-5 py-12"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.05,
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="max-w-2xl mx-auto"
          style={{ position: "relative", zIndex: 1 }}
        >
          <nav
            style={{
              fontSize: "12px",
              color: "rgba(240,235,224,0.4)",
              marginBottom: "12px",
            }}
          >
            <Link
              href="/"
              style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}
            >
              Accueil
            </Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Internet</span>
          </nav>
          <p
            style={{
              color: GOLD,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
              opacity: 0.8,
            }}
          >
            Guide complet Â· QuÃ©bec 2026
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Internet au QuÃ©bec en 2026
          </h1>
          <p
            style={{
              color: "rgba(240,235,224,0.6)",
              fontSize: "14px",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            Comparez VidÃ©otron, Bell, Fizz, Oxio, TekSavvy et Cogeco. Fibre vs cÃ¢ble,
            contrat vs sans engagement â€” tout ce qu&apos;il faut savoir pour choisir
            le meilleur forfait internet selon votre rÃ©gion et votre budget.
          </p>
          <Link
            href="/internet/comparateur"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: GOLD,
              color: DARK,
              fontWeight: 800,
              fontSize: "14px",
              padding: "12px 22px",
              borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            Comparer les forfaits â†’
          </Link>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Ad placeholder 1 */}
        <div
          style={{
            background: "#EDE9E0",
            borderRadius: "12px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A29E",
            fontSize: "11px",
            marginBottom: "2rem",
          }}
        >
          PublicitÃ©
        </div>

        {/* Types de connexion */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          Fibre vs cÃ¢ble : quelle technologie choisir ?
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {typesFournisseurs.map((t) => (
            <div
              key={t.type}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #EDE9E0",
                padding: "1.25rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ fontSize: "1.5rem" }}>{t.emoji}</span>
                <h3 style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E", margin: 0 }}>
                  {t.type}
                </h3>
              </div>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, marginBottom: "12px" }}>
                {t.desc}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {t.avantages.map((a) => (
                  <span
                    key={a}
                    style={{
                      background: "#D1FAE5",
                      color: "#065F46",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    âœ“ {a}
                  </span>
                ))}
                {t.inconvenients.map((i) => (
                  <span
                    key={i}
                    style={{
                      background: "#FEE2E2",
                      color: "#991B1B",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    âœ— {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA comparateur */}
        <Link
          href="/internet/comparateur"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: DARK,
            borderRadius: "16px",
            padding: "1.25rem 1.5rem",
            textDecoration: "none",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <div
              style={{
                color: GOLD,
                fontFamily: "var(--font-playfair)",
                fontWeight: 800,
                fontSize: "1.1rem",
                marginBottom: "4px",
              }}
            >
              Comparateur internet QuÃ©bec
            </div>
            <div style={{ color: "rgba(240,235,224,0.5)", fontSize: "12px" }}>
              Filtrez par budget, vitesse et type de connexion
            </div>
          </div>
          <span style={{ color: GOLD, fontSize: "1.4rem" }}>â†’</span>
        </Link>

        {/* CritÃ¨res de choix */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          5 critÃ¨res pour bien choisir
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {criteres.map((c, i) => (
            <div
              key={c.titre}
              style={{
                background: "white",
                borderRadius: "14px",
                border: "1px solid #EDE9E0",
                padding: "14px 16px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: DARK,
                  color: GOLD,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  flexShrink: 0,
                }}
              >
                {c.emoji}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "4px" }}>
                  {i + 1}. {c.titre}
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ad placeholder 2 */}
        <div
          style={{
            background: "#EDE9E0",
            borderRadius: "12px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A29E",
            fontSize: "11px",
            marginBottom: "2rem",
          }}
        >
          PublicitÃ©
        </div>

        {/* Liens internes */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          Guides connexes
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {[
            {
              href: "/internet/comparateur",
              emoji: "ðŸŒ",
              titre: "Comparateur internet QuÃ©bec 2026",
              desc: "Filtres par budget, vitesse, type et sans contrat",
            },
            {
              href: "/demenagement",
              emoji: "ðŸ“¦",
              titre: "Guide dÃ©mÃ©nagement QuÃ©bec",
              desc: "Tout prÃ©voir : rÃ©siliation, transfert, nouvel abonnement",
            },
            {
              href: "/budget/calculateur",
              emoji: "ðŸ§®",
              titre: "Calculateur de budget QuÃ©bec",
              desc: "IntÃ©grez le coÃ»t de votre internet dans votre budget mensuel",
            },
          ].map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "white",
                border: "1px solid #EDE9E0",
                borderRadius: "14px",
                padding: "14px 16px",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{lien.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                  {lien.titre}
                </div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>
                  {lien.desc}
                </div>
              </div>
              <span style={{ color: "#3B82F6", fontSize: "14px" }}>â†’</span>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          Questions frÃ©quentes
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #EDE9E0",
                padding: "1rem 1.25rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#1C1C1E",
                  marginBottom: "8px",
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#44403C",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {faq.r}
              </p>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.r },
              })),
            }),
          }}
        />
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              color: GOLD,
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            ArgentQC.ca
          </p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>
            Outil informatif non affiliÃ© aux fournisseurs internet ou au gouvernement.
          </p>
          <Link
            href="/contact"
            style={{
              color: "rgba(240,235,224,0.45)",
              fontSize: "11px",
              display: "block",
              marginTop: "6px",
            }}
          >
            Contactez-nous
          </Link>
        </div>
      </footer>
    </main>
  );
}
