import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PlanData from '../../../shared/components/plan-data';
import { generatePlans } from '../utils/plan-genrator';
import { setCustomPlans, updateCustomPlan } from '../store/custom-plan-slice';
import Breadcrumb from '../../../shared/UI/breadcrumb';
// import { setCustomPlans, updateCustomPlan } from '../store/customPlanSlice';

const CustomPlanData = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 1;

  const { customPlans } = useSelector((state) => state.customPlan);

  // Define the available inputs for each plan
  const baseInputs = [
    {
      label: 'Annual Limit',
      data: [10000, 12000, 13000],
      placeholder: 'Annual Limit',
    },
    {
      label: 'Applied Network',
      data: ['A', 'B', 'C'],
      placeholder: 'Applied Network',
    },
    {
      label: 'Geography',
      data: ['Egypt', 'Worldwide', 'Mena'],
      placeholder: 'Geography',
    },
    {
      label: 'Service Accessibility',
      data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
      placeholder: 'Service Accessibility',
    },
  ];

  // Initialize plans if none exist
  useEffect(() => {
    if (Object.keys(customPlans).length === 0) {
      // Convert the array from generatePlans into a keyed object: { plan1: {...}, plan2: {...} }
      const generatedArray = generatePlans(count, baseInputs);
      const generatedObject = generatedArray.reduce((acc, plan, i) => {
        acc[`plan${i + 1}`] = {}; // Empty initially — user will fill in
        return acc;
      }, {});
      dispatch(setCustomPlans(generatedObject));
    }
  }, [count, customPlans, dispatch]);

  // Handle field change
  const handleChange = (planName, key, value) => {
    dispatch(updateCustomPlan({ planName, key, value }));
  };

  // Build plans dynamically for <PlanData />
  const plans = Array.from({ length: count }, (_, i) => {
    const planName = `plan${i + 1}`;
    const planData = customPlans[planName] || {};

    return {
      id: i + 1,
      header: { title: `Plan ${i + 1}` },
      inputs: baseInputs.map((input) => {
        // Convert label to a safe key name (e.g. "Annual Limit" → "annualLimit")
        const key = input.label.replace(/\s+/g, '').toLowerCase();
        return {
          label: input.label,
          data: input.data,
          placeholder: input.placeholder,
          defaultValue: planData[key] || '',
          onChange: (value) => handleChange(planName, key, value),
        };
      }),
    };
  });
  console.log(customPlans);
  const breadcrumbItems = [
    {
      title: 'Plan Data',
      url: `/custom-package/plan-data?count=${count}`,
      active: true,
    },
    {
      title: 'Healthcare Services',
      url: `/custom-package/healthcare-services?count=${count}`,
      active: false,
    },
    {
      title: 'Reimbursement Details',
      url: `/custom-package/reimbursement-details?count=${count}`,
      active: false,
    },
    {
      title: 'Plan Summary',
      url: `/custom-package/plan-summary?count=${count}`,
      active: false,
    },
    {
      title: 'Customize plan by age',
      url: `/custom-package/customize-plan-by-age?count=${count}`,
      active: false,
    },
    {
      title: 'Coverage & Expense Details',
      url: `/custom-package/coverage-details?count=${count}`,
      active: false,
    },
    {
      title: 'Installments',
      url: `/custom-package/installments?count=${count}`,
      active: false,
    },
    {
      title: 'Summary',
      url: `/custom-package/summary?count=${count}`,
      active: false,
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />

      <PlanData
        plans={plans}
        nextNavigation={`/custom-package/healthcare-services?count=${count}`}
        prevNavigation="/select-package/custom"
      />
    </div>
  );
};

export default CustomPlanData;
