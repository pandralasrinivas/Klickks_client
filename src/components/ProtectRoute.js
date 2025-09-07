import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = Cookies.get('token'); // Check cookie

  return isAuthenticated ? element : <Navigate to="/not-found" />;
};

export default ProtectedRoute;
