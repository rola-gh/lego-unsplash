import { DownloadPhotosActionsType } from "../../@Types/types";
import { DownloadPhotos } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: any;
}

export default function DownloadPhotosReducer(
  state: initialState = { isLoading: false, error: "" },
  action: DownloadPhotosActionsType
) {
  switch (action.type) {
    case DownloadPhotos.DOWNLOAD_PHOTO_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case DownloadPhotos.DOWNLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case DownloadPhotos.DOWNLOAD_PHOTO_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
