import { lazy, Suspense } from 'react';
import Spinner from '../../../../shared/UI/spinner';

/**
 * Premium Packs Routes Configuration
 *
 * Defines routes for the premium package feature.
 * Uses lazy loading to improve initial bundle size.
 *
 * Routes:
 * - /premium-package: Premium package main page
 *   - /premium-package/plan-data: Plan data input page
 *   - /premium-package/healthcare-services: Healthcare services selection
 *   - /premium-package/reimbursement-details: Reimbursement details page
 *   - /premium-package/plan-by-age: Plan by age selection
 *     - /premium-package/plan-by-age/summary: Plan summary by age
 *     - /premium-package/plan-by-age/custom: Customize plan by age
 *   - /premium-package/coverage-details: Coverage details page
 *   - /premium-package/installments: Installments calculation page
 *   - /premium-package/summary: Final summary page
 */

// Lazy load all premium pack components - only loads when routes are accessed
const PremiumPlanByAge = lazy(
  () => import('../../../../shared/components/premium-plan-by-age')
);
const Installments = lazy(
  () => import('../../standard-packs/steps/installments')
);
const Summary = lazy(() => import('../../standard-packs/steps/summary'));
const PremiumPack = lazy(() => import('../pages/premium-pack'));
const PremiumCoverageDetails = lazy(
  () => import('../steps/premium-coverage-details')
);
const PremiumCustomizeByAge = lazy(
  () => import('../steps/premium-customize-by-age')
);
const PremiumHealthcareServices = lazy(
  () => import('../steps/premium-healthcare-services')
);
const PremiumPlanData = lazy(() => import('../steps/premium-plan-data'));
const PremiumPlanSummaryByAge = lazy(
  () => import('../steps/premium-plan-summary-by-age')
);
const PremiumReimbursement = lazy(
  () => import('../steps/premium-reimbursement')
);

/**
 * Premium packs routes configuration
 * All components are wrapped with Suspense to show loading spinner during lazy loading
 */
export const premiumPacksRoutes = [
  {
    path: 'premium-package',
    element: (
      <Suspense
        fallback={<Spinner fullScreen text="Loading premium package..." />}
      >
        <PremiumPack />
      </Suspense>
    ),
    children: [
      {
        path: 'plan-data',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading plan data..." />}
          >
            <PremiumPlanData />
          </Suspense>
        ),
      },
      {
        path: 'healthcare-services',
        element: (
          <Suspense
            fallback={
              <Spinner fullScreen text="Loading healthcare services..." />
            }
          >
            <PremiumHealthcareServices />
          </Suspense>
        ),
      },
      {
        path: 'reimbursement-details',
        element: (
          <Suspense
            fallback={
              <Spinner fullScreen text="Loading reimbursement details..." />
            }
          >
            <PremiumReimbursement />
          </Suspense>
        ),
      },
      {
        path: 'plan-by-age',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading plan by age..." />}
          >
            <PremiumPlanByAge />
          </Suspense>
        ),
        children: [
          {
            path: 'summary',
            element: (
              <Suspense
                fallback={<Spinner fullScreen text="Loading plan summary..." />}
              >
                <PremiumPlanSummaryByAge />
              </Suspense>
            ),
          },
          {
            path: 'custom',
            element: (
              <Suspense
                fallback={
                  <Spinner fullScreen text="Loading customization..." />
                }
              >
                <PremiumCustomizeByAge />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'coverage-details',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading coverage details..." />}
          >
            <PremiumCoverageDetails />
          </Suspense>
        ),
      },
      {
        path: 'installments',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading installments..." />}
          >
            <Installments
              nextPage={'/premium-package/summary'}
              type={'premium'}
            />
          </Suspense>
        ),
      },
      {
        path: 'summary',
        element: (
          <Suspense fallback={<Spinner fullScreen text="Loading summary..." />}>
            <Summary type={'premium'} />
          </Suspense>
        ),
      },
    ],
  },
];
