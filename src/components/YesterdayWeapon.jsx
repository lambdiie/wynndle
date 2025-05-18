import { getWeaponYesterday } from "../utils/randomGen";
import ImageIcon from "./ImageIcon";

function YesterdayWeapon() {
  const yesterday = getWeaponYesterday();

  return (
    <div className="section">
      <h1>Yesterday's weapon was...</h1>
      <ImageIcon object={yesterday} />
    </div>
  );
}

export default YesterdayWeapon;
