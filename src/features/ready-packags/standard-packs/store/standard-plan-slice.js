import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  standardPlan: {
    white: {
      annuallimit: { value: '_10000', title: '10,000' },
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
      roomType: { value: 'LUX', title: 'LUX' },
      inpatientCopayment: { value: '_10', title: '10%' },
      outpatientCopayment: { value: '_15', title: '15%' },
      prescriptionMedicinesCopayment: { value: '_20', title: '20%' },
      dentalCopayment: { value: '_20', title: '20%' },
      dentalMoney: { value: '_500', title: '500' },
      opticalCopayment: { value: '_10', title: '10%' },
      opticalAnnualFees: { value: '_500', title: '500' },
      physioTherapyCount: { value: '_12', title: '12' },
      chronicAndPreExisting: { value: '_5000', title: '5,000' },
      maternityCare: { value: 'Wait10Month', title: 'Wait 10 Months' },
    },

    silver: {
      roomType: { value: 'PRIVATE', title: 'Private' },
      inpatientCopayment: { value: '_5', title: '5%' },
      outpatientCopayment: { value: '_10', title: '10%' },
      prescriptionMedicinesCopayment: { value: '_15', title: '15%' },
      dentalCopayment: { value: '_10', title: '10%' },
      dentalMoney: { value: '_750', title: '750' },
      opticalCopayment: { value: '_10', title: '10%' },
      opticalAnnualFees: { value: '_500', title: '500' },
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
      opticalCopayment: { value: '_10', title: '10%' },
      opticalAnnualFees: { value: '_500', title: '500' },
      physioTherapyCount: { value: '_Covered', title: 'Covered' },
      chronicAndPreExisting: { value: '_15000', title: '15,000' },
      maternityCare: { value: '_10000', title: '10,000' },
    },
  },

  reimbursement: {
    white: {
      reimbursement: { value: '_70', title: '70%' },
      doctorVisitCopayment: { value: '_10', title: '10%' },
      doctorVisitMoney: { value: '_150', title: '150' },
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
