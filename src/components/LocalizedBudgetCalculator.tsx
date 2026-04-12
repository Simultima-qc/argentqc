"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getBudgetCalculatorDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

type Depenses = Record<string, string>;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Chart: any;
  }
}

function formatCurrency(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function LocalizedBudgetCalculator({ locale }: { locale: Locale }) {
  const dictionary = getBudgetCalculatorDictionary(locale);
  const depensesInit = Object.fromEntries(dictionary.lineItems.map((line) => [line.key, ""])) as Depenses;

  const [revenu, setRevenu] = useState("");
  const [depenses, setDepenses] = useState<Depenses>(depensesInit);
  const [calcule, setCalcule] = useState(false);
  const chartRef = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartInstance = useRef<any>(null);

  const homePath = getRoutePath(locale, "home");
  const questionnairePath = getRoutePath(locale, "questionnaire");
  const budgetHubPath = getRoutePath(locale, "budget");
  const movingHubPath = getRoutePath(locale, "moving");

  const totalDepenses = dictionary.lineItems.reduce(
    (sum, line) => sum + (parseFloat(depenses[line.key]) || 0),
    0
  );
  const revenuNum = parseFloat(revenu) || 0;
  const solde = revenuNum - totalDepenses;
  const taux = revenuNum > 0 ? Math.round((totalDepenses / revenuNum) * 100) : 0;

  useEffect(() => {
    if (typeof window !== "undefined" && !window.Chart) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!calcule || !chartRef.current) {
      return;
    }

    const renderChart = () => {
      if (!window.Chart) {
        setTimeout(renderChart, 200);
        return;
      }

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const lignesAvecValeur = dictionary.lineItems.filter((line) => parseFloat(depenses[line.key]) > 0);
      if (lignesAvecValeur.length === 0) {
        return;
      }

      chartInstance.current = new window.Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: lignesAvecValeur.map((line) => line.label),
          datasets: [
            {
              data: lignesAvecValeur.map((line) => parseFloat(depenses[line.key]) || 0),
              backgroundColor: lignesAvecValeur.map((line) => line.color),
              borderWidth: 2,
              borderColor: "#F7F3EC",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: { size: 11 },
                padding: 12,
                usePointStyle: true,
              },
            },
            tooltip: {
              callbacks: {
                label: (ctx: { label: string; parsed: number }) => ` ${ctx.label}: ${formatCurrency(ctx.parsed, locale)}`,
              },
            },
          },
        },
      });
    };

    renderChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [calcule, depenses, dictionary.lineItems, locale]);

  const handleCalculer = () => {
    setCalcule(true);
    setTimeout(() => {
      document.getElementById("resultats")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleReset = () => {
    setRevenu("");
    setDepenses(depensesInit);
    setCalcule(false);
  };

  const budgetMessage =
    solde >= 0
      ? `${dictionary.balancedTitle} ${locale === "fr" ? "Vos depenses representent" : "Your expenses represent"} ${taux}% ${locale === "fr" ? "de vos revenus." : "of your income."} ${taux <= 70 ? dictionary.balancedGood : dictionary.balancedTight}`
      : `${dictionary.deficitTitle} ${dictionary.deficitText}`;

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <LanguageSwitcher currentLocale={locale} label="Language switcher" />
        </div>
      </header>

      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl" style={{ position: "relative", zIndex: 1 }}>
          <nav className="mb-3 text-xs" style={{ color: "rgba(240,235,224,0.55)" }}>
            <Link href={homePath} style={{ color: "inherit", textDecoration: "none" }}>
              {dictionary.breadcrumb[0]}
            </Link>{" "}
            /{" "}
            <Link href={budgetHubPath} style={{ color: "inherit", textDecoration: "none" }}>
              {dictionary.breadcrumb[1]}
            </Link>{" "}
            / <span style={{ color: "#F0EBE0" }}>{dictionary.breadcrumb[2]}</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
            {dictionary.eyebrow}
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            {dictionary.title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-stone-300">{dictionary.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-10">
        <div className="mb-6 rounded-2xl border px-4 py-3" style={{ background: "#ECFDF5", borderColor: "#A7F3D0" }}>
          <p className="m-0 text-sm leading-7 text-emerald-900">
            <strong>{dictionary.privacyTitle}:</strong> {dictionary.privacyText}
          </p>
        </div>

        <div className="mb-5 rounded-3xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
          <label className="mb-3 block text-sm font-bold text-stone-900">{dictionary.incomeLabel}</label>
          <div style={{ position: "relative" }}>
            <input
              type="number"
              value={revenu}
              onChange={(event) => setRevenu(event.target.value)}
              placeholder={dictionary.incomePlaceholder}
              className="w-full rounded-2xl border-2 bg-stone-50 px-4 py-3 pr-12 text-base font-semibold text-stone-900 outline-none"
              style={{ borderColor: "#E5E7EB" }}
            />
            <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "#A8A29E", fontWeight: 600, fontSize: "14px" }}>$</span>
          </div>
        </div>

        <div className="mb-5 rounded-3xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
          <h2 className="mb-4 text-sm font-bold text-stone-900">{dictionary.expensesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.lineItems.map((line) => (
              <div key={line.key} className="flex items-center gap-3">
                <span className="w-7 shrink-0 text-center text-xl">{line.emoji}</span>
                <label className="min-w-0 flex-1 text-sm text-stone-700">{line.label}</label>
                <div className="relative shrink-0">
                  <input
                    type="number"
                    value={depenses[line.key]}
                    onChange={(event) => setDepenses((prev) => ({ ...prev, [line.key]: event.target.value }))}
                    placeholder={line.placeholder}
                    className="w-[110px] rounded-xl border bg-stone-50 px-3 py-2 pr-7 text-sm font-semibold text-stone-900 outline-none"
                    style={{ borderColor: "#E5E7EB" }}
                  />
                  <span style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", color: "#A8A29E", fontSize: "12px" }}>$</span>
                </div>
              </div>
            ))}
          </div>
          {totalDepenses > 0 && (
            <div className="mt-4 flex items-center justify-between border-t pt-4" style={{ borderColor: "#F0EBE0" }}>
              <span className="text-sm font-bold text-stone-500">{dictionary.totalExpensesLabel}</span>
              <span className="text-lg font-extrabold text-red-500">{formatCurrency(totalDepenses, locale)}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleCalculer}
          disabled={!revenu && totalDepenses === 0}
          className="mb-8 block w-full rounded-2xl px-5 py-4 text-base font-extrabold"
          style={{
            background: revenu || totalDepenses > 0 ? GOLD : "#D1D5DB",
            color: revenu || totalDepenses > 0 ? DARK : "#9CA3AF",
            border: "none",
            cursor: revenu || totalDepenses > 0 ? "pointer" : "default",
          }}
        >
          {dictionary.calculateLabel}
        </button>

        {calcule && (
          <div id="resultats">
            <h2 className="mb-5 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
              {dictionary.resultsTitle}
            </h2>

            <div className="mb-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border p-4 text-center" style={{ background: "#EFF6FF", borderColor: "#BFDBFE" }}>
                <div className="mb-1 text-xs font-semibold text-blue-700">{dictionary.revenueCard}</div>
                <div className="text-xl font-extrabold text-blue-700">{revenuNum > 0 ? formatCurrency(revenuNum, locale) : dictionary.emptyValue}</div>
              </div>
              <div className="rounded-2xl border p-4 text-center" style={{ background: "#FEF2F2", borderColor: "#FECACA" }}>
                <div className="mb-1 text-xs font-semibold text-red-600">{dictionary.expensesCard}</div>
                <div className="text-xl font-extrabold text-red-600">{totalDepenses > 0 ? formatCurrency(totalDepenses, locale) : dictionary.emptyValue}</div>
              </div>
              <div className="rounded-2xl border p-4 text-center" style={{ background: solde >= 0 ? "#ECFDF5" : "#FEF2F2", borderColor: solde >= 0 ? "#A7F3D0" : "#FECACA" }}>
                <div className="mb-1 text-xs font-semibold" style={{ color: solde >= 0 ? "#065F46" : "#DC2626" }}>
                  {dictionary.balanceCard}
                </div>
                <div className="text-xl font-extrabold" style={{ color: solde >= 0 ? GREEN : "#DC2626" }}>
                  {revenuNum > 0 ? `${solde >= 0 ? "+" : ""}${formatCurrency(solde, locale)}` : dictionary.emptyValue}
                </div>
              </div>
            </div>

            {revenuNum > 0 && totalDepenses > 0 && (
              <div className="mb-6 rounded-2xl border p-5" style={{ background: solde >= 0 ? "#ECFDF5" : "#FEF3C7", borderColor: solde >= 0 ? "#A7F3D0" : "#FCD34D" }}>
                <p className="m-0 text-sm leading-7" style={{ color: solde >= 0 ? "#065F46" : "#92400E" }}>
                  <strong>{budgetMessage}</strong>
                </p>
              </div>
            )}

            {totalDepenses > 0 && (
              <div className="mb-6 rounded-3xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <h3 className="mb-4 text-center text-sm font-bold text-stone-900">{dictionary.chartTitle}</h3>
                <canvas ref={chartRef} style={{ maxHeight: "320px" }} />
              </div>
            )}

            <div className="mb-6 rounded-3xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
              <h3 className="mb-4 text-sm font-bold text-stone-900">{dictionary.detailsTitle}</h3>
              <div className="flex flex-col gap-3">
                {dictionary.lineItems
                  .filter((line) => parseFloat(depenses[line.key]) > 0)
                  .sort((a, b) => (parseFloat(depenses[b.key]) || 0) - (parseFloat(depenses[a.key]) || 0))
                  .map((line) => {
                    const value = parseFloat(depenses[line.key]) || 0;
                    const percentage = totalDepenses > 0 ? Math.round((value / totalDepenses) * 100) : 0;

                    return (
                      <div key={line.key}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-stone-700">
                            {line.emoji} {line.label}
                          </span>
                          <span className="font-bold text-stone-900">
                            {formatCurrency(value, locale)} ({percentage}%)
                          </span>
                        </div>
                        <div className="h-[6px] overflow-hidden rounded-full bg-stone-100">
                          <div className="h-full rounded-full" style={{ width: `${percentage}%`, background: line.color }} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="mb-6 rounded-3xl p-6 text-center" style={{ background: DARK }}>
              <p className="mb-2 text-base font-bold text-stone-100">{dictionary.ctaTitle}</p>
              <p className="mb-4 text-sm leading-7 text-stone-300">{dictionary.ctaText}</p>
              <Link href={questionnairePath} className="inline-block rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
                {dictionary.ctaLabel}
              </Link>
            </div>

            <button
              onClick={handleReset}
              className="mb-8 block w-full rounded-2xl border px-5 py-3 text-sm font-semibold text-stone-600"
              style={{ borderColor: "#E5E7EB", background: "transparent" }}
            >
              {dictionary.resetLabel}
            </button>
          </div>
        )}

        <div className="mb-4 flex flex-col gap-3">
          <Link href={budgetHubPath} className="flex items-center gap-4 rounded-2xl border bg-white p-4 no-underline" style={{ borderColor: "#EDE9E0" }}>
            <span className="text-2xl">📊</span>
            <div className="flex-1">
              <div className="text-sm font-bold text-stone-900">{dictionary.relatedBudgetTitle}</div>
              <div className="text-sm leading-7 text-stone-500">{dictionary.relatedBudgetText}</div>
            </div>
          </Link>
          <Link href={movingHubPath} className="flex items-center gap-4 rounded-2xl border bg-white p-4 no-underline" style={{ borderColor: "#EDE9E0" }}>
            <span className="text-2xl">📦</span>
            <div className="flex-1">
              <div className="text-sm font-bold text-stone-900">{dictionary.relatedMovingTitle}</div>
              <div className="text-sm leading-7 text-stone-500">{dictionary.relatedMovingText}</div>
            </div>
          </Link>
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p className="text-xs" style={{ color: "rgba(240,235,224,0.45)" }}>
            {dictionary.footerText}
          </p>
          <Link href="/contact" className="mt-2 inline-block text-xs" style={{ color: "rgba(240,235,224,0.55)" }}>
            {dictionary.footerContact}
          </Link>
        </div>
      </footer>
    </main>
  );
}
