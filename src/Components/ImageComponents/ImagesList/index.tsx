import { IPhoto } from "../../../@Types/photo"
import ImageCard from '../ImageCard'
import {List, Container} from './ImagesList.style';
import Loading from '../../Common/Spinner/Loading'
interface IProps{
    photos: IPhoto[]
}

const Index: React.FC<IProps> = ({photos}) => {
    console.log(photos);
    return (
        <Container>
            <List>
                {
                    // photos.length > 0 &&
                    // <>
                    //     <div>
                    //         <ImageCard photo={photos[0]}/>
                    //         <ImageCard photo={photos[5]}/>
                    //         <ImageCard photo={photos[3]}/>
                    //     </div>
                    //     <div>
                    //         <ImageCard photo={photos[1]}/>
                    //         <ImageCard photo={photos[0]}/>
                    //         <ImageCard photo={photos[2]}/>
                    //     </div>
                    //     <div>
                    //         <ImageCard photo={photos[0]}/>
                    //         <ImageCard photo={photos[2]}/>
                    //         <ImageCard photo={photos[4]}/>
                    //     </div>
                    // </>
                    photos && photos.map((photo,index) => 
                       ( <div key={index}> 
                            <ImageCard photo={photo}/>

                        </div>)
                    )
                }
                <Loading />
            </List>
        </Container>
    )
}

export default Index
