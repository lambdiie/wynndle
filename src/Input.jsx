import "./Input.css";
import magnify from "./assets/magnify.svg";
import { useState } from "react";
import { fetchWeapon } from "./utils";

function Input({ addGuess }) {
  const [value, setValue] = useState("");

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  async function handleOnSubmit(e) {
    try {
      e.preventDefault();
      const currentGuess = await fetchWeapon(value);
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
