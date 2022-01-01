import React, { useState } from 'react';
import { ImageWrapper, ImageContainer, ImageTag, ImageIcon, Icon} from './styles';

interface Props {
  url: string;
};

function Image ({image}:any) {

  const [zoom, setZoom] = useState<Boolean>(false);
  const {url} = image;

  const handelZoom = () => {
        setZoom(!zoom);
    }

  return (
    <ImageWrapper onClick={handelZoom}>
        <ImageContainer zoom={zoom}>
          <ImageTag
            src={url}
            alt="Image"
          />
          <ImageIcon>
            <Icon width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M14.5 19.3l-6 6h4.8V28H4v-9.3h2.7v4.8l6-6 1.8 1.8zM18.7 4v2.7h4.8l-6 6 1.9 1.9 6-6v4.8H28V4h-9.3z"></path></Icon>
          </ImageIcon>
        </ImageContainer>
    </ImageWrapper>
  );
};

export default Image;


