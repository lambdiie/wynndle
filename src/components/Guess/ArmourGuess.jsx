import "./Guess.css";
import {
  simplifyObject,
  getCorrect,
  getHint,
  capitalize,
} from "../../utils/utils";
import { elementImagesDefence } from "../../utils/constants.js";

import GuessItem from "./GuessItem.jsx";
import ImageGuessItem from "./ImageGuessItem.jsx";
import { Fragment } from "react";

function ArmourGuess({ guessData, correctGuessData }) {
  const guess = simplifyObject(guessData);
  const correctGuess = simplifyObject(correctGuessData);

  return (
    <li className="row guess fade-in">
      <ImageGuessItem
        text={guess.name}
        object={guessData}
        classes={guess.tier.toLowerCase()}
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
        text={guess.skillPoints.map((elem, i, arr) => {
          return (
            <Fragment key={elem}>
              <span className={elem}>{capitalize(elem.slice(0, 3))}</span>
              {i !== arr.length - 1 && ", "}
            </Fragment>
          );
        })}
        classes={`${getCorrect(guess, correctGuess, "skillPoints")}`}
      />
      <GuessItem
        text={guess.tier}
        classes={`${getCorrect(
          guess,
          correctGuess,
          "tier"
        )} ${guess.tier.toLowerCase()} tier`}
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
            src={elementImagesDefence.get(elem)}
            width="16"
            height="16"
          />
        ))}
        classes={`${getCorrect(guess, correctGuess, "elements")} elements`}
      />
    </li>
  );
}

export default ArmourGuess;
