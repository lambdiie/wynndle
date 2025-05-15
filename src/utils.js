import { weaponArray } from "./data";

function capitalize(str) {
  return str
    .split("_")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}

function fetchWeaponIcon(item) {
  return `https://cdn.wynncraft.com/nextgen/itemguide/3.3/${item.icon.value.name}.webp`;
}

function fetchWeapon(item) {
  const data = fetchWeaponFull(item);

  const weaponInfo = {
    weapon: {
      name: data.internalName,
      icon: fetchWeaponIcon(data),
    },
    class: capitalize(data.requirements.classRequirement),
    level: data.requirements.level,
    dps: data.averageDps,
    speed: capitalize(data.attackSpeed),
    rarity: capitalize(data.rarity),
    powders: data.powderSlots ?? 0,
    untradeable: data.restrictions === "untradeable" ? "Yes" : "No",
  };

  return weaponInfo;
}

function fetchWeaponFull(item) {
  const data = weaponArray.find(
    (weapon) => weapon.internalName.toLowerCase() === item.toLowerCase().trim()
  );

  return data;
}

export { fetchWeapon, fetchWeaponFull, fetchWeaponIcon };
