"use client";

import { useState } from "react";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { trackCtaClick } from "@/utils/analytics";
import type { ResultsDictionary } from "@/i18n/content";
import type { Programme } from "@/types";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";

export type ProgrammeWithMeta = Programme & {
  tier: "principal" | "verifier";
  reason: string;
};

interface ProgrammeListClientProps {
  programmes: ProgrammeWithMeta[];
  dictionary: ResultsDictionary;
  initialCount?: number;
}

export default function ProgrammeListClient({
  programmes,
  dictionary,
  initialCount = 10,
}: ProgrammeListClientProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleProgrammes = showAll ? programmes : programmes.slice(0, initialCount);
  const hiddenCount = programmes.length - initialCount;
  const hasMore = !showAll && hiddenCount > 0;
  const canHide = showAll && hiddenCount > 0;

  return (
    <div className="flex flex-col gap-3">
      {visibleProgrammes.map((programme) => {
        const level = dictionary.levelLabels[programme.niveau];
        const isVerifier = programme.tier === "verifier";

        return (
          <div
            key={programme.id}
            className="overflow-hidden rounded-2xl border bg-white"
            style={{ borderColor: "#EDE9E0", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
          >
            {/* Card header */}
            <div
              className="flex items-center justify-between gap-3 border-b px-4 py-3"
              style={{
                background: isVerifier ? "#FFFBEB" : "#ECFDF5",
                borderColor: isVerifier ? "#FDE68A" : "#D1FAE5",
              }}
            >
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${level.className}`}>
                  {level.label}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                  {dictionary.categoryLabels[programme.categorie] ?? programme.categorie}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    isVerifier ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {isVerifier ? dictionary.programTierLabels.verifier : dictionary.programTierLabels.principal}
                </span>
              </div>
              <span
                className="shrink-0 text-sm font-extrabold"
                style={{ color: isVerifier ? "#B45309" : "#047857" }}
              >
                {programme.montant_affiche}
              </span>
            </div>

            {/* Card body */}
            <div className="p-4">
              <h3 className="mb-1 text-base font-bold text-stone-900">{programme.nom}</h3>
              <p className="mb-2 text-xs text-stone-400">{programme.organisme}</p>

              <p className="mb-3 text-xs text-stone-500">
                <span className="font-semibold">{dictionary.whyThisProgramLabel}</span>{" "}
                {programme.reason}
              </p>

              <p className="mb-4 text-sm leading-7 text-stone-600">{programme.description}</p>

              <div className="mb-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-stone-400">
                  {dictionary.conditionsTitle}
                </p>
                <ul className="flex flex-col gap-2">
                  {programme.conditions.map((condition, index) => (
                    <li key={`${programme.id}-${index}`} className="flex gap-2 text-sm leading-6 text-stone-600">
                      <span style={{ color: GREEN }}>✓</span>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

              {programme.niveau === "municipal" && (
                <p
                  className="mb-4 rounded-lg px-3 py-2 text-xs leading-6 text-amber-700"
                  style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
                >
                  ⚠ {dictionary.municipalNotice}
                </p>
              )}

              <TrackedExternalLink
                href={programme.lien_officiel}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl px-4 py-3 text-center text-sm font-bold no-underline"
                style={{ background: DARK, color: GOLD, border: "1px solid rgba(245,200,66,0.15)" }}
                tracking={{
                  cta_name: isVerifier ? "results_verify_programme" : "results_priority_programme",
                  cta_location: "results_programme_card",
                  destination: programme.lien_officiel,
                }}
              >
                {dictionary.applyCta} →
              </TrackedExternalLink>
            </div>
          </div>
        );
      })}

      {hasMore && (
        <button
          type="button"
          onClick={() => {
            trackCtaClick({
              cta_name: "results_show_all_programmes",
              cta_location: "results_programmes_section",
              destination: "in_page",
            });
            setShowAll(true);
          }}
          className="w-full rounded-2xl border px-4 py-3 text-center text-sm font-semibold"
          style={{ background: "white", borderColor: "#EDE9E0", color: "#57534E", cursor: "pointer" }}
        >
          {dictionary.showMoreProgrammes.replace("{count}", String(hiddenCount))} ↓
        </button>
      )}

      {canHide && (
        <button
          type="button"
          onClick={() => {
            trackCtaClick({
              cta_name: "results_hide_extra_programmes",
              cta_location: "results_programmes_section",
              destination: "in_page",
            });
            setShowAll(false);
          }}
          className="w-full rounded-2xl border px-4 py-3 text-center text-sm font-semibold"
          style={{ background: "white", borderColor: "#EDE9E0", color: "#78716C", cursor: "pointer" }}
        >
          {dictionary.hideProgrammes} ↑
        </button>
      )}
    </div>
  );
}
