@Offer
Feature: Offer

  @Smoke
  Scenario: Buy Box
    Given user opens PDP
    When multiple sellers are displayed
    Then lowest price seller should be highlighted

  @Regression
  Scenario: Seller Selection
    Given user opens PDP
    When user changes seller
    Then seller inventory should be updated

  @Regression
  Scenario: Multi Seller Selection
    Given user opens PDP
    When user changes seller
    Then seller inventory should be updated

  @Regression
  Scenario: Out Of Stock Seller
    Given user opens PDP
    When user selects unavailable seller
    Then seller should not be selectable