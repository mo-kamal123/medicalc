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
      data: [
        { title: '5,000', value: '_5000' },
        { title: '10,000', value: '_10000' },
        { title: '15,000', value: '_15000' },
        { title: '20,000', value: '_20000' },
        { title: '25,000', value: '_25000' },
        { title: '30,000', value: '_30000' },
        { title: '40,000', value: '_40000' },
        { title: '50,000', value: '_50000' },
        { title: '60,000', value: '_60000' },
        { title: '75,000', value: '_75000' },
        { title: '80,000', value: '_80000' },
        { title: '100,000', value: '_100000' },
        { title: '120,000', value: '_120000' },
        { title: '150,000', value: '_150000' },
        { title: '200,000', value: '_200000' },
        { title: '250,000', value: '_250000' },
        { title: '300,000', value: '_300000' },
        { title: '400,000', value: '_400000' },
        { title: '500,000', value: '_500000' },
      ],
      placeholder: 'Annual Limit',
    },
    {
      label: 'Applied Network',
      data: [
        { title: 'A', value: 'A' },
        { title: 'B', value: 'B' },
        { title: 'C', value: 'C' },
      ],
      placeholder: 'Applied Network',
    },
    {
      label: 'Geography',
      data: [
        { title: 'Egypt', value: 'Egypt' },
        { title: 'Worldwide', value: 'Worldwide' },
        { title: 'Mena', value: 'Mena' },
      ],
      placeholder: 'Geography',
    },
    {
      label: 'Service Accessibility',
      data: [
        { title: 'Direct Access', value: 'Direct_Access' },
        { title: 'Pre-approval Required', value: 'Pre-approval_Required' },
        { title: 'Referral Required', value: 'Referral_Required' },
      ],
      placeholder: 'Service Accessibility',
    },
  ];

      // Get plan name from title
      const getPlanKey = (title) => {
        const lower = title?.toLowerCase?.() || '';
      if (lower.includes('1')) return 'planOne';
      if (lower.includes('2')) return 'plaTwo';
      if (lower.includes('3')) return 'planThree';
      if (lower.includes('4')) return 'planFour';
      if (lower.includes('5')) return 'planFive';
      if (lower.includes('6')) return 'planSix';
      if (lower.includes('7')) return 'planSeven';
      if (lower.includes('8')) return 'planEight';
      if (lower.includes('9')) return 'planNine';
      if (lower.includes('10')) return 'planTen';
      return title;
    };


  // Initialize plans if none exist
  useEffect(() => {
    if (Object.keys(customPlans).length === 0) {
      // Convert the array from generatePlans into a keyed object: { plan1: {...}, plan2: {...} }
      const generatedArray = generatePlans(count, baseInputs);
      const generatedObject = generatedArray.reduce((acc, plan, i) => {
        const title = `Plan ${i + 1}`;
        acc[getPlanKey(title)] = {};
        return acc;
      }, {});
      
      dispatch(setCustomPlans(generatedObject));
      console.log( generatedObject);
    }
  }, [count, customPlans, dispatch]);

  // Handle field change
  const handleChange = (planName, key, value) => {
    dispatch(updateCustomPlan({ planName, key, value }));
  };

  // Build plans dynamically for <PlanData />
  const plans = Array.from({ length: count }, (_, i) => {
    const planName = `plan${i + 1}`;
    const planData = customPlans[getPlanKey(planName)] || {};

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
          onChange: (value) => handleChange(getPlanKey(planName), key, value),
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
