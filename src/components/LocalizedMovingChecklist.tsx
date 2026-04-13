"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getMovingChecklistDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";
const STORAGE_KEY = "checklist-demenagement-qc";

const resourceEmoji: Record<string, string> = {
  Mail: "Mail",
  Car: "Car",
  Tax: "Tax",
  CRA: "CRA",
  Health: "Health",
  Power: "Power",
};

function getAllIds(sections: ReturnType<typeof getMovingChecklistDictionary>["sections"]) {
  return sections.flatMap((section) => section.tasks.map((task) => task.id));
}

export default function LocalizedMovingChecklist({ locale }: { locale: Locale }) {
  const dictionary = getMovingChecklistDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const movingHubPath = getRoutePath(locale, "moving");
  const movingCostPath = "/demenagement/cout";
  const insuranceHomePath = getRoutePath(locale, "insuranceHome");
  const totalTasks = getAllIds(dictionary.sections).length;

  const [checked, setChecked] = useState<Set<string>>(() => {
    if (typeof window === "undefined") {
      return new Set();
    }

    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checked)));
    } catch {
      // ignore
    }
  }, [checked]);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleReset = () => {
    setChecked(new Set());
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const progress = totalTasks > 0 ? Math.round((checked.size / totalTasks) * 100) : 0;

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
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>{dictionary.eyebrow}</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.title}</h1>
          <p className="max-w-2xl text-base leading-8 text-stone-300">{dictionary.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-10">
        <section className="mb-6 rounded-3xl border bg-white p-6" style={{ borderColor: "#EDE9E0" }}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-sm font-bold text-stone-900">{dictionary.progressLabel}</span>
            <span className="text-sm font-extrabold" style={{ color: GREEN }}>{checked.size} / {totalTasks} ({progress}%)</span>
          </div>
          <div style={{ height: "10px", background: "#F3F4F6", borderRadius: "999px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: progress === 100 ? GREEN : GOLD, transition: "width 0.4s ease" }} />
          </div>
          {progress === 100 ? <p className="mt-3 text-center text-sm font-bold" style={{ color: GREEN }}>{dictionary.completedLabel}</p> : null}
        </section>

        <section className="mb-6 rounded-2xl border px-5 py-4 text-sm leading-7" style={{ borderColor: "#BFDBFE", background: "#EFF6FF", color: "#1D4ED8" }}>
          {dictionary.privacyNote}
        </section>

        {dictionary.sections.map((section) => {
          const doneCount = section.tasks.filter((task) => checked.has(task.id)).length;
          const complete = doneCount === section.tasks.length;

          return (
            <section key={section.title} className="mb-4 rounded-3xl border bg-white p-6" style={{ borderColor: complete ? "#A7F3D0" : "#EDE9E0" }}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-stone-500">{section.emoji}</span>
                  <h2 className="text-lg font-extrabold" style={{ color: complete ? GREEN : "#1C1C1E", fontFamily: "var(--font-playfair)" }}>{section.title}</h2>
                </div>
                <span className="text-xs text-stone-500">{doneCount}/{section.tasks.length} {dictionary.sectionCounterLabel}</span>
              </div>
              <div className="flex flex-col gap-2">
                {section.tasks.map((task) => {
                  const isChecked = checked.has(task.id);
                  return (
                    <label key={task.id} className="flex cursor-pointer items-start gap-3 rounded-2xl border p-4" style={{ background: isChecked ? "#ECFDF5" : "#FAFAFA", borderColor: isChecked ? "#A7F3D0" : "#F3F4F6" }}>
                      <input type="checkbox" checked={isChecked} onChange={() => toggle(task.id)} style={{ marginTop: "2px", width: "17px", height: "17px", accentColor: GREEN }} />
                      <div className="flex-1">
                        <div className="text-sm leading-7" style={{ color: isChecked ? "#065F46" : "#1C1C1E", textDecoration: isChecked ? "line-through" : "none", opacity: isChecked ? 0.72 : 1 }}>{task.text}</div>
                        {task.note ? <p className="m-0 text-xs leading-6 text-stone-500">{task.note}</p> : null}
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>
          );
        })}

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.resourcesTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.resources.map((resource) => (
              <a key={resource.name} href={resource.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border bg-white p-4 no-underline" style={{ borderColor: "#EDE9E0" }}>
                <span className="text-sm font-bold text-stone-500">{resourceEmoji[resource.emoji] ?? resource.emoji}</span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-stone-900">{resource.name}</div>
                  <div className="text-xs text-stone-500">{resource.description}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {checked.size > 0 ? (
          <button onClick={handleReset} className="mb-6 block w-full rounded-2xl border px-4 py-3 text-sm font-semibold" style={{ borderColor: "#FECACA", color: "#DC2626", background: "transparent" }}>
            {dictionary.resetLabel}
          </button>
        ) : null}

        <section className="rounded-[28px] px-6 py-7 text-center" style={{ background: DARK }}>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href={movingCostPath} className="rounded-2xl px-5 py-3 text-sm font-extrabold no-underline" style={{ background: GOLD, color: DARK }}>
              {dictionary.ctaCostTitle}
            </Link>
            <Link href={insuranceHomePath} className="rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {dictionary.ctaInsuranceTitle}
            </Link>
            <Link href={movingHubPath} className="rounded-2xl border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "rgba(240,235,224,0.16)", color: "#F0EBE0" }}>
              {locale === "fr" ? "Retour au thème déménagement" : "Back to moving topic"}
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm leading-7 text-stone-300 sm:flex-row sm:justify-center sm:gap-6">
            <span>{dictionary.ctaCostText}</span>
            <span>{dictionary.ctaInsuranceText}</span>
          </div>
        </section>
      </div>
    </main>
  );
}
