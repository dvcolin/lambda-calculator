import React from "react";

const OperatorButton = ({ value }) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {value}
    </button>
  );
};

export default OperatorButton;
