import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/NavBar.css';
import { UserAuth } from '../Context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {

    const [error, setError] = useState();

    const { user, logout } = UserAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        setError('')
        try {
            await logout();
            navigate('/login')
            console.log('Successfully logged out')
        } catch (e) {
            setError('Failed to log out')
            console.log(e.message)
        }
    }

    setTimeout(() => {
        setError(false)
    }, 5000)

    return (
        <nav className='nav--container'>

            <div className='nav--links'>

                <Link to='/movies'>Movies</Link>

                <Link to='/series'>Series</Link>

                <Link to='/mylist'>My List</Link>

            </div>

            <div className='logo--wrapper'>
                <Link
                    to='/'
                    className='logo'
                >
                    <h3>Film</h3>
                    <span>Time</span>
                </Link>
            </div>

            <div className='nav--right'>

                <div className='search'>
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>

                    <input
                        type="text"
                        placeholder='Search'
                    />
                </div>

                {user ?
                    <button button
                        className='logout--btn'
                        onClick={handleLogout}
                    >
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button> :



                    <Link
                        to='/login'
                        className='login--btn'
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                }

                {error && <p className='signup--error'>{error}</p>}

            </div>

        </nav >
    )
};
