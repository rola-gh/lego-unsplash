import { AllPhotos } from "./Constants";
import { api } from "../../API";

export const getAllPhotos =
  (page?: number): ((dispatch: any) => Promise<void>) =>
  async (dispatch: any) => {
    dispatch({ type: AllPhotos.GET_ALL_PHOTOS_START });
    api.photos
      .list({ page: page, perPage: 10 })
      .then((result) => {
        dispatch({
          type: AllPhotos.GET_ALL_PHOTOS_SUCCESS,
          payload: result.response?.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: AllPhotos.GET_ALL_PHOTOS_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };
