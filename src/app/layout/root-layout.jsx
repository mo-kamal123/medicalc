import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';

const RootLayout = () => {
  const loggedin = useSelector((state) => state.auth.loggedIn);
  const location = useSelector((state) => state.auth.location);

  // CASE 1: Not logged in → go to /auth
  if (!loggedin) {
    return <Navigate to="/auth" replace />;
  }

  // CASE 2: Logged in but no location → go to /location
  if (loggedin && !location) {
    return <Navigate to="/location" replace />;
  }

  // CASE 3: Logged in and location set → show home layout
  return (
    <div className="bg-body min-h-svh flex flex-col">
      <div className="w-[90%] m-auto pt-5 flex flex-col flex-1">
        <Navbar />
        <div className="bgImg flex-1 flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
