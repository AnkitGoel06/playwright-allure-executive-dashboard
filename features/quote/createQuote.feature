@Quote
Feature: Quote

  @Smoke
  Scenario: Create Quote
    Given user opens quote page
    When user creates quote
    Then quote should be generated

  @Regression
  Scenario: Submit Quote
    Given user has created quote
    When user submits quote
    Then quote should be submitted

  @Skip
  Scenario: Cancel Quote
    Given user has created quote
    When user cancels quote
    Then quote should be cancelled

  @Skip
  Scenario: Edit Quote
    Given user has created quote
    When user cancels quote
    Then quote should be cancelled