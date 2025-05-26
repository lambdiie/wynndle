import seedrandom from "seedrandom";
import { weaponArray } from "./data";
import { getDateString } from "./utils";

function getRandomNumber(min, max, seed) {
  const rng = seedrandom(seed);
  return Math.floor(rng() * (max - min + 1) + min);
}

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

function getWeapon(date) {
  const seed = getDateString(date);
  const index = getRandomNumber(0, weaponArray.length - 1, seed);
  return weaponArray[index];
}

function getRandomID(object) {
  if (!object.identifications) return "No IDs";
  const keys = Object.keys(object.identifications);

  const seed = getDateString();
  const rng = getRandomNumber(0, keys.length - 1, seed);
  const randomKey = keys[rng];

  return randomKey;
}

function getWeaponToday() {
  return getWeapon(today);
}

function getWeaponYesterday() {
  return getWeapon(yesterday);
}

export { getDateString, getRandomID, getWeaponToday, getWeaponYesterday };
