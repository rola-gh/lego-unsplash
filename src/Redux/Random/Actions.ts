import { RandomPhoto, RandomPhotos } from "./Constants";
import { api } from "../../API";
import { Dispatch } from "react";
import {
  RandomPhotoActionsType,
  RandomPhotosActionsType,
} from "../../@Types/types";

export const getRandomPhotos =
  (
    query?: string,
    page?: number
  ): ((dispatch: Dispatch<RandomPhotosActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<RandomPhotosActionsType>) => {
    dispatch({ type: RandomPhotos.GET_RANDOM_PHOTOS_START });
    api.photos
      .getRandom({
        query: query,
        count: 10,
      })
      .then((result) => {
        dispatch({
          type: page
            ? RandomPhotos.GET_RANDOM_PHOTOS_SUCCESS
            : RandomPhotos.GET_RANDOM_PHOTOS_NEW_SUCCESS,
          payload: result.response,
        });
      })
      .catch((error: any) => {
        dispatch({
          type: RandomPhotos.GET_RANDOM_PHOTOS_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };

export const getRandomSinglePhoto =
  (
    query?: string
  ): ((dispatch: Dispatch<RandomPhotoActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<RandomPhotoActionsType>) => {
    dispatch({ type: RandomPhoto.GET_RANDOM_PHOTO_START });
    api.photos
      .getRandom({ query: query })
      .then((result) => {
        dispatch({
          type: RandomPhoto.GET_RANDOM_PHOTO_SUCCESS,
          payload: result.response,
        });
      })
      .catch((error: any) => {
        dispatch({
          type: RandomPhoto.GET_RANDOM_PHOTO_FAIL,
          payload: error?.message || "something went wrong!",
        });
      });
  };
