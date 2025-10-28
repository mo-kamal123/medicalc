import PlanAgeTable from '../components/plan-age-table';
import StandardPack from '../pages/standard-pack';
import PlanByAge from '../steps/PlanByAge';
import CoverageDetails from '../steps/coverage-details';
import CustomizeByAge from '../steps/customize-by-age';
import HealthcareServices from '../steps/healthcare-services';
import Installments from '../steps/installments';
import PlanData from '../steps/plan-data';
import PlanSummaryByAge from '../steps/plan-summary-by-age';
import Reimbursement from '../steps/reimbursement';
import Summary from '../steps/summary';

export const standardPacksRoutes = [
  {
    path: 'standard-package',
    element: <StandardPack />,
    children: [
      { path: 'plan-data', element: <PlanData /> },
      { path: 'healthcare-services', element: <HealthcareServices /> },
      { path: 'reimbursement-details', element: <Reimbursement /> },
      {
        path: 'plan-by-age',
        element: <PlanByAge />,
        children: [
          { path: 'summary', element: <PlanSummaryByAge /> },
          { path: 'custom', element: <CustomizeByAge /> },
        ],
      },
      { path: 'coverage-details', element: <CoverageDetails /> },
      { path: 'installments', element: <Installments /> },
      { path: 'summary', element: <Summary /> },
    ],
  },
];
