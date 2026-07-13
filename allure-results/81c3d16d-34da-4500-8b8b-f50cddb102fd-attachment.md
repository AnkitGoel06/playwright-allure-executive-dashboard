# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\checkout\checkout.feature.spec.js >> Checkout >> Invalid Coupon
- Location: .features-gen\features\checkout\checkout.feature.spec.js:12:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Invalid Coupon"
Received: "Coupon Applied"
```

# Test source

```ts
  1  | import { createBdd } from 'playwright-bdd';
  2  | import { expect } from '@playwright/test';
  3  | 
  4  | const { Given, When, Then } = createBdd();
  5  | 
  6  | Given('user has items in cart', async () => {
  7  | });
  8  | 
  9  | When('user performs guest checkout', async () => {
  10 | });
  11 | 
  12 | Then('order confirmation should be displayed', async () => {
  13 |   expect(true).toBeTruthy();
  14 | });
  15 | 
  16 | When('user applies invalid coupon', async () => {
  17 | });
  18 | 
  19 | Then('coupon validation should be displayed', async () => {
> 20 |   expect("Coupon Applied").toBe("Invalid Coupon");
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  21 | });
  22 | 
  23 | Given('user is on payment page', async () => {
  24 | });
  25 | 
  26 | When('payment gateway times out', async () => {
  27 |   throw new Error("Timeout while waiting for payment gateway");
  28 | });
  29 | 
  30 | Then('timeout message should be displayed', async () => {
  31 | });
  32 | 
```