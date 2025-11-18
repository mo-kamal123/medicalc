import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  standardPlan: {
    white: {
      annuallimit: '_10000',
      appliednetwork: 'B',
      geography: 'Egypt',
      serviceaccessibility: 'Pre-approval Required',
    },
    silver: {
      annuallimit: '_50000',
      appliednetwork: 'A',
      geography: 'Egypt',
      serviceaccessibility: 'Direct Access',
    },
    gold: {
      annuallimit: '_100000',
      appliednetwork: 'A',
      geography: 'Egypt',
      serviceaccessibility: 'Direct Access',
    },
  },
  healthcareServices: {
    white: {
      roomType: 'LUX',
      inpatientCopayment: '_10',
      outpatientCopayment: '_15',
      prescriptionMedicinesCopayment: '_20',
      dentalCopayment: '_20',
      dentalMoney: '_500',
      opticalCopayment: '_10',
      opticalAnnualFees: '_500',
      physioTherapyCount: '_12',
      chronicAndPreExisting: '_5000',
      maternityCare: 'Wait10Month',
    },
    silver: {
      roomType: 'PRIVATE',
      inpatientCopayment: '_5',
      outpatientCopayment: '_10',
      prescriptionMedicinesCopayment: '_15',
      dentalCopayment: '_10',
      dentalMoney: '_750',
      opticalCopayment: '_10',
      opticalAnnualFees: '_500',
      physioTherapyCount: '_24',
      chronicAndPreExisting: '_10000',
      maternityCare: '_5000',
    },
    gold: {
      roomType: 'LUX',
      inpatientCopayment: '_0',
      outpatientCopayment: '_0',
      prescriptionMedicinesCopayment: '_10',
      dentalCopayment: '_0',
      dentalMoney: '_1000',
      opticalCopayment: '_10',
      opticalAnnualFees: '_500',
      physioTherapyCount: '_Covered',
      chronicAndPreExisting: '_15000',
      maternityCare: '_10000',
    },
  },
  reimbursement: {
    white: {
      reimbursement: '_70',
      doctorVisitCopayment: '_10',
      doctorVisitMoney: '_150',
      pricingTerms: '',
      laboratoryAndScans: '',
      paymentCycle: '',
    },
    silver: {
      reimbursement: '_80',
      doctorVisitCopayment: '_10',
      doctorVisitMoney: '_200',
      pricingTerms: '',
      laboratoryAndScans: '',
      paymentCycle: '',
    },
    gold: {
      reimbursement: '_100',
      doctorVisitCopayment: '_0',
      doctorVisitMoney: '_300',
      pricingTerms: '',
      laboratoryAndScans: '',
      paymentCycle: '',
    },
  },
};

// const initialState = {
//   standardPlan: {
//     whitePlan: {
//       annualLimit: '',
//       appliedNetwork: 'B',
//       geography: 'Egypt',
//       serviceAccessibility: 'pre_approval', // simplified value form
//     },
//     silverPlan: {
//       annualLimit: '50000',
//       appliedNetwork: 'A',
//       geography: 'Egypt',
//       serviceAccessibility: 'direct_access',
//     },
//     goldPlan: {
//       annualLimit: '100000',
//       appliedNetwork: 'A',
//       geography: 'Egypt',
//       serviceAccessibility: 'direct_access',
//     },
//   },
//   healthcareServices: {
//     whitePlan: {
//       roomType: '',
//       inpatientCopayment: '10',
//       outpatientCopayment: '15',
//       prescriptionMedicinesCopayment: '20',
//       dentalCopayment: '20',
//       dentalMoney: '500',
//       opticalCopayment: '10',
//       opticalAnnualFees: '500',
//       physioTherapyCount: '12',
//       chronicAndPreExisting: '5000',
//       maternityCare: 'wait_10',
//     },
//     silverPlan: {
//       roomType: 'private',
//       inpatientCopayment: '5',
//       outpatientCopayment: '10',
//       prescriptionMedicinesCopayment: '15',
//       dentalCopayment: '10',
//       dentalMoney: '750',
//       opticalCopayment: '10',
//       opticalAnnualFees: '500',
//       physioTherapyCount: '24',
//       chronicAndPreExisting: '10000',
//       maternityCare: '5000',
//     },
//     goldPlan: {
//       roomType: 'lux',
//       inpatientCopayment: '0',
//       outpatientCopayment: '0',
//       prescriptionMedicinesCopayment: '10',
//       dentalCopayment: '0',
//       dentalMoney: '1000',
//       opticalCopayment: '10',
//       opticalAnnualFees: '500',
//       physioTherapyCount: 'covered',
//       chronicAndPreExisting: '15000',
//       maternityCare: '10000',
//     },
//   },
//   reimbursement: {
//     whitePlan: {
//       reimbursement: '70',
//       doctorVisitCopayment: '10',
//       doctorVisitMoney: '150',
//       pricingTerms: '',
//       laboratoryAndScans: '',
//       paymentCycle: '',
//     },
//     silverPlan: {
//       reimbursement: '80',
//       doctorVisitCopayment: '10',
//       doctorVisitMoney: '200',
//       pricingTerms: '',
//       laboratoryAndScans: '',
//       paymentCycle: '',
//     },
//     goldPlan: {
//       reimbursement: '100',
//       doctorVisitCopayment: '0',
//       doctorVisitMoney: '300',
//       pricingTerms: '',
//       laboratoryAndScans: '',
//       paymentCycle: '',
//     },
//   },
// };

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
