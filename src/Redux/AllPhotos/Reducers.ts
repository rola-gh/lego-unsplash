import { IPhoto } from "../../@Types/photo";
import { AllPhotos } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: string;
  photos: IPhoto[];
}

export default function AllPhotosReducer(
  state: initialState = { isLoading: false, error: "", photos: [] },
  action: any // will be changed
) {
  switch (action.type) {
    case AllPhotos.GET_ALL_PHOTOS_START:
      return {
        ...state,
        photos: action.payload,
        isLoading: true,
        error: "",
      };
    case AllPhotos.GET_ALL_PHOTOS_SUCCESS:
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
