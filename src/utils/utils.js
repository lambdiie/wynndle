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

function fetchIcon(item) {
  return `https://cdn.wynncraft.com/nextgen/itemguide/3.3/${item.icon.value.name}.webp`;
}

function simplifyObject(data) {
  return {
    name: data.internalName,
    icon: fetchIcon(data),
    class: capitalize(data.requirements.classRequirement),
    level: data.requirements.level,
    dps: data.averageDps ?? 0,
    speed: capitalize(data.attackSpeed),
    rarity: capitalize(data.rarity),
    powders: data.powderSlots ?? 0,
    elements: data.base ? [...Object.keys(data.base)] : [],
  };
}

function getCorrect(guessAttribute, correctGuessAttribute, key) {
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
    return getCorrectElements(guessAttribute, correctGuessAttribute);
  }
  if (guessAttribute === correctGuessAttribute) return "correct";
  else if (
    (key === "level" &&
      Math.abs(guessAttribute - correctGuessAttribute) <= 5) ||
    (key === "dps" && Math.abs(guessAttribute - correctGuessAttribute) <= 50) ||
    (key === "speed" && Math.abs(speedArray.indexOf(guessAttribute) - speedArray.indexOf(correctGuessAttribute)) <= 1)
  )
    return "close";
  return "incorrect";
}

function getCorrectElements(guessElements, correctGuessElements) {
  let correct = guessElements.length === correctGuessElements.length;
  let close = false;

  guessElements.forEach((elem) => {
    if (correctGuessElements.includes(elem)) {
      close = true;
    } else {
      correct = false;
    }
  });

  if (correct) return "correct";
  if (close) return "close";
  return "incorrect";
}

export { capitalize, getDateString, fetchIcon, simplifyObject, getCorrect };
