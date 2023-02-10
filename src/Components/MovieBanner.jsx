import React from 'react'
import '../Styles/MovieBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function MovieBanner({ randomMovie }) {

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };


    return (
        <div className='movie--banner--container'>

            <img
                src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
                alt={randomMovie?.title}
            />

            <div className='overlay'></div>

            <div className='movie--banner--info'>

                <h1>{randomMovie?.title}</h1>

                <p><span>Released:</span> {randomMovie?.release_date}</p>

                <p>{truncateString(randomMovie?.overview, 200)}</p>

                <div className='banner-icons' title='More info'>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <p>More Info</p>
                </div>

            </div>

        </div>
    )
};
