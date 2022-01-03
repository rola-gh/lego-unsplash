import { DownloadPhotos } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: string;
}

export default function DownloadPhotosReducer(
  state: initialState = { isLoading: false, error: "" },
  action: any // will be changed
) {
  switch (action.type) {
    case DownloadPhotos.DOWNLOAD_PHOTO_START:
      return {
        ...state,
        photos: action.payload,
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
