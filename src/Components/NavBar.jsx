import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/NavBar.css';
import { UserAuth } from '../Context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPowerOff } from '@fortawesome/free-solid-svg-icons';

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

            <div className='logo--links'>

                <Link
                    to='/'
                    className='logo'
                >
                    <h3>Film</h3>
                    <span>Time</span>
                </Link>

                <Link to='/signup'>Sign Up</Link>

                <Link to='/login'>Login</Link>

                <Link to='/'>Home</Link>

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

                <button onClick={handleLogout}>
                    <FontAwesomeIcon icon={faPowerOff} />
                </button>

                {error && <p className='signup--error'>{error}</p>}

            </div>

        </nav >
    )
};
