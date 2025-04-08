Feature: Jira Cucumber.js Autotests

    Background:
        Given the user is on the Bricklink homepage

    Scenario: User is able to find 8275 set
        When user clicks on cookie button
        When user input 8275 search combination in search bar
        Then user is redirected to results page for 8275 set
        When user go to All Sets tab
        When user press on 8275 set link
        Then user redirected to set 8275 page
            
    Scenario: User is able to verify page header
        When user clicks on cookie button
        Then user is able to verify page header

    Scenario: User is able to verify page footer
        When user clicks on cookie button
        Then user is able to verify page footer

    Scenario: User is able to verify carousel buttons on main page
        When user clicks on cookie button
        Then user is able to verify carousel buttons on main page
        