import React, { useState } from 'react'
import { FaRegHeart, FaHeart, FaInfoCircle } from 'react-icons/fa';
import { userAuth } from '../Context/AuthContext';
import { db } from '../Utility/Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function ShowCard({ show }) {

    const [like, setLike] = useState(false);

    const [save, setSaved] = useState(false);

    const { currentUser } = userAuth();

    const navigate = useNavigate();

    const dbUserID = doc(db, 'users', `${currentUser?.email}`);

    const handleSaveMovie = async () => {
        if (currentUser?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(dbUserID, {
                savedShows: arrayUnion({
                    id: show.id,
                    title: show.original_name,
                    img: show.poster_path,
                    rating: show.vote_average,
                    released: show.first_air_date
                })
            })
        } else {
            alert('Please Login');
        }
    };

    return (
        <div className='card--container'>

            <img
                src={`https://image.tmdb.org/t/p/w500/${show?.backdrop_path}`}
                alt={show?.original_name}
            />

            <div className='card--info--container'>

                <div className='card--info'>

                    <h3>{show?.original_name}</h3>

                    <p>Rating: <span
                        style={
                            {
                                fontWeight: 700,
                            }}
                    >
                        {show?.vote_average}
                    </span></p>

                    <div
                        className='card--icons'
                    >

                        {like ? <FaHeart color='#f40612' /> : <FaRegHeart onClick={handleSaveMovie} />}

                        <FaInfoCircle onClick={() => navigate(`/show/${show?.id}`)} />

                    </div>

                </div>
            </div>

        </div >
    )
};