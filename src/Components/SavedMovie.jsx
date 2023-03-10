import React, { useEffect, useState } from 'react'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { userAuth } from '../Context/AuthContext';
import { db } from '../Utility/Firebase';
import { FaInfoCircle, FaRegFrown } from 'react-icons/fa';
import '../Styles/SavedMovie.css';
import { useNavigate } from 'react-router-dom';

export default function SavedMovie() {

    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    const { currentUser } = userAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${currentUser?.email}`), (doc => {
            setMovies(doc.data()?.savedMovies);
        }))
    }, [currentUser?.email]);

    const movieRef = doc(db, 'users', `${currentUser?.email}`);

    const deleteSavedMovies = async (movieId) => {
        try {
            const deletedMovie = movies.filter((i) => i.id !== movieId);
            await updateDoc(movieRef, {
                savedMovies: deletedMovie
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {movies.map((item, index) => {
                return (
                    <div key={index} className='saved--movie--container'>

                        <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />

                        <div className='saved--movie--btn'>

                            <FaInfoCircle title='More Info' onClick={() => navigate(`/movie/${item?.id}`)} />

                            <FaRegFrown
                                onClick={() => deleteSavedMovies(item?.id)}
                                title='Remove'
                            />

                        </div>

                    </div>
                )

            })}
        </>
    )
};
