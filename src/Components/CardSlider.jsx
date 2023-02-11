import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import '../Styles/CardSlider.css';

export default function CardSlider({ title, fetchData }) {

    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        axios.get(fetchData)
            .then((request) => {
                setNowPlaying(request.data.results)
            })
    }, []);

    // console.log(nowPlaying);

    return (
        <div className='card--slider--container'>

            <h2>{title}</h2>

            <div className='slider'>

                {nowPlaying.map((movie, id) => {
                    return (
                        <div
                            key={id}
                        >
                            <Card movie={movie} />
                        </div>
                    )

                })}

            </div>

        </div>
    )
};
