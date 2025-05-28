import ImageIcon from "./ImageIcon";
import { Tooltip } from "react-tooltip";
import { useState, useEffect } from "react";
import "../styles/Win.css";
import { getCorrect, simplifyObject } from "../utils/utils";

function Win({ guessArray, correctGuess, numTries }) {
  return (
    <div className="section fade-in">
      <p>
        You guessed the weapon in {numTries}{" "}
        {numTries === 1 ? "try" : "tries"}!
      </p>
      <NextQuizDisplay />
      <CopyResults guessArray={guessArray} correctGuess={correctGuess} />
      <ImageIcon object={correctGuess} />
    </div>
  );
}

function CopyResults({ guessArray, correctGuess }) {
  const [isOpen, setIsOpen] = useState(false);

  function getCopyResults() {
    const correctObject = simplifyObject(correctGuess);
    let results = "Wynndle ";
    const today = new Date();
    results += today.toLocaleDateString("en-US") + "\n";
    results += `I guessed the weapon in ${guessArray.length} ${
      guessArray.length === 1 ? "try" : "tries"
    }!\n\n`;

    guessArray.forEach((guess) => {
      const guessObject = simplifyObject(guess);
      const keys = Object.keys(guessObject);

      results += "⬛";
      for (let i = 2; i < keys.length; ++i) {
        const key = keys[i];
        const check = getCorrect(guessObject[key], correctObject[key], key);

        if (check === "correct") results += "🟩";
        else if (check === "close") results += "🟨";
        else results += "🟥";
      }

      results += "\n";
    });

    return results;
  }

  const results = getCopyResults();

  return (
    <div>
      <button
        className="copy"
        onClick={() => {
          navigator.clipboard.writeText(results);
          setIsOpen(true);
        }}
        data-tooltip-id="copy"
        data-tooltip-content="Copied to Clipboard!"
        data-tooltip-place="bottom"
      >
        Share Result
      </button>
      <Tooltip id="copy" isOpen={isOpen} afterShow={() => setTimeout(() => setIsOpen(false), 1000)} />
    </div>
  );
}

function NextQuizDisplay() {
  const [time, setTime] = useState(getTimeToNextWeapon());

  function getTimeToNextWeapon() {
    const today = new Date();
    const hours = 23 - today.getHours();
    const minutes = 59 - today.getMinutes();
    const seconds = 59 - today.getSeconds();

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    const key = setInterval(() => {
      setTime(getTimeToNextWeapon());
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
      Next weapon in {time}
    </h1>
  );
}

export default Win;
