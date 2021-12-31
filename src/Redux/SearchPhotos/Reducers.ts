import { Basic } from "unsplash-js/dist/methods/photos/types";
import { IPhoto } from "../../@Types/photo";
import { SearchPhotosActionsType } from "../../@Types/types";
import { SearchPhotos } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: string;
  photos: IPhoto[];
  recent: string[];
}

export default function SearchPhotosReducer(
  state: initialState = { isLoading: false, error: "", photos: [], recent: [] },
  action: SearchPhotosActionsType
) {
  switch (action.type) {
    case SearchPhotos.SEARCH_BY_KEYWORD_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case SearchPhotos.SEARCH_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        photos: [...state.photos, action.payload],
        isLoading: false,
      };
    case SearchPhotos.SEARCH_BY_KEYWORD_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SearchPhotos.SEARCH_ADD_RECENT:
      return {
        ...state,
        recent: [...state.recent, action.payload].slice(-5),
      };
    case SearchPhotos.SEARCH_CLEAR_RECENT:
      return {
        ...state,
        recent: [] as string[],
      };

    default:
      return state;
  }
}
