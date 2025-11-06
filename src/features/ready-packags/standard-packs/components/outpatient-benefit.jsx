import SummaryCard from '../../../../shared/UI/summary-card';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';

const whitePlan = {
  header: {
    icon: <FaStar className="text-blue-400 text-2xl" />,
    title: 'Standard White Plan',
  },
  inputs: [
    {
      label: 'Consultation',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Consultation',
    },
    {
      label: 'Lab test',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Lab test',
    },
    {
      label: 'Scan',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Scan',
    },
    {
      label: 'Physiotherapy',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Physiotherapy',
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
      label: 'Consultation',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Consultation',
    },
    {
      label: 'Lab test',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Lab test',
    },
    {
      label: 'Scan',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Scan',
    },
    {
      label: 'Physiotherapy',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Physiotherapy',
    },
  ],
};

const goldPlan = {
  header: {
    icon: <FaCrown className="text-yellow-400 text-2xl" />,
    title: 'Premium Gold Plan',
  },
  inputs: [
    {
      label: 'Consultation',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Consultation',
    },
    {
      label: 'Lab test',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Lab test',
    },
    {
      label: 'Scan',
      data: ['0% company'],
      defaultValue: '0% company',
      placeholder: 'Scan',
    },
    {
      label: 'Physiotherapy',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Physiotherapy',
    },
  ],
};

const OutpatientBenefit = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-dark font-semibold text-2xl">Outpatient Benefit</h2>
      <div className="flex gap-5">
        <SummaryCard header={whitePlan.header} inputs={whitePlan.inputs} />
        <SummaryCard header={silverPlan.header} inputs={silverPlan.inputs} />
        <SummaryCard header={goldPlan.header} inputs={goldPlan.inputs} />
      </div>
    </div>
  );
};

export default OutpatientBenefit;
