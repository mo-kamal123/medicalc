import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/auth-layout';
import { authRoutes } from '../../features/auth/routes/auth-routes';
import RootLayout from '../layout/root-layout';
import Hero from '../../features/home/pages/hero';
import { locationRoutes } from '../../features/location/routes/routes.jsx';
import { clientInfoRoutes } from '../../features/client/routes/routes.jsx';
import { packagesRoutes } from '../../features/packages/routes/routes.jsx';
import { standardPacksRoutes } from '../../features/ready-packags/standard-packs/routes/routes.jsx';
import { premiumPacksRoutes } from '../../features/ready-packags/premium-packs/routes/routes.jsx';

export const router = createBrowserRouter([
  { path: '/auth', element: <AuthLayout />, children: [...authRoutes] },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Hero /> },
      ...clientInfoRoutes,
      ...packagesRoutes,
      ...standardPacksRoutes,
      ...premiumPacksRoutes,
    ],
  },
  ...locationRoutes,
]);
