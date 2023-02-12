import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/SignUp.css';
import { userAuth } from '../Context/AuthContext';

export default function SignUp() {

    const [error, setError] = useState();

    const emailRef = useRef();

    const passwordRef = useRef();

    const passwordConfirmRef = useRef();

    const { createUser } = userAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            e.target.reset();
            return setError('Passwords do not match')
        }
        try {
            setError('')
            await createUser(emailRef.current.value, passwordRef.current.value)
            console.log('Signed Up Successfully')
            navigate('/')
        } catch (err) {
            setError('Failed to create an account')
            console.log(err.message)
        }
    };

    setTimeout(() => {
        setError(false)
    }, 5000)

    return (
        <div className='signup--container'>

            <form
                className='form'
                onSubmit={handleSubmit}
            >
                <h2 className='signup--header'>Sign Up</h2>

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

                <input
                    type='password'
                    placeholder='Confirm Password'
                    ref={passwordConfirmRef}
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
