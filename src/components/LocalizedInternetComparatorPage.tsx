import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LocalizedInternetComparatorClient from "@/components/LocalizedInternetComparatorClient";
import { getInternetComparatorDictionary } from "@/i18n/subguides";
import { getRoutePath, type Locale } from "@/i18n/routing";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function LocalizedInternetComparatorPage({ locale }: { locale: Locale }) {
  const dictionary = getInternetComparatorDictionary(locale);
  const homePath = getRoutePath(locale, "home");

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
        <section className="mb-6 rounded-3xl border bg-white p-5" style={{ borderColor: "#EDE9E0" }}>
          <h2 className="mb-4 text-xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.introSectionsTitle}</h2>
          {dictionary.introParagraphs.map((paragraph) => (
            <p key={paragraph} className="mb-3 text-sm leading-7 text-stone-700 last:mb-0">{paragraph}</p>
          ))}
        </section>

        <LocalizedInternetComparatorClient locale={locale} />

        <section className="mb-10 mt-10">
          <h2 className="mb-4 text-2xl font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>{dictionary.relatedTitle}</h2>
          <div className="flex flex-col gap-3">
            {dictionary.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-4 rounded-2xl border bg-white p-4 no-underline" style={{ borderColor: "#EDE9E0" }}>
                <span className="text-2xl">{link.emoji}</span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-stone-900">{link.title}</div>
                  <div className="text-sm leading-7 text-stone-500">{link.description}</div>
                </div>
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

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p className="text-xs" style={{ color: "rgba(240,235,224,0.45)" }}>{dictionary.footerText}</p>
          <Link href="/contact" className="mt-2 inline-block text-xs" style={{ color: "rgba(240,235,224,0.55)" }}>{dictionary.footerContact}</Link>
        </div>
      </footer>
    </main>
  );
}
