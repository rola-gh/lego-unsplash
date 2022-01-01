import { Basic } from "unsplash-js/dist/methods/photos/types";
import { SearchPhotosActionsType } from "../../@Types/types";
import { SearchPhotos } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: any;
  photos: Basic[];
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
        photos: [...state.photos].concat(action.payload),
        isLoading: false,
      };
    case SearchPhotos.SEARCH_BY_KEYWORD_NEW_SUCCESS:
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
        recent: [...state.recent, action.payload]
          .slice(-5)
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          }),
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
