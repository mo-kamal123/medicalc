import { lazy } from 'react';
import { Suspense } from 'react';
import Spinner from '../../../shared/UI/spinner';

/**
 * Authentication Routes Configuration
 *
 * Defines routes for the authentication feature.
 * Uses lazy loading to improve initial bundle size.
 *
 * Routes:
 * - /auth (index): Login page
 */

// Lazy load Login component - only loads when authentication route is accessed
const Login = lazy(() => import('../pages/login'));

/**
 * Authentication routes configuration
 * Wrapped with Suspense to show loading spinner during lazy loading
 */
export const authRoutes = [
  {
    index: true,
    element: (
      <Suspense fallback={<Spinner fullScreen text="Loading login..." />}>
        <Login />
      </Suspense>
    ),
  },
];
