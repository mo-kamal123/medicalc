export const generatePlanMeta = (count) => {
  return Array.from({ length: count }, (_, i) => {
    return {
      key: `plan${i + 1}`,
      meta: {
        name: `Plan ${i + 1}`,
      },
    };
  }).reduce((acc, { key, meta }) => {
    acc[key] = meta;
    return acc;
  }, {});
};
