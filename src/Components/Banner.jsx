import React from 'react'

export const Banner = ({ title, BgImg }) => {
    return (
        <div className='banner--container'>

            <img src={BgImg} alt='Banner' className='banner--img' />

            <div className='overlay'></div>

            <h2>{title}</h2>

        </div>
    )
};
