import "./Guess.css";
import { simplifyObject, getCorrect, getHint } from "../../utils/utils";

import GuessItem from "./GuessItem.jsx";
import ImageGuessItem from "./ImageGuessItem.jsx";
import Sprite from "../Utils/Sprite.jsx";
import {
  SPEED_ARRAY,
  ELEMENT_MAP_DAMAGE,
  SPRITE_ELEMENT,
  SPRITE_MAP_ELEMENTS
} from "../../utils/constants.js";

function WeaponGuess({ guessData, correctGuessData }) {
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
          SPEED_ARRAY.indexOf(guess.speed),
          SPEED_ARRAY.indexOf(correctGuess.speed),
        )}
        classes={getCorrect(guess, correctGuess, "speed")}
      />
      <GuessItem
        text={guess.tier}
        classes={`${getCorrect(
          guess,
          correctGuess,
          "tier",
        )} ${guess.tier.toLowerCase()} tier`}
      />
      <GuessItem
        text={guess.powders}
        hint={getHint(guess.powders, correctGuess.powders)}
        classes={getCorrect(guess, correctGuess, "powders")}
      />
      <GuessItem
        text={guess.elements.map((elem) => (
          <Sprite
            key={elem}
            name={ELEMENT_MAP_DAMAGE[elem]}
            sheetClass={SPRITE_ELEMENT}
            scale={1.25}
            className="elements"
          />
        ))}
        classes={`${getCorrect(guess, correctGuess, "skillPoints")}`}
      />
    </li>
  );
}

export default WeaponGuess;
