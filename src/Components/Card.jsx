import React, { useState } from 'react'
import { FaRegHeart, FaHeart, FaInfoCircle } from 'react-icons/fa';
import { UserAuth } from '../Context/AuthContext';
import { db } from '../Utility/Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

export default function Card({ movie }) {

    const [like, setLike] = useState(false);

    const [save, setSaved] = useState(false);

    const { user } = UserAuth();

    const dbUserID = doc(db, 'users', `${user?.email}`);

    const handleSaveMovie = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(dbUserID, {
                savedMovies: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.poster_path
                })
            })
        } else {
            alert('Please Login');
        }
    };
    console.log(movie)
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

                    <div
                        className='card--icons'
                        onClick={handleSaveMovie}
                    >

                        {like ? <FaHeart color='#f40612' /> : <FaRegHeart />}

                        <FaInfoCircle />

                    </div>

                </div>
            </div>

        </div >
    )
};
