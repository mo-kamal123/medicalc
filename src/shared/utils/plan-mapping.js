// plan-mapping.js
export const PLAN_KEY_MAP = {
  planOne: 'Plan 1',
  planTwo: 'Plan 2',
  planThree: 'Plan 3',
  planFour: 'Plan 4',
  planFive: 'Plan 5',
  planSix: 'Plan 6',
  planSeven: 'Plan 7',
  planEight: 'Plan 8',
  planNine: 'Plan 9',
  planTen: 'Plan 10',
};

export const getPlanDisplayName = (camelKey) =>
  PLAN_KEY_MAP[camelKey] || camelKey;

export const getPlanKey = (title) => {
  if (!title) return title;
  const normalized = title.toLowerCase().replace(/\s+/g, '');

  const reverseMap = {
    plan1: 'planOne',
    plan2: 'planTwo',
    plan3: 'planThree',
    plan4: 'planFour',
    plan5: 'planFive',
    plan6: 'planSix',
    plan7: 'planSeven',
    plan8: 'planEight',
    plan9: 'planNine',
    plan10: 'planTen',
  };

  return reverseMap[normalized] || title;
};
