import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firabase/Firebase';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(true)
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser);
            setloading(false)
        })
        return () => {
            unsubscibe()
        }
    }, [])
    const userInfo = { user, register, login, logOut, loading }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;