import { useCallback, useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhotos } from "../../Redux/AllPhotos/Actions";
import SearchContainer from "../../Components/Common/SearchContainer";
import ImagesList from "../../Components/ImageComponents/ImagesList";
import { AppState } from "../../Redux/store";

const Index = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1)

  const {
    AllPhotos: { photos },
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
  }, [page])

  return (
    <>
      <SearchContainer />
      {photos && <ImagesList photos={photos} />}
    </>
  );
};

export default Index;
