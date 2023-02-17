import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { moviePageApi } from '../Utility/api';
import '../Styles/ShowPage.css';
import { formatCurrency } from '../Utility/FormatCurrency';
import { BiCameraMovie } from 'react-icons/Bi';
import { BsBackspaceFill } from 'react-icons/Bs';

export default function MoviePage() {

    const [movie, setMovie] = useState();

    const { id } = useParams();

    const navigate = useNavigate();

    const fetchMovie = async () => {
        const { data } = await axios.get(moviePageApi(id));
        setMovie(data)
        console.log(data);
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <div className='show--page--container'>

            <div className='show--page--wrapper'>

                <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                    className='show--page--wrapper--img'
                />

                <BsBackspaceFill className='back--btn' onClick={() => navigate(-1)} />

                <div className='show--page--info'>

                    <h3>{movie?.title}</h3>

                    <p>{movie?.tagline}</p>

                    <p><span>Rating:</span> {movie?.vote_average.toFixed(1)}</p>

                    <p><span>Release date:</span> {movie?.release_date}</p>

                    <p><span>Runtime:</span> {Math.floor(movie?.runtime / 60)} Hours {movie?.runtime % 60} Minutes</p>

                    <p><span>Overview:</span> {movie?.overview}</p>

                    <p><span>Revenue:</span> {formatCurrency(movie?.revenue)}</p>

                    <a href={movie?.homepage} target='_blank'><BiCameraMovie />Homepage</a>
                </div>

                <div className='show--page--img'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} />
                </div>

            </div>

        </div>
    )
};
