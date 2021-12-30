import { IPhoto } from "../../@Types/photo";
import { SearchPhotos } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: string;
  photos: IPhoto[];
  recent: string[];
}

export default function SearchPhotosReducer(
  state: initialState = { isLoading: false, error: "", photos: [], recent: [] },
  action: any // will be changed
) {
  switch (action.type) {
    case SearchPhotos.SEARCH_BY_KEYWORD_START:
      return {
        ...state,
        photos: action.payload,
        isLoading: true,
        error: "",
      };
    case SearchPhotos.SEARCH_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        photos: action.payload,
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

    default:
      return state;
  }
}
