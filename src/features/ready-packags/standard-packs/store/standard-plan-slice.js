import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  standardPlan: {
    white: {
      annuallimit: { value: '_20000', title: '20,000' },
      appliednetwork: { value: 'B', title: 'B' },
      geography: { value: 'Egypt', title: 'Egypt' },
      serviceaccessibility: {
        value: 'Pre-approval Required',
        title: 'Pre-approval Required',
      },
    },
    silver: {
      annuallimit: { value: '_50000', title: '50,000' },
      appliednetwork: { value: 'A', title: 'A' },
      geography: { value: 'Egypt', title: 'Egypt' },
      serviceaccessibility: { value: 'Direct Access', title: 'Direct Access' },
    },
    gold: {
      annuallimit: { value: '_100000', title: '100,000' },
      appliednetwork: { value: 'A', title: 'A' },
      geography: { value: 'Egypt', title: 'Egypt' },
      serviceaccessibility: { value: 'Direct Access', title: 'Direct Access' },
    },
  },

  healthcareServices: {
    white: {
      roomType: { value: 'SHARED', title: 'SHARED' },
      inpatientCopayment: { value: '_10', title: '10%' },
      outpatientCopayment: { value: '_15', title: '15%' },
      prescriptionMedicinesCopayment: { value: '_20', title: '20%' },
      dentalCopayment: { value: '_20', title: '20%' },
      dentalMoney: { value: '_300', title: '300' },
      opticalCopayment: { value: '_20', title: '20%' },
      opticalAnnualFees: { value: '_500', title: '500' },
      physioTherapyCount: { value: '_12', title: '12' },
      chronicAndPreExisting: { value: '_5000', title: '5,000' },
      maternityCare: { value: 'Wait10Month', title: 'Wait 10 Months' },
    },

    silver: {
      roomType: { value: 'PRIVATE', title: 'PRIVATE' },
      inpatientCopayment: { value: '_5', title: '5%' },
      outpatientCopayment: { value: '_10', title: '10%' },
      prescriptionMedicinesCopayment: { value: '_15', title: '15%' },
      dentalCopayment: { value: '_10', title: '10%' },
      dentalMoney: { value: '_700', title: '700' },
      opticalCopayment: { value: '_10', title: '10%' },
      opticalAnnualFees: { value: '_750', title: '750' },
      physioTherapyCount: { value: '_24', title: '24' },
      chronicAndPreExisting: { value: '_10000', title: '10,000' },
      maternityCare: { value: '_5000', title: '5,000' },
    },

    gold: {
      roomType: { value: 'LUX', title: 'LUX' },
      inpatientCopayment: { value: '_0', title: '0%' },
      outpatientCopayment: { value: '_0', title: '0%' },
      prescriptionMedicinesCopayment: { value: '_10', title: '10%' },
      dentalCopayment: { value: '_0', title: '0%' },
      dentalMoney: { value: '_1000', title: '1,000' },
      opticalCopayment: { value: '_0', title: '0%' },
      opticalAnnualFees: { value: '_1000', title: '1,000' },
      physioTherapyCount: { value: '_Covered', title: 'Covered' },
      chronicAndPreExisting: { value: '_15000', title: '15,000' },
      maternityCare: { value: '_10000', title: '10,000' },
    },
  },

  reimbursement: {
    white: {
      reimbursement: { value: '_80', title: '80%' },
      doctorVisitCopayment: { value: '_20', title: '20%' },
      doctorVisitMoney: { value: '_100', title: '100' },
      pricingTerms: { value: 'Welcare Hospital', title: 'Welcare Hospital' },
      laboratoryAndScans: {
        value: 'Nile Center for Radiology and Analysis',
        title: 'Nile Center for Radiology and Analysis',
      },
      paymentCycle: { value: '21', title: '21 Days' },
    },
    silver: {
      reimbursement: { value: '_80', title: '80%' },
      doctorVisitCopayment: { value: '_10', title: '10%' },
      doctorVisitMoney: { value: '_200', title: '200' },
      pricingTerms: { value: 'Welcare Hospital', title: 'Welcare Hospital' },
      laboratoryAndScans: {
        value: 'Nile Center for Radiology and Analysis',
        title: 'Nile Center for Radiology and Analysis',
      },
      paymentCycle: { value: '21', title: '21 Days' },
    },
    gold: {
      reimbursement: { value: '_80', title: '80%' },
      doctorVisitCopayment: { value: '_0', title: '0%' },
      doctorVisitMoney: { value: '_300', title: '300' },
      pricingTerms: { value: 'Welcare Hospital', title: 'Welcare Hospital' },
      laboratoryAndScans: {
        value: 'Nile Center for Radiology and Analysis',
        title: 'Nile Center for Radiology and Analysis',
      },
      paymentCycle: { value: '21', title: '21 Days' },
    },
  },
};

const standardPlanSlice = createSlice({
  name: 'standardPlan',
  initialState,
  reducers: {
    updateStandardPlan(state, action) {
      const { planName, key, value } = action.payload;
      state.standardPlan[planName][key] = value;
    },
    setStandardPlan(state, action) {
      state.standardPlan = action.payload;
    },
    updateHealthcareService(state, action) {
      const { planName, key, value } = action.payload;
      if (!state.healthcareServices[planName]) {
        state.healthcareServices[planName] = {};
      }
      state.healthcareServices[planName][key] = value;
      console.log(state.healthcareServices);
    },
    setHealthcareServices(state, action) {
      state.healthcareServices = action.payload;
      console.log(state.healthcareServices);
    },
    updateReimbursement(state, action) {
      const { planName, key, value } = action.payload;
      if (!state.reimbursement[planName]) {
        state.reimbursement[planName] = {};
      }
      state.reimbursement[planName][key] = value;
      console.log('Updated Reimbursement:', state.reimbursement);
    },

    setReimbursement(state, action) {
      state.reimbursement = action.payload;
      console.log('Set Reimbursement:', state.reimbursement);
    },
    resetForm() {
      return initialState;
    },
  },
});

export const {
  updateStandardPlan,
  setStandardPlan,
  updateHealthcareService,
  setHealthcareServices,
  updateReimbursement,
  setReimbursement,
  resetForm,
} = standardPlanSlice.actions;

export default standardPlanSlice.reducer;
