import { useDispatch, useSelector } from 'react-redux';
import PlanData from '../../../../shared/components/plan-data';
import { updatePremiumPlan } from '../store/premium-plan-slice';
import Breadcrumb from '../../../../shared/UI/breadcrumb';

const PremiumPlanData = () => {
  const dispatch = useDispatch();
  const premiumPlan = useSelector((state) => state.premiumPlan.premiumPlan);

  // Dispatch Redux action when user changes a field
  const handleChange = (planName, key, value) => {
    dispatch(updatePremiumPlan({ planName, key, value }));
  };
  const programOne = {
    id: 1,
    header: { title: 'Plan 1' },
    inputs: [
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
        defaultValue: premiumPlan.planOne.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('planOne', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: [
          { title: 'A', value: 'A' },
          { title: 'B', value: 'B' },
          { title: 'C', value: 'C' },
        ],
        defaultValue: premiumPlan.planOne.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('planOne', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: [
          { title: 'Egypt', value: 'Egypt' },
          { title: 'Worldwide', value: 'Worldwide' },
          { title: 'Mena', value: 'Mena' },
        ],
        defaultValue: premiumPlan.planOne.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('planOne', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: [
          { title: 'Direct Access', value: 'Direct Access' },
          { title: 'Pre-approval Required', value: 'Pre-approval Required' },
          { title: 'Referral Required', value: 'Referral Required' },
        ],
        defaultValue: premiumPlan.planOne.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) =>
          handleChange('planOne', 'serviceAccessibility', item),
      },
    ],
  };

  const programTwo = {
    id: 2,
    header: {
      title: 'Plan 2',
    },
    inputs: [
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
        defaultValue: premiumPlan.planTwo.annualLimit, // ✅ FIXED
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('planTwo', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: [
          { title: 'A', value: 'A' },
          { title: 'B', value: 'B' },
          { title: 'C', value: 'C' },
        ],
        defaultValue: premiumPlan.planTwo.appliedNetwork, // ✅ FIXED
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('planTwo', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: [
          { title: 'Egypt', value: 'Egypt' },
          { title: 'Worldwide', value: 'Worldwide' },
          { title: 'Mena', value: 'Mena' },
        ],
        defaultValue: premiumPlan.planTwo.geography, // ✅ FIXED
        placeholder: 'Geography',
        onChange: (item) => handleChange('planTwo', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: [
          { title: 'Direct Access', value: 'Direct Access' },
          { title: 'Pre-approval Required', value: 'Pre-approval Required' },
          { title: 'Referral Required', value: 'Referral Required' },
        ],
        defaultValue: premiumPlan.planTwo.serviceAccessibility, // ✅ FIXED
        placeholder: 'Service Accessibility',
        onChange: (item) =>
          handleChange('planTwo', 'serviceAccessibility', item),
      },
    ],
  };

  const programThree = {
    id: 3,
    header: {
      title: 'Plan 3',
    },
    inputs: [
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
        defaultValue: premiumPlan.planThree.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('planThree', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: [
          { title: 'A', value: 'A' },
          { title: 'B', value: 'B' },
          { title: 'C', value: 'C' },
        ],
        defaultValue: premiumPlan.planThree.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('planThree', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: [
          { title: 'Egypt', value: 'Egypt' },
          { title: 'Worldwide', value: 'Worldwide' },
          { title: 'Mena', value: 'Mena' },
        ],
        defaultValue: premiumPlan.planThree.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('planThree', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: [
          { title: 'Direct Access', value: 'Direct Access' },
          { title: 'Pre-approval Required', value: 'Pre-approval Required' },
          { title: 'Referral Required', value: 'Referral Required' },
        ],
        defaultValue: premiumPlan.planThree.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) =>
          handleChange('planThree', 'serviceAccessibility', item),
      },
    ],
  };

  const programFour = {
    id: 4,
    header: {
      title: 'Plan 4',
    },
    inputs: [
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
        defaultValue: premiumPlan.planFour.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('planFour', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: [
          { title: 'A', value: 'A' },
          { title: 'B', value: 'B' },
          { title: 'C', value: 'C' },
        ],
        defaultValue: premiumPlan.planFour.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('planFour', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: [
          { title: 'Egypt', value: 'Egypt' },
          { title: 'Worldwide', value: 'Worldwide' },
          { title: 'Mena', value: 'Mena' },
        ],
        defaultValue: premiumPlan.planFour.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('planFour', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: [
          { title: 'Direct Access', value: 'Direct Access' },
          { title: 'Pre-approval Required', value: 'Pre-approval Required' },
          { title: 'Referral Required', value: 'Referral Required' },
        ],
        defaultValue: premiumPlan.planFour.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) =>
          handleChange('planFour', 'serviceAccessibility', item),
      },
    ],
  };
  const plans = [programOne, programTwo, programThree, programFour];

  const breadcrumbItems = [
    { title: 'Plan Data', url: '/premium-package/plan-data', active: true },
    {
      title: 'Healthcare Services',
      url: '/premium-package/healthcare-services',
      active: false,
    },
    {
      title: 'Reimbursement Details',
      url: '/premium-package/reimbursement-details',
      active: false,
    },
    {
      title: 'Plan Summary',
      url: '/premium-package/plan-summary',
      active: false,
    },
    {
      title: 'Customize plan by age',
      url: '/premium-package/customize-plan-by-age',
      active: false,
    },
    {
      title: 'Coverage & Expense Details',
      url: '/premium-package/coverage-details',
      active: false,
    },
    {
      title: 'Installments',
      url: '/premium-package/installments',
      active: false,
    },
    { title: 'Summary', url: '/premium-package/summary', active: false },
  ];
  console.log(premiumPlan);
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />

      <PlanData
        plans={plans}
        nextNavigation={'/premium-package/healthcare-services'}
        prevNavigation={'/select-package/ready'}
      />
    </div>
  );
};

export default PremiumPlanData;
