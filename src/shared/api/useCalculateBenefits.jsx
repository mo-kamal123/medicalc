import { useMutation } from '@tanstack/react-query';
import { CalculationBenefits } from './Benefits-api';

/**
 * Custom Hook: useCalculateBenefits
 *
 * React Query mutation hook for calculating benefits.
 * Manages benefits calculation API call and provides success/error handling.
 *
 * Features:
 * - Makes benefits calculation API request
 * - Supports optional success callback
 * - Handles errors appropriately
 *
 * @param {Function} onSuccessCallBack - Optional callback function executed on successful calculation
 * @returns {Object} Mutation object from React Query with:
 *   - mutate: Function to trigger benefits calculation
 *   - isLoading: Boolean indicating loading state
 *   - isError: Boolean indicating error state
 *   - error: Error object if request failed
 *   - data: Response data on success
 *
 * @example
 * const { mutate: calculateBenefits, isLoading } = useCalculateBenefits((data) => {
 *   console.log('Benefits calculation complete:', data);
 * });
 *
 * // Trigger calculation
 * calculateBenefits(benefitsParams);
 */
export const useCalculateBenefits = (onSuccessCallBack) => {
  return useMutation({
    // Mutation function - Benefits calculation API call
    mutationFn: CalculationBenefits,

    // Success handler - called when calculation is successful
    onSuccess: (data) => {
      // Log calculation result for debugging
      console.log('Benefits Calculation result:', data);

      // Execute optional success callback if provided
      // Useful for navigation or additional logic after successful calculation
      if (onSuccessCallBack) {
        onSuccessCallBack(data);
      }

      // ✅ Optional: Show success toast notification
      // toast.success('Benefits calculation completed successfully!');
    },

    // Error handler - called when calculation fails
    onError: (error) => {
      // Log error for debugging
      console.error('Benefits Calculation error:', error);

      // ❌ Optional: Show error toast notification
      // toast.error(error.response?.data?.message || 'Benefits calculation failed');
    },

    // Disable automatic retries for calculations
    // Failed calculations should not be automatically retried
    retry: false,
  });
};
