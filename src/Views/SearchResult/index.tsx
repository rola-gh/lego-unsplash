import NotFound from '../../Components/NotFound/NotFound'
import Typography from '../../Components/Common/Typography/Typography'
import { useParams } from 'react-router'
import {useDispatch,useSelector} from 'react-redux'
import {searchByKeyword} from '../../Redux/SearchPhotos/Actions'
import { AppState } from '../../Redux/store'
import {useEffect} from 'react'
export default function SearchResult() {
  const dispatch = useDispatch()
  const { keyword } = useParams()
  const { SearchPhotos: {photos,error, isLoading }} = useSelector((state: AppState) => state);
  console.log(keyword,photos)

  const getWord = () => {
    if (keyword) {
      dispatch(searchByKeyword(keyword))
    }
  }
  useEffect(() => {
  getWord()
},[keyword])
  return (
    <div>
      <Typography variant='h2' color="pink"> Results for {keyword} </Typography>
      {photos.length ===0 && isLoading ?  <NotFound />:<div> There is data </div> }
      <NotFound />
    </div>
  )
}
