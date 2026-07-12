import { defineBddConfig } from 'playwright-bdd';

export default defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'src/steps/**/*.ts',
  outputDir: '.features-gen'
});