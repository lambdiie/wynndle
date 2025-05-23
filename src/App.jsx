import Hints from "./components/Hints";
import Input from "./components/Input";
import Win from "./components/Win";
import GuessContainer from "./components/GuessContainer";
import YesterdayWeapon from "./components/YesterdayWeapon";
import Footer from "./components/Footer";

import "./styles/App.css";
import { useState } from "react";
import { getWeaponToday } from "./utils/randomGen";

function App() {
  const [guessArray, setGuessArray] = useState([]);

  const correctGuess = getWeaponToday();
  const currentGuess = guessArray[0];
  const win =
    currentGuess !== undefined &&
    correctGuess.internalName === currentGuess.internalName;

  function addGuess(currentGuess) {
    if (
      !guessArray.some(
        (elem) => elem.internalName === currentGuess.internalName
      )
    ) {
      setGuessArray([currentGuess, ...guessArray]);
    }
  }

  return (
    <>
      <div className="logo">Wynndle</div>
      <Hints numGuesses={guessArray.length} correctGuess={correctGuess} guessed={win} />
      {!win && <Input addGuess={addGuess} guessArray={guessArray} />}
      {win && <Win correctGuess={correctGuess} numTries={guessArray.length} />}
      {guessArray.length > 0 && (
        <GuessContainer guessArray={guessArray} correctGuess={correctGuess} />
      )}
      <YesterdayWeapon />
      <Footer />
    </>
  );
}

export default App;
