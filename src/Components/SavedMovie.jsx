import React, { useEffect, useState } from 'react'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { userAuth } from '../Context/AuthContext';
import { db } from '../Utility/Firebase';
import { FaInfoCircle, FaRegFrown } from 'react-icons/fa';
import '../Styles/SavedMovie.css';
export default function SavedMovies() {

    const [movies, setMovies] = useState([]);

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
            {movies.map((item, id) => {
                return (
                    <div className='saved--movie--container'>

                        <img key={id} src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />

                        <div className='saved--movie--btn'>

                            <FaInfoCircle title='More Info' />

                            <FaRegFrown
                                onClick={() => deleteSavedMovies(item.id)}
                                title='Remove'
                            />

                        </div>

                    </div>
                )

            })}
        </>
    )
};
