import { test, expect } from '@playwright/test';

test.describe("newsletter", () => {
    test("has title", async ({ page }) => {
      await page.goto("http://localhost:3000");  

      await expect(page).toHaveTitle("CareFinderProject");
  });

  test("has expected h1 - Newsletter", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page.locator("h1")).toHaveText("Newsletter");
  });
    // Check the description text
    // await expect(page.getByText('Subscribe to our newsletter to get updates on our latest news')).toBeVisible();


})