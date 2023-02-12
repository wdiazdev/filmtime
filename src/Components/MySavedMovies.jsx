import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore';
import { userAuth } from '../Context/AuthContext';
import { db } from '../Utility/Firebase';

export default function MySavedMovies() {

    const [movies, setMovies] = useState([]);

    const { currentUser } = userAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${currentUser?.email}`), (doc => {
            setMovies(doc.data()?.savedMovies);
        }))
    }, [currentUser?.email]);


    return (
        <>
            {movies.map((item, id) => {
                return (
                    <div className='saved--movie--container'>
                        {/* <h3>{item.released}</h3>
                        <p>Ratings: {item.rating}</p> */}
                        <img key={id} src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />
                    </div>
                )

            })}
        </>
    )
};
