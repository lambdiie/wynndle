import Infobar from "../Infobar/Infobar";
import Hints from "../Hints/Hints";
import Input from "../Input/Input";
import Win from "../Win/Win";
import GuessContainer from "../Guess/GuessContainer";
import YesterdayObject from "../YesterdayObject/YesterdayObject";
import Footer from "./Footer";
import ConfettiExplosion from "react-confetti-blast";

import { useState, useEffect } from "react";
import { getRandomIndex } from "../../utils/randomGen";
import { capitalize } from "../../utils/utils";
import {
  storeGuesses,
  loadGuesses,
  storeStatistics,
  loadStatistics,
  storeWon,
} from "../../utils/localStorage";

function GameContainer({ gameType }) {
  const { dataArray, error, loading, errorStatus } = useFetchDatabase();
  const [guessArray, setGuessArray] = useState(loadGuesses(gameType));
  const [isExploding, setIsExploding] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Oops! Something went wrong, please refresh or try again later. Error
        Code: {errorStatus}
      </p>
    );

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
        <Infobar statistics={statistics} gameType={capitalize(gameType)} />
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

function useFetchDatabase() {
  const [dataArray, setDataArray] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    async function fetchDatabase() {
      try {
        const response = await fetch("data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        setErrorStatus(response.status);
        if (response.status >= 400) {
          throw new Error("Error with fetching data!");
        }
        const objectData = await response.json();
        const dataArray = Object.keys(objectData).map((key) => {
          return { ...objectData[key], internalName: key };
        });
        setDataArray(dataArray);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDatabase();
  }, []);

  return { dataArray, error, loading, errorStatus };
}

export default GameContainer;
