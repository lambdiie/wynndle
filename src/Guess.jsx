import "./Guess.css";

function Guess({ guess, correctGuess }) {
  const keys = Object.keys(guess);

  return (
    <li className="row guess">
      {keys.map((key) => {
        let hint = "";
        if (typeof guess[key] === "number") {
          if (correctGuess[key] > guess[key]) hint = "↑";
          if (correctGuess[key] < guess[key]) hint = "↓";
        }

        return (
          <GuessItem
            key={key}
            text={guess[key]}
            correct={guess[key] === correctGuess[key]}
            hint={hint}
          />
        );
      })}
    </li>
  );
}

function GuessItem({ text, correct, hint }) {
  return (
    <div className={`guess-item ${correct ? "correct" : "incorrect"}`}>
      {text} {hint}
    </div>
  );
}

export default Guess;
