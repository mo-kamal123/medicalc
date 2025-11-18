import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Header from '../../../shared/UI/header';
import LocationCard from '../components/location-card';

const Location = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn); // be consistent
  const location = useSelector((state) => state.auth.location);

  // CASE 1: Not logged in → redirect to /auth
  if (!loggedIn) {
    return <Navigate to="/auth" replace />;
  }

  // CASE 2: Logged in and already has location → go home
  if (loggedIn && location) {
    return <Navigate to="/" replace />;
  }

  // CASE 3: Logged in but no location → show location setup page
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
      <Header
        heading="Enable Location to Continue"
        desc="To use the Insurance Calculator, Medi Consulting needs access to your location"
      />
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-8 w-full lg:w-[90%] m-auto">
        <div className="flex flex-col gap-4 w-full lg:max-w-[50%] text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-dark font-semibold leading-tight sm:leading-snug lg:leading-15">
            Location <span className="text-main">Permission Required</span> —
            Enable Location to Continue
          </h1>
          <p className="text-sm sm:text-base text-sec">
            To use the Insurance Calculator, Medi Consulting needs access to
            your location.
          </p>
        </div>
        <div className="w-full lg:w-auto order-1 lg:order-2">
          <LocationCard />
        </div>
      </div>
    </div>
  );
};

export default Location;
