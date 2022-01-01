import React from 'react';
import ImageHeader from "./components/ImageHeader";
import Image from "./components/Image";
import RelatedTags from "./components/RelatedTags";
import RelatedPhotos from './components/RelatedPhotos';
import { Container } from './styles';
import ImageDetails from './components/ImageDetails';

// interface Props {
//   images: string[];
// }

// const Index: React.FC<Props> = ({
const Index: React.FC = () => {
    const image = {url: ""};
    return (
      <>
        <ImageHeader />
        <Image image={image} />
        <ImageDetails />
        <Container>
          <RelatedTags />
          <RelatedPhotos />
        </Container>
      </>
      
    );
};

export default Index;
