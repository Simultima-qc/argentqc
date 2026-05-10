"use client";

import { useMemo, useState } from "react";
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
      await navigator.clipboard.writeText(shareUrl);
      setState("copied");
    } catch {
      // Clipboard API unavailable (non-HTTPS, permissions denied, unsupported browser).
      setState("error");
    } finally {
      window.setTimeout(() => setState("idle"),