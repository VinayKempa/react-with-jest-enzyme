import React from "react";

const GuessedWords = ({ guessedWords }) => {
  let content = "";
  if (guessedWords.length === 0) {
    content = (
      <React.Fragment>
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      </React.Fragment>
    );
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
};

export default GuessedWords;
