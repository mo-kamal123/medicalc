/**
 * Form Transformation Utility
 *
 * Utility functions for transforming form data into the required format
 * for API calls and calculations.
 */

/**
 * Transform Data
 *
 * Transforms client data, plan information, and related data into a structured format
 * for submission to calculation APIs.
 *
 * Combines:
 * - Client information (name)
 * - Plan data (annual limits, networks, geography, service accessibility)
 * - Healthcare services (room type, copayments, benefits)
 * - Reimbursement details (pricing terms, payment cycles)
 *
 * @param {string} clientName - Name of the client
 * @param {string} planType - Type of plan (e.g., 'standardPlan', 'premiumPlan', 'customPlan')
 * @param {Object} data - Raw form data containing plan, healthcare, and reimbursement information
 * @param {Array<string>} plans - Array of plan names (e.g., ['white', 'silver', 'gold'])
 * @returns {Object} Transformed data object with client name and limits array
 *
 * @example
 * const transformed = transformData(
 *   'John Doe',
 *   'standardPlan',
 *   {
 *     standardPlan: { white: { annuallimit: '50000', ... }, ... },
 *     healthcareServices: { white: { roomType: 'private', ... }, ... },
 *     reimbursement: { white: { reimbursement: '_70', ... }, ... }
 *   },
 *   ['white', 'silver', 'gold']
 * );
 */
export const transformData = (clientName, planType, data, plans) => {
  const limits = plans.map((plan) => {
    const planData = {
      mainData: data?.[planType]?.[plan] || {},
      healthcare: data?.healthcareServices?.[plan] || {},
      reimbursement: data?.reimbursement?.[plan] || {},
    };

    return {
      name: plan,
      limit: planData.mainData?.annuallimit || '',
      benefits: {
        roomType: planData.healthcare?.roomType || '',
        inpatientCopayment: planData.healthcare?.inpatientCopayment || '',
        chronicAndPreExisting: planData.healthcare?.chronicAndPreExisting || '',
        maternaty: planData.healthcare?.maternityCare || '',
        ambulatoryCopayment: planData.healthcare?.outpatientCopayment || '',
        physioTherapyCount: planData.healthcare?.physioTherapyCount || '',
        prescriptionMedicinesCopayment:
          planData.healthcare?.prescriptionMedicinesCopayment || '',
        doctorVisitCopayment:
          planData.reimbursement?.doctorVisitCopayment || '',
        doctorVisitMoney: planData.reimbursement?.doctorVisitMoney || '',
        Reimbursement: planData.reimbursement?.reimbursement || '',
        dentalMoney: planData.healthcare?.dentalMoney || '',
        dentalCopayment: planData.healthcare?.dentalCopayment || '',
        opticalAnnualFees: planData.healthcare?.opticalAnnualFees || '',
        opticalCopayment: planData.healthcare?.opticalCopayment || '',
      },
      reimbursement: {
        pricingTerms: planData.reimbursement?.pricingTerms || '',
        labAndScan: planData.reimbursement?.laboratoryAndScans || '',
        paymentCycle: planData.reimbursement?.paymentCycle || '',
      },
      serviceAccessibility: planData.mainData?.serviceaccessibility || '',
      network: planData.mainData?.appliednetwork || '',
      geography: planData.mainData?.geography || '',
    };
  });

  return {
    clientName,
    limits,
  };
};
