import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../../shared/UI/breadcrumb';
import Reimbursement from '../../../../shared/components/reimbursement';
import { useCalculateTob } from '../../../../shared/api/useCalculateTob';

const PremiumReimbursement = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/premium-package/plan-by-age/summary');
  };
  const {
    mutate: calcateTob,
    isPending,
    isError,
    error,
  } = useCalculateTob(handleSuccess);
  const plans = [
    {
      id: 1,
      title: 'Plan 1',
    },
    {
      id: 2,
      title: 'Plan 2',
    },
    {
      id: 3,
      title: 'Plan 3',
    },
    {
      id: 4,
      title: 'Plan 4',
    },
  ];

  const breadcrumbItems = [
    { title: 'Plan Data', url: '/premium-package/plan-data', active: true },
    {
      title: 'Healthcare Services',
      url: '/premium-package/healthcare-services',
      active: true,
    },
    {
      title: 'Reimbursement Details',
      url: '/premium-package/reimbursement-details',
      active: true,
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
  const plansNames = ['planOne', 'planTwo', 'planThree', 'planFour'];
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />
      <Reimbursement
        type="premium"
        packName="premiumPlan"
        plans={plans}
        planNames={plansNames}
        handleSubmit={calcateTob}
        isSubmitting={isPending}
        submitError={
          isError
            ? error?.response?.data?.message ||
              error?.message ||
              'Failed to submit reimbursement data.'
            : ''
        }
        prevNavigation={'/premium-package/healthcare-services'}
      />
    </div>
  );
};

export default PremiumReimbursement;
