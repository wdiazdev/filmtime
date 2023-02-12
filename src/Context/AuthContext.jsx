import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { firebaseAuth, db } from '../Utility/Firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
        setDoc(doc(db, 'users', email), {
            savedMovies: []
        })
    };

    const signIn = (email, password, name) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    const logout = () => {
        return signOut(firebaseAuth)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(firebaseAuth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    });

    const value = {
        createUser,
        logout,
        signIn,
        resetPassword,
        user,
    }

    return (
        <UserContext.Provider
            value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};