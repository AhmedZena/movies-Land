import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./slices/langSlice";

import movieSlice from "./slices/movieSlice";
import loaderSlice from "./slices/loaderSlice";
import favoriteSlice from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    lang: langSlice,
    loader: loaderSlice,
    favorite: favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
