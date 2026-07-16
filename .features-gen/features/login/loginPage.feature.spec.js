// Generated from: features\login\loginPage.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Valid Login', { tag: ['@Login', '@Smoke'] }, async ({ Given, When, Then }) => { 
    await Given('user opens login page'); 
    await When('user logs in'); 
    await Then('dashboard should be displayed'); 
  });

  test('Invalid Login', { tag: ['@Login', '@Negative'] }, async ({ Given, When, Then }) => { 
    await Given('user opens login page'); 
    await When('user enters invalid credentials'); 
    await Then('login error should be displayed'); 
  });

  test('Invalid username', { tag: ['@Login', '@Negative'] }, async ({ Given, When, Then }) => { 
    await Given('user opens login page'); 
    await When('user enters invalid credentials'); 
    await Then('login error should be displayed'); 
  });

  test('Forgot Password', { tag: ['@Login', '@Skip'] }, async ({ Given, When, Then }) => { 
    await Given('user opens login page'); 
    await When('user clicks forgot password'); 
    await Then('reset email should be sent'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login\\loginPage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@Login","@Smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user opens login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user logs in","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then dashboard should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@Login","@Negative"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user opens login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user enters invalid credentials","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then login error should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@Login","@Negative"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given user opens login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When user enters invalid credentials","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then login error should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":["@Login","@Skip"],"steps":[{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given user opens login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When user clicks forgot password","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then reset email should be sent","stepMatchArguments":[]}]},
]; // bdd-data-end