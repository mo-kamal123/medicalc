import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import custom from '../assets/custom.png';

const CustomPacks = () => {
  const [programCount, setProgramCount] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (
      !programCount ||
      isNaN(programCount) ||
      programCount <= 0 ||
      programCount > 10
    ) {
      alert('Please enter a valid number of programs.');
      return;
    }

    navigate(`/custom-package/plan-data?count=${programCount}`);
  };

  return (
    <div className="bg-white p-4 sm:p-5 w-full sm:w-[90%] md:w-2/3 mt-3 sm:mt-4 lg:mt-5 m-auto rounded-xl flex flex-col items-center gap-4 sm:gap-5 justify-center px-4 sm:px-6">
      <img
        className="w-40 sm:w-48 lg:w-60 h-auto"
        src={custom}
        alt="custom image"
      />
      <div className="w-full sm:w-[90%] m-auto flex flex-col items-start gap-6 sm:gap-8 lg:gap-10">
        <div className="w-full flex flex-col items-start gap-3">
          <label
            htmlFor="programs-numbers"
            className="text-label text-sm sm:text-base"
          >
            How many programs do you want to configure?
          </label>
          <div className="relative w-full">
            <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-xl sm:text-2xl" />
            <input
              type="number"
              id="programs-numbers"
              value={programCount}
              onChange={(e) => setProgramCount(e.target.value)}
              className="border border-borders w-full p-2.5 sm:p-3 pl-10 sm:pl-12 rounded-xl placeholder-sec text-sm sm:text-base"
              placeholder="Enter number of programs"
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center gap-2 w-full bg-main text-white p-2.5 sm:p-3 rounded-xl text-sm sm:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomPacks;
