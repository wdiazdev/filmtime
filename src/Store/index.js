import {
    configureStore,
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, API_Key } from '../Utility/api';

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};


//? Function to get the genres from API

export const getGenres = createAsyncThunk('filmtime/genres', async () => {
    const { data: { genres } } = await axios.get(
        `${BASE_URL}/genre/movie/list?api_key=${API_Key}`
    );
    return genres;
});

//? Function to get the movies from the API 

const createArrayFromRawData = (array, moviesArray, genres) => {
    array.forEach((movie) => {
        const movieGenres = [];
        movie.genre_ids.forEach((genre) => {
            const name = genres.find(({ id }) => id === genre);
            if (name) movieGenres.push(name.name);
        });
        if (movie.backdrop_path)
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0, 3),
            });
    });
};

const getRawData = async (api, genres, paging) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
        const {
            data: { results },
        } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
        createArrayFromRawData(results, moviesArray, genres);
    }
    return moviesArray;
};

export const fetchMovies = createAsyncThunk(
    'filmtime/trending',
    async ({ type }, thunkAPI) => {
        const {
            filmtime: { genres },
        } = thunkAPI.getState();
        return getRawData(
            `${BASE_URL}/trending/${type}/week?api_key=${API_Key}`,
            genres,
            true
        );
    }
);

// return getRawData(`${BASE_URL}/discover/${type}?api_key=${API_Key}&with_genres=${genre}`);


const FilmTimeSlice = createSlice({
    name: 'filmtime',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
    },
});

export const store = configureStore({
    reducer: {
        filmtime: FilmTimeSlice.reducer
    }
});