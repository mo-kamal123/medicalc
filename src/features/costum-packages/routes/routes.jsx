import { lazy, Suspense } from 'react';
import Spinner from '../../../shared/UI/spinner';

/**
 * Custom Packs Routes Configuration
 *
 * Defines routes for the custom package feature.
 * Uses lazy loading to improve initial bundle size.
 *
 * Routes:
 * - /custom-package: Custom package main page
 *   - /custom-package/plan-data: Plan data input page
 *   - /custom-package/healthcare-services: Healthcare services selection
 *   - /custom-package/reimbursement-details: Reimbursement details page
 *   - /custom-package/plan-by-age: Plan by age selection
 *     - /custom-package/plan-by-age/summary: Plan summary by age
 *     - /custom-package/plan-by-age/custom: Customize plan by age
 *   - /custom-package/coverage-details: Coverage details page
 *   - /custom-package/installments: Installments calculation page
 *   - /custom-package/summary: Final summary page
 */

// Lazy load all custom pack components - only loads when routes are accessed
const CustomizeByAge = lazy(
  () => import('../../../shared/components/customize-by-age')
);
const CustomCustomizeByAge = lazy(
  () => import('../../costum-packages/steps/custom-custmize-by-age')
);
const Installments = lazy(
  () => import('../../ready-packags/standard-packs/steps/installments')
);
const Summary = lazy(
  () => import('../../ready-packags/standard-packs/steps/summary')
);
const CustomPack = lazy(() => import('../pages/costum-pack'));
const CustomCoverageDetails = lazy(
  () => import('../steps/custom-coverage-details')
);
const CustomHealthcareServices = lazy(
  () => import('../steps/custom-healthcare-services')
);
const CustomPlanByAge = lazy(() => import('../steps/custom-plan-by-age'));
const CustomPlanData = lazy(() => import('../steps/custom-plan-data'));
const CustomPlanSummaryByAge = lazy(
  () => import('../steps/custom-plan-summary-by-age')
);
const CustomReimbursement = lazy(() => import('../steps/custom-reimbursement'));

/**
 * Custom packs routes configuration
 * All components are wrapped with Suspense to show loading spinner during lazy loading
 */
export const customPacksRoutes = [
  {
    path: 'custom-package',
    element: (
      <Suspense
        fallback={<Spinner fullScreen text="Loading custom package..." />}
      >
        <CustomPack />
      </Suspense>
    ),
    children: [
      {
        path: 'plan-data',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading plan data..." />}
          >
            <CustomPlanData />
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
            <CustomHealthcareServices />
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
            <CustomReimbursement />
          </Suspense>
        ),
      },
      {
        path: 'plan-by-age',
        element: (
          <Suspense
            fallback={<Spinner fullScreen text="Loading plan by age..." />}
          >
            <CustomPlanByAge />
          </Suspense>
        ),
        children: [
          {
            path: 'summary',
            element: (
              <Suspense
                fallback={<Spinner fullScreen text="Loading plan summary..." />}
              >
                <CustomPlanSummaryByAge />
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
                <CustomCustomizeByAge />
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
            <CustomCoverageDetails />
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
              nextPage={'/custom-package/summary'}
              type={'custom'}
            />
          </Suspense>
        ),
      },
      {
        path: 'summary',
        element: (
          <Suspense fallback={<Spinner fullScreen text="Loading summary..." />}>
            <Summary type={'custom'} />
          </Suspense>
        ),
      },
    ],
  },
];
