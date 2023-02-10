import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Slider from '../Components/Slider';
import { sendRequest } from '../Utility/api';
import axios from 'axios';
import MovieBanner from '../Components/MovieBanner';

export default function Home() {

    const [movies, setMovies] = useState('');

    useEffect(() => {
        axios.get(sendRequest.nowPlaying)
            .then((request) => {
                setMovies(request.data.results)
            })
    }, []);


    //? randomMovie = to get random movie from the API request

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    console.log(randomMovie);

    return (
        <div className='home--container'>
            <MovieBanner randomMovie={randomMovie} />
        </div>
    )
};
