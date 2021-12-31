import { Basic } from "unsplash-js/dist/methods/users/types";
import { UserInfoActionsType } from "../../@Types/types";
import { UserInfo } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: string;
  photo: Basic;
}

export default function UserInfoReducer(
  state: initialState = { isLoading: false, error: "", photo: {} as Basic },
  action: UserInfoActionsType
) {
  switch (action.type) {
    case UserInfo.USER_INFO_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case UserInfo.USER_INFO_SUCCESS:
      return {
        ...state,
        photo: action.payload,
        isLoading: false,
      };
    case UserInfo.USER_INFO_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
