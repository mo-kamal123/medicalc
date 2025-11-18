import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import HealthcareServices from '../../../../shared/components/healthcare-services';
import Breadcrumb from '../../../../shared/UI/breadcrumb';
import { useSelector } from 'react-redux';

const StandardHealthcareServices = () => {
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

  const standardPlanData = useSelector((state) => state.standardPlan);

  console.log(standardPlanData);
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />

      <HealthcareServices
        type="standard"
        plans={plans}
        nextNavigation="/standard-package/reimbursement-details"
        prevNavigation="/standard-package/plan-data"
      />
    </div>
  );
};

export default StandardHealthcareServices;
