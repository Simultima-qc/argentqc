"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { localeLabels, locales, type Locale, swapLocaleInPathname } from "@/i18n/routing";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
  availableLocales?: readonly Locale[];
}

function LanguageSwitcherInner({ currentLocale, label, availableLocales = locales }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  return (
    <nav aria-label={label} className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {availableLocales.map((locale) => {
        const href = `${swapLocaleInPathname(pathname, locale)}${query ? `?${query}` : ""}`;
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={href}
            hrefLang={locale}
            locale={false}
            prefetch={false}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              isActive ? "bg-white text-slate-950" : "text-white/70 hover:text-white"
            }`}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}

function LanguageSwitcherFallback({ currentLocale, label, availableLocales = locales }: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {availableLocales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <span
            key={locale}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              isActive ? "bg-white text-slate-950" : "text-white/70"
            }`}
          >
            {localeLabels[locale]}
          </span>
        );
      })}
    </nav>
  );
}

export default function LanguageSwitcher(props: LanguageSwitcherProps) {
  return (
    <Suspense fallback={<LanguageSwitcherFallback {...props} />}>
      <LanguageSwitcherInner {...props} />
    </Suspense>
  );
}
