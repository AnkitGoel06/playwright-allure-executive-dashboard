// Generated from: features\quote\createQuote.feature
import { test } from "playwright-bdd";

test.describe('Quote', () => {

  test('Create Quote', { tag: ['@Quote', '@Smoke'] }, async ({ Given, When, Then }) => { 
    await Given('user opens quote page'); 
    await When('user creates quote'); 
    await Then('quote should be generated'); 
  });

  test('Submit Quote', { tag: ['@Quote', '@Regression'] }, async ({ Given, When, Then }) => { 
    await Given('user has created quote'); 
    await When('user submits quote'); 
    await Then('quote should be submitted'); 
  });

  test('Cancel Quote', { tag: ['@Quote', '@Skip'] }, async ({ Given, When, Then }) => { 
    await Given('user has created quote'); 
    await When('user cancels quote'); 
    await Then('quote should be cancelled'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\quote\\createQuote.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@Quote","@Smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user opens quote page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user creates quote","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then quote should be generated","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@Quote","@Regression"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user has created quote","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user submits quote","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then quote should be submitted","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@Quote","@Skip"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given user has created quote","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When user cancels quote","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then quote should be cancelled","stepMatchArguments":[]}]},
]; // bdd-data-end