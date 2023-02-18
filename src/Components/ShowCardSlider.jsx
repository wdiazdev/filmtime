import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import ShowCard from './ShowCard';


export default function ShowCardSlider({ fetchData, title }) {

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
                className='swiper--container'
                breakpoints={{
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    880: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    }
                }}
            >
                {nowPlaying.map((show) => {
                    return (
                        <SwiperSlide
                            key={show.id}
                        >
                            <ShowCard show={show} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    )
};
