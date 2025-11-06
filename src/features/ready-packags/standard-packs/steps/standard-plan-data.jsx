import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import PlanData from '../../../../shared/components/plan-data';
import { useDispatch, useSelector } from 'react-redux';
import { updateStandardPlan } from '../store/standard-plan-slice';
import Breadcrumb from '../../../../shared/UI/breadcrumb';

const StandardPlanData = () => {
  const dispatch = useDispatch();
  const standardPlanData = useSelector(
    (state) => state.standardPlan.standardPlan
  );

  // Dispatch Redux action when user changes a field
  const handleChange = (planName, key, value) => {
    dispatch(updateStandardPlan({ planName, key, value }));
  };

  const white = {
    id: 1,
    header: {
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Standard White Plan',
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
        defaultValue: standardPlanData.white.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('white', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: [
          { title: 'A', value: 'A' },
          { title: 'B', value: 'B' },
          { title: 'C', value: 'C' },
        ],
        defaultValue: standardPlanData.white.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('white', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: [
          { title: 'Egypt', value: 'Egypt' },
          { title: 'Worldwide', value: 'Worldwide' },
          { title: 'Mena', value: 'Mena' },
        ],
        defaultValue: standardPlanData.white.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('white', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: [
          { title: 'Direct Access', value: 'Direct_Access' },
          { title: 'Pre-approval Required', value: 'Pre-approval_Required' },
          { title: 'Referral Required', value: 'Referral_Required' },
        ],
        defaultValue: standardPlanData.white.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) => handleChange('white', 'serviceAccessibility', item),
      },
    ],
  };

  const silver = {
    id: 2,
    header: {
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Silver Plan',
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
        defaultValue: standardPlanData.silver.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('silver', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: [
          { title: 'A', value: 'A' },
          { title: 'B', value: 'B' },
          { title: 'C', value: 'C' },
        ],
        defaultValue: standardPlanData.silver.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('silver', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: [
          { title: 'Egypt', value: 'Egypt' },
          { title: 'Worldwide', value: 'Worldwide' },
          { title: 'Mena', value: 'Mena' },
        ],
        defaultValue: standardPlanData.silver.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('silver', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: [
          { title: 'Direct Access', value: 'Direct Access' },
          { title: 'Pre-approval Required', value: 'Pre-approval Required' },
          { title: 'Referral Required', value: 'Referral Required' },
        ],
        defaultValue: standardPlanData.silver.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) =>
          handleChange('silver', 'serviceAccessibility', item),
      },
    ],
  };

  const gold = {
    id: 3,
    header: {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Premium Gold Plan',
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
        defaultValue: standardPlanData.gold.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('gold', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: [
          { title: 'A', value: 'A' },
          { title: 'B', value: 'B' },
          { title: 'C', value: 'C' },
        ],
        defaultValue: standardPlanData.gold.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('gold', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: [
          { title: 'Egypt', value: 'Egypt' },
          { title: 'Worldwide', value: 'Worldwide' },
          { title: 'Mena', value: 'Mena' },
        ],
        defaultValue: standardPlanData.gold.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('gold', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: [
          { title: 'Direct Access', value: 'Direct Access' },
          { title: 'Pre-approval Required', value: 'Pre-approval Required' },
          { title: 'Referral Required', value: 'Referral Required' },
        ],
        defaultValue: standardPlanData.gold.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) => handleChange('gold', 'serviceAccessibility', item),
      },
    ],
  };

  const plans = [white, silver, gold];

  console.log('Redux Plan Data:', standardPlanData);

  const breadcrumbItems = [
    { title: 'Plan Data', url: '/standard-package/plan-data', active: true },
    {
      title: 'Healthcare Services',
      url: '/standard-package/healthcare-services',
      active: false,
    },
    {
      title: 'Reimbursement Details',
      url: '/standard-package/reimbursement-details',
      active: false,
    },
    {
      title: 'Plan Summary',
      url: '/standard-package/plan-summary',
      active: false,
    },
    {
      title: 'Customize plan by age',
      url: '/standard-package/customize-plan-by-age',
      active: false,
    },
    {
      title: 'Coverage & Expense Details',
      url: '/standard-package/coverage-details',
      active: false,
    },
    {
      title: 'Installments',
      url: '/standard-package/installments',
      active: false,
    },
    { title: 'Summary', url: '/standard-package/summary', active: false },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />

      <PlanData
        plans={plans}
        nextNavigation={'/standard-package/healthcare-services'}
        prevNavigation={'/select-package/ready'}
      />
    </div>
  );
};

export default StandardPlanData;
