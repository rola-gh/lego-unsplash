import React from 'react';
import ImageHeader from "./components/ImageHeader";
import Image from "./components/Image";
import ImageDeatails from "./components/ImageDeatails";
import RelatedTags from "./components/RelatedTags";
import RelatedPhotos from './components/RelatedPhotos';
import { Container } from './styles';

interface Props {
  images: string[];
}

const singleImage: React.FC<Props> = ({
  images }) => {
    const image = {url: String(images[1])};
    return (
      <>
        <ImageHeader />
        <Image image={image} />
        <ImageDeatails />

        <Container>
          <RelatedTags />
          <RelatedPhotos />
        </Container>
        
      </>
      
    );
};

export default singleImage;
