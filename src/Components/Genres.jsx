// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { fetchMoviesByGenres } from '../Store';

// export default function Genres({ genres, type }) {

//     const dispatch = useDispatch();

//     return (
//         <div className='genres--container'>

//             <label htmlFor='genres'>Choose a genre:</label>

//             <select
//                 id='genres'
//                 onChange={e =>
//                     dispatch(fetchMoviesByGenres({ genre: e.target.value, type }))}
//             >

//                 {genres.map((genre) => {
//                     return (
//                         <option
//                             key={genre.id}
//                             value={genre.id}
//                         >
//                             {genre.name}
//                         </option>
//                     )
//                 })}
//             </select>

//         </div>
//     )
// };
