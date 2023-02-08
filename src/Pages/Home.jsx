import React, { useEffect } from 'react'
import '../Styles/Home.css'
import BgImg from '../assets/Homebg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../Store';
import Slider from '../Components/Slider';

export default function Home() {

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
        <>
            <div className='hero'>

                <img src={BgImg} alt="Background" className='hero--bgimg' />

                <div className='hero--info'>

                    <h1>Avatar</h1>

                    <div className='hero--btns--container'>

                        <button
                            className='hero--btn play--btn'
                            title='play'
                            onClick={() => navigate('player')}
                        >
                            <FontAwesomeIcon icon={faPlay} />
                        </button>

                        <button className='hero--btn'>
                            <FontAwesomeIcon icon={faCircleInfo} />
                            More Info
                        </button>

                    </div>

                </div>

            </div>

            <Slider movies={movies} />
        </>
    )
};
