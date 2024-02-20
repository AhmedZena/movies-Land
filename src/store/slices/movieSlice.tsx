import { createSlice } from "@reduxjs/toolkit";
import IMovie from "../../Interfaces/IMovie";
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [] as IMovie[],
    page: 1,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});
export const { setMovies, setPage } = movieSlice.actions;
export default movieSlice.reducer;
