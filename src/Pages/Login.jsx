import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../Context/AuthContext';

export const Login = () => {

    const [error, setError] = useState();

    const emailRef = useRef();

    const passwordRef = useRef();

    const { signIn } = userAuth();

    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            setError('')
            await signIn(emailRef.current.value, passwordRef.current.value)
            console.log('Login Successfully')
            navigate('/')
        } catch (e) {
            setError('Unable to login')
            console.log(e.message)
        }
    };

    setTimeout(() => {
        setError(false)
    }, 5000)

    return (
        <div className='signup--container'>

            <form
                className='form'
                onSubmit={handleSignIn}
            >
                <h2 className='signup--header'>Login</h2>

                <input
                    type='email'
                    placeholder='Email Address'
                    ref={emailRef}
                    required
                />

                <input
                    type='password'
                    placeholder='Password'
                    ref={passwordRef}
                    required
                />

                <button
                    type='submit'
                    className='signup--btn'
                >
                    Login
                </button>

                {error && <p className='signup--error'>{error}</p>}

                <Link to='/forgot-password'>Forgot Password?</Link>

            </form>

            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>

        </div>
    )
};
