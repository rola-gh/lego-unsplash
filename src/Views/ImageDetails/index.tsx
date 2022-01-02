import React, { useEffect } from "react";
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

interface ITag{
  type: string
  title: string
}

const Index: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {photo, error}  = useSelector((state:AppState) => state.SinglePhoto);

  useEffect(() => {
    if(id){
      dispatch(getSinglePhoto(id as string))
    }
  }, [id]);

  return (
    <>
    {
      error && <>Something went wrong !!</>
    }
    {
      photo && <>
        <ImageHeader image={photo}/>
        <Image image={photo} />
        <ImageDetails />
        <Container>
          <RelatedTags tags={photo?.tags?.map((tag:ITag) => tag?.title)}/>
          <RelatedPhotos />
        </Container>
      </>
    }
    </>
  );
};

export default Index;
