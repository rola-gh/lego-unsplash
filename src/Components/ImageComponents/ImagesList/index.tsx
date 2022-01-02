import { IPhoto } from "../../../@Types/photo"
import ImageCard from '../ImageCard'
import {List, Container} from './ImagesList.style';
import Loading from '../../Common/Spinner/Loading'
import { useEffect, useState } from "react";
import { generatePhotoArraies, IPhotos } from "../../../Utils/helpers";

interface IProps{
    photos: IPhoto[]
}

const Index: React.FC<IProps> = ({photos}) => {
    const [images, setImages] = useState<IPhotos>();

    useEffect(() => {
        setImages(generatePhotoArraies(photos))
    }, [photos])

    return (
        <Container>
            <List>
                {
                    photos.length > 0 &&
                    <>
                        <div>
                            {
                                images?.array1.map(image => <ImageCard key={image.id} photo={image}/>)
                            }
                        </div>
                        <div>
                            {
                                images?.array2.map(image => <ImageCard key={image.id} photo={image}/>)
                            }
                        </div>
                        <div>
                            {
                                images?.array3.map(image => <ImageCard key={image.id} photo={image}/>)
                            }
                        </div>
                    </>
                }
            </List>
            <Loading />
        </Container>
    )
}

export default Index
