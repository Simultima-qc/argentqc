"use client";

import { useMemo, useState } from "react";
import {
  internetBudgetOptions2026,
  internetConnectionTypes2026,
  internetOffers2026,
  internetSpeedOptions2026,
} from "@/data/finance-2026";
import { getInternetComparatorDictionary } from "@/i18n/subguides";
import type { Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

type BudgetMax = 50 | 75 | 100 | 999;
type VitesseMin = 30 | 100 | 500 | 1000;
type TypeConnexion = "Tous" | "Fibre" | "Cable";
type Tri = "prix" | "vitesse" | "rapport";

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "7px 14px",
        borderRadius: "10px",
        border: active ? `2px solid ${GOLD}` : "2px solid #E7E3DC",
        background: active ? DARK : "white",
        color: active ? "#F0EBE0" : "#44403C",
        fontSize: "13px",
        fontWeight: active ? 700 : 400,
        cursor: "pointer",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

export default function LocalizedInternetComparatorClient({ locale }: { locale: Locale }) {
  const dictionary = getInternetComparatorDictionary(locale);
  const [budgetMax, setBudgetMax] = useState<BudgetMax>(999);
  const [vitesseMin, setVitesseMin] = useState<VitesseMin>(30);
  const [typeConnexion, setTypeConnexion] = useState<TypeConnexion>("Tous");
  const [sansContrat, setSansContrat] = useState(false);
  const [tri, setTri] = useState<Tri>("prix");

  const localizedTypes =
    locale === "fr"
      ? { Tous: "Tous", Fibre: "Fibre", Cable: "Cable" }
      : { Tous: "Any", Fibre: "Fibre", Cable: "Cable" };

  const sortLabels =
    locale === "fr"
      ? { prix: "Prix croissant", vitesse: "Vitesse", rapport: "Rapport qualite-prix" }
      : { prix: "Lowest price", vitesse: "Speed", rapport: "Value for money" };

  const resultats = useMemo(() => {
    const filtered = internetOffers2026.filter((offer) => {
      if (offer.prix > budgetMax) return false;
      if (offer.vitesseDL < vitesseMin) return false;
      if (typeConnexion !== "Tous" && offer.type !== typeConnexion) return false;
      if (sansContrat && offer.contrat) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      if (tri === "prix") return a.prix - b.prix;
      if (tri === "vitesse") return b.vitesseDL - a.vitesseDL;
      return b.vitesseDL / b.prix - a.vitesseDL / a.prix;
    });
  }, [budgetMax, vitesseMin, typeConnexion, sansContrat, tri]);

  const prixMin = Math.min(...internetOffers2026.map((offer) => offer.prix));
  const vitesseMax = Math.max(...internetOffers2026.map((offer) => offer.vitesseDL));

  return (
    <div>
      <div className="mb-6 rounded-3xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
        <h2 className="mb-5 text-lg font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
          {dictionary.filterTitle}
        </h2>

        <div className="mb-5">
          <p className="mb-2 text-sm font-bold text-stone-900">{dictionary.budgetLabel}</p>
          <div className="flex flex-wrap gap-2">
            {(internetBudgetOptions2026 as readonly BudgetMax[]).map((budget) => (
              <FilterButton key={budget} active={budgetMax === budget} onClick={() => setBudgetMax(budget)}>
                {budget === 999 ? dictionary.anyBudgetLabel : `${budget} $`}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-sm font-bold text-stone-900">{dictionary.speedLabel}</p>
          <div className="flex flex-wrap gap-2">
            {(internetSpeedOptions2026 as readonly { val: VitesseMin; label: string }[]).map((option) => (
              <FilterButton key={option.val} active={vitesseMin === option.val} onClick={() => setVitesseMin(option.val)}>
                {option.label}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-sm font-bold text-stone-900">{dictionary.connectionLabel}</p>
          <div className="flex flex-wrap gap-2">
            {(internetConnectionTypes2026 as readonly TypeConnexion[]).map((type) => (
              <FilterButton key={type} active={typeConnexion === type} onClick={() => setTypeConnexion(type)}>
                {localizedTypes[type]}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSansContrat((value) => !value)}
            style={{
              width: "44px",
              height: "24px",
              borderRadius: "100px",
              border: "none",
              background: sansContrat ? GREEN : "#D1CBC2",
              position: "relative",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "2px",
                left: sansContrat ? "22px" : "2px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          </button>
          <span className="text-sm" style={{ fontWeight: sansContrat ? 700 : 400, color: "#1C1C1E" }}>
            {dictionary.contractOnlyLabel}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-bold text-stone-900">{dictionary.sortLabel}</p>
        <div className="flex flex-wrap gap-2">
          <FilterButton active={tri === "prix"} onClick={() => setTri("prix")}>{sortLabels.prix}</FilterButton>
          <FilterButton active={tri === "vitesse"} onClick={() => setTri("vitesse")}>{sortLabels.vitesse}</FilterButton>
          <FilterButton active={tri === "rapport"} onClick={() => setTri("rapport")}>{sortLabels.rapport}</FilterButton>
        </div>
      </div>

      <p className="mb-3 text-xs text-stone-400">
        {resultats.length} {dictionary.resultCountLabel}
      </p>

      <div className="mb-4 flex flex-col gap-3">
        {resultats.map((offer, index) => (
          <div
            key={`${offer.fournisseur}-${offer.vitesseDL}-${offer.type}`}
            className="rounded-2xl bg-white p-4"
            style={{ border: index === 0 ? `2px solid ${GREEN}` : "1px solid #EDE9E0" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: offer.couleur,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "13px",
                  flexShrink: 0,
                }}
              >
                {offer.initiales}
              </div>
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="text-[15px] font-extrabold text-stone-900">{offer.fournisseur}</span>
                  <span
                    className="rounded-full px-2 py-1 text-[10px] font-bold"
                    style={{ background: offer.type === "Fibre" ? "#DBEAFE" : "#FEF3C7", color: offer.type === "Fibre" ? "#1D4ED8" : "#92400E" }}
                  >
                    {localizedTypes[offer.type]}
                  </span>
                  {index === 0 && <span className="rounded-full px-2 py-1 text-[10px] font-bold text-white" style={{ background: GREEN }}>{dictionary.bestResultLabel}</span>}
                </div>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  {offer.prix === prixMin && <span style={{ color: "#065F46" }}>{dictionary.bestPriceLabel}</span>}
                  {offer.vitesseDL === vitesseMax && <span style={{ color: "#1D4ED8" }}>{dictionary.bestSpeedLabel}</span>}
                  {!offer.contrat && <span style={{ color: "#92400E" }}>{dictionary.noContractLabel}</span>}
                </div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-[20px] font-extrabold" style={{ color: DARK }}>{offer.prix} $</div>
                <div className="text-[10px] text-stone-500">{dictionary.pricePerMonthLabel}</div>
              </div>
            </div>

            <div className="mb-3 grid grid-cols-3 gap-2 rounded-xl px-3 py-3" style={{ background: "#F7F3EC" }}>
              <div className="text-center">
                <div className="mb-1 text-[10px] text-stone-400">{dictionary.downloadLabel}</div>
                <div className="text-sm font-extrabold text-stone-900">{offer.vitesseDL >= 1000 ? `${offer.vitesseDL / 1000} Gbps` : `${offer.vitesseDL} Mbps`}</div>
              </div>
              <div className="text-center" style={{ borderLeft: "1px solid #EDE9E0", borderRight: "1px solid #EDE9E0" }}>
                <div className="mb-1 text-[10px] text-stone-400">{dictionary.uploadLabel}</div>
                <div className="text-sm font-extrabold text-stone-900">{offer.vitesseUL >= 1000 ? `${offer.vitesseUL / 1000} Gbps` : `${offer.vitesseUL} Mbps`}</div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-[10px] text-stone-400">{dictionary.contractLabel}</div>
                <div className="text-sm font-extrabold" style={{ color: offer.contrat ? "#DC2626" : "#059669" }}>{offer.contrat ? offer.dureeContrat : dictionary.noContractValue}</div>
              </div>
            </div>

            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm text-stone-500">
                {offer.modemInclus ? dictionary.modemIncludedLabel : offer.fraisModem ? `${dictionary.modemNotIncludedLabel} (+${offer.fraisModem} $)` : dictionary.modemNotIncludedLabel}
              </span>
              <span className="text-xs text-stone-400">{offer.regions.join(", ")}</span>
            </div>

            <a
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold no-underline"
              style={{ background: DARK, color: GOLD }}
            >
              {dictionary.viewOfferLabel} {offer.fournisseur}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
