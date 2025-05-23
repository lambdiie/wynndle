import id from "../assets/id.webp";
import icon from "../assets/icon.webp";
import letter from "../assets/letter.webp";

import { useState } from "react";
import { fetchIcon } from "../utils/utils";
import { getRandomID } from "../utils/randomGen";

import "../styles/Hints.css";

function Hints({ numGuesses, correctGuess, guessed }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  function onClick(currentIndex) {
    return () => {
      if (currentIndex === index && open) setOpen(false);
      else setOpen(true);
      setIndex(currentIndex);
    };
  }

  return (
    <div className="hints">
      <h1 className="hint-title">Hints</h1>
      <div className="hint-container">
        <Hint
          name="Random ID"
          numTries="5"
          numGuesses={numGuesses}
          img={id}
          onClick={onClick(0)}
          open={open && index === 0}
          guessed={guessed}
        />
        <Hint
          name="Icon"
          numTries="10"
          numGuesses={numGuesses}
          img={icon}
          onClick={onClick(1)}
          open={open && index === 1}
          guessed={guessed}
        />
        <Hint
          name="First Letter"
          numTries="15"
          numGuesses={numGuesses}
          img={letter}
          onClick={onClick(2)}
          open={open && index === 2}
          guessed={guessed}
        />
      </div>
      <div className="hint-display">
        {open && index === 0 && (
          <div className="hint-display-container">
            <p className="id">{getRandomID(correctGuess)}</p>
          </div>
        )}
        {open && index === 1 && (
          <div className="hint-display-container">
            <img src={fetchIcon(correctGuess)} width="64" height="64" />
          </div>
        )}
        {open && index === 2 && (
          <div className="hint-display-container">
            <p className={`${correctGuess.rarity} letter`}>
              {correctGuess.internalName.at(0)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Hint({ name, numTries, numGuesses, img, onClick, open, guessed }) {
  const numTriesLeft = numTries - numGuesses;
  const locked = numTriesLeft > 0 && !guessed;

  return (
    <button
      className={`hint-button ${locked ? "" : "unlocked"} ${
        open ? "open" : ""
      }`}
      onClick={locked ? "" : onClick}
    >
      <img src={img} alt={name} width="32" height="32" />
      <h1>{name}</h1>
      {locked ? (
        <p>
          in {numTriesLeft} {numTriesLeft === 1 ? "guess" : "guesses"}
        </p>
      ) : (
        <p>click to {open ? "close" : "open"}</p>
      )}
    </button>
  );
}

export default Hints;
