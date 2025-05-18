import { fetchIcon } from "../utils/utils";
import "../styles/ImageIcon.css";

function ImageIcon({ object }) {
  return (
    <div className={`image-icon ${object.rarity} ${object.rarity}-border`}>
      <p>{object.internalName}</p>
      <img src={fetchIcon(object)} width="64" height="64" />
    </div>
  );
}

export default ImageIcon;
