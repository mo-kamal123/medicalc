import StandardPack from '../pages/standard-pack';
import PlanData from '../steps/plan-data';

export const standardPacksRoutes = [
  {
    path: 'standard-package',
    element: <StandardPack />,
    children: [{ path: 'plan-data', element: <PlanData /> }],
  },
];
