import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../Store';


export default function Movies() {

    const navigate = useNavigate();

    const genresLoaded = useSelector((state) => state.filmtime.genresLoaded);

    const movies = useSelector((state) => state.filmtime.movies);

    const genres = useSelector((state) => state.filmtime.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded) {
            dispatch(fetchMovies({ genres, type: "all" }));
        }
    }, [genresLoaded]);

    return (
        <div>Movies</div>
    )
}
