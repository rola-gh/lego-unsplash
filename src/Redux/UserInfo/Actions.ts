import { UserInfo } from "./Constants";
import { api } from "../../API";
import { Dispatch } from "react";
import { UserInfoActionsType } from "../../@Types/types";

export const getSinglePhoto =
  (
    username: string
  ): ((dispatch: Dispatch<UserInfoActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<UserInfoActionsType>) => {
    dispatch({ type: UserInfo.USER_INFO_START });
    api.users
      .get({ username: username })
      .then((result) => {
        dispatch({
          type: UserInfo.USER_INFO_SUCCESS,
          payload: result.response,
        });
      })
      .catch((error) => {
        dispatch({
          type: UserInfo.USER_INFO_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };
