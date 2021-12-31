import { SearchPhotos } from "./Constants";
import { api } from "../../API";
import { Dispatch } from "react";
import {
  ISearchClearRecent,
  SearchPhotosActionsType,
} from "../../@Types/types";

export const searchByKeyword =
  (
    keyWord: string,
    page?: number
  ): ((dispatch: Dispatch<SearchPhotosActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<SearchPhotosActionsType>) => {
    dispatch({ type: SearchPhotos.SEARCH_BY_KEYWORD_START });
    api.search
      .getPhotos({ query: keyWord, page: page && 1, perPage: 10 })
      .then((result) => {
        dispatch({
          type: SearchPhotos.SEARCH_BY_KEYWORD_SUCCESS,
          payload: result.response?.results,
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
  (): ((dispatch: Dispatch<ISearchClearRecent>) => Promise<void>) =>
  async (dispatch: Dispatch<ISearchClearRecent>) => {
    dispatch({ type: SearchPhotos.SEARCH_CLEAR_RECENT });
  };
