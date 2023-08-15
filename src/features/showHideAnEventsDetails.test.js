import { render, waitFor, within } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;

    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    let EventListDOM;
    when("user scrolls through events", () => {
      const AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
    });

    then(
      "event elements are shown in a small form with only the most important information displayed",
      async () => {
        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");
          const firstEvent = EventListItems[0];
          const details = firstEvent.querySelector(".details");
          expect(details).not.toBeInTheDocument();
        });
      }
    );
  });

  test("User can expand an event to see details", ({ given, when, then }) => {
    let AppComponent;

    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    let EventListDOM;
    let firstEvent;
    when("user clicks on an event card", async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(async () => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        firstEvent = EventListItems[0];
        const detailsButton = firstEvent.querySelector(".details-btn");
        await user.click(detailsButton);
      });
    });

    then("a view showing more details about the event opens", () => {
      const details = firstEvent.querySelector(".details");
      expect(details).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    let detailsButton;
    let firstEvent;
    let details;
    given("the event view is displaying", async () => {
      const user = userEvent.setup();
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(async () => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        firstEvent = EventListItems[0];
        detailsButton = firstEvent.querySelector(".details-btn");
        await user.click(detailsButton);
        details = firstEvent.querySelector(".details");
        expect(details).toBeInTheDocument();
      });
    });

    when("the user clicks a button to leave the event view", async () => {
      const user = userEvent.setup();
      detailsButton = firstEvent.querySelector(".details-btn");
      await user.click(detailsButton);
    });

    then("the user is returned to the main view", () => {
      details = firstEvent.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });
});
