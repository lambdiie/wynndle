import Guess from "./Guess";
import "./GuessContainer.css";

function GuessContainer() {
  // test
  const guessArray = [
    {
      weapon: "Labyrinth",
      class: "Archer",
      level: 104,
      dps: 830,
      speed: "Very Slow",
      rarity: "Mythic",
      powders: 2,
      majorId: "Yes",
    },
    {
      weapon: "Monster",
      class: "Mage",
      level: 98,
      dps: 442,
      speed: "Slow",
      rarity: "Mythic",
      powders: 3,
      majorId: "No",
    },
  ];

  const weapon = {
    weapon: "Labyrinth",
    class: "Archer",
    level: 104,
    dps: 830,
    speed: "Very Slow",
    rarity: "Mythic",
    powders: 2,
    majorId: "Yes",
  };

  return (
    <div className="guess-container">
      <Titles />
      <GuessList guessArray={guessArray} correctGuess={weapon} />
    </div>
  );
}

function Titles() {
  const titleArray = [
    "Weapon",
    "Class",
    "Level",
    "DPS",
    "Speed",
    "Rarity",
    "Powders",
    "Major ID",
  ];

  return (
    <div className="row title">
      {titleArray.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
}

function GuessList({ guessArray, correctGuess }) {
  return (
    <ul>
      {guessArray.map((guess) => (
        <Guess guess={guess} correctGuess={correctGuess} key={guess.weapon} />
      ))}
    </ul>
  );
}

export default GuessContainer;
