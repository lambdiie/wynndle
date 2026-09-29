import "./Sprite.css";
import {
  ARMOUR_ORDER,
  SPRITE_ARMOUR,
  SPRITE_ARMOUR_PALE,
  SPRITE_MAP_ARMOUR,
} from "../../utils/constants";

function Sprite({ name, scale = 1, className = "" }) {
  const spriteArray = name.split(/[._]/);
  const type = ARMOUR_ORDER.indexOf(spriteArray[0]);
  let material = "";
  let sheetClass = SPRITE_ARMOUR;

  if (spriteArray.length == 3) {
    // pale version
    sheetClass = SPRITE_ARMOUR_PALE;
    material = spriteArray[2];
  } else {
    material = spriteArray[1];
  }

  const spriteData = SPRITE_MAP_ARMOUR[material];
  if (!spriteData) return null;

  const [col, row] = spriteData;
  const spriteStyle = {
    "--col": col + type,
    "--row": row,
    "--scale": scale,
  };

  return (
    <span
      className={`sprite ${sheetClass} ${className}`}
      style={spriteStyle}
      role="img"
    />
  );
}

export default Sprite;
