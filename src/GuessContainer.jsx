import Guess from "./Guess";
import "./GuessContainer.css";

function GuessContainer({ guessArray, correctGuess }) {
  return (
    <div className="guess-container">
      {guessArray.length > 0 && <Titles />}
      <GuessList guessArray={guessArray} correctGuess={correctGuess} />
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
    "Elements",
  ];

  return (
    <div className="row title fade-in">
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
        <Guess guessData={guess} correctGuessData={correctGuess} key={guess.internalName} />
      ))}
    </ul>
  );
}

export default GuessContainer;
