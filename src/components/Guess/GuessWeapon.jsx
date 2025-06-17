import "./Guess.css";
import { simplifyObject, getCorrect } from "../../utils/utils";
import neutralElement from "../../assets/neutral.png";
import earthElement from "../../assets/earth.png";
import thunderElement from "../../assets/thunder.png";
import waterElement from "../../assets/water.png";
import fireElement from "../../assets/fire.png";
import airElement from "../../assets/air.png";

function Guess({ guessData, correctGuessData }) {
  function getHint(guessNum, correctGuessNum) {
    let hint = "";
    if (correctGuessNum > guessNum) hint = "↑";
    if (correctGuessNum < guessNum) hint = "↓";
    return hint;
  }

  const guess = simplifyObject(guessData);
  const correctGuess = simplifyObject(correctGuessData);
  const speedArray = [
    "Super Slow",
    "Very Slow",
    "Slow",
    "Normal",
    "Fast",
    "Very Fast",
    "Super Fast",
  ];
  const elementImages = new Map([
    ["baseDamage", neutralElement],
    ["baseEarthDamage", earthElement],
    ["baseThunderDamage", thunderElement],
    ["baseWaterDamage", waterElement],
    ["baseFireDamage", fireElement],
    ["baseAirDamage", airElement],
  ]);

  return (
    <li className="row guess fade-in">
      <ImageGuessItem
        text={guess.name}
        icon={guess.icon}
        classes={guess.rarity.toLowerCase()}
      />
      <GuessItem
        text={guess.class}
        classes={getCorrect(guess.class, correctGuess.class, "class")}
      />
      <GuessItem
        text={guess.level}
        hint={getHint(guess.level, correctGuess.level)}
        classes={getCorrect(guess.level, correctGuess.level, "level")}
      />
      <GuessItem
        text={guess.dps}
        hint={getHint(guess.dps, correctGuess.dps)}
        classes={getCorrect(guess.dps, correctGuess.dps, "dps")}
      />
      <GuessItem
        text={guess.speed}
        hint={getHint(
          speedArray.indexOf(guess.speed),
          speedArray.indexOf(correctGuess.speed)
        )}
        classes={getCorrect(guess.speed, correctGuess.speed, "speed")}
      />
      <GuessItem
        text={guess.rarity}
        classes={`${getCorrect(
          guess.rarity,
          correctGuess.rarity,
          "rarity"
        )} ${guess.rarity.toLowerCase()} rarity`}
      />
      <GuessItem
        text={guess.powders}
        hint={getHint(guess.powders, correctGuess.powders)}
        classes={getCorrect(guess.powders, correctGuess.powders, "powders")}
      />
      <GuessItem
        text={guess.elements.map((elem) => (
          <img
            key={elem}
            src={elementImages.get(elem)}
            width="16"
            height="16"
          />
        ))}
        classes={`${getCorrect(
          guess.elements,
          correctGuess.elements,
          "elements"
        )} elements`}
      />
    </li>
  );
}

function GuessItem({ text, hint = "", classes }) {
  return (
    <div className={`guess-item ${classes}`}>
      <p>
        {text} {hint}
      </p>
    </div>
  );
}

function ImageGuessItem({ text, icon, classes }) {
  let fontSize = "0.75rem";
  if (text.length > 20) fontSize = "0.6rem";

  return (
    <div className={`guess-item image-item ${classes.toLowerCase()}`}>
      <p style={{ fontSize: fontSize }}>{text}</p>
      <img src={icon} width="32" height="32" />
    </div>
  );
}

export default Guess;
