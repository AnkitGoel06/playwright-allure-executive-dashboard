@Checkout
Feature: Checkout

  @Smoke
  Scenario: Guest Checkout
    Given user has items in cart
    When user performs guest checkout
    Then order confirmation should be displayed

  @Smoke
  Scenario: Private Checkout
    Given user has items in cart
    When user performs guest checkout
    Then order confirmation should be displayed

  @Negative
  Scenario: Invalid Coupon
    Given user has items in cart
    When user applies invalid coupon
    Then coupon validation should be displayed

  @Regression
  Scenario: Payment Gateway Timeout
    Given user is on payment page
    When payment gateway times out
    Then timeout message should be displayed