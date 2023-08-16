import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  let NumberOfEventsTextbox;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />
    );
    NumberOfEventsTextbox = NumberOfEventsComponent.queryByRole("textbox");
  });

  test("has a textbox", () => {
    expect(NumberOfEventsTextbox).toBeInTheDocument();
  });

  test("textbox default value is 32", () => {
    expect(NumberOfEventsTextbox).toHaveValue("32");
  });

/*   test("textbox value changes with typing", async () => {
    const user = userEvent.setup();
    await user.type(NumberOfEventsTextbox, "{backspace}{backspace}10");
    expect(NumberOfEventsTextbox).toHaveValue("10");
  }); */
});

describe("<NumberOfEvents /> integration", () => {
  test("changes number of events displayed when a new number is entered", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
    const NumberOfEventsTextbox =
      within(NumberOfEventsDOM).queryByRole("textbox");
    const EventListDOM = AppDOM.querySelector("#event-list");
    await user.type(NumberOfEventsTextbox, "{backspace}{backspace}10");
    const EventListItems = within(EventListDOM).queryAllByRole("listitem");
    expect(EventListItems.length).toBe(parseInt(NumberOfEventsTextbox.value));
  });
});
