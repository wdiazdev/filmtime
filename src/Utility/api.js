export const API_Key = '28c73f8f765d2a7a746b5f044c4d8a6e'

export const BASE_URL = 'https://api.themoviedb.org/3/'


export const sendRequest = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=2`,
    horror: `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&language=en-US&query=horror&page=1&include_adult=false`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=en-US&page=1`,
    nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
};

