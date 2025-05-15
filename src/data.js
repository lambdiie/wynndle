async function fetchDatabase() {
  try {
    const response = await fetch(
      "https://corsproxy.io/?url=https://api.wynncraft.com/v3/item/database?fullResult",
      {
        mode: "cors",
      }
    );
    const json = await response.json();
    return json;
  } catch {
    // TODO: Make error handling a popup or something so user can see if something went wrong
    console.log("There was an error with calling the Wynncraft API, please try later or report the issue");
  }
}

const objectData = await fetchDatabase();
const dataArray = Object.keys(objectData).map((key) => objectData[key]);
const weaponArray = dataArray.filter(
  (item) => item.type === "weapon" && !(item.rarity === "common")
);

export { weaponArray };
