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
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/aides financières.*situation/i);
    await expect(page.getByText(/liens vers les sources officielles/i)).toBeVisible();
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
    await expect(cta).toContainText(/Vérifier les aides possibles/i);
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

// -- Cluster RRQ 2026 --

test.describe("Cluster RRQ 2026", () => {
  test("le guide FR publie les repères 2026 sans estimer une rente", async ({ page }) => {
    const response = await page.goto("/fr/retraite/rrq");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/RRQ/i);
    await expect(page.getByText(/60 à 72 ans/).first()).toBeVisible();
    await expect(page.getByText(/0,5 % à 0,6 % par mois/).first()).toBeVisible();
    await expect(page.getByText(/ne calcule pas votre rente RRQ/i)).toBeVisible();
    await expect(page.locator('a[href*="retraitequebec.gouv.qc.ca"]').first()).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://argentqc.ca/fr/retraite/rrq");
  });

  test("le guide EN consomme les mêmes repères et garde sa canonical", async ({ page }) => {
    const response = await page.goto("/en/retirement/qpp");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/QPP/i);
    await expect(page.getByText(/age 60 to 72/i).first()).toBeVisible();
    await expect(page.getByText(/does not calculate your QPP pension/i)).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://argentqc.ca/en/retirement/qpp");
  });

  test("l'ancienne route redirige vers le guide FR", async ({ page }) => {
    await page.goto("/retraite/rrq");
    await expect(page).toHaveURL(/\/fr\/retraite\/rrq$/);
  });
});

// -- Cluster prêts et bourses --

test.describe("Prêts et bourses étudiants 2026", () => {
  test("le guide rend un outil d'orientation sans montant ni verdict AFE", async ({ page }) => {
    const response = await page.goto("/prets-bourses-etudiants");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Financer ses études au Québec en 2026/i);

    await page.getByRole("button", { name: /Voir les démarches à vérifier/i }).click();
    const results = page.locator("#pb-resultats");
    await expect(results).toBeVisible();
    await expect(results).toContainText(/ne calcule aucun droit ni montant/i);
    await expect(results.getByRole("link", { name: /simulateur AFE officiel/i })).toHaveAttribute(
      "href",
      /quebec\.ca\/education\/aide-financiere-aux-etudes\/prets-bourses-temps-plein\/calcul\/simulateur-calcul/,
    );
    await expect(results).not.toContainText(/admissibilité (élevée|moyenne|faible)/i);
  });

  test("l'article ne publie plus les montants et durées contredits", async ({ page }) => {
    const response = await page.goto("/blog/aide-financiere-etudes-quebec-2026");
    expect(response?.status()).toBe(200);
    const article = page.locator("article");
    await expect(article).toContainText(/il n'existe pas de montant « typique » universel/i);
    await expect(article).not.toContainText(/17\s*000\s*\$/i);
    await expect(article).not.toContainText(/17 ans si prêt élevé/i);
    await expect(article).toContainText(/intérêts sont à la charge/i);
  });

  test("les résultats étudiants présentent des pistes à vérifier", async ({ page }) => {
    await page.goto(
      "/fr/resultats?province=QC&statut_logement=locataire&situation_familiale=seul&enfants=false&revenu=0-30000&vehicule_elec=non&renovation=false&retraite=false&age=18-30&etudiant=true",
    );
    await expect(page.getByRole("heading", { name: /Programmes potentiels à vérifier/i })).toBeVisible();
    await expect(page.getByText(/Préfiltre seulement/i).first()).toBeVisible();
    await expect(page.getByText(/Total indicatif des programmes chiffrables/i)).toBeVisible();
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

  test("l'ancien article TPS/TVH redirige vers le guide ACEBE", async ({ page }) => {
    await page.goto("/blog/credit-tps-tvh-canada-2026");
    await expect(page).toHaveURL(/\/blog\/allocation-canadienne-epicerie-besoins-essentiels-2026/);
  });
});

// -- Contrats des pages editoriales prioritaires --

const editorialPageContracts = [
  {
    path: "/blog/allocation-canadienne-epicerie-besoins-essentiels-2026",
    label: "ACEBE 2026",
    title: /ACEBE 2026.*admissibilité.*montants.*versements/i,
    h1: /Allocation canadienne.*épicerie.*besoins essentiels.*2026/i,
    canonical: "https://argentqc.ca/blog/allocation-canadienne-epicerie-besoins-essentiels-2026",
  },
  {
    path: "/aide-sociale-quebec",
    label: "Aide sociale Quebec",
    title: /Aide sociale.*Qu[eé]bec/i,
    h1: /Aide sociale.*Qu[eé]bec/i,
    canonical: "https://argentqc.ca/aide-sociale-quebec",
  },
  {
    path: "/supplement-revenu-garanti-2026",
    label: "Supplement de revenu garanti 2026",
    title: /Suppl[eé]ment de revenu garanti.*2026/i,
    h1: /Suppl[eé]ment de revenu garanti.*2026/i,
    canonical: "https://argentqc.ca/supplement-revenu-garanti-2026",
    minimumQuestionnaireLinks: 3,
  },
  {
    path: "/blog/securite-vieillesse-quebec-2026",
    label: "Securite de la vieillesse 2026",
    title: /S[eé]curit[eé] de la vieillesse.*2026/i,
    h1: /S[eé]curit[eé] de la vieillesse.*2026/i,
    canonical: "https://argentqc.ca/blog/securite-vieillesse-quebec-2026",
  },
  {
    path: "/retraite/combien-cotiser-reer",
    label: "Combien cotiser au REER",
    title: /Combien cotiser.*REER/i,
    h1: /Combien cotiser.*REER/i,
    canonical: "https://argentqc.ca/retraite/combien-cotiser-reer",
  },
];

function containsSchemaType(value: unknown, expectedType: string): boolean {
  if (Array.isArray(value)) {
    return value.some((item) => containsSchemaType(item, expectedType));
  }

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    const schemaType = record["@type"];

    if (schemaType === expectedType || (Array.isArray(schemaType) && schemaType.includes(expectedType))) {
      return true;
    }

    return Object.values(record).some((item) => containsSchemaType(item, expectedType));
  }

  return false;
}

test.describe("Contrats des pages editoriales prioritaires", () => {
  for (const contract of editorialPageContracts) {
    test(`${contract.label} respecte son contrat HTTP, SEO et conversion`, async ({ page }) => {
      const response = await page.goto(contract.path);
      expect(response?.status(), `${contract.path} doit repondre sans erreur HTTP`).toBeLessThan(400);

      await expect(page).toHaveTitle(contract.title);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(contract.h1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", contract.canonical);

      const jsonLdContents = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(jsonLdContents.length, `${contract.path} doit publier un JSON-LD FAQ`).toBeGreaterThan(0);

      const jsonLdDocuments = jsonLdContents.map((content) => JSON.parse(content));
      expect(
        jsonLdDocuments.some((document) => containsSchemaType(document, "FAQPage")),
        `${contract.path} doit publier un schema FAQPage`
      ).toBe(true);

      const questionnaireLinks = await page.getByRole("link").evaluateAll((links) =>
        links.filter((link) => link.getAttribute("href")?.includes("questionnaire")).length
      );
      expect(questionnaireLinks, `${contract.path} doit proposer ses liens vers le questionnaire`).toBeGreaterThanOrEqual(
        "minimumQuestionnaireLinks" in contract ? contract.minimumQuestionnaireLinks : 1
      );
    });
  }
});

test.describe("Corrections ACE et CCF 2026", () => {
  test("la page allocations affiche les maximums vérifiés sans total trompeur", async ({ page }) => {
    const response = await page.goto("/allocation-enfant-quebec");
    expect(response?.status()).toBeLessThan(400);

    await expect(page.getByRole("heading", { level: 1 })).toContainText("Allocation enfant Québec 2026");
    await expect(page.getByText(/8 157 \$ par enfant de moins de 6 ans/)).toBeVisible();
    await expect(page.getByText(/3 068 \$ par enfant en 2026/)).toBeVisible();
    await expect(page.getByText("À vérifier", { exact: true })).toBeVisible();
    await expect(page.getByText("Potentiel total estimé", { exact: true })).toHaveCount(0);
  });

  test("l'article CCF distingue l'accumulation du montant réclamable", async ({ page }) => {
    const response = await page.goto("/blog/credit-canadien-formation-2026");
    expect(response?.status()).toBeLessThan(400);

    await expect(page.getByRole("heading", { level: 1 })).toContainText("calcul et admissibilité");
    await expect(page.getByText(/12 058 \$ de revenu de travail en 2025/)).toBeVisible();
    await expect(page.getByText(/177 882 \$ ou moins en 2025/)).toBeVisible();
    await expect(page.getByText("8 % des frais admissibles", { exact: true })).toBeVisible();
    await expect(page.getByText(/250 \$ par an pour vous recycler/)).toHaveCount(0);
  });
});

// -- Sanite globale : temps de reponse et statut HTTP --

const pagesToCheck = [
  { path: "/blog/allocation-canadienne-epicerie-besoins-essentiels-2026", label: "ACEBE 2026" },
  { path: "/fr", label: "Accueil" },
  { path: "/subventions-maison-quebec", label: "Subventions maison" },
  { path: "/fr/questionnaire", label: "Questionnaire" },
  { path: "/reno-climat-quebec", label: "Renoclimat" },
  { path: "/subvention-thermopompe-quebec", label: "Thermopompe" },
  { path: "/retraite", label: "Retraite (hub)" },
  { path: "/fr/retraite/rrq", label: "Guide RRQ 2026" },
  { path: "/en/retirement/qpp", label: "QPP guide 2026" },
  { path: "/retraite/reer-vs-celi", label: "REER vs CELI" },
  { path: "/aide-sociale-quebec", label: "Aide sociale Quebec" },
  { path: "/supplement-revenu-garanti-2026", label: "Supplement de revenu garanti 2026" },
  { path: "/retraite/combien-cotiser-reer", label: "Combien cotiser au REER" },
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
