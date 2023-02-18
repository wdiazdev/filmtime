import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/NavBar.css';
import { userAuth } from '../Context/AuthContext';
import { BsPower } from 'react-icons/Bs';
import { RiAccountCircleFill } from 'react-icons/Ri';
import Search from './Search';
import { GiFilmStrip } from 'react-icons/Gi'

export default function NavBar() {

    const [error, setError] = useState(false);

    const { currentUser, logout } = userAuth();

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
        <>
            <nav className='nav--container'>

                <div className='nav--links'>

                    <Link to='/'>Movies</Link>

                    <Link to='/series'>Series</Link>

                    {currentUser ? <Link to='/mylist'>My Shows</Link> : null}

                </div>

                <div className='logo--wrapper'>
                    <Link
                        to='/'
                        className='logo'
                    >
                        <h3>Film</h3>
                        <span>Time</span>
                    </Link>
                    <GiFilmStrip />
                </div>

                <div className='nav--right'>

                    <Search />

                    {currentUser ?
                        <button
                            className='logout--btn'
                            onClick={handleLogout}
                        >
                            <BsPower />
                        </button> :

                        <button
                            className='logout--btn'
                            onClick={() => navigate('/Login')}
                        >
                            <RiAccountCircleFill />
                        </button>
                    }

                    {error && <p className='signup--error'>{error}</p>}

                </div>

            </nav >
        </>
    )
};
