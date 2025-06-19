import Infobar from "../Infobar/Infobar";
import Hints from "../Hints/Hints";
import Input from "../Input/Input";
import Win from "../Win/Win";
import GuessContainer from "../Guess/GuessContainer";
import YesterdayObject from "../YesterdayObject/YesterdayObject";
import Footer from "./Footer";
import ConfettiExplosion from "react-confetti-blast";

import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getRandomIndex } from "../../utils/randomGen";
import {
  storeGuesses,
  loadGuesses,
  storeStatistics,
  loadStatistics,
  storeWon,
} from "../../utils/localStorage";

function GameContainer({ gameType }) {
  const [guessArray, setGuessArray] = useState(loadGuesses(gameType));
  const [isExploding, setIsExploding] = useState(false);
  const dataArray = useOutletContext();

  const searchArray = dataArray.filter(
    (item) => item.type === gameType && !(item.rarity === "common")
  );

  const correctGuess = searchArray[getRandomIndex(searchArray.length)];
  const currentGuess = guessArray[0];
  const win =
    currentGuess !== undefined &&
    correctGuess.internalName === currentGuess.internalName;

  const statistics = loadStatistics(gameType);

  function addGuess(currentGuess) {
    if (
      !guessArray.some(
        (elem) => elem.internalName === currentGuess.internalName
      )
    ) {
      const newGuessArray = [currentGuess, ...guessArray];
      setGuessArray(newGuessArray);
      storeGuesses(newGuessArray, gameType);

      if (correctGuess.internalName === currentGuess.internalName) {
        onWin();
      }
    }
  }

  function onWin() {
    // show confetti
    setIsExploding(true);

    // update statistics
    const gamesWon = statistics.gamesWon + 1;
    const averageGuesses =
      (statistics.gamesWon * statistics.averageGuesses +
        (guessArray.length + 1)) /
      gamesWon;
    const currentStreak = statistics.currentStreak + 1;
    const maxStreak =
      currentStreak > statistics.maxStreak
        ? currentStreak
        : statistics.maxStreak;
    const newStatistics = {
      gamesWon: gamesWon,
      averageGuesses: averageGuesses,
      currentStreak: currentStreak,
      maxStreak: maxStreak,
    };
    storeStatistics(newStatistics, gameType);

    // update won
    storeWon(true, gameType);
  }

  return (
    <>
      <div className="section">
        <Infobar statistics={statistics} gameType={gameType} />
        <Hints
          numGuesses={guessArray.length}
          correctGuess={correctGuess}
          guessed={win}
        />
        {!win && (
          <Input
            addGuess={addGuess}
            guessArray={guessArray}
            searchArray={searchArray}
          />
        )}
      </div>
      {win && (
        <div className="center">
          {isExploding && (
            <ConfettiExplosion onComplete={() => setIsExploding(false)} />
          )}
          <Win
            guessArray={guessArray}
            correctGuess={correctGuess}
            numTries={guessArray.length}
            gameType={gameType}
          />
        </div>
      )}

      {guessArray.length > 0 && (
        <GuessContainer guessArray={guessArray} correctGuess={correctGuess} gameType={gameType} />
      )}
      <YesterdayObject searchArray={searchArray} gameType={gameType} />
      <Footer />
    </>
  );
}

export default GameContainer;
