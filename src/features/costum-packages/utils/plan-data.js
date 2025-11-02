export const generatePlans = (count = 3) => {
  const plans = {};
  for (let i = 1; i <= count; i++) {
    const planKey = `plan${i}`; // plan1, plan2, etc.
    plans[planKey] = {};

    ageGroups.forEach((age) => {
      // Random or formula-based value generation
      // For example, base = 2000, add random 0-5000
      const base = 2000;
      const variation = Math.floor(Math.random() * 5000);
      plans[planKey][age] = base + variation;
    });
  }
  return plans;
};
