import React from 'react'
import { Navigate } from 'react-router-dom'
import { userAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ children }) => {

    const { currentUser } = userAuth();

    if (!currentUser) {
        return <Navigate to={'/'} />
    } else {
        return children;
    }
};

export default ProtectedRoute