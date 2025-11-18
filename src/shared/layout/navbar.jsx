import { CiLogout } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromLocalStorage } from '../utils/localStorage-actions';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/store/auth-slice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    removeFromLocalStorage('token');
    removeFromLocalStorage('loggedIn');
    removeFromLocalStorage('location');
    dispatch(logout());
    navigate('/auth', { replace: true }); // add { replace: true } to prevent back navigation
  };
  return (
    <nav className="bg-white flex flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl">
      <div className="flex items-center justify-between gap-3 sm:gap-5 flex-wrap">
        <Link
          to={'/select-package/ready'}
          className="flex items-center gap-2 p-2 sm:p-3 bg-main text-white rounded-md text-sm sm:text-base whitespace-nowrap"
        >
          <p className="text-lg sm:text-xl">
            <FaArrowLeft />
          </p>
          <span className="hidden xs:inline">Back To Map</span>
        </Link>
        <p className="hidden sm:block border-l px-3 sm:px-4 py-2 border-borders font-semibold text-sm sm:text-base">
          Smart Self-Management Calculator
        </p>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
        <p className="hidden sm:flex items-center gap-2 text-[#19B36E] text-xs sm:text-sm">
          <MdOutlineDone />
          Auto Saved
        </p>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-delete text-white rounded-md text-sm sm:text-base whitespace-nowrap"
        >
          <p className="text-xl sm:text-2xl">
            <CiLogout />
          </p>
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
