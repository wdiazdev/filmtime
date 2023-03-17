import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { showPageApi } from '../Utility/api';
import '../Styles/MoviePage.css';
import { BsBackspaceFill, BsTv } from 'react-icons/Bs';

export const ShowPage = () => {

    const [show, setShow] = useState();

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchShow = async () => {
            try {
                const { data } = await axios.get(showPageApi(id));
                setShow(data)
                // console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchShow();
    }, [id]);

    return (
        <div className='show--page--container'>

            <div className='show--page--wrapper'>

                <img
                    src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`}
                    alt={show?.name}
                    className='show--page--wrapper--img'
                />

                <BsBackspaceFill className='back--btn' onClick={() => navigate(-1)} />

                <div className='show--page--info'>

                    <h3>{show?.name}</h3>

                    <p>{show?.tagline}</p>

                    <p><span>Rating:</span> {show?.vote_average.toFixed(1)}</p>

                    <p><span>Release date:</span> {show?.first_air_date}</p>

                    <p><span>Last on Air:</span> {show?.last_air_date}</p>

                    <p><span>Seasons:</span> {show?.number_of_seasons}</p>

                    <p><span>Episodes:</span> {show?.number_of_episodes}</p>

                    <p><span>Overview:</span> {show?.overview}</p>

                    <a href={show?.homepage} target='_blank'><BsTv />Homepage</a>
                </div>

                <div className='show--page--img'>
                    <img src={`https://image.tmdb.org/t/p/w500/${show?.poster_path}`} alt={show?.title} />
                </div>

            </div>

        </div>
    )
};
