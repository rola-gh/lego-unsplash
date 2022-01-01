import { Basic } from "unsplash-js/dist/methods/photos/types";
import { SinglePhotoActionsType } from "../../@Types/types";
import { SinglePhoto } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: any;
  photo: Basic;
}

export default function SinglePhotoReducer(
  state: initialState = { isLoading: false, error: "", photo: {} as Basic },
  action: SinglePhotoActionsType
) {
  switch (action.type) {
    case SinglePhoto.GET_SINGLE_PHOTO_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case SinglePhoto.GET_SINGLE_PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.payload,
        isLoading: false,
      };
    case SinglePhoto.GET_SINGLE_PHOTO_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
