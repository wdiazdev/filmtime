import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsSearch, BsInfoCircleFill } from 'react-icons/Bs';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../Styles/Search.css';
import { searchMovie } from '../Utility/api';

export default function Search() {

    const [movie, setMovie] = useState([]);

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const searchedMovie = () => {
        axios.get(searchMovie + search)
            .then(
                (response) => {
                    setMovie(response.data.results)
                    // console.log(response.data.results);
                }
            ).catch((err) => {
                console.log(err);
            })
    };

    useEffect(() => {
        searchedMovie();
    }, [search]);

    const handleSearch = (event) => {
        setSearch(event.target.value)
    };

    return (
        <div className='search--container'>

            <div className='search-box'>

                <button className='btn-search'><BsSearch /></button>

                <input
                    type='text'
                    className='input-search'
                    placeholder='Search for a movie...'
                    value={search}
                    onChange={handleSearch}
                />

            </div >

            <>

                {movie?.length > 0 ?
                    <h2 className='result-error'>Your Results</h2> :
                    null
                }

                <div className='search--result'>
                    {movie.slice(0, 6).map((result) => {
                        return (
                            <div className='result--card' key={result.id}>

                                <img src={`https://image.tmdb.org/t/p/w500/${result?.poster_path}`} alt={result?.title} />

                                <div className='result--overlay'></div>

                                <div className='result--info'>

                                    <h3>{result?.title}</h3>

                                    <div className='result--icons'>
                                        <BsInfoCircleFill onClick={() => navigate(`/movie/${result?.id}`)} />

                                        <FaPlay onClick={() => navigate(`/player/${result?.id}`)} />
                                    </div>

                                </div>

                            </div>
                        )
                    })}

                </div >

            </>

        </div>
    )
};