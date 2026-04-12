import type { Locale } from "@/i18n/routing";

export interface CommonUiLabels {
  languageSwitcher: string;
  hubKeyPoints: string;
  hubUsefulPages: string;
  faq: string;
}

const labels: Record<Locale, CommonUiLabels> = {
  fr: {
    languageSwitcher: "Changer de langue",
    hubKeyPoints: "Points cles",
    hubUsefulPages: "Pages utiles",
    faq: "FAQ",
  },
  en: {
    languageSwitcher: "Change language",
    hubKeyPoints: "Key points",
    hubUsefulPages: "Useful pages",
    faq: "FAQ",
  },
};

export function getCommonUiLabels(locale: Locale): CommonUiLabels {
  return labels[locale];
}
