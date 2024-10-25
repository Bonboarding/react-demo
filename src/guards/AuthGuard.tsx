import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from '../services/UserService';

type AuthGuardProps = {
  children: React.ReactNode;
};
const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
   
  return children;
};

export default AuthGuard;
