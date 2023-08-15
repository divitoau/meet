Feature: SHOW/HIDE AN EVENT'S DETAILS
  Scenario: An event element is collapsed by default.
    Given the main page is open
    When user scrolls through events
    Then event elements are shown in a small form with only the most important information displayed

  Scenario: User can expand an event to see details
    Given the main page is open
    When user clicks on an event card
    Then a view showing more details about the event opens

  Scenario: User can collapse an event to hide details.
    Given the event view is displaying
    When the user clicks a button to leave the event view
    Then the user is returned to the main view