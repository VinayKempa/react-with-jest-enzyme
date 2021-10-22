import React from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

const Jotto = () => {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: "train",
            letterMatchCount: 3,
          },
          {
            guessedWord: "agile",
            letterMatchCount: 1,
          },
          {
            guessedWord: "party",
            letterMatchCount: 5,
          },
        ]}
      />
    </div>
  );
};

export default Jotto;
