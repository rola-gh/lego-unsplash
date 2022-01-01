import { SinglePhoto } from "./Constants";
import { api } from "../../API";
import { Dispatch } from "react";
import { SinglePhotoActionsType } from "../../@Types/types";

export const getSinglePhoto =
  (
    photoId: string
  ): ((dispatch: Dispatch<SinglePhotoActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<SinglePhotoActionsType>) => {
    dispatch({ type: SinglePhoto.GET_SINGLE_PHOTO_START });
    api.photos
      .get({ photoId: photoId })
      .then((result) => {
        dispatch({
          type: SinglePhoto.GET_SINGLE_PHOTO_SUCCESS,
          payload: result.response,
        });
      })
      .catch((error) => {
        dispatch({
          type: SinglePhoto.GET_SINGLE_PHOTO_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };
