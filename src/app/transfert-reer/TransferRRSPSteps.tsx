import { stepCards } from "./content";

export default function TransferRRSPSteps() {
  return (
    <section id="etapes" style={{ scrollMarginTop: "88px", marginBottom: "2rem" }}>
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
          Les étapes
        </p>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>
          Les 5 étapes pour transférer un REER sans te compliquer la vie
        </h2>
        <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, maxWidth: "720px" }}>
          Le but n&apos;est pas d&apos;aller vite à tout prix. Le but est de lancer la bonne demande, avec les bonnes infos, dès le départ.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {stepCards.map((step, index) => (
          <article
            key={step.title}
            style={{
              background: "white",
              border: "1px solid #E7E0D3",
              borderRadius: "22px",
              padding: "1.15rem",
              boxShadow: "0 8px 24px rgba(6,13,26,0.04)",
            }}
          >
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "12px",
                  background: "#FFF7DB",
                  color: "#7A5A00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#1C1C1E", marginBottom: "10px" }}>{step.title}</h3>
                <div className="grid grid-cols-1 gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#78716C", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                      Quoi faire
                    </div>
                    <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{step.whatToDo}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#78716C", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                      Quoi vérifier
                    </div>
                    <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{step.whatToCheck}</p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "12px",
                    background: "#FFF4F4",
                    border: "1px solid #FFD4D4",
                    borderRadius: "14px",
                    padding: "12px 14px",
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#B42318", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                    Erreur fréquente
                  </div>
                  <p style={{ fontSize: "13px", color: "#7A271A", lineHeight: 1.6, margin: 0 }}>{step.commonMistake}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
