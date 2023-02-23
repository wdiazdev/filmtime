import React, { useEffect, useState } from 'react'
import '../Styles/MovieBanner.css';
import { FaInfoCircle, FaPlay } from 'react-icons/fa';
import { sendRequest } from '../Utility/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MovieBanner = () => {

    const [nowPlaying, setNowPlaying] = useState('');

    const navigate = useNavigate();

    const fetchRandomMovie = async () => {
        const { data } = await axios.get(sendRequest.nowPlaying);
        setNowPlaying(data.results)
    };

    useEffect(() => {
        fetchRandomMovie();
    }, []);

    // console.log(nowPlaying);

    //? randomMovie = to get random movie from the API request

    const randomMovie = nowPlaying[Math.floor(Math.random() * nowPlaying.length)];

    // console.log(randomMovie);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className='movie--banner--container'>

            <img
                src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
                alt={randomMovie?.title}
            />

            <div className='overlay'></div>

            <div className='movie--banner--info'>

                <h1>{randomMovie?.title}</h1>

                <p><span>Released:</span> {randomMovie?.release_date}</p>

                <p>{truncateString(randomMovie?.overview, 200)}</p>

                <div className='banner-icons'>
                    <FaInfoCircle onClick={() => navigate(`/movie/${randomMovie?.id}`)} />
                    <FaPlay onClick={() => navigate(`/player/${randomMovie?.id}`)} />
                </div>

            </div>

        </div >
    )
};
