import { getRandomIndex } from "../utils/randomGen";
import ImageIcon from "./ImageIcon";

function YesterdayWeapon({ searchArray }) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const yesterdayWeapon = searchArray[getRandomIndex(searchArray.length, yesterday)];

  return (
    <div className="section">
      <h1>Yesterday's weapon was...</h1>
      <ImageIcon object={yesterdayWeapon} />
    </div>
  );
}

export default YesterdayWeapon;
