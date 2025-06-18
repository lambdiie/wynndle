import ImageIcon from "../Utils/ImageIcon";
import { Tooltip } from "react-tooltip";
import { useState, useEffect } from "react";
import "./Win.css";
import { getCorrect, simplifyObject } from "../../utils/utils";

function Win({ guessArray, correctGuess, numTries, gameType }) {
  return (
    <div className="section fade-in">
      <p>
        You guessed the {gameType} in {numTries}{" "}
        {numTries === 1 ? "try" : "tries"}!
      </p>
      <NextQuizDisplay gameType={gameType} />
      <CopyResults
        guessArray={guessArray}
        correctGuess={correctGuess}
        gameType={gameType}
      />
      <ImageIcon object={correctGuess} />
    </div>
  );
}

function CopyResults({ guessArray, correctGuess, gameType }) {
  const [isOpen, setIsOpen] = useState(false);

  function getCopyResults() {
    const correctObject = simplifyObject(correctGuess);

    const typeEmoji =
      gameType == "armour"
        ? "👕"
        : gameType == "accessory"
        ? "💍"
        : gameType == "ingredient"
        ? "🍲"
        : "🗡️";
    let results = `Wynndle (${typeEmoji}) `;

    const today = new Date();
    results += today.toLocaleDateString("en-US") + "\n";
    results += `I guessed the ${gameType} in ${guessArray.length} ${
      guessArray.length === 1 ? "try" : "tries"
    }!\n\n`;

    guessArray.forEach((guess) => {
      const guessObject = simplifyObject(guess);
      const keys = Object.keys(guessObject);

      results += "🟪";
      keys.forEach((key) => {
        if (key !== "name" && key !== "icon" && key !== "type") {
          const check = getCorrect(guessObject, correctObject, key);

          if (check === "correct") results += "🟩";
          else if (check === "close") results += "🟨";
          else results += "🟥";
        }
      });

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
      <Tooltip
        id="copy"
        isOpen={isOpen}
        afterShow={() => setTimeout(() => setIsOpen(false), 1000)}
      />
    </div>
  );
}

function NextQuizDisplay({ gameType }) {
  const [time, setTime] = useState(getTimeToNextObject());

  function getTimeToNextObject() {
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
      setTime(getTimeToNextObject());
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
      Next {gameType} in {time}
    </h1>
  );
}

export default Win;
