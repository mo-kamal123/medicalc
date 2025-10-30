import PremiumPlanByAge from '../../../../shared/components/premium-plan-by-age';
import CustomizeByAge from '../../standard-packs/steps/customize-by-age';
import PlanSummaryByAge from '../../standard-packs/steps/standard-plan-summary-by-age';
import PremiumPack from '../pages/premium-pack';
import PremiumCoverageDetails from '../steps/premium-coverage-details';
import PremiumHealthcareServices from '../steps/premium-healthcare-services';
import PremiumPlanData from '../steps/premium-plan-data';
import PremiumPlanSummaryByAge from '../steps/premium-plan-summary-by-age';
import PremiumReimbursement from '../steps/premium-reimbursement';

export const premiumPacksRoutes = [
  {
    path: 'premium-package',
    element: <PremiumPack />,
    children: [
      { path: 'plan-data', element: <PremiumPlanData /> },
      { path: 'healthcare-services', element: <PremiumHealthcareServices /> },
      { path: 'reimbursement-details', element: <PremiumReimbursement /> },
      {
        path: 'plan-by-age',
        element: <PremiumPlanByAge />,
        children: [
          { path: 'summary', element: <PremiumPlanSummaryByAge /> },
          { path: 'custom', element: <CustomizeByAge /> },
        ],
      },
      { path: 'coverage-details', element: <PremiumCoverageDetails /> },
      // { path: 'installments', element: <Installments /> },
      // { path: 'summary', element: <Summary /> },
    ],
  },
];
