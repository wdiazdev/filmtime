import React, { useEffect, useState } from 'react'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { userAuth } from '../Context/AuthContext';
import { db } from '../Utility/Firebase';
import { FaInfoCircle, FaRegFrown } from 'react-icons/fa';
import '../Styles/SavedMovie.css';
import { useNavigate } from 'react-router-dom';


export default function savedShow() {

    const [show, setShow] = useState([]);

    const navigate = useNavigate();

    const { currentUser } = userAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${currentUser?.email}`), (doc => {
            setShow(doc.data()?.savedShows);
        }))
    }, [currentUser?.email]);

    const showRef = doc(db, 'users', `${currentUser?.email}`);

    const deleteSavedShow = async (showId) => {
        try {
            const deletedMovie = show.filter((i) => i.id !== showId);
            await updateDoc(showRef, {
                savedShows: deletedMovie
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {show.map((show, id) => {
                return (
                    <div className='saved--movie--container'>

                        <img key={id} src={`https://image.tmdb.org/t/p/w500/${show?.img}`} alt={show.title} />

                        <div className='saved--movie--btn'>

                            <FaInfoCircle title='More Info' onClick={() => navigate(`/show/${show?.id}`)} />

                            <FaRegFrown
                                onClick={() => deleteSavedShow(show.id)}
                                title='Remove'
                            />

                        </div>

                    </div>
                )

            })}
        </>
    )
};
