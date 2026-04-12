"use client";

import { useMemo, useState } from "react";
import {
  assureursAuto2026,
  assureursHabitation2026,
  multAgeAuto2026,
  multBiensHabitation2026,
  multRegionAuto2026,
  multRegionHabitation2026,
  multStatutHabitation2026,
  multUsageAuto2026,
  multVehiculeAuto2026,
} from "@/data/finance-2026";
import type { InsuranceComparatorDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

type InsuranceType = "habitation" | "auto";

interface HomeForm {
  logement: string;
  statut: string;
  region: string;
  biens: string;
}

interface AutoForm {
  age: string;
  vehicule: string;
  region: string;
  usage: string;
}

function RadioGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>{label}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            style={{
              padding: "7px 14px",
              borderRadius: "10px",
              border: value === option.value ? `2px solid ${GOLD}` : "2px solid #E7E3DC",
              background: value === option.value ? DARK : "white",
              color: value === option.value ? "#F0EBE0" : "#44403C",
              fontSize: "13px",
              fontWeight: value === option.value ? 700 : 400,
              cursor: "pointer",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SelectGroup({
  label,
  options,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <p style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "8px" }}>{label}</p>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={{
          width: "100%",
          padding: "10px 14px",
          borderRadius: "10px",
          border: "2px solid #E7E3DC",
          background: "white",
          fontSize: "13px",
          color: "#1C1C1E",
          appearance: "none",
          cursor: "pointer",
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function LocalizedInsuranceComparatorClient({
  dictionary,
}: {
  dictionary: InsuranceComparatorDictionary;
}) {
  const [type, setType] = useState<InsuranceType>("habitation");
  const [home, setHome] = useState<HomeForm>({ logement: "", statut: "", region: "", biens: "" });
  const [auto, setAuto] = useState<AutoForm>({ age: "", vehicule: "", region: "", usage: "" });

  const homeResults = useMemo(() => {
    const statusKey =
      home.logement === "condo" ? "condo" : home.statut === "proprietaire" ? "proprietaire" : "locataire";
    if (!home.logement || !home.statut || !home.region || !home.biens) return null;
    const m1 = multStatutHabitation2026[statusKey as keyof typeof multStatutHabitation2026] ?? 1;
    const m2 = multRegionHabitation2026[home.region as keyof typeof multRegionHabitation2026] ?? 1;
    const m3 = multBiensHabitation2026[home.biens as keyof typeof multBiensHabitation2026] ?? 1;

    return assureursHabitation2026
      .map((carrier) => ({
        ...carrier,
        prixMin: Math.round(carrier.prix_base[0] * m1 * m2 * m3),
        prixMax: Math.round(carrier.prix_base[1] * m1 * m2 * m3),
      }))
      .sort((a, b) => a.prixMin - b.prixMin);
  }, [home]);

  const autoResults = useMemo(() => {
    if (!auto.age || !auto.vehicule || !auto.region || !auto.usage) return null;
    const m1 = multAgeAuto2026[auto.age as keyof typeof multAgeAuto2026] ?? 1;
    const m2 = multVehiculeAuto2026[auto.vehicule as keyof typeof multVehiculeAuto2026] ?? 1;
    const m3 = multRegionAuto2026[auto.region as keyof typeof multRegionAuto2026] ?? 1;
    const m4 = multUsageAuto2026[auto.usage as keyof typeof multUsageAuto2026] ?? 1;

    return assureursAuto2026
      .map((carrier) => ({
        ...carrier,
        prixMin: Math.round(carrier.prix_base[0] * m1 * m2 * m3 * m4),
        prixMax: Math.round(carrier.prix_base[1] * m1 * m2 * m3 * m4),
      }))
      .sort((a, b) => a.prixMin - b.prixMin);
  }, [auto]);

  const results = type === "habitation" ? homeResults : autoResults;

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "10px" }}>
          {dictionary.compareTypeLabel}
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          {[
            { value: "habitation" as const, label: dictionary.compareOptions.home },
            { value: "auto" as const, label: dictionary.compareOptions.auto },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setType(option.value)}
              style={{
                flex: 1,
                padding: "14px 12px",
                borderRadius: "14px",
                border: type === option.value ? `2px solid ${GOLD}` : "2px solid #E7E3DC",
                background: type === option.value ? DARK : "white",
                color: type === option.value ? "#F0EBE0" : "#44403C",
                fontSize: "14px",
                fontWeight: type === option.value ? 700 : 500,
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {type === "habitation" && (
        <div style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
            {dictionary.profileHomeTitle}
          </h2>
          <RadioGroup label={dictionary.homeFields.housing} options={dictionary.homeOptions.housing} value={home.logement} onChange={(value) => setHome((previous) => ({ ...previous, logement: value }))} />
          {home.logement !== "condo" && (
            <RadioGroup label={dictionary.homeFields.status} options={dictionary.homeOptions.status} value={home.statut} onChange={(value) => setHome((previous) => ({ ...previous, statut: value }))} />
          )}
          <SelectGroup label={dictionary.homeFields.region} options={dictionary.homeOptions.region} value={home.region} onChange={(value) => setHome((previous) => ({ ...previous, region: value }))} placeholder={dictionary.selectPlaceholder} />
          <RadioGroup label={dictionary.homeFields.contents} options={dictionary.homeOptions.contents} value={home.biens} onChange={(value) => setHome((previous) => ({ ...previous, biens: value }))} />
        </div>
      )}

      {type === "auto" && (
        <div style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
            {dictionary.profileAutoTitle}
          </h2>
          <RadioGroup label={dictionary.autoFields.age} options={dictionary.autoOptions.age} value={auto.age} onChange={(value) => setAuto((previous) => ({ ...previous, age: value }))} />
          <RadioGroup label={dictionary.autoFields.vehicle} options={dictionary.autoOptions.vehicle} value={auto.vehicule} onChange={(value) => setAuto((previous) => ({ ...previous, vehicule: value }))} />
          <SelectGroup label={dictionary.autoFields.region} options={dictionary.autoOptions.region} value={auto.region} onChange={(value) => setAuto((previous) => ({ ...previous, region: value }))} placeholder={dictionary.selectPlaceholder} />
          <RadioGroup label={dictionary.autoFields.usage} options={dictionary.autoOptions.usage} value={auto.usage} onChange={(value) => setAuto((previous) => ({ ...previous, usage: value }))} />
        </div>
      )}

      {results ? (
        <div>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
            {dictionary.resultsTitle}
          </h2>
          <div className="mb-4 flex flex-col gap-3">
            {results.map((carrier, index) => (
              <div key={carrier.nom} style={{ background: "white", border: index === 0 ? `2px solid ${GREEN}` : "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.4rem" }}>{carrier.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E" }}>{carrier.nom}</span>
                      {index === 0 && (
                        <span style={{ background: GREEN, color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px" }}>
                          {dictionary.bestEstimateLabel}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: "11px", color: "#A8A29E" }}>{carrier.type}</span>
                  </div>
                  <span style={{ background: "#FEF3C7", color: "#92400E", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>
                    {dictionary.estimateBadge}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 800, fontSize: "18px", color: DARK }}>
                    {carrier.prixMin} $ - {carrier.prixMax} $
                    <span style={{ fontWeight: 400, fontSize: "12px", color: "#78716C" }}> {dictionary.monthlySuffix}</span>
                  </span>
                  <a href={carrier.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: DARK, color: GOLD, fontWeight: 700, fontSize: "12px", padding: "8px 14px", borderRadius: "10px", textDecoration: "none", flexShrink: 0 }}>
                    {dictionary.realQuoteLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "11px", color: "#A8A29E", lineHeight: 1.6, marginBottom: "1.5rem" }}>{dictionary.estimateDisclaimer}</p>
        </div>
      ) : (
        <div style={{ background: "white", border: "1px dashed #D1CCC4", borderRadius: "14px", padding: "2rem", textAlign: "center", color: "#A8A29E", fontSize: "13px", marginBottom: "1.5rem" }}>
          {dictionary.emptyState}
        </div>
      )}
    </div>
  );
}
