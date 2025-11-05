import { createSlice } from '@reduxjs/toolkit';

const initialPremiumState = {
  premiumPlan: {
    planOne: {
      annualLimit: 25000,
      appliedNetwork: 'A',
      geography: 'Egypt',
      serviceAccessibility: 'Direct Access',
    },
    planTwo: {
      annualLimit: 50000,
      appliedNetwork: 'A',
      geography: 'Worldwide',
      serviceAccessibility: 'Direct Access',
    },
    planThree: {
      annualLimit: 75000,
      appliedNetwork: 'B',
      geography: 'Mena',
      serviceAccessibility: 'Pre-approval Required',
    },
    planFour: {
      annualLimit: 100000,
      appliedNetwork: 'A',
      geography: 'Worldwide',
      serviceAccessibility: 'Direct Access',
    },
  },
  healthcareServices: {
    planOne: {
      roomType: 'SHARED',
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
    planTwo: {
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
    planThree: {
      roomType: 'PRIVATE',
      inpatientCopayment: '0%',
      outpatientCopayment: '5%',
      prescriptionMedicinesCopayment: '10%',
      dentalCopayment: '0%',
      dentalMoney: 'EGP 1000',
      opticalCopayment: '10%',
      opticalAnnualFees: 'EGP 500',
      physioTherapyCount: 'Coverd',
      chronicAndPreExisting: '15,000',
      maternityCare: '10,000',
    },
    planFour: {
      roomType: 'LUX',
      inpatientCopayment: '0%',
      outpatientCopayment: '0%',
      prescriptionMedicinesCopayment: '5%',
      dentalCopayment: '0%',
      dentalMoney: 'EGP 1500',
      opticalCopayment: '0%',
      opticalAnnualFees: 'EGP 500',
      physioTherapyCount: 'Coverd',
      chronicAndPreExisting: '20,000',
      maternityCare: '15,000',
    },
  },
  reimbursement: {
    planOne: {
      reimbursement: '70%',
      doctorVisitCopayment: '10%',
      doctorVisitMoney: 'EGP 150',
    },
    planTwo: {
      reimbursement: '80%',
      doctorVisitCopayment: '10%',
      doctorVisitMoney: 'EGP 200',
    },
    planThree: {
      reimbursement: '90%',
      doctorVisitCopayment: '5%',
      doctorVisitMoney: 'EGP 250',
    },
    planFour: {
      reimbursement: '100%',
      doctorVisitCopayment: '0%',
      doctorVisitMoney: 'EGP 300',
    },
  },
};

const premiumPlanSlice = createSlice({
  name: 'premiumPlan',
  initialState: initialPremiumState,
  reducers: {
    updatePremiumPlan(state, action) {
      const { planName, key, value } = action.payload;
      state.premiumPlan[planName][key] = value;
    },
    setPremiumPlan(state, action) {
      state.premiumPlan = action.payload;
    },
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
    resetForm() {
      return initialPremiumState;
    },
  },
});

export const {
  updatePremiumPlan,
  setPremiumPlan,
  updateHealthcareService,
  setHealthcareServices,
  updateReimbursement,
  setReimbursement,
  resetForm,
} = premiumPlanSlice.actions;

export default premiumPlanSlice.reducer;
