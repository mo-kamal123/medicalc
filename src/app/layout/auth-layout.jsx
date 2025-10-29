import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authImg from '../../features/auth/assets/auth-img.png';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

const AuthLayout = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn); // ensure same key as in RootLayout
  const location = useSelector((state) => state.auth.location);

  // If logged in but no location, go to /location
  if (loggedIn && !location) {
    return <Navigate to="/location" replace />;
  }

  // If logged in and location set, go to home
  if (loggedIn && location) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, show the auth layout
  return (
    <div className="flex justify-between items-center w-[90%] m-auto h-svh gap-10">
      <div className="auth-content w-1/2 flex flex-col items-center justify-between gap-20">
        <img src={logo} alt="logo" />
        <Outlet />
        <p className="text-label">powered by Khusm</p>
      </div>
      <div className="auth-img w-1/2">
        <img src={authImg} alt="login-img" />
      </div>
    </div>
  );
};

export default AuthLayout;
