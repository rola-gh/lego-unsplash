import { DownloadPhotos } from "./Constants";
import { api } from "../../API";

export const downloadPhoto =
  (photoId: string): ((dispatch: any) => Promise<void>) =>
  async (dispatch: any) => {
    dispatch({ type: DownloadPhotos.DOWNLOAD_PHOTO_START });
    api.photos
      .get({ photoId: photoId })
      .then((result) => {
        if (result.type === "success") {
          const photo = result.response;
          api.photos.trackDownload({
            downloadLocation: photo.links.download_location,
          });
          dispatch({
            type: DownloadPhotos.DOWNLOAD_PHOTO_SUCCESS,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: DownloadPhotos.DOWNLOAD_PHOTO_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };
