import React from 'react';
import Button from '../Common/IconButton';

interface ImageTagsProps  {
     text:string;
}

const ImageTags: React.FC<ImageTagsProps> = ({text}) =>
    <Button onClick={(e) =>console.log(e)}>
        <p>{text}</p>
    </Button>

export default ImageTags