import React from "react";

const NumberButton = ({ value }) => {
  return (
    <button className={value === '0' ? 'zero-btn' : 'num-btn'}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {value}
    </button>
  );
};

export default NumberButton;
