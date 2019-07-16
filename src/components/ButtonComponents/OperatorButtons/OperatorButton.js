import React from "react";

const OperatorButton = ({ text }) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {text}
    </button>
  );
};

export default OperatorButton;
