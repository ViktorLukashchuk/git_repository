/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from "@playwright/test";

test("main page has correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Expense Tracker/i);
});

test('button "Add Transaction" available', async ({ page }) => {
  await page.goto("/");
  const addBtn = page.getByRole("button", { name: /add transaction/i });
  await expect(addBtn).toBeVisible();
});
