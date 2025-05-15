import Input from "./Input";
import GuessContainer from "./GuessContainer";
import "./App.css";
import { useState } from "react";
import { fetchWeapon } from "./utils";

function App() {
  const [guessArray, setGuessArray] = useState([]);

  const correctGuess = fetchWeapon("hero");

  function addGuess(currentGuess) {
    if (
      !guessArray.some((elem) => elem.internalName === currentGuess.internalName)
    ) {
      setGuessArray([currentGuess, ...guessArray]);
    }
  }

  return (
    <>
      <div className="logo">Wynndle</div>
      <Input addGuess={addGuess} guessArray={guessArray} />
      <GuessContainer guessArray={guessArray} correctGuess={correctGuess} />
    </>
  );
}

export default App;
