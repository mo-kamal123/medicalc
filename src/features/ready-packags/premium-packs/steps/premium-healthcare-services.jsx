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
  return (
    <HealthcareServices
      plans={plans}
      nextNavigation={'/premium-package/reimbursement-details'}
      prevNavigation={'/premium-package/plan-data'}
    />
  );
};

export default PremiumHealthcareServices;
