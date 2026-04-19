"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import type { ReponseQuestionnaire } from "@/types";

interface LeadCaptureFormProps {
  locale: Locale;
  reponses: ReponseQuestionnaire;
  matchedProgramCount: number;
  estimatedTotalMin: number;
  estimatedTotalMax: number;
}

const DARK = "#060D1A";
const GOLD = "#F5C842";

function gtag(event: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}

export default function LeadCaptureForm({
  locale,
  reponses,
  matchedProgramCount,
  estimatedTotalMin,
  estimatedTotalMax,
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isFr = locale === "fr";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg(isFr ? "Veuillez entrer un courriel valide." : "Please enter a valid email.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    gtag("lead_capture_submitted", { locale, matched_program_count: matchedProgramCount });

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          locale,
          questionnaire_params: reponses,
          matched_program_count: matchedProgramCount,
          estimated_total_min: estimatedTotalMin,
          estimated_total_max: estimatedTotalMax,
          created_at: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("non-ok");

      setStatus("success");
      gtag("lead_capture_success", { locale, matched_program_count: matchedProgramCount });
    } catch {
      setStatus("error");
      gtag("lead_capture_error", { locale });
      setErrorMsg(
        isFr
          ? "Une erreur s'est produite. Veuillez réessayer."
          : "An error occurred. Please try again."
      );
    }
  }

  return (
    <div
      className="mb-5 rounded-2xl border bg-white p-5"
      style={{ borderColor: "#EDE9E0" }}
    >
      <p className="mb-1 text-base font-extrabold text-stone-900" style={{ fontFamily: "var(--font-playfair)" }}>
        📩 {isFr ? "Recevez vos résultats et les nouveaux programmes pertinents" : "Get your results and relevant new programs"}
      </p>
      <p className="mb-4 text-sm leading-6 text-stone-500">
        {isFr
          ? "Laissez votre courriel pour recevoir vos résultats et être averti si de nouveaux programmes correspondent à votre profil."
          : "Leave your email to receive your results and be notified when new programs match your profile."}
      </p>

      {status === "success" ? (
        <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          ✓ {isFr ? "Parfait ! Vous recevrez vos résultats sous peu." : "Done! You'll receive your results shortly."}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isFr ? "votre@courriel.com" : "your@email.com"}
            className="flex-1 rounded-xl border px-4 py-3 text-sm text-stone-900 outline-none focus:ring-2 focus:ring-amber-300"
            style={{ borderColor: "#EDE9E0" }}
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 rounded-xl px-5 py-3 text-sm font-bold transition-opacity disabled:opacity-60"
            style={{ background: DARK, color: GOLD }}
          >
            {status === "loading"
              ? isFr ? "Envoi…" : "Sending…"
              : isFr ? "Recevoir mes résultats" : "Get my results"}
          </button>
        </form>
      )}

      {errorMsg && (
        <p className="mt-2 text-xs text-red-500">{errorMsg}</p>
      )}
    </div>
  );
}
