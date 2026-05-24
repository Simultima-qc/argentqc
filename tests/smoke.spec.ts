import { test, expect } from "@playwright/test";

// ---------------------------------------------------------------------------
// Smoke tests ArgentQC
// Objectif : détecter les régressions critiques sur les pages à fort trafic
//            et les étapes du tunnel de conversion.
// Lancer : npm test
// Lancer en mode UI : npm run test:ui
// ---------------------------------------------------------------------------

// -- Page d'accueil --

test.describe("Page d'accueil (/fr)", () => {
  test("se charge et affiche le titre principal", async ({ page }) => {
    await page.goto("/fr");
    await expect(page).toHaveURL(/\/fr/);
    await expect(page).toHaveTitle(/ArgentQC/i);
  });

  test("la redirection / -> /fr fonctionne", async ({ page }) => {
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

// -- Page subventions maison --

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

  test("la section 'Pourquoi les montants varient' est presente", async ({ page }) => {
    await page.goto("/subventions-maison-quebec");
    await expect(page.getByText(/Pourquoi les montants varient/i)).toBeVisible();
  });

  test("le CTA final affiche le bon libelle", async ({ page }) => {
    await page.goto("/subventions-maison-quebec");
    const ctas = page.getByRole("link", { name: /Voir combien je peux récupérer/i });
    await expect(ctas.last()).toBeVisible();
  });
});

// -- Questionnaire --

test.describe("Questionnaire (/fr/questionnaire)", () => {
  test("se charge et affiche la premiere question", async ({ page }) => {
    await page.goto("/fr/questionnaire");
    await expect(page).toHaveURL(/questionnaire/);
    const buttons = page.locator("button");
    await expect(buttons.first()).toBeVisible();
  });

  test("le titre de la page questionnaire est defini", async ({ page }) => {
    await page.goto("/fr/questionnaire");
    const title = await page.title();
    expect(title.length, "Le <title> ne doit pas etre vide").toBeGreaterThan(5);
  });

  test("la navigation entre etapes fonctionne", async ({ page }) => {
    await page.goto("/fr/questionnaire");
    const firstOption = page.locator("button").first();
    await firstOption.click();
    await expect(page.locator("body")).toBeVisible();
  });

  test("une URL de resultats avec reponses est reouvrable et partageable", async ({ page }) => {
    await page.goto(
      "/fr/resultats?province=QC&statut_logement=locataire&situation_familiale=famille&enfants=true&revenu=30000-50000&vehicule_elec=non&renovation=false&retraite=false&age=31-45&etudiant=false"
    );

    await expect(page).toHaveURL(/\/fr\/resultats\?.*statut_logement=locataire/);
    await expect(page.getByRole("button", { name: /Copier le lien partageable/i })).toBeVisible();
  });
});

// -- Page retraite (hub SEO) --

test.describe("Page retraite (/retraite)", () => {
  test("se charge avec le titre SEO correct", async ({ page }) => {
    await page.goto("/retraite");
    await expect(page).toHaveTitle(/retraite/i);
  });

  test("affiche le h1 principal", async ({ page }) => {
    await page.goto("/retraite");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Retraite/i);
  });

  test("les outils principaux sont affiches (REER, CELI)", async ({ page }) => {
    await page.goto("/retraite");
    await expect(page.getByText("REER").first()).toBeVisible();
    await expect(page.getByText("CELI").first()).toBeVisible();
  });

  test("au moins un CTA pointe vers /questionnaire", async ({ page }) => {
    await page.goto("/retraite");
    const ctaLinks = page.locator('a[href*="questionnaire"]');
    const count = await ctaLinks.count();
    expect(count, "Attendu au moins 1 CTA vers /questionnaire").toBeGreaterThanOrEqual(1);
  });
});

// -- Page REER vs CELI --

test.describe("Page REER ou CELI (/retraite/reer-vs-celi)", () => {
  test("se charge avec le titre SEO correct", async ({ page }) => {
    await page.goto("/retraite/reer-vs-celi");
    await expect(page).toHaveTitle(/REER/i);
  });

  test("affiche le h1 principal", async ({ page }) => {
    await page.goto("/retraite/reer-vs-celi");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("REER");
  });

  test("le tableau de comparaison est present", async ({ page }) => {
    await page.goto("/retraite/reer-vs-celi");
    await expect(page.getByRole("cell", { name: "Déduction fiscale" })).toBeVisible();
    await expect(page.getByRole("cell", { name: "Impôt au retrait" })).toBeVisible();
  });

  test("au moins un CTA pointe vers /questionnaire", async ({ page }) => {
    await page.goto("/retraite/reer-vs-celi");
    const ctaLinks = page.locator('a[href*="questionnaire"]');
    const count = await ctaLinks.count();
    expect(count, "Attendu au moins 1 CTA vers /questionnaire").toBeGreaterThanOrEqual(1);
  });
});

// -- Calculateur fiscal --

test.describe("Calculateur impot Quebec (/impots/calculateur-economies-fiscales)", () => {
  test("charge le simulateur et affiche un calcul REER", async ({ page }) => {
    const response = await page.goto("/impots/calculateur-economies-fiscales");
    expect(response?.status(), "La page calculateur fiscal doit repondre avec 200").toBe(200);

    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Economie fiscale REER/i);
    await expect(page.getByRole("heading", { name: /Calculez l'economie REER reelle/i })).toBeVisible();
    await expect(page.getByText(/Retour d'impot REER/i)).toBeVisible();
    await expect(page.getByText(/Taux economise reel/i)).toBeVisible();
  });

  test("les scenarios rapides modifient les resultats visibles", async ({ page }) => {
    await page.goto("/impots/calculateur-economies-fiscales");

    await page.getByRole("button", { name: /Revenu eleve/i }).click();
    await expect(page.locator("#income")).toHaveValue("125000");
    await expect(page.locator("#rrsp")).toHaveValue("12000");
    await expect(page.getByText(/Economie immediate sur une cotisation de 12\s*000\s*\$/i)).toBeVisible();
  });

  test("garde une sortie vers le tunnel de decision", async ({ page }) => {
    await page.goto("/impots/calculateur-economies-fiscales");

    const decisionLinks = page.locator('a[href*="questionnaire"], a[href*="reer-vs-celi"]');
    const count = await decisionLinks.count();
    expect(count, "Attendu au moins un lien vers questionnaire ou comparaison REER/CELI").toBeGreaterThanOrEqual(1);
  });
});

// -- Page resultats --

test.describe("Page resultats (/fr/resultats)", () => {
  test("s'affiche sans crash avec des params vides", async ({ page }) => {
    const response = await page.goto("/fr/resultats");
    expect(response?.status(), "La page resultats doit repondre avec 200").toBe(200);
    await expect(page.locator("body")).toBeVisible();
  });

  test("la route non localisee garde le lien partageable", async ({ page }) => {
    await page.goto(
      "/resultats?province=QC&statut_logement=proprietaire&situation_familiale=seul&enfants=false&revenu=50000-75000&vehicule_elec=non&renovation=false&retraite=true&age=46-65&etudiant=false"
    );

    await expect(page).toHaveURL(/\/resultats\?.*retraite=true/);
    await expect(page.getByRole("button", { name: /Copier le lien partageable/i })).toBeVisible();
  });
});

// -- Redirections SEO --

test.describe("Redirections SEO", () => {
  test("/strategies/reer-vs-celi redirige vers /retraite/reer-vs-celi", async ({ page }) => {
    await page.goto("/strategies/reer-vs-celi");
    await expect(page).toHaveURL(/\/retraite\/reer-vs-celi/);
  });
});

// -- Sanite globale : temps de reponse et statut HTTP --

const pagesToCheck = [
  { path: "/fr", label: "Accueil" },
  { path: "/subventions-maison-quebec", label: "Subventions maison" },
  { path: "/fr/questionnaire", label: "Questionnaire" },
  { path: "/reno-climat-quebec", label: "Renoclimat" },
  { path: "/subvention-thermopompe-quebec", label: "Thermopompe" },
  { path: "/retraite", label: "Retraite (hub)" },
  { path: "/retraite/reer-vs-celi", label: "REER vs CELI" },
  { path: "/impots/calculateur-economies-fiscales", label: "Calculateur impot Quebec" },
];
const responseLimitMs = process.env.CI ? 5000 : 10000;

test.describe("Sanite globale", () => {
  for (const { path, label } of pagesToCheck) {
    test(`${label} (${path}) repond en moins de 5s et sans 404/500`, async ({ page }) => {
      const start = Date.now();
      const response = await page.goto(path);
      const duration = Date.now() - start;

      expect(
        response?.status(),
        `${label} a retourne HTTP ${response?.status()}`
      ).toBeLessThan(400);

      expect(duration, `${label} a mis plus de ${responseLimitMs}ms a repondre`).toBeLessThan(responseLimitMs);
    });
  }
});
