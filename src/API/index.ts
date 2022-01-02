import { createApi } from "unsplash-js";

export const api = createApi({
  accessKey: process.env.REACT_APP_API_KEY as string,
});
