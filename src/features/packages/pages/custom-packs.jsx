import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import custom from '../assets/custom.png';
const CustomPacks = () => {
  return (
    <div className="bg-white p-5 w-2/3 mt-5 m-auto rounded-xl flex flex-col items-center gap-5 justify-center">
      <img className="w-60" src={custom} alt="custom image" />
      <div className="w-[90%] m-auto flex flex-col items-start gap-10">
        <div className="w-full flex flex-col items-start gap-3">
          <label htmlFor="programs-numbers" className="text-label">
            How many programs do you want to configure ?
          </label>
          <div className="relative w-full">
            <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-2xl" />
            <input
              type="text"
              id="programs-numbers"
              className="border border-borders w-full p-3 pl-12 rounded-xl placeholder-sec"
              placeholder="Enter number of program"
            />
          </div>
        </div>
        <Link
          to={'/select-package/ready'}
          className="flex items-center justify-center gap-2 w-full bg-main text-white p-3 rounded-xl"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default CustomPacks;
