import { weaponArray } from "./data";

function capitalize(str) {
  return str
    .split("_")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}

function fetchIcon(item) {
  return `https://cdn.wynncraft.com/nextgen/itemguide/3.3/${item.icon.value.name}.webp`;
}

function fetchWeapon(item) {
  const data = weaponArray.find(
    (weapon) => weapon.internalName.toLowerCase() === item.toLowerCase().trim()
  );

  return data;
}

export { capitalize, fetchWeapon, fetchIcon };
