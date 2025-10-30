import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PlanCard from '../UI/plan-card';
import usePagination from '../hooks/usePagination';

const PlanData = ({ plans, prevNavigation, nextNavigation }) => {
  const [page, setPage] = useState(1);
  const pageplans = usePagination(page, plans);
  console.log(plans.length);
  console.log(pageplans[pageplans.length - 1]);
  return (
    <div className="flex flex-col gap-5">
      {plans.length > 3 && (
        <div className="flex justify-between items-center w-full gap-3">
          <p className="text-main text-2xl font-semibold">
            Swap or use arrow to explore more program
          </p>
          <div className="flex items-center gap-3">
            <button
              disabled={pageplans[0].id === 1}
              className={`${pageplans[0].id === 1 ? 'bg-[#D8D8D8]' : 'bg-main'} text-white p-2 rounded transition-all duration-200`}
              onClick={() => setPage((prev) => prev - 1)}
            >
              <FaArrowLeft />
            </button>
            <button
              disabled={pageplans[pageplans.length - 1].id === plans.length}
              className={`${pageplans[pageplans.length - 1].id === plans.length ? 'bg-[#D8D8D8]' : 'bg-main'} text-white p-2 rounded transition-all duration-200`}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-3 w-full gap-10">
        {pageplans.map((plan) => (
          <PlanCard key={plan.id} header={plan.header} inputs={plan.inputs} />
        ))}
      </div>
      <div className="flex gap-5 justify-end w-full mb-10">
        <Link
          to={prevNavigation}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl"
        >
          Previse
        </Link>
        <Link
          to={nextNavigation}
          className="flex items-center justify-center gap-2 bg-main text-white px-5 py-2 rounded-xl"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default PlanData;
