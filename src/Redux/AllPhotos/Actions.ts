import { AllPhotos } from "./Constants";
import { api } from "../../API";
import { Dispatch } from "react";
import { AllPhotosActionsType } from "../../@Types/types";

export const getAllPhotos =
  (
    page?: number
  ): ((dispatch: Dispatch<AllPhotosActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<AllPhotosActionsType>) => {
    dispatch({ type: AllPhotos.GET_ALL_PHOTOS_START });
    api.photos
      .list({ page: page, perPage: 10 })
      .then((result) => {
        dispatch({
          type: AllPhotos.GET_ALL_PHOTOS_SUCCESS,
          payload: result.response?.results,
        });
      })
      .catch((error: any) => {
        dispatch({
          type: AllPhotos.GET_ALL_PHOTOS_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };
