import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import PlanCard from '../../../../shared/UI/plan-card';
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
      title: 'Primmum Gold Plan',
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
    <div className="grid grid-cols-3 w-full gap-10">
      <PlanCard header={whitePlan.header} inputs={whitePlan.inputs} />
      <PlanCard header={silverPlan.header} inputs={silverPlan.inputs} />
      <PlanCard header={goldPlan.header} inputs={goldPlan.inputs} />
    </div>
  );
};

export default PlanData;
