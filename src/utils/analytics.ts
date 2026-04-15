declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface CtaClickParams {
  cta_name: string;
  cta_location: string;
  destination: string;
}

export function trackCtaClick(params: CtaClickParams): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "cta_click", params);
}
