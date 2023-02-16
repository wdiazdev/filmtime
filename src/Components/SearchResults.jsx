import React from 'react'
import { FaInfoCircle } from 'react-icons/fa';

export default function SearchResults({ movie }) {

    return (
        <div
            className={movie?.length > 0 ?
                'search--result--container--active' :
                'search--result--container--active search--result--container'
            }
        >

            {movie?.length > 0 ? <h3>Your Results</h3> : <h3>That's a miss</h3>}

            {movie.slice(0, 10).map((result) => {
                return (
                    <div className='result--card' key={result.id}>

                        <img src={`https://image.tmdb.org/t/p/original/${result?.backdrop_path}`} alt={result.title} />

                        <div className='result--overlay'></div>

                        <div className='result--info'>

                            <h3>{result?.title}</h3>

                            <div className='result--icons'>
                                <FaInfoCircle />
                            </div>

                        </div>

                    </div>
                )
            })}

        </div >
    )
};
