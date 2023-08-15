import { render, waitFor, within } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    given("no amount of events has been specified", () => {});

    when("the user opens the app or otherwise goes to the main view", () => {});

    then(/^(\d+) events will be displayed$/, (arg0) => {});
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    given("the main page is open", () => {});

    when(
      "the user selects a new amount of events to display (input or dropdown?)",
      () => {}
    );

    then(
      "the main view will change to display the newly selected amount of events",
      () => {}
    );
  });
});
