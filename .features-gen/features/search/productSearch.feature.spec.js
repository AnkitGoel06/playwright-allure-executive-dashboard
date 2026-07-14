// Generated from: features\search\productSearch.feature
import { test } from "playwright-bdd";

test.describe('Search', () => {

  test('Product Search', { tag: ['@Search', '@Smoke', '@Regression'] }, async ({ Given, When, Then, page }) => { 
    await Given('user opens the commerce application', null, { page }); 
    await When('user searches for "Circuit Breaker"', null, { page }); 
    await Then('search results should be displayed', null, { page }); 
  });

  test('Search Filters', { tag: ['@Search', '@Regression'] }, async ({ Given, When, Then, page }) => { 
    await Given('user opens the commerce application', null, { page }); 
    await When('user filters by "Electrical"'); 
    await Then('filtered products should be displayed'); 
  });

  test('Invalid Search', { tag: ['@Search', '@Negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('user opens the commerce application', null, { page }); 
    await When('user searches for "INVALID_PRODUCT"', null, { page }); 
    await Then('invalid search validation should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\search\\productSearch.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@Search","@Smoke","@Regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user opens the commerce application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user searches for \"Circuit Breaker\"","stepMatchArguments":[{"group":{"start":18,"value":"\"Circuit Breaker\"","children":[{"start":19,"value":"Circuit Breaker","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then search results should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@Search","@Regression"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user opens the commerce application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user filters by \"Electrical\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Electrical\"","children":[{"start":17,"value":"Electrical","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then filtered products should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@Search","@Negative"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given user opens the commerce application","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When user searches for \"INVALID_PRODUCT\"","stepMatchArguments":[{"group":{"start":18,"value":"\"INVALID_PRODUCT\"","children":[{"start":19,"value":"INVALID_PRODUCT","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then invalid search validation should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end