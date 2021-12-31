import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getAllPhotos } from '../../Redux/AllPhotos/Actions'
import SearchContainer from '../../Components/Common/SearchContainer';
import ImagesList from '../../Components/ImageComponents/ImagesList';
import { AppState } from '../../Redux/store';

const Index = () => {
    const dispatch = useDispatch()

    const { AllPhotos:{photos} } = useSelector((state: AppState) => state)

    useEffect(() => {
        dispatch(getAllPhotos(1))
    }, [dispatch])

    return (
        <>
            <SearchContainer />
            {
                photos && 
                <ImagesList photos={photos}/>
            }
        </>
    )
}

export default Index
