import { getWeaponYesterday } from "../utils/randomGen";
import { fetchIcon } from "../utils/utils";
import "../styles/YesterdayWeapon.css";

function YesterdayWeapon() {
  const yesterday = getWeaponYesterday();

  return (
    <div className="yesterday">
      <h1>Yesterday's weapon was...</h1>
      <div className={`image-icon ${yesterday.rarity} ${yesterday.rarity}-border`}>
        <p>{yesterday.internalName}</p>
        <img src={fetchIcon(yesterday)} width="64" height="64" />
      </div>
    </div>
  );
}

export default YesterdayWeapon;
