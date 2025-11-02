export const generatePlans = (count, baseInputs) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    header: {
      title: `Plan ${i + 1}`,
    },
    ...(baseInputs && { inputs: baseInputs }), // ✅ conditionally add inputs
  }));
};
