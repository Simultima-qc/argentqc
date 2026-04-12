"use client";

import { useState } from "react";
import type { RetirementFhsaDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

function formatAmount(locale: "fr" | "en", amount: number): string {
  const formatted = amount.toLocaleString(locale === "fr" ? "fr-CA" : "en-CA", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return locale === "fr" ? `${formatted} $` : `CAD ${formatted}`;
}

export default function LocalizedRetirementFhsaCalculator({
  locale,
  dictionary,
}: {
  locale: "fr" | "en";
  dictionary: RetirementFhsaDictionary["calculator"];
}) {
  const [annualContribution, setAnnualContribution] = useState(8000);
  const [returnRate, setReturnRate] = useState(5);
  const [years, setYears] = useState(3);

  const currentYear = new Date().getFullYear();
  const rate = returnRate / 100;
  const totalContributed = annualContribution * years;
  const totalWithGrowth =
    rate === 0 ? totalContributed : annualContribution * ((Math.pow(1 + rate, years) - 1) / rate) * (1 + rate);
  const generatedGrowth = totalWithGrowth - totalContributed;
  const taxSavings = totalContributed * 0.37;
  const purchaseYear = currentYear + years;
  const capReached = totalContributed >= 40000;

  return (
    <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{dictionary.annualContributionLabel}</label>
          <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{formatAmount(locale, annualContribution)}</span>
        </div>
        <input type="range" min={500} max={8000} step={500} value={annualContribution} onChange={(event) => setAnnualContribution(Number(event.target.value))} style={{ width: "100%", accentColor: GOLD }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>
          <span>{dictionary.annualContributionMin}</span>
          <span>{dictionary.annualContributionMax}</span>
        </div>
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{dictionary.estimatedReturnLabel}</label>
          <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{returnRate} %</span>
        </div>
        <input type="range" min={0} max={10} step={0.5} value={returnRate} onChange={(event) => setReturnRate(Number(event.target.value))} style={{ width: "100%", accentColor: GREEN }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>
          <span>{dictionary.estimatedReturnLow}</span>
          <span>{dictionary.estimatedReturnHigh}</span>
        </div>
        <p style={{ fontSize: "11px", color: "#A8A29E", marginTop: "4px" }}>{dictionary.estimatedReturnHelp}</p>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <label style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{dictionary.contributionYearsLabel}</label>
          <span style={{ fontWeight: 800, fontSize: "15px", color: DARK }}>{years}</span>
        </div>
        <input type="range" min={1} max={5} step={1} value={years} onChange={(event) => setYears(Number(event.target.value))} style={{ width: "100%", accentColor: "#8B5CF6" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>
          <span>{dictionary.contributionYearsMin}</span>
          <span>{dictionary.contributionYearsMax}</span>
        </div>
      </div>

      <div style={{ background: DARK, borderRadius: "14px", padding: "1.25rem", marginBottom: "1rem" }}>
        <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          {dictionary.resultsLabel}
        </p>
        <div className="mb-3 grid grid-cols-2 gap-3">
          <div style={{ background: "rgba(245,200,66,0.08)", border: "1px solid rgba(245,200,66,0.15)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "rgba(240,235,224,0.5)", fontWeight: 600, marginBottom: "4px" }}>{dictionary.totalContributedLabel}</div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: GOLD }}>{formatAmount(locale, totalContributed)}</div>
          </div>
          <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "rgba(240,235,224,0.5)", fontWeight: 600, marginBottom: "4px" }}>{dictionary.withGrowthLabel}</div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: GREEN }}>{formatAmount(locale, Math.round(totalWithGrowth))}</div>
          </div>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-3">
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "rgba(240,235,224,0.5)", fontWeight: 600, marginBottom: "4px" }}>{dictionary.growthGeneratedLabel}</div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#F0EBE0" }}>{formatAmount(locale, Math.round(generatedGrowth))}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: "rgba(240,235,224,0.5)", fontWeight: 600, marginBottom: "4px" }}>{dictionary.taxSavingsLabel}</div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#F0EBE0" }}>{formatAmount(locale, Math.round(taxSavings))}</div>
          </div>
        </div>
        <div style={{ background: capReached ? "rgba(16,185,129,0.12)" : "rgba(245,200,66,0.08)", border: `1px solid ${capReached ? "rgba(16,185,129,0.25)" : "rgba(245,200,66,0.2)"}`, borderRadius: "10px", padding: "12px", textAlign: "center" }}>
          <div style={{ fontSize: "11px", color: "rgba(240,235,224,0.6)", marginBottom: "4px" }}>
            {capReached ? dictionary.capReachedLabel : dictionary.readyToBuyLabel}
          </div>
          <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: capReached ? GREEN : GOLD }}>
            {capReached ? dictionary.capReachedValue : purchaseYear.toString()}
          </div>
        </div>
      </div>

      <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "10px", padding: "10px 14px" }}>
        <p style={{ fontSize: "11px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>{dictionary.estimateNote}</p>
      </div>
    </div>
  );
}
