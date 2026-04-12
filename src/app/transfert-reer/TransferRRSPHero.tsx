import Link from "next/link";
import { DARK, GOLD } from "./content";

export default function TransferRRSPHero() {
  return (
    <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)",
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
      <div className="max-w-3xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
          <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>
            Accueil
          </Link>
          {" › "}
          <Link href="/retraite" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>
            Retraite
          </Link>
          {" › "}
          <span style={{ color: "rgba(240,235,224,0.7)" }}>Transfert REER</span>
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
          Guide pratique · Transfert REER Québec
        </p>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#F0EBE0",
            fontSize: "clamp(1.9rem, 6vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "12px",
            maxWidth: "12ch",
          }}
        >
          Transférer un REER sans erreur
        </h1>
        <p style={{ color: "rgba(240,235,224,0.7)", fontSize: "15px", lineHeight: 1.7, maxWidth: "700px" }}>
          Guide pratique pour transférer ton REER d&apos;une institution à une autre sans retrait imposable,
          avec les étapes, les pièges, les délais et un assistant rapide.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
            href="#assistant"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: GOLD,
              color: DARK,
              fontWeight: 800,
              fontSize: "14px",
              padding: "14px 18px",
              borderRadius: "14px",
              textDecoration: "none",
            }}
          >
            Commencer
          </a>
          <a
            href="#etapes"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(240,235,224,0.2)",
              color: "#F0EBE0",
              fontWeight: 700,
              fontSize: "14px",
              padding: "14px 18px",
              borderRadius: "14px",
              textDecoration: "none",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            Voir les étapes
          </a>
        </div>
      </div>
    </section>
  );
}
