/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from "@playwright/test";

test("Balance component are visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("CURRENT BALANCE")).toBeVisible();
  await expect(page.getByText("INCOME")).toBeVisible();
});
