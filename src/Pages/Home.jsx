import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import MovieBanner from '../Components/MovieBanner';
import CardSlider from '../Components/CardSlider';
import { sendRequest } from '../Utility/api';

export default function Home() {


    return (
        <div className='home--container'>

            <MovieBanner />

            <CardSlider title={'Now Playing'} fetchData={sendRequest.nowPlaying} />

            <CardSlider title={'Upcoming'} fetchData={sendRequest.upcoming} />

            <CardSlider title={'Trending'} fetchData={sendRequest.trending} />

            <CardSlider title={'Popular Today'} fetchData={sendRequest.popular} />

            <CardSlider title={'Top rated'} fetchData={sendRequest.topRated} />
        </div>
    )
};
