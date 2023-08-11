import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('has an element with "listitem" role', () => {
    expect(EventComponent.queryByRole("listitem")).toBeInTheDocument();
  });

  test("has an element for the event title", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("has an element for the event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("has an element for the event start time", () => {
    expect(
      EventComponent.queryByText(allEvents[0].start.dateTime)
    ).toBeInTheDocument();
  });

  test('has a "show details" button', () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, expanded info is hidden", () => {
    expect(EventComponent.queryByText("hide details")).not.toBeInTheDocument();
    expect(EventComponent.queryByText("About event:")).not.toBeInTheDocument();
    expect(
      EventComponent.queryByText("See details on Google Calendar")
    ).not.toBeInTheDocument();
    expect(
      EventComponent.queryByText(allEvents[0].description)
    ).not.toBeInTheDocument();
  });

  test('shows expanded info when user clicks "show details" button', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);

    expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("About event:")).toBeInTheDocument();
    expect(
      EventComponent.queryByText("See details on Google Calendar")
    ).toBeInTheDocument();
    expect(
      EventComponent.queryByText(allEvents[0].description)
    ).toBeInTheDocument();
  });

  test('collapses back when user clicks "hide details" button', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText("show details");
    await user.click(showDetailsButton);
    expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("About event:")).toBeInTheDocument();
    expect(
      EventComponent.queryByText("See details on Google Calendar")
    ).toBeInTheDocument();
    expect(
      EventComponent.queryByText(allEvents[0].description)
    ).toBeInTheDocument();
    const hideDetailsButton = EventComponent.queryByText("hide details");
    await user.click(hideDetailsButton);
    expect(EventComponent.queryByText("hide details")).not.toBeInTheDocument();
    expect(EventComponent.queryByText("About event:")).not.toBeInTheDocument();
    expect(
      EventComponent.queryByText("See details on Google Calendar")
    ).not.toBeInTheDocument();
    expect(
      EventComponent.queryByText(allEvents[0].description)
    ).not.toBeInTheDocument();
  });
});
