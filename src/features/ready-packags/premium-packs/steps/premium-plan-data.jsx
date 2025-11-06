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
        data: [10000, 12000, 13000],
        defaultValue: premiumPlan.planOne.annualLimit,
        placeholder: 'Annual Limit',
        onChange: (item) => handleChange('planOne', 'annualLimit', item),
      },
      {
        label: 'Applied Network',
        data: ['A', 'B', 'C'],
        defaultValue: premiumPlan.planOne.appliedNetwork,
        placeholder: 'Applied Network',
        onChange: (item) => handleChange('planOne', 'appliedNetwork', item),
      },
      {
        label: 'Geography',
        data: ['Egypt', 'Worldwide', 'Mena'],
        defaultValue: premiumPlan.planOne.geography,
        placeholder: 'Geography',
        onChange: (item) => handleChange('planOne', 'geography', item),
      },
      {
        label: 'Service Accessibility',
        data: ['Direct Access', 'Pre-approval Required', 'Referral Required'],
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
      // icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Plan 2',
    },
    inputs: [
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
    ],
  };
  const programThree = {
    id: 3,
    header: {
      // icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Plan 3',
    },
    inputs: [
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
    ],
  };
  const programFour = {
    id: 4,
    header: {
      // icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Plan 4',
    },
    inputs: [
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
