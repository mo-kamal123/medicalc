import { lazy, Suspense } from 'react';
import Spinner from '../../../../shared/UI/spinner';

/**
 * Standard Packs Routes Configuration
 *
 * Defines routes for the standard package feature.
 * Uses lazy loading to improve initial bundle size.
 *
 * Routes:
 * - /standard-package: Standard package main page
 *   - /standard-package/plan-data: Plan data input page
 *   - /standard-package/healthcare-services: Healthcare services selection
 *   - /standard-package/reimbursement-details: Reimbursement details page
 *   - /standard-package/plan-by-age: Plan by age selection
 *     - /standard-package/plan-by-age/summary: Plan summary by age
 *     - /standard-package/plan-by-age/custom: Customize plan by age
 *   - /standard-package/coverage-details: Coverage details page
 *   - /standard-package/installments: Installments calculation page
 *   - /standard-package/summary: Final summary page
 */

// Lazy load all standard pack components - only loads when routes are accessed
const StandardPack = lazy(() => import('../pages/standard-pack'));
const Installments = lazy(() => import('../steps/installments'));
const Summary = lazy(() => import('../steps/summary'));
const StandardPlanData = lazy(() => import('../steps/standard-plan-data'));
const StandardHealthcareServices = lazy(
  () => import('../steps/standard-healthcare-services')
);
const StandardReimbursement = lazy(
  () => import('../steps/standard-reimbursement')
);
const StandardPlanByAge = lazy(() => import('../steps/standard-PlanByAge'));
const StandardPlanSummaryByAge = lazy(
  () => import('../steps/standard-plan-summary-by-age')
);
const StandardCoverageDetails = lazy(
  () => import('../steps/standard-coverage-details')
);
const StandardCustomizeByAge = lazy(
  () => import('../steps/standard-customize-by-age')
);

/**
 * Standard packs routes configuration
 * All components are wrapped with Suspense to show loading spinner during lazy loading
 */
export const standardPacksRoutes = [
  {
    path: 'standard-package',
    element: (
      <Suspense
        fallback={<Spinner fullScreen text="Loading standard package..." />}
      >
        <StandardPack />
      </Suspense>
    ),
    children: [
      {
        path: 'plan-data',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading plan data..." />}
          >
            <StandardPlanData />
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
            <StandardHealthcareServices />
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
            <StandardReimbursement />
          </Suspense>
        ),
      },
      {
        path: 'plan-by-age',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading plan by age..." />}
          >
            <StandardPlanByAge />
          </Suspense>
        ),
        children: [
          {
            path: 'summary',
            element: (
              <Suspense
                fallback={<Spinner fullScreen text="Loading plan summary..." />}
              >
                <StandardPlanSummaryByAge />
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
                <StandardCustomizeByAge />
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
            <StandardCoverageDetails />
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
              nextPage={'/standard-package/summary'}
              type={'standard'}
            />
          </Suspense>
        ),
      },
      {
        path: 'summary',
        element: (
          <Suspense fallback={<Spinner fullScreen text="Loading summary..." />}>
            <Summary />
          </Suspense>
        ),
      },
    ],
  },
];
