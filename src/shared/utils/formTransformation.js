export const transformData = (clientName, planType, data, plans) => {
  const limits = plans.map((plan) => {
    console.log( data[planType][plan]);
    console.log(plan);

    const planData = {
      mainData: data[planType][plan],
      healthcare: data?.healthcareServices?.[plan],
      reimbursement: data?.reimbursement?.[plan],
      // standard: data?.standardPlan?.[plan], // Uncomment if needed
    };

    console.log("planData:", planData);

    return {
      name: plan,
      limit: planData.mainData.annuallimit || "",
      benefits: {
        roomType: planData.healthcare?.roomType || "",
        inpatientCopayment: planData.healthcare?.inpatientCopayment || "",
        chronicAndPreExisting: planData.healthcare?.chronicAndPreExisting || "",
        maternaty: planData.healthcare?.maternityCare || "",
        ambulatoryCopayment: planData.healthcare?.outpatientCopayment || "",
        physioTherapyCount: planData.healthcare?.physioTherapyCount || "",
        prescriptionMedicinesCopayment:
          planData.healthcare?.prescriptionMedicinesCopayment || "",
        doctorVisitCopayment: planData.reimbursement?.doctorVisitCopayment || "",
        doctorVisitMoney: planData.reimbursement?.doctorVisitMoney || "",
        Reimbursement: planData.reimbursement?.reimbursement || "",
        dentalMoney: planData.healthcare?.dentalMoney || "",
        dentalCopayment: planData.healthcare?.dentalCopayment || "",
        opticalAnnualFees: planData.healthcare?.opticalAnnualFees || "",
        opticalCopayment: planData.healthcare?.opticalCopayment || "",
      },
      reimbursement: {
        pricingTerms: planData.reimbursement?.pricingTerms || "",
        labAndScan: planData.reimbursement?.laboratoryAndScans || "",
        paymentCycle: planData.reimbursement?.paymentCycle || "",
      },
      serviceAccessibility: planData.mainData?.serviceaccessibility || "",
      network: planData.mainData?.appliednetwork || "",
      geography: planData.mainData?.geography || "",
    };
  });

  console.log("✅ Final transformed data:", limits);

  return {
    clientName,
    limits,
  };
};
