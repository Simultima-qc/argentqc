import Script from "next/script";
import { faqItems } from "./content";

export default function TransferRRSPFaq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
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
          FAQ
        </p>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
          Questions fréquentes sur le transfert de REER
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqItems.map((item) => (
          <details
            key={item.question}
            style={{
              background: "white",
              border: "1px solid #E7E0D3",
              borderRadius: "18px",
              padding: "1rem 1.1rem",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{item.question}</summary>
            <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: "12px 0 0 0" }}>{item.answer}</p>
          </details>
        ))}
      </div>

      <Script id="transfert-reer-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </section>
  );
}
