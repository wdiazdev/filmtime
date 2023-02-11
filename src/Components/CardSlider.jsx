import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import '../Styles/CardSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

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

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={40}
                slidesPerView={4}
                speed={800}
            >
                {nowPlaying.map((movie) => {
                    return (
                        <SwiperSlide
                            key={movie.id}
                        >
                            <Card movie={movie} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    )
};
