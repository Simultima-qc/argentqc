"use client";

import { useMemo, useState } from "react";
import type { ReponseQuestionnaire } from "@/types";
import { buildResultsUrl } from "@/lib/questionnaire-url";

interface ShareResultsLinkProps {
  answers: ReponseQuestionnaire;
  resultsPath: string;
  locale?: "fr" | "en";
}

export default function ShareResultsLink({
  answers,
  resultsPath,
  locale = "fr",
}: ShareResultsLinkProps) {
  const [copied, setCopied] = useState(false);
  const relativeUrl = useMemo(() => buildResultsUrl(resultsPath, answers), [resultsPath, answers]);

  const labels =
    locale === "en"
      ? {
          copy: "Copy share link",
          copied: "Link copied",
        }
      : {
          copy: "Copier le lien partageable",
          copied: "Lien copié",
        };

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

    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  }

  return (
    <button
      type="button"
      onClick={copyOrShare}
      aria-live="polite"
      className="rounded-xl border px-4 py-2 text-sm font-bold transition hover:bg-stone-50"
      style={{ borderColor: "#EDE9E0", color: "#060D1A", background: "white" }}
    >
      {copied ? labels.copied : labels.copy}
    </button>
  );
}
