import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('user has items in cart', async () => {
});

When('user performs guest checkout', async () => {
});

Then('order confirmation should be displayed', async () => {
  expect(true).toBeTruthy();
});

When('user applies invalid coupon', async () => {
});

Then('coupon validation should be displayed', async () => {
  expect("Coupon Applied").toBe("Invalid Coupon");
});

Given('user is on payment page', async () => {
});

When('payment gateway times out', async () => {
  throw new Error("Timeout while waiting for payment gateway");
});

Then('timeout message should be displayed', async () => {
});
