import { lazy, Suspense } from 'react';
import Spinner from '../../../shared/UI/spinner';

/**
 * Client Info Routes Configuration
 *
 * Defines routes for the client information feature.
 * Uses lazy loading to improve initial bundle size.
 *
 * Routes:
 * - /client-info: Client information page
 */

// Lazy load ClientInfo component - only loads when client-info route is accessed
const ClientInfo = lazy(() => import('../pages/client-info'));

/**
 * Client info routes configuration
 * Wrapped with Suspense to show loading spinner during lazy loading
 */
export const clientInfoRoutes = [
  {
    path: 'client-info',
    element: (
      <Suspense
        fallback={<Spinner fullScreen text="Loading client information..." />}
      >
        <ClientInfo />
      </Suspense>
    ),
  },
];
