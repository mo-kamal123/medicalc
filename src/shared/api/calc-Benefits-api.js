import axiosInstance from '../../app/api/axiosInstance';

/**
 * Benefits API
 *
 * API functions for calculating benefits.
 *
 * Note: Authentication token is automatically added by axios interceptors,
 * so manual token handling is not required in these functions.
 */

/**
 * Calculate Benefits
 *
 * Performs calculation for benefits based on provided credentials.
 * The authentication token is automatically included via axios interceptors.
 *
 * @param {Object} credentials - Calculation parameters and data
 * @returns {Promise<Object>} Response data containing benefits calculation results
 *
 * @example
 * const result = await CalculationBenefits({
 *   planId: 123,
 *   // ... other calculation parameters
 * });
 */
export const CalculationBenefits = async (credentials) => {
  // Make POST request to calculate benefits endpoint
  // Token is automatically added by axios interceptor from localStorage
  const response = await axiosInstance.post(
    'en/CalculateTob/calculateBenefits',
    credentials
  );
  return response.data;
};
