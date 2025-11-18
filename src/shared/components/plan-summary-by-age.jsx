import PlanAgeTable from '../../features/ready-packags/standard-packs/components/plan-age-table';

const PlanSummaryByAge = () => {
  return (
    <div>
      <PlanAgeTable navigation={'/standard-package/coverage-details'} />
    </div>
  );
};

export default PlanSummaryByAge;
