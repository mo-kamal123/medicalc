import { Link } from 'react-router-dom';
import PlanCard from '../../../../shared/UI/plan-card';
import {
  FaExclamationTriangle,
  FaChartLine,
  FaExclamationCircle,
  FaCrown,
  FaMedal,
  FaStar,
} from 'react-icons/fa';
import { CiCalculator1 } from 'react-icons/ci';

const CoverageDetails = () => {
  const planData = [
    {
      header: {
        icon: <FaExclamationTriangle className="text-orange-500 text-2xl" />,
        title: 'Exceptions Details',
      },
      inputs: [
        {
          label: 'Number of services',
          data: ['Number of services'],
          defaultValue: 'Number of services',
          placeholder: 'Number of services',
        },
        {
          label: 'Percentage / Number of member',
          data: ['Percentage / Number of member'],
          defaultValue: 'Percentage / Number of member',
          placeholder: 'Percentage / Number of member',
        },
        {
          label: 'Total in EGP',
          data: ['Total in EGP'],
          defaultValue: 'Total in EGP',
          placeholder: 'Total in EGP',
        },
      ],
    },
    {
      header: {
        icon: <FaChartLine className="text-red-500 text-2xl" />,
        title: 'Exceled Maximum Limit',
      },
      inputs: [
        {
          label: 'Number of services',
          data: ['Number of services'],
          defaultValue: 'Number of services',
          placeholder: 'Number of services',
        },
        {
          label: 'Percentage / Number of member',
          data: ['Percentage / Number of member'],
          defaultValue: 'Percentage / Number of member',
          placeholder: 'Percentage / Number of member',
        },
        {
          label: 'Total in EGP',
          data: ['Total in EGP'],
          defaultValue: 'Total in EGP',
          placeholder: 'Total in EGP',
        },
      ],
    },
    {
      header: {
        icon: <FaExclamationCircle className="text-red-600 text-2xl" />,
        title: 'Critical Case',
      },
      inputs: [
        {
          label: 'Number of services',
          data: ['Number of services'],
          defaultValue: 'Number of services',
          placeholder: 'Number of services',
        },
        {
          label: 'Percentage / Number of member',
          data: ['Percentage / Number of member'],
          defaultValue: 'Percentage / Number of member',
          placeholder: 'Percentage / Number of member',
        },
        {
          label: 'Total in EGP',
          data: ['Total in EGP'],
          defaultValue: 'Total in EGP',
          placeholder: 'Total in EGP',
        },
      ],
    },
  ];
  const plans = [
    {
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Standard White Plan',
      data: {
        employees: 25,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },
    {
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Silver Plan',
      data: {
        employees: 20,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },
    {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Premium Gold Plan',
      data: {
        employees: 50,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },
    {
      title: 'Employees',
      data: {
        employees: 'Total Employees',
        pooled: 'Total Premium with pooled benefit',
        total: 'Total Premium EGP',
      },
    },
  ];
  return (
    <div>
      <h2 className="text-xl font-semibold my-5">Pooled Benefit Details</h2>
      <div className="flex items-center gap-5 w-[97%] m-auto">
        {planData.map((plan) => (
          <>
            <PlanCard header={plan.header} inputs={plan.inputs} />
          </>
        ))}
      </div>
      <h2 className="text-xl font-semibold my-5">Additional Expenses</h2>
      <div className="flex items-center gap-5 w-[97%] m-auto">
        <PlanCard
          header={{
            icon: (
              <FaExclamationTriangle className="text-orange-500 text-2xl" />
            ),
            title: 'Exceptions Details',
          }}
          inputs={[
            {
              label: 'Printed car price per person (EGP)',
              data: ['Printed car price per person (EGP)'],
              defaultValue: 'Printed car price per person (EGP)',
              placeholder: 'Printed car price per person (EGP)',
            },
            {
              label: 'Admin Fees',
              data: ['Admin Fees'],
              defaultValue: 'Admin Fees',
              placeholder: 'Admin Fees',
            },
          ]}
        />
      </div>
      <div className="my-5">
        <div className="grid grid-cols-4 gap-10 w-full">
          {plans.map((plan, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              {/* Plan Header */}
              <PlanCard
                header={{
                  icon: plan.icon,
                  title: plan.title,
                }}
              />

              {/* Green Card */}
              <div className="w-full bg-[#06A535] text-white  text-center py-4 rounded-xl">
                {plan.data.employees}
              </div>

              {/* Orange Card */}
              <div className="w-full bg-[#CA8A04] text-white  text-center py-4 rounded-xl">
                {plan.data.pooled}
              </div>

              {/* Blue Card */}
              <div className="w-full bg-[#0044BE] text-white  text-center py-4 rounded-xl">
                {plan.data.total}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-end w-full my-10">
          <Link
            to={-1}
            className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl"
          >
            Previse
          </Link>
          <Link
            to={'/standard-package/installments'}
            className="flex items-center justify-center gap-2 bg-main text-white px-5 py-2 rounded-xl"
          >
            <CiCalculator1 />
            Calculator Benefits
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoverageDetails;
