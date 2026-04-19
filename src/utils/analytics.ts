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

export interface QuestionnaireStepParams {
  step_number: number;
  question_name: string;
  locale: string;
}

export interface QuestionnaireCompletedParams {
  total_questions: number;
  locale: string;
}

export interface QuestionnaireAbandonedParams {
  last_step: number;
  locale: string;
}

function gtag(event: string, params: object): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
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
