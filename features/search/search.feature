@Search
Feature: Search

  @Smoke @Regression
  Scenario: Product Search
    Given user opens the commerce application
    When user searches for "Circuit Breaker"
    Then search results should be displayed

  @Regression
  Scenario: Search Filters
    Given user opens the commerce application
    When user filters by "Electrical"
    Then filtered products should be displayed

  @Negative
  Scenario: Invalid Search
    Given user opens the commerce application
    When user searches for "INVALID_PRODUCT"
    Then invalid search validation should be displayed