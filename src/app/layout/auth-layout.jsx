import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authImg from '../../features/auth/assets/auth-img.png';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

/**
 * Authentication Layout Component
 *
 * Layout wrapper for authentication routes (login page).
 * Handles redirects for already-authenticated users.
 *
 * Features:
 * - Redirects authenticated users to appropriate routes
 * - Two-column layout with logo and authentication form
 * - Image display for visual appeal
 *
 * Redirect Logic:
 * - If logged in but no location → redirect to /location
 * - If logged in and location set → redirect to home (/)
 * - Otherwise → show authentication layout (login form)
 *
 * @returns {JSX.Element} Authentication layout component
 */
const AuthLayout = () => {
  // Get authentication state from Redux
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const location = useSelector((state) => state.auth.location);

  // If logged in but no location selected, redirect to location selection
  if (loggedIn && !location) {
    return <Navigate to="/location" replace />;
  }

  // If logged in and location is set, redirect to home page
  if (loggedIn && location) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, show the authentication layout (login form)
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center w-full sm:w-[95%] md:w-[90%] m-auto min-h-svh lg:h-svh gap-5 lg:gap-10 px-4 sm:px-6 lg:px-0 py-6 lg:py-0">
      {/* Auth Content - Left side on desktop, full width on mobile */}
      <div className="auth-content w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-between gap-6 sm:gap-10 lg:gap-20 order-2 lg:order-1">
        <img src={logo} alt="logo" className="w-32 sm:w-60 lg:w-auto h-auto" />
        <div className="w-full max-w-md lg:max-w-none">
          <Outlet />
        </div>
        <p className="text-label text-xs sm:text-sm">powered by Khusm</p>
      </div>
      {/* Auth Image - Right side on desktop, hidden on mobile */}
      <div className="auth-img hidden md:block md:w-1/2 order-1 md:order-2">
        <img
          src={authImg}
          alt="login-img"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
