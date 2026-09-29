import neutralElement from "../assets/neutral.png";
import earthElement from "../assets/earth.png";
import thunderElement from "../assets/thunder.png";
import waterElement from "../assets/water.png";
import fireElement from "../assets/fire.png";
import airElement from "../assets/air.png";

export const SPEED_ARRAY = [
  "Super Slow",
  "Very Slow",
  "Slow",
  "Normal",
  "Fast",
  "Very Fast",
  "Super Fast",
];

export const ELEMENT_IMAGES_DAMAGE = new Map([
  ["baseDamage", neutralElement],
  ["baseEarthDamage", earthElement],
  ["baseThunderDamage", thunderElement],
  ["baseWaterDamage", waterElement],
  ["baseFireDamage", fireElement],
  ["baseAirDamage", airElement],
]);

export const ELEMENT_IMAGES_DEFENCE = new Map([
  ["baseEarthDefence", earthElement],
  ["baseThunderDefence", thunderElement],
  ["baseWaterDefence", waterElement],
  ["baseFireDefence", fireElement],
  ["baseAirDefence", airElement],
]);

export const SPRITE_ARMOUR = "sprite-armour"
export const SPRITE_ARMOUR_PALE = "sprite-armour-pale"
export const SPRITE_ELEMENT = "sprite-element"

// column and row of the material's helmet in the spritesheet
export const SPRITE_MAP_ARMOUR = {
  "leather": [0, 0],
  "gold": [4, 1],
  "chainmail": [0, 2],
  "iron": [4, 2],
  "titanium": [4, 4],
  "diamond": [0, 3],
};

export const ARMOUR_ORDER = [
  "helmet",
  "chestplate",
  "leggings",
  "boots",
]