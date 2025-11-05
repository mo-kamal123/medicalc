import { createSlice } from '@reduxjs/toolkit';

const initialCustomState = {
  customPlans: {},
  healthcareServices: {},
  reimbursement: {},
};

const customPlanSlice = createSlice({
  name: 'customPlan',
  initialState: initialCustomState,
  reducers: {
    // ✅ Add or update a plan (e.g., "plan1", "plan2", etc.)
    updateCustomPlan(state, action) {
      const { planName, key, value } = action.payload;
      if (!state.customPlans[planName]) {
        state.customPlans[planName] = {};
      }
      state.customPlans[planName][key] = value;
    },

    // ✅ Replace all custom plans at once
    setCustomPlans(state, action) {
      state.customPlans = action.payload;
    },

    // ✅ Healthcare Services for each plan
    updateHealthcareService(state, action) {
      const { planName, key, value } = action.payload;
      if (!state.healthcareServices[planName]) {
        state.healthcareServices[planName] = {};
      }
      state.healthcareServices[planName][key] = value;
    },

    setHealthcareServices(state, action) {
      state.healthcareServices = action.payload;
    },

    // ✅ Reimbursement data for each plan
    updateReimbursement(state, action) {
      const { planName, key, value } = action.payload;
      if (!state.reimbursement[planName]) {
        state.reimbursement[planName] = {};
      }
      state.reimbursement[planName][key] = value;
    },

    setReimbursement(state, action) {
      state.reimbursement = action.payload;
    },

    // ✅ Reset all data to empty
    resetCustomPlans() {
      return initialCustomState;
    },
  },
});

export const {
  updateCustomPlan,
  setCustomPlans,
  updateHealthcareService,
  setHealthcareServices,
  updateReimbursement,
  setReimbursement,
  resetCustomPlans,
} = customPlanSlice.actions;

export default customPlanSlice.reducer;
