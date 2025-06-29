import ImageComponent from "../Utils/ImageComponent";

function ImageGuessItem({ text, object, classes }) {
  let fontSize = "0.75rem";
  if (text.length > 40) fontSize = "0.5rem";
  else if (text.length > 20) fontSize = "0.6rem";

  return (
    <div className={`guess-item image-item ${classes.toLowerCase()}`}>
      <p style={{ fontSize: fontSize }}>{text}</p>
      <ImageComponent object={object} width="32" height="32" />
    </div>
  );
}

export default ImageGuessItem;