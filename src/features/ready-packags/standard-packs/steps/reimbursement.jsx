import {
  FaPercentage,
  FaFileInvoiceDollar,
  FaStar,
  FaMedal,
  FaCrown,
} from 'react-icons/fa';
import PlanCard from '../../../../shared/UI/plan-card';
import { Link } from 'react-router-dom';

const Reimbursement = () => {
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
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-10">
          <PlanCard
            header={{
              icon: <FaStar className="text-blue-400 text-2xl" />,
              title: 'Standard White Plan',
            }}
          />
          {planData.map((data) => (
            <>
              <PlanCard header={data.header} inputs={data.inputs} />
            </>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <PlanCard
            header={{
              icon: <FaMedal className="text-gray-400 text-2xl" />,
              title: 'Silver Plan',
            }}
          />
          {planData.map((data) => (
            <>
              <PlanCard header={data.header} inputs={data.inputs} />
            </>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <PlanCard
            header={{
              icon: <FaCrown className="text-yellow-400 text-2xl" />,
              title: 'premium Gold Plan',
            }}
          />
          {planData.map((data) => (
            <>
              <PlanCard header={data.header} inputs={data.inputs} />
            </>
          ))}
        </div>
      </div>
      <div className="flex gap-5 justify-end w-full mb-10">
        <Link
          to={-1}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl"
        >
          Previse
        </Link>
        <Link
          to={'/standard-package/plan-by-age/summary'}
          className="flex items-center justify-center gap-2 bg-main text-white px-5 py-2 rounded-xl"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default Reimbursement;
