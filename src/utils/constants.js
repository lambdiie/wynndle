export const SPEED_ARRAY = [
  "Super Slow",
  "Very Slow",
  "Slow",
  "Normal",
  "Fast",
  "Very Fast",
  "Super Fast",
];

export const SPRITE_ARMOUR = "sprite-armour"
export const SPRITE_ARMOUR_PALE = "sprite-armour-pale"
export const SPRITE_ELEMENT = "sprite-element"

// column and row of the material's helmet in the armour spritesheet
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

// column and row of element sprite in glyph spritesheet
export const SPRITE_MAP_ELEMENTS = {
  "neutral": [12, 0],
  "earth": [13, 0],
  "thunder": [14, 0],
  "water": [15, 0],
  "fire": [16, 0],
  "air": [17, 0],
  "strength": [8, 10],
  "dexterity": [9, 10],
  "intelligence": [10, 10],
  "defence": [11, 10],
  "agility": [12, 10],
}


export const ELEMENT_MAP_DAMAGE = {
  "baseDamage": "neutral",
  "baseEarthDamage": "earth",
  "baseThunderDamage": "thunder",
  "baseWaterDamage": "water",
  "baseFireDamage": "fire",
  "baseAirDamage": "air",
};

export const ELEMENT_MAP_DEFENCE = {
  "baseEarthDefence": "earth",
  "baseThunderDefence": "thunder",
  "baseWaterDefence": "water",
  "baseFireDefence": "fire",
  "baseAirDefence": "air",
};
