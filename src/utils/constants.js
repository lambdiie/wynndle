import neutralElement from "../assets/neutral.png";
import earthElement from "../assets/earth.png";
import thunderElement from "../assets/thunder.png";
import waterElement from "../assets/water.png";
import fireElement from "../assets/fire.png";
import airElement from "../assets/air.png";

export const speedArray = [
  "Super Slow",
  "Very Slow",
  "Slow",
  "Normal",
  "Fast",
  "Very Fast",
  "Super Fast",
];

export const elementImagesDamage = new Map([
  ["baseDamage", neutralElement],
  ["baseEarthDamage", earthElement],
  ["baseThunderDamage", thunderElement],
  ["baseWaterDamage", waterElement],
  ["baseFireDamage", fireElement],
  ["baseAirDamage", airElement],
]);

export const elementImagesDefence = new Map([
  ["baseEarthDefence", earthElement],
  ["baseThunderDefence", thunderElement],
  ["baseWaterDefence", waterElement],
  ["baseFireDefence", fireElement],
  ["baseAirDefence", airElement],
]);
