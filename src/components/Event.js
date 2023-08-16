import { useState } from "react";

const Event = ({ event }) => {
  const [detailsShowing, setDetailsShowing] = useState(false);

  const handleDetailsButtonClicked = () => {
    setDetailsShowing(!detailsShowing);
  };

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <div>{event.start.dateTime}</div>
      <div>{event.location}</div>
      {detailsShowing ? (
        <div>
          <h4>About event:</h4>
          <a href={event.htmlLink} target="_blank">
            See details on Google Calendar
          </a>
          <p className="details">{event.description}</p>
          <button className="details-btn" onClick={handleDetailsButtonClicked}>
            hide details
          </button>
        </div>
      ) : (
        <button className="details-btn" onClick={handleDetailsButtonClicked}>
          show details
        </button>
      )}
    </li>
  );
};

export default Event;
