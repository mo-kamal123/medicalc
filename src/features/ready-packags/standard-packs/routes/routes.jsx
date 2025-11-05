import StandardPack from '../pages/standard-pack';
import CustomizeByAge from '../steps/customize-by-age';
import Installments from '../steps/installments';
import PlanSummaryByAge from '../steps/standard-plan-summary-by-age';
import Summary from '../steps/summary';
import StandardPlanData from '../steps/standard-plan-data';
import StandardHealthcareServices from '../steps/standard-healthcare-services';
import StandardReimbursement from '../steps/standard-reimbursement';
import StandardPlanByAge from '../steps/standard-PlanByAge';
import StandardPlanSummaryByAge from '../steps/standard-plan-summary-by-age';
import StandardCoverageDetails from '../steps/standard-coverage-details';

export const standardPacksRoutes = [
  {
    path: 'standard-package',
    element: <StandardPack />,
    children: [
      { path: 'plan-data', element: <StandardPlanData /> },
      { path: 'healthcare-services', element: <StandardHealthcareServices /> },
      { path: 'reimbursement-details', element: <StandardReimbursement /> },
      {
        path: 'plan-by-age',
        element: <StandardPlanByAge />,
        children: [
          { path: 'summary', element: <StandardPlanSummaryByAge /> },
          { path: 'custom', element: <CustomizeByAge /> },
        ],
      },
      { path: 'coverage-details', element: <StandardCoverageDetails /> },
      { path: 'installments', element: <Installments /> },
      { path: 'summary', element: <Summary /> },
    ],
  },
];
