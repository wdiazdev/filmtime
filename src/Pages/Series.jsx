import React from 'react'
import ShowCardSlider from '../Components/ShowCardSlider';
import ShowBanner from '../Components/ShowBanner';
import { SeriesRequest } from '../Utility/api';

export default function Series() {
    return (
        <>
            <ShowBanner />

            <ShowCardSlider title={'Latest'} fetchData={SeriesRequest.latest} />

            <ShowCardSlider title={'Now Playing'} fetchData={SeriesRequest.nowPlaying} />

            <ShowCardSlider title={'Popular'} fetchData={SeriesRequest.popular} />

            <ShowCardSlider title={'Top Rated'} fetchData={SeriesRequest.topRated} />
        </>
    )
};

