import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'src/steps/**/*.ts',
  outputDir: '.features-gen'
});

export default defineConfig({
  testDir,

  timeout: 60 * 1000,

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        detail: true,

        suiteTitle: false,

        outputFolder: 'allure-results'
      }
    ]
]
});