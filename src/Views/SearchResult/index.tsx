import NotFound from '../../Components/NotFound/NotFound'
import Typography from '../../Components/Common/typography'
import { useParams } from 'react-router'
import {useDispatch,useSelector} from 'react-redux'
import {searchByKeyword} from '../../Redux/SearchPhotos/Actions'
import { AppState } from '../../Redux/store'
import { useEffect } from 'react'
import ImagesList from '../../Components/ImageComponents/ImagesList';

export default function SearchResult() {
  const dispatch = useDispatch()
  const { keyword } = useParams()
  const { SearchPhotos: {photos, isLoading }} = useSelector((state: AppState) => state);


  useEffect(() => {
     if (keyword) {
      dispatch(searchByKeyword(keyword,2))
      }
  },[])

  return (
    <>
      <Typography variant='h2' color="black" >
       <span> Results for  {keyword}  </span> 
      </Typography>
      {isLoading && <NotFound /> }
      {photos && <ImagesList photos = {photos} />}
    </>
  )
}
