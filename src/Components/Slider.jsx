import React from 'react'
import CardSlider from './Cardslider'

export default function Slider({ movies }) {

    const getMoviesRange = (from, to) => {
        return movies.slice(from, to);
    };

    return (

        <div>
            <CardSlider title='Trending Now' data={getMoviesRange(0, 10)} />
            <CardSlider title='New Releases' data={getMoviesRange(10, 20)} />
            <CardSlider title='Blockbuster' data={getMoviesRange(20, 30)} />
            <CardSlider title='Popular on FilmTime' data={getMoviesRange(30, 40)} />
            <CardSlider title='Action Movies' data={getMoviesRange(40, 50)} />
            <CardSlider title='Epics' data={getMoviesRange(50, 60)} />
        </div>
    )
};
