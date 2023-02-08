import React from 'react'
import CardSlider from './Cardslider'
import '../Styles/Slider.css';

export default function Slider({ movies }) {

    const getMoviesRange = (from, to) => {
        return movies.slice(from, to);
    };

    return (

        <div className='cards--sliders--wrappers'>
            <CardSlider title='Trending Now' data={getMoviesRange(0, 10)} />
            <CardSlider title='Trending Now' data={getMoviesRange(10, 20)} />
            <CardSlider title='Trending Now' data={getMoviesRange(20, 30)} />
            <CardSlider title='Trending Now' data={getMoviesRange(30, 40)} />
            <CardSlider title='Trending Now' data={getMoviesRange(40, 50)} />
            <CardSlider title='Trending Now' data={getMoviesRange(50, 60)} />
        </div>
    )
};
