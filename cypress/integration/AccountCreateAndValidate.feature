Feature: User Authentication

  Scenario: User signs up
    Given the user is on the sign-up page
    When the user enters valid sign-up details
    Then the user submits the sign-up form
    Then the user should be registered successfully

  Scenario: User signs in
    Given the user is on the sign-in page
    When the user enters valid sign-in credentials
    Then the user submits the sign-in button
    Then the user should be logged in successfully

  # node cucumber-html-report.js --- to create Cucumber Html Report that is saved in cucumberReports





