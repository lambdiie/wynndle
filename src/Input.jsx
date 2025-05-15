import "./Input.css";
import magnify from "./assets/magnify.svg";
import Autocomplete from "./Autocomplete";
import { useState } from "react";
import { fetchWeapon } from "./utils";

function Input({ addGuess, guessArray }) {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleOnSubmit(e, guess = value) {
    try {
      e.preventDefault();
      const currentGuess = fetchWeapon(guess);
      if (
        guessArray.some((item) => item.weapon.name === currentGuess.weapon.name)
      )
        throw new Error();
      addGuess(currentGuess);
      setValue("");
    } catch {
      console.log("Invalid Guess!");
    }
  }

  function handleClick(e) {
    const newValue = e.currentTarget.dataset.name;
    setValue(newValue);
    handleOnSubmit(e, newValue);
  }

  function onFocus() {
    setFocus(true);
  }

  function onBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocus(false);
    }
  }

  return (
    <div className="input-autocomplete-container" tabIndex="0" onBlur={onBlur}>
      <div className="input-container">
        <form autoComplete="off" onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Type here to guess!"
            id="input"
            name="input"
            value={value}
            onChange={handleOnChange}
            onFocus={onFocus}
          />
          <button className="submit" type="submit">
            <img src={magnify} alt="" width="16" height="16" />
          </button>
        </form>
      </div>
      {focus && (
        <Autocomplete
          value={value}
          guessArray={guessArray}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default Input;
