import { getDateString } from "./utils";

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
    if (lastlogin !== yesterday || !loadWon()) {
        storeStatistics({ ...loadStatistics(), currentStreak: 0 });
    }

    localStorage.removeItem("guesses");
    storeLastLogin();
    storeWon(false);
  }
}

function storeGuesses(arr) {
  localStorage.setItem("guesses", JSON.stringify(arr));
}

function loadGuesses() {
  reloadDay();
  const arr = localStorage.getItem("guesses");

  if (arr) {
    return JSON.parse(arr);
  } else {
    return [];
  }
}

function loadStatistics() {
  const statistics = JSON.parse(localStorage.getItem("statistics"));
  if (statistics) {
    return statistics;
  } else {
    return {
      gamesWon: 0,
      averageGuesses: 0,
      currentStreak: 0,
      maxStreak: 0,
    };
  }
}

function storeStatistics(statistics) {
  localStorage.setItem("statistics", JSON.stringify(statistics));
}

function loadWon() {
    return localStorage.getItem("won") === "true";
}

function storeWon(bool) {
    localStorage.setItem("won", bool);
}

export { storeGuesses, loadGuesses, storeStatistics, loadStatistics, storeWon, loadWon };
