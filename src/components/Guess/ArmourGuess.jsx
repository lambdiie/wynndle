import "./Guess.css";
import { simplifyObject, getCorrect, getHint } from "../../utils/utils";
import {
  ELEMENT_MAP_DEFENCE,
  SPRITE_ELEMENT,
  SPRITE_MAP_ELEMENTS,
} from "../../utils/constants.js";

import GuessItem from "./GuessItem.jsx";
import ImageGuessItem from "./ImageGuessItem.jsx";
import Sprite from "../Utils/Sprite.jsx";

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
        text={guess.skillPoints.map((skillPoint) => (
          <Sprite
            key={skillPoint}
            name={skillPoint}
            sheetClass={SPRITE_ELEMENT}
            scale={1.25}
            className="elements"
          />
        ))}
        classes={`${getCorrect(guess, correctGuess, "skillPoints")}`}
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
            name={ELEMENT_MAP_DEFENCE[elem]}
            sheetClass={SPRITE_ELEMENT}
            scale={1.25}
            className="elements"
          />
        ))}
        classes={`${getCorrect(guess, correctGuess, "elements")}`}
      />
    </li>
  );
}

export default ArmourGuess;
