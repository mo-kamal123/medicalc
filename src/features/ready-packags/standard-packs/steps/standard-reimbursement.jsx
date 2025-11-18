import { FaStar, FaMedal, FaCrown } from 'react-icons/fa';
import Reimbursement from '../../../../shared/components/reimbursement';
import Breadcrumb from '../../../../shared/UI/breadcrumb';
import { useCalculateTob } from '../../../../shared/api/useCalculateTob';
import { useNavigate } from 'react-router-dom';

const StandardReimbursement = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/standard-package/plan-by-age/summary');
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
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Standard White Plan',
    },
    {
      id: 2,
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Silver Plan',
    },
    {
      id: 3,
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Premium Gold Plan',
    },
  ];

  // Breadcrumbs — mark all steps before current as active
  const breadcrumbItems = [
    { title: 'Plan Data', url: '/standard-package/plan-data', active: true },
    {
      title: 'Healthcare Services',
      url: '/standard-package/healthcare-services',
      active: true,
    },
    {
      title: 'Reimbursement Details',
      url: '/standard-package/reimbursement-details',
      active: true,
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

  const plansNames = ['white', 'silver', 'gold'];

  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />

      <Reimbursement
        type="standard"
        packName="standardPlan"
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
        prevNavigation="/standard-package/healthcare-services"
      />
    </div>
  );
};

export default StandardReimbursement;
