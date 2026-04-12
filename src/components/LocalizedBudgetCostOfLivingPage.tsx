import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getBudgetCostOfLivingDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function LocalizedBudgetCostOfLivingPage({ locale }: { locale: Locale }) {
  const dictionary = getBudgetCostOfLivingDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const questionnairePath = getRoutePath(locale, "questionnaire");

  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link href={homePath} style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <LanguageSwitcher currentLocale={locale} label="Language switcher" />
        </div>
      </header>

      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-4xl" style={{ position: "relative", zIndex: 1 }}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>{dictionary.eyebrow}</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.title}</h1>
          <p className="mb-6 max-w-3xl text-base leading-8 text-stone-300">{dictionary.intro}</p>
          <Link href={questionnairePath} style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "15px", padding: "14px 18px", borderRadius: "14px", textDecoration: "none" }}>
            {dictionary.ctaLabel}
          </Link>
          <p className="mt-3 text-sm text-stone-400">{dictionary.ctaNote}</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-10">
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.profilesTitle}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {dictionary.profiles.map((profile) => (
              <div key={profile.profile} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: DARK, color: GOLD }}>{profile.emoji}</span>
                  <div>
                    <p className="m-0 text-sm font-bold text-stone-900">{profile.profile}</p>
                    <p className="m-0 text-xs text-stone-500">{profile.income}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl bg-stone-50 p-3">
                    <p className="mb-1 text-xs text-stone-500">{locale === "fr" ? "Depenses" : "Expenses"}</p>
                    <p className="m-0 text-sm font-bold text-stone-900">{profile.expenses}</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-3">
                    <p className="mb-1 text-xs text-emerald-700">{locale === "fr" ? "Aides" : "Support"}</p>
                    <p className="m-0 text-sm font-bold text-emerald-800">{profile.support}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.expensesTitle}</h2>
          <div className="flex flex-col gap-4">
            {dictionary.expenses.map((expense) => (
              <div key={expense.category} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: DARK, color: GOLD }}>{expense.emoji}</span>
                  <h3 className="m-0 text-lg font-bold text-stone-900">{expense.category}</h3>
                </div>
                <div className="mb-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-stone-50 p-3 text-center">
                    <p className="mb-1 text-xs text-stone-500">{locale === "fr" ? "Personne seule" : "Solo household"}</p>
                    <p className="m-0 text-sm font-bold text-stone-900">{expense.solo}</p>
                  </div>
                  <div className="rounded-xl bg-stone-50 p-3 text-center">
                    <p className="mb-1 text-xs text-stone-500">{locale === "fr" ? "Famille" : "Family"}</p>
                    <p className="m-0 text-sm font-bold text-stone-900">{expense.family}</p>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-7 text-stone-600">{expense.note}</p>
                <div className="flex flex-wrap gap-2">
                  {expense.supports.map((support) => (
                    <Link key={support.href} href={support.href} className="rounded-full border px-3 py-1 text-xs no-underline" style={{ borderColor: "#BBF7D0", background: "#F0FDF4", color: "#15803D" }}>
                      {support.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.relatedTitle}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {dictionary.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border bg-white p-4 no-underline" style={{ borderColor: "#EDE9E0", color: "inherit" }}>
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: DARK, color: GOLD }}>{link.emoji}</div>
                <div className="mb-1 text-sm font-bold text-stone-900">{link.title}</div>
                <div className="text-xs leading-6 text-stone-500">{link.description}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.faqsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <h3 className="mb-2 text-sm font-bold text-stone-900">{faq.question}</h3>
                <p className="m-0 text-sm leading-7 text-stone-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-3xl bg-blue-800 px-6 py-7 text-center text-white">
          <h2 className="mb-2 text-2xl font-extrabold" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.closingTitle}</h2>
          <p className="mb-4 text-sm leading-7 text-blue-100">{dictionary.closingText}</p>
          <Link href={questionnairePath} className="inline-block rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-blue-900 no-underline">
            {dictionary.closingCta}
          </Link>
          <p className="mt-3 text-xs text-blue-200">{dictionary.closingNote}</p>
        </section>

        <p className="text-center text-xs leading-relaxed text-stone-400">{dictionary.footerText}</p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="mx-auto max-w-4xl text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>
            {dictionary.footerContact}
          </Link>
        </div>
      </footer>
    </main>
  );
}
