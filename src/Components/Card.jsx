import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import video from '../assets/movietrailer.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faChevronDown,
    faThumbsUp,
    faThumbsDown,
    faCheck,
    faCirclePlus
} from '@fortawesome/free-solid-svg-icons';

export default function Card({ movieData, isLiked = false }) {

    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    return (
        <div
            className='card--container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                alt={movieData.name}
            />
            {
                isHovered && (
                    <div className='card--hero'>

                        <div className='img--video--container'>

                            <img
                                src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                                alt={movieData.name}
                                onClick={() => navigate('/player')}
                            />

                            <video
                                src={video}
                                autoPlay
                                loop
                                muted
                                onClick={() => navigate('/player')}
                            />

                        </div>

                        <div
                            className='info--container'>

                            <h3>{movieData.name}</h3>

                            <div className='moviedata--icons'>

                                <div className='controls'>

                                    <FontAwesomeIcon
                                        icon={faPlay}
                                        title='play'
                                        onClick={() => navigate('/player')}
                                    />

                                    <FontAwesomeIcon
                                        icon={faThumbsDown}
                                        title='Dislike'
                                    />

                                    <FontAwesomeIcon
                                        icon={faThumbsUp}
                                        title='Like'
                                    />

                                    {
                                        isLiked ?
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                title='Remove From List' /> :
                                            <FontAwesomeIcon icon={faCirclePlus} title='Add to my List' />
                                    }

                                </div>

                                <div className='info'>
                                    <FontAwesomeIcon icon={faChevronDown} title='More info' />
                                </div>

                            </div>

                        </div>

                        <div >
                            <ul className='genres'>
                                {movieData.genres.map((genre) => (
                                    <li>{genre}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                )
            }

        </div>
    )
};
