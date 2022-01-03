import { SinglePhoto } from "./Constants";
import { api } from "../../API";

export const getSinglePhoto =
  (photoId: string): ((dispatch: any) => Promise<void>) =>
  async (dispatch: any) => {
    dispatch({ type: SinglePhoto.GET_SINGLE_PHOTO_START });
    api.photos
      .get({ photoId: photoId })
      .then(result => {
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
