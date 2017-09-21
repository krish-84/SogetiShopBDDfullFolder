Feature: Verifying all Architechture page elements and functions

Scenario: When user clicks on sort by A to Z, verify that the products displayed are in the ascending order alphabetically

Given I am on "HomePage"
When I hover over the "home" button (using xpath "//*[@id='category-2']/a")
And I click on "<SubMenuLink>" (using xpath "<xpath>")
Then I should see the pagetitle as "<Title>"
When I click on "sort by A to Z" (using xpath "<xpath>")
Then 




