import Input from "./Input";
import GuessContainer from "./GuessContainer";
import "./App.css";
import { useState } from "react";
import { fetchWeapon } from "./utils";
import { weaponArray } from "./data";

function App() {
  const [guessArray, setGuessArray] = useState([]);

  const correctGuess = fetchWeapon(weaponArray[1000].internalName);

  function addGuess(currentGuess) {
    if (
      !guessArray.some((elem) => elem.weapon.name === currentGuess.weapon.name)
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
