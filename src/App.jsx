import Input from "./Input";
import GuessContainer from "./GuessContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [guessArray, setGuessArray] = useState([
    // {
    //   weapon: "Labyrinth",
    //   class: "Archer",
    //   level: 104,
    //   dps: 830,
    //   speed: "Very Slow",
    //   rarity: "Mythic",
    //   powders: 2,
    //   untradeable: "No",
    // },
    // {
    //   weapon: "Monster",
    //   class: "Mage",
    //   level: 98,
    //   dps: 442,
    //   speed: "Slow",
    //   rarity: "Mythic",
    //   powders: 3,
    //   untradeable: "No",
    // },
  ]);
  
  const [correctGuess, setCorrectGuess] = useState(
    {
      weapon: {
        name: "Monster",
        icon: "https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.fire3.webp",
      },
      class: "Mage",
      level: 98,
      dps: 442,
      speed: "Slow",
      rarity: "Mythic",
      powders: 3,
      untradeable: "No",
    },
  );
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
      <Input addGuess={addGuess} />
      <GuessContainer guessArray={guessArray} correctGuess={correctGuess} />
    </>
  );
}

export default App;
