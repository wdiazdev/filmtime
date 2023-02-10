import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Genres from '../Components/Genres';
import Slider from '../Components/Slider';
import { fetchMovies, getGenres } from '../Store';


export default function Series() {

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
            dispatch(fetchMovies({ genres, type: 'tv' }));
        }
    }, [genresLoaded]);

    return (
        <div className='movie--page--container'>

            <Genres genres={genres} type='tv' />

            <div className='movie--info'>
                {
                    movies.length ?
                        <Slider movies={movies} /> :
                        <h1 className='not--available'>Not Available</h1>
                }
            </div>
        </div>
    )
};