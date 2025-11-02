import { useState } from 'react';
import PlanAgeTable from '../../ready-packags/standard-packs/components/plan-age-table';
import { generatePlans } from '../utils/plan-genrator';
import { generatePlanMeta } from '../utils/generate-planMeta';
const CustomPlanSummaryByAge = ({ planCount }) => {
  const [plans] = useState(generatePlans(planCount));
  const [PLAN_META] = useState(generatePlanMeta(planCount));
  return (
    <div>
      <PlanAgeTable
        plans={plans}
        PLAN_META={PLAN_META}
        navigation="/custom-package/coverage-details"
      />
    </div>
  );
};
export default CustomPlanSummaryByAge;
