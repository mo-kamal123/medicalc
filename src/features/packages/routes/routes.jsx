import PackagesLayout from '../layouts/packages-layout';
import CustomPacks from '../pages/custom-packs';
import ReadyPacks from '../pages/ready-packs';

export const packagesRoutes = [
  {
    path: 'select-package',
    element: <PackagesLayout />,
    children: [
      { path: 'ready', element: <ReadyPacks /> },
      { path: 'custom', element: <CustomPacks /> },
    ],
  },
];
