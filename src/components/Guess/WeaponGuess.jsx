import "./Guess.css";
import { simplifyObject, getCorrect, getHint } from "../../utils/utils";
import neutralElement from "../../assets/neutral.png";
import earthElement from "../../assets/earth.png";
import thunderElement from "../../assets/thunder.png";
import waterElement from "../../assets/water.png";
import fireElement from "../../assets/fire.png";
import airElement from "../../assets/air.png";

import GuessItem from "./GuessItem.jsx";
import ImageGuessItem from "./ImageGuessItem.jsx";

function WeaponGuess({ guessData, correctGuessData }) {
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
        classes={getCorrect(guess, correctGuess, "class")}
      />
      <GuessItem
        text={guess.level}
        hint={getHint(guess.level, correctGuess.level)}
        classes={getCorrect(guess, correctGuess, "level")}
      />
      <GuessItem
        text={guess.dps}
        hint={getHint(guess.dps, correctGuess.dps)}
        classes={getCorrect(guess, correctGuess, "dps")}
      />
      <GuessItem
        text={guess.speed}
        hint={getHint(
          speedArray.indexOf(guess.speed),
          speedArray.indexOf(correctGuess.speed)
        )}
        classes={getCorrect(guess, correctGuess, "speed")}
      />
      <GuessItem
        text={guess.rarity}
        classes={`${getCorrect(
          guess,
          correctGuess,
          "rarity"
        )} ${guess.rarity.toLowerCase()} rarity`}
      />
      <GuessItem
        text={guess.powders}
        hint={getHint(guess.powders, correctGuess.powders)}
        classes={getCorrect(guess, correctGuess, "powders")}
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
          guess,
          correctGuess,
          "elements"
        )} elements`}
      />
    </li>
  );
}

export default WeaponGuess;
