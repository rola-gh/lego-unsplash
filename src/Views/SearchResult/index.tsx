import NotFound from "../../Components/NotFound/NotFound";
import Typography from "../../Components/Common/Typography";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchByKeyword } from "../../Redux/SearchPhotos/Actions";
import { AppState } from "../../Redux/store";
import { useCallback, useEffect, useState } from "react";
import ImagesList from "../../Components/ImageComponents/ImagesList";
import { Title } from "./styles";

export default function SearchResult() {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);

  const { keyword } = useParams();
  const {
    SearchPhotos: { photos, isLoading },
  } = useSelector((state: AppState) => state);

  const infiniteScroll = useCallback(() => {
    let Height = window.innerHeight + window.scrollY;
    let bottom = document.documentElement.offsetHeight;
    if (Height >= bottom) {
      dispatch(searchByKeyword(keyword as string, page));
      setPage(page + 1);
    }
  }, [page, dispatch]);

  useEffect(() => {
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [dispatch]);

  window.addEventListener("scroll", infiniteScroll);

  useEffect(() => {
    if (keyword) {
      dispatch(searchByKeyword(keyword));
    }
  }, [keyword, dispatch]);

  return (
    <>
      <Typography variant="h2" color="black" style={{ marginTop: "1em" }}>
        <Title> Results for {keyword}</Title>
      </Typography>
      {isLoading && <NotFound />}
      {photos && <ImagesList photos={photos} />}
    </>
  );
}
