import React from "react";
import Input from "../Input/Input";
import Guesses from "../Guesses/Guesses";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [list, setList] = React.useState([]);

  function handleSubmitGuess(guess) {
    setList([...list, guess]);
  }

  return (
    <>
      <Guesses list={list} />
      <Input handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
