import CustomizeByAge from '../../ready-packags/standard-packs/steps/customize-by-age';
import CustomPack from '../pages/costum-pack';
import CustomCoverageDetails from '../steps/custom-coverage-details';
import CustomHealthcareServices from '../steps/custom-healthcare-services';
import CustomPlanByAge from '../steps/custom-plan-by-age';
import CustomPlanData from '../steps/custom-plan-data';
import CustomPlanSummaryByAge from '../steps/custom-plan-summary-by-age';
import CustomReimbursement from '../steps/custom-reimbursement';

export const customPacksRoutes = [
  {
    path: 'custom-package',
    element: <CustomPack />,
    children: [
      { path: 'plan-data', element: <CustomPlanData /> },
      { path: 'healthcare-services', element: <CustomHealthcareServices /> },
      { path: 'reimbursement-details', element: <CustomReimbursement /> },
      {
        path: 'plan-by-age',
        element: <CustomPlanByAge />,
        children: [
          { path: 'summary', element: <CustomPlanSummaryByAge /> },
          { path: 'custom', element: <CustomizeByAge /> },
        ],
      },
      { path: 'coverage-details', element: <CustomCoverageDetails /> },
      // { path: 'installments', element: <Installments /> },
      // { path: 'summary', element: <Summary /> },
    ],
  },
];
