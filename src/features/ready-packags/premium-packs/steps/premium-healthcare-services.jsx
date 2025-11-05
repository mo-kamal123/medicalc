import Breadcrumb from '../../../../shared/UI/breadcrumb';
import HealthcareServices from '../../../../shared/components/healthcare-services';

const PremiumHealthcareServices = () => {
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
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />

      <HealthcareServices
        type="premium"
        plans={plans}
        nextNavigation={'/premium-package/reimbursement-details'}
        prevNavigation={'/premium-package/plan-data'}
      />
    </div>
  );
};

export default PremiumHealthcareServices;
