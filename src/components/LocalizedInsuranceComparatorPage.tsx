import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SiteFooter from "@/components/SiteFooter";
import LocalizedInsuranceComparatorClient from "@/components/LocalizedInsuranceComparatorClient";
import { getRoutePath, type Locale } from "@/i18n/routing";
import { getInsuranceComparatorDictionary } from "@/i18n/subguides";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function LocalizedInsuranceComparatorPage({ locale }: { locale: Locale }) {
  const dictionary = getInsuranceComparatorDictionary(locale);
  const homePath = getRoutePath(locale, "home");
  const insuranceHubPath = getRoutePath(locale, "insurance");

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
            <Link href={insuranceHubPath} style={{ color: "inherit", textDecoration: "none" }}>{dictionary.breadcrumb[1]}</Link>
            {" / "}
            <span style={{ color: "rgba(240,235,224,0.75)" }}>{dictionary.breadcrumb[2]}</span>
          </nav>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>{dictionary.eyebrow}</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-stone-100 md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.title}</h1>
          <p className="max-w-3xl text-base leading-8 text-stone-300">{dictionary.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-10">
        <LocalizedInsuranceComparatorClient dictionary={dictionary} />

        <section className="mb-10">
          <h2 className="mb-4 mt-8 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.detailedGuidesTitle}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {dictionary.detailedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="rounded-2xl border bg-white p-4 no-underline" style={{ borderColor: "#EDE9E0", color: "inherit" }}>
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-extrabold" style={{ background: DARK, color: GOLD }}>{guide.emoji}</div>
                <div className="mb-1 text-sm font-bold text-stone-900">{guide.title}</div>
                <div className="text-xs leading-6 text-stone-500">{guide.description}</div>
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
