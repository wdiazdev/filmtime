import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

export default function Login() {

    const [error, setError] = useState();

    const emailRef = useRef();

    const passwordRef = useRef();

    const { signIn } = UserAuth();

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

    return (
        <div className='signup--container'>

            <form
                className='form'
                onSubmit={handleSignIn}
            >
                <h2 className='signup--header'>Sign Up</h2>

                <input
                    type='email'
                    id='email'
                    placeholder='Email Address'
                    ref={emailRef}
                    required
                />

                <input
                    type='password'
                    id='password'
                    placeholder='Password'
                    ref={passwordRef}
                    required
                />

                <button
                    type='submit'
                    className='signup--btn'
                >
                    Create Account
                </button>

                {error && <p className='signup--error'>{error}</p>}

                <p>Have an account? <Link to='/login'>Login</Link></p>

            </form>


        </div>
    )
};
