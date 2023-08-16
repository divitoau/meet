Feature: SPECIFY NUMBER OF EVENTS
  Scenario: When user hasn't specified a number, 32 events are shown by default.
    Given no amount of events has been specified
    When the user opens the app or otherwise goes to the main view
    Then 32 events will be displayed

  Scenario: User can change the number of events displayed.
    Given the main page is open
    When the user selects a new amount of events to display (input or dropdown?)
    Then the main view will change to display the newly selected amount of events
