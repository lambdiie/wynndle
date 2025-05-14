import "./Guess.css";

function Guess({ guess, correctGuess }) {
  const keys = Object.keys(guess);

  return (
    <li className="row guess">
      {keys.map((key) => {
        if (key === "weapon") {
          return (
            <ImageGuessItem
              key={key}
              text={guess[key].name}
              icon={guess[key].icon}
              rarity={guess.rarity}
            />
          );
        }

        let hint = "";
        if (typeof guess[key] === "number" || key === "speed") {
          let correctGuessAttribute = correctGuess[key];
          let guessAttribute = guess[key];

          if (key === "speed") {
            const speedArray = ["Super Slow", "Very Slow", "Slow", "Normal", "Fast", "Very Fast", "Super Fast"];
            correctGuessAttribute = speedArray.indexOf(correctGuess[key]);
            guessAttribute = speedArray.indexOf(guess[key]);
          }
          if (correctGuessAttribute > guessAttribute) hint = "↑";
          if (correctGuessAttribute < guessAttribute) hint = "↓";
        }
        

        return (
          <GuessItem
            key={key}
            text={guess[key]}
            correct={guess[key] === correctGuess[key]}
            hint={hint}
            rarity={key === "rarity" ? guess.rarity : ""}
          />
        );
      })}
    </li>
  );
}

function GuessItem({ text, correct, hint, rarity }) {
  return (
    <div
      className={`guess-item ${correct ? "correct" : "incorrect"} ${rarity} ${rarity ? "rarity" : ""}`}
    >
      <p>
        {text} {hint}
      </p>
    </div>
  );
}

function ImageGuessItem({ text, icon, rarity }) {
  return (
    <div className={`guess-item image-item ${rarity}`}>
      <p>{text}</p>
      <img src={icon} alt={text} width="32" height="32" />
    </div>
  );
}

export default Guess;
