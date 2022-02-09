import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Navigate, Outlet, Route } from 'react-router-dom';

const AuthRoute = () => {
  const { user } = useContext(AuthContext);
  return user ? <Route element={<Navigate to="/" />} /> : <Outlet />;
}

export default AuthRoute;