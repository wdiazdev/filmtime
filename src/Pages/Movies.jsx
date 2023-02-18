import MovieBanner from '../Components/MovieBanner';
import CardSlider from '../Components/CardSlider';
import { sendRequest } from '../Utility/api';
import { Loader } from '../Components/Loader';
import { useEffect, useState } from 'react';

export default function Movies() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);

    return (
        <>
            {
                loading ? <Loader /> :

                    <>
                        <MovieBanner />

                        <CardSlider title={'Now Playing'} fetchData={sendRequest.nowPlaying} />

                        <CardSlider title={'Upcoming'} fetchData={sendRequest.upcoming} />

                        <CardSlider title={'Trending'} fetchData={sendRequest.trending} />

                        <CardSlider title={'Popular Today'} fetchData={sendRequest.popular} />

                        <CardSlider title={'Top rated'} fetchData={sendRequest.topRated} />
                    </>
            }
        </>
    )
};
