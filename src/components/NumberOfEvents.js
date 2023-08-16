import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <input type="text" value={currentNOE} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
