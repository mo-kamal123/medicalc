import Reimbursement from '../../../../shared/components/reimbursement';

const PremiumReimbursement = () => {
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
    <Reimbursement
      plans={plans}
      nextNavigation={'/premium-package/plan-by-age/summary'}
      prevNavigation={'/premium-package/healthcare-services'}
    />
  );
};

export default PremiumReimbursement;
