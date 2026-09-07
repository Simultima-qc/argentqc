import { expect, test } from "@playwright/test";

for (const [locale, route, autopay, unknown] of [
  ["fr", "/fr/internet/comparateur", "Autopaiement par débit requis", "À confirmer"],
  ["en", "/en/internet/comparator", "Automatic debit payments required", "To confirm"],
] as const) {
  test(`Bell Quebec conditions and unknown contract filter (${locale})`, async ({ page }) => {
    await page.goto(route);
    const bellLinks = page.locator('a[href="https://www.bell.ca/Services_Internet/Acces_Internet"]');
    await expect(bellLinks).toHaveCount(2);
    await expect(page.getByText(autopay, { exact: false })).toHaveCount(2);
    await expect(page.getByText(unknown, { exact: true })).toHaveCount(2);
    await expect(page.getByText("940 Mbps", { exact: true })).toBeVisible();
    const contractFilter = page.getByText(locale === "fr" ? "Sans engagement uniquement" : "No contract only", { exact: true }).locator("..").getByRole("button");
    await contractFilter.click();
    await expect(bellLinks).toHaveCount(0);
    await expect(page.locator('a[href="https://www.teksavvy.com/fr/nos-services/internet/"]')).toHaveCount(1);
    await contractFilter.click();
    await expect(bellLinks).toHaveCount(2);
  });
}
