import "./Input.css";
import magnify from "../../assets/magnify.svg";
import Autocomplete from "./Autocomplete";
import { useState } from "react";

function Input({ addGuess, guessArray, searchArray }) {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  function fetchItem(item) {
    const data = searchArray.find(
      (object) =>
        object.internalName.toLowerCase() === item.toLowerCase().trim()
    );

    return data;
  }

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleOnSubmit(e, guess = value) {
    e.preventDefault();
    const currentGuess = fetchItem(guess);
    if (
      currentGuess &&
      !guessArray.some(
        (item) => item.internalName === currentGuess.internalName
      )
    ) {
      addGuess(currentGuess);
      setValue("");
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
      <div className="container">
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
          searchArray={searchArray}
        />
      )}
    </div>
  );
}

export default Input;
