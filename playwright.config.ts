import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;

// Smoke tests ArgentQC
// - Local : demarre next dev (reuseExistingServer si deja lance)
// - CI (Netlify) : demarre next start -- le build est deja fait
//
// Lancer : npm test
// Lancer en mode UI : npm run test:ui

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: isCI ? "list" : "html",

  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  // En CI : next build est deja fait, on demarre le serveur de prod.
  // En local : on demarre next dev (plus rapide au quotidien).
  webServer: {
    command: isCI ? "npx next start" : "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !isCI,
    timeout: 120_000,
  },
});
