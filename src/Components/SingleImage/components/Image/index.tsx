import React, { useState } from 'react';
import { ImageWrapper, ImageContainer, ImageTag, ImageIcon, Icon} from './styles';

interface IImage {
  urls: {
    regular: string
  } 
};

function Image ({urls}:IImage) {

  const [zoom, setZoom] = useState<Boolean>(false);
  let url = urls?.regular;
  
  const handelZoom = () => {
        setZoom(!zoom);
    }

  return (
    <ImageWrapper>
        <ImageContainer onClick={handelZoom} zoom={zoom}>
          <ImageTag
            src={url}
            alt="Image"
          />
          <ImageIcon>
            {
              zoom?
             <Icon width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M22 12h4.8v2.7h-9.5V5.2H20V10l6.1-6L28 5.9 22 12zM5.2 20H10l-6 6.1L5.9 28l6.1-6v4.8h2.7v-9.5H5.2V20z"></path></Icon>:
             <Icon width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M14.5 19.3l-6 6h4.8V28H4v-9.3h2.7v4.8l6-6 1.8 1.8zM18.7 4v2.7h4.8l-6 6 1.9 1.9 6-6v4.8H28V4h-9.3z"></path></Icon>
            }
          </ImageIcon>
        </ImageContainer>
    </ImageWrapper>
  );
};

export default Image;


