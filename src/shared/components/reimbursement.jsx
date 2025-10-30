import {
  FaPercentage,
  FaFileInvoiceDollar,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PlanCard from '../UI/plan-card';
import usePagination from '../hooks/usePagination';

const Reimbursement = ({ plans, prevNavigation, nextNavigation }) => {
  const [page, setPage] = useState(1);
  const pageplans = usePagination(page, plans);
  const planData = [
    {
      header: {
        icon: <FaPercentage className="text-green-500 text-2xl" />,
        title: 'Reimbursement Rate',
      },
      inputs: [
        {
          label: 'Reimbursement',
          data: ['0%', '70%', '80%', '100%'],
          defaultValue: 'Reimbursement',
          placeholder: 'Reimbursement',
        },
        {
          label: 'Doctor Visit Copayment',
          data: ['0%', '10%', '15%', '20%'],
          defaultValue: 'Doctor Visit Copayment',
          placeholder: 'Doctor Visit Copayment',
        },
        {
          label: 'Doctor Visit Money',
          data: ['EGP 100', 'EGP 150', 'EGP 200', 'EGP 300', 'EGP 400'],
          defaultValue: 'Doctor Visit Money',
          placeholder: 'Doctor Visit Money',
        },
      ],
    },
    {
      header: {
        icon: <FaFileInvoiceDollar className="text-purple-500 text-2xl" />,
        title: 'Reimbursement Details',
      },
      inputs: [
        {
          label: 'Pricing Terms',
          data: ['Pricing Terms'],
          defaultValue: 'Pricing Terms',
          placeholder: 'Pricing Terms',
        },
        {
          label: 'Laboratory and Scans',
          data: ['Laboratory and Scans'],
          defaultValue: 'Laboratory and Scans',
          placeholder: 'Laboratory and Scans',
        },
        {
          label: 'Payment Cycle',
          data: ['Payment Cycle'],
          defaultValue: 'Payment Cycle',
          placeholder: 'Payment Cycle',
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-6">
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
      <div className="grid grid-cols-3 gap-5">
        {pageplans.map((plan) => (
          <div className="flex flex-col gap-10">
            <PlanCard header={plan} />
            {planData.map((data) => (
              <>
                <PlanCard header={data.header} inputs={data.inputs} />
              </>
            ))}
          </div>
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

export default Reimbursement;
