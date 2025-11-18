import CoverageDetails from '../../../../shared/components/coverage-details';
const PremiumCoverageDetails = () => {
  return (
    <div>
      <CoverageDetails nextPage={'/premium-package/installments'} />
    </div>
  );
};

export default PremiumCoverageDetails;
