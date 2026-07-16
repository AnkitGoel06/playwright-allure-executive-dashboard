@Login
Feature: Login

  @Smoke
  Scenario: Valid Login
    Given user opens login page
    When user logs in
    Then dashboard should be displayed

  @Negative
  Scenario: Invalid Login
    Given user opens login page
    When user enters invalid credentials
    Then login error should be displayed

  @Negative
  Scenario: Invalid username
    Given user opens login page
    When user enters invalid credentials
    Then login error should be displayed

  @Skip
  Scenario: Forgot Password
    Given user opens login page
    When user clicks forgot password
    Then reset email should be sent