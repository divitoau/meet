import { useState } from "react";

const Event = ({ event }) => {
  const [detailsShowing, setDetailsShowing] = useState(false);

  const handleDetailsButtonClicked = () => {
    setDetailsShowing(!detailsShowing);
  };

  return (
    <li>
      <h3>{event.summary}</h3>
      <div>{event.start.dateTime}</div>
      <div>{event.location}</div>
      {detailsShowing ? (
        <div>
          <h4>About event:</h4>
          <a href={event.htmlLink}>See details on Google Calendar</a>
          <p>{event.description}</p>
          <button onClick={handleDetailsButtonClicked}>hide details</button>
        </div>
      ) : (
        <button onClick={handleDetailsButtonClicked}>show details</button>
      )}
    </li>
  );
};

export default Event;
