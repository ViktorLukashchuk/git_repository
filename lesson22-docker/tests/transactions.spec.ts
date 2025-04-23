import { test, expect } from "@playwright/test";

test("transaction works", async ({ page }) => {
  await page.goto("/");

  await page.fill('input[placeholder="Detail of Transaction"]', "Test income");
  await page.fill('input[placeholder="Dollar Value of Transaction"]', "100");
  await page.click('button:text("Add Transaction")');

  await expect(page.locator(".list li")).toContainText("Test income");
});
