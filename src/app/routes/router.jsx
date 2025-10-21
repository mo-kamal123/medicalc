import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/auth-layout';
import { authRoutes } from '../../features/auth/routes/auth-routes';

export const router = createBrowserRouter([
  { path: '/auth', element: <AuthLayout />, children: [...authRoutes] },
]);
