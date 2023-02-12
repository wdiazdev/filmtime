export const API_Key = import.meta.env.VITE_TMDB_API_KEY

export const BASE_URL = 'https://api.themoviedb.org/3/'


export const sendRequest = {
    nowPlaying: `${BASE_URL}movie/now_playing?api_key=${API_Key}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_Key}&language=en-US&page=2`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`,
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`,
};


export const searchMovie = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_Key}&language=en-US`


export const SeriesRequest = {
    nowPlaying: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_Key}&language=en-US&page=1`,
};


// genres
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

// MOVIE ID FOR MOVIE Page
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US