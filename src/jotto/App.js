import React, { useEffect } from "react";
import { getSecretWord } from "./action";
import Congrats from "./Congrats";
import Input from "./FieldComponent/Input";
import GuessedWords from "./GuessedWords";

const App = () => {
  useEffect(() => {
    getSecretWord();
  }, []);
  return (
    <div className="container" data-test="app-component">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <Input success={false} secretWord="party" />
      <GuessedWords guessedWords={[]} />
    </div>
  );
};

export default App;
