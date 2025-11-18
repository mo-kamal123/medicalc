import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import SummaryCard from '../../../../shared/UI/summary-card';

const OutpatientBenefit = ({ data }) => {
  if (!data) return null;

  const plans = [
    {
      header: {
        icon: <FaStar className="text-blue-400 text-2xl" />,
        title: 'Standard White Plan',
      },
      inputs: [
        {
          label: 'Outpatient Copayment',
          value: data.white.outpatientCopayment,
        },
        { label: 'Dental Copayment', value: data.white.dentalCopayment },
        { label: 'Optical Copayment', value: data.white.opticalCopayment },
      ],
    },
    {
      header: {
        icon: <FaMedal className="text-gray-400 text-2xl" />,
        title: 'Silver Plan',
      },
      inputs: [
        {
          label: 'Outpatient Copayment',
          value: data.silver.outpatientCopayment,
        },
        { label: 'Dental Copayment', value: data.silver.dentalCopayment },
        { label: 'Optical Copayment', value: data.silver.opticalCopayment },
      ],
    },
    {
      header: {
        icon: <FaCrown className="text-yellow-400 text-2xl" />,
        title: 'Premium Gold Plan',
      },
      inputs: [
        { label: 'Outpatient Copayment', value: data.gold.outpatientCopayment },
        { label: 'Dental Copayment', value: data.gold.dentalCopayment },
        { label: 'Optical Copayment', value: data.gold.opticalCopayment },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-gray-900 font-semibold text-2xl">
        Outpatient Benefit
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

export default OutpatientBenefit;
