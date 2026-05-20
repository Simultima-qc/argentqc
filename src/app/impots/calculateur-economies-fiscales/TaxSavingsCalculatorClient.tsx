"use client";

import { useMemo, useState } from "react";
import {
  calculateTotalTax,
  getMarginalRate,
} from "@/lib/tax-calculator";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const scenarios = [
  { income: 45000, contribution: 3000, label: "Debut de carriere" },
  { income: 75000, contribution: 7000, label: "Professionnel salarie" },
  { income: 125000, contribution: 12000, label: "Revenu eleve" },
];

function formatCurrency(value: number): string {
  return Math.round(value).toLocaleString("fr-CA", { maximumFractionDigits: 0 }) + " $";
}

function formatPercent(value: number): string {
  return (value * 100).toLocaleString("fr-CA", { maximumFractionDigits: 2 }) + " %";
}


export default function TaxSavingsCalculatorClient() {
  const [income, setIncome] = useState(78000);
  const [rrspContribution, setRrspContribution] = useState(6500);
  const [tfsaContribution, setTfsaContribution] = useState(6500);
  const [futureTaxRate, setFutureTaxRate] = useState(32);

  const results = useMemo(() => {
    const cappedRrspContribution = Math.min(Math.max(0, rrspContribution), Math.max(0, income));
    const taxBefore = calculateTotalTax(income);
    const taxAfterRrsp = calculateTotalTax(income - cappedRrspContribution);
    const rrspTaxSaving = Math.max(0, taxBefore - taxAfterRrsp);
    const effectiveSavingRate = cappedRrspContribution > 0 ? rrspTaxSaving / cappedRrspContribution : 0;
    const currentMarginalRate = getMarginalRate(income);
    const projectedRrspWithdrawalTax = cappedRrspContribution * (futureTaxRate / 100);
    const rrspNetAdvantage = rrspTaxSaving - projectedRrspWithdrawalTax;

    return {
      cappedRrspContribution,
      currentMarginalRate,
      effectiveSavingRate,
      projectedRrspWithdrawalTax,
      rrspNetAdvantage,
      rrspTaxSaving,
      taxAfterRrsp,
      taxBefore,
    };
  }, [futureTaxRate, income, rrspContribution]);

  const tfsaMessage =
    results.rrspNetAdvantage >= 0
      ? "Le REER semble fiscalement fort si le remboursement est investi ou utilise pour une priorite claire."
      : "Le CELI peut mieux proteger la flexibilite si votre taux futur risque d'etre similaire ou plus eleve.";

  return (
    <section id="calculateur" className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="mb-5 flex flex-col gap-2 border-b border-slate-100 pb-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.12em]" style={{ color: GREEN }}>
              Simulateur 2026
            </p>
            <h2 className="text-2xl font-black leading-tight text-slate-950">Calculez l&apos;economie REER reelle au Quebec</h2>
            <p className="text-sm leading-6 text-slate-600">
              Le calcul compare l&apos;impot progressif avant et apres cotisation, au federal et au Quebec.
            </p>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-extrabold text-slate-900">Province</span>
              <select
                value="QC"
                disabled
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700"
              >
                <option value="QC">Quebec - paliers 2026 valides</option>
              </select>
              <span className="mt-2 block text-xs leading-5 text-slate-500">
                Les autres provinces seront ajoutees apres validation des paliers provinciaux 2026.
              </span>
            </label>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="income" className="text-sm font-extrabold text-slate-900">
                  Revenu imposable annuel
                </label>
                <span className="text-base font-black" style={{ color: DARK }}>
                  {formatCurrency(income)}
                </span>
              </div>
              <input
                id="income"
                type="range"
                min={25000}
                max={250000}
                step={1000}
                value={income}
                onChange={(event) => setIncome(Number(event.target.value))}
                className="w-full"
                style={{ accentColor: GOLD }}
              />
              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>25 000 $</span>
                <span>250 000 $</span>
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="rrsp" className="text-sm font-extrabold text-slate-900">
                  Cotisation REER deductible
                </label>
                <span className="text-base font-black" style={{ color: DARK }}>
                  {formatCurrency(rrspContribution)}
                </span>
              </div>
              <input
                id="rrsp"
                type="range"
                min={0}
                max={30000}
                step={500}
                value={rrspContribution}
                onChange={(event) => setRrspContribution(Number(event.target.value))}
                className="w-full"
                style={{ accentColor: GREEN }}
              />
              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>0 $</span>
                <span>30 000 $</span>
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="tfsa" className="text-sm font-extrabold text-slate-900">
                  Cotisation CELI comparee
                </label>
                <span className="text-base font-black" style={{ color: DARK }}>
                  {formatCurrency(tfsaContribution)}
                </span>
              </div>
              <input
                id="tfsa"
                type="range"
                min={0}
                max={30000}
                step={500}
                value={tfsaContribution}
                onChange={(event) => setTfsaContribution(Number(event.target.value))}
                className="w-full"
                style={{ accentColor: "#2563EB" }}
              />
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Le CELI ne donne pas de deduction immediate, mais les retraits admissibles ne sont pas imposables.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="future-rate" className="text-sm font-extrabold text-slate-900">
                  Taux d&apos;impot futur estime au retrait REER
                </label>
                <span className="text-base font-black" style={{ color: DARK }}>
                  {futureTaxRate} %
                </span>
              </div>
              <input
                id="future-rate"
                type="range"
                min={20}
                max={52}
                step={1}
                value={futureTaxRate}
                onChange={(event) => setFutureTaxRate(Number(event.target.value))}
                className="w-full"
                style={{ accentColor: "#475569" }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-[22px] p-5 text-white" style={{ background: DARK }}>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Economie estimee
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-yellow-300/20 bg-yellow-300/10 p-4">
                <span className="text-xs font-bold text-yellow-100/80">Retour d&apos;impot REER</span>
                <strong className="mt-2 block text-3xl font-black text-yellow-300">{formatCurrency(results.rrspTaxSaving)}</strong>
              </div>
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                <span className="text-xs font-bold text-emerald-100/80">Taux economise reel</span>
                <strong className="mt-2 block text-3xl font-black text-emerald-300">{formatPercent(results.effectiveSavingRate)}</strong>
              </div>
            </div>

            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-2xl bg-white/[0.06] p-4">
                <span className="block text-xs text-slate-400">Impot avant</span>
                <strong className="mt-1 block text-lg text-white">{formatCurrency(results.taxBefore)}</strong>
              </div>
              <div className="rounded-2xl bg-white/[0.06] p-4">
                <span className="block text-xs text-slate-400">Impot apres REER</span>
                <strong className="mt-1 block text-lg text-white">{formatCurrency(results.taxAfterRrsp)}</strong>
              </div>
              <div className="rounded-2xl bg-white/[0.06] p-4">
                <span className="block text-xs text-slate-400">Taux marginal actuel</span>
                <strong className="mt-1 block text-lg text-white">{formatPercent(results.currentMarginalRate)}</strong>
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border border-slate-200 p-5" style={{ background: PARCH }}>
            <h3 className="text-lg font-black text-slate-950">REER vs CELI, en dollars</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">REER</span>
                <strong className="mt-2 block text-2xl font-black text-slate-950">
                  {formatCurrency(results.rrspTaxSaving)}
                </strong>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Economie immediate sur une cotisation de {formatCurrency(results.cappedRrspContribution)}.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">CELI</span>
                <strong className="mt-2 block text-2xl font-black text-slate-950">0 $</strong>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Aucune economie fiscale immediate sur {formatCurrency(tfsaContribution)}, mais retraits admissibles libres d&apos;impot.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-extrabold text-slate-900">Avantage net simplifie du REER</span>
                <strong className={results.rrspNetAdvantage >= 0 ? "text-emerald-700" : "text-rose-700"}>
                  {formatCurrency(results.rrspNetAdvantage)}
                </strong>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Compare le retour d&apos;impot estime avec l&apos;impot futur simule sur la meme cotisation. {tfsaMessage}
              </p>
            </div>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-black text-slate-950">Exemples rapides</h3>
            <div className="mt-3 grid gap-2">
              {scenarios.map((scenario) => {
                const saving = calculateTotalTax(scenario.income) - calculateTotalTax(scenario.income - scenario.contribution);
                return (
                  <button
                    key={scenario.label}
                    type="button"
                    onClick={() => {
                      setIncome(scenario.income);
                      setRrspContribution(scenario.contribution);
                      setTfsaContribution(scenario.contribution);
                    }}
                    className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-left transition hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <span>
                      <span className="block text-sm font-extrabold text-slate-900">{scenario.label}</span>
                      <span className="block text-xs text-slate-500">
                        {formatCurrency(scenario.income)} de revenu, {formatCurrency(scenario.contribution)} au REER
                      </span>
                    </span>
                    <strong className="shrink-0 text-sm text-emerald-700">+ {formatCurrency(saving)}</strong>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
