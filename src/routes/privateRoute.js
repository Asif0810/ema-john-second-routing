import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div>loading...</div>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;