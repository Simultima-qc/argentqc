"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReponseQuestionnaire } from "@/types";
import { buildResultsUrl } from "@/lib/questionnaire-url";

interface ShareResultsLinkProps {
  answers: ReponseQuestionnaire;
  resultsPath: string;
  locale?: "fr" | "en";
}

type CopyState = "idle" | "copied" | "error";

export default function ShareResultsLink({
  answers,
  resultsPath,
  locale = "fr",
}: ShareResultsLinkProps) {
  const [state, setState] = useState<CopyState>("idle");
  const resetTimerRef = useRef<number | null>(null);
  const relativeUrl = useMemo(() => buildResultsUrl(resultsPath, answers), [resultsPath, answers]);

  const labels =
    locale === "en"
      ? {
          copy: "Copy share link",
          copied: "Link copied",
          error: "Copy failed – please copy the URL manually",
        }
      : {
          copy: "Copier le lien partageable",
          copied: "Lien copié",
          error: "Échec de la copie – copiez l'URL manuellement",
        };

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  function resetStateLater(delay = 2400) {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = window.setTimeout(() => {
      setState("idle");
      resetTimerRef.current = null;
    }, delay);
  }

  async function copyToClipboard(shareUrl: string) {
    if (!navigator.clipboard?.writeText) {
      throw new Error("Clipboard API unavailable");
    }

    await navigator.clipboard.writeText(shareUrl);
  }

  async function copyOrShare() {
    const shareUrl = `${window.location.origin}${relativeUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url: shareUrl });
        return;
      } catch {
        // Fallback to clipboard when native sharing is cancelled or unavailable.
      }
    }

    try {
      await copyToClipboard(shareUrl);
      setState("copied");
      resetStateLater();
    } catch {
      // Clipboard API unavailable (non-HTTPS, permissions denied, unsupported browser).
      setState("error");
      resetStateLater(5000);
    }
  }

  return (
    <button
      type="button"
      onClick={copyOrShare}
      className="rounded-xl border px-4 py-2 text-sm font-bold transition hover:bg-stone-50"
      style={{ borderColor: "#EDE9E0", color: state === "error" ? "#b91c1c" : "#060D1A", background: "white" }}
    >
      <span aria-live="polite">
        {state === "copied" ? labels.copied : state === "error" ? labels.error : labels.copy}
      </span>
    </button>
  );
}
