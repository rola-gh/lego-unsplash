import { DownloadPhotos } from "./Constants";
import { api } from "../../API";
import { Dispatch } from "react";
import { DownloadPhotosActionsType } from "../../@Types/types";

export const downloadPhoto =
  (
    photoId: string
  ): ((dispatch: Dispatch<DownloadPhotosActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<DownloadPhotosActionsType>) => {
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
