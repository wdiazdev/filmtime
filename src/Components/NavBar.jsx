import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Login</Link>
                <Link to='/'>Home</Link>
            </nav>
        </>
    )
}
