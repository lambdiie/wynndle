import { useState, useEffect, useRef } from "react";
import "./Image.css";
import Sprite from "./Sprite";

function ImageComponent({ object, width, height }) {
  const styles = {
    width: `${width / 16}rem`,
    height: `${height / 16}rem`,
  };
  const scale = width / 32;

  function fetchIcon(item) {
    if (item.type == "armour") {
      if (item.icon && item.icon.format === "skin")
        return `https://mc-heads.net/head/${item.icon.value}`;
      return `https://cdn.wynncraft.com/nextgen/items/v2/sprites/${item.subType}.png`;
    }
    if (item.icon.format === "legacy") {
      return `https://cdn.wynncraft.com/nextgen/itemguide/3.3/${item.icon.value
        .split(":")
        .join("_")}.webp`;
    }
    return `https://cdn.wynncraft.com/nextgen/itemguide/3.3/${item.icon.value.name}.webp`;
  }

  if (
    object.type === "armour" &&
    object.icon &&
    object.icon.format !== "skin"
  ) {
    return (
      <div className="image-container" style={styles}>
        <Sprite name={object.icon.value.name} scale={scale} />
      </div>
    );
  }

  return (
    <img src={fetchIcon(object)} width={width} height={height} style={styles} />
  );
}

function RecolourImage({ src, width, height, style, rgb }) {
  const canvasRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  function parseRGB(rgb) {
    const rgbArr = rgb.match(/\d+/g);
    return rgbArr;
  }

  useEffect(() => {
    if (!src) return;

    // Load image
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    img.onload = () => {
      // Create canvas
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.width;
      canvas.height = img.height;

      const context = canvas.getContext("2d", { willReadFrequently: true });
      context.drawImage(img, 0, 0);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Recolour
      const rgbArr = parseRGB(rgb);
      for (let i = 0; i < data.length; i += 4) {
        // Red channel of pixel, if white, determines how white/black resulting colour should be
        const colour = data[i] / 255;

        // Red
        data[i] = rgbArr[0] * colour;

        // Green
        data[i + 1] = rgbArr[1] * colour;

        // Blue
        data[i + 2] = rgbArr[2] * colour;
      }

      context.putImageData(imageData, 0, 0);
      setImageUrl(canvas.toDataURL());
    };
  }, [src, rgb]);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      {imageUrl && (
        <img src={imageUrl} width={width} height={height} style={style} />
      )}
    </>
  );
}

export default ImageComponent;
