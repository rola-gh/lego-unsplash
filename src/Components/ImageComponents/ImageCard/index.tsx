import React from 'react'
import { Link} from 'react-router-dom'
import { IPhoto } from '../../../@Types/photo'
import { Card } from './ImageCard.style'

const Index:React.FC<{photo: IPhoto}> = ({photo}) => {
    return (
        <Card bg={photo?.color || ''}>
            <Link to={`/photo/${photo.id}`}>
                <img src={photo.urls.full} alt={photo.alt_description} loading='lazy' 
                />
            </Link>
            <div className='overlay'></div>
        </Card>
    )
}

export default Index
