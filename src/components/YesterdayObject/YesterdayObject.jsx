import { getRandomIndex } from "../../utils/randomGen";
import ImageIcon from "../Utils/ImageIcon";

function YesterdayObject({ searchArray, gameType }) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const yesterdayObject = searchArray[getRandomIndex(searchArray.length, yesterday)];

  return (
    <div className="section">
      <h1>Yesterday's {gameType} was...</h1>
      <ImageIcon object={yesterdayObject} />
    </div>
  );
}

export default YesterdayObject;
