import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Réduire sa facture internet au Québec 2026 | Comparer Fizz, Bell, Vidéotron | ArgentQC.ca",
  description:
    "Guide pratique pour réduire sa facture internet au Québec : comparer les fournisseurs fibre, négocier son contrat, choisir les opérateurs alternatifs. Économies concrètes.",
  alternates: { canonical: "https://argentqc.ca/depenses/internet" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function DepensesInternetPage() {
  return (
    <>
      <Header />
      <main style={{ background: PARCH, minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section style={{ background: DARK }} className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
              <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <Link href="/depenses" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Dépenses</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span>Internet</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Réduire sa facture internet au Québec
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              La plupart des Québécois paient 20 à 40 $/mois de trop pour leur internet. Voici comment comparer, négocier et économiser sans changer de vitesse.
            </p>
          </div>
        </section>

        {/* ── EXEMPLE CONCRET ── */}
        <section style={{ background: "#0F172A" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <div style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              borderRadius: "14px",
              padding: "20px",
            }}>
              <p style={{ color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
                💡 Exemple concret
              </p>
              <p style={{ color: "#F0EBE0", fontSize: "15px", fontWeight: 600, lineHeight: 1.5, marginBottom: "8px" }}>
                Jean-Philippe — Passe de Bell à Fizz Fibre après 5 min de comparaison
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Forfait Bell 1 Gbps (prix régulier après promo)", "99 $/mois"],
                  ["Forfait Fizz Fibre 1 Gbps (prix stable)", "64 $/mois"],
                  ["Économie mensuelle", "- 35 $/mois"],
                  ["Économie annuelle", "- 420 $/an"],
                  ["Démarches requises", "Appel de 10 min + installation gratuite"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOI FAIRE MAINTENANT ── */}
        <section style={{ background: "white", borderBottom: "1px solid #F0EBE0" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
              🎯 Quoi faire maintenant
            </h2>
            <ol style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { step: "1", text: "Trouve ta dernière facture internet — note le prix mensuel et la vitesse (Mbps ou Gbps)" },
                { step: "2", text: "Utilise notre comparateur pour voir les offres disponibles à ton adresse" },
                { step: "3", text: "Appelle ton fournisseur actuel avec la meilleure offre concurrente — la rétention a souvent de meilleures conditions" },
              ].map((item) => (
                <li key={item.step} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: DARK, color: GOLD,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", fontWeight: 800, flexShrink: 0,
                  }}>{item.step}</span>
                  <p style={{ fontSize: "14px", color: "#44403C", lineHeight: 1.6, paddingTop: "4px" }}>{item.text}</p>
                </li>
              ))}
            </ol>
            <Link
              href="/internet/comparateur"
              style={{
                display: "block",
                background: GOLD,
                color: DARK,
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "0.9rem",
                borderRadius: "12px",
                textAlign: "center",
                textDecoration: "none",
                marginTop: "1.5rem",
              }}
            >
              📡 Comparer les forfaits internet →
            </Link>
          </div>
        </section>

        {/* ── FOURNISSEURS ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.75rem" }}>
              Fournisseurs internet au Québec
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  nom: "Fizz (filiale Vidéotron)",
                  type: "Opérateur alternatif",
                  typeColor: "#D1FAE5",
                  typeText: "#065F46",
                  prix: "À partir de 40 $/mois",
                  vitesses: "100 Mbps à 1 Gbps (fibre)",
                  points: [
                    "Prix stables sans hausse après la période promotionnelle",
                    "Sans contrat — liberté de changer à tout moment",
                    "Réseau fibre Vidéotron dans la majorité des zones urbaines",
                    "App mobile pour gérer son forfait",
                  ],
                },
                {
                  nom: "Vidéotron",
                  type: "Grand fournisseur",
                  typeColor: "#DBEAFE",
                  typeText: "#1D4ED8",
                  prix: "À partir de 55 $/mois (promo)",
                  vitesses: "100 Mbps à 2.5 Gbps",
                  points: [
                    "Réseau fibre optique très étendu au Québec",
                    "Prix promotionnels attractifs les 12-24 premiers mois",
                    "Hausse de prix après la période promo — prévoir de renégocier",
                    "Option de regrouper avec la télévision ou le mobile",
                  ],
                },
                {
                  nom: "Bell",
                  type: "Grand fournisseur",
                  typeColor: "#DBEAFE",
                  typeText: "#1D4ED8",
                  prix: "À partir de 60 $/mois (promo)",
                  vitesses: "Jusqu'à 3 Gbps (Fibre +)",
                  points: [
                    "Réseau fibre dans les grandes villes, cuivre ailleurs",
                    "Prix réguliers élevés — surtout pertinent pour les zones non couvertes par Vidéotron",
                    "Regroupement mobile + internet = rabais disponible",
                    "Bonne couverture en dehors de Montréal/Québec",
                  ],
                },
                {
                  nom: "Distributel, TekSavvy, Oxio",
                  type: "Revendeurs",
                  typeColor: "#FEF3C7",
                  typeText: "#92400E",
                  prix: "À partir de 35 $/mois",
                  vitesses: "Dépend du réseau utilisé",
                  points: [
                    "Utilisent le réseau Bell ou Vidéotron selon la région",
                    "Prix souvent inférieurs aux grands fournisseurs",
                    "Service client variable selon l'opérateur",
                    "Bonne option si Fizz n'est pas disponible à ton adresse",
                  ],
                },
              ].map((f) => (
                <div key={f.nom} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDE9E0", overflow: "hidden" }}>
                  <div style={{ background: DARK, padding: "12px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 700, fontSize: "0.95rem", margin: 0, flex: 1 }}>{f.nom}</h3>
                    <span style={{ background: f.typeColor, color: f.typeText, fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>{f.type}</span>
                  </div>
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ display: "flex", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "12px", color: "#057857", fontWeight: 700 }}>💰 {f.prix}</span>
                      <span style={{ fontSize: "12px", color: "#57534E" }}>⚡ {f.vitesses}</span>
                    </div>
                    <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
                      {f.points.map((p) => (
                        <li key={p} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#44403C" }}>
                          <span style={{ color: GREEN, flexShrink: 0 }}>✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STRATÉGIES DE NÉGOCIATION ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              Négocier avec ton fournisseur actuel
            </h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  titre: "Script de négociation",
                  desc: "Appelle le service à la clientèle et dis : \"Je suis client depuis [X ans] et j'ai reçu une offre de [concurrent] à [prix $] pour [vitesse]. Pouvez-vous m'offrir quelque chose de comparable ?\" Le département rétention a des tarifs non affichés.",
                },
                {
                  titre: "Meilleur moment pour appeler",
                  desc: "En fin de contrat (recevoir la notice de renouvellement) ou quand un concurrent offre une promotion. Le lundi matin ou en milieu de semaine a tendance à donner de meilleurs résultats.",
                },
                {
                  titre: "Si le fournisseur refuse",
                  desc: "Commence le processus d'annulation — souvent, un superviseur avec plus de pouvoirs rappelle avec une meilleure offre. Si non, la concurrence t'attend.",
                },
              ].map((item) => (
                <div key={item.titre} style={{ background: PARCH, borderRadius: "12px", padding: "16px", border: "1px solid #EDE9E0" }}>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "6px" }}>{item.titre}</p>
                  <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Quelle vitesse internet ai-je vraiment besoin ?",
                  r: "Pour la majorité des ménages (streaming 4K, travail à domicile, gaming) : 200-500 Mbps est largement suffisant. Le 1 Gbps n'est vraiment utile que si plusieurs personnes font des transferts de fichiers volumineux simultanément.",
                },
                {
                  q: "Puis-je garder mon numéro de téléphone si je change de fournisseur internet ?",
                  r: "Si ton numéro de téléphone est associé à un service internet VoIP, oui — la portabilité s'applique. Si c'est un service câble traditionnel, contacte ton fournisseur avant de changer.",
                },
                {
                  q: "Qu'est-ce que la fibre optique vs le câble coaxial ?",
                  r: "La fibre optique offre des vitesses symétriques (upload = download) et une connexion plus stable. Le câble coaxial (DOCSIS) est plus répandu mais partage la bande passante avec les voisins aux heures de pointe.",
                },
              ].map((faq) => (
                <div key={faq.q} style={{ borderBottom: "1px solid #EDE9E0", paddingBottom: "16px" }}>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "6px" }}>{faq.q}</p>
                  <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7 }}>{faq.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Voir toutes tes opportunités d&apos;économies
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Le diagnostic identifie tes principales pistes d&apos;économie en 2 minutes.
            </p>
            <Link
              href="/questionnaire"
              style={{
                display: "inline-block",
                background: GOLD,
                color: DARK,
                fontWeight: 800,
                fontSize: "1rem",
                padding: "0.95rem 2rem",
                borderRadius: "14px",
                textDecoration: "none",
              }}
            >
              Lancer le diagnostic →
            </Link>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-8 px-5">
          <div className="max-w-lg mx-auto text-center">
            <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>ArgentQC.ca</p>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", lineHeight: 1.7 }}>
              Outil informatif non affilié aux fournisseurs. Les prix sont indicatifs et peuvent varier selon la région et les promotions en cours.
            </p>
            <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
            <Link href="/politique-confidentialite" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "4px" }}>Politique de confidentialité</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
