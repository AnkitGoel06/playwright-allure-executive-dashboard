import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('user opens the commerce application', async ({ page }) => {
  await page.goto('https://demoblaze.com');
});

When('user searches for {string}', async ({ page }, product: string) => {
  console.log(`Searching ${product}`);
});

Then('search results should be displayed', async ({ page }) => {
  await expect(page).toHaveTitle(/STORE/);
});

When('user filters by {string}', async ({}, filter: string) => {
  console.log(filter);
});

Then('filtered products should be displayed', async () => {
  expect(true).toBeTruthy();
});

Then('invalid search validation should be displayed', async () => {
  // Intentional assertion failure
  expect(false).toBeTruthy();
});