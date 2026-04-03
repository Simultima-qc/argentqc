import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact – ArgentQC.ca",
  description:
    "Une question sur un programme d'aide, un programme manquant à signaler ? Écrivez-nous à contact@argentqc.ca.",
};

export default function Contact() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <Link href="/" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>
            ← Accueil
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
          Contactez-nous
        </h1>
        <p className="text-slate-500 text-base leading-relaxed mb-10">
          ArgentQC.ca est un outil indépendant géré par une petite équipe. Nous lisons tous les messages reçus.
        </p>

        <div className="flex flex-col gap-5">
          {[
            {
              titre: "Un programme gouvernemental à signaler ?",
              desc: "Vous connaissez une aide, subvention ou crédit d'impôt qui n'est pas encore dans notre liste ? Dites-le-nous.",
            },
            {
              titre: "Une information inexacte ?",
              desc: "Les montants et conditions changent chaque année. Si vous repérez une erreur, on veut le savoir.",
            },
            {
              titre: "Une question générale ?",
              desc: "On ne peut pas offrir de conseils fiscaux personnalisés, mais on peut vous orienter vers la bonne ressource officielle.",
            },
          ].map((item) => (
            <div
              key={item.titre}
              className="bg-white border border-slate-100 rounded-2xl px-5 py-4"
            >
              <p className="font-semibold text-slate-800 text-sm mb-1">{item.titre}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          style={{ background: "#060D1A", borderRadius: "20px", padding: "32px 24px", textAlign: "center", marginTop: "40px" }}
        >
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 800, fontSize: "1.1rem", marginBottom: "8px" }}>
            Écrivez-nous
          </p>
          <p style={{ color: "rgba(240,235,224,0.45)", fontSize: "13px", marginBottom: "18px" }}>
            On répond habituellement dans les 2 à 3 jours ouvrables.
          </p>
          <a
            href="mailto:contact@argentqc.ca"
            style={{
              display: "inline-block",
              background: "#F5C842",
              color: "#060D1A",
              fontWeight: 800,
              padding: "12px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            contact@argentqc.ca
          </a>
        </div>
      </div>

      <footer style={{ background: "#060D1A", padding: "24px 16px", marginTop: "16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F5C842", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement. Les montants sont des estimations.</p>
          <a href="mailto:contact@argentqc.ca" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "4px" }}>contact@argentqc.ca</a>
        </div>
      </footer>
    </main>
  );
}
