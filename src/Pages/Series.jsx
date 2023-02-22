import React, { useEffect, useState } from 'react'
import ShowCardSlider from '../Components/ShowCardSlider';
import ShowBanner from '../Components/ShowBanner';
import { SeriesRequest } from '../Utility/api';
import { Loader } from '../Components/Loader';

export const Series = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, []);

    return (
        <>
            {loading ? <Loader /> :
                <>
                    <ShowBanner />

                    <ShowCardSlider title={'Now Playing'} fetchData={SeriesRequest.nowPlaying} />

                    <ShowCardSlider title={'Popular'} fetchData={SeriesRequest.popular} />

                    <ShowCardSlider title={'Top Rated'} fetchData={SeriesRequest.topRated} />
                </>
            }
        </>
    )
};

