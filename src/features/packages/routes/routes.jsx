import { lazy, Suspense } from 'react';
import Spinner from '../../../shared/UI/spinner';

/**
 * Packages Routes Configuration
 *
 * Defines routes for package selection feature.
 * Uses lazy loading to improve initial bundle size.
 *
 * Routes:
 * - /select-package: Package selection layout
 *   - /select-package/ready: Ready-made packages page
 *   - /select-package/custom: Custom packages page
 */

// Lazy load package components - only loads when package routes are accessed
const PackagesLayout = lazy(() => import('../layouts/packages-layout'));
const CustomPacks = lazy(() => import('../pages/custom-packs'));
const ReadyPacks = lazy(() => import('../pages/ready-packs'));

/**
 * Packages routes configuration
 * All components are wrapped with Suspense to show loading spinner during lazy loading
 */
export const packagesRoutes = [
  {
    path: 'select-package',
    element: (
      <Suspense fallback={<Spinner fullScreen text="Loading packages..." />}>
        <PackagesLayout />
      </Suspense>
    ),
    children: [
      {
        path: 'ready',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading ready packages..." />}
          >
            <ReadyPacks />
          </Suspense>
        ),
      },
      {
        path: 'custom',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading custom packages..." />}
          >
            <CustomPacks />
          </Suspense>
        ),
      },
    ],
  },
];
