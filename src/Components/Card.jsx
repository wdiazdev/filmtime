import React, { useState } from 'react'
import { FaRegHeart, FaHeart, FaInfoCircle } from 'react-icons/fa';

export default function Card({ movie }) {

    const [like, setLike] = useState(false);

    return (
        <div className='card--container'>

            <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt={movie?.title}
            />

            <div className='card--info--container'>

                <div className='card--info'>

                    <h3>{movie?.title}</h3>

                    <p>Released: {movie?.release_date}</p>

                    <p>Rating: <span
                        style={
                            {
                                fontWeight: 700,
                            }}
                    >
                        {movie?.vote_average}
                    </span></p>

                    <div className='card--icons'>

                        {like ? <FaHeart /> : <FaRegHeart />}

                        <FaInfoCircle />

                    </div>

                </div>
            </div>

        </div >
    )
};
