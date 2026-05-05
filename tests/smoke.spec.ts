import { test, expect } from "@playwright/test";

// ---------------------------------------------------------------------------
// Smoke tests ArgentQC
// Objectif : détecter les régressions critiques sur les pages à fort trafic
//            et les étapes du tunnel de conversion.
// Lancer : npm test
// Lancer en mode UI : npm run test:ui
// ---------------------------------------------------------------------------

// ── Page d'accueil ───────────────────────────────────────────────────────────

test.describe("Page d'accueil (/fr)", () => {
  test("se charge et affiche le titre principal", async ({ page }) => {
    await page.goto("/fr");
    await expect(page).toHaveURL(/\/fr/);
    await expect(page).toHaveTitle(/ArgentQC/i);
  });

  test("la redirection / → /fr fonctionne", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/fr/);
  });

  test("le CTA principal pointe vers le questionnaire", async ({ page }) => {
    await page.goto("/fr");
    const cta = page.locator('a[href*="questionnaire"]').first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute("href");
    expect(href).toMatch(/questionnaire/);
  });
});

// ── Page subventions maison ──────────────────────────────────────────────────

test.describe("Page subventions maison (/subventions-maison-quebec)", () => {
  test("se charge avec le titre SEO correct", async ({ page }) => {
    await page.goto("/subventions-maison-quebec");
    await expect(page).toHaveTitle(/subvention/i);
  });

  test("affiche le montant phare 8 000 $+", async ({ page }) => {
    await page.goto("/subventions-maison-quebec");
    await expect(page.getByText(/8\s*000\s*\$\+/)).toBeVisible();
  });

  test("les CTAs pointent vers /questionnaire (min. 2)", async ({ page }) => {
    await page.goto("/subventions-maison-quebec");
    const ctaLinks = page.locator('a[href*="questionnaire"]');
    const count = await ctaLinks.count();
    expect(count, "Attendu au moins 2 CTAs vers /questionnaire").toBeGreaterThanOrEqual(2);
  });

  test("la section 'Pourquoi les montants varient' est présente", async ({ page }) => {
    await page.goto("/subventions-maison-quebec");
    await expect(page.getByText(/Pourquoi les montants varient/i)).toBeVisible();
  });

  test("le CTA final affiche le bon libellé", async ({ page }) => {
    await page.goto("/subventions-maison-quebec");
    const ctas = page.getByRole("link", { name: /Voir combien je peux récupérer/i });
    await expect(ctas.last()).toBeVisible();
  });
});

// ── Questionnaire ────────────────────────────────────────────────────────────

test.describe("Questionnaire (/fr/questionnaire)", () => {
  test("se charge et affiche la première question", async ({ page }) => {
    await page.goto("/fr/questionnaire");
    await expect(page).toHaveURL(/questionnaire/);
    const buttons = page.locator("button");
    await expect(buttons.first()).toBeVisible();
  });

  test("le titre de la page questionnaire est défini", async ({ page }) => {
    await page.goto("/fr/questionnaire");
    const title = await page.title();
    expect(title.length, "Le <title> ne doit pas être vide").toBeGreaterThan(5);
  });

  test("la navigation entre étapes fonctionne", async ({ page }) => {
    await page.goto("/fr/questionnaire");
    const firstOption = page.locator("button").first();
    await firstOption.click();
    await expect(page.locator("body")).toBeVisible();
  });
});

// ── Page résultats ───────────────────────────────────────────────────────────

test.describe("Page résultats (/fr/resultats)", () => {
  test("s'affiche sans crash avec des params vides", async ({ page }) => {
    const response = await page.goto("/fr/resultats");
    expect(response?.status(), "La page résultats doit répondre avec 200").toBe(200);
    await expect(page.locator("body")).toBeVisible();
  });
});

// ── Sanité globale — temps de réponse et statut HTTP ────────────────────────

const pagesToCheck = [
  { path: "/fr", label: "Accueil" },
  { path: "/subventions-maison-quebec", label: "Subventions maison" },
  { path: "/fr/questionnaire", label: "Questionnaire" },
  { path: "/reno-climat-quebec", label: "Rénoclimat" },
  { path: "/subvention-thermopompe-quebec", label: "Thermopompe" },
];

test.describe("Sanité globale", () => {
  for (const { path, label } of pagesToCheck) {
    test(`${label} (${path}) répond en moins de 5s et sans 404/500`, async ({ page }) => {
      const start = Date.now();
      const response = await page.goto(path);
      const duration = Date.now() - start;

      expect(
        response?.status(),
        `${label} a retourné HTTP ${response?.status()}`
      ).toBeLessThan(400);

      expect(duration, `${label} a mis plus de 5s à répondre`).toBeLessThan(5000);
    });
  }
});
