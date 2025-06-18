import "./Guess.css";
import { simplifyObject, getCorrect, getHint } from "../../utils/utils";
import earthElement from "../../assets/earth.png";
import thunderElement from "../../assets/thunder.png";
import waterElement from "../../assets/water.png";
import fireElement from "../../assets/fire.png";
import airElement from "../../assets/air.png";

import GuessItem from "./GuessItem.jsx";
import ImageGuessItem from "./ImageGuessItem.jsx";

function ArmourGuess({ guessData, correctGuessData }) {
  const guess = simplifyObject(guessData);
  const correctGuess = simplifyObject(correctGuessData);
  const elementImages = new Map([
    ["baseEarthDefence", earthElement],
    ["baseThunderDefence", thunderElement],
    ["baseWaterDefence", waterElement],
    ["baseFireDefence", fireElement],
    ["baseAirDefence", airElement],
  ]);

  return (
    <li className="row guess fade-in">
      <ImageGuessItem
        text={guess.name}
        icon={guess.icon}
        classes={guess.rarity.toLowerCase()}
      />
      <GuessItem
        text={guess.armourType}
        classes={getCorrect(guess, correctGuess, "armourType")}
      />
      <GuessItem
        text={guess.level}
        hint={getHint(guess.level, correctGuess.level)}
        classes={getCorrect(guess, correctGuess, "level")}
      />
      <GuessItem
        text={guess.health}
        hint={getHint(guess.health, correctGuess.health)}
        classes={getCorrect(guess, correctGuess, "health")}
      />
      <GuessItem
        text={guess.skillPoints.join(", ")}
        classes={`${getCorrect(
          guess,
          correctGuess,
          "skillPoints"
        )}`}
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

export default ArmourGuess;
