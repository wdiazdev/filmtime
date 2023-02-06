import React from 'react'
import Card from './Card'
import '../Styles/CardSlider.css';

export default function CardSlider({ data, title }) {
    return (
        <div className='cardslider--container'>
            {
                data.map((movie, index) => {
                    return <Card movieData={movie} index={index} key={movie.id} />
                })
            }
        </div>
    )
};
