import { mdiPoll } from "@mdi/js";
import { capitalize } from "../../utils/utils";
import StyledModal from "./StyledModal";

function Statistics({ statistics, gameType }) {

  const typeEmoji =
    gameType === "armour"
      ? "👕"
      : gameType === "accessory"
      ? "💍"
      : gameType === "ingredient"
      ? "🍲"
      : "🗡️";

  return (
    <StyledModal icon={mdiPoll} title="Statistics" center>
      <h1 className="stat-title">
        {capitalize(gameType)} {typeEmoji}
      </h1>
      <h2>Games Won</h2>
      <p className="stat">{statistics.gamesWon}</p>
      <h2>Average Guesses</h2>
      <p className="stat">{statistics.averageGuesses.toFixed(1)}</p>
      <h2>Current Streak</h2>
      <p className="stat">{statistics.currentStreak}</p>
      <h2>Max Streak</h2>
      <p className="stat">{statistics.maxStreak}</p>
    </StyledModal>
  );
}

export default Statistics;
