import React from 'react';
import SingleImage from '../../Components/SingleImage';
import images from '../../API/data';
import { ImgPage } from './styles';


export default function SingleImagePage() : JSX.Element{
  return (
    <ImgPage>
      <SingleImage images={images} />
    </ImgPage>
  );
}
