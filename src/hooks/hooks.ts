import { createBdd  } from 'playwright-bdd';
import { AllureUtil } from '../utils/allureUtil';
import * as allure from 'allure-js-commons';

const { Before, After } = createBdd();

Before({ tags: '@Search' }, async () => {

    await AllureUtil.addMetadata({
        epic: 'Commerce',
        feature: 'Search',
        story: 'Product Search',
        owner: 'Commerce QA',
        severity: 'critical',
        module: 'Search',
        sprint: 'Sprint-1',
        journey: 'Product Discovery',
        environment: 'QA',
        browser: 'Chromium',
        country: 'US',
        layer: 'UI'
    });

});