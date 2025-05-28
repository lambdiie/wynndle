import seedrandom from "seedrandom";
import { getDateString } from "./utils";

function getRandomNumber(min, max, seed) {
  const rng = seedrandom(seed);
  return Math.floor(rng() * (max - min + 1) + min);
}

function getRandomIndex(length, date = new Date()) {
  const seed = getDateString(date);
  const index = getRandomNumber(0, length - 1, seed);
  return index;
}

function getRandomID(object) {
  if (!object.identifications) return "No IDs";
  const keys = Object.keys(object.identifications);

  const seed = getDateString();
  const rng = getRandomNumber(0, keys.length - 1, seed);
  const randomKey = keys[rng];

  return randomKey;
}

export { getDateString, getRandomID, getRandomIndex };
