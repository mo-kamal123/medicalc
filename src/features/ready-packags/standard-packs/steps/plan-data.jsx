import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import PlanCard from '../../../../shared/UI/plan-card';
import { Link } from 'react-router-dom';
{
  /* <FaMedal  className="text-gray-400" /> */
}
const PlanData = () => {
  const whitePlan = {
    header: {
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Standard White Plan',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: 10000,
        placeholder: 'Annual Limit',
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: 'A',
        placeholder: 'Applied Network',
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: 'Egypt',
        placeholder: 'Geography',
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: 'Direct Access',
        placeholder: 'Service Accessibility',
      },
    ],
  };
  const silverPlan = {
    header: {
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Silver Plan',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: 10000,
        placeholder: 'Annual Limit',
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: 'A',
        placeholder: 'Applied Network',
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: 'Egypt',
        placeholder: 'Geography',
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: 'Direct Access',
        placeholder: 'Service Accessibility',
      },
    ],
  };
  const goldPlan = {
    header: {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'premium Gold Plan',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: 10000,
        placeholder: 'Annual Limit',
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: 'A',
        placeholder: 'Applied Network',
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: 'Egypt',
        placeholder: 'Geography',
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: 'Direct Access',
        placeholder: 'Service Accessibility',
      },
    ],
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 w-full gap-10">
        <PlanCard header={whitePlan.header} inputs={whitePlan.inputs} />
        <PlanCard header={silverPlan.header} inputs={silverPlan.inputs} />
        <PlanCard header={goldPlan.header} inputs={goldPlan.inputs} />
      </div>
      <div className="flex gap-5 justify-end w-full mb-10">
        <Link
          to={-1}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl"
        >
          Previse
        </Link>
        <Link
          to={'/standard-package/healthcare-services'}
          className="flex items-center justify-center gap-2 bg-main text-white px-5 py-2 rounded-xl"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default PlanData;
