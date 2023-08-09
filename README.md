# Meet features

## FEATURE 1: FILTER EVENTS BY CITY

As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

**Scenario 1:**
When user hasn’t searched for a specific city, show upcoming events from all cities.

**Given** user hasn’t searched for any city;
**When** the user opens the app;
**Then** the user should see a list of upcoming events.

**Scenario 2:** 
User should see a list of suggestions when they search for a city.

**Given** the main page is open;
**When** user starts typing in the city textbox;
**Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

**Scenario 3:**
User can select a city from the suggested list.

**Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
**When** the user selects a city (e.g., “Berlin, Germany”) from the list;
**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.


## FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event

**Scenario 1:**
An event element is collapsed by default.

**Given** the main page is open
**when** user scrolls through events
**then** event elements are shown in a small form with only the most important information displayed

**Scenario 2:**
User can expand an event to see details

**Given** the main page is open
**when** user clicks on an event card
**then** a view showing more details about the event opens

**Scenario 3:**
User can collapse an event to hide details.

**Given** the event view is displaying
**when** the user clicks a button to leave the event view
**then** the user is returned to the main view


## FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

**Scenario 1:** 
When user hasn’t specified a number, 32 events are shown by default.

**Given** no amount of events has been specified
**when** the user opens the app or otherwise goes to the main view
**then** 32 events will be displayed

**Scenario 2:** 
User can change the number of events displayed.

**Given** the main page is open
**when** the user selects a new amount of events to display (input or dropdown?)
**then** the main view will change to display the newly selected amount of events


## FEATURE 4: USE THE APP WHEN OFFLINE

As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

**Scenario 1:** 
Show cached data when there’s no internet connection

**Given** the user had viewed events last time they were online
**when** the user opens the app offline
**then** the previously viewed and consequently stored events will be displayed

**Scenario 2:**
Show error when user changes search settings (city, number of events)

**Given** the user is using the app offline
**when** the user searches for new events
**then** an error message will display telling the user they must connect to the internet to search


## FEATURE 5: ADD AN APP SHORTCUT TO THE HOME SCREEN

As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

**Scenario 1:** 
User can install the meet app as a shortcut on their device home screen.

**Given** there is not a shortcut to the app on the homescreen
**when** user clicks "add shortcut to home screen"
**then** a shortcut to the app will be generated on the homescreen 

**Scenario 2:** 
user wants to access app via shortcut

**Given** user is on home screen and has previously put a shortcut there
**when** user clicks the shortcut
**then** the app will open and display


## FEATURE 6: DISPLAY CHARTS VISUALIZING EVENT DETAILS

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

**Scenario 1:** 
Show a chart with the number of upcoming events in each city.

**Given** there are events loaded on the app
**when** the data visualization view is opened
**then** a chart will display the loaded events based on location city

## SERVERLESS FUNCTIONS

This app will utilize lambda functions to communicate with the Google Calendar API to fetch event data to display in the app as well as handle all authentication and authorization. The use of lambda functions in this instance will help reduce the cost and work required with hosting, setting up, and maintaining a designated backend server.