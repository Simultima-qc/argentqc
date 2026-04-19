const criticalRoutes = new Set([
  "home",
  "retirementRrsp",
  "taxesRefund",
  "taxesSoftware",
]);

export function startServerTimer() {
  return performance.now();
}

export function logCriticalRender(route: string, startedAt: number) {
  if (!criticalRoutes.has(route) || process.env.NODE_ENV !== "production") {
    return;
  }

  const elapsed = Math.round(performance.now() - startedAt);
  console.info(`[perf] ${route} rendered in ${elapsed}ms`);
}
