import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import SummaryCard from '../../../../shared/UI/summary-card';

const whitePlan = {
  header: {
    icon: <FaStar className="text-blue-400 text-2xl" />,
    title: 'Standard White Plan',
  },
  inputs: [
    {
      label: 'Residence class',
      data: ['Lux', 'Company', '0%'],
      defaultValue: 'Lux',
      placeholder: 'Residence class',
    },
    {
      label: 'Inpatient & one day cases',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Inpatient & one day cases',
    },
    {
      label: 'Icu (up to 14 days)',
      data: ['Full Coverage', 'medical supervision'],
      defaultValue: 'Full Coverage',
      placeholder: 'Icu (up to 14 days)',
    },
    {
      label: 'Road Ambulance',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Road Ambulance',
    },
    {
      label: 'Parent Accommodation (for children less than 18)',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Parent Accommodation',
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
      label: 'Residence class',
      data: ['Lux', 'Company', '0%'],
      defaultValue: 'Lux',
      placeholder: 'Residence class',
    },
    {
      label: 'Inpatient & one day cases',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Inpatient & one day cases',
    },
    {
      label: 'Icu (up to 14 days)',
      data: ['Full Coverage', 'medical supervision'],
      defaultValue: 'Full Coverage',
      placeholder: 'Icu (up to 14 days)',
    },
    {
      label: 'Road Ambulance',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Road Ambulance',
    },
    {
      label: 'Parent Accommodation (for children less than 18)',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Parent Accommodation',
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
      label: 'Residence class',
      data: ['Lux', 'Company', '0%'],
      defaultValue: 'Lux',
      placeholder: 'Residence class',
    },
    {
      label: 'Inpatient & one day cases',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Inpatient & one day cases',
    },
    {
      label: 'Icu (up to 14 days)',
      data: ['Full Coverage', 'medical supervision'],
      defaultValue: 'Full Coverage',
      placeholder: 'Icu (up to 14 days)',
    },
    {
      label: 'Road Ambulance',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Road Ambulance',
    },
    {
      label: 'Parent Accommodation (for children less than 18)',
      data: ['Full Coverage'],
      defaultValue: 'Full Coverage',
      placeholder: 'Parent Accommodation',
    },
  ],
};

const InpatientBenefit = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-dark font-semibold text-2xl">
        Inpatient & daycare benefit
      </h2>
      <div className="flex gap-5">
        <SummaryCard header={whitePlan.header} inputs={whitePlan.inputs} />
        <SummaryCard header={silverPlan.header} inputs={silverPlan.inputs} />
        <SummaryCard header={goldPlan.header} inputs={goldPlan.inputs} />
      </div>
    </div>
  );
};

export default InpatientBenefit;
