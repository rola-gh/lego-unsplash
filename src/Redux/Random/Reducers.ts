import { Basic } from "unsplash-js/dist/methods/photos/types";
import {
  RandomPhotoActionsType,
  RandomPhotosActionsType,
} from "../../@Types/types";
import { RandomPhoto, RandomPhotos } from "./Constants";

export interface initialState {
  isLoading: boolean;
  error: any;
  photos: Basic[];
}

export function RandomPhotosReducer(
  state: initialState = { isLoading: false, error: "", photos: []},
  action: RandomPhotosActionsType
) {
  switch (action.type) {
    case RandomPhotos.GET_RANDOM_PHOTOS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case RandomPhotos.GET_RANDOM_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [...state.photos].concat(action.payload),
        isLoading: false,
      };
    case RandomPhotos.GET_RANDOM_PHOTOS_NEW_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        isLoading: false,
      };
    case RandomPhotos.GET_RANDOM_PHOTOS_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}

export interface RinitialState {
  isLoading: boolean;
  error: any;
  photo: Basic;
}

export function RandomSinglePhotoReducer(
  state: RinitialState = { isLoading: false, error: "", photo: {} as Basic },
  action: RandomPhotoActionsType
) {
  switch (action.type) {
    case RandomPhoto.GET_RANDOM_PHOTO_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case RandomPhoto.GET_RANDOM_PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.payload,
        isLoading: false,
      };
    case RandomPhoto.GET_RANDOM_PHOTO_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
