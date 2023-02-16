import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/Bs';
import { useParams } from 'react-router-dom';
import '../Styles/Search.css';
import { searchMovie } from '../Utility/api';
import SearchResults from './SearchResults';

export default function Search() {

    const [movie, setMovie] = useState([]);

    const [search, setSearch] = useState('');

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
        <>
            <div className='search-container'>
                <button>
                    <BsSearch />
                </button>

                <input
                    type="text"
                    placeholder='Search Ex. Avatar'
                    value={search}
                    onChange={handleSearch}
                />
            </div>

            <div className='search--results--container'>
                <SearchResults movie={movie} />
            </div>
        </>
    )
};
