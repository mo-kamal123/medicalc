import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../features/auth/store/auth-slice';
import standardPlanSlice from '../../features/ready-packags/standard-packs/store/standard-plan-slice';
import premiumPlanSlice from '../../features/ready-packags/premium-packs/store/premium-plan-slice';
import customPlanSlice from '../../features/costum-packages/store/custom-plan-slice';
import clientSlice from '../../features/client/store/client-slice';
import calculationResultSlice from '../../shared/store/calculation-result-slice';
import employeesAgesSlice from '../../shared/store/employees-ages-slice';

/**
 * Redux Store Configuration
 *
 * Centralized state management store for the MediConsult Installments Calculator application.
 *
 * The store is configured with multiple feature slices:
 * - auth: Authentication state (login status, user info, location)
 * - client: Client information data
 * - standardPlan: Standard package plan data and configuration
 * - premiumPlan: Premium package plan data and configuration
 * - customPlan: Custom package plan data and configuration
 * - calculationResult: Results from calculation API calls
 * - employeesAges: Employee age data for calculations
 *
 * All slices use Redux Toolkit for simplified state management with built-in:
 * - Immutability handling
 * - DevTools integration
 * - Simplified reducer logic
 */
export const store = configureStore({
  reducer: {
    // Authentication slice - manages user authentication state
    auth: authSlice,

    // Client slice - manages client information
    client: clientSlice,

    // Plan slices - manage different package types
    standardPlan: standardPlanSlice,
    premiumPlan: premiumPlanSlice,
    customPlan: customPlanSlice,

    // Calculation slice - stores calculation results
    calculationResult: calculationResultSlice,

    // Employees ages slice - manages employee age data
    employeesAges: employeesAgesSlice,
  },

  // Enable Redux DevTools in development
  devTools: import.meta.env.DEV,
});
