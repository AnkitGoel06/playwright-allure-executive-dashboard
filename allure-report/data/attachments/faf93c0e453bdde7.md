# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\quote\quote.feature.spec.js >> Quote >> Cancel Quote
- Location: .features-gen\features\quote\quote.feature.spec.js:18:7

# Error details

```
Error: Cancellation feature not implemented
```

# Test source

```ts
  1  | import { createBdd } from 'playwright-bdd';
  2  | import { expect } from '@playwright/test';
  3  | 
  4  | const { Given, When, Then } = createBdd();
  5  | 
  6  | Given('user opens quote page', async () => {
  7  | });
  8  | 
  9  | When('user creates quote', async () => {
  10 | });
  11 | 
  12 | Then('quote should be generated', async () => {
  13 |   expect(true).toBeTruthy();
  14 | });
  15 | 
  16 | Given('user has created quote', async () => {
  17 | });
  18 | 
  19 | When('user submits quote', async () => {
  20 | });
  21 | 
  22 | Then('quote should be submitted', async () => {
  23 |   expect(500).toBe(200);
  24 | });
  25 | 
  26 | When('user cancels quote', async () => {
> 27 |   throw new Error("Cancellation feature not implemented");
     |         ^ Error: Cancellation feature not implemented
  28 | });
  29 | 
  30 | Then('quote should be cancelled', async () => {
  31 | });
```