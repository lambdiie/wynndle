function capitalize(str) {
  return str
    .split("_")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}

function getDateString(date = new Date()) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateString = `${day}${month}${year}`;

  return dateString;
}

function simplifyObject(data) {
  if (data.type === "armour") return simplifyArmour(data);
  return simplifyWeapon(data);
}

function simplifyWeapon(data) {
  return {
    name: data.internalName,
    type: data.type,
    class: capitalize(data.requirements.classRequirement),
    level: data.requirements.level,
    dps: data.averageDps ?? 0,
    speed: capitalize(data.attackSpeed),
    rarity: capitalize(data.rarity),
    powders: data.powderSlots ?? 0,
    elements: data.base ? [...Object.keys(data.base)] : [],
  };
}

function simplifyArmour(data) {
  const skillPointsArray = [
    "strength",
    "dexterity",
    "intelligence",
    "defence",
    "agility",
  ];

  return {
    name: data.internalName,
    type: data.type,
    armourType: capitalize(data.armourType),
    level: data.requirements.level,
    health: data.base ? data.base.baseHealth ?? 0 : 0,
    skillPoints: Object.keys(data.requirements)
      .filter((item) => skillPointsArray.includes(item)),
    rarity: capitalize(data.rarity),
    powders: data.powderSlots ?? 0,
    elements: data.base
      ? [...Object.keys(data.base).filter((item) => item !== "baseHealth")]
      : [],
  };
}

function getHint(guessNum, correctGuessNum) {
  let hint = "";
  if (correctGuessNum > guessNum) hint = "↑";
  if (correctGuessNum < guessNum) hint = "↓";
  return hint;
}

function getCorrect(guess, correctGuess, key) {
  const guessAttribute = guess[key];
  const correctGuessAttribute = correctGuess[key];

  if (guess.type === "armour")
    return getCorrectArmour(guessAttribute, correctGuessAttribute, key);
  return getCorrectWeapon(guessAttribute, correctGuessAttribute, key);
}

function getCorrectWeapon(guessAttribute, correctGuessAttribute, key) {
  const speedArray = [
    "Super Slow",
    "Very Slow",
    "Slow",
    "Normal",
    "Fast",
    "Very Fast",
    "Super Fast",
  ];

  if (key === "elements") {
    return getCorrectArray(guessAttribute, correctGuessAttribute);
  }
  if (guessAttribute === correctGuessAttribute) return "correct";
  else if (
    (key === "level" &&
      Math.abs(guessAttribute - correctGuessAttribute) <= 5) ||
    (key === "dps" && Math.abs(guessAttribute - correctGuessAttribute) <= 50) ||
    (key === "speed" &&
      Math.abs(
        speedArray.indexOf(guessAttribute) -
          speedArray.indexOf(correctGuessAttribute)
      ) <= 1)
  )
    return "close";
  return "incorrect";
}

function getCorrectArmour(guessAttribute, correctGuessAttribute, key) {
  if (key === "skillPoints" || key === "elements") {
    return getCorrectArray(guessAttribute, correctGuessAttribute);
  }
  if (guessAttribute === correctGuessAttribute) return "correct";
  else if (
    (key === "level" &&
      Math.abs(guessAttribute - correctGuessAttribute) <= 5) ||
    (key === "health" &&
      Math.abs(guessAttribute - correctGuessAttribute) <= 300)
  )
    return "close";
  return "incorrect";
}

function getCorrectArray(guessArr, correctGuessArr) {
  let correct = guessArr.length === correctGuessArr.length;
  let close = false;

  guessArr.forEach((item) => {
    if (correctGuessArr.includes(item)) {
      close = true;
    } else {
      correct = false;
    }
  });

  if (correct) return "correct";
  if (close) return "close";
  return "incorrect";
}

export {
  capitalize,
  getDateString,
  simplifyObject,
  getCorrect,
  getHint,
};
