import { SearchPhotos } from "./Constants";
import { api } from "../../API";

export const searchByKeyword =
  (keyWord: string, page?: number): ((dispatch: any) => Promise<void>) =>
  async (dispatch: any) => {
    dispatch({ type: SearchPhotos.SEARCH_BY_KEYWORD_START });
    api.search
      .getPhotos({ query: keyWord, page: page && 1, perPage: 10 })
      .then((result) => {
        dispatch({
          type: SearchPhotos.SEARCH_BY_KEYWORD_SUCCESS,
          payload: result.response?.results,
          recent: keyWord,
        });
        dispatch({
          type: SearchPhotos.SEARCH_ADD_RECENT,
          payload: keyWord,
        });
      })
      .catch((error) => {
        dispatch({
          type: SearchPhotos.SEARCH_BY_KEYWORD_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };
export const searchClearRecent =
  (): ((dispatch: any) => Promise<void>) => async (dispatch: any) => {
    dispatch({ type: SearchPhotos.SEARCH_CLEAR_RECENT });
  };
