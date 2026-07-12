import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('user opens PDP', async ({ page }) => {
  await page.goto('https://demoblaze.com');
});

When('multiple sellers are displayed', async () => {
  expect(true).toBeTruthy();
});

Then('lowest price seller should be highlighted', async () => {
  expect(true).toBeTruthy();
});

When('user changes seller', async () => {
  expect(true).toBeTruthy();
});

Then('seller inventory should be updated', async () => {
  // Business failure
  expect("Out of Stock").toBe("In Stock");
});

When('user selects unavailable seller', async () => {
  throw new Error("Seller Service Unavailable");
});

Then('seller should not be selectable', async () => {
});