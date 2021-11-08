import React from "react";
import Congrats from "../../Congrats";

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <div data-test="component-input">
      {success && <Congrats success={success} />}
      {!success && (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="Enter Guess"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
          />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btnprimary mb-2"
            onClick={(e) => {
              e.preventDefault();
              // TODO: update guessedWords
              // TODO: check against secretWord and update success if needed
              setCurrentGuess("");
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Input;
