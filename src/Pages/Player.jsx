import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { moviePageApi } from '../Utility/api';
import '../Styles/Player.css';
import YouTube from 'react-youtube';
import '../Styles/Player.css';
import { BsBackspaceFill } from 'react-icons/Bs';

export const Player = () => {

    const [trailerVideo, setTrailerVideo] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const fetchMovieVideo = async () => {
            const { data } = await axios.get(moviePageApi(id));
            setTrailerVideo(data);
            // console.log(data);
        };

        fetchMovieVideo();
    }, [id]);

    const renderTrailer = () => {

        const trailer = trailerVideo?.videos.results.find(
            video => video.name)

        if (!trailer) {
            alert('No trailer found')
            navigate('/movies');
        } else {
            return (
                < YouTube
                    videoId={trailer.key}
                    className={'youtube--container'}
                    opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                            autoplay: 1,
                            controls: 0,
                        }
                    }}
                />
            )
        }
    };

    return (
        <div className='player--container'>

            <BsBackspaceFill onClick={() => navigate(-1)} />

            {trailerVideo?.videos ? renderTrailer() : <h2>No Video Available</h2>}

        </div>
    )
};
