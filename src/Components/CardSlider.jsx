import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import '../Styles/CardSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper';

export const CardSlider = ({ title, fetchData }) => {

    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const fetchCardsData = async () => {
            try {
                const { data } = await axios.get(fetchData);
                setNowPlaying(data.results)
            } catch (error) {
                console.log(error);
            }
        }
        fetchCardsData();
    }, []);

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
                    550: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    }
                }}
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
