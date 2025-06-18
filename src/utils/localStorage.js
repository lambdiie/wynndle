import { getDateString } from "./utils";

const gameArray = ["weapon", "armour"];

function getGameIndex(gameType) {
  return gameArray.indexOf(gameType);
}

function storeArr(name, index, data) {
  const storedArr = localStorage.getItem(name);
  let newArr;
  if (!Array.isArray(storedArr)) {
    newArr = [];
  } else {
    newArr = JSON.parse(storedArr);
  }
  newArr[index] = data;

  localStorage.setItem(name, JSON.stringify(newArr));
}

function storeLastLogin() {
  localStorage.setItem("lastlogin", getDateString());
}

function loadLastLogin() {
  return "" + JSON.parse(localStorage.getItem("lastlogin"));
}

function reloadDay() {
  const today = getDateString();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = getDateString(yesterdayDate);
  const lastlogin = loadLastLogin();

  if (today !== lastlogin) {
    // loop through all game types
    gameArray.forEach((gameType) => {
      // if streak is lost, update streak
      if (lastlogin !== yesterday || !loadWon(gameType)) {
        storeStatistics(
          { ...loadStatistics(gameType), currentStreak: 0 },
          gameType
        );
      }
    });

    // reset guesses and won boolean
    localStorage.removeItem("guesses");
    localStorage.removeItem("won");

    // set new login to today
    storeLastLogin();
  }
}

function storeGuesses(arr, gameType) {
  const gameIndex = getGameIndex(gameType);
  storeArr("guesses", gameIndex, arr);
}

function loadGuesses(gameType) {
  reloadDay();
  const gameIndex = getGameIndex(gameType);
  let storedArr = JSON.parse(localStorage.getItem("guesses"));

  // if stored guesses is not in array format, update
  if (
    Array.isArray(storedArr) &&
    typeof storedArr[gameIndex] === "object" &&
    !Array.isArray(storedArr[gameIndex]) &&
    storedArr[gameIndex] !== null
  ) {
    storeArr("guesses", 0, storedArr);
    let storedArr = JSON.parse(localStorage.getItem("guesses"));
  }

  if (storedArr) {
    return storedArr[gameIndex];
  }
  return [];
}

function storeStatistics(statistics, gameType) {
  const gameIndex = getGameIndex(gameType);
  storeArr("statistics", gameIndex, statistics);
}

function loadStatistics(gameType) {
  const gameIndex = getGameIndex(gameType);
  let statistics = JSON.parse(localStorage.getItem("statistics"));

  // if stats is an object, update it to fit array format
  if (statistics && !Array.isArray(statistics)) {
    storeArr("statistics", 0, statistics);
    statistics = JSON.parse(localStorage.getItem("statistics"));
  }

  // if statistics is not null, return it
  if (statistics && statistics[gameIndex]) {
    return statistics[gameIndex];
  }

  // otherwise, return default object
  return {
    gamesWon: 0,
    averageGuesses: 0,
    currentStreak: 0,
    maxStreak: 0,
  };
}

function loadWon(gameType) {
  const gameIndex = getGameIndex(gameType);
  let won = JSON.parse(localStorage.getItem("won"));

  // if won is old format, update it to array format
  if (typeof won === "boolean") {
    storeArr("won", 0, won);
    won = JSON.parse(localStorage.getItem("won"));
  }

  return won && won[gameIndex];
}

function storeWon(bool, gameType) {
  const gameIndex = getGameIndex(gameType);
  storeArr("won", gameIndex, bool);
}

export {
  storeGuesses,
  loadGuesses,
  storeStatistics,
  loadStatistics,
  storeWon,
  loadWon,
};
