// const formatNumber = (value) => {
//     // If value is a number, add _10 suffix
//     if (typeof value === "number") return `${value}_10`;

//     // Also handle numeric strings like "5000" or "EGP 500"
//     const numericMatch = value && value.match(/\d+/);
//     if (numericMatch) {
//       return `_${numericMatch[0]}`;
//     }

//     // Otherwise, return as is
//     return value;
//   };

export const transformData = (clientName, planType, data, plans) => {
  // const plans = ['white', 'silver', 'gold'];

  const limits = plans.map((plan) => ({
    name: plan,
    limit: data[planType][plan].annualLimit,
    benefits: {
      roomType: data.healthcareServices[plan].roomType,
      inpatnientCopayment: data.healthcareServices[plan].inpatientCopayment,
      chronicAndPreExisting:
        data.healthcareServices[plan].chronicAndPreExisting,
      maternaty: data.healthcareServices[plan].maternityCare,
      ambulatoryCopayment: data.healthcareServices[plan].outpatientCopayment,
      physioTherapyCount: data.healthcareServices[plan].physioTherapyCount,
      prescriptionMedicinesCopayment:
        data.healthcareServices[plan].prescriptionMedicinesCopayment,
      doctorVisitCopayment: data.reimbursement[plan].doctorVisitCopayment,
      doctorVisitMoney: data.reimbursement[plan].doctorVisitMoney,
      Reimbursement: data.reimbursement[plan].reimbursement,
      dentalMoney: data.healthcareServices[plan].dentalMoney,
      dentalCopayment: data.healthcareServices[plan].dentalCopayment,
      opticalAnnualFees: data.healthcareServices[plan].opticalAnnualFees,
      opticalCopayment: data.healthcareServices[plan].opticalCopayment,
    },
    reimbursement: {
      pricingTerms: data.reimbursement[plan].pricingTerms,
      labAndScan: data.reimbursement[plan].laboratoryAndScans,
      paymentCycle: data.reimbursement[plan].paymentCycle,
    },
    // serviceAccessibility: data.standardPlan[plan].serviceAccessibility,
    // network: data.standardPlan[plan].appliedNetwork,
    // geography: data.standardPlan[plan].geography,
  }));
  return {
    clientName,
    limits,
  };
};

// console.log(
//   transformData('mooo', {
//     standardPlan: {
//       white: {
//         annualLimit: '_10000',
//         appliedNetwork: 'B',
//         geography: 'Egypt',
//         serviceAccessibility: 'Pre-approval Required',
//       },
//       silver: {
//         annualLimit: '_50000',
//         appliedNetwork: 'A',
//         geography: 'Egypt',
//         serviceAccessibility: 'Direct Access',
//       },
//       gold: {
//         annualLimit: '_100000',
//         appliedNetwork: 'A',
//         geography: 'Egypt',
//         serviceAccessibility: 'Direct Access',
//       },
//     },
//     healthcareServices: {
//       white: {
//         roomType: '',
//         inpatientCopayment: '_10',
//         outpatientCopayment: '_15',
//         prescriptionMedicinesCopayment: '_20',
//         dentalCopayment: '_20',
//         dentalMoney: '_500',
//         opticalCopayment: '_10',
//         opticalAnnualFees: '_500',
//         physioTherapyCount: '_12',
//         chronicAndPreExisting: '5,000',
//         maternityCare: 'Wait 10 Month',
//       },
//       silver: {
//         roomType: 'PRIVATE',
//         inpatientCopayment: '_5',
//         outpatientCopayment: '_10',
//         prescriptionMedicinesCopayment: '_15',
//         dentalCopayment: '_10',
//         dentalMoney: '_750',
//         opticalCopayment: '_10',
//         opticalAnnualFees: '_500',
//         physioTherapyCount: '_24',
//         chronicAndPreExisting: '_10000',
//         maternityCare: '_5000',
//       },
//       gold: {
//         roomType: 'LUX',
//         inpatientCopayment: '_0',
//         outpatientCopayment: '_0',
//         prescriptionMedicinesCopayment: '_10',
//         dentalCopayment: '_0',
//         dentalMoney: '_1000',
//         opticalCopayment: '_10',
//         opticalAnnualFees: '_500',
//         physioTherapyCount: '_Coverd',
//         chronicAndPreExisting: '_15000',
//         maternityCare: '_10000',
//       },
//     },
//     reimbursement: {
//       white: {
//         reimbursement: '_70',
//         doctorVisitCopayment: '_10',
//         doctorVisitMoney: '_150',
//         pricingTerms: '',
//         laboratoryAndScans: '',
//         paymentCycle: '',
//       },
//       silver: {
//         reimbursement: '_80',
//         doctorVisitCopayment: '_10',
//         doctorVisitMoney: '_200',
//         pricingTerms: '',
//         laboratoryAndScans: '',
//         paymentCycle: '',
//       },
//       gold: {
//         reimbursement: '_100',
//         doctorVisitCopayment: '_0',
//         doctorVisitMoney: '_300',
//         pricingTerms: '',
//         laboratoryAndScans: '',
//         paymentCycle: '',
//       },
//     },
//   })
// );
