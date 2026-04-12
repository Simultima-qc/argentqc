"use client";

import { useMemo, useState } from "react";
import type { RetirementRrspTransferDictionary } from "@/i18n/retirementRrspTransfer";

const GREEN = "#10B981";

export default function LocalizedRetirementRrspTransferChecklist({ dictionary }: { dictionary: RetirementRrspTransferDictionary["checklistSection"] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const totalChecked = useMemo(() => dictionary.items.filter((item) => checked[item]).length, [checked, dictionary.items]);

  return (
    <section style={{ marginBottom: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ color: "#9A7A11", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{dictionary.eyebrow}</p>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.45rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "8px" }}>{dictionary.title}</h2>
        <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7 }}>{dictionary.intro}</p>
      </div>

      <div style={{ background: "white", border: "1px solid #E7E0D3", borderRadius: "22px", padding: "1.1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
          <div style={{ fontWeight: 700, color: "#1C1C1E" }}>{dictionary.progressLabel}</div>
          <div style={{ color: GREEN, fontWeight: 800 }}>{totalChecked} / {dictionary.items.length}</div>
        </div>

        <div className="flex flex-col gap-2">
          {dictionary.items.map((item) => {
            const isChecked = Boolean(checked[item]);
            return (
              <label key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 12px", borderRadius: "14px", background: isChecked ? "#ECFDF5" : "#FAF8F3", border: isChecked ? "1px solid #A7F3D0" : "1px solid #EEE7DB", cursor: "pointer" }}>
                <input type="checkbox" checked={isChecked} onChange={() => setChecked((current) => ({ ...current, [item]: !current[item] }))} style={{ width: "16px", height: "16px", marginTop: "2px", accentColor: GREEN, flexShrink: 0 }} />
                <span style={{ fontSize: "13px", lineHeight: 1.6, color: isChecked ? "#065F46" : "#1C1C1E", textDecoration: isChecked ? "line-through" : "none" }}>{item}</span>
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
}
