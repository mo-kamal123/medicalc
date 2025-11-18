import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { CalculationTob } from './plans-api';
import { addCalculationResult } from '../store/calculation-result-slice';
// import { toast } from 'sonner';

/**
 * Custom Hook: useCalculateTob
 *
 * React Query mutation hook for calculating TOB (Terms of Business).
 * Manages TOB calculation API call and stores results in Redux.
 *
 * Features:
 * - Makes TOB calculation API request
 * - Stores calculation results in Redux state
 * - Supports optional success callback
 * - Handles errors appropriately
 *
 * @param {Function} onSuccessCallBack - Optional callback function executed on successful calculation
 * @returns {Object} Mutation object from React Query with:
 *   - mutate: Function to trigger TOB calculation
 *   - isLoading: Boolean indicating loading state
 *   - isError: Boolean indicating error state
 *   - error: Error object if request failed
 *   - data: Response data on success
 *
 * @example
 * const { mutate: calculateTob, isLoading } = useCalculateTob((data) => {
 *   console.log('Calculation complete:', data);
 * });
 *
 * // Trigger calculation
 * calculateTob(calculationParams);
 */
export const useCalculateTob = (onSuccessCallBack) => {
  const dispatch = useDispatch();

  return useMutation({
    // Mutation function - TOB calculation API call
    mutationFn: CalculationTob,

    // Success handler - called when calculation is successful
    onSuccess: (data) => {
      // Log calculation result for debugging
      console.log('TOB Calculation result:', data);

      // Store calculation result in Redux state for access across components
      dispatch(addCalculationResult(data));

      // Execute optional success callback if provided
      // Useful for navigation or additional logic after successful calculation
      if (onSuccessCallBack) {
        onSuccessCallBack(data);
      }

      // ✅ Optional: Show success toast notification
      // toast.success('Calculation completed successfully!');
    },

    // Error handler - called when calculation fails
    onError: (error) => {
      // Log error for debugging
      console.error('TOB Calculation error:', error);

      // ❌ Optional: Show error toast notification
      // toast.error(error.response?.data?.message || 'Calculation failed');
    },

    // Disable automatic retries for calculations
    // Failed calculations should not be automatically retried
    retry: false,
  });
};
