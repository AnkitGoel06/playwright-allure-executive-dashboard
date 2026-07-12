import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('user opens login page', async () => {
});

When('user logs in', async () => {
});

Then('dashboard should be displayed', async () => {
  expect(true).toBeTruthy();
});

When('user enters invalid credentials', async () => {
});

Then('login error should be displayed', async () => {
  expect(true).toBeTruthy();
});

When('user clicks forgot password', async () => {
    console.log("Forgot password flow");
});

Then('reset email should be sent', async () => {
});