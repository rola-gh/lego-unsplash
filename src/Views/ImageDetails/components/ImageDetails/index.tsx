import React from "react";
import ImageActions from "./ImageActions";
import ImageInfo from "./ImageInfo";
import {ImgDetails} from "./styles";

function ImageDetails() {
  return (
    <ImgDetails>
      <ImageActions />
      <ImageInfo />
    </ImgDetails>
  )
}

export default ImageDetails

