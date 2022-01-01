import { Basic } from "unsplash-js/dist/methods/photos/types";
import { AllPhotosActionsType } from "../../@Types/types";
import { AllPhotos } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: any;
  photos: Basic[];
}

export default function AllPhotosReducer(
  state: initialState = { isLoading: false, error: "", photos: [] },
  action: AllPhotosActionsType
) {
  switch (action.type) {
    case AllPhotos.GET_ALL_PHOTOS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case AllPhotos.GET_ALL_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [...state.photos].concat(action.payload),
        isLoading: false,
      };
    case AllPhotos.GET_ALL_PHOTOS_NEW_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        isLoading: false,
      };
    case AllPhotos.GET_ALL_PHOTOS_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
