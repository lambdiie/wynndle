import "./Input.css";
import magnify from "./assets/magnify.svg";
import { useState } from "react";
import { capitalize, fetchData } from "./utils";

function Input({ addGuess }) {
  const [value, setValue] = useState("");

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  async function handleOnSubmit(e) {
    try {
      e.preventDefault();
      const data = await fetchData(value);

      const currentGuess = {
        // TODO: Add weapon image to display
        // icon: data.icon,
        weapon: data.internalName,
        class: capitalize(data.requirements.classRequirement),
        // TODO: change level to level range
        level: data.requirements.level,
        dps: data.averageDps,
        speed: capitalize(data.attackSpeed),
        rarity: capitalize(data.rarity),
        powders: data.powderSlots ?? 0,
        untradeable: data.restrictions === "untradeable" ? "Yes" : "No",
      };

      addGuess(currentGuess);
      setValue("");
    } catch {
      console.log("invalid");
    }
  }

  return (
    <div className="input-container">
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Type here to guess!"
          id="input"
          name="input"
          value={value}
          onChange={handleOnChange}
        />
        <button className="submit" type="submit">
          <img src={magnify} alt="" width="16" height="16" />
        </button>
      </form>
    </div>
  );
}

export default Input;
