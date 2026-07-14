// Generated from: features\offer\buyBox.feature
import { test } from "playwright-bdd";

test.describe('Offer', () => {

  test('Buy Box', { tag: ['@Offer', '@Smoke'] }, async ({ Given, When, Then, page }) => { 
    await Given('user opens PDP', null, { page }); 
    await When('multiple sellers are displayed'); 
    await Then('lowest price seller should be highlighted'); 
  });

  test('Seller Selection', { tag: ['@Offer', '@Regression'] }, async ({ Given, When, Then, page }) => { 
    await Given('user opens PDP', null, { page }); 
    await When('user changes seller'); 
    await Then('seller inventory should be updated'); 
  });

  test('Out Of Stock Seller', { tag: ['@Offer', '@Regression'] }, async ({ Given, When, Then, page }) => { 
    await Given('user opens PDP', null, { page }); 
    await When('user selects unavailable seller'); 
    await Then('seller should not be selectable'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\offer\\buyBox.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@Offer","@Smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user opens PDP","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When multiple sellers are displayed","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then lowest price seller should be highlighted","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@Offer","@Regression"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user opens PDP","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user changes seller","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then seller inventory should be updated","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@Offer","@Regression"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given user opens PDP","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When user selects unavailable seller","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then seller should not be selectable","stepMatchArguments":[]}]},
]; // bdd-data-end