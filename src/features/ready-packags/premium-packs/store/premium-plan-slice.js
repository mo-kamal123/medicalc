import { createSlice } from '@reduxjs/toolkit';

const initialPremiumState = {
  premiumPlan: {
    planOne: {
      annuallimit: '_25000',
      appliednetwork: 'A',
      geography: 'Egypt',
      serviceaccessibility: 'Direct Access',
    },
    planTwo: {
      annuallimit: '_50000',
      appliednetwork: 'A',
      geography: 'Worldwide',
      serviceaccessibility: 'Direct Access',
    },
    planThree: {
      annuallimit: '_75000',
      appliednetwork: 'B',
      geography: 'Mena',
      serviceaccessibility: 'Pre-approval Required',
    },
    planFour: {
      annuallimit: '_100000',
      appliednetwork: 'A',
      geography: 'Worldwide',
      serviceaccessibility: 'Direct Access',
    },
  },
  healthcareServices: {
    planOne: {
      roomType: 'SHARED',
      inpatientCopayment: '_10',
      outpatientCopayment: '_0',
      prescriptionMedicinesCopayment: '_20',
      dentalCopayment: '_20',
      dentalMoney: '_500',
      opticalCopayment: '_10',
      opticalAnnualFees: '_500',
      physioTherapyCount: '_covered',
      chronicAndPreExisting: '_5000',
      maternityCare: '_3000',
    },
    planTwo: {
      roomType: 'PRIVATE',
      inpatientCopayment: '_5',
      outpatientCopayment: '_0',
      prescriptionMedicinesCopayment: '_15',
      dentalCopayment: '_10',
      dentalMoney: '_750',
      opticalCopayment: '_10',
      opticalAnnualFees: '_500',
      physioTherapyCount: '_36',
      chronicAndPreExisting: '_10000',
      maternityCare: '_5000',
    },
    planThree: {
      roomType: 'PRIVATE',
      inpatientCopayment: '_0',
      outpatientCopayment: '_10',
      prescriptionMedicinesCopayment: '_10',
      dentalCopayment: '_0',
      dentalMoney: '_1000',
      opticalCopayment: '_10',
      opticalAnnualFees: '_500',
      physioTherapyCount: '_24',
      chronicAndPreExisting: '_15000',
      maternityCare: '_10000',
    },
    planFour: {
      roomType: 'LUX',
      inpatientCopayment: '_0',
      outpatientCopayment: '_15',
      prescriptionMedicinesCopayment: '_10',
      dentalCopayment: '_0',
      dentalMoney: '_1500',
      opticalCopayment: '_0',
      opticalAnnualFees: '_500',
      physioTherapyCount: '_12',
      chronicAndPreExisting: '_20000',
      maternityCare: '_15000',
    },
  },
  reimbursement: {
    planOne: {
      reimbursement: '_70',
      doctorVisitCopayment: '_10',
      doctorVisitMoney: '_150',
    },
    planTwo: {
      reimbursement: '_80',
      doctorVisitCopayment: '_10',
      doctorVisitMoney: '_200',
    },
    planThree: {
      reimbursement: '_80',
      doctorVisitCopayment: '_10',
      doctorVisitMoney: '_300',
    },
    planFour: {
      reimbursement: '_100',
      doctorVisitCopayment: '_0',
      doctorVisitMoney: '_300',
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
