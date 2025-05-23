import { getDateString } from "./utils";

function setLastLogin() {
    localStorage.setItem("lastlogin", getDateString());
}

function getLastLogin() {
    return JSON.parse(localStorage.getItem("lastlogin"));
}

function reloadDay() {
    const today = getDateString();
    const lastlogin = getLastLogin();
    if (today != lastlogin) {
        localStorage.removeItem("guesses");
        setLastLogin();
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
    }
    else {
        return [];
    }
}

export { setLastLogin, storeGuesses, loadGuesses };