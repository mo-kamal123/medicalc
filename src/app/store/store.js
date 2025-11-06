import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../features/auth/store/auth-slice';
import standardPlanSlice from '../../features/ready-packags/standard-packs/store/standard-plan-slice';
import premiumPlanSlice from '../../features/ready-packags/premium-packs/store/premium-plan-slice';
import customPlanSlice from '../../features/costum-packages/store/custom-plan-slice';
import clientSlice from '../../features/client/store/client-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    client: clientSlice,
    standardPlan: standardPlanSlice,
    premiumPlan: premiumPlanSlice,
    customPlan: customPlanSlice,
  },
});
