import { createSlice } from "@reduxjs/toolkit";
import IMovie from "../../Interfaces/IMovie";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [] as IMovie[],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorite = [...state.favorite, action.payload[0]];
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (movie) => movie.id !== action.payload[0].id
      );
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
