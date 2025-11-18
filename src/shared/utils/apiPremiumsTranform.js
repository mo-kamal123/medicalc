export const transformApiDataToPlans = (apiResponse, icons = {}) => {
  const plans = {};
  const PLAN_META = {};

  // Transform each plan in the data array
  apiResponse.data.forEach((plan) => {
    const { name, limit, premiums } = plan;

    // Add premiums to plans object using limit as key
    plans[limit] = premiums;

    // Create PLAN_META entry
    PLAN_META[limit] = {
      name: name,
      color: getColorByPlanName(name),
      icon: icons[name] || icons[limit] || null,
    };
  });

  return { plans, PLAN_META };
};

/**
 * Helper function to assign colors based on plan name
 */
const getColorByPlanName = (name) => {
  const colorMap = {
    gold: 'text-yellow-400',
    silver: 'text-gray-400',
    white: 'text-blue-400',
    bronze: 'text-orange-400',
    platinum: 'text-purple-400',
  };

  return colorMap[name.toLowerCase()] || 'text-gray-600';
};

/**
 * Example usage with React Icons
 */
export const getDefaultIcons = () => {
  // Import these in your component:
  // import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';

  return {
    Gold: '<FaCrown className="text-yellow-400 text-2xl" />',
    Silver: '<FaMedal className="text-gray-400 text-2xl" />',
    White: '<FaStar className="text-blue-400 text-2xl" />',
  };
};
