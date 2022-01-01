import { AllPhotos } from "../Redux/AllPhotos/Constants";
import { SinglePhoto } from "../Redux/SinglePhoto/Constants";
import { SearchPhotos } from "../Redux/SearchPhotos/Constants";
import { UserInfo } from "../Redux/UserInfo/Constants";
import { DownloadPhotos } from "../Redux/DownloadPhoto/Constants";
import { RandomPhoto, RandomPhotos } from "../Redux/Random/Constants";

// All Photos Types
export interface IGetAllPhotosStart {
  type: AllPhotos.GET_ALL_PHOTOS_START;
}
export interface IGetAllPhotosSucces {
  type: AllPhotos.GET_ALL_PHOTOS_SUCCESS | AllPhotos.GET_ALL_PHOTOS_NEW_SUCCESS;
  payload: any;
}
export interface IGetAllPhotosFail {
  type: AllPhotos.GET_ALL_PHOTOS_FAIL;
  payload: any;
}
export type AllPhotosActionsType =
  | IGetAllPhotosStart
  | IGetAllPhotosSucces
  | IGetAllPhotosFail;

// Random Photos Types
export interface IGetRandomPhotosStart {
  type: RandomPhotos.GET_RANDOM_PHOTOS_START;
}
export interface IGetRandomPhotosSucces {
  type:
    | RandomPhotos.GET_RANDOM_PHOTOS_SUCCESS
    | RandomPhotos.GET_RANDOM_PHOTOS_NEW_SUCCESS;
  payload: any;
}
export interface IGetRandomPhotosFail {
  type: RandomPhotos.GET_RANDOM_PHOTOS_FAIL;
  payload: any;
}
export type RandomPhotosActionsType =
  | IGetRandomPhotosStart
  | IGetRandomPhotosSucces
  | IGetRandomPhotosFail;

// Random Single Photo Types
export interface IGetRandomPhotoStart {
  type: RandomPhoto.GET_RANDOM_PHOTO_START;
}
export interface IGetRandomPhotoSucces {
  type:
    | RandomPhoto.GET_RANDOM_PHOTO_SUCCESS
    | RandomPhoto.GET_RANDOM_PHOTO_NEW_SUCCESS;
  payload: any;
}
export interface IGetRandomPhotoFail {
  type: RandomPhoto.GET_RANDOM_PHOTO_FAIL;
  payload: any;
}
export type RandomPhotoActionsType =
  | IGetRandomPhotoStart
  | IGetRandomPhotoSucces
  | IGetRandomPhotoFail;

// Single Photo Types
export interface ISinglePhotoStart {
  type: SinglePhoto.GET_SINGLE_PHOTO_START;
}
export interface ISinglePhotoSucces {
  type: SinglePhoto.GET_SINGLE_PHOTO_SUCCESS;
  payload: any;
}
export interface ISinglePhotoFail {
  type: SinglePhoto.GET_SINGLE_PHOTO_FAIL;
  payload: any;
}
export type SinglePhotoActionsType =
  | ISinglePhotoStart
  | ISinglePhotoSucces
  | ISinglePhotoFail;

// Search Photo Types
export interface ISearchPhotosStart {
  type: SearchPhotos.SEARCH_BY_KEYWORD_START;
}
export interface ISearchPhotosSucces {
  type:
    | SearchPhotos.SEARCH_BY_KEYWORD_SUCCESS
    | SearchPhotos.SEARCH_BY_KEYWORD_NEW_SUCCESS;
  payload: any;
}
export interface ISearchPhotosFail {
  type: SearchPhotos.SEARCH_BY_KEYWORD_FAIL;
  payload: any;
}
export interface ISearchAddRecent {
  type: SearchPhotos.SEARCH_ADD_RECENT;
  payload: any;
}
export interface ISearchClearRecent {
  type: SearchPhotos.SEARCH_CLEAR_RECENT;
  payload?: any;
}
export type SearchPhotosActionsType =
  | ISearchAddRecent
  | ISearchPhotosStart
  | ISearchPhotosSucces
  | ISearchPhotosFail
  | ISearchClearRecent;

// User info Types
export interface IUserInfoStart {
  type: UserInfo.USER_INFO_START;
}
export interface IUserInfoSucces {
  type: UserInfo.USER_INFO_SUCCESS;
  payload: any | undefined;
}
export interface IUserInfoFail {
  type: UserInfo.USER_INFO_FAIL;
  payload: any;
}
export type UserInfoActionsType =
  | IUserInfoStart
  | IUserInfoSucces
  | IUserInfoFail;

// Download Photo Types
export interface IDownloadPhotosStart {
  type: DownloadPhotos.DOWNLOAD_PHOTO_START;
}
export interface IDownloadPhotosSucces {
  type: DownloadPhotos.DOWNLOAD_PHOTO_SUCCESS;
}
export interface IDownloadPhotosFail {
  type: DownloadPhotos.DOWNLOAD_PHOTO_FAIL;
  payload: any;
}
export type DownloadPhotosActionsType =
  | IDownloadPhotosStart
  | IDownloadPhotosSucces
  | IDownloadPhotosFail;
