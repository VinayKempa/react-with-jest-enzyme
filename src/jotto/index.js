import React from "react";
import Congrats from "./Congrats";
import Input from "./FieldComponent/Input";
import GuessedWords from "./GuessedWords";

const Jotto = () => {
  return (
    <div className="container" data-test="app-component">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input success={false} secretWord="party" />
      <GuessedWords guessedWords={[]} />
    </div>
  );
};

export default Jotto;
