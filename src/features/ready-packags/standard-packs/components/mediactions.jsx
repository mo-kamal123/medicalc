import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import SummaryCard from '../../../../shared/UI/summary-card';

const Mediactions = ({ data }) => {
  if (!data) return null;

  const plans = [
    {
      header: {
        icon: <FaStar className="text-blue-400 text-2xl" />,
        title: 'Standard White Plan',
      },
      inputs: [
        {
          label: 'Prescription Medication & Chronic',
          value: data.white.prescriptionMedicinesCopayment,
        },
      ],
    },
    {
      header: {
        icon: <FaMedal className="text-gray-400 text-2xl" />,
        title: 'Silver Plan',
      },
      inputs: [
        {
          label: 'Prescription Medication & Chronic',
          value: data.silver.prescriptionMedicinesCopayment,
        },
      ],
    },
    {
      header: {
        icon: <FaCrown className="text-yellow-400 text-2xl" />,
        title: 'Premium Gold Plan',
      },
      inputs: [
        {
          label: 'Prescription Medication & Chronic',
          value: data.gold.prescriptionMedicinesCopayment,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-gray-900 font-semibold text-2xl">Medications</h2>
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

export default Mediactions;
