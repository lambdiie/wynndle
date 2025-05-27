import Hints from "./components/Hints";
import Input from "./components/Input";
import Win from "./components/Win";
import GuessContainer from "./components/GuessContainer";
import YesterdayWeapon from "./components/YesterdayWeapon";
import Footer from "./components/Footer";
import ConfettiExplosion from "react-confetti-blast";

import logo from "./assets/wynndlelogo.png";
import "./styles/App.css";
import { useState } from "react";
import { getWeaponToday } from "./utils/randomGen";
import { storeGuesses, loadGuesses } from "./utils/localStorage";

function App() {
  const [guessArray, setGuessArray] = useState(loadGuesses());
  const [isExploding, setIsExploding] = useState(false);

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
      const newGuessArray = [currentGuess, ...guessArray];
      setGuessArray(newGuessArray);
      storeGuesses(newGuessArray);

      if (correctGuess.internalName === currentGuess.internalName) {
        setIsExploding(true);
      }
    }
  }

  return (
    <>
      <img className="logo" src={logo} width="512" alt="Wynndle" />
      <Hints
        numGuesses={guessArray.length}
        correctGuess={correctGuess}
        guessed={win}
      />
      {!win && <Input addGuess={addGuess} guessArray={guessArray} />}
      {win && (
        <div className="center">
          {isExploding && (
            <ConfettiExplosion onComplete={() => setIsExploding(false)} />
          )}
          <Win correctGuess={correctGuess} numTries={guessArray.length} />
        </div>
      )}

      {guessArray.length > 0 && (
        <GuessContainer guessArray={guessArray} correctGuess={correctGuess} />
      )}
      <YesterdayWeapon />
      <Footer />
    </>
  );
}

export default App;
