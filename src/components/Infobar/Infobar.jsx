import Modal from "react-modal";
import HowToPlayWeapon from "./HowToPlayWeapon";
import HowToPlayArmour from "./HowToPlayArmour";
import Statistics from "./Statistics";
import CurrentStreak from "./CurrentStreak";

import "./Infobar.css";
import ItemGuide from "./ItemGuide";

Modal.setAppElement("#root");

function Infobar({ statistics, gameType }) {
  return (
    <div className="infobar container">
      {gameType === "armour" ? <HowToPlayArmour /> : <HowToPlayWeapon />}
      <Statistics statistics={statistics} gameType={gameType} />
      <CurrentStreak currentStreak={statistics.currentStreak} />
      <ItemGuide />
    </div>
  );
}

export default Infobar;
