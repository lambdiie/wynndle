import "../styles/IDDisplay.css";

function IDDisplay({ id, contents }) {
  function capitalizeID(name) {
    const newName = name
      .replace(/raw/gi, "")
      .replace(/([A-Z])/g, " $1")
      .trim();

    return newName.at(0).toUpperCase() + newName.slice(1);
  }

  if (id === "No IDs") return <p className="id">{id}</p>;
  else if (typeof contents === "number") {
    return (
      <p className="id">
        <IDValueDisplay id={id} raw={contents} /> {capitalizeID(id)}
      </p>
    );
  } else {
    return (
      <p className="id">
        <IDValueDisplay id={id} min={contents.min} max={contents.max} />{" "}
        {capitalizeID(id)}
      </p>
    );
  }
}

function IDValueDisplay({ id, raw, min, max }) {
  function findFormat(id) {
    if (id === "rawAttackSpeed") return " tier";
    if (id === "manaSteal" || id === "lifeSteal" || id === "poison")
      return "/3s";
    if (id === "manaRegen") return "/5s";
    if (id.toLowerCase().includes("raw") || id === "jumpHeight") return "";
    else return "%";
  }

  if (raw !== undefined) {
    let idValue = "" + raw;
    if (raw >= 0) idValue = "+" + idValue;
    idValue += findFormat(id);

    if (id.toLowerCase().includes("spellcost")) raw *= -1;

    return <span className={raw >= 0 ? "greenID" : "redID"}>{idValue}</span>;
  } else {
    let minValue = "" + min;
    let maxValue = "" + max;
    if (min >= 0) minValue = "+" + minValue;
    if (max >= 0) maxValue = "+" + maxValue;
    maxValue += findFormat(id);

    if (id.toLowerCase().includes("spellcost")) max *= -1;

    return (
      <span className={max >= 0 ? "greenID" : "redID"}>
        {minValue}{" "}
        <span className={max >= 0 ? "greenIDName" : "redIDName"}>to</span>{" "}
        {maxValue}
      </span>
    );
  }
}

export default IDDisplay;
