import seedrandom from "seedrandom";
import { weaponArray } from "./data";

function getRandomNumber(min, max, seed) {
  const rng = seedrandom(seed);
  return Math.floor(rng() * (max - min + 1) + min);
}

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

function getWeapon(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const seed = `${day}${month}${year}`;

  const index = getRandomNumber(0, weaponArray.length, seed);
  return weaponArray[index];
}

function getWeaponToday() {
    return getWeapon(today);
}

function getWeaponYesterday() {
    return getWeapon(yesterday);
}

export { getWeaponToday, getWeaponYesterday }
