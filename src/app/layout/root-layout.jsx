import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../shared/layout/navbar';
import Header from '../../shared/UI/header';

const RootLayout = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return loggedIn ? (
    <div className="bg-body min-h-svh flex flex-col">
      <div className="w-[90%] m-auto pt-5 flex flex-col flex-1">
        <Navbar />
        <Header
          heading={
            'Smart Self-Management Calculator Empowering Smarter Program Control'
          }
          desc={
            'The Smart Self-Management Calculator is an intelligent tool designed to help healthcare and insurance'
          }
        />
        <div className="bgImg flex-1 flex">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={'/auth'} replace />
  );
};

export default RootLayout;
