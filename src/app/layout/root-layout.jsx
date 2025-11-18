import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../shared/utils/localStorage-actions';
import { logout } from '../../features/auth/store/auth-slice';

/**
 * Root Layout Component
 *
 * Main layout wrapper for authenticated routes.
 * Handles authentication and authorization checks, auto-logout,
 * and provides navigation structure.
 *
 * Features:
 * - Authentication verification (requires valid token)
 * - Location verification (requires selected location)
 * - Auto-logout after 1 hour of inactivity
 * - Protected route navigation
 * - Navbar and outlet for child routes
 *
 * Route Protection Flow:
 * 1. Check if user is logged in and has valid token
 * 2. If not logged in → redirect to /auth
 * 3. If logged in but no location → redirect to /location
 * 4. If both valid → render protected layout with navbar
 *
 * @returns {JSX.Element} Root layout with authentication guards
 */
const RootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get authentication state from Redux and localStorage
  const loggedin = useSelector((state) => state.auth.loggedIn);
  const token = getFromLocalStorage('token');
  const location = useSelector((state) => state.auth.location);
  const loginTime = getFromLocalStorage('loginTime'); // Saved at login for session management

  // 🧹 Logout handler
  const performLogout = useCallback(() => {
    removeFromLocalStorage('token');
    removeFromLocalStorage('loggedIn');
    removeFromLocalStorage('location');
    removeFromLocalStorage('loginTime');
    dispatch(logout());
    navigate('/auth', { replace: true });
  }, [dispatch, navigate]);

  // 🕒 Auto logout after 1 hour
  useEffect(() => {
    if (!loginTime) return;

    const ONE_HOUR = 60 * 60 * 1000; // 1 hour
    const now = Date.now();
    const elapsed = now - Number(loginTime);

    // If session expired already → logout immediately
    if (elapsed >= ONE_HOUR) {
      performLogout();
      return;
    }

    // Otherwise → schedule logout for remaining time
    const remainingTime = ONE_HOUR - elapsed;
    const timer = setTimeout(() => {
      performLogout();
    }, remainingTime);

    // Cleanup timer when unmounted
    return () => clearTimeout(timer);
  }, [loginTime, performLogout]);

  // 🧭 CASE 1: Not logged in → go to /auth
  if (!loggedin || !token) {
    return <Navigate to="/auth" replace />;
  }

  // 🧭 CASE 2: Logged in but no location → go to /location
  if (loggedin && !location) {
    return <Navigate to="/location" replace />;
  }

  // 🧭 CASE 3: Logged in and location set → show home layout
  return (
    <div className="bg-body min-h-svh flex flex-col">
      <div className="w-full sm:w-[95%] lg:w-[90%] m-auto pt-3 sm:pt-4 lg:pt-5 px-4 sm:px-6 lg:px-0 flex flex-col flex-1">
        <Navbar />
        <div className="bgImg flex-1 flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
