import { render, waitFor, within } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import userEvent from "@testing-library/user-event";

import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    given("no amount of events has been specified", () => {});

    let AppComponent;
    when("the user opens the app or otherwise goes to the main view", () => {
      AppComponent = render(<App />);
    });

    then("32 events will be displayed", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    when(
      "the user selects a new amount of events to display (input or dropdown?)",
      async () => {
        const user = userEvent.setup();
        AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
        const NumberOfEventsTextbox = within(NumberOfEventsDOM).queryByRole('textbox')
        await user.type(NumberOfEventsTextbox, "{backspace}{backspace}10");
      }
    );

    then(
      "the main view will change to display the newly selected amount of events",
      async () => {
        await waitFor(() => {
          const EventListDOM = AppDOM.querySelector("#event-list");
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(10);
        });
      }
    );
  });
});
