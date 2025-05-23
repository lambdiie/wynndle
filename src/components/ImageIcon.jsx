import { fetchIcon } from "../utils/utils";
import "../styles/ImageIcon.css";

function ImageIcon({ object }) {
  let fontSize = "1rem";
  if (object.internalName.length > 20) fontSize = "0.75rem";

  return (
    <div className={`image-icon ${object.rarity} ${object.rarity}-border`}>
      <p style={{ fontSize: fontSize }}>{object.internalName}</p>
      <img src={fetchIcon(object)} width="64" height="64" />
    </div>
  );
}

export default ImageIcon;
