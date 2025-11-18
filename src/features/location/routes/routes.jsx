import { lazy, Suspense } from 'react';
import Spinner from '../../../shared/UI/spinner';

/**
 * Location Routes Configuration
 *
 * Defines routes for the location selection feature.
 * Uses lazy loading to improve initial bundle size.
 *
 * Routes:
 * - /location: Location selection page
 */

// Lazy load Location component - only loads when location route is accessed
const Location = lazy(() => import('../pages/location'));

/**
 * Location routes configuration
 * Wrapped with Suspense to show loading spinner during lazy loading
 */
export const locationRoutes = [
  {
    path: 'location',
    element: (
      <Suspense
        fallback={<Spinner fullScreen text="Loading location selection..." />}
      >
        <Location />
      </Suspense>
    ),
  },
];
