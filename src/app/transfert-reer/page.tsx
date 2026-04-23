import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TransferRRSPChecklist from "./TransferRRSPChecklist";
import TransferRRSPFaq from "./TransferRRSPFaq";
import TransferRRSPHero from "./TransferRRSPHero";
import TransferRRSPSteps from "./TransferRRSPSteps";
import TransferRRSPWizard from "./TransferRRSPWizard";
import { DARK, GOLD, PARCH, frequentErrors, relatedPages } from "./content";

const pageTitle = "Transférer un REER sans erreur au Québec | Guide pratique";
const pageDescription =
  "Comment transférer un REER d'une institution à une autre sans retrait imposable. Étapes, erreurs à éviter, délais, formulaire et assistant pratique.";
const pageUrl = "https://argentqc.ca/transfert-reer";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "transfert REER Québec",
    "transférer un REER sans retrait",
    "T2033 REER",
    "transfert direct REER",
    "frais transfert REER",
    "REER collectif transfert",
  ],
  alternates: {
    canonical: pageUrl,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://argentqc.ca/" },
    { "@type": "ListItem", position: 2, name: "Retraite", item: "https://argentqc.ca/retraite" },
    { "@type": "ListItem", position: 3, name: "Transférer un REER sans erreur", item: pageUrl },
  ],
};

export default function TransferReerPage() {
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
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <Link href="/questionnaire" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.85 }}>
            Trouver mes aides
          </Link>
        </div>
      </header>

      <TransferRRSPHero />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <section
          style={{
            background: "#FFF8E8",
            border: "1px solid #F4D585",
            borderRadius: "24px",
            padding: "1.25rem",
            marginBottom: "1.5rem",
            boxShadow: "0 18px 40px rgba(122,90,0,0.08)",
          }}
        >
          <p
            style={{
              color: "#9A7A11",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            La chose la plus importante
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "10px" }}>
            Un transfert direct ≠ un retrait
          </h2>
          <div className="grid grid-cols-1 gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
            <div style={{ background: "white", borderRadius: "18px", padding: "1rem", border: "1px solid #F0E2B8" }}>
              <div style={{ fontWeight: 800, color: "#1C1C1E", marginBottom: "6px" }}>Si tu retires l&apos;argent</div>
              <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, margin: 0 }}>
                Tu peux déclencher de l&apos;impôt retenu à la source tout de suite, perdre le rythme du transfert et te retrouver avec une paperasse plus compliquée.
              </p>
            </div>
            <div style={{ background: "white", borderRadius: "18px", padding: "1rem", border: "1px solid #F0E2B8" }}>
              <div style={{ fontWeight: 800, color: "#1C1C1E", marginBottom: "6px" }}>Si tu fais un transfert direct admissible</div>
              <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, margin: 0 }}>
                L&apos;ARC indique qu&apos;un transfert direct admissible de biens d&apos;un REER non échu ne doit pas être déclaré comme revenu et ne donne pas lieu à une nouvelle déduction.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "12px",
              padding: "12px 14px",
              borderRadius: "16px",
              background: "#1F2937",
              color: "#F9FAFB",
              fontSize: "13px",
              lineHeight: 1.65,
            }}
          >
            En pratique, commence avec la nouvelle institution si tu veux seulement déplacer le REER. C&apos;est souvent le chemin le plus sûr.
          </div>
        </section>

        <TransferRRSPWizard />

        <section style={{ marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <p
              style={{
                color: "#9A7A11",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Repères utiles
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
              Ce que l&apos;ARC dit sur le transfert direct
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            <article style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "20px", padding: "1rem" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>Formulaire souvent cité</h3>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: 0 }}>
                L&apos;ARC publie le <strong>T2033</strong> pour certains transferts directs entre régimes enregistrés.
              </p>
            </article>
            <article style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "20px", padding: "1rem" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>Traitement fiscal général</h3>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: 0 }}>
                Pour un REER non échu transféré directement dans un cas admissible, l&apos;ARC dit de ne pas réclamer une déduction et de ne pas déclarer le montant comme revenu.
              </p>
            </article>
            <article style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "20px", padding: "1rem" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>Formulaire prescrit ou non</h3>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: 0 }}>
                L&apos;ARC précise aussi qu&apos;un formulaire prescrit n&apos;est pas toujours obligatoire si toute l&apos;information requise est consignée, même si plusieurs institutions gardent leurs propres formulaires.
              </p>
            </article>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2033.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", background: "white", border: "1px solid #E7E0D3", borderRadius: "16px", padding: "14px 16px", textDecoration: "none" }}
            >
              <div>
                <div style={{ fontWeight: 700, color: "#1C1C1E", fontSize: "14px" }}>Voir le formulaire T2033 sur le site du Canada</div>
                <div style={{ fontSize: "12px", color: "#78716C", marginTop: "2px" }}>Source officielle de l&apos;ARC</div>
              </div>
              <span style={{ color: "#2563EB", flexShrink: 0 }}>↗</span>
            </a>
            <a
              href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/transferring/property-unmatured-rrsp.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", background: "white", border: "1px solid #E7E0D3", borderRadius: "16px", padding: "14px 16px", textDecoration: "none" }}
            >
              <div>
                <div style={{ fontWeight: 700, color: "#1C1C1E", fontSize: "14px" }}>Lire la page ARC sur le transfert d&apos;un REER non échu</div>
                <div style={{ fontSize: "12px", color: "#78716C", marginTop: "2px" }}>Explications officielles sur le transfert direct admissible</div>
              </div>
              <span style={{ color: "#2563EB", flexShrink: 0 }}>↗</span>
            </a>
          </div>
        </section>

        <TransferRRSPSteps />

        <section style={{ marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <p
              style={{
                color: "#9A7A11",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              À éviter
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
              Erreurs fréquentes
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {frequentErrors.map((item) => (
              <details key={item.title} style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "18px", padding: "1rem 1.1rem" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{item.title}</summary>
                <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: "12px 0 0 0" }}>{item.detail}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          style={{
            marginBottom: "2rem",
            background: "#EEF6FF",
            border: "1px solid #CFE2FF",
            borderRadius: "22px",
            padding: "1.2rem",
          }}
        >
          <p
            style={{
              color: "#1D4ED8",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Délais réalistes
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
            Ça prend combien de temps ?
          </h2>
          <p style={{ fontSize: "13px", color: "#1E3A8A", lineHeight: 1.75, marginBottom: "10px" }}>
            Il n&apos;y a pas un nombre de jours universel. Les délais varient selon les institutions, le type d&apos;actif et la qualité des infos fournies au départ.
          </p>
          <p style={{ fontSize: "13px", color: "#1E3A8A", lineHeight: 1.75, marginBottom: "10px" }}>
            Certains transferts sont assez simples. D&apos;autres prennent plus de temps si des placements doivent être liquidés, si le compte est collectif ou si l&apos;ancienne institution répond lentement.
          </p>
          <p style={{ fontSize: "13px", color: "#1E3A8A", lineHeight: 1.75, margin: 0 }}>
            Le meilleur réflexe: lance la demande complète, puis fais un suivi si rien ne bouge après un délai raisonnable annoncé par la nouvelle institution.
          </p>
        </section>

        <TransferRRSPFaq />
        <TransferRRSPChecklist />

        <section
          style={{
            marginBottom: "2rem",
            background: "#FFFDF8",
            border: "1px solid #E7E0D3",
            borderRadius: "22px",
            padding: "1.2rem",
          }}
        >
          <p
            style={{
              color: "#9A7A11",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Transparence
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.35rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
            Ce guide est pratique, pas un avis fiscal ou juridique
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "10px" }}>
            Le site fournit de l&apos;information générale pour t&apos;aider à poser les bonnes questions et éviter les erreurs les plus fréquentes.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: 0 }}>
            Si ton cas touche un REER collectif, un compte immobilisé, un décès, une séparation, un transfert partiel complexe ou une situation fiscale particulière, valide la marche à suivre avec l&apos;institution ou un professionnel.
          </p>
        </section>

        <div className="flex flex-col gap-3 mb-4">
          {relatedPages.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "white",
                border: "1px solid #E7E0D3",
                borderRadius: "16px",
                padding: "14px 16px",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{link.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{link.title}</div>
                <div style={{ fontSize: "12px", color: "#78716C", marginTop: "2px" }}>{link.description}</div>
              </div>
              <span style={{ color: "#2563EB" }}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>
            Information pratique générale seulement. Vérifie toujours les détails finaux avec ton institution.
          </p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>
            Contactez-nous
          </Link>
          <Link href="/politique-confidentialite" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "4px" }}>
            Politique de confidentialité
          </Link>
        </div>
      </footer>

      <Script id="transfert-reer-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </main>
  );
}
