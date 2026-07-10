declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface CtaClickParams {
  cta_name: string;
  cta_location: string;
  destination: string;
  page_path?: string;
  source_page?: string;
}

export function trackCtaClick(params: CtaClickParams): void {
  if (typeof window === "undefined") return;
  persistQuestionnaireSource(params);
  if (!window.gtag) return;
  window.gtag("event", "cta_click", withPageContext(params));
}

export interface FunnelAttributionParams {
  page_path?: string;
  source_page?: string;
  source_cta_name?: string;
  source_cta_location?: string;
}

export interface QuestionnaireStepParams {
  step_number: number;
  question_name: string;
  locale: string;
  page_path?: FunnelAttributionParams["page_path"];
  source_page?: FunnelAttributionParams["source_page"];
  source_cta_name?: FunnelAttributionParams["source_cta_name"];
  source_cta_location?: FunnelAttributionParams["source_cta_location"];
}

export interface QuestionnaireViewParams {
  locale: string;
  page_path?: FunnelAttributionParams["page_path"];
  source_page?: FunnelAttributionParams["source_page"];
  source_cta_name?: FunnelAttributionParams["source_cta_name"];
  source_cta_location?: FunnelAttributionParams["source_cta_location"];
}

export interface QuestionnaireCompletedParams {
  total_questions: number;
  locale: string;
  page_path?: FunnelAttributionParams["page_path"];
  source_page?: FunnelAttributionParams["source_page"];
  source_cta_name?: FunnelAttributionParams["source_cta_name"];
  source_cta_location?: FunnelAttributionParams["source_cta_location"];
}

export interface QuestionnaireAbandonedParams {
  last_step: number;
  locale: string;
  page_path?: FunnelAttributionParams["page_path"];
  source_page?: FunnelAttributionParams["source_page"];
  source_cta_name?: FunnelAttributionParams["source_cta_name"];
  source_cta_location?: FunnelAttributionParams["source_cta_location"];
}

export interface ResultsViewParams {
  locale: string;
  matched_program_count: number;
  estimated_total_min: number;
  estimated_total_max: number;
  page_path?: FunnelAttributionParams["page_path"];
  source_page?: FunnelAttributionParams["source_page"];
  source_cta_name?: FunnelAttributionParams["source_cta_name"];
  source_cta_location?: FunnelAttributionParams["source_cta_location"];
}

export interface LeadCaptureParams {
  locale: string;
  matched_program_count?: number;
  page_path?: FunnelAttributionParams["page_path"];
  source_page?: FunnelAttributionParams["source_page"];
  source_cta_name?: FunnelAttributionParams["source_cta_name"];
  source_cta_location?: FunnelAttributionParams["source_cta_location"];
}

function getPageContext(): { page_path: string; source_page: string } {
  const pagePath = `${window.location.pathname}${window.location.search}`;
  return {
    page_path: pagePath,
    source_page: pagePath,
  };
}

function withPageContext<T extends object>(params: T): T & { page_path: string; source_page: string } {
  return {
    ...getPageContext(),
    ...params,
  };
}

const SOURCE_PAGE_KEY = "argentqc_source_page";
const SOURCE_CTA_NAME_KEY = "argentqc_cta_name";
const SOURCE_CTA_LOCATION_KEY = "argentqc_cta_location";

function getSessionValue(key: string): string | undefined {
  try {
    return window.sessionStorage.getItem(key) ?? undefined;
  } catch {
    return undefined;
  }
}

function setSessionValue(key: string, value: string): void {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Analytics attribution should never block navigation.
  }
}

function getPathname(destination: string): string {
  try {
    return new URL(destination, window.location.origin).pathname;
  } catch {
    return destination.split("?")[0].split("#")[0];
  }
}

function isQuestionnaireDestination(destination: string): boolean {
  const pathname = getPathname(destination).replace(/\/$/, "");
  return pathname === "/questionnaire" || pathname.endsWith("/questionnaire");
}

function getStoredFunnelAttribution(): FunnelAttributionParams {
  return {
    source_page: getSessionValue(SOURCE_PAGE_KEY),
    source_cta_name: getSessionValue(SOURCE_CTA_NAME_KEY),
    source_cta_location: getSessionValue(SOURCE_CTA_LOCATION_KEY),
  };
}

function persistQuestionnaireSource(params: CtaClickParams): void {
  if (!isQuestionnaireDestination(params.destination)) return;

  const sourcePage = params.source_page ?? getPageContext().source_page;
  setSessionValue(SOURCE_PAGE_KEY, sourcePage);
  setSessionValue(SOURCE_CTA_NAME_KEY, params.cta_name);
  setSessionValue(SOURCE_CTA_LOCATION_KEY, params.cta_location);
}

function withFunnelAttribution<T extends object>(params: T): T & FunnelAttributionParams & { page_path: string; source_page: string } {
  return {
    ...getPageContext(),
    ...getStoredFunnelAttribution(),
    ...params,
  };
}

function gtag(event: string, params: object): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, withFunnelAttribution(params));
}

export function trackQuestionnaireView(params: QuestionnaireViewParams): void {
  gtag("questionnaire_view", params);
}

export function trackQuestionnaireStep(params: QuestionnaireStepParams): void {
  gtag("questionnaire_step", params);
}

export function trackQuestionnaireCompleted(params: QuestionnaireCompletedParams): void {
  gtag("questionnaire_completed", params);
}

export function trackQuestionnaireAbandoned(params: QuestionnaireAbandonedParams): void {
  gtag("questionnaire_abandoned", params);
}

export function trackResultsView(params: ResultsViewParams): void {
  gtag("results_view", params);
}

export function trackLeadCaptureSubmitted(params: LeadCaptureParams): void {
  gtag("lead_capture_submitted", params);
}

export function trackLeadCaptureSuccess(params: LeadCaptureParams): void {
  gtag("lead_capture_success", params);
}

export function trackLeadCaptureError(params: LeadCaptureParams): void {
  gtag("lead_capture_error", params);
}
