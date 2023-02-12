import React from 'react'
import { Banner } from '../Components/Banner';
import '../Styles/Account.css';
import BgImg from '../assets/banner1.jpg';
import SavedMovies from '../Components/SavedMovie';

export default function Account() {


    return (
        <div className='account--container'>

            <Banner title='Your Shows' BgImg={BgImg} />

            <div className='saved--movie--wrapper'>
                <SavedMovies />
            </div>

        </div>
    )
};
