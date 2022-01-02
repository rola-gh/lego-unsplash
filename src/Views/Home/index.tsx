import { useCallback, useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhotos } from "../../Redux/AllPhotos/Actions";
import SearchContainer from "../../Components/Common/SearchContainer";
import ImagesList from "../../Components/ImageComponents/ImagesList";
import { AppState } from "../../Redux/store";
import { getRandomSinglePhoto } from "../../Redux/Random/Actions";

const Index = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1)

  const {
    AllPhotos: { photos },
    RandomSinglePhoto: { photo }
  } = useSelector((state: AppState) => state);

  const infiniteScroll = useCallback(() => {
    let Height = window.innerHeight + window.scrollY;
    let bottom = document.documentElement.offsetHeight;
    if (Height >= bottom) {
      setPage(page + 1)
    }
  }, [page, dispatch])

  useEffect(() => {
    dispatch(getAllPhotos(page));
    window.addEventListener('scroll', infiniteScroll)
    return () => window.removeEventListener('scroll',infiniteScroll)
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPhotos(page));
    dispatch(getRandomSinglePhoto())
  }, [page])

  return (
    <>
      <SearchContainer imageUrl={photo?.urls?.small}/>
      {photos && <ImagesList photos={photos} />}
    </>
  );
};

export default Index;
