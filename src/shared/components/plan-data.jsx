import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PlanCard from '../UI/plan-card';
import usePagination from '../hooks/usePagination';
import useValidation from '../hooks/useValidation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PlanData = ({ plans, prevNavigation, nextNavigation }) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const pageplans = usePagination(page, plans);
  const { validateDropdowns, invalidFields, clearInvalidField } =
    useValidation(plans);

  const handleNext = () => {
    if (validateDropdowns()) {
      navigate(nextNavigation);
    }
  };

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
              className={`${
                pageplans[0].id === 1 ? 'bg-[#D8D8D8]' : 'bg-main'
              } text-white p-2 rounded transition-all duration-200`}
              onClick={() => setPage((prev) => prev - 1)}
            >
              <FaArrowLeft />
            </button>
            <button
              disabled={pageplans[pageplans.length - 1].id === plans.length}
              className={`${
                pageplans[pageplans.length - 1].id === plans.length
                  ? 'bg-[#D8D8D8]'
                  : 'bg-main'
              } text-white p-2 rounded transition-all duration-200`}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-10 md:gap-5">
        {pageplans.map((plan) => (
          <PlanCard
            key={plan.id}
            header={plan.header}
            inputs={plan.inputs}
            planId={plan.id}
            invalidFields={invalidFields}
            clearInvalidField={clearInvalidField}
          />
        ))}
      </div>

      <div className="flex gap-5 justify-end w-full mb-10">
        <button
          onClick={() => navigate(prevNavigation)}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl hover:bg-main/10 transition-all"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center gap-2 bg-main text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PlanData;
