import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/auth-layout';
import { authRoutes } from '../../features/auth/routes/auth-routes';
import RootLayout from '../layout/root-layout';
import Hero from '../../features/home/pages/hero';

export const router = createBrowserRouter([
  { path: '/auth', element: <AuthLayout />, children: [...authRoutes] },
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <Hero /> }],
  },
]);
