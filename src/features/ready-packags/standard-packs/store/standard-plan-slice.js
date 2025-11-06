import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  standardPlan: {
    whitePlan: {
      annualLimit: '',
      appliedNetwork: 'B',
      geography: 'Egypt',
      serviceAccessibility: 'Pre-approval Required',
    },
    silverPlan: {
      annualLimit: 50000,
      appliedNetwork: 'A',
      geography: 'Egypt',
      serviceAccessibility: 'Direct Access',
    },
    goldPlan: {
      annualLimit: 100000,
      appliedNetwork: 'A',
      geography: 'Egypt',
      serviceAccessibility: 'Direct Access',
    },
  },
  healthcareServices: {
    whitePlan: {
      roomType: '',
      inpatientCopayment: '10%',
      outpatientCopayment: '15%',
      prescriptionMedicinesCopayment: '20%',
      dentalCopayment: '20%',
      dentalMoney: 'EGP 500',
      opticalCopayment: '10%',
      opticalAnnualFees: 'EGP 500',
      physioTherapyCount: 'Sessions 12',
      chronicAndPreExisting: '5,000',
      maternityCare: 'Wait 10 Month',
    },
    silverPlan: {
      roomType: 'PRIVATE',
      inpatientCopayment: '5%',
      outpatientCopayment: '10%',
      prescriptionMedicinesCopayment: '15%',
      dentalCopayment: '10%',
      dentalMoney: 'EGP 750',
      opticalCopayment: '10%',
      opticalAnnualFees: 'EGP 500',
      physioTherapyCount: 'Sessions 24',
      chronicAndPreExisting: '10,000',
      maternityCare: '5,000',
    },
    goldPlan: {
      roomType: 'LUX',
      inpatientCopayment: '0%',
      outpatientCopayment: '0%',
      prescriptionMedicinesCopayment: '10%',
      dentalCopayment: '0%',
      dentalMoney: 'EGP 1000',
      opticalCopayment: '10%',
      opticalAnnualFees: 'EGP 500',
      physioTherapyCount: 'Coverd',
      chronicAndPreExisting: '15,000',
      maternityCare: '10,000',
    },
  },
  reimbursement: {
    whitePlan: {
      reimbursement: '70%',
      doctorVisitCopayment: '10%',
      doctorVisitMoney: 'EGP 150',
      pricingTerms: '',
      laboratoryAndScans: '',
      paymentCycle: '',
    },
    silverPlan: {
      reimbursement: '80%',
      doctorVisitCopayment: '10%',
      doctorVisitMoney: 'EGP 200',
      pricingTerms: '',
      laboratoryAndScans: '',
      paymentCycle: '',
    },
    goldPlan: {
      reimbursement: '100%',
      doctorVisitCopayment: '0%',
      doctorVisitMoney: 'EGP 300',
      pricingTerms: '',
      laboratoryAndScans: '',
      paymentCycle: '',
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
