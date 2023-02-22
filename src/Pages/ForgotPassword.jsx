import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../Context/AuthContext';

export const ForgotPassword = () => {
    const [error, setError] = useState();

    const [message, setMessage] = useState();

    const emailRef = useRef();

    const { resetPassword } = userAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('')
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch (e) {
            setError('Failed to reset password')
            console.log(e.message)
        }
    };

    return (
        <div className='signup--container'>

            <form
                className='form'
                onSubmit={handleSubmit}
            >

                <h2 className='signup--header'>Reset Password</h2>

                {error && <p className='signup--error'>{error}</p>}

                {message && <p className='reset--pass--msg'>{message}</p>}


                <input
                    type='email'
                    ref={emailRef}
                    placeholder='Email address'
                    required
                />


                <button
                    type='submit'
                    className='signup--btn'
                >
                    Reset Password
                </button>

                <Link to='/login'>Log in</Link>
            </form>

            <div>Don't have an account?<Link to='/signup'> Sign Up</Link></div>

        </div>
    )
};