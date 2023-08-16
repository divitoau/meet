import { useState } from "react";

const NumberOfEvents = ({ setErrorAlert, currentNOE, setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    let errorText;
    if (isNaN(value) || value < 0) {
      errorText = "Only positive numbers are allowed";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <input type="text" value={currentNOE} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
