import React from 'react'
import '../Styles/MyList.css';
import myListBg from '../assets/playerbg.jpg';
import MySavedMovies from '../Components/MySavedMovies';


export default function MyList() {
    return (
        <div className='my--list--container'>

            <img src={myListBg} alt="" />

            <div className='overlay'></div>

            {/* <h2>Your Saved Movies</h2> */}

            <div className='my--list--wrapper'>
                <MySavedMovies />
            </div>
        </div>
    )
};
