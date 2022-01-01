import React from 'react'
import { Link} from 'react-router-dom'
import { IPhoto } from '../../../@Types/photo'
import { Card } from './ImageCard.style'
import {CardWithHover, FavIcon, WrapperAuthorDownload} from "../ImageComp.style";
import FavoriteIcon from "../../Buttons/favorite";
import Author from "../../Common/Auther";
import DownloadIcon from "../../Buttons/download";

const Index:React.FC<{photo: IPhoto}> = ({photo}) => {
    return (
        <Card bg={photo?.color || ''}>
            <Link to={`/photo/${photo.id}`}>
                <img src={photo.urls.full} alt={photo.alt_description} loading='lazy'/>
            </Link>
            <div className='overlay'>
                <CardWithHover>
                    <FavIcon>
                        <FavoriteIcon color='#767676' height='15px' width='15px'/>
                    </FavIcon>
                    <WrapperAuthorDownload>
                        <Author authorName={photo.user.name}  authorImg={photo.user.profile_image.small}/>
                        <DownloadIcon   />
                    </WrapperAuthorDownload>
                </CardWithHover>
            </div>
        </Card>
    )
}

export default Index
