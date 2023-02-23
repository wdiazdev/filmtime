export const API_Key = import.meta.env.VITE_TMDB_API_KEY

export const BASE_URL = 'https://api.themoviedb.org/3/'

export const sendRequest = {
    nowPlaying: `${BASE_URL}movie/now_playing?api_key=${API_Key}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_Key}&language=en-US&page=2`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`,
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`,
};

export const SeriesRequest = {
    nowPlaying: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_Key}&language=en-US&page=1`,
    popular: `https://api.themoviedb.org/3/tv/popular?api_key=${API_Key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_Key}&language=en-US&page=1`,
};

// API TO SEARCH FOR MOVIES
export const searchMovie = `https://api.themoviedb.org/3/search/movie?&api_key=${API_Key}&query=`

// SINGLE MOVIE INFO API 
export const moviePageApi = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_Key}&append_to_response=videos`

// SINGLE TV SHOW INFO API 
export const showPageApi = (id) => `https://api.themoviedb.org/3/tv/${id}?api_key=${API_Key}&language=en-US&append_to_response=videos`

