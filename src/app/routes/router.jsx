import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Spinner from '../../shared/UI/spinner';

/**
 * Router Configuration
 *
 * Main router configuration for the MediConsult Installments Calculator application.
 * Implements lazy loading for all routes to improve initial load performance.
 *
 * Route Structure:
 * - /auth: Authentication routes (login)
 * - /: Root layout with protected routes (includes home page)
 * - /location: Location selection route
 *
 * All route components are lazy-loaded to reduce initial bundle size and improve performance.
 */

// Lazy load layouts - these are loaded only when needed
const AuthLayout = lazy(() => import('../layout/auth-layout'));
const RootLayout = lazy(() => import('../layout/root-layout'));

// Lazy load Hero component - home page
const Hero = lazy(() => import('../../features/home/pages/hero'));

// Import route configurations - these are imported synchronously as they define route structures
import { authRoutes } from '../../features/auth/routes/auth-routes';
import { locationRoutes } from '../../features/location/routes/routes.jsx';
import { clientInfoRoutes } from '../../features/client/routes/routes.jsx';
import { packagesRoutes } from '../../features/packages/routes/routes.jsx';
import { standardPacksRoutes } from '../../features/ready-packags/standard-packs/routes/routes.jsx';
import { premiumPacksRoutes } from '../../features/ready-packags/premium-packs/routes/routes.jsx';
import { customPacksRoutes } from '../../features/costum-packages/routes/routes.jsx';

/**
 * Main application router configuration
 *
 * Routes are organized hierarchically:
 * - Auth routes: Public authentication pages
 * - Root routes: Protected application pages (require authentication)
 *   - Index route: Home/Hero page
 *   - Client info routes
 *   - Package routes
 *   - Standard/Premium/Custom package routes
 * - Location routes: Standalone location selection page
 *
 * All layouts and the home page are wrapped with Suspense boundaries to show loading states
 * during route transitions and lazy loading.
 */
export const router = createBrowserRouter([
  {
    path: '/auth',
    element: (
      <Suspense
        fallback={<Spinner fullScreen text="Loading authentication..." />}
      >
        <AuthLayout />
      </Suspense>
    ),
    children: [...authRoutes],
  },
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner fullScreen text="Loading application..." />}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner fullScreen text="Loading home..." />}>
            <Hero />
          </Suspense>
        ),
      },
      ...clientInfoRoutes,
      ...packagesRoutes,
      ...standardPacksRoutes,
      ...premiumPacksRoutes,
      ...customPacksRoutes,
    ],
  },
  ...locationRoutes,
]);
