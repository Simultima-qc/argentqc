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
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "cta_click", withPageContext(params));
}

export interface QuestionnaireStepParams {
  step_number: number;
  question_name: string;
  locale: string;
  page_path?: string;
  source_page?: string;
}

export interface QuestionnaireViewParams {
  locale: string;
  page_path?: string;
  source_page?: string;
}

export interface QuestionnaireCompletedParams {
  total_questions: number;
  locale: string;
  page_path?: string;
  source_page?: string;
}

export interface QuestionnaireAbandonedParams {
  last_step: number;
  locale: string;
  page_path?: string;
  source_page?: string;
}

export interface ResultsViewParams {
  locale: string;
  matched_program_count: number;
  estimated_total_min: number;
  estimated_total_max: number;
  page_path?: string;
  source_page?: string;
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

function gtag(event: string, params: object): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, withPageContext(params));
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
