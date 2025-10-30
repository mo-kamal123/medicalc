import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import PlanData from '../../../../shared/components/plan-data';

const whitePlan = {
  id: 1,
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
  id: 2,
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
  id: 3,
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
const plans = [whitePlan, silverPlan, goldPlan];

const StandardPlanData = () => {
  return (
    <PlanData
      plans={plans}
      nextNavigation={'/standard-package/healthcare-services'}
      prevNavigation={'/select-package/ready'}
    />
  );
};

export default StandardPlanData;
