import WeaponGuess from "./WeaponGuess";
import ArmourGuess from "./ArmourGuess";
import "./GuessContainer.css";

const weaponTitleArray = [
  "Weapon",
  "Class",
  "Level",
  "DPS",
  "Speed",
  "Rarity",
  "Powders",
  "Elements",
];
const armourTitleArray = [
  "Armour",
  "Type",
  "Level",
  "Health",
  "SP Reqs",
  "Rarity",
  "Powders",
  "Defences",
];

function GuessContainer({ guessArray, correctGuess, gameType }) {
  return (
    <div className="guess-container">
      <Titles titleArray={gameType === "armour" ? armourTitleArray : weaponTitleArray} />
      <GuessList
        guessArray={guessArray}
        correctGuess={correctGuess}
        gameType={gameType}
      />
    </div>
  );
}

function Titles({ titleArray }) {
  return (
    <div className="row title fade-in">
      {titleArray.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
}

function GuessList({ guessArray, correctGuess, gameType }) {
  return (
    <ul>
      {guessArray.map((guess) =>
        gameType === "armour" ? (
          <ArmourGuess
            guessData={guess}
            correctGuessData={correctGuess}
            key={guess.internalName}
          />
        ) : (
          <WeaponGuess
            guessData={guess}
            correctGuessData={correctGuess}
            key={guess.internalName}
          />
        )
      )}
    </ul>
  );
}

export default GuessContainer;
