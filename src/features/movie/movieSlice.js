import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    movieId: null
}

export const movieSlice = createSlice ({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setMovieId: (state, action) => {
            state.movieId = action.payload;
        }
    }
})

export const { setMovies, setMovieId } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;