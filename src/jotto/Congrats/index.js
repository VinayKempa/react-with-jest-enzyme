import React from "react";

// Receive success state as prop

/**
 * Functional react component for Congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (Or Null if 'success' prop is false)
 */
const Congrats = ({ success }) => {
  return (
    (success && (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congats-message">
          Congratulaions!! You guesses the word !
        </span>
      </div>
    )) || <div data-test="component-congrats"></div>
  );
};

export default Congrats;
