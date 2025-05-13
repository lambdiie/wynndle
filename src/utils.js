function capitalize(str) {
  return str
    .split("_")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}

async function fetchData(value) {
  const response = await fetch(`https://nori.fish/api/item/get/${value}`, {
    mode: "cors",
  });
  const json = await response.json();
  const data = Object.values(json)[0];
  return data;
}

export { capitalize, fetchData };
