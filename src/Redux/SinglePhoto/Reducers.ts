import { IPhoto } from "../../@Types/photo";
import { SinglePhoto } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: string;
  photo: IPhoto;
}

export default function SinglePhotoReducer(
  state: initialState = { isLoading: false, error: "", photo: {} as IPhoto },
  action: any // will be changed
) {
  switch (action.type) {
    case SinglePhoto.GET_SINGLE_PHOTO_START:
      return {
        ...state,
        photo: action.payload,
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
