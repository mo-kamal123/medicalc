import { CiLogout } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center p-6 rounded-xl">
      <div className="flex items-center gap-5">
        <Link
          to={'/select-package/ready'}
          className="flex items-center gap-2 p-3 bg-main text-white rounded-md"
        >
          <p className="text-xl">
            <FaArrowLeft />
          </p>
          Back To Map
        </Link>
        <p className=" border-l px-4 py-2 border-borders font-semibold">
          Smart Self-Management Calculator
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p className="flex items-center gap-2 text-[#19B36E] text-sm">
          <MdOutlineDone />
          Auto Saved
        </p>
        <button className="flex items-center gap-2 px-5 py-3 bg-delete text-white rounded-md">
          <p className="text-2xl">
            <CiLogout />
          </p>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
