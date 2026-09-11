import ImageComponent from "../Utils/ImageComponent";
import "./Autocomplete.css";

function Autocomplete({ value, guessArray, handleClick, searchArray }) {
  const filteredArray = searchArray.filter((item) => {
    const itemName = item.displayName.toLowerCase();
    const valueName = value.toLowerCase().trim();

    return (
      (itemName.startsWith(valueName) ||
        itemName.split(" ").some((word) => word.startsWith(valueName))) &&
      !guessArray.some((guess) => guess.displayName === item.displayName)
    );
  });

  if (value && filteredArray.length > 0) {
    return (
      <div className="autocomplete">
        {filteredArray.map((item) => (
          <div
            key={item.displayName}
            onClick={handleClick}
            data-name={item.displayName}
          >
            <ImageComponent object={item} width="32" height="32" />
            <p className={item.tier}>{item.displayName}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Autocomplete;
