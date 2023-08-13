import { useState } from "react";

const NumberOfEvents = () => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventCount(value);
  };

  return (
    <div id="number-of-events">
      <input type="text" value={eventCount} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;