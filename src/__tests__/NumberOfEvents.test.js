import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  let NumberOfEventsTextbox;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
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
