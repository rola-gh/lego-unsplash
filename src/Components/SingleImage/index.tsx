import ImageHeader from "./components/ImageHeader";
import Image from "./components/Image";
import ImageDetails from "./components/ImageDeatails";
import RelatedTags from "./components/RelatedTags";
import RelatedPhotos from './components/RelatedPhotos';
import { Container } from './styles';

import {useEffect} from 'react';
import {getSinglePhoto} from "../../Redux/SinglePhoto/Actions";
import {useSelector, useDispatch} from "react-redux";

export interface IRootState {
  SinglePhoto: {isLoading: boolean, error: string, photo: any}
}

function SinglePhoto () : JSX.Element {
  const dispatch=useDispatch();
  const selector=useSelector((state: IRootState)=>state);
  const {SinglePhoto}=selector;
  
    useEffect(() => {
        dispatch(getSinglePhoto("YnLJ3rM4VtI"));
      }, [])

    const {isLoading, error, photo}=SinglePhoto;
    const thePhoto = {...photo};
    const {urls, downloads, views, likes, location, exif, created_at, links, width, height} = thePhoto;
  
  return (
    <>
      {
        isLoading? <div>Page is Loading...</div> : 
        <>
          <ImageHeader download={{links, width, height}} />
          <Image urls={urls} />
          <ImageDetails actions={{downloads, views, likes}} info={{location, exif, created_at}} />
          <Container>
            <RelatedTags />
            <RelatedPhotos />
          </Container>
        </>
      }
    </>
  );
};

export default SinglePhoto;
