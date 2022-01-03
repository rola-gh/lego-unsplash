import React from "react";
import ImageActions from "./ImageActions";
import ImageInfo from "./ImageInfo";
import {ImgDetails} from "./styles";

export interface IDetails {
  actions: {
    downloads: number,
    views: number,
    likes: number
  },
  info: {
    location: {name: string },
    exif: {name: string },
    created_at: Date
  }
}

function ImageDetails({actions, info}: IDetails): JSX.Element {

  return (
    <ImgDetails>
      <ImageActions actions={actions} />
      <ImageInfo info={info} />
    </ImgDetails>
  )
}

export default ImageDetails

