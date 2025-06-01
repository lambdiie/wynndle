import Infobar from "./components/Infobar";
import Hints from "./components/Hints";
import Input from "./components/Input";
import Win from "./components/Win";
import GuessContainer from "./components/GuessContainer";
import YesterdayWeapon from "./components/YesterdayWeapon";
import Footer from "./components/Footer";
import ConfettiExplosion from "react-confetti-blast";

import logo from "./assets/wynndlelogo.png";
import "./styles/App.css";
import { useState, useEffect } from "react";
import { getRandomIndex } from "./utils/randomGen";
import {
  storeGuesses,
  loadGuesses,
  storeStatistics,
  loadStatistics,
  storeWon,
} from "./utils/localStorage";

function App() {
  const { weaponArray, error, loading, errorStatus } = useFetchDatabase();
  const [guessArray, setGuessArray] = useState(loadGuesses());
  const [isExploding, setIsExploding] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>Oops! Something went wrong, please refresh or try again later. Error Code: {errorStatus}</p>
    );

  const correctGuess = weaponArray[getRandomIndex(weaponArray.length)];
  const currentGuess = guessArray[0];
  const win =
    currentGuess !== undefined &&
    correctGuess.internalName === currentGuess.internalName;
  const statistics = loadStatistics();

  function addGuess(currentGuess) {
    if (
      !guessArray.some(
        (elem) => elem.internalName === currentGuess.internalName
      )
    ) {
      const newGuessArray = [currentGuess, ...guessArray];
      setGuessArray(newGuessArray);
      storeGuesses(newGuessArray);

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
    storeStatistics(newStatistics);

    // update won
    storeWon(true);
  }

  return (
    <>
      <img className="logo" src={logo} width="512" alt="Wynndle" />
      <div className="section">
        <Infobar statistics={statistics} />
        <Hints
          numGuesses={guessArray.length}
          correctGuess={correctGuess}
          guessed={win}
        />
        {!win && (
          <Input
            addGuess={addGuess}
            guessArray={guessArray}
            searchArray={weaponArray}
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
          />
        </div>
      )}

      {guessArray.length > 0 && (
        <GuessContainer guessArray={guessArray} correctGuess={correctGuess} />
      )}
      <YesterdayWeapon searchArray={weaponArray} />
      <Footer />
    </>
  );
}

function useFetchDatabase() {
  const [weaponArray, setWeaponArray] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    async function fetchDatabase() {
      try {
        const response = await fetch(
          "https://corsproxy.io/?url=https://api.wynncraft.com/v3/item/database?fullResult",
          {
            mode: "cors",
          }
        );
        if (response.status >= 400) {
          setErrorStatus(response.status);
          throw new Error("Error with fetching API!");
        }
        const objectData = await response.json();
        const dataArray = Object.keys(objectData).map((key) => {
          return { ...objectData[key], internalName: key };
        });
        const weaponArray = dataArray.filter(
          (item) => item.type === "weapon" && !(item.rarity === "common")
        );
        setWeaponArray(weaponArray);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDatabase();
  }, []);

  return { weaponArray, error, loading, errorStatus };
}

export default App;
