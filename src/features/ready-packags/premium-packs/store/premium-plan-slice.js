import { createSlice } from '@reduxjs/toolkit';

const initialPremiumState = {
  premiumPlan: {
    planOne: {
      annuallimit: { value: '_25000', title: '25,000' },
      appliednetwork: { value: 'A', title: 'A' },
      geography: { value: 'Egypt', title: 'Egypt' },
      serviceaccessibility: { value: 'Direct Access', title: 'Direct Access' },
    },
    planTwo: {
      annuallimit: { value: '_50000', title: '50,000' },
      appliednetwork: { value: 'A', title: 'A' },
      geography: { value: 'Egypt', title: 'Egypt' },
      serviceaccessibility: { value: 'Direct Access', title: 'Direct Access' },
    },
    planThree: {
      annuallimit: { value: '_100000', title: '100,000' },
      appliednetwork: { value: 'A', title: 'A' },
      geography: { value: 'Egypt', title: 'Egypt' },
      serviceaccessibility: {
        value: 'Direct Access',
        title: 'Direct Access',
      },
    },
    planFour: {
      annuallimit: { value: '_200000', title: '200,000' },
      appliednetwork: { value: 'A', title: 'A' },
      geography: { value: 'Egypt', title: 'Egypt' },
      serviceaccessibility: { value: 'Direct Access', title: 'Direct Access' },
    },
  },

  healthcareServices: {
    planOne: {
      roomType: { value: 'SHARED', title: 'Shared' },
      inpatientCopayment: { value: '_10', title: '10%' },
      outpatientCopayment: { value: '_15', title: '15%' },
      prescriptionMedicinesCopayment: { value: '_25', title: '25%' },
      dentalCopayment: { value: '_30', title: '30%' },
      dentalMoney: { value: '_500', title: '500' },
      opticalCopayment: { value: '_30', title: '30%' },
      opticalAnnualFees: { value: '_400', title: '400' },
      physioTherapyCount: { value: '_12', title: '12 Session' },
      chronicAndPreExisting: { value: '_10000', title: '10,000' },
      maternityCare: { value: '_3000', title: '3,000' },
    },

    planTwo: {
      roomType: { value: 'PRIVATE', title: 'Private' },
      inpatientCopayment: { value: '_5', title: '5%' },
      outpatientCopayment: { value: '_10', title: '10%' },
      prescriptionMedicinesCopayment: { value: '_20', title: '20%' },
      dentalCopayment: { value: '_10', title: '10%' },
      dentalMoney: { value: '_1000', title: '1,000' },
      opticalCopayment: { value: '_10', title: '10%' },
      opticalAnnualFees: { value: '_500', title: '500' },
      physioTherapyCount: { value: '24', title: '24 Session' },
      chronicAndPreExisting: { value: '_15000', title: '15,000' },
      maternityCare: { value: '_5000', title: '5,000' },
    },

    planThree: {
      roomType: { value: 'PRIVATE', title: 'Private' },
      inpatientCopayment: { value: '_0', title: '0%' },
      outpatientCopayment: { value: '_0', title: '0%' },
      prescriptionMedicinesCopayment: { value: '_15', title: '15%' },
      dentalCopayment: { value: '_10', title: '10%' },
      dentalMoney: { value: '_1200', title: '1,200' },
      opticalCopayment: { value: '_10', title: '10%' },
      opticalAnnualFees: { value: '_750', title: '750' },
      physioTherapyCount: { value: '_36', title: '36 Session' },
      chronicAndPreExisting: { value: '_20000', title: '20,000' },
      maternityCare: { value: '_8000', title: '8,000' },
    },

    planFour: {
      roomType: { value: 'LUX', title: 'Lux' },
      inpatientCopayment: { value: '_0', title: '0%' },
      outpatientCopayment: { value: '_0', title: '0%' },
      prescriptionMedicinesCopayment: { value: '_10', title: '10%' },
      dentalCopayment: { value: '_0', title: '0%' },
      dentalMoney: { value: '_1500', title: '1,500' },
      opticalCopayment: { value: '_0', title: '0%' },
      opticalAnnualFees: { value: '_1000', title: '1,000' },
      physioTherapyCount: { value: '_Covered', title: 'Covered' },
      chronicAndPreExisting: { value: '_25000', title: '25,000' },
      maternityCare: { value: '_10000', title: '10,000' },
    },
  },

  reimbursement: {
    planOne: {
      reimbursement: { value: '_70', title: '70%' },
      doctorVisitCopayment: { value: '_15', title: '15%' },
      doctorVisitMoney: { value: '_150', title: '150' },
      pricingTerms: { value: 'Welcare Hospital', title: 'Welcare Hospital' },
      laboratoryAndScans: {
        value: 'Nile Center for Radiology and Analysis',
        title: 'Nile Center for Radiology and Analysis',
      },
      paymentCycle: { value: '21', title: '21 Days' },
    },
    planTwo: {
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
    planThree: {
      reimbursement: { value: '_80', title: '80%' },
      doctorVisitCopayment: { value: '_0', title: '0%' },
      doctorVisitMoney: { value: '_200', title: '200' },
      pricingTerms: { value: 'Welcare Hospital', title: 'Welcare Hospital' },
      laboratoryAndScans: {
        value: 'Nile Center for Radiology and Analysis',
        title: 'Nile Center for Radiology and Analysis',
      },
      paymentCycle: { value: '21', title: '21 Days' },
    },
    planFour: {
      reimbursement: { value: '_100', title: '100%' },
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
