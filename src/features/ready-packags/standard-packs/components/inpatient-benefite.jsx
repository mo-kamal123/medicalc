import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import SummaryCard from '../../../../shared/UI/summary-card';

const InpatientBenefit = ({ data }) => {
  if (!data) return null;

  const plans = [
    {
      header: {
        icon: <FaStar className="text-blue-400 text-2xl" />,
        title: 'Standard White Plan',
      },
      inputs: [
        { label: 'Room Type', value: data.white.roomType || '—' },
        { label: 'Inpatient Copayment', value: data.white.inpatientCopayment },
        {
          label: 'Physiotherapy Sessions',
          value: data.white.physioTherapyCount,
        },
        { label: 'Maternity Care', value: data.white.maternityCare },
      ],
    },
    {
      header: {
        icon: <FaMedal className="text-gray-400 text-2xl" />,
        title: 'Silver Plan',
      },
      inputs: [
        { label: 'Room Type', value: data.silver.roomType || '—' },
        { label: 'Inpatient Copayment', value: data.silver.inpatientCopayment },
        {
          label: 'Physiotherapy Sessions',
          value: data.silver.physioTherapyCount,
        },
        { label: 'Maternity Care', value: data.silver.maternityCare },
      ],
    },
    {
      header: {
        icon: <FaCrown className="text-yellow-400 text-2xl" />,
        title: 'Premium Gold Plan',
      },
      inputs: [
        { label: 'Room Type', value: data.gold.roomType || '—' },
        { label: 'Inpatient Copayment', value: data.gold.inpatientCopayment },
        {
          label: 'Physiotherapy Sessions',
          value: data.gold.physioTherapyCount,
        },
        { label: 'Maternity Care', value: data.gold.maternityCare },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-gray-900 font-semibold text-2xl">
        Inpatient & Daycare Benefit
      </h2>
      <div className="flex gap-5">
        {plans.map((plan, i) => (
          <SummaryCard
            key={i}
            header={plan.header}
            inputs={plan.inputs.map((input) => ({
              label: input.label,
              data: [input.value],
              defaultValue: input.value,
              placeholder: input.label,
            }))}
          />
        ))}
      </div>
    </div>
  );
};

export default InpatientBenefit;
