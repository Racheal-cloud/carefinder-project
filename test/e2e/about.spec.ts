import { test, expect } from "@playwright/test";

test.describe("About page", () => {
  test("has title", async ({ page }) => {
    await page.goto("http://localhost:3000/about");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("CareFinderProject");
  });

  test("has expected h1", async ({ page }) => {
    await page.goto("http://localhost:3000/about");
    await expect(page.locator("h1")).toHaveText("About CareFinder");
  });

  test("has expected h2", async ({ page }) => {
    await page.goto("http://localhost:3000/about");
    await expect(page.getByRole("heading", { name: "Our Vision" })).toBeVisible();
  });

  test("has expected h2 - Our Mission", async ({ page }) => {
    await page.goto("http://localhost:3000/about");
    await expect(page.getByRole("heading", { name: "Our Mission" })).toBeVisible();
  });

  test("has expected h2 - Contact Us", async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
    await expect(page.getByRole("heading", { name: "Contact Us" })).toBeVisible();
  });
});

