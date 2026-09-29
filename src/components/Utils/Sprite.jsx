import "./Sprite.css";
import {
  ARMOUR_ORDER,
  SPRITE_ARMOUR,
  SPRITE_ARMOUR_PALE,
  SPRITE_ELEMENT,
  SPRITE_MAP_ARMOUR,
  SPRITE_MAP_ELEMENTS,
} from "../../utils/constants";

function Sprite({ name, sheetClass, scale = 1, type = "", className = "" }) {
  let spriteData;
  let additionalCol = 0;
  if (sheetClass === SPRITE_ARMOUR || sheetClass === SPRITE_ARMOUR_PALE) {
    spriteData = SPRITE_MAP_ARMOUR[name];
    additionalCol = ARMOUR_ORDER.indexOf(type) ?? 0;
  }
  if (sheetClass === SPRITE_ELEMENT) {
    spriteData = SPRITE_MAP_ELEMENTS[name];
  }
  if (!spriteData) return null;

  const [col, row] = spriteData;
  const spriteStyle = {
    "--col": col + additionalCol,
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
