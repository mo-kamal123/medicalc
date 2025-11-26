import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import CoverageDetails from '../../../../shared/components/coverage-details';
import Breadcrumb from '../../../../shared/UI/breadcrumb';

const StandardCoverageDetails = () => {
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
      url: '/standard-package/plan-by-age/summary',
      active: true,
    },
    {
      title: 'Customize plan by age',
      url: '/standard-package/plan-by-age/summary',
      active: true,
    },
    {
      title: 'Coverage & Expense Details',
      url: '/standard-package/coverage-details',
      active: true,
    },
    {
      title: 'Installments',
      url: '/standard-package/installments',
      active: false,
    },
    { title: 'Summary', url: '/standard-package/summary', active: false },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <CoverageDetails nextPage={'/standard-package/installments'} />
    </>
  );
};

export default StandardCoverageDetails;
