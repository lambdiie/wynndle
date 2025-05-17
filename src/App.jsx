import Input from "./components/Input";
import GuessContainer from "./components/GuessContainer";
import YesterdayWeapon from "./components/YesterdayWeapon";
import Footer from "./components/Footer";

import "./styles/App.css";
import { useState } from "react";
import { getWeaponToday } from "./utils/randomGen";

function App() {
  const [guessArray, setGuessArray] = useState([]);

  const correctGuess = getWeaponToday();

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
      <Input addGuess={addGuess} guessArray={guessArray} />
      {guessArray.length > 0 && <GuessContainer guessArray={guessArray} correctGuess={correctGuess} />}
      <YesterdayWeapon />
      <Footer />
    </>
  );
}

export default App;
