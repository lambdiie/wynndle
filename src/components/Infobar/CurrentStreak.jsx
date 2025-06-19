import Icon from "@mdi/react";
import { Tooltip } from "react-tooltip";
import { mdiFire } from "@mdi/js";

function CurrentStreak({ currentStreak }) {
  return (
    <div>
      <button
        data-tooltip-id="current-streak"
        data-tooltip-content={`Current Streak: ${currentStreak}`}
        data-tooltip-place="bottom"
      >
        <Icon path={mdiFire} size={1.1} color="var(--background-main)" />
        <p>{currentStreak}</p>
      </button>
      <Tooltip id="current-streak" />
    </div>
  );
}

export default CurrentStreak;