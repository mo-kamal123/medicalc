/**
 * Extracts .value if object exists, otherwise returns primitive
 */
const extractValue = (field) => {
  if (!field) return '';
  return typeof field === 'object' && field.value !== undefined
    ? field.value
    : field;
};

export const transformData = (clientName, planType, data, plans) => {
  const limits = plans.map((plan) => {
    const main = data?.[planType]?.[plan] || {};
    const healthcare = data?.healthcareServices?.[plan] || {};
    const reimbursement = data?.reimbursement?.[plan] || {};

    return {
      name: plan,

      // Annual limit (first use value, fallback to raw)
      limit: extractValue(main?.annuallimit),

      benefits: {
        roomType: extractValue(healthcare?.roomType),
        inpatientCopayment: extractValue(healthcare?.inpatientCopayment),
        chronicAndPreExisting: extractValue(healthcare?.chronicAndPreExisting),
        maternaty: extractValue(healthcare?.maternityCare),
        ambulatoryCopayment: extractValue(healthcare?.outpatientCopayment),
        physioTherapyCount: extractValue(healthcare?.physioTherapyCount),
        prescriptionMedicinesCopayment: extractValue(
          healthcare?.prescriptionMedicinesCopayment
        ),
        doctorVisitCopayment: extractValue(reimbursement?.doctorVisitCopayment),
        doctorVisitMoney: extractValue(reimbursement?.doctorVisitMoney),
        Reimbursement: extractValue(reimbursement?.reimbursement),
        dentalMoney: extractValue(healthcare?.dentalMoney),
        dentalCopayment: extractValue(healthcare?.dentalCopayment),
        opticalAnnualFees: extractValue(healthcare?.opticalAnnualFees),
        opticalCopayment: extractValue(healthcare?.opticalCopayment),
      },

      reimbursement: {
        pricingTerms: extractValue(reimbursement?.pricingTerms),
        labAndScan: extractValue(reimbursement?.laboratoryAndScans),
        paymentCycle: extractValue(reimbursement?.paymentCycle),
      },

      serviceAccessibility: extractValue(main?.serviceaccessibility),
      network: extractValue(main?.appliednetwork),
      geography: extractValue(main?.geography),
    };
  });

  return {
    clientName,
    limits,
  };
};
