import React, { useEffect, useState } from "react";
import ImageHeader from "./components/ImageHeader";
import Image from "./components/Image";
import RelatedTags from "./components/RelatedTags";
import RelatedPhotos from "./components/RelatedPhotos";
import { Container } from "./styles";
import ImageDetails from "./components/ImageDetails";
import { useParams } from "react-router-dom";
import { getSinglePhoto } from "../../Redux/SinglePhoto/Actions";
import {useDispatch, useSelector} from 'react-redux'
import { AppState } from "../../Redux/store";

const Index: React.FC = () => {
  const { id } = useParams();

  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const {photo}  = useSelector((state:AppState) => state.SinglePhoto);

  useEffect(() => {
    if(id){
      dispatch(getSinglePhoto(id as string))
    }
  }, [id]);

  useEffect(() => {
    console.log(photo)
    setImage(photo)
  }, [photo])

  return (
    <>
    {
      image && <>
        <ImageHeader image={image}/>
        <Image image={image} />
        <ImageDetails />
        <Container>
          <RelatedTags />
          <RelatedPhotos />
        </Container>
      </>
    }
    </>
  );
};

export default Index;
