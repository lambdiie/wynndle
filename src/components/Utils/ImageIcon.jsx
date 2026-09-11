import ImageComponent from "./ImageComponent";
import "./ImageIcon.css";

function ImageIcon({ object }) {
  let fontSize = "1rem";
  if (object.displayName.length > 40) fontSize = "0.6rem";
  else if (object.displayName.length > 20) fontSize = "0.75rem";

  return (
    <div className={`image-icon ${object.tier} ${object.tier}-border`}>
      <p style={{ fontSize: fontSize }}>{object.displayName}</p>
      <ImageComponent object={object} width="64" height="64" />
    </div>
  );
}

export default ImageIcon;
