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

  // Define each plan based on Redux state
  const whitePlan = {
    id: 1,
    header: {
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Standard White Plan',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: standardPlanData.whitePlan.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('whitePlan', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: standardPlanData.whitePlan.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('whitePlan', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: standardPlanData.whitePlan.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('whitePlan', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: standardPlanData.whitePlan.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) =>
          handleChange('whitePlan', 'serviceAccessibility', item),
      },
    ],
  };

  const silverPlan = {
    id: 2,
    header: {
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Silver Plan',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: standardPlanData.silverPlan.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('silverPlan', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: standardPlanData.silverPlan.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('silverPlan', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: standardPlanData.silverPlan.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('silverPlan', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: standardPlanData.silverPlan.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) =>
          handleChange('silverPlan', 'serviceAccessibility', item),
      },
    ],
  };

  const goldPlan = {
    id: 3,
    header: {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Premium Gold Plan',
    },
    inputs: [
      {
        label: 'Annual Limit',
        data: [10000, 12000, 13000],
        defaultValue: standardPlanData.goldPlan.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('goldPlan', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: standardPlanData.goldPlan.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('goldPlan', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: standardPlanData.goldPlan.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('goldPlan', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
        defaultValue: standardPlanData.goldPlan.serviceAccessibility,
        placeholder: 'Service Accessibility',
        onChange: (item) =>
          handleChange('goldPlan', 'serviceAccessibility', item),
      },
    ],
  };

  const plans = [whitePlan, silverPlan, goldPlan];

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
