import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPopularMovies: null,
        nowUpComingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addNowPopularMovies: (state, action) => {
            state.nowPopularMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.nowUpComingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})
export const { addNowPlayingMovies, addTrailerVideo, addNowPopularMovies, addUpComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;