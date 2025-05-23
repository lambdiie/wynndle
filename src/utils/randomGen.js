import seedrandom from "seedrandom";
import { weaponArray } from "./data";

function getRandomNumber(min, max, seed) {
  const rng = seedrandom(seed);
  return Math.floor(rng() * (max - min + 1) + min);
}

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

function getSeed(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const seed = `${day}${month}${year}`;

  return seed;
}

function getWeapon(date) {
  const seed = getSeed(date);
  const index = getRandomNumber(0, weaponArray.length, seed);
  return weaponArray[index];
}

function getRandomID(object) {
  if (!object.identifications) return "No IDs";
  const keys = Object.keys(object.identifications);

  const seed = getSeed(today);
  const rng = getRandomNumber(0, keys.length, seed);
  const randomKey = keys[rng];

  if (typeof object.identifications[randomKey] === "number") return `${randomKey}: ${object.identifications[randomKey]}`;
  else return `${randomKey}: ${object.identifications[randomKey].min} to ${object.identifications[randomKey].max}`;
}

function getWeaponToday() {
  return getWeapon(today);
}

function getWeaponYesterday() {
  return getWeapon(yesterday);
}

export { getRandomID, getWeaponToday, getWeaponYesterday };
