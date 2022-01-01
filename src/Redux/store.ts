import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import AllPhotosReducer from "./AllPhotos/Reducers";
import DownloadPhotosReducer from "./DownloadPhoto/Reducers";
import {
  RandomPhotosReducer,
  RandomSinglePhotoReducer,
} from "./Random/Reducers";
import SearchPhotosReducer from "./SearchPhotos/Reducers";
import SinglePhotoReducer from "./SinglePhoto/Reducers";
import UserInfoReducer from "./UserInfo/Reducers";

const reducers = combineReducers({
  AllPhotos: AllPhotosReducer,
  SinglePhoto: SinglePhotoReducer,
  SearchPhotos: SearchPhotosReducer,
  DownloadPhoto: DownloadPhotosReducer,
  UserInfo: UserInfoReducer,
  RandomPhotos: RandomPhotosReducer,
  RandomSinglePhoto: RandomSinglePhotoReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export type AppState = ReturnType<typeof reducers>;
