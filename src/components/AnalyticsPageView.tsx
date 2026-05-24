"use client";

import { useEffect } from "react";
import { trackResultsView } from "@/utils/analytics";
import type { Locale } from "@/i18n/routing";

interface ResultsViewTrackerProps {
  type: "results";
  locale: Locale;
  matchedProgramCount: number;
  estimatedTotalMin: number;
  estimatedTotalMax: number;
}

export default function AnalyticsPageView({
  type,
  locale,
  matchedProgramCount,
  estimatedTotalMin,
  estimatedTotalMax,
}: ResultsViewTrackerProps) {
  useEffect(() => {
    if (type !== "results") return;

    trackResultsView({
      locale,
      matched_program_count: matchedProgramCount,
      estimated_total_min: estimatedTotalMin,
      estimated_total_max: estimatedTotalMax,
    });
  }, [type, locale, matchedProgramCount, estimatedTotalMin, estimatedTotalMax]);

  return null;
}
