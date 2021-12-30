import { SinglePhoto } from "./Constants";
import { api } from "../../API";

export const getSinglePhoto =
  (username: string): ((dispatch: any) => Promise<void>) =>
  async (dispatch: any) => {
    dispatch({ type: SinglePhoto.USER_INFO_START });
    api.users
      .get({ username: username })
      .then((result) => {
        dispatch({
          type: SinglePhoto.USER_INFO_SUCCESS,
          payload: result.response,
        });
      })
      .catch((error) => {
        dispatch({
          type: SinglePhoto.USER_INFO_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };
