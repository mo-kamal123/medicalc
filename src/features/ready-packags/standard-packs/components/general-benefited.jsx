import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import SummaryCard from '../../../../shared/UI/summary-card';

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
const GeneralBenefited = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-dark font-semibold text-2xl">General Benefited</h2>
      <div className="flex gap-5">
        <SummaryCard header={whitePlan.header} inputs={whitePlan.inputs} />
        <SummaryCard header={silverPlan.header} inputs={silverPlan.inputs} />
        <SummaryCard header={goldPlan.header} inputs={goldPlan.inputs} />
      </div>
    </div>
  );
};

export default GeneralBenefited;
