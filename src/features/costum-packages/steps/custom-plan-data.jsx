import { useState } from 'react';
import PlanData from '../../../shared/components/plan-data';
import { generatePlans } from '../utils/plan-genrator';
import { useSearchParams } from 'react-router-dom';

const CustomPlanData = () => {
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 1;

  const baseInputs = [
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
  ];

  const [plans] = useState(generatePlans(count, baseInputs));
  return (
    <PlanData
      plans={plans}
      nextNavigation={`/custom-package/healthcare-services?count=${count}`}
      prevNavigation={'/select-package/custom'}
    />
  );
};

export default CustomPlanData;
