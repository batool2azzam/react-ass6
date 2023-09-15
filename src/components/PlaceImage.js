import React from "react";
import { getImageUrl } from "./Utils";
import { useContext } from "react";
import { ImageSizeContext } from './MyContext.js';



const PlaceImage = ({ place }) => {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

export default PlaceImage;
