import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Navigate, Outlet, Route } from 'react-router-dom';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    return user ? <Outlet /> : <Route element={<Navigate to="/" />} />;
}

export default PrivateRoute;