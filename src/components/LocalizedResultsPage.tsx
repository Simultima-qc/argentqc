import Link from "next/link";
import { calculerTotal, formaterArgent, trouverProgrammes } from "@/lib/matching";
import { localizeProgramme } from "@/i18n/programmes";
import type { ResultsDictionary } from "@/i18n/content";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getCommonUiLabels } from "@/i18n/ui";
import type { ReponseQuestionnaire } from "@/types";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

interface LocalizedResultsPageProps {
  locale: Locale;
  dictionary: ResultsDictionary;
  reponses: ReponseQuestionnaire;
}

export default function LocalizedResultsPage({
  locale,
  dictionary,
  reponses,
}: LocalizedResultsPageProps) {
  const programmes = trouverProgrammes(reponses).map((programme) => localizeProgramme(programme, locale));
  const total = calculerTotal(programmes);
  const homePath = getRoutePath(locale, "home");
  const questionnairePath = getRoutePath(locale, "questionnaire");
  const ui = getCommonUiLabels(locale);

  return (
    <main style={{ minHeight: "100vh", background: PARCH }}>
      <header
        style={{
          background: DARK,
          position: "sticky",
          top: 0,
          zIndex: 10,
          padding: "14px 16px",
          boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
          <Link
            href={homePath}
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}
          >
            ArgentQC.ca
          </Link>
          <div className="flex items-center gap-3">
            <Link href={questionnairePath} className="text-xs font-semibold text-amber-300 underline opacity-80">
              {dictionary.restart}
            </Link>
            <LanguageSwitcher currentLocale={locale} label={ui.languageSwitcher} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-6">
        <div
          style={{
            background: DARK,
            borderRadius: "20px",
            padding: "28px 24px",
            marginBottom: "20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,200,66,0.08) 0%, transparent 70%)",
            }}
          />
          <p className="mb-1 text-center text-xs font-bold uppercase tracking-[0.16em] text-stone-400">
            {dictionary.summaryLabel}
          </p>
          <p
            className="mb-2 text-center text-5xl font-extrabold leading-none md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)", color: GOLD }}
          >
            {formaterArgent(total.max, locale)}
          </p>
          <p className="mb-5 text-center text-sm text-stone-400">
            {programmes.length} {programmes.length === 1 ? dictionary.programmesFound.singular : dictionary.programmesFound.plural}
          </p>

          {programmes.length > 0 && (
            <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
              {programmes.map((programme) => (
                <div key={programme.id} className="flex items-center justify-between gap-4 text-sm">
                  <span className="flex items-center gap-2 text-stone-300">
                    <span style={{ color: GREEN }}>✓</span>
                    {programme.nom}
                  </span>
                  <span className="font-bold text-stone-100">{programme.montant_affiche}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-5 rounded-xl border bg-white p-2" style={{ borderColor: "#EDE9E0" }}>
          <div className="flex h-14 items-center justify-center rounded-lg text-xs text-stone-400" style={{ background: PARCH }}>
            {dictionary.adsLabel}
          </div>
        </div>

        {programmes.length === 0 ? (
          <div className="rounded-[20px] border bg-white px-6 py-10 text-center" style={{ borderColor: "#EDE9E0" }}>
            <div className="mb-3 text-5xl">🔎</div>
            <h2
              className="mb-2 text-xl font-extrabold text-stone-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {dictionary.emptyState.title}
            </h2>
            <p className="mb-6 text-sm leading-7 text-stone-500">{dictionary.emptyState.description}</p>
            <Link
              href={questionnairePath}
              className="block rounded-2xl px-5 py-3 text-center font-bold no-underline"
              style={{ background: DARK, color: GOLD }}
            >
              {dictionary.emptyState.cta}
            </Link>
          </div>
        ) : (
          <>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-stone-400">
              {dictionary.eligibleLabel}
            </h2>

            <div className="flex flex-col gap-3">
              {programmes.map((programme) => {
                const level = dictionary.levelLabels[programme.niveau];
                return (
                  <div
                    key={programme.id}
                    className="overflow-hidden rounded-2xl border bg-white"
                    style={{ borderColor: "#EDE9E0", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
                  >
                    <div className="flex items-center justify-between gap-3 border-b bg-emerald-50 px-4 py-3" style={{ borderColor: "#D1FAE5" }}>
                      <div className="flex flex-wrap gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${level.className}`}>
                          {level.label}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                          {dictionary.categoryLabels[programme.categorie] ?? programme.categorie}
                        </span>
                      </div>
                      <span className="shrink-0 text-sm font-extrabold text-emerald-700">{programme.montant_affiche}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1 text-base font-bold text-stone-900">{programme.nom}</h3>
                      <p className="mb-3 text-xs text-stone-400">{programme.organisme}</p>
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
                      <a
                        href={programme.lien_officiel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl px-4 py-3 text-center text-sm font-bold no-underline"
                        style={{ background: DARK, color: GOLD, border: "1px solid rgba(245,200,66,0.15)" }}
                      >
                        {dictionary.applyCta} →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="my-5 rounded-xl border bg-white p-2" style={{ borderColor: "#EDE9E0" }}>
              <div className="flex h-16 items-center justify-center rounded-lg text-xs text-stone-400" style={{ background: PARCH }}>
                {dictionary.adsLabel}
              </div>
            </div>

            <div className="rounded-2xl px-6 py-6 text-center" style={{ background: DARK }}>
              <p className="mb-4 text-sm text-stone-300">{dictionary.recalculateText}</p>
              <Link
                href={questionnairePath}
                className="block rounded-2xl px-4 py-3 text-center text-sm font-extrabold no-underline"
                style={{ background: GOLD, color: DARK }}
              >
                {dictionary.recalculateCta}
              </Link>
            </div>
          </>
        )}

        <p className="mt-6 text-center text-xs leading-6 text-stone-400">{dictionary.estimateDisclaimer}</p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px", marginTop: "16px" }}>
        <div className="mx-auto max-w-2xl text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>
            ArgentQC.ca
          </p>
          <p className="text-xs text-stone-400">{dictionary.footerDisclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
