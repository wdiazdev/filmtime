import React, { useRef, useState } from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Slider.css';

export default function CardSlider({ data, title }) {

    const [controls, setControls] = useState(false);

    const [sliderPosition, setSliderPosition] = useState(0);

    const listRef = useRef();

    const handleDirection = (direction) => {

        let distance = listRef.current.getBoundingClientRect().x - 70;

        if (direction === "left" && sliderPosition > 0) {
            listRef.current.style.transform = `translateX(${300 + distance}px)`;
            setSliderPosition(sliderPosition - 1);
        }

        if (direction === "right" && sliderPosition < 4) {
            listRef.current.style.transform = `translateX(${-300 + distance}px)`;
            setSliderPosition(sliderPosition + 1);
        }
    };

    return (
        <div
            className='card-slider--wrapper'
            onMouseEnter={() => setControls(true)}
            onMouseLeave={() => setControls(false)}
        >

            <h2>{title}</h2>

            <div>

                <div className={`slider--action left ${!controls ? 'none' : ''}`}>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleDirection('left')} />
                </div>

                <div className='card--wrapper' ref={listRef}>
                    {
                        data.map((movie, index) => {
                            return <Card movieData={movie} index={index} key={movie.id} />
                        })
                    }
                </div>

                <div className={`slider--action right ${!controls ? "none" : ""}`}>
                    <FontAwesomeIcon icon={faChevronRight} onClick={() => handleDirection('right')} />
                </div>

            </div>

        </div>
    )
};
