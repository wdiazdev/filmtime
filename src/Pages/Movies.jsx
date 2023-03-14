import { MovieBanner } from '../Components/MovieBanner';
import { CardSlider } from '../Components/CardSlider';
import { sendRequest } from '../Utility/api';
import { Loader } from '../Components/Loader';
import { useEffect, useState } from 'react';
import { Search } from '../Components/Search';

export const Movies = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 500);

        setLoading(true);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {
                loading ? <Loader /> :

                    <>
                        <MovieBanner />

                        <Search />

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
