// Generated from: features\checkout\checkout.feature
import { test } from "playwright-bdd";

test.describe('Checkout', () => {

  test('Guest Checkout', { tag: ['@Checkout', '@Smoke'] }, async ({ Given, When, Then }) => { 
    await Given('user has items in cart'); 
    await When('user performs guest checkout'); 
    await Then('order confirmation should be displayed'); 
  });

  test('Invalid Coupon', { tag: ['@Checkout', '@Negative'] }, async ({ Given, When, Then }) => { 
    await Given('user has items in cart'); 
    await When('user applies invalid coupon'); 
    await Then('coupon validation should be displayed'); 
  });

  test('Payment Gateway Timeout', { tag: ['@Checkout', '@Regression'] }, async ({ Given, When, Then }) => { 
    await Given('user is on payment page'); 
    await When('payment gateway times out'); 
    await Then('timeout message should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\checkout\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@Checkout","@Smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has items in cart","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user performs guest checkout","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then order confirmation should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@Checkout","@Negative"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user has items in cart","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user applies invalid coupon","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then coupon validation should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@Checkout","@Regression"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given user is on payment page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When payment gateway times out","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then timeout message should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end