import Modal from "react-modal";
import HowToPlayWeapon from "./HowToPlayWeapon";
import HowToPlayArmour from "./HowToPlayArmour";
import Statistics from "./Statistics";
import CurrentStreak from "./CurrentStreak";
import Changelog from "./Changelog";

import "./Infobar.css";
import ItemGuide from "./ItemGuide";

Modal.setAppElement("#root");

function Infobar({ statistics, gameType }) {
  return (
    <div className="infobar container">
      {gameType === "armour" ? <HowToPlayArmour /> : <HowToPlayWeapon />}
      <Statistics statistics={statistics} gameType={gameType} />
      <CurrentStreak currentStreak={statistics.currentStreak} />
      <Changelog />
      <ItemGuide />
    </div>
  );
}

export default Infobar;
