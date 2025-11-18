import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import SummaryCard from '../../../../shared/UI/summary-card';

const GeneralBenefited = ({ data }) => {
  if (!data) return null;

  const plans = [
    {
      header: {
        icon: <FaStar className="text-blue-400 text-2xl" />,
        title: 'Standard White Plan',
      },
      inputs: [
        { label: 'Annual Limit', value: data.white.annuallimit },
        { label: 'Applied Network', value: data.white.appliednetwork },
        { label: 'Geography', value: data.white.geography },
        {
          label: 'Service Accessibility',
          value: data.white.serviceaccessibility,
        },
      ],
    },
    {
      header: {
        icon: <FaMedal className="text-gray-400 text-2xl" />,
        title: 'Silver Plan',
      },
      inputs: [
        { label: 'Annual Limit', value: data.silver.annuallimit },
        { label: 'Applied Network', value: data.silver.appliednetwork },
        { label: 'Geography', value: data.silver.geography },
        {
          label: 'Service Accessibility',
          value: data.silver.serviceaccessibility,
        },
      ],
    },
    {
      header: {
        icon: <FaCrown className="text-yellow-400 text-2xl" />,
        title: 'Premium Gold Plan',
      },
      inputs: [
        { label: 'Annual Limit', value: data.gold.annuallimit },
        { label: 'Applied Network', value: data.gold.appliednetwork },
        { label: 'Geography', value: data.gold.geography },
        {
          label: 'Service Accessibility',
          value: data.gold.serviceaccessibility,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-dark font-semibold text-2xl">General Benefited</h2>
      <div className="flex gap-5">
        {plans.map((plan, idx) => (
          <SummaryCard
            key={idx}
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

export default GeneralBenefited;
