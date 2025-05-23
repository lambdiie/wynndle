import ImageIcon from "./ImageIcon";
import { useState, useEffect } from "react";
// import "../styles/Win.css";

function Win({ correctGuess, numTries }) {
  return (
    <div className="section">
      <p>
        You guessed the weapon in {numTries}{" "}
        {numTries === 1 ? "attempt" : "attempts"}!
      </p>
      <NextQuizDisplay />
      <ImageIcon object={correctGuess} />
    </div>
  );
}

function NextQuizDisplay() {
  const [time, setTime] = useState(getTimeToNextWeapon());

  function getTimeToNextWeapon() {
    const today = new Date();
    const hours = 23 - today.getHours();
    const minutes = 59 - today.getMinutes();
    const seconds = 59 - today.getSeconds();

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    const key = setInterval(() => {
      setTime(getTimeToNextWeapon());
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
      Next weapon in {time}
    </h1>
  );
}

export default Win;
