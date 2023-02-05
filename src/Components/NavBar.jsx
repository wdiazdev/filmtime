import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css';

export default function NavBar() {

    return (
        <nav className='nav--container'>

            <Link
                to='/'
                className='logo--container'
            >
                <h3>Film</h3>
                <span>Time</span>
            </Link>

            <div className='navbar--links'>
                <Link to='/signup'>Sign Up</Link>

                <Link to='/login'>Login</Link>

                <Link to='/'>Home</Link>
            </div>

        </nav >
    )
};
