import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SiteFooter from "@/components/SiteFooter";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getTaxSoftwareDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function LocalizedTaxSoftwarePage({ locale }: { locale: Locale }) {
  const dictionary = getTaxSoftwareDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const taxesHubPath = getRoutePath(locale, "taxes");

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
          <nav className="mb-4 text-xs" style={{ color: "rgba(240,235,224,0.45)" }}>
            <Link href={homePath} style={{ color: "inherit", textDecoration: "none" }}>{dictionary.breadcrumb[0]}</Link>
            {" / "}
            <Link href={taxesHubPath} style={{ color: "inherit", textDecoration: "none" }}>{dictionary.breadcrumb[1]}</Link>
            {" / "}
            <span style={{ color: "rgba(240,235,224,0.75)" }}>{dictionary.breadcrumb[2]}</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>{dictionary.eyebrow}</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.title}</h1>
          <p className="max-w-3xl text-base leading-8 text-stone-300">{dictionary.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-10">
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.tableTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border bg-white" style={{ borderColor: "#EDE9E0" }}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  {dictionary.tableHeaders.map((header) => (
                    <th key={header} style={{ padding: "12px 14px", textAlign: header === dictionary.tableHeaders[0] ? "left" : "center", fontWeight: 700 }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dictionary.softwareRows.map((row, index) => (
                  <tr key={row.name} style={{ borderBottom: index < dictionary.softwareRows.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px 14px" }}>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: row.color, color: row.textColor }}>{row.emoji}</span>
                        <span className="text-sm font-bold text-stone-900">{row.name}</span>
                      </div>
                      <div className="text-xs text-stone-500">{row.profile}</div>
                    </td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.badge}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.quebec}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.federal}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#44403C" }}>{row.efile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <div className="grid gap-4 md:grid-cols-2">
            {dictionary.softwareRows.map((row) => (
              <article key={row.name} className="rounded-3xl border p-5" style={{ borderColor: row.color, background: row.color }}>
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: "white", color: row.textColor }}>{row.emoji}</span>
                  <div className="text-sm font-bold" style={{ color: row.textColor }}>{row.name}</div>
                </div>
                <div className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold" style={{ color: row.textColor }}>{row.badge}</div>
                <p className="mb-2 text-sm leading-7" style={{ color: row.textColor }}>
                  <strong>{locale === "fr" ? "Points forts:" : "Strengths:"}</strong> {row.strengths}
                </p>
                <p className="m-0 text-sm leading-7" style={{ color: row.textColor }}>
                  <strong>{locale === "fr" ? "Limites:" : "Limits:"}</strong> {row.limits}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.profileTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.profileCards.map((card) => (
              <div key={card.profile} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: DARK, color: GOLD }}>{card.emoji}</span>
                  <div className="text-sm font-bold text-stone-900">{card.profile}</div>
                </div>
                <div className="mb-2 inline-flex rounded-full px-3 py-1 text-xs font-bold" style={{ background: "#ECFDF5", color: "#065F46" }}>{card.recommendation}</div>
                <p className="m-0 text-sm leading-7 text-stone-600">{card.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl px-6 py-6" style={{ background: DARK }}>
          <h2 className="mb-4 text-2xl font-extrabold text-stone-100" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.clinicsTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.clinics.map((item, index) => (
              <div key={item} className="flex gap-3 text-sm leading-7 text-stone-300">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: "rgba(245,200,66,0.12)", color: GOLD }}>{index + 1}</span>
                <span>{item}</span>
              </div>
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

        <section className="mb-10 rounded-3xl border bg-white p-6" style={{ borderColor: "#EDE9E0" }}>
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.ctaTitle}</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {dictionary.ctaLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border p-4 no-underline" style={{ borderColor: "#EDE9E0", color: "inherit" }}>
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: DARK, color: GOLD }}>{link.emoji}</div>
                <div className="mb-1 text-sm font-bold text-stone-900">{link.title}</div>
                <div className="text-xs leading-6 text-stone-500">{link.description}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter
        legalText={dictionary.footerText}
        contactLabel={dictionary.footerContact}
        locale={locale}
        contentClassName="mx-auto max-w-4xl text-center"
        style={{ background: DARK }}
        legalStyle={{ color: "rgba(240,235,224,0.4)" }}
      />
    </main>
  );
}
