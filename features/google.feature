Feature: Google Search

Scenario: Searching Google

  Given I open Google's search page.
  Then the title is "Google."
  Then the Google search form exists.
  When I search "nightwatch" in the search form.
  Then the search result matches "nightwatch."