import React from 'react'
import '../Styles/Player.css';
import video from '../assets/movietrailer.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Player() {

    const navigate = useNavigate();

    return (
        <div className='player--container'>

            <button
                className='hero--btn back--btn'
                onClick={() => navigate(-1)}
            >
                <FontAwesomeIcon icon={faBackward} />
            </button>

            <video src={video} autoPlay loop controls muted />


        </div>
    )
}
